# Changelog

## 0.3.0 / iOS 1.1.0 — 2026-11-14

The Free Radio library is now built into the Cider plugin and the iPhone app. Open Radio (or the Stations tab) and the stations are there, grouped by source and genre. Search still covers TuneIn, Radio Browser, SomaFM, Icecast and iptv-org, and library matches show up first without duplicates.

### Library

- 27 SomaFM
- 54 Radio Browser
- 1 Icecast (Immersound)
- 418 TuneIn, stored as guide ids and resolved through TuneIn when playback starts

Five TuneIn entries were the same stations as the main list (PerfectMoods, RMNinstrumental, 181.FM Classical Guitar, Your Classical Peaceful Piano, Nature Radio Rain). One copy of each is kept.

Nothing from the earlier news, sports, scanner, vocal and non-English cleanup was added back. The eight visualizer channels stay on the Jellyfin server: they are MPEG-TS video on a private address, and both apps play audio.

Every direct stream answered, and all 423 TuneIn ids returned a playable address. Calm Radio - Solo Piano timed out once and played on the retry, so it is included. Two Radio Browser stations (Radio Art - Relaxing, Sleep Radio) had no directory uuid; they still play from the saved stream address.

## 0.2.0 — 2026-11-10

SomaFM, the Icecast directory and iptv-org joined TuneIn and Radio Browser in the Cider plugin.

## iOS 1.0 — 2026-11-10

First Free Radio iPhone build: Radio Browser, TuneIn, SomaFM, Icecast and iptv-org, with favorites and lock-screen playback.

## 0.1.1 — 2026-11-07

First Cider 4 build. Search and play TuneIn and Radio Browser inside Cider.
