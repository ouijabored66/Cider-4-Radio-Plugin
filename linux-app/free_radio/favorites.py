"""Per-user favorite station ids."""

import json
import os
from pathlib import Path


def config_dir():
    base = os.environ.get("XDG_CONFIG_HOME") or str(Path.home() / ".config")
    return Path(base) / "free-radio"


def favorites_path():
    return config_dir() / "favorites.json"


class Favorites:
    def __init__(self, path=None):
        self.path = Path(path) if path else favorites_path()
        self.ids = []
        self.load()

    def load(self):
        self.ids = []
        if not self.path.is_file():
            return
        try:
            data = json.loads(self.path.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            return
        raw = data.get("ids") if isinstance(data, dict) else None
        if not isinstance(raw, list):
            return
        seen = set()
        for item in raw:
            if isinstance(item, str) and item and item not in seen:
                seen.add(item)
                self.ids.append(item)

    def save(self):
        self.path.parent.mkdir(parents=True, exist_ok=True)
        temporary = self.path.with_suffix(".json.tmp")
        temporary.write_text(
            json.dumps({"ids": self.ids}, indent=2) + "\n",
            encoding="utf-8",
        )
        temporary.replace(self.path)

    def contains(self, station_id):
        return station_id in self.ids

    def toggle(self, station_id):
        if station_id in self.ids:
            self.ids = [item for item in self.ids if item != station_id]
            added = False
        else:
            self.ids.append(station_id)
            added = True
        self.save()
        return added
