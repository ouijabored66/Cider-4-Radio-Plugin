"""Write short mp3, aac, and ogg files with the same GStreamer the build uses."""

import os
import sys

import gi

gi.require_version("Gst", "1.0")
from gi.repository import Gst

Gst.init(None)

SRC = "audiotestsrc num-buffers=90 samplesperbuffer=1024 ! audio/x-raw,rate=44100,channels=2 ! audioconvert ! audioresample"


def have(name):
    return Gst.ElementFactory.find(name) is not None


def encode(description, dest):
    pipeline = Gst.parse_launch(description + " ! filesink name=sink")
    sink = pipeline.get_by_name("sink")
    sink.set_property("location", os.path.abspath(dest))
    bus = pipeline.get_bus()
    pipeline.set_state(Gst.State.PLAYING)
    message = bus.timed_pop_filtered(
        30 * Gst.SECOND,
        Gst.MessageType.EOS | Gst.MessageType.ERROR,
    )
    pipeline.set_state(Gst.State.NULL)
    if message is None:
        raise SystemExit(f"Timed out writing {dest}")
    if message.type == Gst.MessageType.ERROR:
        error, debug = message.parse_error()
        raise SystemExit(f"Could not write {dest}: {error.message}\n{debug}")
    if not os.path.isfile(dest) or os.path.getsize(dest) < 100:
        raise SystemExit(f"{dest} is empty")
    print(f"fixture {dest} ({os.path.getsize(dest)} bytes)")


def main(argv):
    dest_dir = os.path.abspath(argv[1] if len(argv) > 1 else "dist/fixtures")
    os.makedirs(dest_dir, exist_ok=True)
    if not have("vorbisenc") or not have("oggmux"):
        raise SystemExit("vorbisenc or oggmux is missing")
    encode(f"{SRC} ! vorbisenc ! oggmux", os.path.join(dest_dir, "test.ogg"))

    if have("lamemp3enc"):
        mp3 = f"{SRC} ! lamemp3enc"
    elif have("avenc_mp3"):
        mp3 = f"{SRC} ! avenc_mp3"
    else:
        raise SystemExit("No mp3 encoder (lamemp3enc or avenc_mp3)")
    encode(mp3, os.path.join(dest_dir, "test.mp3"))

    if have("avenc_aac") and have("aacparse"):
        aac = f"{SRC} ! avenc_aac ! aacparse"
    elif have("fdkaacenc") and have("aacparse"):
        aac = f"{SRC} ! fdkaacenc ! aacparse"
    elif have("faac") and have("aacparse"):
        aac = f"{SRC} ! faac ! aacparse"
    else:
        raise SystemExit("No aac encoder (avenc_aac, fdkaacenc, or faac)")
    encode(aac, os.path.join(dest_dir, "test.aac"))

    for name in ("souphttpsrc", "mpg123audiodec", "avdec_aac", "faad", "oggdemux", "vorbisdec"):
        print(f"build plugin {name}: {'yes' if have(name) else 'no'}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
