"""Read the shared Free Radio catalog and search it locally."""

import json
import os
from pathlib import Path


def catalog_path():
    override = os.environ.get("FREERADIO_CATALOG")
    if override:
        return Path(override)
    installed = Path("/usr/share/free-radio/free-radio.json")
    if installed.is_file():
        return installed
    dev = Path(__file__).resolve().parents[2] / "src" / "free-radio.json"
    if dev.is_file():
        return dev
    raise FileNotFoundError("free-radio.json")


def load_catalog(path=None):
    path = Path(path) if path else catalog_path()
    data = json.loads(path.read_text(encoding="utf-8"))
    groups = list(data["groups"])
    stations = list(data["stations"])
    return groups, stations


def search_stations(stations, groups, query, group_id):
    """Case-insensitive match on name, detail, tags, source, and group name."""
    names = {group["id"]: group.get("name") or "" for group in groups}
    needle = (query or "").casefold().strip()
    found = []
    for station in stations:
        if group_id and group_id != "all" and station.get("group") != group_id:
            continue
        if not needle:
            found.append(station)
            continue
        haystack = " ".join(
            [
                station.get("name") or "",
                station.get("detail") or "",
                station.get("tags") or "",
                station.get("source") or "",
                names.get(station.get("group"), ""),
            ]
        ).casefold()
        if needle in haystack:
            found.append(station)
    return found
