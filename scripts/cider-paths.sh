# Cider 4 data directories used by scripts/install.sh.
# Source this file; it defines cider_plugins_dir.
#
# Paths come from Cider's own startup log and from the Cider FAQ
# (https://cider.gitbook.io/welcome-to-gitbook/docs/1.client/faqs):
#   macOS:  ~/Library/Application Support/sh.cider.genten
#           (the FAQ omits the leading ~; Cider's log includes the home directory)
#   Linux:  ~/.config/sh.cider.genten
#           Flatpak: ~/.var/app/sh.cider.Cider/config/sh.cider.genten
#   Windows: %APPDATA%\C2Windows
#           Microsoft Store: %LOCALAPPDATA%\packages\27554FireDevElijahKlauman.CiderEA_270bejk4xgzqp\LocalCache\Roaming\C2Windows
#           %APPDATA%\sh.cider.dotnet is used when that data folder is already present
#   Older clients: ~/Library/Application Support/sh.cider.electron
#
# When the platform's usual data folder exists, that folder wins, so a second
# leftover directory does not move an existing Linux or Windows install.
# CIDER_RADIO_OS overrides the detected system (Darwin, Linux, or Windows_NT)
# so the lookup can be checked without a Mac.

cider_os() {
  if [ -n "${CIDER_RADIO_OS:-}" ]; then
    printf '%s\n' "$CIDER_RADIO_OS"
    return
  fi
  uname -s
}

cider_plugins_dir() {
  local os home default
  local -a candidates=()
  os=$(cider_os)
  home="${HOME:?HOME is not set}"

  case "$os" in
    Darwin)
      default="$home/Library/Application Support/sh.cider.genten"
      candidates+=("$default" "$home/Library/Application Support/sh.cider.electron")
      ;;
    Linux)
      default="${XDG_CONFIG_HOME:-$home/.config}/sh.cider.genten"
      candidates+=("$default" "$home/.var/app/sh.cider.Cider/config/sh.cider.genten")
      ;;
    MINGW*|MSYS*|CYGWIN*|Windows_NT)
      local appdata="${APPDATA:-$home/AppData/Roaming}"
      local localappdata="${LOCALAPPDATA:-$home/AppData/Local}"
      default="$appdata/C2Windows"
      candidates+=(
        "$default"
        "$appdata/sh.cider.genten"
        "$appdata/sh.cider.dotnet"
        "$localappdata/packages/27554FireDevElijahKlauman.CiderEA_270bejk4xgzqp/LocalCache/Roaming/C2Windows"
      )
      ;;
    *)
      printf 'Unsupported operating system: %s\n' "$os" >&2
      return 1
      ;;
  esac

  if [ -d "$default" ]; then
    printf '%s\n' "$default/plugins"
    return 0
  fi

  local candidate
  for candidate in "${candidates[@]}"; do
    if [ -d "$candidate" ]; then
      printf '%s\n' "$candidate/plugins"
      return 0
    fi
  done

  printf '%s\n' "$default/plugins"
}
