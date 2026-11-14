# Cider 4 Radio Plugin

Free internet radio plugin for Cider 4. It opens on the Free Radio library (813 stations, singing and instrumental) and can also search TuneIn, Radio Browser, SomaFM, the Icecast directory and iptv-org.

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

1. Download [cider-radio-plugin-0.3.0.zip](https://github.com/ouijabored66/Cider-4-Radio-Plugin/releases/download/V0.3.0/cider-radio-plugin-0.3.0.zip) from the [latest release](https://github.com/ouijabored66/Cider-4-Radio-Plugin/releases/latest).
2. Unzip it into Cider's plugins folder so the `radio` folder sits alongside your other plugins.
3. Restart Cider and open **Radio** from the menu.

## Free Radio for iPhone

A companion iPhone app (version 1.1.1) with the same Free Radio library, plus the station directories from Radio Browser, TuneIn, SomaFM and the Icecast directory. iptv-org support is included, but its radio playlist is currently unavailable upstream, so that source shows as unreachable.

- Browse the Free Radio library by group. Instrumental and vocal stations are separate (for example SomaFM and SomaFM Vocal, Jazz Instrumental and Jazz · Vocal), plus Venice Classic Radio.
- Search across the library and all sources at once
- Favorites
- Background and lock-screen playback
- Built with [xtool](https://github.com/xtool-org/xtool), so no Mac or Xcode is needed

Version 1.1.1 is the source in [ios/](ios/). Build the unsigned IPA with [xtool](https://github.com/xtool-org/xtool) (`xtool dev build --ipa` inside `ios/`) and install that build. The `FreeRadio.ipa` on the ios-v1.0 release does not include this library.

### Install

Build or download `FreeRadio.ipa`, then install it with any of these tools using your own Apple ID:

- **SideStore** (no computer after the one-time setup): open SideStore, go to My Apps, tap **+** and pick the IPA. SideStore refreshes the app automatically before the 7-day free-signing expiry.
- **iLoader** (computer): connect the iPhone by USB, sign in with your Apple ID, import the IPA and choose Install.
- **Sideloadly** (computer): connect the iPhone by USB, drag the IPA into Sideloadly, enter your Apple ID and press Start.

With a free Apple ID the app is signed for 7 days. SideStore keeps it refreshed on its own; iLoader and Sideloadly installs need a quick re-install each week.

Source: [ios/](ios/)

## Stations and credits

This project hosts no audio. Each station's stream address is stored as published and is left unchanged, so playback connects to that broadcaster's own stream. All rights in the streams and in the music belong to the broadcasters and the other rightsholders.

The library has 813 stations: 500 instrumental, 311 vocal, and 2 Venice Classic Radio.

| Source | Stations | Credit |
| --- | ---: | --- |
| SomaFM | 48 | [somafm.com](https://somafm.com/), listener-supported |
| Radio Browser | 68 | [radio-browser.info](https://www.radio-browser.info/), community directory, CC0 data |
| Icecast directory | 10 | [dir.xiph.org](https://dir.xiph.org/) |
| TuneIn | 685 | [tunein.com](https://tunein.com/). Streams are the exported address when one was saved, otherwise resolved through TuneIn's public OPML API (`opml.radiotime.com`) |
| Venice Classic Radio | 2 | [veniceclassicradio.eu](https://veniceclassicradio.eu/) |

Every bundled station records its source and a homepage: a SomaFM channel page, a TuneIn guide page, the station homepage when Radio Browser had one, or the directory page for Icecast. Venice Classic Radio stations use `https://veniceclassicradio.eu/`.

A broadcaster who wants a station removed can open an issue.

## Notes

- Directory search can still find stations that are not in this library, including the rest of the SomaFM channel list.
- The iptv-org source is currently empty upstream. Some stations may not play if their stream is offline or uses an unsupported format.
- The eight Jellyfin visualizer channels are not included. They are MPEG-TS video served only on the server's own network, and these apps play audio.
- Not affiliated with Cider, SomaFM, Radio Browser, Icecast, TuneIn, or Venice Classic Radio.

## Contributors

- **ouijabored66** — creator and owner
- **Grok Bot** — ouijabored66's personal AI agent. Release polish, licensing, and upkeep.
