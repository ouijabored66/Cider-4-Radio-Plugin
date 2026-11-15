"""Favorite a station through the window, restart, and confirm it is still listed."""

import os
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
APP = Path(__file__).resolve().parent
CATALOG = ROOT / "src" / "free-radio.json"
STATION = "sm-beatblender"


def _env(config):
    env = os.environ.copy()
    env["XDG_CONFIG_HOME"] = str(config)
    env["PYTHONPATH"] = str(APP)
    env["FREERADIO_CATALOG"] = str(CATALOG)
    env["GDK_BACKEND"] = "x11"
    env["GSK_RENDERER"] = "cairo"
    env.pop("FREERADIO_SINK", None)
    return env


CHILD = r"""
import sys
import gi
gi.require_version("Adw", "1")
gi.require_version("Gst", "1.0")
from gi.repository import Adw, Gst, GLib
from free_radio.catalog import load_catalog
from free_radio.favorites import Favorites
from free_radio.player import Player
from free_radio.window import RadioWindow

mode = sys.argv[1]
station_id = sys.argv[2]
Gst.init(None)
groups, stations = load_catalog()
player = Player()
app = Adw.Application(application_id="io.github.ouijabored66.FreeRadio.Test")

def activate(_app):
    window = RadioWindow(app, groups, stations, player, Favorites())
    window.present()
    station = window.by_id[station_id]
    if mode == "add-from-row":
        window.refill_all()
        row = None
        index = 0
        while True:
            item = window.all_list.get_row_at_index(index)
            if item is None:
                break
            child = item.get_child()
            if getattr(child, "station", {}).get("id") == station_id:
                row = child
                break
            index += 1
        if row is None:
            print("row missing", file=sys.stderr)
            app._code = 1
            app.quit()
            return
        row.star.set_active(True)
    elif mode == "remove-from-favorites":
        window.show_favorites()
        ids = window.visible_station_ids(favorites_view=True)
        if station_id not in ids:
            print("missing after restart", ids, file=sys.stderr)
            app._code = 1
            app.quit()
            return
        index = 0
        while True:
            item = window.fav_list.get_row_at_index(index)
            if item is None:
                break
            child = item.get_child()
            if getattr(child, "station", {}).get("id") == station_id:
                child.star.set_active(False)
                break
            index += 1
        if window.favorites.contains(station_id):
            print("star in favorites view did not remove it", file=sys.stderr)
            app._code = 1
        if station_id in window.visible_station_ids(favorites_view=True):
            print("favorites row stayed on screen", file=sys.stderr)
            app._code = 1
    elif mode == "add-from-now":
        window.play(station)
        window.now_star.set_active(True)
        if not window.favorites.contains(station_id):
            print("now-playing star did not save", file=sys.stderr)
            app._code = 1
    else:
        print("unknown mode", mode, file=sys.stderr)
        app._code = 1
    GLib.idle_add(app.quit)

app._code = 0
app.connect("activate", activate)
app.run()
raise SystemExit(app._code)
"""


def run(config, mode):
    completed = subprocess.run(
        [sys.executable, "-c", CHILD, mode, STATION],
        env=_env(config),
        check=False,
        text=True,
    )
    if completed.returncode != 0:
        raise SystemExit(f"{mode} failed with {completed.returncode}")


def main():
    config = Path(sys.argv[1])
    config.mkdir(parents=True, exist_ok=True)
    run(config, "add-from-row")
    saved = (config / "free-radio" / "favorites.json").read_text(encoding="utf-8")
    if STATION not in saved:
        raise SystemExit(f"favorites file missing {STATION}: {saved}")
    run(config, "remove-from-favorites")
    saved = (config / "free-radio" / "favorites.json").read_text(encoding="utf-8")
    if STATION in saved:
        raise SystemExit(f"remove left {STATION} in {saved}")
    run(config, "add-from-now")
    saved = (config / "free-radio" / "favorites.json").read_text(encoding="utf-8")
    if STATION not in saved:
        raise SystemExit(f"now-playing favorite was not kept: {saved}")
    print("favorites persisted across restarts")


if __name__ == "__main__":
    main()
