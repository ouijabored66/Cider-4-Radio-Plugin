#!/usr/bin/env bash
# Install the Radio plugin into Cider's plugins directory.
#
# macOS destination (not yet tried on a real Mac):
#   ~/Library/Application Support/sh.cider.genten/plugins/radio
# Linux destination, unchanged:
#   ~/.config/sh.cider.genten/plugins/radio
# Windows destination when this script is run from Git Bash, unchanged:
#   %APPDATA%\C2Windows\plugins\radio
#   (scripts/install.ps1 is the Windows script.)
#
# Quit Cider before installing. Start Cider again afterward and open Radio.

set -euo pipefail

SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
# shellcheck disable=SC1091
source "$SCRIPT_DIR/cider-paths.sh"

REPO_ROOT=$(cd "$SCRIPT_DIR/.." && pwd)
PLUGIN_IDENTIFIER="local.cider.radio"
DRY_RUN=0
PRINT_PATH=0
SOURCE_ARG=""
WORK_DIR=""

usage() {
  cat <<'EOF'
Usage: scripts/install.sh [--dry-run] [--print-path] [plugin-directory-or-zip]

Copy the Radio plugin into Cider's plugins folder for this computer.
Quit Cider first. Start it again and open Radio from the menu.

  --print-path   Print the plugins directory and exit
  --dry-run      Print the copy that would be made and do not write it

With no path, the script uses the radio/ folder in this repository,
then dist/ if that folder contains a built plugin.
EOF
}

cleanup() {
  if [ -n "$WORK_DIR" ] && [ -d "$WORK_DIR" ]; then
    rm -rf "$WORK_DIR"
  fi
}
trap cleanup EXIT

while [ $# -gt 0 ]; do
  case "$1" in
    --dry-run)
      DRY_RUN=1
      ;;
    --print-path)
      PRINT_PATH=1
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    --)
      shift
      break
      ;;
    -*)
      printf 'Unknown option: %s\n' "$1" >&2
      usage >&2
      exit 1
      ;;
    *)
      if [ -n "$SOURCE_ARG" ]; then
        printf 'Unexpected extra argument: %s\n' "$1" >&2
        usage >&2
        exit 1
      fi
      SOURCE_ARG=$1
      ;;
  esac
  shift
done

if [ -n "${1:-}" ]; then
  if [ -n "$SOURCE_ARG" ]; then
    printf 'Unexpected extra argument: %s\n' "$1" >&2
    exit 1
  fi
  SOURCE_ARG=$1
fi

PLUGINS_DIR=$(cider_plugins_dir)

if [ "$PRINT_PATH" -eq 1 ]; then
  printf '%s\n' "$PLUGINS_DIR"
  exit 0
fi

plugin_dir_from() {
  local dir=$1
  if [ -f "$dir/plugin.yml" ] && [ -f "$dir/plugin.js" ]; then
    (cd "$dir" && pwd)
    return 0
  fi
  if [ -f "$dir/radio/plugin.yml" ] && [ -f "$dir/radio/plugin.js" ]; then
    (cd "$dir/radio" && pwd)
    return 0
  fi
  return 1
}

resolve_source() {
  local input=${1:-}
  if [ -z "$input" ]; then
    if plugin_dir_from "$REPO_ROOT/radio" >/dev/null; then
      plugin_dir_from "$REPO_ROOT/radio"
      return 0
    fi
    if plugin_dir_from "$REPO_ROOT/dist" >/dev/null; then
      plugin_dir_from "$REPO_ROOT/dist"
      return 0
    fi
    printf 'No plugin found. Pass the radio folder or the release zip.\n' >&2
    return 1
  fi

  if [ -d "$input" ]; then
    if plugin_dir_from "$input"; then
      return 0
    fi
    printf 'No plugin.yml and plugin.js in %s\n' "$input" >&2
    return 1
  fi

  if [ -f "$input" ]; then
    case "$input" in
      *.zip) ;;
      *)
        printf 'Expected a directory or a .zip file: %s\n' "$input" >&2
        return 1
        ;;
    esac
    WORK_DIR=$(mktemp -d)
    unzip -q "$input" -d "$WORK_DIR"
    # BSD find (the one on macOS) has no -quit, so stop at the first match in bash.
    local yml found
    yml=""
    while IFS= read -r found; do
      yml=$found
      break
    done < <(find "$WORK_DIR" -maxdepth 3 -name plugin.yml)
    if [ -z "$yml" ]; then
      printf 'Zip has no plugin.yml: %s\n' "$input" >&2
      return 1
    fi
    plugin_dir_from "$(dirname "$yml")"
    return
  fi

  printf 'Not found: %s\n' "$input" >&2
  return 1
}

SOURCE=$(resolve_source "$SOURCE_ARG")

if ! grep -Eq "^identifier:[[:space:]]*['\"]?local\\.cider\\.radio['\"]?[[:space:]]*$" "$SOURCE/plugin.yml"; then
  printf 'plugin.yml in %s is not %s\n' "$SOURCE" "$PLUGIN_IDENTIFIER" >&2
  exit 1
fi

existing_install() {
  local plugins=$1
  local dir
  [ -d "$plugins" ] || return 1
  for dir in "$plugins"/*; do
    [ -d "$dir" ] || continue
    [ -f "$dir/plugin.yml" ] || continue
    if grep -Eq "^identifier:[[:space:]]*['\"]?local\\.cider\\.radio['\"]?[[:space:]]*$" "$dir/plugin.yml"; then
      (cd "$dir" && pwd)
      return 0
    fi
  done
  return 1
}

if DEST=$(existing_install "$PLUGINS_DIR"); then
  :
else
  DEST="$PLUGINS_DIR/radio"
fi

case "$DEST" in
  */plugins/*) ;;
  *)
    printf 'Refusing to install outside a Cider plugins directory: %s\n' "$DEST" >&2
    exit 1
    ;;
esac

if [ -L "$DEST" ]; then
  printf 'Refusing to replace a symlink: %s\n' "$DEST" >&2
  exit 1
fi

SOURCE_REAL=$(cd "$SOURCE" && pwd -P)
if [ -d "$DEST" ]; then
  DEST_REAL=$(cd "$DEST" && pwd -P)
  if [ "$SOURCE_REAL" = "$DEST_REAL" ]; then
    printf 'Source and destination are the same folder: %s\n' "$DEST" >&2
    exit 1
  fi
fi

printf 'From: %s\n' "$SOURCE"
printf 'To:   %s\n' "$DEST"

if [ "$DRY_RUN" -eq 1 ]; then
  printf 'Dry run: nothing was copied.\n'
  exit 0
fi

DATA_DIR=$(dirname "$PLUGINS_DIR")
DATA_EXISTED=0
if [ -d "$DATA_DIR" ]; then
  DATA_EXISTED=1
fi

mkdir -p "$PLUGINS_DIR"
rm -rf "$DEST"
mkdir -p "$DEST"
cp -R "$SOURCE"/. "$DEST"/

if [ "$DATA_EXISTED" -eq 0 ]; then
  printf 'Copied the plugin. Cider has not created its data folder yet; start Cider once so it picks this directory up.\n'
else
  printf 'Copied the plugin. Quit Cider if it is open, start it again, and open Radio from the menu.\n'
fi
