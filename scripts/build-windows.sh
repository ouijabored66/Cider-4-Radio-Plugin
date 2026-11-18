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
python -m pip install --upgrade pip --break-system-packages
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
# The subject must not be a bare /CN path, or MSYS2 rewrites it.
# basicConstraints makes the test certificate a trust anchor for souphttpsrc.
cat > "$FIXTURES/test-ca.cnf" <<'EOF'
[req]
distinguished_name = dn
x509_extensions = v3_ca
prompt = no
[dn]
CN = 127.0.0.1
[v3_ca]
basicConstraints = critical,CA:TRUE
keyUsage = critical,keyCertSign,cRLSign
subjectAltName = IP:127.0.0.1,DNS:localhost
EOF
KEY_PATH=$(cygpath -m "$FIXTURES/key.pem")
CERT_PATH=$(cygpath -m "$FIXTURES/cert.pem")
CONF_PATH=$(cygpath -m "$FIXTURES/test-ca.cnf")
MSYS_NO_PATHCONV=1 openssl req -x509 -newkey rsa:2048 \
  -keyout "$KEY_PATH" \
  -out "$CERT_PATH" \
  -days 2 -nodes \
  -config "$CONF_PATH"

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
