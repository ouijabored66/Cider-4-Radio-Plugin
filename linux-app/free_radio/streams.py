"""Turn a catalog station into a stream URL, the same way the Cider plugin does."""

import json
import urllib.error
import urllib.parse
import urllib.request

USER_AGENT = "FreeRadio/0.3.3 (+https://github.com/ouijabored66/Cider-4-Radio-Plugin)"
TUNEIN = "https://opml.radiotime.com/Tune.ashx"


def fetch_bytes(url, timeout=8, limit=8192):
    request = urllib.request.Request(
        url,
        headers={"User-Agent": USER_AGENT, "Range": f"bytes=0-{limit - 1}"},
    )
    with urllib.request.urlopen(request, timeout=timeout) as response:
        status = getattr(response, "status", 200)
        content_type = response.headers.get("Content-Type", "")
        chunk = response.read(limit)
        return status, content_type, chunk


def fetch_text(url, timeout=8):
    _status, _content_type, chunk = fetch_bytes(url, timeout=timeout, limit=200000)
    return chunk.decode("utf-8", "replace")


def parse_playlist_urls(text):
    out = []
    for raw in text.splitlines():
        line = raw.strip()
        if not line or line.startswith("#"):
            continue
        if line.lower().startswith("file") and "=" in line[:8]:
            key, _, value = line.partition("=")
            if key.lower().startswith("file") and key[4:].isdigit():
                line = value.strip()
        if line.lower().startswith("http://") or line.lower().startswith("https://"):
            out.append(line)
    return out


def parse_playlist(text):
    urls = parse_playlist_urls(text)
    return urls[0] if urls else None


def https_upgrade(url):
    parsed = urllib.parse.urlsplit(url)
    if parsed.scheme != "http":
        return None
    port = "" if parsed.port in (None, 80) else f":{parsed.port}"
    host = parsed.hostname or ""
    next_url = urllib.parse.urlunsplit(("https", f"{host}{port}", parsed.path, parsed.query, parsed.fragment))
    return None if next_url == url else next_url


def _playlist_path(url):
    path = urllib.parse.urlparse(url).path.lower()
    return path.endswith(".m3u") or path.endswith(".m3u8") or path.endswith(".pls")


def _is_hls(url):
    return urllib.parse.urlparse(url).path.lower().endswith(".m3u8")


def _unique(urls):
    seen = set()
    out = []
    for url in urls:
        if not url or url in seen:
            continue
        seen.add(url)
        out.append(url)
    return out


def _https_first(url):
    upgraded = https_upgrade(url)
    return [upgraded, url] if upgraded else [url]


def _looks_like_audio(content_type, chunk):
    kind = (content_type or "").lower()
    if "audio/" in kind or "mpegurl" in kind or "scpls" in kind:
        return True
    if len(chunk) >= 3 and chunk[:3] == b"ID3":
        return True
    if len(chunk) >= 2 and chunk[0] == 0xFF and (chunk[1] & 0xE0) == 0xE0:
        return True
    return chunk[:7] == b"#EXTM3U"


def playable(url):
    try:
        status, content_type, chunk = fetch_bytes(url)
    except (OSError, urllib.error.URLError):
        return False
    if status not in (200, 206):
        return False
    return _looks_like_audio(content_type, chunk)


def _read_playlist(url):
    for attempt in _https_first(url):
        try:
            return fetch_text(attempt)
        except (OSError, urllib.error.URLError):
            continue
    return None


def expand_address(url):
    if _is_hls(url) or not _playlist_path(url):
        return _https_first(url)
    text = _read_playlist(url)
    inner = parse_playlist_urls(text) if text else []
    if not inner:
        return _https_first(url)
    expanded = []
    for item in inner:
        expanded.extend(_https_first(item))
    return _unique(expanded)


def tunein_urls(body):
    out = []
    for item in body or []:
        address = item.get("url") if isinstance(item, dict) else None
        if address and "notcompatible" not in address.lower():
            out.append(address)
    return out


def tunein_entries(guide_id):
    query = urllib.parse.urlencode({"id": guide_id, "render": "json"})
    payload = json.loads(fetch_text(f"{TUNEIN}?{query}", timeout=15))
    return tunein_urls(payload.get("body"))


def tunein_stream(guide_id):
    urls = tunein_entries(guide_id)
    if not urls:
        raise RuntimeError("TuneIn gave no playable stream for this station")
    return urls[0]


def resolve_stream(station):
    saved = station.get("streamUrl")
    if saved and not _playlist_path(saved) and str(saved).startswith("https://"):
        return saved

    seeds = []
    station_id = station.get("id") or ""
    if station_id.startswith("ti-"):
        try:
            seeds.extend(tunein_entries(station_id[3:]))
        except (OSError, urllib.error.URLError, json.JSONDecodeError, RuntimeError, ValueError):
            pass
    if saved:
        seeds.append(saved)

    for url in _unique(item for seed in _unique(seeds) for item in expand_address(seed)):
        if _playlist_path(url) and not _is_hls(url):
            continue
        if playable(url):
            return url
    if saved:
        return saved
    raise RuntimeError("TuneIn gave no playable stream for this station")
