#!/usr/bin/env python3
"""Add vocal stations and Venice Classic Radio to the committed Free Radio catalog.

Reads src/free-radio.json, fills a homepage on every existing entry, appends
stations that are not already present, and splices the same JSON into the
iOS catalog payload. Stream URLs already in the file are not rewritten.
"""

from __future__ import annotations

import json
import re
import ssl
import urllib.error
import urllib.parse
import urllib.request
from collections import OrderedDict
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
JSON_PATH = ROOT / "src" / "free-radio.json"
SWIFT_PATH = ROOT / "ios" / "Sources" / "CiderRadio" / "FreeRadioCatalog.swift"
UA = "FreeRadio/1.1 (station check)"
CTX = ssl.create_default_context()

SOURCE_HOME = {
    "SomaFM": "https://somafm.com/",
    "Radio Browser": "https://www.radio-browser.info/",
    "Icecast": "https://dir.xiph.org/",
    "TuneIn": "https://tunein.com/",
    "Venice Classic Radio": "https://veniceclassicradio.eu/",
}


def stream_key(url: str | None) -> str:
    if not url:
        return ""
    parts = urllib.parse.urlsplit(url.strip())
    host = (parts.hostname or "").lower()
    if host.startswith("www."):
        host = host[4:]
    if re.fullmatch(r"ice\d+\.somafm\.com", host):
        host = "somafm.com"
    port = f":{parts.port}" if parts.port and parts.port not in (80, 443) else ""
    return f"{host}{port}{parts.path.rstrip('/').lower()}"


def slug(name: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-") or "group"


def homepage_for(station: dict) -> str:
    if station.get("homepage"):
        return station["homepage"]
    source = station.get("source") or ""
    sid = station.get("id") or ""
    if source == "SomaFM" and sid.startswith("sm-"):
        return f"https://somafm.com/{sid[3:]}/"
    if source == "TuneIn" and sid.startswith("ti-s"):
        return f"https://tunein.com/radio/{sid[3:]}/"
    return SOURCE_HOME.get(source, "")


def parse_m3u(path: Path) -> list[dict]:
    stations: list[dict] = []
    pending = None
    for line in path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if line.startswith("#EXTINF"):
            pending = line
        elif not line or line.startswith("#"):
            continue
        elif pending:
            attrs = dict(re.findall(r'([\w-]+)="([^"]*)"', pending))
            name = pending.split(",", 1)[1].strip() if "," in pending else ""
            stations.append({"name": name, "url": line, **attrs})
            pending = None
    return stations


def tunein_id(raw: str) -> str:
    gid = raw.strip()
    if gid.startswith("ti-"):
        gid = gid[3:]
    if not re.fullmatch(r"s\d+", gid):
        raise SystemExit(f"bad TuneIn guide id {raw!r}")
    return f"ti-{gid}"


def bitrate_of(url: str, name: str) -> int:
    match = re.search(r"(\d+)\s*k(?:bps|bp)?\b", f"{name} {url}", re.I)
    if not match:
        match = re.search(r"-(\d+)-mp3", url)
    if not match:
        return 0
    value = int(match.group(1))
    return value if 32 <= value <= 320 else 0


def codec_of(url: str, content_type: str) -> str:
    ctype = content_type.lower()
    if "aacp" in ctype:
        return "aac+"
    if "aac" in ctype or url.lower().endswith(".aac"):
        return "aac"
    if "mpeg" in ctype or "mp3" in ctype or ".mp3" in url.lower():
        return "mp3"
    if "ogg" in ctype or "opus" in ctype:
        return "ogg"
    return ""


def probe_once(url: str, ranged: bool) -> dict:
    headers = {"User-Agent": UA, "Icy-MetaData": "1", "Accept": "*/*"}
    if ranged:
        headers["Range"] = "bytes=0-2047"
    request = urllib.request.Request(url, headers=headers, method="GET")
    try:
        with urllib.request.urlopen(request, timeout=12, context=CTX) as response:
            ctype = (response.headers.get("Content-Type") or "").lower()
            data = response.read(512)
            head = data.lstrip()[:80].lower()
            if head.startswith(b"<html") or head.startswith(b"<!doctype"):
                return {"ok": False, "error": "html", "ctype": ctype}
            return {"ok": True, "error": "", "ctype": ctype}
    except urllib.error.HTTPError as error:
        if ranged and error.code in (400, 405, 416, 501):
            return probe_once(url, False)
        return {"ok": False, "error": f"HTTP {error.code}", "ctype": ""}
    except Exception as error:  # noqa: BLE001
        return {"ok": False, "error": f"{type(error).__name__}: {error}", "ctype": ""}


def tunein_resolves(guide: str) -> bool:
    gid = guide[3:] if guide.startswith("ti-") else guide
    url = f"https://opml.radiotime.com/Tune.ashx?id={gid}&render=json"
    request = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/json"})
    try:
        with urllib.request.urlopen(request, timeout=15, context=CTX) as response:
            data = json.loads(response.read().decode("utf-8", "replace"))
    except Exception:
        return False
    for body in data.get("body") or []:
        stream = body.get("url") if isinstance(body, dict) else ""
        if stream and "notcompatible" not in stream.lower():
            return True
    return False


def load_somafm() -> dict:
    path = Path("/tmp/somafm.json")
    if not path.exists():
        try:
            request = urllib.request.Request("https://somafm.com/channels.json", headers={"User-Agent": UA})
            with urllib.request.urlopen(request, timeout=20, context=CTX) as response:
                path.write_bytes(response.read())
        except Exception as error:  # noqa: BLE001
            print("somafm metadata unavailable", error)
            return {}
    data = json.loads(path.read_text(encoding="utf-8"))
    return {c["id"]: c for c in data.get("channels", []) if c.get("id")}


def splice_swift(payload: str) -> None:
    text = SWIFT_PATH.read_text(encoding="utf-8")
    start = text.index("    private static let payload = #\"\"\"\n")
    end = text.index("\n\"\"\"#\n    // GENERATED-PAYLOAD-END")
    updated = text[: start + len("    private static let payload = #\"\"\"\n")] + payload.rstrip("\n") + text[end:]
    if '"""#' in payload:
        raise SystemExit("payload would break the Swift raw string")
    SWIFT_PATH.write_text(updated, encoding="utf-8")


def main() -> None:
    import argparse

    parser = argparse.ArgumentParser()
    parser.add_argument("restored_m3u", type=Path)
    args = parser.parse_args()

    catalog = json.loads(JSON_PATH.read_text(encoding="utf-8"))
    stations: list[dict] = catalog["stations"]
    groups: list[dict] = catalog["groups"]
    known_ids = {s["id"] for s in stations}
    known_keys = {stream_key(s.get("streamUrl")) for s in stations if s.get("streamUrl")}

    for station in stations:
        station["homepage"] = homepage_for(station)
        station["style"] = station.get("style") or "instrumental"
        tags = station.get("tags") or ""
        if "instrumental" not in tags.lower():
            station["tags"] = f"{tags}, Instrumental" if tags else "Instrumental"

    somafm = load_somafm()
    incoming = parse_m3u(args.restored_m3u)
    prepared: list[dict] = []
    skipped: list[str] = []

    for raw in incoming:
        source = raw.get("source") or ""
        genre = raw.get("genre") or source
        url = raw["url"]
        if source == "TuneIn":
            sid = tunein_id(raw.get("tvg-id") or "")
            public = url.startswith("http") and "containers.internal" not in url
            stream = url if public else None
        elif source == "SomaFM":
            match = re.search(r"/([a-z0-9]+)-\d+-mp3$", urllib.parse.urlsplit(url).path)
            if not match:
                raise SystemExit(f"bad SomaFM url {url}")
            sid = f"sm-{match.group(1)}"
            stream = url
        elif source == "Radio Browser":
            sid = raw.get("tvg-id") or f"rb-{slug(raw['name'])}"
            if not sid.startswith("rb-"):
                sid = f"rb-{sid}"
            stream = url
        elif source == "Icecast":
            sid = raw.get("tvg-id") or f"ic-{slug(raw['name'])}"
            if not sid.startswith("ic-"):
                sid = f"ic-{sid}"
            stream = url
        else:
            raise SystemExit(f"unknown source {source}")

        if sid in known_ids or (stream and stream_key(stream) in known_keys):
            skipped.append(f"{sid} {raw['name']}")
            continue

        if source == "SomaFM":
            group_name = "SomaFM Vocal"
        elif source == "Radio Browser":
            group_name = "Radio Browser Vocal"
        elif source == "Icecast":
            group_name = "Icecast Vocal"
        else:
            group_name = genre

        image = None
        detail = "Vocal" if genre in (source, "SomaFM", "Radio Browser", "Icecast") else f"Vocal · {genre}"
        if source == "SomaFM":
            meta = somafm.get(sid[3:], {})
            description = (meta.get("description") or "").strip()
            if description:
                detail = f"Vocal · {description}"
            image = meta.get("xlimage") or meta.get("largeimage") or meta.get("image")
        homepage = raw.get("homepage") or SOURCE_HOME.get(source, "")
        prepared.append(
            {
                "id": sid,
                "name": raw["name"],
                "group_name": group_name,
                "source": source,
                "detail": detail,
                "image": image,
                "streamUrl": stream,
                "codec": "",
                "bitrate": bitrate_of(stream or "", raw["name"]),
                "uuid": None,
                "tags": f"Vocal, {source}, {genre}",
                "homepage": homepage,
                "style": "vocal",
                "probe_url": stream,
            }
        )

    venice = [
        {
            "id": "vcr-auditorium",
            "name": "VCR Auditorium",
            "group_name": "Venice Classic Radio",
            "source": "Venice Classic Radio",
            "detail": "Classical",
            "image": "https://veniceclassicradio.eu/logo/logo-vcr-auditorium-round.svg",
            "streamUrl": "https://uk2.streamingpulse.com/ssl/vcr1",
            "codec": "",
            "bitrate": 0,
            "uuid": None,
            "tags": "Venice Classic Radio, Classical",
            "homepage": "https://veniceclassicradio.eu/",
            "style": "classical",
            "probe_url": "https://uk2.streamingpulse.com/ssl/vcr1",
        },
        {
            "id": "vcr-classica-plus",
            "name": "VCR Classica+",
            "group_name": "Venice Classic Radio",
            "source": "Venice Classic Radio",
            "detail": "Classical",
            "image": "https://veniceclassicradio.eu/logo/logo-vcr-classica-piu-round.svg",
            "streamUrl": "https://uk2.streamingpulse.com/ssl/vcr2",
            "codec": "",
            "bitrate": 0,
            "uuid": None,
            "tags": "Venice Classic Radio, Classical",
            "homepage": "https://veniceclassicradio.eu/",
            "style": "classical",
            "probe_url": "https://uk2.streamingpulse.com/ssl/vcr2",
        },
    ]
    for station in venice:
        if station["id"] not in known_ids:
            prepared.append(station)

    print(f"probing {len(prepared)} new streams...", flush=True)
    results: dict[str, dict] = {}
    with ThreadPoolExecutor(max_workers=12) as pool:
        futures = {}
        for station in prepared:
            if station.get("probe_url"):
                futures[pool.submit(probe_once, station["probe_url"], True)] = station["id"]
        done = 0
        for future in as_completed(futures):
            results[futures[future]] = future.result()
            done += 1
            if done % 40 == 0:
                print(f"  {done}/{len(futures)}", flush=True)

    dropped: list[str] = []
    kept: list[dict] = []
    resolved_instead: list[str] = []
    for station in prepared:
        checked = results.get(station["id"])
        if checked and checked["ok"]:
            station["codec"] = station["codec"] or codec_of(station.get("probe_url") or "", checked["ctype"])
            kept.append(station)
            continue
        if station["source"] == "TuneIn" and tunein_resolves(station["id"]):
            station["streamUrl"] = None
            station.pop("probe_url", None)
            resolved_instead.append(f"{station['id']} {station['name']} ({checked['error'] if checked else 'no url'})")
            kept.append(station)
            continue
        reason = checked["error"] if checked else "no url"
        dropped.append(f"{station['id']} {station['name']} — {reason} — {station.get('probe_url')}")

    group_index: OrderedDict[str, dict] = OrderedDict((g["id"], g) for g in groups)
    final_new = []
    for station in kept:
        # group_name was stored before pop attempts
        pass

    # re-read group_name from prepared objects; it is still there
    for station in kept:
        gname = station.pop("group_name")
        gid = slug(gname)
        if gid not in group_index:
            group_index[gid] = {"id": gid, "name": gname, "source": station["source"]}
        station.pop("probe_url", None)
        station["group"] = gid
        if station["id"] in known_ids:
            continue
        known_ids.add(station["id"])
        final_new.append(station)

    catalog["groups"] = list(group_index.values())
    catalog["stations"] = stations + final_new
    payload = json.dumps(catalog, ensure_ascii=False, indent=2) + "\n"
    JSON_PATH.write_text(payload, encoding="utf-8")
    splice_swift(payload)

    counts: dict[str, int] = {}
    styles: dict[str, int] = {}
    for station in catalog["stations"]:
        counts[station["source"]] = counts.get(station["source"], 0) + 1
        styles[station.get("style") or "?"] = styles.get(station.get("style") or "?", 0) + 1
    print(f"total {len(catalog['stations'])} groups {len(catalog['groups'])}")
    for source, count in counts.items():
        print(f"  {count:4d}  {source}")
    print("styles", styles)
    print(f"skipped clashes {len(skipped)}")
    for line in skipped:
        print("  ", line)
    print(f"kept via TuneIn resolve {len(resolved_instead)}")
    for line in resolved_instead:
        print("  ", line)
    print(f"dropped {len(dropped)}")
    for line in dropped:
        print("  ", line)
    missing = [s["id"] for s in catalog["stations"] if not s.get("homepage")]
    print("missing homepage", len(missing))


if __name__ == "__main__":
    main()
