#!/usr/bin/env python3
"""Build the curated Free Radio catalog from the Jellyfin M3U exports.

Writes src/free-radio.json and ios/Sources/CiderRadio/FreeRadioCatalog.swift
from the same station list. TuneIn entries keep their guide id and no stream
URL; both apps resolve the id through Tune.ashx at play time.

Usage:
  python3 scripts/generate-free-radio.py MAIN.m3u TUNEIN.m3u \
      --somafm /tmp/somafm.json --probe /tmp/stream-report.json
"""

from __future__ import annotations

import argparse
import json
import re
import ssl
import urllib.parse
import urllib.request
from collections import OrderedDict
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
UA = "FreeRadio/1.1 (catalog)"

# TuneIn guide ids whose resolved public stream is the same station as an
# entry in the main playlist. The main-list copy is kept (it has a direct URL).
DEDUPED_TUNEIN = {
    "ti-s291265",  # Perfectmoods (Netherlands) == PerfectMoods – 24/7 Quality Lounge
    "ti-s236822",  # Instrumental Hits == RMNinstrumental
    "ti-s90484",  # 181.FM Classical Guitar
    "ti-s309478",  # YourClassical Peaceful Piano
    "ti-s336549",  # NATURE RADIO RAIN
}

SOURCE_BY_GROUP = {
    "SomaFM": "SomaFM",
    "Radio Browser": "Radio Browser",
    "Icecast": "Icecast",
}


def parse_m3u(path: Path) -> list[dict]:
    stations: list[dict] = []
    pending = None
    for line in path.read_text(encoding="utf-8", errors="replace").splitlines():
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


def https(url: str | None) -> str | None:
    if not url:
        return None
    if url.lower().startswith("http://"):
        return "https://" + url[7:]
    return url


def slug(name: str) -> str:
    s = re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")
    return s or "group"


def display_group(group_title: str) -> str:
    if group_title.startswith("TuneIn - "):
        return group_title[len("TuneIn - ") :]
    return group_title


def source_for(group_title: str) -> str:
    if group_title in SOURCE_BY_GROUP:
        return SOURCE_BY_GROUP[group_title]
    if group_title.startswith("TuneIn"):
        return "TuneIn"
    raise SystemExit(f"unknown group {group_title!r}")


def soma_channel(url: str) -> str | None:
    match = re.search(r"/([a-z0-9]+)-\d+-mp3$", urllib.parse.urlsplit(url).path)
    return match.group(1) if match else None


def bitrate_of(url: str, name: str) -> int:
    for pattern in (
        r"-(\d+)-mp3",
        r"(\d+)\s*kbps",
        r"(\d+)\s*kbp",
        r"[_-](\d+)k(?:\b|[^a-z])",
        r"mp3-(\d+)",
    ):
        match = re.search(pattern, f"{url} {name}", re.I)
        if match:
            value = int(match.group(1))
            if 16 <= value <= 320:
                return value
    return 0


def codec_of(url: str, content_type: str) -> str:
    ctype = content_type.lower()
    if "aacp" in ctype:
        return "aac+"
    if "aac" in ctype:
        return "aac"
    if "ogg" in ctype or "opus" in ctype or "vorbis" in ctype:
        return "ogg"
    if "mpeg" in ctype or "mp3" in ctype or ".mp3" in url.lower() or url.lower().endswith(".aac"):
        return "aac" if url.lower().endswith(".aac") else "mp3"
    if ".pls" in url.lower():
        return ""
    return ""


def tech(codec: str, bitrate: int) -> str:
    parts = []
    if codec:
        parts.append(codec)
    if bitrate:
        parts.append(f"{bitrate} kbps")
    return " · ".join(parts)


def load_probe(path: Path | None) -> dict[str, str]:
    if not path or not path.exists():
        return {}
    report = json.loads(path.read_text(encoding="utf-8"))
    return {row["url"]: row.get("ctype") or "" for row in report.get("direct", [])}


def load_somafm(path: Path | None) -> dict[str, dict]:
    if not path or not path.exists():
        return {}
    data = json.loads(path.read_text(encoding="utf-8"))
    return {c["id"]: c for c in data.get("channels", []) if c.get("id")}


def lookup_radio_browser(name: str) -> list[dict]:
    query = urllib.parse.urlencode(
        {"name": name, "nameExact": "true", "limit": "15", "hidebroken": "false"}
    )
    url = f"https://de1.api.radio-browser.info/json/stations/search?{query}"
    request = urllib.request.Request(url, headers={"User-Agent": UA})
    ctx = ssl.create_default_context()
    with urllib.request.urlopen(request, timeout=20, context=ctx) as response:
        body = json.loads(response.read().decode("utf-8", "replace"))
    return body if isinstance(body, list) else []


def stream_key(url: str) -> str:
    parts = urllib.parse.urlsplit(url.strip())
    host = (parts.hostname or "").lower()
    if host.startswith("www."):
        host = host[4:]
    if re.fullmatch(r"ice\d+\.somafm\.com", host):
        host = "somafm.com"
    port = parts.port
    port_s = f":{port}" if port and port not in (80, 443) else ""
    path = parts.path.rstrip("/").lower()
    return f"{host}{port_s}{path}"


def match_radio_browser(station: dict, hits: list[dict]) -> dict | None:
    want = stream_key(station["url"])
    by_url = []
    for hit in hits:
        for field in ("url_resolved", "url"):
            value = hit.get(field) or ""
            if value and stream_key(value) == want:
                by_url.append(hit)
                break
    if len(by_url) == 1:
        return by_url[0]
    if len(by_url) > 1:
        hits = by_url
    prefix = ""
    tvg = station.get("tvg-id") or ""
    match = re.fullmatch(r"rb-([0-9a-f]{8})-[0-9a-f]+", tvg)
    if match:
        prefix = match.group(1)
        prefixed = [h for h in hits if str(h.get("stationuuid", "")).startswith(prefix)]
        if len(prefixed) == 1:
            return prefixed[0]
    if len(hits) == 1:
        return hits[0]
    return None


SWIFT = r'''import Foundation

/// Curated Free Radio library (SomaFM, Radio Browser, Icecast, TuneIn).
/// Generated by scripts/generate-free-radio.py — edit the playlists and regenerate.
/// TuneIn stations have no stream URL; playback resolves the guide id through Tune.ashx.
enum FreeRadioCatalog {
    struct Group: Identifiable, Hashable {
        let id: String
        let name: String
        let source: Source
        let stations: [Station]
    }

    static let groups: [Group] = load()
    static let stations: [Station] = groups.flatMap(\.stations)

    static func search(_ query: String) -> [Station] {
        let q = query.trimmingCharacters(in: .whitespacesAndNewlines).lowercased()
        guard !q.isEmpty else { return [] }
        var named: [Station] = []
        var other: [Station] = []
        for station in stations {
            if station.name.lowercased().contains(q) {
                named.append(station)
            } else if station.detail.lowercased().contains(q) || (station.tags ?? "").lowercased().contains(q) {
                other.append(station)
            }
        }
        return named + other
    }

    /// The library copy of a live directory hit, when it's the same station.
    static func libraryCopy(of station: Station) -> Station? {
        if let saved = byId[station.id] { return saved }
        if let url = station.streamUrl, let saved = byStream[streamKey(url)] { return saved }
        return nil
    }

    /// Host + port + path, ignoring scheme and query. SomaFM edges collapse to one host.
    static func streamKey(_ raw: String) -> String {
        guard let u = URL(string: raw), let host0 = u.host?.lowercased() else {
            return raw.trimmingCharacters(in: .whitespacesAndNewlines).lowercased()
        }
        var host = host0.hasPrefix("www.") ? String(host0.dropFirst(4)) : host0
        if host.range(of: #"^ice\d+\.somafm\.com$"#, options: .regularExpression) != nil {
            host = "somafm.com"
        }
        let portS: String
        if let port = u.port, port != 80, port != 443 { portS = ":\(port)" } else { portS = "" }
        let path = u.path.replacingOccurrences(of: "/+$", with: "", options: .regularExpression).lowercased()
        return host + portS + path
    }

    private static let byId: [String: Station] = Dictionary(uniqueKeysWithValues: stations.map { ($0.id, $0) })
    private static let byStream: [String: Station] = {
        var index: [String: Station] = [:]
        for station in stations {
            if let url = station.streamUrl { index[streamKey(url)] = station }
        }
        return index
    }()

    private struct File: Decodable {
        struct Group: Decodable { let id, name, source: String }
        struct Entry: Decodable {
            let id, name, group, source, detail: String
            let image: String?
            let streamUrl: String?
            let codec: String
            let bitrate: Int
            let uuid: String?
            let tags: String
        }
        let groups: [Group]
        let stations: [Entry]
    }

    private static func source(_ name: String) -> Source {
        switch name {
        case "TuneIn": return .tuneIn
        case "Radio Browser": return .radioBrowser
        case "SomaFM": return .somaFM
        case "Icecast": return .icecast
        case "iptv-org": return .iptvOrg
        default: return .tuneIn
        }
    }

    private static func load() -> [Group] {
        guard let data = payload.data(using: .utf8),
              let file = try? JSONDecoder().decode(File.self, from: data) else { return [] }
        let byGroup = Dictionary(grouping: file.stations, by: \.group)
        return file.groups.map { group in
            let stations = (byGroup[group.id] ?? []).map { entry in
                Station(
                    id: entry.id, name: entry.name, detail: entry.detail,
                    codec: entry.codec, bitrate: entry.bitrate,
                    image: entry.image.flatMap { $0.isEmpty ? nil : $0 },
                    source: source(entry.source),
                    streamUrl: entry.streamUrl.flatMap { $0.isEmpty ? nil : $0 },
                    uuid: entry.uuid.flatMap { $0.isEmpty ? nil : $0 },
                    tags: entry.tags, country: nil)
            }
            return Group(id: group.id, name: group.name, source: source(group.source), stations: stations)
        }
    }

    // GENERATED-PAYLOAD-START
    private static let payload = #"""
    {}
    """#
    // GENERATED-PAYLOAD-END
}
'''


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("main_m3u", type=Path)
    parser.add_argument("tunein_m3u", type=Path)
    parser.add_argument("--somafm", type=Path)
    parser.add_argument("--probe", type=Path)
    parser.add_argument("--skip-radio-browser", action="store_true")
    args = parser.parse_args()

    probe = load_probe(args.probe)
    somafm = load_somafm(args.somafm)
    main_stations = parse_m3u(args.main_m3u)
    tunein_stations = parse_m3u(args.tunein_m3u)

    rb_hits: dict[str, list[dict]] = {}
    if not args.skip_radio_browser:
        targets = [s for s in main_stations if s.get("group-title") == "Radio Browser"]
        print(f"looking up {len(targets)} Radio Browser stations...", flush=True)
        with ThreadPoolExecutor(max_workers=6) as pool:
            futures = {pool.submit(lookup_radio_browser, s["name"]): s["name"] for s in targets}
            for future in as_completed(futures):
                name = futures[future]
                try:
                    rb_hits[name] = future.result()
                except Exception as error:  # noqa: BLE001
                    print(f"  lookup failed for {name}: {error}")
                    rb_hits[name] = []

    groups: "OrderedDict[str, dict]" = OrderedDict()
    stations: list[dict] = []
    skipped_dupes: list[str] = []

    def add_group(title: str) -> str:
        name = display_group(title)
        source = source_for(title)
        gid = slug(name)
        if gid not in groups:
            groups[gid] = {"id": gid, "name": name, "source": source}
        return gid

    for station in main_stations:
        title = station.get("group-title") or ""
        gid = add_group(title)
        source = groups[gid]["source"]
        image = https(station.get("tvg-logo"))
        ctype = probe.get(station["url"], "")
        codec = codec_of(station["url"], ctype)
        bitrate = bitrate_of(station["url"], station["name"])
        uuid = None
        station_id = station.get("tvg-id") or ""
        tags = groups[gid]["name"]
        detail = tech(codec, bitrate)

        if source == "SomaFM":
            channel = soma_channel(station["url"])
            if not channel:
                raise SystemExit(f"could not read SomaFM channel from {station['url']}")
            station_id = f"sm-{channel}"
            meta = somafm.get(channel, {})
            genre = (meta.get("genre") or "").replace("|", ", ")
            description = (meta.get("description") or "").strip()
            image = https(meta.get("xlimage") or meta.get("largeimage") or meta.get("image") or station.get("tvg-logo"))
            if not codec:
                codec = "mp3"
            detail = " · ".join(part for part in (genre, description) if part) or detail
            tags = ", ".join(part for part in ("SomaFM", genre) if part)
        elif source == "Radio Browser":
            hit = match_radio_browser(station, rb_hits.get(station["name"], []))
            if hit and hit.get("stationuuid"):
                uuid = hit["stationuuid"]
                station_id = f"rb-{uuid}"
                if not bitrate:
                    try:
                        bitrate = int(hit.get("bitrate") or 0)
                    except (TypeError, ValueError):
                        bitrate = 0
                if not codec and hit.get("codec"):
                    codec = str(hit["codec"]).lower()
                detail = tech(codec, bitrate) or "Radio Browser"
                tag_names = [t.strip() for t in str(hit.get("tags") or "").split(",") if t.strip()]
                tags = ", ".join(["Radio Browser", *tag_names[:4]])
            else:
                if not station_id.startswith("rb-"):
                    station_id = f"rb-{slug(station['name'])}"
                detail = detail or "Radio Browser"
                print(f"  no Radio Browser uuid for {station['name']} ({station_id})")
        elif source == "Icecast":
            if not station_id.startswith("ic-"):
                station_id = f"ic-{slug(station['name'])}"
            detail = detail or "Icecast"
            tags = "Icecast"

        stations.append(
            {
                "id": station_id,
                "name": station["name"],
                "group": gid,
                "source": source,
                "detail": detail,
                "image": image,
                "streamUrl": station["url"],
                "codec": codec,
                "bitrate": bitrate,
                "uuid": uuid,
                "tags": tags,
            }
        )

    for station in tunein_stations:
        guide = station.get("tvg-id") or ""
        if guide in DEDUPED_TUNEIN:
            skipped_dupes.append(f"{guide} {station['name']}")
            continue
        if not re.fullmatch(r"ti-s\d+", guide):
            raise SystemExit(f"bad TuneIn id {guide!r} for {station['name']}")
        gid = add_group(station.get("group-title") or "TuneIn")
        group_name = groups[gid]["name"]
        stations.append(
            {
                "id": guide,
                "name": station["name"],
                "group": gid,
                "source": "TuneIn",
                "detail": group_name,
                "image": https(station.get("tvg-logo")),
                "streamUrl": None,
                "codec": "",
                "bitrate": 0,
                "uuid": None,
                "tags": f"TuneIn, {group_name}",
            }
        )

    catalog = {"groups": list(groups.values()), "stations": stations}
    payload = json.dumps(catalog, ensure_ascii=False, indent=2) + "\n"
    json_path = ROOT / "src" / "free-radio.json"
    json_path.write_text(payload, encoding="utf-8")

    swift = SWIFT.replace(
        "    // GENERATED-PAYLOAD-START\n    private static let payload = #\"\"\"\n    {}\n    \"\"\"#\n    // GENERATED-PAYLOAD-END",
        "    // GENERATED-PAYLOAD-START\n    private static let payload = #\"\"\"\n"
        + payload.rstrip("\n")
        + "\n\"\"\"#\n    // GENERATED-PAYLOAD-END",
    )
    swift_path = ROOT / "ios" / "Sources" / "CiderRadio" / "FreeRadioCatalog.swift"
    swift_path.write_text(swift, encoding="utf-8")

    counts: dict[str, int] = {}
    for station in stations:
        counts[station["source"]] = counts.get(station["source"], 0) + 1
    print(f"wrote {len(stations)} stations in {len(groups)} groups")
    for source, count in counts.items():
        print(f"  {count:4d}  {source}")
    print(f"deduped TuneIn ({len(skipped_dupes)}):")
    for line in skipped_dupes:
        print(f"  {line}")
    print(json_path)
    print(swift_path)


if __name__ == "__main__":
    main()
