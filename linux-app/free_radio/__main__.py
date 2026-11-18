"""Free Radio desktop app. Run with `python3 -m free_radio` or /usr/bin/free-radio."""

import argparse
import os
import sys

import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Adw", "1")
gi.require_version("Gst", "1.0")
from gi.repository import Adw, Gst, GLib

from . import __version__
from .catalog import load_catalog
from .player import Player
from .window import RadioWindow


def _note(message):
    print(message, file=sys.stderr)
    path = os.environ.get("FREERADIO_LOG")
    if not path:
        return
    try:
        with open(path, "a", encoding="utf-8") as handle:
            handle.write(message + "\n")
    except OSError:
        pass


def _log_plugins():
    if not os.environ.get("FREERADIO_LOG"):
        return
    names = (
        "playbin",
        "souphttpsrc",
        "mpg123audiodec",
        "avdec_aac",
        "faad",
        "oggdemux",
        "vorbisdec",
        "fakesink",
        "wasapisink",
        "directsoundsink",
    )
    for name in names:
        found = Gst.ElementFactory.find(name) is not None
        _note(f"plugin {name}: {'yes' if found else 'no'}")


def main(argv=None):
    try:
        return _run(argv)
    except Exception as error:
        _note(f"Free Radio failed: {error}")
        return 1


def _run(argv):
    parser = argparse.ArgumentParser(prog="free-radio", description="Play the Free Radio library")
    parser.add_argument("--version", action="version", version=f"Free Radio {__version__}")
    parser.add_argument("--play", metavar="ID", help="Start playback of a catalog station id")
    parser.add_argument(
        "--quit-after",
        type=float,
        metavar="SECONDS",
        help="Quit after this many seconds. Used to check that a stream connects.",
    )
    args = parser.parse_args(argv)

    Gst.init(None)
    _log_plugins()
    groups, stations = load_catalog()
    player = Player()
    app = Adw.Application(application_id="io.github.ouijabored66.FreeRadio")
    window_box = {}

    def activate(_app):
        window = RadioWindow(app, groups, stations, player)
        window_box["window"] = window
        window.present()
        _note("Free Radio window shown")
        if args.play and not window.play_id(args.play):
            _note(f"No station {args.play}")
            app.quit()
            return
        if args.quit_after is not None:
            def finish():
                code = 0 if player.connected and not player.failed else 1
                app._quit_code = code
                if player.last_url:
                    _note(f"Stream url: {player.last_url}")
                if not player.connected:
                    detail = player.error_message or ""
                    _note("Stream did not connect" + (f": {detail}" if detail else ""))
                elif player.failed:
                    _note("Stream failed after connecting: " + (player.error_message or ""))
                    if player.error_debug:
                        _note(player.error_debug[:2000])
                else:
                    _note("Stream connected")
                app.quit()
                return False

            GLib.timeout_add(int(args.quit_after * 1000), finish)

    app.connect("activate", activate)
    app.run()
    return getattr(app, "_quit_code", 0)


if __name__ == "__main__":
    raise SystemExit(main())
