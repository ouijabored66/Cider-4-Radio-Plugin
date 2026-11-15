"""Free Radio desktop app. Run with `python3 -m free_radio` or /usr/bin/free-radio."""

import argparse
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


def main(argv=None):
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
    groups, stations = load_catalog()
    player = Player()
    app = Adw.Application(application_id="io.github.ouijabored66.FreeRadio")
    window_box = {}

    def activate(_app):
        window = RadioWindow(app, groups, stations, player)
        window_box["window"] = window
        window.present()
        if args.play and not window.play_id(args.play):
            print(f"No station {args.play}", file=sys.stderr)
            app.quit()
            return
        if args.quit_after is not None:
            def finish():
                code = 0 if player.connected and not player.failed else 1
                app._quit_code = code
                if not player.connected:
                    print("Stream did not connect", file=sys.stderr)
                elif player.failed:
                    print("Stream failed after connecting", file=sys.stderr)
                else:
                    print("Stream connected", file=sys.stderr)
                app.quit()
                return False

            GLib.timeout_add(int(args.quit_after * 1000), finish)

    app.connect("activate", activate)
    app.run()
    return getattr(app, "_quit_code", 0)


if __name__ == "__main__":
    raise SystemExit(main())
