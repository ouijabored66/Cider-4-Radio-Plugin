#!/usr/bin/env python3
"""Generate a temporary Xcode app project for the Free Radio App Store archive.

The ios/ directory is an xtool Swift package, so this writes an iPhone app
project that compiles those sources and includes Info.plist and AppIcon.
The project is written only to the destination path, which must sit outside
this repository. Team and profile names are supplied later on the xcodebuild
command line.
"""

from __future__ import annotations

import json
import plistlib
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
IOS = ROOT / "ios"
BUNDLE_ID = "com.ouijabored66.freeradio"
DISPLAY_NAME = "Free Radio"
MARKETING_VERSION = "1.1.1"
TARGET_NAME = "FreeRadio"
DEPLOYMENT_TARGET = "17.0"

FRAMEWORKS = ("SwiftUI", "UIKit", "AVFoundation", "MediaPlayer")


def xid(n: int) -> str:
    return f"A1{n:022X}"


def die(message: str) -> None:
    print(message, file=sys.stderr)
    raise SystemExit(1)


def load_info(build: str) -> dict:
    with (IOS / "Info.plist").open("rb") as handle:
        info = plistlib.load(handle)
    info["CFBundleDisplayName"] = DISPLAY_NAME
    info["CFBundleIdentifier"] = "$(PRODUCT_BUNDLE_IDENTIFIER)"
    info["CFBundleExecutable"] = "$(EXECUTABLE_NAME)"
    info["CFBundleName"] = "$(PRODUCT_NAME)"
    info["CFBundlePackageType"] = "APPL"
    info["CFBundleShortVersionString"] = "$(MARKETING_VERSION)"
    info["CFBundleVersion"] = "$(CURRENT_PROJECT_VERSION)"
    info["CFBundleIconName"] = "AppIcon"
    info["ITSAppUsesNonExemptEncryption"] = False
    info["MinimumOSVersion"] = DEPLOYMENT_TARGET
    info["LSRequiresIPhoneOS"] = True
    info.setdefault("UILaunchScreen", {})
    info["UISupportedInterfaceOrientations"] = [
        "UIInterfaceOrientationPortrait",
        "UIInterfaceOrientationLandscapeLeft",
        "UIInterfaceOrientationLandscapeRight",
    ]
    # The build number is also passed as CURRENT_PROJECT_VERSION. Keep a
    # literal copy so a reader of this generated plist can see the value.
    info["CFBundleVersion"] = build
    info["CFBundleShortVersionString"] = MARKETING_VERSION
    info["CFBundleIdentifier"] = BUNDLE_ID
    info["CFBundleExecutable"] = TARGET_NAME
    info["CFBundleName"] = TARGET_NAME
    return info


def write_assets(dest: Path) -> None:
    icon_set = dest / "Assets.xcassets" / "AppIcon.appiconset"
    icon_set.mkdir(parents=True)
    shutil.copy2(IOS / "AppIcon-1024.png", icon_set / "AppIcon-1024.png")
    shutil.copy2(IOS / "AppIcon-1024.png", dest / "AppIcon-1024.png")
    (dest / "Assets.xcassets" / "Contents.json").write_text(
        json.dumps({"info": {"author": "xcode", "version": 1}}, indent=2) + "\n",
        encoding="utf-8",
    )
    (icon_set / "Contents.json").write_text(
        json.dumps(
            {
                "images": [
                    {
                        "filename": "AppIcon-1024.png",
                        "idiom": "universal",
                        "platform": "ios",
                        "size": "1024x1024",
                    }
                ],
                "info": {"author": "xcode", "version": 1},
            },
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )


def q(value: str) -> str:
    if value.isalnum() or value in {"NO", "YES"}:
        return value
    escaped = value.replace("\\", "\\\\").replace('"', '\\"')
    return f'"{escaped}"'


def settings_block(settings: dict[str, str]) -> str:
    lines = ["\t\t\tbuildSettings = {"]
    for key in settings:
        lines.append(f"\t\t\t\t{key} = {settings[key]};")
    lines.append("\t\t\t};")
    return "\n".join(lines)


def project_settings() -> dict[str, str]:
    return {
        "ALWAYS_SEARCH_USER_PATHS": "NO",
        "CLANG_ENABLE_MODULES": "YES",
        "CLANG_ENABLE_OBJC_ARC": "YES",
        "COPY_PHASE_STRIP": "NO",
        "DEBUG_INFORMATION_FORMAT": q("dwarf-with-dsym"),
        "ENABLE_NS_ASSERTIONS": "NO",
        "ENABLE_USER_SCRIPT_SANDBOXING": "NO",
        "IPHONEOS_DEPLOYMENT_TARGET": DEPLOYMENT_TARGET,
        "ONLY_ACTIVE_ARCH": "NO",
        "SDKROOT": "iphoneos",
        "SUPPORTED_PLATFORMS": q("iphoneos"),
        "SUPPORTS_MACCATALYST": "NO",
        "SWIFT_COMPILATION_MODE": "wholemodule",
        "SWIFT_OPTIMIZATION_LEVEL": q("-O"),
        "SWIFT_VERSION": "5.0",
        "TARGETED_DEVICE_FAMILY": "1",
        "VALIDATE_PRODUCT": "YES",
        "VERSIONING_SYSTEM": q("apple-generic"),
    }


def target_settings(build: str) -> dict[str, str]:
    return {
        "ARCHS": "arm64",
        "ASSETCATALOG_COMPILER_APPICON_NAME": "AppIcon",
        "CODE_SIGN_IDENTITY": q("Apple Distribution"),
        "CODE_SIGN_INJECT_BASE_ENTITLEMENTS": "NO",
        "CODE_SIGN_STYLE": "Manual",
        "CURRENT_PROJECT_VERSION": build,
        "DEVELOPMENT_TEAM": q(""),
        "ENABLE_PREVIEWS": "NO",
        "GENERATE_INFOPLIST_FILE": "YES",
        "INFOPLIST_FILE": "Info.plist",
        "INFOPLIST_KEY_CFBundleDisplayName": q(DISPLAY_NAME),
        "INFOPLIST_KEY_ITSAppUsesNonExemptEncryption": "NO",
        "INFOPLIST_KEY_UIApplicationSupportsIndirectInputEvents": "YES",
        "INFOPLIST_KEY_UILaunchScreen_Generation": "YES",
        "IPHONEOS_DEPLOYMENT_TARGET": DEPLOYMENT_TARGET,
        "LD_RUNPATH_SEARCH_PATHS": '(\n\t\t\t\t\t"$(inherited)",\n\t\t\t\t\t"@executable_path/Frameworks",\n\t\t\t\t)',
        "MARKETING_VERSION": MARKETING_VERSION,
        "PRODUCT_BUNDLE_IDENTIFIER": BUNDLE_ID,
        "PRODUCT_NAME": TARGET_NAME,
        "PROVISIONING_PROFILE_SPECIFIER": q(""),
        "SDKROOT": "iphoneos",
        "SUPPORTED_PLATFORMS": q("iphoneos"),
        "SUPPORTS_MACCATALYST": "NO",
        "SWIFT_EMIT_LOC_STRINGS": "YES",
        "SWIFT_STRICT_CONCURRENCY": "minimal",
        "SWIFT_VERSION": "5.0",
        "TARGETED_DEVICE_FAMILY": "1",
    }


def write_project(dest: Path, swift_files: list[str], build: str) -> None:
    project_id = xid(1)
    target_id = xid(2)
    sources_phase = xid(3)
    frameworks_phase = xid(4)
    resources_phase = xid(5)
    product_ref = xid(6)
    main_group = xid(7)
    sources_group = xid(8)
    products_group = xid(9)
    project_list = xid(10)
    target_list = xid(11)
    project_cfg = xid(12)
    target_cfg = xid(13)
    asset_ref = xid(14)
    asset_build = xid(15)
    icon_ref = xid(16)
    icon_build = xid(17)
    plist_ref = xid(18)
    frameworks_group = xid(19)

    swift_refs = [xid(0x100 + i) for i in range(len(swift_files))]
    swift_builds = [xid(0x200 + i) for i in range(len(swift_files))]
    framework_refs = [xid(0x300 + i) for i in range(len(FRAMEWORKS))]
    framework_builds = [xid(0x400 + i) for i in range(len(FRAMEWORKS))]

    objects: list[str] = []

    objects.append("/* Begin PBXBuildFile section */")
    for build_id, ref, name in zip(swift_builds, swift_refs, swift_files):
        objects.append(
            f"\t\t{build_id} /* {name} in Sources */ = {{isa = PBXBuildFile; fileRef = {ref} /* {name} */; }};"
        )
    for build_id, ref, name in zip(framework_builds, framework_refs, FRAMEWORKS):
        objects.append(
            f"\t\t{build_id} /* {name}.framework in Frameworks */ = {{isa = PBXBuildFile; fileRef = {ref} /* {name}.framework */; }};"
        )
    objects.append(
        f"\t\t{asset_build} /* Assets.xcassets in Resources */ = {{isa = PBXBuildFile; fileRef = {asset_ref} /* Assets.xcassets */; }};"
    )
    objects.append(
        f"\t\t{icon_build} /* AppIcon-1024.png in Resources */ = {{isa = PBXBuildFile; fileRef = {icon_ref} /* AppIcon-1024.png */; }};"
    )
    objects.append("/* End PBXBuildFile section */")
    objects.append("")

    objects.append("/* Begin PBXFileReference section */")
    for ref, name in zip(swift_refs, swift_files):
        objects.append(
            f"\t\t{ref} /* {name} */ = {{isa = PBXFileReference; lastKnownFileType = sourcecode.swift; path = {name}; sourceTree = \"<group>\"; }};"
        )
    for ref, name in zip(framework_refs, FRAMEWORKS):
        objects.append(
            "\t\t{ref} /* {name}.framework */ = {{isa = PBXFileReference; lastKnownFileType = wrapper.framework; name = {name}.framework; path = System/Library/Frameworks/{name}.framework; sourceTree = SDKROOT; }};".format(
                ref=ref, name=name
            )
        )
    objects.append(
        f"\t\t{asset_ref} /* Assets.xcassets */ = {{isa = PBXFileReference; lastKnownFileType = folder.assetcatalog; path = Assets.xcassets; sourceTree = \"<group>\"; }};"
    )
    objects.append(
        f"\t\t{icon_ref} /* AppIcon-1024.png */ = {{isa = PBXFileReference; lastKnownFileType = image.png; path = AppIcon-1024.png; sourceTree = \"<group>\"; }};"
    )
    objects.append(
        f"\t\t{plist_ref} /* Info.plist */ = {{isa = PBXFileReference; lastKnownFileType = text.plist.xml; path = Info.plist; sourceTree = \"<group>\"; }};"
    )
    objects.append(
        f"\t\t{product_ref} /* {TARGET_NAME}.app */ = {{isa = PBXFileReference; explicitFileType = wrapper.application; includeInIndex = 0; path = {TARGET_NAME}.app; sourceTree = BUILT_PRODUCTS_DIR; }};"
    )
    objects.append("/* End PBXFileReference section */")
    objects.append("")

    objects.append("/* Begin PBXFrameworksBuildPhase section */")
    framework_lines = "\n".join(f"\t\t\t\t{item} /* {name}.framework in Frameworks */," for item, name in zip(framework_builds, FRAMEWORKS))
    objects.append(
        f"\t\t{frameworks_phase} /* Frameworks */ = {{\n"
        f"\t\t\tisa = PBXFrameworksBuildPhase;\n"
        f"\t\t\tbuildActionMask = 2147483647;\n"
        f"\t\t\tfiles = (\n{framework_lines}\n\t\t\t);\n"
        f"\t\t\trunOnlyForDeploymentPostprocessing = 0;\n"
        f"\t\t}};"
    )
    objects.append("/* End PBXFrameworksBuildPhase section */")
    objects.append("")

    objects.append("/* Begin PBXGroup section */")
    swift_children = "\n".join(f"\t\t\t\t{ref} /* {name} */," for ref, name in zip(swift_refs, swift_files))
    framework_children = "\n".join(
        f"\t\t\t\t{ref} /* {name}.framework */," for ref, name in zip(framework_refs, FRAMEWORKS)
    )
    objects.append(
        f"\t\t{main_group} = {{\n"
        f"\t\t\tisa = PBXGroup;\n"
        f"\t\t\tchildren = (\n"
        f"\t\t\t\t{sources_group} /* Sources */,\n"
        f"\t\t\t\t{frameworks_group} /* Frameworks */,\n"
        f"\t\t\t\t{asset_ref} /* Assets.xcassets */,\n"
        f"\t\t\t\t{icon_ref} /* AppIcon-1024.png */,\n"
        f"\t\t\t\t{plist_ref} /* Info.plist */,\n"
        f"\t\t\t\t{products_group} /* Products */,\n"
        f"\t\t\t);\n"
        f"\t\t\tsourceTree = \"<group>\";\n"
        f"\t\t}};"
    )
    objects.append(
        f"\t\t{sources_group} /* Sources */ = {{\n"
        f"\t\t\tisa = PBXGroup;\n"
        f"\t\t\tchildren = (\n{swift_children}\n\t\t\t);\n"
        f"\t\t\tpath = Sources;\n"
        f"\t\t\tsourceTree = \"<group>\";\n"
        f"\t\t}};"
    )
    objects.append(
        f"\t\t{frameworks_group} /* Frameworks */ = {{\n"
        f"\t\t\tisa = PBXGroup;\n"
        f"\t\t\tchildren = (\n{framework_children}\n\t\t\t);\n"
        f"\t\t\tname = Frameworks;\n"
        f"\t\t\tsourceTree = \"<group>\";\n"
        f"\t\t}};"
    )
    objects.append(
        f"\t\t{products_group} /* Products */ = {{\n"
        f"\t\t\tisa = PBXGroup;\n"
        f"\t\t\tchildren = (\n"
        f"\t\t\t\t{product_ref} /* {TARGET_NAME}.app */,\n"
        f"\t\t\t);\n"
        f"\t\t\tname = Products;\n"
        f"\t\t\tsourceTree = \"<group>\";\n"
        f"\t\t}};"
    )
    objects.append("/* End PBXGroup section */")
    objects.append("")

    objects.append("/* Begin PBXNativeTarget section */")
    objects.append(
        f"\t\t{target_id} /* {TARGET_NAME} */ = {{\n"
        f"\t\t\tisa = PBXNativeTarget;\n"
        f"\t\t\tbuildConfigurationList = {target_list} /* Build configuration list for PBXNativeTarget \"{TARGET_NAME}\" */;\n"
        f"\t\t\tbuildPhases = (\n"
        f"\t\t\t\t{sources_phase} /* Sources */,\n"
        f"\t\t\t\t{frameworks_phase} /* Frameworks */,\n"
        f"\t\t\t\t{resources_phase} /* Resources */,\n"
        f"\t\t\t);\n"
        f"\t\t\tbuildRules = (\n"
        f"\t\t\t);\n"
        f"\t\t\tdependencies = (\n"
        f"\t\t\t);\n"
        f"\t\t\tname = {TARGET_NAME};\n"
        f"\t\t\tproductName = {TARGET_NAME};\n"
        f"\t\t\tproductReference = {product_ref} /* {TARGET_NAME}.app */;\n"
        f"\t\t\tproductType = \"com.apple.product-type.application\";\n"
        f"\t\t}};"
    )
    objects.append("/* End PBXNativeTarget section */")
    objects.append("")

    objects.append("/* Begin PBXProject section */")
    objects.append(
        f"\t\t{project_id} /* Project object */ = {{\n"
        f"\t\t\tisa = PBXProject;\n"
        f"\t\t\tattributes = {{\n"
        f"\t\t\t\tBuildIndependentTargetsInParallel = 1;\n"
        f"\t\t\t\tLastUpgradeCheck = 1600;\n"
        f"\t\t\t\tTargetAttributes = {{\n"
        f"\t\t\t\t\t{target_id} = {{\n"
        f"\t\t\t\t\t\tCreatedOnToolsVersion = 16.0;\n"
        f"\t\t\t\t\t}};\n"
        f"\t\t\t\t}};\n"
        f"\t\t\t}};\n"
        f"\t\t\tbuildConfigurationList = {project_list} /* Build configuration list for PBXProject \"{TARGET_NAME}\" */;\n"
        f"\t\t\tcompatibilityVersion = \"Xcode 14.0\";\n"
        f"\t\t\tdevelopmentRegion = en;\n"
        f"\t\t\thasScannedForEncodings = 0;\n"
        f"\t\t\tknownRegions = (\n"
        f"\t\t\t\ten,\n"
        f"\t\t\t\tBase,\n"
        f"\t\t\t);\n"
        f"\t\t\tmainGroup = {main_group};\n"
        f"\t\t\tproductRefGroup = {products_group} /* Products */;\n"
        f"\t\t\tprojectDirPath = \"\";\n"
        f"\t\t\tprojectRoot = \"\";\n"
        f"\t\t\ttargets = (\n"
        f"\t\t\t\t{target_id} /* {TARGET_NAME} */,\n"
        f"\t\t\t);\n"
        f"\t\t}};"
    )
    objects.append("/* End PBXProject section */")
    objects.append("")

    objects.append("/* Begin PBXResourcesBuildPhase section */")
    objects.append(
        f"\t\t{resources_phase} /* Resources */ = {{\n"
        f"\t\t\tisa = PBXResourcesBuildPhase;\n"
        f"\t\t\tbuildActionMask = 2147483647;\n"
        f"\t\t\tfiles = (\n"
        f"\t\t\t\t{asset_build} /* Assets.xcassets in Resources */,\n"
        f"\t\t\t\t{icon_build} /* AppIcon-1024.png in Resources */,\n"
        f"\t\t\t);\n"
        f"\t\t\trunOnlyForDeploymentPostprocessing = 0;\n"
        f"\t\t}};"
    )
    objects.append("/* End PBXResourcesBuildPhase section */")
    objects.append("")

    objects.append("/* Begin PBXSourcesBuildPhase section */")
    source_lines = "\n".join(
        f"\t\t\t\t{item} /* {name} in Sources */," for item, name in zip(swift_builds, swift_files)
    )
    objects.append(
        f"\t\t{sources_phase} /* Sources */ = {{\n"
        f"\t\t\tisa = PBXSourcesBuildPhase;\n"
        f"\t\t\tbuildActionMask = 2147483647;\n"
        f"\t\t\tfiles = (\n{source_lines}\n\t\t\t);\n"
        f"\t\t\trunOnlyForDeploymentPostprocessing = 0;\n"
        f"\t\t}};"
    )
    objects.append("/* End PBXSourcesBuildPhase section */")
    objects.append("")

    objects.append("/* Begin XCBuildConfiguration section */")
    objects.append(
        f"\t\t{project_cfg} /* Release */ = {{\n"
        f"\t\t\tisa = XCBuildConfiguration;\n"
        f"{settings_block(project_settings())}\n"
        f"\t\t\tname = Release;\n"
        f"\t\t}};"
    )
    objects.append(
        f"\t\t{target_cfg} /* Release */ = {{\n"
        f"\t\t\tisa = XCBuildConfiguration;\n"
        f"{settings_block(target_settings(build))}\n"
        f"\t\t\tname = Release;\n"
        f"\t\t}};"
    )
    objects.append("/* End XCBuildConfiguration section */")
    objects.append("")

    objects.append("/* Begin XCConfigurationList section */")
    objects.append(
        f"\t\t{project_list} /* Build configuration list for PBXProject \"{TARGET_NAME}\" */ = {{\n"
        f"\t\t\tisa = XCConfigurationList;\n"
        f"\t\t\tbuildConfigurations = (\n"
        f"\t\t\t\t{project_cfg} /* Release */,\n"
        f"\t\t\t);\n"
        f"\t\t\tdefaultConfigurationIsVisible = 0;\n"
        f"\t\t\tdefaultConfigurationName = Release;\n"
        f"\t\t}};"
    )
    objects.append(
        f"\t\t{target_list} /* Build configuration list for PBXNativeTarget \"{TARGET_NAME}\" */ = {{\n"
        f"\t\t\tisa = XCConfigurationList;\n"
        f"\t\t\tbuildConfigurations = (\n"
        f"\t\t\t\t{target_cfg} /* Release */,\n"
        f"\t\t\t);\n"
        f"\t\t\tdefaultConfigurationIsVisible = 0;\n"
        f"\t\t\tdefaultConfigurationName = Release;\n"
        f"\t\t}};"
    )
    objects.append("/* End XCConfigurationList section */")

    body = "\n".join(objects)
    text = (
        "// !$*UTF8*$!\n"
        "{\n"
        "\tarchiveVersion = 1;\n"
        "\tclasses = {\n"
        "\t};\n"
        "\tobjectVersion = 56;\n"
        "\tobjects = {\n\n"
        f"{body}\n"
        "\t};\n"
        f"\trootObject = {project_id} /* Project object */;\n"
        "}\n"
    )
    project_dir = dest / f"{TARGET_NAME}.xcodeproj"
    project_dir.mkdir(parents=True)
    (project_dir / "project.pbxproj").write_text(text, encoding="utf-8")
    scheme_dir = project_dir / "xcshareddata" / "xcschemes"
    scheme_dir.mkdir(parents=True)
    (scheme_dir / f"{TARGET_NAME}.xcscheme").write_text(scheme(target_id), encoding="utf-8")


def scheme(target_id: str) -> str:
    ref = f"""<BuildableReference
               BuildableIdentifier = "primary"
               BlueprintIdentifier = "{target_id}"
               BuildableName = "{TARGET_NAME}.app"
               BlueprintName = "{TARGET_NAME}"
               ReferencedContainer = "container:{TARGET_NAME}.xcodeproj">
            </BuildableReference>"""
    return f"""<?xml version="1.0" encoding="UTF-8"?>
<Scheme
   LastUpgradeVersion = "1600"
   version = "1.7">
   <BuildAction
      parallelizeBuildables = "YES"
      buildImplicitDependencies = "YES">
      <BuildActionEntries>
         <BuildActionEntry
            buildForTesting = "YES"
            buildForRunning = "YES"
            buildForProfiling = "YES"
            buildForArchiving = "YES"
            buildForAnalyzing = "YES">
            {ref}
         </BuildActionEntry>
      </BuildActionEntries>
   </BuildAction>
   <TestAction
      buildConfiguration = "Release"
      selectedDebuggerIdentifier = "Xcode.DebuggerFoundation.Debugger.LLDB"
      selectedLauncherIdentifier = "Xcode.DebuggerFoundation.Launcher.LLDB"
      shouldUseLaunchSchemeArgsEnv = "YES">
   </TestAction>
   <LaunchAction
      buildConfiguration = "Release"
      selectedDebuggerIdentifier = "Xcode.DebuggerFoundation.Debugger.LLDB"
      selectedLauncherIdentifier = "Xcode.DebuggerFoundation.Launcher.LLDB"
      launchStyle = "0"
      useCustomWorkingDirectory = "NO"
      ignoresPersistentStateOnLaunch = "NO"
      debugDocumentVersioning = "YES"
      debugServiceExtension = "internal"
      allowLocationSimulation = "YES">
      <BuildableProductRunnable
         runnableDebuggingMode = "0">
         {ref}
      </BuildableProductRunnable>
   </LaunchAction>
   <ProfileAction
      buildConfiguration = "Release"
      shouldUseLaunchSchemeArgsEnv = "YES"
      savedToolIdentifier = ""
      useCustomWorkingDirectory = "NO"
      debugDocumentVersioning = "YES">
      <BuildableProductRunnable
         runnableDebuggingMode = "0">
         {ref}
      </BuildableProductRunnable>
   </ProfileAction>
   <AnalyzeAction
      buildConfiguration = "Release">
   </AnalyzeAction>
   <ArchiveAction
      buildConfiguration = "Release"
      revealArchiveInOrganizer = "YES">
   </ArchiveAction>
</Scheme>
"""


def clear_output(dest: Path) -> None:
    if dest.exists() and not dest.is_dir():
        die("The destination is not a directory.")
    if dest.exists() and any(dest.iterdir()):
        die("The destination must be an empty directory.")
    dest.mkdir(parents=True, exist_ok=True)


def main() -> None:
    if len(sys.argv) != 3:
        die("usage: generate_app_store_project.py DEST BUILD_NUMBER")
    dest = Path(sys.argv[1]).resolve()
    build = sys.argv[2]
    if not build.isdigit() or int(build) <= 3:
        die("The build number must be an integer higher than 3.")
    if dest == ROOT or ROOT in dest.parents:
        die("Refusing to generate the Xcode project inside the repository.")
    sources = sorted(path.name for path in (IOS / "Sources" / "CiderRadio").glob("*.swift"))
    if len(sources) < 1:
        die("No Swift sources were found.")
    if not (IOS / "Info.plist").is_file() or not (IOS / "AppIcon-1024.png").is_file():
        die("ios/Info.plist and ios/AppIcon-1024.png are required.")
    clear_output(dest)
    sources_dir = dest / "Sources"
    sources_dir.mkdir()
    for name in sources:
        shutil.copy2(IOS / "Sources" / "CiderRadio" / name, sources_dir / name)
    with (dest / "Info.plist").open("wb") as handle:
        plistlib.dump(load_info(build), handle, fmt=plistlib.FMT_XML)
    write_assets(dest)
    write_project(dest, sources, build)


if __name__ == "__main__":
    main()
