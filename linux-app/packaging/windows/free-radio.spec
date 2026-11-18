# -*- mode: python ; coding: utf-8 -*-
"""Freeze Free Radio. The MSYS2 GTK and GStreamer files are copied in afterwards."""

import os

from PyInstaller.utils.hooks import collect_submodules

spec_dir = os.path.abspath(SPECPATH)
linux_app = os.path.abspath(os.path.join(spec_dir, "..", ".."))

hidden = collect_submodules("free_radio")
hidden += [
    "gi",
    "gi.repository.Gtk",
    "gi.repository.Adw",
    "gi.repository.Gst",
    "gi.repository.GLib",
    "gi.repository.Gio",
    "gi.repository.GObject",
    "gi.repository.Gdk",
    "gi.repository.GdkPixbuf",
    "gi.repository.Pango",
    "gi.repository.Graphene",
    "gi.repository.Gsk",
    "gi.overrides",
    "gi.overrides.Gtk",
    "gi.overrides.Gio",
    "gi.overrides.Gst",
    "cairo",
]

a = Analysis(
    [os.path.join(spec_dir, "entry.py")],
    pathex=[linux_app],
    binaries=[],
    datas=[],
    hiddenimports=hidden,
    hookspath=[],
    hooksconfig={
        "gi": {
            "languages": ["en"],
            "icons": ["Adwaita"],
            "themes": ["Adwaita"],
            "module-versions": {
                "Gtk": "4.0",
                "Adw": "1",
                "Gst": "1.0",
            },
        },
        "gstreamer": {
            "include_plugins": [
                "coreelements",
                "playback",
                "typefindfunctions",
                "audioconvert",
                "audioresample",
                "volume",
                "ogg",
                "vorbis",
                "opus",
                "audioparsers",
                "mpg123",
                "id3demux",
                "icydemux",
                "soup",
                "autodetect",
                "wasapi",
                "directsound",
                "libav",
                "faad",
                "fdkaac",
                "app",
                "isomp4",
                "taglib",
                "audiomixer",
                "adder",
            ],
        },
    },
    runtime_hooks=[os.path.join(spec_dir, "rthook.py")],
    excludes=["tkinter", "unittest"],
    noarchive=False,
)
pyz = PYZ(a.pure, a.zipped_data)
exe = EXE(
    pyz,
    a.scripts,
    [],
    exclude_binaries=True,
    name="FreeRadio",
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=False,
    console=False,
    disable_windowed_traceback=True,
)
coll = COLLECT(
    exe,
    a.binaries,
    a.datas,
    strip=False,
    upx=False,
    name="FreeRadio",
)
