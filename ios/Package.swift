// swift-tools-version: 6.0

import PackageDescription

let package = Package(
    name: "CiderRadio",
    platforms: [
        .iOS(.v17),
        .macOS(.v14),
    ],
    products: [
        // An xtool project contains exactly one library product: the main app.
        .library(name: "CiderRadio", targets: ["CiderRadio"]),
    ],
    targets: [
        .target(
            name: "CiderRadio",
            swiftSettings: [.swiftLanguageMode(.v5)]
        ),
    ]
)
