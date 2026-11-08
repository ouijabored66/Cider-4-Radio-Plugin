export type Source = "TuneIn" | "Radio Browser";

export interface Station {
  id: string;
  name: string;
  detail: string;
  image?: string;
  source: Source;
  /** Direct stream address. TuneIn stations get this from resolveStream(). */
  streamUrl?: string;
}

export interface SearchResult {
  stations: Station[];
  /** Sources that could not be reached, so the page can say so. */
  failed: Source[];
}

const RADIO_BROWSER = "https://all.api.radio-browser.info/json";
const TUNEIN = "https://opml.radiotime.com";

const https = (url?: string) => url?.replace(/^http:\/\//, "https://");

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
  ];
  const settled = await Promise.allSettled(sources.map(([, search]) => search));
  const stations: Station[] = [];
  const failed: Source[] = [];
  settled.forEach((result, i) => {
    if (result.status === "fulfilled") stations.push(...result.value);
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

/** Returns the address to play, looking it up first for TuneIn stations. */
export async function resolveStream(station: Station): Promise<string> {
  if (station.streamUrl) return station.streamUrl;
  const guideId = station.id.replace(/^ti-/, "");
  const data = await getJson(
    `${TUNEIN}/Tune.ashx?${new URLSearchParams({ id: guideId, render: "json" })}`
  );
  const stream = pickTuneInStream(data.body ?? []);
  if (!stream) throw new Error("TuneIn gave no playable stream for this station");
  return stream;
}
