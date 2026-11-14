# Changelog

## 0.3.0 / iOS 1.1.1 — 2026-11-14

The Free Radio library is built into the Cider plugin and the iPhone app. The plugin release stays **0.3.0**. The iPhone app is **1.1.1**.

### Library (813)

- SomaFM 48 (27 instrumental, 21 vocal)
- Radio Browser 68 (54 instrumental, 14 vocal)
- Icecast 10 (1 instrumental, 9 vocal)
- TuneIn 685 (418 instrumental, 267 vocal)
- Venice Classic Radio 2 (VCR Auditorium, VCR Classica+)

Vocal and instrumental stations are in separate groups. Each station stores its source and a homepage. Stream addresses are the broadcaster's own and are not rewritten. TuneIn entries keep their guide id.

News, sports, scanner, and non-English stations from the earlier cleanup were not added back. The eight visualizer channels stay on the Jellyfin server.

Five TuneIn entries in the original instrumental export were the same stations as the main list (PerfectMoods, RMNinstrumental, 181.FM Classical Guitar, Your Classical Peaceful Piano, Nature Radio Rain). One copy of each is kept.

Every direct stream answered, and all 423 TuneIn ids returned a playable address. Calm Radio - Solo Piano timed out once and played on the retry, so it is included. Two Radio Browser stations (Radio Art - Relaxing, Sleep Radio) had no directory uuid; they still play from the saved stream address.

## 0.2.0 — 2026-11-10

SomaFM, the Icecast directory and iptv-org joined TuneIn and Radio Browser in the Cider plugin.

## iOS 1.0 — 2026-11-10

First Free Radio iPhone build: Radio Browser, TuneIn, SomaFM, Icecast and iptv-org, with favorites and lock-screen playback.

## 0.1.1 — 2026-11-07

First Cider 4 build. Search and play TuneIn and Radio Browser inside Cider.
