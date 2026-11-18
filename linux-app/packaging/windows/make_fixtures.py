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
    if os.path.isfile(dest):
        os.remove(dest)
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
        raise RuntimeError(f"Timed out writing {dest}")
    if message.type == Gst.MessageType.ERROR:
        error, debug = message.parse_error()
        raise RuntimeError(f"Could not write {dest}: {error.message}\n{debug}")
    if not os.path.isfile(dest) or os.path.getsize(dest) < 100:
        raise RuntimeError(f"{dest} is empty")
    print(f"fixture {dest} ({os.path.getsize(dest)} bytes)")


def is_adts(path):
    with open(path, "rb") as handle:
        data = handle.read(8)
    return len(data) >= 2 and data[0] == 0xFF and (data[1] & 0xF0) == 0xF0


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

    aac_path = os.path.join(dest_dir, "test.aac")
    wrote_aac = False
    if not have("aacparse"):
        raise SystemExit("aacparse is missing")
    for encoder in ("avenc_aac", "fdkaacenc", "faac"):
        if not have(encoder):
            continue
        # Raw AAC has no ADTS header, so playbin never recognizes the stream.
        pipeline = f"{SRC} ! {encoder} ! aacparse ! audio/mpeg,mpegversion=4,stream-format=adts"
        try:
            encode(pipeline, aac_path)
        except RuntimeError as error:
            print(error)
            continue
        if is_adts(aac_path):
            wrote_aac = True
            break
        print(f"{encoder} did not write an ADTS header")
    if not wrote_aac:
        raise SystemExit("AAC fixture is not ADTS")

    for name in ("souphttpsrc", "mpg123audiodec", "avdec_aac", "faad", "oggdemux", "vorbisdec"):
        print(f"build plugin {name}: {'yes' if have(name) else 'no'}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
