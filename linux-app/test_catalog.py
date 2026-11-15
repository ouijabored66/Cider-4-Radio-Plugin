"""Check the shared catalog loads and local search finds a known station."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from free_radio.catalog import load_catalog, search_stations
from free_radio.streams import parse_playlist


def main():
    groups, stations = load_catalog(Path(__file__).resolve().parents[1] / "src" / "free-radio.json")
    if len(stations) != 819:
        raise SystemExit(f"expected 819 stations, found {len(stations)}")
    if not any(station.get("id") == "ti-s45455" and station.get("streamUrl") == "https://live-icy.dr.dk/A/A29H.mp3" for station in stations):
        raise SystemExit("DR P6 Beat is missing its direct stream")
    if not groups:
        raise SystemExit("catalog has no groups")
    found = search_stations(stations, groups, "beat blender", "all")
    if not any(station.get("id") == "sm-beatblender" for station in found):
        raise SystemExit("search missed Beat Blender")
    narrowed = search_stations(stations, groups, "", "somafm")
    if not narrowed or any(station.get("group") != "somafm" for station in narrowed):
        raise SystemExit("group filter failed")
    playlist = parse_playlist("File1=https://example.test/stream\n")
    if playlist != "https://example.test/stream":
        raise SystemExit(f"playlist parse failed: {playlist}")
    print(f"catalog ok: {len(groups)} groups, {len(stations)} stations")


if __name__ == "__main__":
    main()
