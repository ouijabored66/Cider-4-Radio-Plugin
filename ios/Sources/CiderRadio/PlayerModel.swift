import AVFoundation
import Combine
import MediaPlayer
import UIKit

enum PlayStatus: Equatable {
    case stopped, connecting, playing
    case failed(String)
}

@MainActor
final class PlayerModel: NSObject, ObservableObject, AVPlayerItemMetadataOutputPushDelegate {
    @Published private(set) var current: Station?
    @Published private(set) var status: PlayStatus = .stopped
    @Published private(set) var trackTitle: String?

    private let player = AVPlayer()
    private var item: AVPlayerItem?
    private var resolvedURL: URL?
    private var loadTask: Task<Void, Never>?
    private var cancellables = Set<AnyCancellable>()
    private var clickRegistered = false
    private var artwork: MPMediaItemArtwork?
    private var artworkTask: Task<Void, Never>?

    override init() {
        super.init()
        player.automaticallyWaitsToMinimizeStalling = true
        player.publisher(for: \.timeControlStatus)
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in self?.timeControlChanged() }
            .store(in: &cancellables)
        setupRemoteCommands()
        NotificationCenter.default.addObserver(
            self, selector: #selector(interrupted(_:)),
            name: AVAudioSession.interruptionNotification, object: nil)
    }

    var isPlaying: Bool { status == .playing }
    var isActive: Bool { status == .playing || status == .connecting }

    // MARK: control

    func play(_ station: Station) {
        loadTask?.cancel()
        teardownItem()
        current = station
        trackTitle = nil
        status = .connecting
        clickRegistered = false
        resolvedURL = nil
        loadArtwork(for: station)
        updateNowPlaying()
        loadTask = Task { [weak self] in
            do {
                let url = try await RadioAPI.resolveStream(station)
                guard let self, !Task.isCancelled else { return }
                self.resolvedURL = url
                self.start(url)
            } catch {
                guard let self, !Task.isCancelled else { return }
                self.fail(error.localizedDescription)
            }
        }
    }

    func pause() {
        guard current != nil else { return }
        loadTask?.cancel()
        teardownItem()
        status = .stopped
        trackTitle = nil
        updateNowPlaying()
    }

    /// Radio is live, so resuming reconnects instead of continuing from a stale buffer.
    func resume() {
        guard let station = current else { return }
        if let url = resolvedURL, case .stopped = status {
            loadTask?.cancel()
            status = .connecting
            clickRegistered = true
            start(url)
            updateNowPlaying()
        } else {
            play(station)
        }
    }

    func toggle() { isActive ? pause() : resume() }

    func stop() {
        loadTask?.cancel()
        teardownItem()
        current = nil
        trackTitle = nil
        status = .stopped
        resolvedURL = nil
        artwork = nil
        MPNowPlayingInfoCenter.default().nowPlayingInfo = nil
        try? AVAudioSession.sharedInstance().setActive(false, options: .notifyOthersOnDeactivation)
    }

    // MARK: playback

    private func start(_ url: URL) {
        do {
            let s = AVAudioSession.sharedInstance()
            try s.setCategory(.playback, mode: .default)
            try s.setActive(true)
        } catch {
            // Playback may still work; keep going.
        }
        var options: [String: Any] = [:]
        options["AVURLAssetHTTPHeaderFieldsKey"] = ["User-Agent": RadioAPI.userAgent, "Icy-MetaData": "1"]
        let asset = AVURLAsset(url: url, options: options)
        let item = AVPlayerItem(asset: asset)
        let output = AVPlayerItemMetadataOutput(identifiers: nil)
        output.setDelegate(self, queue: .main)
        item.add(output)
        item.publisher(for: \.status)
            .receive(on: DispatchQueue.main)
            .sink { [weak self, weak item] st in
                guard let self, let item, item === self.item, st == .failed else { return }
                self.fail(item.error?.localizedDescription ?? "This station wouldn't play.")
            }
            .store(in: &itemCancellables)
        NotificationCenter.default.publisher(for: .AVPlayerItemFailedToPlayToEndTime, object: item)
            .receive(on: DispatchQueue.main)
            .sink { [weak self] _ in self?.fail("The stream stopped unexpectedly.") }
            .store(in: &itemCancellables)
        self.item = item
        player.replaceCurrentItem(with: item)
        player.play()
    }

    private var itemCancellables = Set<AnyCancellable>()

    private func teardownItem() {
        itemCancellables.removeAll()
        player.pause()
        player.replaceCurrentItem(with: nil)
        item = nil
    }

    private func fail(_ message: String) {
        guard current != nil else { return }
        teardownItem()
        trackTitle = nil
        status = .failed(message.isEmpty ? "This station wouldn't play. Try another one." : message)
        updateNowPlaying()
    }

    private func timeControlChanged() {
        guard item != nil else { return }
        switch player.timeControlStatus {
        case .playing:
            status = .playing
            if !clickRegistered {
                clickRegistered = true
                if let uuid = current?.uuid { RadioAPI.registerClick(uuid: uuid) }
            }
        case .waitingToPlayAtSpecifiedRate:
            if case .failed = status { break }
            status = .connecting
        default: break
        }
        updateNowPlaying()
    }

    // MARK: metadata

    nonisolated func metadataOutput(
        _ output: AVPlayerItemMetadataOutput,
        didOutputTimedMetadataGroups groups: [AVTimedMetadataGroup],
        from track: AVPlayerItemTrack?
    ) {
        var title: String?
        for group in groups {
            for m in group.items {
                if m.commonKey == .commonKeyTitle || m.identifier == .icyMetadataStreamTitle
                    || (m.key as? String) == "StreamTitle" {
                    if let s = m.stringValue?.trimmingCharacters(in: .whitespacesAndNewlines), !s.isEmpty {
                        title = s
                    }
                }
            }
        }
        guard let title else { return }
        Task { @MainActor in
            self.trackTitle = title
            self.updateNowPlaying()
        }
    }

    // MARK: lock screen

    private func updateNowPlaying() {
        guard let station = current else { return }
        var info: [String: Any] = [
            MPMediaItemPropertyTitle: trackTitle ?? station.name,
            MPMediaItemPropertyArtist: station.name,
            MPMediaItemPropertyAlbumTitle: station.name,
            MPNowPlayingInfoPropertyIsLiveStream: true,
            MPNowPlayingInfoPropertyPlaybackRate: isPlaying ? 1.0 : 0.0,
        ]
        if let artwork { info[MPMediaItemPropertyArtwork] = artwork }
        MPNowPlayingInfoCenter.default().nowPlayingInfo = info
    }

    private func loadArtwork(for station: Station) {
        artworkTask?.cancel()
        artwork = nil
        guard let s = station.image, let url = URL(string: s) else { return }
        artworkTask = Task { [weak self] in
            guard let (data, _) = try? await URLSession.shared.data(from: url),
                  let image = UIImage(data: data), !Task.isCancelled,
                  let self, self.current?.id == station.id else { return }
            self.artwork = MPMediaItemArtwork(boundsSize: image.size) { _ in image }
            self.updateNowPlaying()
        }
    }

    private func setupRemoteCommands() {
        let c = MPRemoteCommandCenter.shared()
        c.playCommand.addTarget { [weak self] _ in
            Task { @MainActor in self?.resume() }
            return .success
        }
        c.pauseCommand.addTarget { [weak self] _ in
            Task { @MainActor in self?.pause() }
            return .success
        }
        c.stopCommand.addTarget { [weak self] _ in
            Task { @MainActor in self?.stop() }
            return .success
        }
        c.togglePlayPauseCommand.addTarget { [weak self] _ in
            Task { @MainActor in self?.toggle() }
            return .success
        }
    }

    @objc private func interrupted(_ note: Notification) {
        guard let raw = note.userInfo?[AVAudioSessionInterruptionTypeKey] as? UInt,
              let type = AVAudioSession.InterruptionType(rawValue: raw) else { return }
        Task { @MainActor in
            if type == .began {
                if self.isActive { self.pause() }
            } else if let r = note.userInfo?[AVAudioSessionInterruptionOptionKey] as? UInt,
                      AVAudioSession.InterruptionOptions(rawValue: r).contains(.shouldResume) {
                self.resume()
            }
        }
    }
}
