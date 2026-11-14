import catalog from "./free-radio.json";
import type { Source, Station } from "./radio";

interface CatalogGroup {
  id: string;
  name: string;
  source: Source;
}

interface CatalogStation {
  id: string;
  name: string;
  group: string;
  source: Source;
  detail: string;
  image?: string | null;
  streamUrl?: string | null;
  tags?: string | null;
  homepage?: string | null;
}

export interface FreeRadioGroup {
  id: string;
  name: string;
  source: Source;
  stations: Station[];
}

function toStation(entry: CatalogStation): Station {
  return {
    id: entry.id,
    name: entry.name,
    detail: entry.detail,
    image: entry.image || undefined,
    source: entry.source,
    streamUrl: entry.streamUrl || undefined,
    tags: entry.tags || undefined,
    homepage: entry.homepage || undefined,
  };
}

const groups = catalog.groups as CatalogGroup[];
const entries = catalog.stations as CatalogStation[];

/** The Free Radio library, in playlist order, grouped the way the export is grouped. */
export const freeRadioGroups: FreeRadioGroup[] = groups.map((group) => ({
  id: group.id,
  name: group.name,
  source: group.source,
  stations: entries.filter((entry) => entry.group === group.id).map(toStation),
}));

export const freeRadioStations: Station[] = freeRadioGroups.flatMap((group) => group.stations);

/**
 * Host + port + path, ignoring scheme and query. SomaFM's iceN edges count as one host
 * so the same channel isn't listed twice.
 */
export function streamKey(url: string): string {
  try {
    const parsed = new URL(url);
    let host = parsed.hostname.toLowerCase().replace(/^www\./, "");
    if (/^ice\d+\.somafm\.com$/.test(host)) host = "somafm.com";
    const port = parsed.port && parsed.port !== "80" && parsed.port !== "443" ? `:${parsed.port}` : "";
    const path = parsed.pathname.replace(/\/+$/, "").toLowerCase();
    return `${host}${port}${path}`;
  } catch {
    return url.trim().toLowerCase();
  }
}

const byId = new Map(freeRadioStations.map((station) => [station.id, station]));
const byStream = new Map(
  freeRadioStations.flatMap((station) => (station.streamUrl ? [[streamKey(station.streamUrl), station] as const] : []))
);

/** The library copy of a live directory hit, when it's the same station. */
export function libraryCopy(station: Station): Station | undefined {
  const byIdentifier = byId.get(station.id);
  if (byIdentifier) return byIdentifier;
  if (!station.streamUrl) return undefined;
  return byStream.get(streamKey(station.streamUrl));
}

/** Every library match. Name matches come first, then genre and group matches. */
export function searchFreeRadio(query: string): Station[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const named: Station[] = [];
  const other: Station[] = [];
  for (const station of freeRadioStations) {
    if (station.name.toLowerCase().includes(q)) named.push(station);
    else if (`${station.detail}\n${station.tags ?? ""}`.toLowerCase().includes(q)) other.push(station);
  }
  return [...named, ...other];
}
