import Foundation

enum Source: String, Codable {
    case tuneIn = "TuneIn"
    case radioBrowser = "Radio Browser"
    case somaFM = "SomaFM"
    case icecast = "Icecast"
    case iptvOrg = "iptv-org"
    case veniceClassic = "Venice Classic Radio"

    /// Sources searched and shown, in display order.
    static let displayOrder: [Source] = [.tuneIn, .radioBrowser, .somaFM, .icecast, .veniceClassic, .iptvOrg]
    /// Sources served from a locally cached copy of a feed.
    var isLocalCatalog: Bool { self == .somaFM || self == .icecast || self == .iptvOrg }
}

/// A radio station. Persisted whole in UserDefaults for favorites.
struct Station: Identifiable, Codable, Hashable {
    var id: String
    var name: String
    /// Country + tags (Radio Browser) or TuneIn's subtext.
    var detail: String
    var codec: String
    var bitrate: Int
    var image: String?
    var source: Source
    /// Direct stream address. TuneIn stations get this from RadioAPI.resolveStream().
    var streamUrl: String?
    /// Radio Browser station uuid, used for the click-register call.
    var uuid: String?
    /// Comma-separated genres/groups (local-catalog sources). Optional so older favorites still decode.
    var tags: String?
    /// Country, when the source gives one.
    var country: String?
    /// Broadcaster or directory page. Optional so favorites saved before this field still decode.
    /// The stream address is stored separately and is not rewritten.
    var homepage: String? = nil

    var badge: String? {
        guard bitrate > 0 else { return nil }
        let c = codec.trimmingCharacters(in: .whitespaces)
        return c.isEmpty ? "\(bitrate) kbps" : "\(c.uppercased()) \(bitrate)"
    }
}

struct SearchResult {
    var stations: [Station]
    /// Sources that could not be reached, so the page can say so.
    var failed: [Source]
}

struct Category: Identifiable, Hashable {
    var name: String
    var count: Int
    var id: String { name }
}
