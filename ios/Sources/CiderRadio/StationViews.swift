import SwiftUI

enum CategoryKind: Hashable { case genre, country }
/// `source` is nil for Radio Browser's genres/countries, set for the feed-backed sources.
struct CategoryTarget: Hashable {
    let kind: CategoryKind
    let name: String
    var source: Source? = nil
}
struct SourceTarget: Hashable { let source: Source }

@MainActor
final class HomeModel: ObservableObject {
    @Published var top: [Station] = []
    @Published var genres: [Category] = []
    @Published var countries: [Category] = []
    @Published var topError: String?
    @Published var loading = false
    @Published var loaded = false

    @Published var results: [Station] = []
    @Published var failed: [Source] = []
    @Published var searching = false
    @Published var searched = false

    func load() async {
        guard !loaded else { return }
        loading = true
        async let t = try? await RadioAPI.topVoted()
        async let g = try? await RadioAPI.genres()
        async let c = try? await RadioAPI.countries()
        let (top, genres, countries) = await (t, g, c)
        self.top = top ?? []
        self.genres = genres ?? []
        self.countries = countries ?? []
        topError = (top == nil || genres == nil || countries == nil)
            ? "Radio Browser couldn't be reached, so some stations aren't shown." : nil
        loaded = top != nil && genres != nil && countries != nil
        loading = false
    }

    func search(_ q: String) async {
        let text = q.trimmingCharacters(in: .whitespaces)
        guard !text.isEmpty else { return }
        searching = true
        let r = await RadioAPI.search(text)
        results = r.stations
        failed = r.failed
        searching = false
        searched = true
    }
}

struct StationsHomeView: View {
    @StateObject private var model = HomeModel()
    @State private var query = ""

    var body: some View {
        List {
            if query.trimmingCharacters(in: .whitespaces).isEmpty {
                homeContent
            } else {
                searchContent
            }
        }
        .listStyle(.insetGrouped)
        .navigationTitle("Stations")
        .searchable(text: $query, placement: .navigationBarDrawer(displayMode: .always), prompt: "Search stations")
        .onSubmit(of: .search) { Task { await model.search(query) } }
        .navigationDestination(for: CategoryTarget.self) { CategoryListView(target: $0) }
        .navigationDestination(for: SourceTarget.self) { SourceView(source: $0.source) }
        .task { await model.load() }
        .refreshable { model.loaded = false; await model.load() }
    }

    @ViewBuilder private var homeContent: some View {
        if let e = model.topError {
            Section { NoteText(text: e) }
        }
        Section("Sources") {
            ForEach([Source.somaFM, .icecast, .iptvOrg], id: \.self) { src in
                NavigationLink(value: SourceTarget(source: src)) {
                    VStack(alignment: .leading, spacing: 2) {
                        Text(src.rawValue).font(.headline)
                        Text(src.blurb).font(.caption).foregroundStyle(.secondary)
                    }
                }
            }
        }
        if !model.genres.isEmpty {
            Section("Genres") { chips(model.genres.map { CategoryTarget(kind: .genre, name: $0.name) }) }
        }
        if !model.countries.isEmpty {
            Section("Countries") { chips(model.countries.map { CategoryTarget(kind: .country, name: $0.name) }) }
        }
        Section("Top voted") {
            if model.loading && model.top.isEmpty { ProgressView().frame(maxWidth: .infinity) }
            ForEach(model.top) { StationRow(station: $0) }
        }
    }

    @ViewBuilder private var searchContent: some View {
        ForEach(model.failed, id: \.self) { s in
            Section { NoteText(text: "\(s.rawValue) couldn't be reached, so its stations aren't shown.") }
        }
        if model.searching {
            Section { ProgressView().frame(maxWidth: .infinity) }
        } else if model.searched && model.results.isEmpty {
            Section { NoteText(text: "No stations found.") }
        } else if !model.searched {
            Section { NoteText(text: "Press search to look in TuneIn, Radio Browser, SomaFM, Icecast and iptv-org.") }
        } else {
            Section("Results") { ForEach(model.results) { StationRow(station: $0) } }
        }
    }

    private func chips(_ targets: [CategoryTarget]) -> some View {
        ScrollView(.horizontal, showsIndicators: false) {
            LazyHStack(spacing: 8) {
                ForEach(targets, id: \.self) { t in
                    NavigationLink(value: t) {
                        Text(t.name.capitalized).font(.subheadline.weight(.medium))
                            .padding(.horizontal, 12).padding(.vertical, 7)
                            .background(Theme.amber.opacity(0.18), in: Capsule())
                            .foregroundStyle(.primary)
                    }
                    .buttonStyle(.plain)
                }
            }
            .padding(.vertical, 2)
        }
        .listRowInsets(EdgeInsets(top: 8, leading: 16, bottom: 8, trailing: 16))
    }
}

struct CategoryListView: View {
    let target: CategoryTarget
    @State private var stations: [Station] = []
    @State private var loading = true
    @State private var error: String?

    var body: some View {
        List {
            if let error { Section { NoteText(text: error) } }
            if loading { ProgressView().frame(maxWidth: .infinity) }
            ForEach(stations) { StationRow(station: $0) }
        }
        .listStyle(.insetGrouped)
        .navigationTitle(target.name.capitalized)
        .navigationBarTitleDisplayMode(.inline)
        .task {
            let label = target.source?.rawValue ?? "Radio Browser"
            do {
                if let src = target.source, let catalog = RadioAPI.catalog(for: src) {
                    stations = try await catalog.stations(inCategory: target.name)
                } else {
                    stations = target.kind == .genre
                        ? try await RadioAPI.stations(byTag: target.name)
                        : try await RadioAPI.stations(byCountry: target.name)
                }
                if stations.isEmpty { error = "No stations found." }
            } catch {
                self.error = "\(label) couldn't be reached, so its stations aren't shown."
            }
            loading = false
        }
    }
}

struct FavoritesView: View {
    @EnvironmentObject var favorites: FavoritesStore

    var body: some View {
        List {
            if favorites.stations.isEmpty {
                Section { NoteText(text: "No favorites yet. Tap the star on a station to keep it here.") }
            } else {
                ForEach(favorites.stations) { StationRow(station: $0) }
                    .onDelete { favorites.remove(at: $0) }
            }
        }
        .listStyle(.insetGrouped)
        .navigationTitle("Favorites")
    }
}

extension Source {
    var blurb: String {
        switch self {
        case .somaFM: return "Listener-supported, commercial-free channels"
        case .icecast: return "Icecast directory (dir.xiph.org), browse by genre"
        case .iptvOrg: return "iptv-org radio index, browse by group"
        default: return ""
        }
    }
}

/// Browse screen for one feed-backed source: its genres/groups plus a station list,
/// all served from the locally cached feed.
struct SourceView: View {
    let source: Source
    @State private var categories: [Category] = []
    @State private var stations: [Station] = []
    @State private var total = 0
    @State private var loading = true
    @State private var error: String?
    private let cap = 100

    var body: some View {
        List {
            if let error { Section { NoteText(text: error) } }
            if loading { Section { ProgressView().frame(maxWidth: .infinity) } }
            if !categories.isEmpty {
                Section(source == .iptvOrg ? "Groups" : "Genres") {
                    ScrollView(.horizontal, showsIndicators: false) {
                        LazyHStack(spacing: 8) {
                            ForEach(categories) { c in
                                NavigationLink(value: CategoryTarget(kind: .genre, name: c.name, source: source)) {
                                    Text(c.name.capitalized).font(.subheadline.weight(.medium))
                                        .padding(.horizontal, 12).padding(.vertical, 7)
                                        .background(Theme.amber.opacity(0.18), in: Capsule())
                                        .foregroundStyle(.primary)
                                }
                                .buttonStyle(.plain)
                            }
                        }
                        .padding(.vertical, 2)
                    }
                    .listRowInsets(EdgeInsets(top: 8, leading: 16, bottom: 8, trailing: 16))
                }
            }
            if !stations.isEmpty {
                Section(total > cap ? "First \(cap) of \(total) stations (use genres or search for more)" : "Stations") {
                    ForEach(stations) { StationRow(station: $0) }
                }
            }
        }
        .listStyle(.insetGrouped)
        .navigationTitle(source.rawValue)
        .navigationBarTitleDisplayMode(.inline)
        .navigationDestination(for: CategoryTarget.self) { CategoryListView(target: $0) }
        .task { await load() }
    }

    private func load() async {
        guard let catalog = RadioAPI.catalog(for: source) else { return }
        do {
            let all = try await catalog.all()
            total = all.count
            if source == .somaFM {
                stations = all
            } else {
                categories = try await catalog.categories()
                stations = Array(all.sorted { $0.bitrate > $1.bitrate }.prefix(cap))
            }
            if all.isEmpty { error = "No stations found." }
        } catch {
            self.error = "\(source.rawValue) couldn't be reached, so its stations aren't shown."
        }
        loading = false
    }
}
