import Foundation

@MainActor
final class FavoritesStore: ObservableObject {
    private static let key = "favorites.v1"
    @Published private(set) var stations: [Station]

    init() {
        if let data = UserDefaults.standard.data(forKey: Self.key),
           let list = try? JSONDecoder().decode([Station].self, from: data) {
            stations = list
        } else {
            stations = []
        }
    }

    func contains(_ s: Station) -> Bool { stations.contains { $0.id == s.id } }

    func toggle(_ s: Station) {
        if let i = stations.firstIndex(where: { $0.id == s.id }) {
            stations.remove(at: i)
        } else {
            stations.insert(s, at: 0)
        }
        save()
    }

    func remove(at offsets: IndexSet) {
        stations.remove(atOffsets: offsets)
        save()
    }

    private func save() {
        if let data = try? JSONEncoder().encode(stations) {
            UserDefaults.standard.set(data, forKey: Self.key)
        }
    }
}
