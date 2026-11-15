"""Browse the Free Radio library and play a station."""

import threading

import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Adw", "1")
from gi.repository import Gtk, Adw, GLib, Pango

from .catalog import search_stations
from .favorites import Favorites
from .streams import resolve_stream

STARRED = "starred-symbolic"
UNSTARRED = "non-starred-symbolic"


class StationRow(Gtk.Box):
    def __init__(self, station, favorited, on_toggle):
        super().__init__(orientation=Gtk.Orientation.HORIZONTAL, spacing=8)
        self.station = station
        self._on_toggle = on_toggle
        self._block = False
        self.set_margin_top(6)
        self.set_margin_bottom(6)
        self.set_margin_start(10)
        self.set_margin_end(10)

        text = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=2, hexpand=True)
        title = Gtk.Label(label=station.get("name") or "Station", xalign=0)
        title.set_ellipsize(Pango.EllipsizeMode.END)
        title.add_css_class("heading")
        detail = " · ".join(
            part for part in (station.get("source"), station.get("detail")) if part
        )
        subtitle = Gtk.Label(label=detail, xalign=0)
        subtitle.set_ellipsize(Pango.EllipsizeMode.END)
        subtitle.add_css_class("dim-label")
        text.append(title)
        text.append(subtitle)

        self.star = Gtk.ToggleButton()
        self.star.set_tooltip_text("Favorite")
        self.star.connect("toggled", self._toggled)
        self.set_favorited(favorited)
        self.append(text)
        self.append(self.star)

    def set_favorited(self, favorited):
        self._block = True
        self.star.set_active(bool(favorited))
        self.star.set_icon_name(STARRED if favorited else UNSTARRED)
        self.star.set_tooltip_text("Remove from favorites" if favorited else "Favorite")
        self._block = False

    def _toggled(self, _button):
        if self._block:
            return
        self._on_toggle(self.station)


class RadioWindow(Adw.ApplicationWindow):
    def __init__(self, app, groups, stations, player, favorites=None):
        super().__init__(application=app, title="Free Radio")
        self.set_default_size(760, 640)
        self.groups = groups
        self.stations = stations
        self.by_id = {station.get("id"): station for station in stations if station.get("id")}
        self.player = player
        self.favorites = favorites if favorites is not None else Favorites()
        self.current = None
        self._generation = 0

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
        self.groups_dropdown.connect("notify::selected", lambda *_a: self.refill_all())

        self.all_list = self._make_list()
        self.fav_list = self._make_list()
        all_scroll = Gtk.ScrolledWindow(vexpand=True)
        all_scroll.set_child(self.all_list)

        self.fav_empty = Gtk.Label(label="No favorites yet. Star a station to keep it here.")
        self.fav_empty.set_margin_top(24)
        self.fav_empty.add_css_class("dim-label")
        fav_scroll = Gtk.ScrolledWindow(vexpand=True)
        fav_scroll.set_child(self.fav_list)
        fav_page = Gtk.Box(orientation=Gtk.Orientation.VERTICAL)
        fav_page.append(self.fav_empty)
        fav_page.append(fav_scroll)

        self.stack = Gtk.Stack()
        self.stack.add_titled(all_scroll, "all", "All stations")
        self.stack.add_titled(fav_page, "favorites", "Favorites")
        self.stack.connect("notify::visible-child-name", lambda *_a: self._on_view())
        switcher = Gtk.StackSwitcher()
        switcher.set_stack(self.stack)

        header = Adw.HeaderBar()
        header.pack_start(switcher)
        header.set_title_widget(self.search)
        header.pack_end(self.groups_dropdown)

        self.play_button = Gtk.Button(icon_name="media-playback-start-symbolic")
        self.play_button.set_tooltip_text("Play")
        self.play_button.connect("clicked", lambda *_a: self.play_selected())
        self.stop_button = Gtk.Button(icon_name="media-playback-stop-symbolic")
        self.stop_button.set_tooltip_text("Stop")
        self.stop_button.connect("clicked", lambda *_a: self.stop())

        self.now_star = Gtk.ToggleButton()
        self.now_star.set_tooltip_text("Favorite")
        self.now_star.set_sensitive(False)
        self._now_block = False
        self.now_star.connect("toggled", self._on_now_star)

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
        bar.append(self.now_star)
        bar.append(text)
        bar.append(self.volume)

        layout = Gtk.Box(orientation=Gtk.Orientation.VERTICAL)
        layout.append(self.stack)
        layout.append(Gtk.Separator())
        layout.append(bar)

        toolbar = Adw.ToolbarView()
        toolbar.add_top_bar(header)
        toolbar.set_content(layout)
        self.toast = Adw.ToastOverlay()
        self.toast.set_child(toolbar)
        self.set_content(self.toast)
        self.refill()

    def _make_list(self):
        listing = Gtk.ListBox()
        listing.set_selection_mode(Gtk.SelectionMode.BROWSE)
        listing.connect("row-activated", self._on_row)
        return listing

    def selected_group(self):
        index = self.groups_dropdown.get_selected()
        if index < 0 or index >= len(self._group_ids):
            return "all"
        return self._group_ids[index]

    def _on_view(self):
        self.groups_dropdown.set_visible(self.stack.get_visible_child_name() != "favorites")

    def show_favorites(self):
        self.stack.set_visible_child_name("favorites")

    def refill(self):
        self.refill_all()
        self.refill_favorites()

    def refill_all(self):
        found = search_stations(
            self.stations, self.groups, self.search.get_text(), self.selected_group()
        )
        self._fill_list(self.all_list, found[:500])

    def refill_favorites(self):
        chosen = [self.by_id[station_id] for station_id in self.favorites.ids if station_id in self.by_id]
        found = search_stations(chosen, self.groups, self.search.get_text(), "all")
        self._fill_list(self.fav_list, found)
        self.fav_empty.set_visible(not found)

    def _fill_list(self, listing, stations):
        while True:
            row = listing.get_row_at_index(0)
            if row is None:
                break
            listing.remove(row)
        for station in stations:
            listing.append(
                StationRow(
                    station,
                    self.favorites.contains(station.get("id")),
                    self.toggle_favorite,
                )
            )
        if stations:
            listing.select_row(listing.get_row_at_index(0))

    def _active_list(self):
        if self.stack.get_visible_child_name() == "favorites":
            return self.fav_list
        return self.all_list

    def visible_station_ids(self, favorites_view=False):
        listing = self.fav_list if favorites_view else self._active_list()
        found = []
        index = 0
        while True:
            row = listing.get_row_at_index(index)
            if row is None:
                break
            child = row.get_child()
            if isinstance(child, StationRow) and child.station.get("id"):
                found.append(child.station["id"])
            index += 1
        return found

    def play_selected(self):
        row = self._active_list().get_selected_row()
        if row is None:
            return
        child = row.get_child()
        if isinstance(child, StationRow):
            self.play(child.station)

    def _on_row(self, _box, row):
        child = row.get_child()
        if isinstance(child, StationRow):
            self.play(child.station)

    def toggle_favorite(self, station):
        station_id = station.get("id")
        if not station_id:
            return False
        added = self.favorites.toggle(station_id)
        self._sync_stars()
        self.refill_favorites()
        self._sync_now_star()
        return added

    def _sync_stars(self):
        for listing in (self.all_list, self.fav_list):
            index = 0
            while True:
                row = listing.get_row_at_index(index)
                if row is None:
                    break
                child = row.get_child()
                if isinstance(child, StationRow):
                    child.set_favorited(self.favorites.contains(child.station.get("id")))
                index += 1

    def _on_now_star(self, _button):
        if self._now_block or not self.current:
            return
        self.toggle_favorite(self.current)

    def _sync_now_star(self):
        self._now_block = True
        if not self.current or not self.current.get("id"):
            self.now_star.set_sensitive(False)
            self.now_star.set_active(False)
            self.now_star.set_icon_name(UNSTARRED)
        else:
            favorited = self.favorites.contains(self.current["id"])
            self.now_star.set_sensitive(True)
            self.now_star.set_active(favorited)
            self.now_star.set_icon_name(STARRED if favorited else UNSTARRED)
            self.now_star.set_tooltip_text(
                "Remove from favorites" if favorited else "Favorite"
            )
        self._now_block = False

    def play(self, station):
        self._generation += 1
        generation = self._generation
        self.current = station
        self.now_name.set_label(station.get("name") or "Station")
        self.now_meta.set_label("Connecting…")
        self._sync_now_star()

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
        station = self.by_id.get(station_id)
        if station is None:
            self.now_meta.set_label(f"No station {station_id}")
            return False
        self.play(station)
        return True
