#!/usr/bin/env bash
# Build dist/FreeRadio-windows.zip from an MSYS2 UCRT64 shell.
# The zip contains FreeRadio.exe plus the GTK 4, libadwaita, and GStreamer runtime.
set -euo pipefail

ROOT=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
cd "$ROOT"

if [ "${MSYSTEM:-}" != "UCRT64" ]; then
  printf 'Run scripts/build-windows.sh from an MSYS2 UCRT64 shell.\n' >&2
  exit 1
fi

export PYTHONUTF8=1
export GI_TYPELIB_PATH="$(cygpath -m /ucrt64/lib/girepository-1.0)"
export GST_PLUGIN_PATH="$(cygpath -m /ucrt64/lib/gstreamer-1.0)"
export GST_PLUGIN_SYSTEM_PATH="$GST_PLUGIN_PATH"
export XDG_DATA_DIRS="$(cygpath -m /ucrt64/share)"
python -m pip install --upgrade pip
python -m pip install "pyinstaller>=6.14,<7" --break-system-packages

STAGE="$ROOT/dist/runtime-stage"
python "$ROOT/linux-app/packaging/windows/stage_runtime.py" "$STAGE"
python -m PyInstaller --noconfirm --clean \
  --distpath "$ROOT/dist" \
  --workpath "$ROOT/dist/pyi-work" \
  "$ROOT/linux-app/packaging/windows/free-radio.spec"
python "$ROOT/linux-app/packaging/windows/stage_runtime.py" overlay "$STAGE" "$ROOT/dist/FreeRadio"

FIXTURES="$ROOT/dist/fixtures"
python "$ROOT/linux-app/packaging/windows/make_fixtures.py" "$FIXTURES"
openssl req -x509 -newkey rsa:2048 \
  -keyout "$FIXTURES/key.pem" \
  -out "$FIXTURES/cert.pem" \
  -days 2 -nodes \
  -subj "/CN=127.0.0.1" \
  -addext "subjectAltName=DNS:localhost,IP:127.0.0.1"

python - "$ROOT" <<'PY'
import os
import sys
import zipfile

root = os.path.join(sys.argv[1], "dist", "FreeRadio")
out = os.path.join(sys.argv[1], "dist", "FreeRadio-windows.zip")
with zipfile.ZipFile(out, "w", compression=zipfile.ZIP_DEFLATED) as archive:
    for dirpath, _dirs, files in os.walk(root):
        for name in files:
            path = os.path.join(dirpath, name)
            archive.write(path, os.path.relpath(path, os.path.dirname(root)))
print(out)
print(os.path.getsize(out))
PY
