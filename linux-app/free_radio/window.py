"""Browse the Free Radio library and play a station."""

import threading

import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Adw", "1")
from gi.repository import Gtk, Adw, GLib, Pango

from .catalog import search_stations
from .streams import resolve_stream


class StationRow(Gtk.Box):
    def __init__(self, station):
        super().__init__(orientation=Gtk.Orientation.VERTICAL, spacing=2)
        self.station = station
        self.set_margin_top(6)
        self.set_margin_bottom(6)
        self.set_margin_start(10)
        self.set_margin_end(10)
        title = Gtk.Label(label=station.get("name") or "Station", xalign=0)
        title.set_ellipsize(Pango.EllipsizeMode.END)
        title.add_css_class("heading")
        detail = " · ".join(
            part for part in (station.get("source"), station.get("detail")) if part
        )
        subtitle = Gtk.Label(label=detail, xalign=0)
        subtitle.set_ellipsize(Pango.EllipsizeMode.END)
        subtitle.add_css_class("dim-label")
        self.append(title)
        self.append(subtitle)


class RadioWindow(Adw.ApplicationWindow):
    def __init__(self, app, groups, stations, player):
        super().__init__(application=app, title="Free Radio")
        self.set_default_size(760, 640)
        self.groups = groups
        self.stations = stations
        self.player = player
        self.current = None
        self._generation = 0
        self._shown = []

        self.player.on_state = self._on_player_state
        self.player.on_tags = self._on_tags
        self.player.on_error = self._on_error

        self.search = Gtk.SearchEntry(placeholder_text="Search stations")
        self.search.connect("search-changed", lambda *_a: self.refill())

        names = Gtk.StringList.new(["All"])
        self._group_ids = ["all"]
        for group in groups:
            names.append(group.get("name") or group["id"])
            self._group_ids.append(group["id"])
        self.groups_dropdown = Gtk.DropDown(model=names)
        self.groups_dropdown.set_selected(1 if len(self._group_ids) > 1 else 0)
        self.groups_dropdown.connect("notify::selected", lambda *_a: self.refill())

        header = Adw.HeaderBar()
        header.pack_start(self.groups_dropdown)
        header.set_title_widget(self.search)

        self.list = Gtk.ListBox()
        self.list.set_selection_mode(Gtk.SelectionMode.BROWSE)
        self.list.connect("row-activated", self._on_row)
        scrolled = Gtk.ScrolledWindow(vexpand=True)
        scrolled.set_child(self.list)

        self.play_button = Gtk.Button(icon_name="media-playback-start-symbolic")
        self.play_button.set_tooltip_text("Play")
        self.play_button.connect("clicked", lambda *_a: self.play_selected())
        self.stop_button = Gtk.Button(icon_name="media-playback-stop-symbolic")
        self.stop_button.set_tooltip_text("Stop")
        self.stop_button.connect("clicked", lambda *_a: self.stop())

        self.now_name = Gtk.Label(label="Stopped", xalign=0)
        self.now_name.set_ellipsize(Pango.EllipsizeMode.END)
        self.now_meta = Gtk.Label(label="", xalign=0)
        self.now_meta.set_ellipsize(Pango.EllipsizeMode.END)
        self.now_meta.add_css_class("dim-label")
        text = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, hexpand=True)
        text.append(self.now_name)
        text.append(self.now_meta)

        self.volume = Gtk.Scale.new_with_range(Gtk.Orientation.HORIZONTAL, 0, 1, 0.05)
        self.volume.set_value(0.8)
        self.volume.set_draw_value(False)
        self.volume.set_size_request(140, -1)
        self.volume.set_tooltip_text("Volume")
        self.volume.connect("value-changed", self._on_volume)

        bar = Gtk.Box(spacing=8)
        bar.set_margin_start(12)
        bar.set_margin_end(12)
        bar.set_margin_top(8)
        bar.set_margin_bottom(8)
        bar.append(self.play_button)
        bar.append(self.stop_button)
        bar.append(text)
        bar.append(self.volume)

        layout = Gtk.Box(orientation=Gtk.Orientation.VERTICAL)
        layout.append(scrolled)
        layout.append(Gtk.Separator())
        layout.append(bar)

        toolbar = Adw.ToolbarView()
        toolbar.add_top_bar(header)
        toolbar.set_content(layout)
        self.toast = Adw.ToastOverlay()
        self.toast.set_child(toolbar)
        self.set_content(self.toast)
        self.refill()

    def selected_group(self):
        index = self.groups_dropdown.get_selected()
        if index < 0 or index >= len(self._group_ids):
            return "all"
        return self._group_ids[index]

    def refill(self):
        while True:
            row = self.list.get_row_at_index(0)
            if row is None:
                break
            self.list.remove(row)
        found = search_stations(
            self.stations, self.groups, self.search.get_text(), self.selected_group()
        )
        self._shown = found[:500]
        for station in self._shown:
            self.list.append(StationRow(station))
        if self._shown:
            self.list.select_row(self.list.get_row_at_index(0))

    def play_selected(self):
        row = self.list.get_selected_row()
        if row is None:
            return
        child = row.get_child()
        if isinstance(child, StationRow):
            self.play(child.station)

    def _on_row(self, _box, row):
        child = row.get_child()
        if isinstance(child, StationRow):
            self.play(child.station)

    def play(self, station):
        self._generation += 1
        generation = self._generation
        self.current = station
        self.now_name.set_label(station.get("name") or "Station")
        self.now_meta.set_label("Connecting…")

        def work():
            try:
                url = resolve_stream(station)
            except Exception as error:
                GLib.idle_add(self._resolve_failed, generation, str(error))
                return

            def start():
                if generation != self._generation:
                    return False
                self.player.play_url(url)
                return False

            GLib.idle_add(start)

        threading.Thread(target=work, daemon=True).start()

    def _resolve_failed(self, generation, message):
        if generation != self._generation:
            return False
        self.now_meta.set_label(message)
        self.toast.add_toast(Adw.Toast(title=message, timeout=4))
        return False

    def stop(self):
        self._generation += 1
        self.player.stop()
        self.now_meta.set_label("Stopped")

    def _on_volume(self, scale):
        self.player.set_volume(scale.get_value())

    def _on_player_state(self, state):
        if state == "playing" and self.current:
            if self.now_meta.get_label() in ("", "Connecting…", "Stopped"):
                self.now_meta.set_label("Playing")
        elif state == "connecting":
            self.now_meta.set_label("Connecting…")
        elif state == "stopped" and self.now_meta.get_label() == "Playing":
            self.now_meta.set_label("Stopped")

    def _on_tags(self, title, artist):
        parts = [part for part in (artist, title) if part]
        if parts:
            self.now_meta.set_label(" · ".join(parts))

    def _on_error(self, message):
        self.now_meta.set_label(message or "Playback failed")
        self.toast.add_toast(Adw.Toast(title=message or "Playback failed", timeout=5))

    def play_id(self, station_id):
        for station in self.stations:
            if station.get("id") == station_id:
                self.play(station)
                return True
        self.now_meta.set_label(f"No station {station_id}")
        return False
