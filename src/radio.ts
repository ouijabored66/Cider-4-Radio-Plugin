import { libraryCopy, searchFreeRadio } from "./freeRadio";

export type Source = "TuneIn" | "Radio Browser" | "SomaFM" | "Icecast" | "iptv-org";

export interface Station {
  id: string;
  name: string;
  detail: string;
  image?: string;
  source: Source;
  /**
   * Stream or playlist address. TuneIn stations get theirs from resolveStream();
   * for SomaFM this is a .pls playlist that resolveStream() unwraps at play time.
   * Curated TuneIn stations leave this empty so the guide id is resolved at play time.
   */
  streamUrl?: string;
  /** Comma-separated genres or group names. Used by local search. */
  tags?: string;
}

export interface SearchResult {
  stations: Station[];
  /** Sources that could not be reached, so the page can say so. */
  failed: Source[];
}

const RADIO_BROWSER = "https://all.api.radio-browser.info/json";
const TUNEIN = "https://opml.radiotime.com";

const SOMAFM = "https://somafm.com/channels.json";
const ICECAST = "https://dir.xiph.org/yp.xml";
/**
 * iptv-org no longer publishes a radio playlist (index.radio.m3u returns 404 and
 * no radio category exists in its playlists). Kept as the one place to change
 * if they bring it back; the first location that serves a playlist wins.
 */
export const IPTV_ORG_URLS = [
  "https://iptv-org.github.io/iptv/index.radio.m3u",
  "https://iptv-org.github.io/index.radio.m3u",
  "https://iptv-org.github.io/iptv/categories/radio.m3u",
];

const CATALOG_TTL_MS = 24 * 3600 * 1000;
/** After a failed download, don't retry for this long (keeps keystrokes off the network). */
const CATALOG_RETRY_MS = 10 * 60 * 1000;
const SEARCH_LIMIT = 40;

const https = (url?: string) => url?.replace(/^http:\/\//, "https://");
const clean = (s: unknown) => (typeof s === "string" ? s.trim() : "");
const isHttpUrl = (s: string) => /^https?:\/\/\S+$/i.test(s);

/** Stable 64-bit FNV-1a (same ids as the iPhone app), so ids survive restarts. */
export function stableId(s: string): string {
  let h = 0xcbf29ce484222325n;
  for (const b of new TextEncoder().encode(s)) {
    h = ((h ^ BigInt(b)) * 0x100000001b3n) & 0xffffffffffffffffn;
  }
  return h.toString(16);
}

export function parseRadioBrowser(rows: any[]): Station[] {
  return rows
    .filter((r) => r?.url_resolved && r?.name?.trim())
    .map((r) => ({
      id: `rb-${r.stationuuid}`,
      name: r.name.trim(),
      detail: [r.country, r.codec, r.bitrate ? `${r.bitrate} kbps` : ""]
        .filter(Boolean)
        .join(" · "),
      image: https(r.favicon) || undefined,
      source: "Radio Browser" as const,
      streamUrl: r.url_resolved,
    }));
}

export function parseTuneIn(body: any[]): Station[] {
  return body
    .filter((b) => b?.type === "audio" && b?.item === "station" && b?.guide_id)
    .map((b) => ({
      id: `ti-${b.guide_id}`,
      name: b.text,
      detail: [b.subtext, b.bitrate ? `${b.bitrate} kbps` : ""]
        .filter(Boolean)
        .join(" · "),
      image: https(b.image),
      source: "TuneIn" as const,
    }));
}

/** SomaFM channels.json -> stations. Uses the mp3 playlist; the .pls is resolved at play time. */
export function parseSomaFM(data: any): Station[] {
  const channels: any[] = Array.isArray(data?.channels) ? data.channels : [];
  const seen = new Set<string>();
  const out: Station[] = [];
  for (const c of channels) {
    const id = clean(c?.id);
    const name = clean(c?.title);
    const mp3 = (Array.isArray(c?.playlists) ? c.playlists : []).find(
      (p: any) => clean(p?.format).toLowerCase() === "mp3" && clean(p?.url)
    );
    if (!id || !name || !mp3 || seen.has(id)) continue;
    seen.add(id);
    const genres = clean(c.genre)
      .split("|")
      .map((g) => g.trim())
      .filter(Boolean);
    out.push({
      id: `sm-${id}`,
      name,
      detail: [genres.join(", "), clean(c.description)].filter(Boolean).join(" · "),
      image: https(clean(c.xlimage) || clean(c.largeimage) || clean(c.image) || undefined),
      source: "SomaFM",
      streamUrl: clean(mp3.url),
    });
  }
  return out;
}

const GENRE_STOP = new Set([
  "and", "the", "for", "radio", "fm", "music", "various", "misc", "mix", "all", "best", "from", "with", "online",
]);

/** The YP genre field is free text ("Misc Various Electronic Lounge"), so split it into words. */
export function icecastTags(genre: string): string[] {
  const out: string[] = [];
  for (const word of genre.toLowerCase().split(/[^\p{L}\p{N}]+/u)) {
    if (word.length >= 3 && !GENRE_STOP.has(word) && !out.includes(word)) out.push(word);
    if (out.length === 5) break;
  }
  return out;
}

type IcecastFields = Record<string, string>;

function icecastStation(f: IcecastFields): Station | undefined {
  const listen = clean(f.listen_url);
  const name = clean(f.server_name);
  if (!name || !isHttpUrl(listen)) return undefined;
  const type = (f.server_type ?? "").toLowerCase();
  // Chromium plays Ogg/Opus/Vorbis, so unlike the iPhone app those entries are kept.
  const codec = type.includes("aacp")
    ? "aac+"
    : type.includes("aac")
      ? "aac"
      : type.includes("mpeg") || type.includes("mp3")
        ? "mp3"
        : type.includes("ogg") || type.includes("vorbis")
          ? "ogg"
          : type.includes("opus")
            ? "opus"
            : "";
  const bitrate = parseInt(clean(f.bitrate), 10);
  return {
    id: `ic-${stableId(listen)}`,
    name,
    detail: [codec, bitrate > 0 ? `${bitrate} kbps` : "", icecastTags(f.genre ?? "").join(", ")]
      .filter(Boolean)
      .join(" · "),
    source: "Icecast",
    streamUrl: listen,
  };
}

const ICECAST_FIELDS = ["server_name", "server_type", "bitrate", "listen_url", "genre"];

function decodeEntities(s: string): string {
  return s.replace(/&(#x[0-9a-f]+|#\d+|amp|lt|gt|quot|apos);/gi, (m, e: string) => {
    const k = e.toLowerCase();
    if (k === "amp") return "&";
    if (k === "lt") return "<";
    if (k === "gt") return ">";
    if (k === "quot") return '"';
    if (k === "apos") return "'";
    const code = k[1] === "x" ? parseInt(k.slice(2), 16) : parseInt(k.slice(1), 10);
    try {
      return String.fromCodePoint(code);
    } catch {
      return m;
    }
  });
}

/** Entries of the YP feed as field maps, read with DOMParser when it exists. */
function icecastEntriesDom(xml: string): IcecastFields[] {
  const doc = new DOMParser().parseFromString(xml, "text/xml");
  if (doc.getElementsByTagName("parsererror").length) throw new Error("Icecast feed could not be parsed");
  return Array.from(doc.getElementsByTagName("entry")).map((entry) => {
    const fields: IcecastFields = {};
    for (const name of ICECAST_FIELDS) {
      const el = entry.getElementsByTagName(name)[0];
      if (el) fields[name] = el.textContent ?? "";
    }
    return fields;
  });
}

/** Fallback for environments without DOMParser (the feed is flat, so this is enough). */
function icecastEntriesText(xml: string): IcecastFields[] {
  const out: IcecastFields[] = [];
  for (const m of xml.matchAll(/<entry\b[^>]*>([\s\S]*?)<\/entry>/g)) {
    const fields: IcecastFields = {};
    for (const name of ICECAST_FIELDS) {
      const hit = new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)</${name}>`).exec(m[1]);
      if (!hit) continue;
      fields[name] = hit[1]
        .split(/(<!\[CDATA\[[\s\S]*?\]\]>)/)
        .map((part) =>
          part.startsWith("<![CDATA[") ? part.slice(9, -3) : decodeEntities(part)
        )
        .join("");
    }
    out.push(fields);
  }
  return out;
}

/** yp.xml -> stations: entries with a listen_url, deduped by stream URL. */
export function parseIcecast(xml: string): Station[] {
  const entries = typeof DOMParser !== "undefined" ? icecastEntriesDom(xml) : icecastEntriesText(xml);
  const seen = new Set<string>();
  const out: Station[] = [];
  for (const fields of entries) {
    const station = icecastStation(fields);
    if (station && !seen.has(station.streamUrl!)) {
      seen.add(station.streamUrl!);
      out.push(station);
    }
  }
  return out;
}

/** Splits `#EXTINF:-1 key="v" ...,Display Name` into attributes and name. */
export function parseExtinf(line: string): { attrs: Record<string, string>; name: string } {
  const attrs: Record<string, string> = {};
  let key = "";
  let value = "";
  let inQuotes = false;
  let readingValue = false;
  let nameStart = -1;
  // Skip "#EXTINF:<duration>", then scan attributes up to the first comma outside quotes.
  for (let i = Math.max(line.indexOf(" "), 0); i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"') {
        inQuotes = false;
        attrs[key.toLowerCase()] = value;
        key = "";
        value = "";
        readingValue = false;
      } else value += ch;
    } else if (ch === ",") {
      nameStart = i + 1;
      break;
    } else if (ch === '"') inQuotes = true;
    else if (ch === "=") readingValue = true;
    else if (ch === " ") key = "";
    else if (!readingValue) key += ch;
  }
  return { attrs, name: nameStart >= 0 ? line.slice(nameStart).trim() : "" };
}

/** iptv-org M3U playlist -> stations, deduped by stream URL. */
export function parseIptvOrg(text: string): Station[] {
  const out: Station[] = [];
  const seen = new Set<string>();
  let pending: ReturnType<typeof parseExtinf> | undefined;
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (line.startsWith("#EXTINF")) pending = parseExtinf(line);
    else if (!line || line.startsWith("#")) continue;
    else if (pending) {
      const p = pending;
      pending = undefined;
      if (!isHttpUrl(line) || !p.name || seen.has(line)) continue;
      seen.add(line);
      const groups = (p.attrs["group-title"] ?? "")
        .split(";")
        .map((g) => g.trim())
        .filter(Boolean);
      // tvg-id looks like "Name.us@SD"; the part after the last dot is the country code.
      const code = p.attrs["tvg-id"]?.split(".").pop()?.split("@")[0] ?? "";
      const country = p.attrs["tvg-id"]?.includes(".") && code.length === 2 ? code.toUpperCase() : "";
      out.push({
        id: `iptv-${stableId(line)}`,
        name: p.name,
        detail: [country, groups.join(", ")].filter(Boolean).join(" · "),
        image: https(p.attrs["tvg-logo"] || undefined),
        source: "iptv-org",
        streamUrl: line,
      });
    }
  }
  return out;
}

/** First stream address in a .pls or .m3u playlist body. */
export function parsePlaylist(text: string): string | undefined {
  for (const raw of text.split(/\r?\n/)) {
    let line = raw.trim();
    if (/^file1=/i.test(line)) line = line.slice(6).trim();
    if (/^https?:\/\//i.test(line)) return line;
  }
  return undefined;
}

async function getText(url: string) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} from ${url}`);
  return response.text();
}

/**
 * A feed-backed source: downloaded at most once per day, parsed once, kept in
 * memory (and in localStorage when it fits), and searched locally.
 */
export class Catalog {
  private stations: Station[] = [];
  private fetched = 0;
  private inflight?: Promise<void>;
  private lastFailure?: { at: number; error: unknown };
  private diskChecked = false;

  constructor(
    private key: string,
    private download: () => Promise<Station[]>
  ) {}

  private loadDisk() {
    if (this.diskChecked) return;
    this.diskChecked = true;
    try {
      const saved = JSON.parse(localStorage.getItem(this.key) ?? "null");
      if (saved && Array.isArray(saved.stations) && typeof saved.fetched === "number") {
        this.stations = saved.stations;
        this.fetched = saved.fetched;
      }
    } catch {
      /* no storage or unreadable: just download */
    }
  }

  private saveDisk() {
    try {
      localStorage.setItem(this.key, JSON.stringify({ fetched: this.fetched, stations: this.stations }));
    } catch {
      /* too big for storage or storage unavailable: memory only */
    }
  }

  private async refresh() {
    const list = await this.download();
    if (!list.length) throw new Error("feed had no stations");
    this.stations = list;
    this.fetched = Date.now();
    this.lastFailure = undefined;
    this.saveDisk();
  }

  /** Loads the catalog if needed. Throws only when there is no usable data at all. */
  async all(): Promise<Station[]> {
    this.loadDisk();
    if (this.stations.length && Date.now() - this.fetched < CATALOG_TTL_MS) return this.stations;
    if (!this.inflight) {
      if (this.lastFailure && Date.now() - this.lastFailure.at < CATALOG_RETRY_MS) {
        if (this.stations.length) return this.stations; // stale beats nothing
        throw this.lastFailure.error;
      }
      this.inflight = this.refresh()
        .catch((error) => {
          this.lastFailure = { at: Date.now(), error };
          throw error;
        })
        .finally(() => (this.inflight = undefined));
    }
    try {
      await this.inflight;
    } catch (error) {
      if (!this.stations.length) throw error;
    }
    return this.stations;
  }

  async search(query: string, limit = SEARCH_LIMIT): Promise<Station[]> {
    const all = await this.all();
    return searchLocal(all, query, limit);
  }
}

/** Name matches first, then matches in the detail text or tags (genre, description, country). */
export function searchLocal(stations: Station[], query: string, limit = SEARCH_LIMIT): Station[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const extra = (s: Station) => `${s.detail}\n${s.tags ?? ""}`.toLowerCase();
  const byName = stations.filter((s) => s.name.toLowerCase().includes(q));
  const byDetail = stations.filter((s) => !s.name.toLowerCase().includes(q) && extra(s).includes(q));
  return [...byName, ...byDetail].slice(0, limit);
}

export const somaFM = new Catalog("radio.somafm.v1", async () => parseSomaFM(await getJson(SOMAFM)));
export const icecast = new Catalog("radio.icecast.v1", async () => parseIcecast(await getText(ICECAST)));
export const iptvOrg = new Catalog("radio.iptvorg.v1", async () => {
  let lastError: unknown = new Error("iptv-org radio playlist is not available");
  for (const url of IPTV_ORG_URLS) {
    try {
      const text = await getText(url);
      if (!text.includes("#EXTM3U")) throw new Error(`${url} is not an M3U playlist`);
      return parseIptvOrg(text);
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
});

async function getJson(url: string) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} from ${url}`);
  return response.json();
}

async function searchRadioBrowser(query: string) {
  const params = new URLSearchParams({
    name: query,
    limit: "40",
    hidebroken: "true",
    order: "clickcount",
    reverse: "true",
  });
  return parseRadioBrowser(await getJson(`${RADIO_BROWSER}/stations/search?${params}`));
}

async function searchTuneIn(query: string) {
  const params = new URLSearchParams({ query, types: "station", render: "json" });
  const data = await getJson(`${TUNEIN}/Search.ashx?${params}`);
  return parseTuneIn(data.body ?? []);
}

export async function searchStations(query: string): Promise<SearchResult> {
  const sources: [Source, Promise<Station[]>][] = [
    ["TuneIn", searchTuneIn(query)],
    ["Radio Browser", searchRadioBrowser(query)],
    ["SomaFM", somaFM.search(query)],
    ["Icecast", icecast.search(query)],
    ["iptv-org", iptvOrg.search(query)],
  ];
  const settled = await Promise.allSettled(sources.map(([, search]) => search));
  const stations: Station[] = [];
  const failed: Source[] = [];
  const seen = new Set<string>();
  // Library matches first, so a station he saved is never hidden behind a directory hit.
  for (const station of searchFreeRadio(query)) {
    if (seen.has(station.id)) continue;
    seen.add(station.id);
    stations.push(station);
  }
  settled.forEach((result, i) => {
    if (result.status === "fulfilled") {
      for (const station of result.value) {
        const pick = libraryCopy(station) ?? station;
        if (seen.has(pick.id)) continue;
        seen.add(pick.id);
        stations.push(pick);
      }
    }
    else {
      console.warn(`[radio] ${sources[i][0]} search failed`, result.reason);
      failed.push(sources[i][0]);
    }
  });
  return { stations, failed };
}

/** TuneIn answers protected stations with a "notcompatible" notice clip. */
export function pickTuneInStream(body: any[]): string | undefined {
  return body.find((b) => b?.url && !/notcompatible/i.test(b.url))?.url;
}

/** .pls/.m3u playlist files can't be played directly; read the first stream out of them. */
async function unwrapPlaylist(address: string): Promise<string | undefined> {
  let path: string;
  try {
    path = new URL(address).pathname.toLowerCase();
  } catch {
    return undefined;
  }
  if (!path.endsWith(".pls") && !path.endsWith(".m3u")) return undefined;
  try {
    return parsePlaylist(await getText(address));
  } catch (error) {
    console.warn("[radio] could not read playlist", error);
    return undefined;
  }
}

/**
 * Returns the address to play: TuneIn stations are looked up first, and
 * .pls/.m3u playlist addresses (SomaFM, TuneIn, some Icecast entries) are unwrapped.
 */
export async function resolveStream(station: Station): Promise<string> {
  let address = station.streamUrl;
  if (!address) {
    const guideId = station.id.replace(/^ti-/, "");
    const data = await getJson(
      `${TUNEIN}/Tune.ashx?${new URLSearchParams({ id: guideId, render: "json" })}`
    );
    address = pickTuneInStream(data.body ?? []);
    if (!address) throw new Error("TuneIn gave no playable stream for this station");
  }
  return (await unwrapPlaylist(address)) ?? address;
}
