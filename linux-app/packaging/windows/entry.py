"""Frozen Windows entry point. Runtime paths are set before GTK is imported."""

import os
import sys


def prepare():
    base = getattr(sys, "_MEIPASS", None)
    if not base:
        return
    plugin_dir = os.path.join(base, "gst_plugins")
    gio_dir = os.path.join(base, "gio-modules")
    os.environ["PATH"] = base + os.pathsep + os.environ.get("PATH", "")
    if hasattr(os, "add_dll_directory"):
        os.add_dll_directory(base)
        if os.path.isdir(plugin_dir):
            os.add_dll_directory(plugin_dir)
        if os.path.isdir(gio_dir):
            os.add_dll_directory(gio_dir)
    typelibs = [
        os.path.join(base, "gi_typelibs"),
        os.path.join(base, "lib", "girepository-1.0"),
    ]
    os.environ["GI_TYPELIB_PATH"] = os.pathsep.join(path for path in typelibs if os.path.isdir(path))
    os.environ["GST_PLUGIN_PATH"] = plugin_dir
    os.environ["GST_PLUGIN_PATH_1_0"] = plugin_dir
    os.environ["GST_PLUGIN_SYSTEM_PATH"] = plugin_dir
    os.environ["GST_PLUGIN_SYSTEM_PATH_1_0"] = plugin_dir
    os.environ["GST_REGISTRY_FORK"] = "no"
    scanner = os.path.join(base, "gst-plugin-scanner.exe")
    if os.path.isfile(scanner):
        os.environ["GST_PLUGIN_SCANNER"] = scanner
        os.environ["GST_PLUGIN_SCANNER_1_0"] = scanner
    if os.path.isdir(gio_dir):
        os.environ["GIO_MODULE_DIR"] = gio_dir
        names = [name.lower() for name in os.listdir(gio_dir)]
        if any("gnutls" in name for name in names):
            os.environ["GIO_USE_TLS"] = "gnutls"
        elif any("openssl" in name for name in names):
            os.environ["GIO_USE_TLS"] = "openssl"
    os.environ["XDG_DATA_DIRS"] = os.path.join(base, "share")
    os.environ["GSETTINGS_SCHEMA_DIR"] = os.path.join(base, "share", "glib-2.0", "schemas")
    loaders = os.path.join(base, "loaders.cache")
    if os.path.isfile(loaders):
        os.environ["GDK_PIXBUF_MODULE_FILE"] = loaders
        os.environ["GDK_PIXBUF_MODULEDIR"] = base
    os.environ["GDK_BACKEND"] = "win32"
    cert = os.path.join(base, "ssl", "certs", "ca-bundle.crt")
    chosen = os.environ.get("FREERADIO_CA_BUNDLE")
    if not chosen or not os.path.isfile(chosen):
        chosen = cert if os.path.isfile(cert) else ""
    if chosen:
        os.environ["FREERADIO_CA_BUNDLE"] = chosen
        os.environ["SSL_CERT_FILE"] = chosen
        os.environ["CURL_CA_BUNDLE"] = chosen
    catalog = os.path.join(base, "free-radio.json")
    if os.path.isfile(catalog):
        os.environ.setdefault("FREERADIO_CATALOG", catalog)
    reg_root = os.environ.get("LOCALAPPDATA") or os.environ.get("TEMP") or base
    reg_dir = os.path.join(reg_root, "free-radio")
    os.makedirs(reg_dir, exist_ok=True)
    registry = os.path.join(reg_dir, "gst-registry.bin")
    os.environ["GST_REGISTRY"] = registry
    os.environ["GST_REGISTRY_1_0"] = registry


prepare()

from free_radio.__main__ import main  # noqa: E402

raise SystemExit(main())
