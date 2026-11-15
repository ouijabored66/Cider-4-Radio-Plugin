#!/usr/bin/env bash
# Install the plugin into a fake home directory, including a simulated Mac path.
set -euo pipefail

SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
REPO_ROOT=$(cd "$SCRIPT_DIR/.." && pwd)
INSTALL="$SCRIPT_DIR/install.sh"
ROOT=$(mktemp -d)
trap 'rm -rf "$ROOT"' EXIT

export HOME="$ROOT/home"
unset XDG_CONFIG_HOME APPDATA LOCALAPPDATA
mkdir -p "$HOME"
export CIDER_RADIO_OS=Darwin

plugins="$HOME/Library/Application Support/sh.cider.genten/plugins"

path=$("$INSTALL" --print-path)
if [ "$path" != "$plugins" ]; then
  printf 'print-path returned %s\n' "$path" >&2
  exit 1
fi

"$INSTALL" --dry-run >/dev/null
if [ -d "$HOME/Library" ]; then
  printf 'dry-run created %s\n' "$HOME/Library" >&2
  exit 1
fi

installed="$plugins/local.cider.radio"
"$INSTALL" >/dev/null
cmp -s "$REPO_ROOT/local.cider.radio/plugin.js" "$installed/plugin.js"
cmp -s "$REPO_ROOT/local.cider.radio/plugin.yml" "$installed/plugin.yml"

mkdir -p "$plugins/other-plugin"
printf 'keep\n' > "$plugins/other-plugin/plugin.yml"
"$INSTALL" >/dev/null
if [ "$(cat "$plugins/other-plugin/plugin.yml")" != "keep" ]; then
  printf 'install changed another plugin\n' >&2
  exit 1
fi

# A copy in plugins/radio is the 0.3.0 layout. Cider requests the identifier path.
rm -rf "$installed"
mkdir -p "$plugins/radio"
cp "$REPO_ROOT/local.cider.radio/plugin.yml" "$plugins/radio/plugin.yml"
printf 'old\n' > "$plugins/radio/plugin.js"
"$INSTALL" >/dev/null
cmp -s "$REPO_ROOT/local.cider.radio/plugin.js" "$installed/plugin.js"
if [ -d "$plugins/radio" ]; then
  printf 'install left the old radio folder in place\n' >&2
  exit 1
fi

rm -rf "$plugins"
python3 - "$ROOT/plugin.zip" "$REPO_ROOT/local.cider.radio" <<'PY'
import sys
import zipfile
from pathlib import Path
zip_path, radio = Path(sys.argv[1]), Path(sys.argv[2])
with zipfile.ZipFile(zip_path, "w") as archive:
    for path in radio.iterdir():
        if path.is_file():
            archive.write(path, f"radio/{path.name}")
PY
"$INSTALL" "$ROOT/plugin.zip" >/dev/null
cmp -s "$REPO_ROOT/local.cider.radio/plugin.js" "$installed/plugin.js"
if [ -d "$plugins/radio" ]; then
  printf 'zip install created a radio folder\n' >&2
  exit 1
fi

mkdir -p "$plugins"
ln -s "$ROOT/elsewhere" "$plugins/linked"
# A symlink at the identifier path is refused, and its target is left alone.
rm -rf "$installed"
mkdir -p "$ROOT/elsewhere"
printf 'target\n' > "$ROOT/elsewhere/marker"
ln -s "$ROOT/elsewhere" "$installed"
if "$INSTALL" >/dev/null 2>"$ROOT/symlink-err"; then
  printf 'install replaced a symlink\n' >&2
  exit 1
fi
if [ "$(cat "$ROOT/elsewhere/marker")" != "target" ]; then
  printf 'install wrote through the symlink\n' >&2
  exit 1
fi
rm "$installed"

bad="$ROOT/bad"
mkdir -p "$bad"
printf 'identifier: other.plugin\n' > "$bad/plugin.yml"
printf 'x\n' > "$bad/plugin.js"
before=$(find "$plugins" -type f | sort)
if "$INSTALL" "$bad" >/dev/null 2>"$ROOT/bad-err"; then
  printf 'install accepted a different plugin\n' >&2
  exit 1
fi
after=$(find "$plugins" -type f | sort)
if [ "$before" != "$after" ]; then
  printf 'a rejected install changed the plugins folder\n' >&2
  exit 1
fi

export CIDER_RADIO_OS=Linux
linux_path=$("$INSTALL" --print-path)
if [ "$linux_path" != "$HOME/.config/sh.cider.genten/plugins" ]; then
  printf 'linux print-path returned %s\n' "$linux_path" >&2
  exit 1
fi

printf 'Install checks passed.\n'
