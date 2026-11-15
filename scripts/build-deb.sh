#!/usr/bin/env bash
# Build free-radio_<version>_all.deb. The app is Python, so the package is
# Architecture: all. The version is linux-app/VERSION.
# Two runs with the same SOURCE_DATE_EPOCH produce the same archive.
set -euo pipefail

ROOT=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
VERSION_FILE="$ROOT/linux-app/VERSION"
CATALOG="$ROOT/src/free-radio.json"
OUT_DIR=${1:-"$ROOT/dist"}

if [ ! -f "$VERSION_FILE" ] || [ ! -f "$CATALOG" ]; then
  printf 'Missing linux-app/VERSION or src/free-radio.json\n' >&2
  exit 1
fi

VERSION=$(tr -d '[:space:]' < "$VERSION_FILE")
if ! printf '%s' "$VERSION" | grep -Eq '^[0-9][0-9A-Za-z.+~-]*$'; then
  printf 'linux-app/VERSION is not a Debian version: %s\n' "$VERSION" >&2
  exit 1
fi

PKG_NAME="free-radio_${VERSION}_all.deb"
STAGE=$(mktemp -d)
trap 'rm -rf "$STAGE"' EXIT

mkdir -p \
  "$STAGE/DEBIAN" \
  "$STAGE/usr/bin" \
  "$STAGE/usr/share/applications" \
  "$STAGE/usr/share/icons/hicolor/scalable/apps" \
  "$STAGE/usr/share/free-radio"

install -m 0755 /dev/null "$STAGE/usr/bin/free-radio"
cat > "$STAGE/usr/bin/free-radio" <<'EOF'
#!/bin/sh
export PYTHONPATH=/usr/share/free-radio${PYTHONPATH:+:$PYTHONPATH}
exec python3 -m free_radio "$@"
EOF
chmod 0755 "$STAGE/usr/bin/free-radio"

cp -a "$ROOT/linux-app/free_radio" "$STAGE/usr/share/free-radio/free_radio"
find "$STAGE/usr/share/free-radio" -depth -type d -name __pycache__ -exec rm -rf {} +
find "$STAGE/usr/share/free-radio" -type f -name '*.pyc' -delete
install -m 0644 "$CATALOG" "$STAGE/usr/share/free-radio/free-radio.json"
install -m 0644 "$ROOT/linux-app/free-radio.desktop" \
  "$STAGE/usr/share/applications/free-radio.desktop"
install -m 0644 "$ROOT/linux-app/free-radio.svg" \
  "$STAGE/usr/share/icons/hicolor/scalable/apps/free-radio.svg"
install -m 0755 "$ROOT/linux-app/packaging/postinst" "$STAGE/DEBIAN/postinst"
find "$STAGE/usr/share/free-radio/free_radio" -type d -exec chmod 0755 {} +
find "$STAGE/usr/share/free-radio/free_radio" -type f -exec chmod 0644 {} +

INSTALLED_SIZE=$(du -sk "$STAGE/usr" | awk '{ print $1 }')

cat > "$STAGE/DEBIAN/control" <<EOF
Package: free-radio
Version: ${VERSION}
Section: sound
Priority: optional
Architecture: all
Maintainer: ouijabored66 <ouijabored66@users.noreply.github.com>
Homepage: https://github.com/ouijabored66/Cider-4-Radio-Plugin
Depends: python3,
 python3-gi,
 gir1.2-gtk-4.0,
 gir1.2-adw-1,
 python3-gst-1.0,
 gstreamer1.0-plugins-base,
 gstreamer1.0-plugins-good,
 gstreamer1.0-plugins-bad,
 gstreamer1.0-libav,
 glib-networking,
 ca-certificates
Recommends: gstreamer1.0-alsa | pipewire-audio
Installed-Size: ${INSTALLED_SIZE}
Description: Free internet radio, without Cider
 Plays the same Free Radio library as the Cider plugin: SomaFM,
 Radio Browser, Icecast, TuneIn, and Venice Classic Radio.
 .
 This package does not need Cider. It is a GTK application.
 Search the library, then play and stop a station.
EOF

if [ -z "${SOURCE_DATE_EPOCH:-}" ]; then
  SOURCE_DATE_EPOCH=$(stat -c %Y "$VERSION_FILE")
  export SOURCE_DATE_EPOCH
fi
chmod 0755 "$STAGE"
find "$STAGE" -exec touch -h -d "@${SOURCE_DATE_EPOCH}" {} +

mkdir -p "$OUT_DIR"
OUT_DIR=$(cd "$OUT_DIR" && pwd)
rm -f "$OUT_DIR/$PKG_NAME"
dpkg-deb --root-owner-group -Zgzip --build "$STAGE" "$OUT_DIR/$PKG_NAME" >/dev/null
printf '%s\n' "$OUT_DIR/$PKG_NAME"
