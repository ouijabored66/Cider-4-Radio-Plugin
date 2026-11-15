#!/usr/bin/env bash
# Check Cider plugin path selection without a Mac or a Windows machine.
set -euo pipefail

SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
# shellcheck disable=SC1091
source "$SCRIPT_DIR/cider-paths.sh"

ROOT=$(mktemp -d)
trap 'rm -rf "$ROOT"' EXIT

failures=0

check() {
  local name=$1
  local expected=$2
  local actual
  actual=$(cider_plugins_dir)
  if [ "$actual" = "$expected" ]; then
    printf 'ok  %s\n' "$name"
  else
    printf 'FAIL %s\n  expected: %s\n  actual:   %s\n' "$name" "$expected" "$actual" >&2
    return 1
  fi
}

# Each case gets a clean environment. A failing check increments failures in this shell.
run_case() {
  local name=$1
  local os=$2
  local home=$3
  local expected=$4
  shift 4
  mkdir -p "$home"
  while [ $# -gt 0 ]; do
    mkdir -p "$1"
    shift
  done
  if ! (
    unset XDG_CONFIG_HOME APPDATA LOCALAPPDATA
    export HOME="$home"
    export CIDER_RADIO_OS="$os"
    check "$name" "$expected"
  ); then
    failures=$((failures + 1))
  fi
}

run_case mac-default Darwin \
  "$ROOT/home-mac-default" \
  "$ROOT/home-mac-default/Library/Application Support/sh.cider.genten/plugins"

run_case mac-genten-wins Darwin \
  "$ROOT/home-mac-genten-wins" \
  "$ROOT/home-mac-genten-wins/Library/Application Support/sh.cider.genten/plugins" \
  "$ROOT/home-mac-genten-wins/Library/Application Support/sh.cider.genten" \
  "$ROOT/home-mac-genten-wins/Library/Application Support/sh.cider.electron"

run_case mac-electron-fallback Darwin \
  "$ROOT/home-mac-electron-fallback" \
  "$ROOT/home-mac-electron-fallback/Library/Application Support/sh.cider.electron/plugins" \
  "$ROOT/home-mac-electron-fallback/Library/Application Support/sh.cider.electron"

run_case linux-default Linux \
  "$ROOT/home-linux-default" \
  "$ROOT/home-linux-default/.config/sh.cider.genten/plugins"

run_case linux-config-wins Linux \
  "$ROOT/home-linux-config-wins" \
  "$ROOT/home-linux-config-wins/.config/sh.cider.genten/plugins" \
  "$ROOT/home-linux-config-wins/.config/sh.cider.genten" \
  "$ROOT/home-linux-config-wins/.var/app/sh.cider.Cider/config/sh.cider.genten"

run_case linux-flatpak Linux \
  "$ROOT/home-linux-flatpak" \
  "$ROOT/home-linux-flatpak/.var/app/sh.cider.Cider/config/sh.cider.genten/plugins" \
  "$ROOT/home-linux-flatpak/.var/app/sh.cider.Cider/config/sh.cider.genten"

mkdir -p "$ROOT/xdg/sh.cider.genten" "$ROOT/home-linux-xdg"
if ! (
  unset APPDATA LOCALAPPDATA
  export HOME="$ROOT/home-linux-xdg"
  export CIDER_RADIO_OS=Linux
  export XDG_CONFIG_HOME="$ROOT/xdg"
  check linux-xdg "$XDG_CONFIG_HOME/sh.cider.genten/plugins"
); then
  failures=$((failures + 1))
fi

mkdir -p "$ROOT/home-win-default"
if ! (
  unset XDG_CONFIG_HOME LOCALAPPDATA
  export HOME="$ROOT/home-win-default"
  export CIDER_RADIO_OS=Windows_NT
  export APPDATA="$ROOT/appdata-win-default"
  check win-default "$APPDATA/C2Windows/plugins"
); then
  failures=$((failures + 1))
fi

mkdir -p "$ROOT/home-win-c2" "$ROOT/appdata-win-c2/C2Windows" "$ROOT/appdata-win-c2/sh.cider.dotnet"
if ! (
  unset XDG_CONFIG_HOME LOCALAPPDATA
  export HOME="$ROOT/home-win-c2"
  export CIDER_RADIO_OS=Windows_NT
  export APPDATA="$ROOT/appdata-win-c2"
  check win-c2-wins "$APPDATA/C2Windows/plugins"
); then
  failures=$((failures + 1))
fi

mkdir -p "$ROOT/home-win-dotnet" "$ROOT/appdata-win-dotnet/sh.cider.dotnet"
if ! (
  unset XDG_CONFIG_HOME LOCALAPPDATA
  export HOME="$ROOT/home-win-dotnet"
  export CIDER_RADIO_OS=Windows_NT
  export APPDATA="$ROOT/appdata-win-dotnet"
  check win-dotnet "$APPDATA/sh.cider.dotnet/plugins"
); then
  failures=$((failures + 1))
fi

store="$ROOT/local-win-store/packages/27554FireDevElijahKlauman.CiderEA_270bejk4xgzqp/LocalCache/Roaming/C2Windows"
mkdir -p "$ROOT/home-win-store" "$store"
if ! (
  unset XDG_CONFIG_HOME APPDATA
  export HOME="$ROOT/home-win-store"
  export CIDER_RADIO_OS=Windows_NT
  export LOCALAPPDATA="$ROOT/local-win-store"
  check win-store "$store/plugins"
); then
  failures=$((failures + 1))
fi

if CIDER_RADIO_OS=BeOS HOME="$ROOT" bash -c "source '$SCRIPT_DIR/cider-paths.sh'; cider_plugins_dir" >/dev/null 2>"$ROOT/err"; then
  printf 'FAIL unsupported-os should fail\n' >&2
  failures=$((failures + 1))
else
  printf 'ok  unsupported-os\n'
fi

if [ "$failures" -ne 0 ]; then
  printf '%s path check(s) failed\n' "$failures" >&2
  exit 1
fi

printf 'All path checks passed.\n'
