import Foundation

/// Parsers for the three feed-based sources (SomaFM, Icecast YP, iptv-org) plus the
/// daily on-disk cache they share. Network access for them lives in `SourceCatalog`.
enum FeedParsers {
    /// Stable 64-bit FNV-1a, so ids survive relaunches (Swift's hashValue is randomized per run).
    static func stableId(_ s: String) -> String {
        var h: UInt64 = 0xcbf29ce484222325
        for b in s.utf8 { h = (h ^ UInt64(b)) &* 0x100000001b3 }
        return String(h, radix: 16)
    }

    static func clean(_ s: String) -> String {
        s.trimmingCharacters(in: .whitespacesAndNewlines)
    }

    static func https(_ s: String?) -> String? {
        guard let s, !s.isEmpty else { return nil }
        if s.lowercased().hasPrefix("http://") { return "https://" + s.dropFirst(7) }
        return s
    }

    // MARK: SomaFM

    /// channels.json -> stations. Picks the mp3 playlist; the .pls is resolved at play time.
    static func parseSomaFM(_ data: Data) throws -> [Station] {
        guard let root = try JSONSerialization.jsonObject(with: data) as? [String: Any],
              let channels = root["channels"] as? [[String: Any]] else {
            throw APIError(message: "SomaFM returned an unexpected format")
        }
        var seen = Set<String>()
        return channels.compactMap { c in
            let id = (c["id"] as? String) ?? ""
            let title = clean((c["title"] as? String) ?? "")
            let lists = c["playlists"] as? [[String: Any]] ?? []
            let mp3 = lists.first { (($0["format"] as? String) ?? "").lowercased() == "mp3" }
            guard !id.isEmpty, !title.isEmpty, let pls = mp3?["url"] as? String, !pls.isEmpty,
                  seen.insert(id).inserted else { return nil }
            let genre = clean((c["genre"] as? String) ?? "")
            let tags = genre.split(separator: "|").map { clean(String($0)) }.filter { !$0.isEmpty }
            let xl = (c["xlimage"] as? String).flatMap { $0.isEmpty ? nil : $0 }
            let img = xl ?? (c["image"] as? String)
            var detail = ["United States"]
            if !tags.isEmpty { detail.append(tags.joined(separator: ", ")) }
            return Station(
                id: "sm-\(id)", name: title, detail: detail.joined(separator: " · "),
                codec: "mp3", bitrate: 128, image: https(img), source: .somaFM,
                streamUrl: pls, uuid: nil, tags: tags.joined(separator: ", "), country: "United States")
        }
    }

    // MARK: Icecast YP (dir.xiph.org/yp.xml)

    /// Streams the XML from disk so the ~8 MB feed is never held as one string.
    static func parseIcecast(fileURL: URL) throws -> [Station] {
        guard let stream = InputStream(url: fileURL) else { throw APIError(message: "Icecast feed unreadable") }
        let parser = XMLParser(stream: stream)
        let delegate = IcecastDelegate()
        parser.delegate = delegate
        guard parser.parse() else {
            throw APIError(message: "Icecast feed could not be parsed")
        }
        if delegate.stations.isEmpty { throw APIError(message: "Icecast feed had no stations") }
        return delegate.stations
    }

    static func parseIcecast(data: Data) throws -> [Station] {
        let parser = XMLParser(data: data)
        let delegate = IcecastDelegate()
        parser.delegate = delegate
        guard parser.parse() else { throw APIError(message: "Icecast feed could not be parsed") }
        if delegate.stations.isEmpty { throw APIError(message: "Icecast feed had no stations") }
        return delegate.stations
    }

    private static let genreStop: Set<String> = [
        "and", "the", "for", "radio", "fm", "music", "various", "misc", "mix", "all", "best", "from", "with", "online",
    ]

    /// The YP genre field is free text ("Misc Various Electronic Lounge"), so split it into words.
    static func icecastTags(_ genre: String) -> [String] {
        var out: [String] = []
        for w in genre.lowercased().split(whereSeparator: { !($0.isLetter || $0.isNumber) }) {
            let word = String(w)
            if word.count >= 3, !genreStop.contains(word), !out.contains(word) { out.append(word) }
            if out.count == 5 { break }
        }
        return out
    }

    fileprivate static func icecastStation(_ f: [String: String]) -> Station? {
        let listen = clean(f["listen_url"] ?? "")
        let name = clean(f["server_name"] ?? "")
        guard !name.isEmpty, let u = URL(string: listen), let scheme = u.scheme?.lowercased(),
              scheme == "http" || scheme == "https" else { return nil }
        let type = (f["server_type"] ?? "").lowercased()
        // AVPlayer can't decode Ogg, so those entries would never play.
        if type.contains("ogg") || type.contains("opus") || type.contains("vorbis") { return nil }
        let codec: String
        switch true {
        case type.contains("aacp"): codec = "aac+"
        case type.contains("aac"): codec = "aac"
        case type.contains("mpeg"), type.contains("mp3"): codec = "mp3"
        default: codec = ""
        }
        let tags = icecastTags(f["genre"] ?? "")
        return Station(
            id: "ic-\(stableId(listen))", name: name, detail: tags.joined(separator: ", "),
            codec: codec, bitrate: Int(clean(f["bitrate"] ?? "")) ?? 0, image: nil, source: .icecast,
            streamUrl: listen, uuid: nil, tags: tags.joined(separator: ", "), country: nil)
    }

    // MARK: iptv-org M3U

    /// Splits `#EXTINF:-1 key="v" ...,Display Name` into attributes and name.
    static func parseExtinf(_ line: String) -> (attrs: [String: String], name: String) {
        var attrs: [String: String] = [:]
        var key = ""
        var value = ""
        var inQuotes = false
        var readingValue = false
        var nameStart: String.Index?
        // Skip "#EXTINF:<duration>" then scan attributes until the first comma outside quotes.
        var i = line.startIndex
        if let sp = line.firstIndex(of: " ") { i = sp }
        while i < line.endIndex {
            let ch = line[i]
            if inQuotes {
                if ch == "\"" { inQuotes = false; attrs[key.lowercased()] = value; key = ""; value = ""; readingValue = false }
                else { value.append(ch) }
            } else if ch == "," {
                nameStart = line.index(after: i)
                break
            } else if ch == "\"" {
                inQuotes = true
            } else if ch == "=" {
                readingValue = true
            } else if ch == " " {
                key = ""
            } else if !readingValue {
                key.append(ch)
            }
            i = line.index(after: i)
        }
        let name = nameStart.map { clean(String(line[$0...])) } ?? ""
        return (attrs, name)
    }

    static func parseIptvOrg(_ text: String) -> [Station] {
        var out: [Station] = []
        var seen = Set<String>()
        var pending: (attrs: [String: String], name: String)?
        for raw in text.split(whereSeparator: \.isNewline) {
            let line = clean(String(raw))
            if line.hasPrefix("#EXTINF") {
                pending = parseExtinf(line)
            } else if line.hasPrefix("#") || line.isEmpty {
                continue
            } else if let p = pending {
                pending = nil
                guard let u = URL(string: line), let scheme = u.scheme?.lowercased(),
                      scheme == "http" || scheme == "https", !p.name.isEmpty,
                      seen.insert(line).inserted else { continue }
                let groups = (p.attrs["group-title"] ?? "").split(separator: ";")
                    .map { clean(String($0)) }.filter { !$0.isEmpty }
                // tvg-id looks like "Name.us@SD"; the part after the last dot is the country code.
                var country: String?
                if let tid = p.attrs["tvg-id"], let dot = tid.lastIndex(of: ".") {
                    let code = tid[tid.index(after: dot)...].split(separator: "@").first.map(String.init) ?? ""
                    if code.count == 2 { country = code.uppercased() }
                }
                var detail = [country].compactMap { $0 }
                if !groups.isEmpty { detail.append(groups.joined(separator: ", ")) }
                out.append(Station(
                    id: "iptv-\(stableId(line))", name: p.name, detail: detail.joined(separator: " · "),
                    codec: "", bitrate: 0, image: https(p.attrs["tvg-logo"]), source: .iptvOrg,
                    streamUrl: line, uuid: nil, tags: groups.joined(separator: ", "), country: country))
            }
        }
        return out
    }
}

private final class IcecastDelegate: NSObject, XMLParserDelegate {
    var stations: [Station] = []
    private var seen = Set<String>()
    private var fields: [String: String] = [:]
    private var element = ""
    private var text = ""
    private var inEntry = false
    private static let wanted: Set<String> = ["server_name", "server_type", "bitrate", "listen_url", "genre", "current_song"]

    func parser(_ parser: XMLParser, didStartElement name: String, namespaceURI: String?,
                qualifiedName: String?, attributes: [String: String] = [:]) {
        if name == "entry" { inEntry = true; fields = [:] }
        element = name
        text = ""
    }

    func parser(_ parser: XMLParser, foundCharacters string: String) {
        if inEntry, Self.wanted.contains(element) { text += string }
    }

    func parser(_ parser: XMLParser, foundCDATA CDATABlock: Data) {
        if inEntry, Self.wanted.contains(element), let s = String(data: CDATABlock, encoding: .utf8) { text += s }
    }

    func parser(_ parser: XMLParser, didEndElement name: String, namespaceURI: String?, qualifiedName: String?) {
        if name == "entry" {
            inEntry = false
            if let s = FeedParsers.icecastStation(fields), seen.insert(s.id).inserted { stations.append(s) }
        } else if inEntry, Self.wanted.contains(name) {
            fields[name] = text
        }
        element = ""
        text = ""
    }
}

// MARK: - Cached catalog

private struct CatalogFile: Codable {
    var fetched: Date
    var stations: [Station]
}

/// One feed-backed source. The feed is downloaded at most once per `maxAge`, parsed once,
/// written to Caches with a timestamp, and every browse/search is answered from memory.
actor SourceCatalog {
    static let maxAge: TimeInterval = 24 * 3600
    /// After a failed download, don't try again for this long (keeps screens/keystrokes off the network).
    static let retryAfterFailure: TimeInterval = 10 * 60

    private let fileName: String
    private let download: @Sendable (_ tmpDir: URL) async throws -> [Station]
    private var stations: [Station] = []
    private var fetched: Date?
    private var byTag: [String: [Station]] = [:]
    private var inflight: Task<Void, Error>?
    private var lastFailure: (at: Date, message: String)?
    private var diskChecked = false

    init(fileName: String, download: @escaping @Sendable (_ tmpDir: URL) async throws -> [Station]) {
        self.fileName = fileName
        self.download = download
    }

    private var cacheURL: URL {
        let dir = FileManager.default.urls(for: .cachesDirectory, in: .userDomainMask)[0]
        return dir.appendingPathComponent(fileName)
    }

    private var isFresh: Bool {
        guard let f = fetched else { return false }
        return Date().timeIntervalSince(f) < Self.maxAge
    }

    private func adopt(_ list: [Station], fetched: Date) {
        stations = list
        self.fetched = fetched
        var idx: [String: [Station]] = [:]
        for s in list {
            for t in (s.tags ?? "").split(separator: ",") {
                let k = FeedParsers.clean(String(t)).lowercased()
                if !k.isEmpty { idx[k, default: []].append(s) }
            }
        }
        byTag = idx
    }

    private func loadDiskOnce() {
        guard !diskChecked else { return }
        diskChecked = true
        guard let data = try? Data(contentsOf: cacheURL),
              let file = try? JSONDecoder().decode(CatalogFile.self, from: data) else { return }
        adopt(file.stations, fetched: file.fetched)
    }

    /// Makes sure stations are loaded. Throws only when there is no usable data at all.
    private func ensureLoaded() async throws {
        loadDiskOnce()
        if isFresh { return }
        if let task = inflight {
            do { try await task.value } catch { if fetched != nil { return }; throw error }
            return
        }
        if let f = lastFailure, Date().timeIntervalSince(f.at) < Self.retryAfterFailure {
            if fetched != nil { return }   // serve the stale copy
            throw APIError(message: f.message)
        }
        let task = Task { try await refresh() }
        inflight = task
        defer { inflight = nil }
        do {
            try await task.value
        } catch {
            lastFailure = (Date(), error.localizedDescription)
            if fetched != nil { return }   // a stale cache beats nothing
            throw error
        }
    }

    private func refresh() async throws {
        let tmp = FileManager.default.temporaryDirectory.appendingPathComponent("catalog-\(UUID().uuidString)")
        try FileManager.default.createDirectory(at: tmp, withIntermediateDirectories: true)
        defer { try? FileManager.default.removeItem(at: tmp) }
        let list = try await download(tmp)
        let now = Date()
        adopt(list, fetched: now)
        lastFailure = nil
        if let data = try? JSONEncoder().encode(CatalogFile(fetched: now, stations: list)) {
            try? data.write(to: cacheURL, options: .atomic)
        }
    }

    // MARK: queries (all local)

    func all() async throws -> [Station] {
        try await ensureLoaded()
        return stations
    }

    func search(_ query: String, limit: Int = 40) async throws -> [Station] {
        try await ensureLoaded()
        let q = query.lowercased()
        guard !q.isEmpty else { return [] }
        var out: [Station] = []
        // Name matches first, then genre/country matches.
        for s in stations where s.name.lowercased().contains(q) {
            out.append(s)
            if out.count == limit { return out }
        }
        let have = Set(out.map(\.id))
        for s in stations where !have.contains(s.id) {
            if (s.tags ?? "").lowercased().contains(q) || (s.country ?? "").lowercased() == q {
                out.append(s)
                if out.count == limit { break }
            }
        }
        return out
    }

    func categories(limit: Int = 40) async throws -> [Category] {
        try await ensureLoaded()
        return byTag.map { Category(name: $0.key, count: $0.value.count) }
            .sorted { $0.count != $1.count ? $0.count > $1.count : $0.name < $1.name }
            .prefix(limit).map { $0 }
    }

    func stations(inCategory name: String, limit: Int = 300) async throws -> [Station] {
        try await ensureLoaded()
        return Array((byTag[name.lowercased()] ?? []).prefix(limit))
    }
}
