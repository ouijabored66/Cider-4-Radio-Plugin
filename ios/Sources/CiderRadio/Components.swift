import SwiftUI

struct StationRow: View {
    let station: Station
    @EnvironmentObject var player: PlayerModel
    @EnvironmentObject var favorites: FavoritesStore

    private var isCurrent: Bool { player.current?.id == station.id }

    var body: some View {
        HStack(spacing: 12) {
            Button { player.play(station) } label: {
                HStack(spacing: 12) {
                    FaviconView(url: station.image, size: 44)
                    VStack(alignment: .leading, spacing: 3) {
                        HStack(spacing: 6) {
                            Text(station.name).font(.headline).lineLimit(1)
                                .foregroundStyle(isCurrent ? Theme.amber : .primary)
                        }
                        HStack(spacing: 6) {
                            SourceTag(text: station.source.rawValue)
                            if !station.detail.isEmpty {
                                Text(station.detail).font(.subheadline).foregroundStyle(.secondary).lineLimit(1)
                            }
                        }
                        if isCurrent, case .failed(let msg) = player.status {
                            Text(msg).font(.caption).foregroundStyle(.red).lineLimit(2)
                        } else if isCurrent, player.status == .connecting {
                            Text("Connecting…").font(.caption).foregroundStyle(.secondary)
                        }
                    }
                    Spacer(minLength: 4)
                    if let badge = station.badge {
                        Text(badge).font(.caption2.weight(.semibold)).foregroundStyle(.secondary)
                            .padding(.horizontal, 6).padding(.vertical, 2)
                            .background(.quaternary, in: Capsule())
                    }
                }
                .contentShape(Rectangle())
            }
            .buttonStyle(.plain)

            Button { favorites.toggle(station) } label: {
                Image(systemName: favorites.contains(station) ? "star.fill" : "star")
                    .foregroundStyle(favorites.contains(station) ? Theme.amber : .secondary)
                    .frame(width: 32, height: 44)
            }
            .buttonStyle(.borderless)
            .accessibilityLabel(favorites.contains(station) ? "Remove from favorites" : "Add to favorites")
        }
    }
}

struct SourceTag: View {
    let text: String
    var body: some View {
        Text(text).font(.caption2.weight(.bold)).foregroundStyle(Theme.amber)
            .padding(.horizontal, 5).padding(.vertical, 1)
            .background(Theme.amber.opacity(0.15), in: Capsule())
    }
}

struct FaviconView: View {
    let url: String?
    let size: CGFloat

    var body: some View {
        Group {
            if let url, let u = URL(string: url) {
                AsyncImage(url: u) { phase in
                    if let image = phase.image { image.resizable().scaledToFill() } else { placeholder }
                }
            } else {
                placeholder
            }
        }
        .frame(width: size, height: size)
        .clipShape(RoundedRectangle(cornerRadius: size * 0.2))
    }

    private var placeholder: some View {
        ZStack {
            Theme.amber.opacity(0.15)
            Image(systemName: "radio").foregroundStyle(Theme.amber)
        }
    }
}

struct NowPlayingBar: View {
    @EnvironmentObject var player: PlayerModel

    var body: some View {
        if let station = player.current {
            HStack(spacing: 12) {
                FaviconView(url: station.image, size: 44)
                VStack(alignment: .leading, spacing: 2) {
                    Text(station.name).font(.subheadline.weight(.semibold)).lineLimit(1)
                    Text(subtitle).font(.caption)
                        .foregroundStyle(isFailed ? Color.red : Color.secondary).lineLimit(2)
                }
                Spacer(minLength: 4)
                Button { player.toggle() } label: {
                    Image(systemName: player.isActive ? "pause.fill" : "play.fill").font(.title2)
                        .frame(width: 40, height: 40)
                }
                .accessibilityLabel(player.isActive ? "Pause" : "Play")
                Button { player.stop() } label: {
                    Image(systemName: "stop.fill").font(.title3).frame(width: 40, height: 40)
                }
                .accessibilityLabel("Stop")
            }
            .buttonStyle(.plain)
            .padding(.horizontal, 14).padding(.vertical, 8)
            .background(.regularMaterial)
            .overlay(alignment: .top) { Divider() }
        }
    }

    private var isFailed: Bool { if case .failed = player.status { return true } else { return false } }

    private var subtitle: String {
        switch player.status {
        case .failed(let m): return m
        case .connecting: return "Connecting…"
        case .stopped: return "Paused"
        case .playing: return player.trackTitle ?? "Live"
        }
    }
}

extension View {
    func nowPlayingBar() -> some View {
        safeAreaInset(edge: .bottom, spacing: 0) { NowPlayingBar() }
    }
}

struct NoteText: View {
    let text: String
    var body: some View {
        Text(text).font(.footnote).foregroundStyle(.secondary)
    }
}
