import SwiftUI

@main
struct CiderRadioApp: App {
    @StateObject private var player = PlayerModel()
    @StateObject private var favorites = FavoritesStore()

    var body: some Scene {
        WindowGroup {
            RootView()
                .environmentObject(player)
                .environmentObject(favorites)
                .tint(Theme.amber)
        }
    }
}

enum Theme {
    static let amber = Color(red: 0.96, green: 0.62, blue: 0.11)
}

struct RootView: View {
    var body: some View {
        TabView {
            NavigationStack { StationsHomeView() }
                .nowPlayingBar()
                .tabItem { Label("Stations", systemImage: "dot.radiowaves.left.and.right") }
            NavigationStack { FavoritesView() }
                .nowPlayingBar()
                .tabItem { Label("Favorites", systemImage: "star.fill") }
        }
    }
}
