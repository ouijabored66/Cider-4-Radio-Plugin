"""GStreamer playback. The UI calls this from the GTK main thread."""

import os

import gi

gi.require_version("Gst", "1.0")
from gi.repository import Gst


class Player:
    def __init__(self):
        self.playbin = Gst.ElementFactory.make("playbin", "player")
        if self.playbin is None:
            raise RuntimeError("GStreamer playbin is not available")
        flags = self.playbin.get_property("flags")
        self.playbin.set_property("flags", flags & ~1)
        sink_name = os.environ.get("FREERADIO_SINK")
        if sink_name:
            sink = Gst.ElementFactory.make(sink_name, "sink")
            if sink is None:
                raise RuntimeError(f"GStreamer sink {sink_name} is not available")
            if sink_name == "fakesink":
                sink.set_property("sync", True)
            self.playbin.set_property("audio-sink", sink)
        self.playbin.set_property("volume", 0.8)
        self.playbin.connect("source-setup", self._on_source_setup)
        bus = self.playbin.get_bus()
        bus.add_signal_watch()
        bus.connect("message", self._on_message)
        self.connected = False
        self.failed = False
        self.last_url = ""
        self.error_message = ""
        self.error_debug = ""
        self._tls_seen = set()
        self.on_state = None
        self.on_tags = None
        self.on_error = None

    def set_volume(self, value):
        self.playbin.set_property("volume", float(value))

    def play_url(self, url):
        self.connected = False
        self.failed = False
        self.last_url = url or ""
        self.error_message = ""
        self.error_debug = ""
        self.playbin.set_state(Gst.State.NULL)
        self.playbin.set_property("uri", url)
        self.playbin.set_state(Gst.State.PLAYING)
        if self.on_state:
            self.on_state("connecting")

    def _on_source_setup(self, _parent, source):
        self._use_bundled_ca(source)

    def _use_bundled_ca(self, element):
        # The frozen Windows build sets this to the bundled CA file. Linux
        # leaves it unset and keeps using the system certificate store.
        ca = os.environ.get("FREERADIO_CA_BUNDLE")
        if not ca or element is None:
            return
        ident = id(element)
        if ident in self._tls_seen:
            return
        self._tls_seen.add(ident)
        for name in ("ssl-ca-file", "tls-ca-file"):
            prop = element.find_property(name)
            if prop is not None:
                element.set_property(name, ca)
        try:
            element.connect("source-setup", self._on_source_setup)
        except TypeError:
            return

    def stop(self):
        self.playbin.set_state(Gst.State.NULL)
        if self.on_state:
            self.on_state("stopped")

    def _on_message(self, _bus, message):
        kind = message.type
        if kind == Gst.MessageType.STREAM_START:
            self.connected = True
        elif kind == Gst.MessageType.ASYNC_DONE:
            self.connected = True
            if self.on_state:
                self.on_state("playing")
        elif kind == Gst.MessageType.TAG and self.on_tags:
            tags = message.parse_tag()
            title = _tag(tags, Gst.TAG_TITLE)
            artist = _tag(tags, Gst.TAG_ARTIST)
            if title or artist:
                self.on_tags(title, artist)
        elif kind == Gst.MessageType.ERROR:
            self.failed = True
            error, debug = message.parse_error()
            self.error_message = error.message or ""
            self.error_debug = str(debug or "")
            self.playbin.set_state(Gst.State.NULL)
            if self.on_error:
                self.on_error(error.message)
        elif kind == Gst.MessageType.EOS:
            self.playbin.set_state(Gst.State.NULL)
            if self.on_state:
                self.on_state("stopped")


def _tag(tags, name):
    ok, value = tags.get_string(name)
    return value if ok and value else ""
