# Cider 4 Radio Plugin

Free internet radio plugin for Cider 4. It opens on the Free Radio library (819 stations, singing and instrumental) and can also search TuneIn, Radio Browser, SomaFM, the Icecast directory and iptv-org.

## Features

- **Free Radio library**: 48 SomaFM, 68 Radio Browser, 10 Icecast, 685 TuneIn and 2 Venice Classic Radio stations. Instrumental and vocal stations are grouped separately. TuneIn stations keep their guide id. A direct stream is used when the library has one; otherwise playback asks TuneIn.
- Search five free sources at the same time. Library matches are listed first, and a station that is already in the library is not shown twice:
  - **TuneIn** and **Radio Browser**: live search
  - **SomaFM**: the full channel list, filtered locally
  - **Icecast** directory (dir.xiph.org): about 7,000 streams, including Ogg, downloaded once a day and searched locally
  - **iptv-org**: M3U support is built in, but iptv-org currently publishes no radio playlist, so this source shows as unreachable
- A source that is down never breaks the others. Saved library stations still appear.
- Play, stop and adjust volume from the Radio page
- Pauses Apple Music when a station starts, and stops the radio when Apple Music plays
- "Radio" and "Stop Radio" menu entries

## Install

Download [cider-radio-plugin-0.3.2.zip](https://github.com/ouijabored66/Cider-4-Radio-Plugin/releases/download/v0.3.3/cider-radio-plugin-0.3.2.zip) from the [v0.3.3 release](https://github.com/ouijabored66/Cider-4-Radio-Plugin/releases/tag/v0.3.3). The zip is the same plugin on Linux, Windows, and macOS, and it unpacks as a folder already named `local.cider.radio`. Quit Cider and put that folder in Cider's plugins directory, alongside your other plugins. Cider loads it from `http://127.0.0.1:10767/plugins/local.cider.radio/plugin.js`. Start Cider, enable **Radio** if it is disabled, and open **Radio** from the menu.

From a copy of this repository, `scripts/install.sh` copies `local.cider.radio` into the plugins directory and removes an older `radio` folder of this plugin:

```bash
chmod +x scripts/install.sh
./scripts/install.sh
```

To install the downloaded zip the same way:

```bash
./scripts/install.sh ~/Downloads/cider-radio-plugin-0.3.2.zip
```

Cider can open that directory for you: **Settings → Extensions → Plugins**, then the **…** menu, **Open AppData Folder**, and go into `plugins`.

### macOS

```
~/Library/Application Support/sh.cider.genten/plugins/local.cider.radio
```

That is the plugins directory Cider 4 reports on macOS (`~/Library/Application Support/sh.cider.genten`). The [Cider FAQ](https://cider.gitbook.io/welcome-to-gitbook/docs/1.client/faqs) writes this path without the `~`. The folder is in your home Library, the same place Cider's startup log calls `appData`.

`./scripts/install.sh --print-path` prints the plugins directory. `--dry-run` prints the copy and does not write it. These macOS steps have not been tested on a real Mac. If Radio does not appear, use **Open AppData Folder** (above) and confirm `local.cider.radio` is inside the `plugins` directory Cider opened.

When `sh.cider.genten` is absent and an older `~/Library/Application Support/sh.cider.electron` data folder is already on disk, the script uses that older folder.

### Linux

```
~/.config/sh.cider.genten/plugins/local.cider.radio
```

The Flatpak build keeps its data here when `~/.config/sh.cider.genten` is not present:

```
~/.var/app/sh.cider.Cider/config/sh.cider.genten/plugins/local.cider.radio
```

`./scripts/install.sh` uses `~/.config/sh.cider.genten` when that data folder exists, and when Cider has not created a data folder yet. It uses the Flatpak path when that is the data folder already on disk. `XDG_CONFIG_HOME` is honored when it is set.

### Windows

```
%APPDATA%\C2Windows\plugins\local.cider.radio
```

Microsoft Store installs use:

```
%LOCALAPPDATA%\packages\27554FireDevElijahKlauman.CiderEA_270bejk4xgzqp\LocalCache\Roaming\C2Windows\plugins\local.cider.radio
```

`scripts/install.ps1` keeps `%APPDATA%\C2Windows` when that folder exists and when Cider has not created a data folder yet. When `C2Windows` is absent and `%APPDATA%\sh.cider.genten`, `%APPDATA%\sh.cider.dotnet`, or the Store folder above is already on disk, the script uses that folder.

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1
```

## Free Radio for Linux

Free Radio for Linux is a standalone desktop app. It plays the same Free Radio library as the Cider plugin and does not need Cider installed.

- 819 stations (SomaFM, Radio Browser, Icecast, TuneIn, DR, and Venice Classic Radio)
- Search the library
- Play and stop
- Volume
- Now playing, including a stream title or artist when the station sends one
- Favorites: star a station from its row or the now-playing bar. The Favorites view lists them. They are saved in `~/.config/free-radio/favorites.json` (`XDG_CONFIG_HOME` is used when it is set)

Download [free-radio_0.3.3_all.deb](https://github.com/ouijabored66/Cider-4-Radio-Plugin/releases/download/v0.3.3/free-radio_0.3.3_all.deb) from the [v0.3.3 release](https://github.com/ouijabored66/Cider-4-Radio-Plugin/releases/tag/v0.3.3). The package is published only on GitHub, not on an apt repository or any other store.

```bash
sudo apt install ./free-radio_0.3.3_all.deb
```

`apt` installs the dependencies: Python 3, PyGObject, GTK 4, libadwaita, GStreamer (base, good, bad, and libav), glib-networking, and CA certificates. Then open **Free Radio** from the app menu, or run `free-radio`.

Source: [linux-app/](linux-app/). `scripts/build-deb.sh` rebuilds `dist/free-radio_<version>_all.deb` from `linux-app/VERSION`.

## Free Radio for iPhone

A companion iPhone app (version 1.1.1) with the same Free Radio library, plus the station directories from Radio Browser, TuneIn, SomaFM and the Icecast directory. iptv-org support is included, but its radio playlist is currently unavailable upstream, so that source shows as unreachable.

- Browse the Free Radio library by group. Instrumental and vocal stations are separate (for example SomaFM and SomaFM Vocal, Jazz Instrumental and Jazz · Vocal), plus Venice Classic Radio.
- Search across the library and all sources at once
- Favorites
- Background and lock-screen playback
- Built with [xtool](https://github.com/xtool-org/xtool), so no Mac or Xcode is needed

Version 1.1.1 is the source in [ios/](ios/). Download [FreeRadio-1.1.1.ipa](https://github.com/ouijabored66/Cider-4-Radio-Plugin/releases/download/v0.3.3/FreeRadio-1.1.1.ipa) from the [v0.3.3 release](https://github.com/ouijabored66/Cider-4-Radio-Plugin/releases/tag/v0.3.3). You can also build the unsigned IPA with [xtool](https://github.com/xtool-org/xtool) (`xtool dev build --ipa` inside `ios/`).

### Install

Download `FreeRadio-1.1.1.ipa`, then install it with any of these tools using your own Apple ID:

- **SideStore** (no computer after the one-time setup): open SideStore, go to My Apps, tap **+** and pick the IPA. SideStore refreshes the app automatically before the 7-day free-signing expiry.
- **iLoader** (computer): connect the iPhone by USB, sign in with your Apple ID, import the IPA and choose Install.
- **Sideloadly** (computer): connect the iPhone by USB, drag the IPA into Sideloadly, enter your Apple ID and press Start.

With a free Apple ID the app is signed for 7 days. SideStore keeps it refreshed on its own; iLoader and Sideloadly installs need a quick re-install each week.

Source: [ios/](ios/)

## Stations and credits

This project hosts no audio. Each station's stream address is stored as published and is left unchanged, so playback connects to that broadcaster's own stream. All rights in the streams and in the music belong to the broadcasters and the other rightsholders.

The library has 819 stations: 502 instrumental, 315 vocal, and 2 Venice Classic Radio.

| Source | Stations | Credit |
| --- | ---: | --- |
| SomaFM | 48 | [somafm.com](https://somafm.com/), listener-supported |
| Radio Browser | 68 | [radio-browser.info](https://www.radio-browser.info/), community directory, CC0 data |
| Icecast directory | 10 | [dir.xiph.org](https://dir.xiph.org/) |
| TuneIn | 691 | [tunein.com](https://tunein.com/). Streams are the exported address when one was saved, otherwise resolved through TuneIn's public OPML API (`opml.radiotime.com`). Six DR channels use DR's own HTTPS MP3 address |
| Venice Classic Radio | 2 | [veniceclassicradio.eu](https://veniceclassicradio.eu/) |

Every bundled station records its source and a homepage: a SomaFM channel page, a TuneIn guide page, the station homepage when Radio Browser had one, or the directory page for Icecast. Venice Classic Radio stations use `https://veniceclassicradio.eu/`.

I AM NOT AFFILIATED WITH ANY OF THESE NETWORKS AND I DO NOT CLAIM OWNERSHIP, THIS APP IS COMPLETELY FREE FOR OTHERS TO USE!!!
A broadcaster who wants a station removed can open an issue.

## Notes

- macOS install uses `~/Library/Application Support/sh.cider.genten/plugins/local.cider.radio`. The folder name is the plugin identifier. These steps have not been retested on a real Mac after the rename.
- Directory search can still find stations that are not in this library, including the rest of the SomaFM channel list.
- The iptv-org source is currently empty upstream. Some stations may not play if their stream is offline or uses an unsupported format.
- The eight Jellyfin visualizer channels are not included. They are MPEG-TS video served only on the server's own network, and these apps play audio.
- Not affiliated with Cider, SomaFM, Radio Browser, Icecast, TuneIn, or Venice Classic Radio.

## Contributors

- **ouijabored66** — creator and owner
- **Grok Bot** — ouijabored66's personal AI agent. Release polish, licensing, and upkeep.
