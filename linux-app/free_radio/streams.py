"""Turn a catalog station into a stream URL, the same way the Cider plugin does."""

import json
import urllib.error
import urllib.parse
import urllib.request

USER_AGENT = "FreeRadio/0.3.1 (+https://github.com/ouijabored66/Cider-4-Radio-Plugin)"
TUNEIN = "https://opml.radiotime.com/Tune.ashx"


def fetch_text(url, timeout=20):
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(request, timeout=timeout) as response:
        return response.read().decode("utf-8", "replace")


def parse_playlist(text):
    for raw in text.splitlines():
        line = raw.strip()
        if line.lower().startswith("file1="):
            line = line[6:].strip()
        if line.lower().startswith("http://") or line.lower().startswith("https://"):
            return line
    return None


def unwrap_playlist(url):
    path = urllib.parse.urlparse(url).path.lower()
    if not (path.endswith(".pls") or path.endswith(".m3u") or path.endswith(".m3u8")):
        return url
    try:
        found = parse_playlist(fetch_text(url))
    except (OSError, urllib.error.URLError):
        return url
    return found or url


def tunein_stream(guide_id):
    query = urllib.parse.urlencode({"id": guide_id, "render": "json"})
    payload = json.loads(fetch_text(f"{TUNEIN}?{query}"))
    for item in payload.get("body") or []:
        address = item.get("url") if isinstance(item, dict) else None
        if address and "notcompatible" not in address.lower():
            return address
    raise RuntimeError("TuneIn gave no playable stream for this station")


def resolve_stream(station):
    address = station.get("streamUrl")
    if not address:
        station_id = station.get("id") or ""
        if station_id.startswith("ti-"):
            address = tunein_stream(station_id[3:])
        else:
            raise RuntimeError("This station has no stream address")
    return unwrap_playlist(address)
