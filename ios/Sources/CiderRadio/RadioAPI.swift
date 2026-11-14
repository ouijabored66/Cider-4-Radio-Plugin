import Foundation

struct APIError: LocalizedError {
    let message: String
    var errorDescription: String? { message }
}

/// Port of the Cider plugin's radio.ts (Radio Browser + TuneIn).
enum RadioAPI {
    static let radioBrowser = "https://all.api.radio-browser.info/json"
    static let tuneIn = "https://opml.radiotime.com"
    static let userAgent = "FreeRadio/1.1"

    private static let session: URLSession = {
        let c = URLSessionConfiguration.default
        c.timeoutIntervalForRequest = 20
        return URLSession(configuration: c)
    }()

    // MARK: helpers

    private static func request(_ url: URL) -> URLRequest {
        var r = URLRequest(url: url)
        r.setValue(userAgent, forHTTPHeaderField: "User-Agent")
        return r
    }

    private static func getData(_ url: URL) async throws -> Data {
        let (data, response) = try await session.data(for: request(url))
        if let http = response as? HTTPURLResponse, !(200..<300).contains(http.statusCode) {
            throw APIError(message: "\(http.statusCode) from \(url.absoluteString)")
        }
        return data
    }

    private static func getJSON(_ url: URL) async throws -> Any {
        try JSONSerialization.jsonObject(with: try await getData(url))
    }

    private static func url(_ base: String, path: String, _ query: [String: String]) throws -> URL {
        guard var c = URLComponents(string: base + path) else { throw APIError(message: "Bad URL") }
        if !query.isEmpty {
            c.queryItems = query.sorted { $0.key < $1.key }.map { URLQueryItem(name: $0.key, value: $0.value) }
        }
        guard let u = c.url else { throw APIError(message: "Bad URL") }
        return u
    }

    private static func segment(_ s: String) -> String {
        var allowed = CharacterSet.urlPathAllowed
        allowed.remove(charactersIn: "/?#")
        return s.addingPercentEncoding(withAllowedCharacters: allowed) ?? s
    }

    private static func https(_ s: String?) -> String? {
        guard let s, !s.isEmpty else { return nil }
        if s.lowercased().hasPrefix("http://") { return "https://" + s.dropFirst(7) }
        return s
    }

    private static func str(_ v: Any?) -> String {
        if let s = v as? String { return s }
        if let n = v as? NSNumber { return n.stringValue }
        return ""
    }

    private static func int(_ v: Any?) -> Int {
        if let n = v as? NSNumber { return n.intValue }
        if let s = v as? String { return Int(s) ?? 0 }
        return 0
    }

    // MARK: Radio Browser

    static func parseRadioBrowser(_ rows: [[String: Any]]) -> [Station] {
        rows.compactMap { r in
            let name = str(r["name"]).trimmingCharacters(in: .whitespacesAndNewlines)
            let resolved = str(r["url_resolved"])
            let stream = resolved.isEmpty ? str(r["url"]) : resolved
            let uuid = str(r["stationuuid"])
            guard !name.isEmpty, !stream.isEmpty, !uuid.isEmpty else { return nil }
            let tags = str(r["tags"]).split(separator: ",")
                .map { $0.trimmingCharacters(in: .whitespaces) }.filter { !$0.isEmpty }
            let country = str(r["country"])
            var detail = [country].filter { !$0.isEmpty }
            if !tags.isEmpty { detail.append(tags.prefix(3).joined(separator: ", ")) }
            return Station(
                id: "rb-\(uuid)", name: name, detail: detail.joined(separator: " · "),
                codec: str(r["codec"]), bitrate: int(r["bitrate"]),
                image: https(str(r["favicon"])), source: .radioBrowser,
                streamUrl: stream, uuid: uuid)
        }
    }

    private static func stationList(_ path: String, _ extra: [String: String]) async throws -> [Station] {
        var q = ["hidebroken": "true", "order": "votes", "reverse": "true"]
        extra.forEach { q[$0.key] = $0.value }
        let json = try await getJSON(url(radioBrowser, path: path, q))
        return parseRadioBrowser(json as? [[String: Any]] ?? [])
    }

    static func topVoted() async throws -> [Station] {
        try await stationList("/stations/topvote/100", [:])
    }

    static func stations(byTag tag: String) async throws -> [Station] {
        try await stationList("/stations/bytag/\(segment(tag))", ["limit": "300"])
    }

    static func stations(byCountry country: String) async throws -> [Station] {
        try await stationList("/stations/bycountry/\(segment(country))", ["limit": "300"])
    }

    private static func categories(_ path: String) async throws -> [Category] {
        let q = ["order": "stationcount", "reverse": "true", "hidebroken": "true", "limit": "40"]
        let json = try await getJSON(url(radioBrowser, path: path, q))
        return (json as? [[String: Any]] ?? []).compactMap { r in
            let name = str(r["name"]).trimmingCharacters(in: .whitespaces)
            return name.isEmpty ? nil : Category(name: name, count: int(r["stationcount"]))
        }
    }

    static func genres() async throws -> [Category] { try await categories("/tags") }
    static func countries() async throws -> [Category] { try await categories("/countries") }

    static func searchRadioBrowser(_ query: String) async throws -> [Station] {
        try await stationList("/stations/search", ["name": query, "limit": "40"])
    }

    /// Fire and forget, like the plugin's player.
    static func registerClick(uuid: String) {
        guard let u = URL(string: "\(radioBrowser)/url/\(segment(uuid))") else { return }
        Task.detached { _ = try? await session.data(for: request(u)) }
    }

    // MARK: TuneIn

    static func parseTuneIn(_ body: [[String: Any]]) -> [Station] {
        body.compactMap { b in
            guard str(b["type"]) == "audio", str(b["item"]) == "station" else { return nil }
            let gid = str(b["guide_id"])
            guard !gid.isEmpty else { return nil }
            return Station(
                id: "ti-\(gid)", name: str(b["text"]), detail: str(b["subtext"]),
                codec: "", bitrate: int(b["bitrate"]), image: https(str(b["image"])),
                source: .tuneIn, streamUrl: nil, uuid: nil)
        }
    }

    static func searchTuneIn(_ query: String) async throws -> [Station] {
        let u = try url(tuneIn, path: "/Search.ashx", ["query": query, "types": "station", "render": "json"])
        let json = try await getJSON(u) as? [String: Any]
        return parseTuneIn(json?["body"] as? [[String: Any]] ?? [])
    }

    /// TuneIn answers protected stations with a "notcompatible" notice clip.
    static func pickTuneInStream(_ body: [[String: Any]]) -> String? {
        for b in body {
            let u = str(b["url"])
            if !u.isEmpty, u.range(of: "notcompatible", options: .caseInsensitive) == nil { return u }
        }
        return nil
    }

    // MARK: SomaFM / Icecast / iptv-org (feed-backed, cached daily)

    static let somaFMURL = "https://somafm.com/channels.json"
    static let icecastURL = "https://dir.xiph.org/yp.xml"
    /// iptv-org no longer publishes a radio playlist (index.radio.m3u returns 404 and no radio
    /// category exists in its playlists). Kept as the one place to change if they bring it back.
    static let iptvOrgURL = "https://iptv-org.github.io/index.radio.m3u"

    static let somaFM = SourceCatalog(fileName: "somafm.v1.json") { _ in
        try FeedParsers.parseSomaFM(try await getData(URL(string: somaFMURL)!))
    }

    static let icecast = SourceCatalog(fileName: "icecast.v1.json") { tmp in
        let (file, response) = try await session.download(for: request(URL(string: icecastURL)!))
        if let http = response as? HTTPURLResponse, !(200..<300).contains(http.statusCode) {
            throw APIError(message: "\(http.statusCode) from \(icecastURL)")
        }
        let dest = tmp.appendingPathComponent("yp.xml")
        try FileManager.default.moveItem(at: file, to: dest)
        return try FeedParsers.parseIcecast(fileURL: dest)
    }

    static let iptvOrg = SourceCatalog(fileName: "iptvorg.v1.json") { _ in
        let data = try await getData(URL(string: iptvOrgURL)!)
        guard let text = String(data: data, encoding: .utf8), text.contains("#EXTM3U") else {
            throw APIError(message: "iptv-org radio playlist is not available")
        }
        let list = FeedParsers.parseIptvOrg(text)
        if list.isEmpty { throw APIError(message: "iptv-org radio playlist had no stations") }
        return list
    }

    static func catalog(for source: Source) -> SourceCatalog? {
        switch source {
        case .somaFM: return somaFM
        case .icecast: return icecast
        case .iptvOrg: return iptvOrg
        default: return nil
        }
    }

    /// Merged search over the Free Radio library and the five directories.
    /// A failing directory is reported in `failed`; library matches still appear.
    /// A directory hit that is already in the library is replaced by the library copy.
    static func search(_ query: String) async -> SearchResult {
        async let ti: Result<[Station], Error> = capture { try await searchTuneIn(query) }
        async let rb: Result<[Station], Error> = capture { try await searchRadioBrowser(query) }
        async let sm: Result<[Station], Error> = capture { try await somaFM.search(query) }
        async let ic: Result<[Station], Error> = capture { try await icecast.search(query) }
        async let ip: Result<[Station], Error> = capture { try await iptvOrg.search(query) }
        let results: [(Source, Result<[Station], Error>)] = [
            (.tuneIn, await ti), (.radioBrowser, await rb), (.somaFM, await sm),
            (.icecast, await ic), (.iptvOrg, await ip),
        ]
        var stations: [Station] = []
        var failed: [Source] = []
        var seen = Set<String>()
        // Library matches first, so a saved station is never hidden behind a directory hit.
        for station in FreeRadioCatalog.search(query) where seen.insert(station.id).inserted {
            stations.append(station)
        }
        for (source, result) in results {
            switch result {
            case .success(let list):
                for station in list {
                    let pick = FreeRadioCatalog.libraryCopy(of: station) ?? station
                    if seen.insert(pick.id).inserted { stations.append(pick) }
                }
            case .failure: failed.append(source)
            }
        }
        return SearchResult(stations: stations, failed: failed)
    }

    private static func capture<T>(_ work: () async throws -> T) async -> Result<T, Error> {
        do { return .success(try await work()) } catch { return .failure(error) }
    }

    /// Returns the address to play. TuneIn stations are looked up first; .pls/.m3u playlist
    /// addresses (TuneIn, SomaFM, some Icecast/iptv-org entries) are unwrapped to their first stream.
    static func resolveStream(_ station: Station) async throws -> URL {
        var address: String
        if let s = station.streamUrl, !s.isEmpty {
            address = s
        } else {
            let gid = station.id.hasPrefix("ti-") ? String(station.id.dropFirst(3)) : station.id
            let u = try url(tuneIn, path: "/Tune.ashx", ["id": gid, "render": "json"])
            let json = try await getJSON(u) as? [String: Any]
            guard let s = pickTuneInStream(json?["body"] as? [[String: Any]] ?? []) else {
                throw APIError(message: "TuneIn gave no playable stream for this station")
            }
            address = s
        }
        // AVPlayer can't open .pls/.m3u-style playlist files; unwrap to the first stream.
        if let inner = await unwrapPlaylist(address) { address = inner }
        guard let url = URL(string: address) else { throw APIError(message: "Bad stream address") }
        return url
    }

    private static func unwrapPlaylist(_ address: String) async -> String? {
        guard let u = URL(string: address) else { return nil }
        let path = u.path.lowercased()
        guard path.hasSuffix(".pls") || path.hasSuffix(".m3u") else { return nil }
        guard let data = try? await getData(u), let text = String(data: data, encoding: .utf8) else { return nil }
        for raw in text.split(whereSeparator: \.isNewline) {
            var line = raw.trimmingCharacters(in: .whitespaces)
            if line.lowercased().hasPrefix("file1=") { line = String(line.dropFirst(6)) }
            if line.lowercased().hasPrefix("http") { return line }
        }
        return nil
    }
}
