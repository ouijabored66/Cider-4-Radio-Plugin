"""Collect the MSYS2 UCRT64 GTK, libadwaita, and GStreamer runtime.

Run from the UCRT64 Python that has PyGObject installed:

    python stage_runtime.py dist/runtime-stage
    python stage_runtime.py overlay dist/runtime-stage dist/FreeRadio
"""

import glob
import os
import re
import shutil
import subprocess
import sys

REQUIRED_PLUGINS = (
    "libgstcoreelements.dll",
    "libgstplayback.dll",
    "libgsttypefindfunctions.dll",
    "libgstaudioconvert.dll",
    "libgstaudioresample.dll",
    "libgstvolume.dll",
    "libgstogg.dll",
    "libgstvorbis.dll",
    "libgstaudioparsers.dll",
    "libgstmpg123.dll",
    "libgstsoup.dll",
    "libgstautodetect.dll",
    "libgstlibav.dll",
)
SINK_PLUGINS = ("libgstwasapi.dll", "libgstdirectsound.dll")
OPTIONAL_PLUGINS = (
    "libgstid3demux.dll",
    "libgsticydemux.dll",
    "libgstopus.dll",
    "libgstfaad.dll",
    "libgstfdkaac.dll",
    "libgstapp.dll",
    "libgstisomp4.dll",
    "libgsttaglib.dll",
    "libgstaudiomixer.dll",
    "libgstadder.dll",
)
SYSTEM_DLL = (
    "kernel32",
    "kernelbase",
    "user32",
    "ntdll",
    "gdi32",
    "shell32",
    "ole32",
    "oleaut32",
    "advapi32",
    "ws2_32",
    "bcrypt",
    "crypt32",
    "secur32",
    "shlwapi",
    "comctl32",
    "comdlg32",
    "imm32",
    "setupapi",
    "version",
    "winmm",
    "msimg32",
    "usp10",
    "dnsapi",
    "iphlpapi",
    "netapi32",
    "userenv",
    "uxtheme",
    "dwmapi",
    "dxgi",
    "d3d11",
    "d3d12",
    "opengl32",
    "glu32",
    "hid",
    "winhttp",
    "wininet",
    "mpr",
    "normaliz",
    "psapi",
    "powrprof",
    "dbghelp",
    "wldap32",
    "cryptbase",
    "bcryptprimitives",
    "nsi",
    "rpcrt4",
    "sechost",
    "msvcrt",
    "ucrtbase",
    "vcruntime",
    "msvcp",
    "concrt",
    "api-ms-win",
    "ext-ms-win",
    "cfgmgr32",
    "windows.storage",
    "dwrite",
    "windowscodecs",
    "propsys",
    "shcore",
    "combase",
    "clbcatq",
)


def prefix_path():
    override = os.environ.get("FREERADIO_MINGW")
    if override and os.path.isdir(override):
        return os.path.abspath(override)
    return os.path.abspath(sys.prefix)


def is_system_dll(name):
    stem = os.path.splitext(os.path.basename(name))[0].lower()
    return stem.startswith(SYSTEM_DLL)


def run_ntldd(ntldd, path):
    result = subprocess.run(
        [ntldd, "-R", path],
        check=False,
        capture_output=True,
        text=True,
        errors="replace",
    )
    if result.returncode != 0 and not result.stdout:
        raise SystemExit(f"ntldd failed for {path}: {result.stderr.strip()}")
    return result.stdout


def parse_ntldd(text, prefix):
    found = []
    missing = []
    prefix_norm = os.path.normcase(os.path.abspath(prefix))
    for raw in text.splitlines():
        if "=>" not in raw:
            continue
        left, right = raw.split("=>", 1)
        name = left.strip()
        dest = right.strip().split(" (", 1)[0].strip().strip('"')
        if not name:
            continue
        if dest.lower() == "not found" or not dest:
            if not is_system_dll(name):
                missing.append(name)
            continue
        dest_abs = os.path.abspath(dest)
        if os.path.normcase(dest_abs).startswith(prefix_norm) and os.path.isfile(dest_abs):
            found.append(dest_abs)
    return found, missing


def copy_file(src, dest_dir):
    os.makedirs(dest_dir, exist_ok=True)
    dest = os.path.join(dest_dir, os.path.basename(src))
    if os.path.isfile(dest) and os.path.getsize(dest) == os.path.getsize(src):
        return dest
    shutil.copy2(src, dest)
    return dest


def rewrite_loaders(text):
    def repl(match):
        path = match.group(1)
        if path.lower().replace("\\", "/").endswith(".dll"):
            return '"' + os.path.basename(path.replace("\\", "/")) + '"'
        return match.group(0)

    return re.sub(r'"([^"]+)"', repl, text)


def find_ca_bundle(prefix):
    candidates = [
        os.path.join(prefix, "etc", "ssl", "certs", "ca-bundle.crt"),
        os.path.join(prefix, "ssl", "certs", "ca-bundle.crt"),
        os.path.join(prefix, "etc", "pki", "ca-trust", "extracted", "pem", "tls-ca-bundle.pem"),
    ]
    for path in candidates:
        if os.path.isfile(path):
            return path
    raise SystemExit("ca-bundle.crt was not found under " + prefix)


def stage(dest):
    prefix = prefix_path()
    print(f"MSYS2 prefix: {prefix}")
    bin_dir = os.path.join(prefix, "bin")
    plugin_dir = os.path.join(prefix, "lib", "gstreamer-1.0")
    ntldd = os.path.join(bin_dir, "ntldd.exe")
    if not os.path.isfile(ntldd):
        raise SystemExit(f"ntldd is not installed: {ntldd}")
    if os.path.isdir(dest):
        shutil.rmtree(dest)
    os.makedirs(dest)

    available = {name.lower(): os.path.join(plugin_dir, name) for name in os.listdir(plugin_dir)}
    chosen = []
    missing_plugins = []
    for name in REQUIRED_PLUGINS:
        path = available.get(name.lower())
        if path and os.path.isfile(path):
            chosen.append(path)
        else:
            missing_plugins.append(name)
    if not any(name.lower() in available for name in SINK_PLUGINS):
        missing_plugins.append(" or ".join(SINK_PLUGINS))
    else:
        for name in SINK_PLUGINS:
            path = available.get(name.lower())
            if path:
                chosen.append(path)
    for name in OPTIONAL_PLUGINS:
        path = available.get(name.lower())
        if path:
            chosen.append(path)
    if missing_plugins:
        print("plugins present:", ", ".join(sorted(available)))
        raise SystemExit("Missing GStreamer plugins: " + ", ".join(missing_plugins))
    for path in chosen:
        copy_file(path, os.path.join(dest, "gst_plugins"))
    print("plugins:", ", ".join(sorted(os.path.basename(path) for path in chosen)))

    seeds = list(chosen)
    for pattern in (
        "libgtk-4-*.dll",
        "libadwaita-*.dll",
        "libgstreamer-1.0-*.dll",
        "libgstbase-1.0-*.dll",
        "libgstaudio-1.0-*.dll",
        "libgstpbutils-1.0-*.dll",
        "libgsttag-1.0-*.dll",
        "libgstvideo-1.0-*.dll",
        "libgstapp-1.0-*.dll",
    ):
        found = glob.glob(os.path.join(bin_dir, pattern))
        if not found:
            raise SystemExit(f"Missing {pattern} in {bin_dir}")
        seeds.extend(found)

    gio_src = os.path.join(prefix, "lib", "gio", "modules")
    gio_dlls = glob.glob(os.path.join(gio_src, "*.dll"))
    if not gio_dlls:
        raise SystemExit(f"No GIO modules in {gio_src}")
    seeds.extend(gio_dlls)
    for path in gio_dlls:
        copy_file(path, os.path.join(dest, "gio-modules"))

    scanner_matches = glob.glob(os.path.join(prefix, "**", "gst-plugin-scanner.exe"), recursive=True)
    if not scanner_matches:
        raise SystemExit("gst-plugin-scanner.exe was not found")
    scanner = scanner_matches[0]
    copy_file(scanner, dest)
    seeds.append(scanner)

    gi_pyd = glob.glob(os.path.join(prefix, "lib", "python*", "site-packages", "gi", "_gi*.pyd"))
    seeds.extend(gi_pyd)
    python_exe = os.path.join(bin_dir, "python.exe")
    if os.path.isfile(python_exe):
        seeds.append(python_exe)

    query = os.path.join(bin_dir, "gdk-pixbuf-query-loaders.exe")
    if not os.path.isfile(query):
        raise SystemExit("gdk-pixbuf-query-loaders.exe was not found")
    cache = subprocess.run([query], check=True, capture_output=True, text=True, errors="replace").stdout
    loader_paths = re.findall(r'"([^"]+\.dll)"', cache, flags=re.IGNORECASE)
    for path in loader_paths:
        normalized = path.replace("/", os.sep)
        if os.path.isfile(normalized):
            seeds.append(normalized)
            copy_file(normalized, os.path.join(dest, "bin"))
    with open(os.path.join(dest, "loaders.cache"), "w", encoding="utf-8", newline="\n") as handle:
        handle.write(rewrite_loaders(cache))

    dlls = []
    missing = []
    seen = set()
    for seed in seeds:
        found, gone = parse_ntldd(run_ntldd(ntldd, seed), prefix)
        missing.extend(gone)
        for path in found:
            key = os.path.normcase(path)
            if key in seen:
                continue
            seen.add(key)
            dlls.append(path)
    if missing:
        unique = sorted(set(missing))
        raise SystemExit("GStreamer or GTK dependency was not found: " + ", ".join(unique))

    plugin_root = os.path.normcase(os.path.abspath(plugin_dir))
    copied = 0
    for path in dlls:
        if os.path.normcase(os.path.abspath(path)).startswith(plugin_root):
            continue
        if not path.lower().endswith(".dll"):
            continue
        copy_file(path, os.path.join(dest, "bin"))
        copied += 1
    print(f"runtime dlls: {copied}")

    typelib_src = os.path.join(prefix, "lib", "girepository-1.0")
    typelib_dest = os.path.join(dest, "gi_typelibs")
    os.makedirs(typelib_dest, exist_ok=True)
    for path in glob.glob(os.path.join(typelib_src, "*.typelib")):
        copy_file(path, typelib_dest)
    for required in ("Gtk-4.0.typelib", "Adw-1.typelib", "Gst-1.0.typelib", "Gio-2.0.typelib"):
        if not os.path.isfile(os.path.join(typelib_dest, required)):
            raise SystemExit(f"Missing typelib {required}")

    schema_src = os.path.join(prefix, "share", "glib-2.0", "schemas")
    schema_dest = os.path.join(dest, "share", "glib-2.0", "schemas")
    os.makedirs(schema_dest, exist_ok=True)
    xmls = glob.glob(os.path.join(schema_src, "*.xml"))
    if not xmls:
        raise SystemExit(f"No GSettings schemas in {schema_src}")
    for path in xmls:
        copy_file(path, schema_dest)
    compiler = os.path.join(bin_dir, "glib-compile-schemas.exe")
    subprocess.run([compiler, schema_dest], check=True)

    icons = os.path.join(dest, "share", "icons")
    adwaita = os.path.join(prefix, "share", "icons", "Adwaita")
    if not os.path.isdir(adwaita):
        raise SystemExit(f"Adwaita icons are not installed: {adwaita}")
    shutil.copytree(adwaita, os.path.join(icons, "Adwaita"), dirs_exist_ok=True)
    cursors = os.path.join(icons, "Adwaita", "cursors")
    if os.path.isdir(cursors):
        shutil.rmtree(cursors)
    hicolor = os.path.join(prefix, "share", "icons", "hicolor", "index.theme")
    if os.path.isfile(hicolor):
        os.makedirs(os.path.join(icons, "hicolor"), exist_ok=True)
        shutil.copy2(hicolor, os.path.join(icons, "hicolor", "index.theme"))

    cert_dest = os.path.join(dest, "ssl", "certs")
    os.makedirs(cert_dest, exist_ok=True)
    shutil.copy2(find_ca_bundle(prefix), os.path.join(cert_dest, "ca-bundle.crt"))

    repo = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", ".."))
    catalog = os.path.join(repo, "src", "free-radio.json")
    if not os.path.isfile(catalog):
        raise SystemExit(f"Missing catalog {catalog}")
    shutil.copy2(catalog, os.path.join(dest, "free-radio.json"))
    print(f"staged runtime: {dest}")


def overlay(stage_dir, app_dir):
    internal = os.path.join(app_dir, "_internal")
    if not os.path.isdir(internal):
        internal = app_dir
    if not os.path.isdir(internal):
        raise SystemExit(f"Frozen app folder was not found: {app_dir}")

    def merge(src, dest):
        os.makedirs(dest, exist_ok=True)
        for name in os.listdir(src):
            path = os.path.join(src, name)
            target = os.path.join(dest, name)
            if os.path.isdir(path):
                merge(path, target)
            else:
                shutil.copy2(path, target)

    bin_dir = os.path.join(stage_dir, "bin")
    if os.path.isdir(bin_dir):
        merge(bin_dir, internal)
    for name in ("gst_plugins", "gio-modules", "gi_typelibs", "share", "ssl"):
        src = os.path.join(stage_dir, name)
        if os.path.isdir(src):
            merge(src, os.path.join(internal, name))
    for name in ("loaders.cache", "free-radio.json", "gst-plugin-scanner.exe"):
        src = os.path.join(stage_dir, name)
        if os.path.isfile(src):
            shutil.copy2(src, os.path.join(internal, name))
    needed = [
        os.path.join(internal, "free-radio.json"),
        os.path.join(internal, "gst_plugins", "libgstsoup.dll"),
        os.path.join(internal, "gst_plugins", "libgstmpg123.dll"),
        os.path.join(internal, "gst_plugins", "libgstlibav.dll"),
        os.path.join(internal, "gst_plugins", "libgstogg.dll"),
        os.path.join(internal, "gi_typelibs", "Gtk-4.0.typelib"),
        os.path.join(internal, "gi_typelibs", "Adw-1.typelib"),
        os.path.join(internal, "ssl", "certs", "ca-bundle.crt"),
        os.path.join(internal, "gio-modules"),
    ]
    missing = [path for path in needed if not os.path.exists(path)]
    if missing:
        raise SystemExit("Frozen runtime is incomplete: " + ", ".join(missing))
    print(f"runtime overlaid onto {internal}")


def main(argv):
    if len(argv) == 2:
        stage(os.path.abspath(argv[1]))
        return 0
    if len(argv) == 4 and argv[1] == "overlay":
        overlay(os.path.abspath(argv[2]), os.path.abspath(argv[3]))
        return 0
    print("usage: stage_runtime.py STAGE | stage_runtime.py overlay STAGE APP", file=sys.stderr)
    return 2


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
