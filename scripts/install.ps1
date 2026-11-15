# Install the Radio plugin into Cider's plugins directory on Windows.
# macOS and Linux: use scripts/install.sh instead.
#
# The usual Windows folder stays %APPDATA%\C2Windows\plugins\radio.
# A data folder that is already on disk is used when C2Windows is not:
#   %APPDATA%\sh.cider.genten
#   %APPDATA%\sh.cider.dotnet
#   the Microsoft Store C2Windows package path
#
# Quit Cider before installing. Start Cider again afterward and open Radio.
# This script has not been run on a Mac. On a Mac, scripts/install.sh is the installer.

[CmdletBinding()]
param(
    [Parameter(Position = 0)]
    [string]$Source,
    [switch]$DryRun,
    [switch]$PrintPath
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$PluginIdentifier = 'local.cider.radio'
$RepoRoot = Split-Path -Parent $PSScriptRoot

function Get-CiderPlatform {
    if ($env:CIDER_RADIO_OS) { return $env:CIDER_RADIO_OS }
    if ($env:OS -eq 'Windows_NT') { return 'Windows_NT' }
    $uname = & uname -s
    if ($LASTEXITCODE -ne 0) { throw 'Could not detect the operating system.' }
    return $uname
}

function Join-All {
    param([Parameter(Mandatory = $true)][string[]]$Parts)
    $path = $Parts[0]
    for ($i = 1; $i -lt $Parts.Count; $i++) {
        $path = Join-Path $path $Parts[$i]
    }
    return $path
}

function Get-CiderPluginsDir {
    $platform = Get-CiderPlatform
    $homeDir = $env:HOME
    if (-not $homeDir) { $homeDir = $env:USERPROFILE }
    if (-not $homeDir) { throw 'HOME is not set.' }

    $candidates = @()
    $default = $null

    switch -Wildcard ($platform) {
        'Darwin' {
            $default = Join-All @($homeDir, 'Library', 'Application Support', 'sh.cider.genten')
            $candidates = @(
                $default
                (Join-All @($homeDir, 'Library', 'Application Support', 'sh.cider.electron'))
            )
            break
        }
        'Linux' {
            $configHome = if ($env:XDG_CONFIG_HOME) { $env:XDG_CONFIG_HOME } else { Join-Path $homeDir '.config' }
            $default = Join-Path $configHome 'sh.cider.genten'
            $candidates = @(
                $default
                (Join-All @($homeDir, '.var', 'app', 'sh.cider.Cider', 'config', 'sh.cider.genten'))
            )
            break
        }
        'MINGW*' { $platform = 'Windows_NT'; break }
        'MSYS*' { $platform = 'Windows_NT'; break }
        'CYGWIN*' { $platform = 'Windows_NT'; break }
        'Windows_NT' { break }
        default { throw "Unsupported operating system: $platform" }
    }

    if ($platform -eq 'Windows_NT') {
        $appData = if ($env:APPDATA) { $env:APPDATA } else { Join-All @($homeDir, 'AppData', 'Roaming') }
        $localAppData = if ($env:LOCALAPPDATA) { $env:LOCALAPPDATA } else { Join-All @($homeDir, 'AppData', 'Local') }
        $default = Join-Path $appData 'C2Windows'
        $storePackage = Join-All @(
            $localAppData, 'packages',
            '27554FireDevElijahKlauman.CiderEA_270bejk4xgzqp',
            'LocalCache', 'Roaming', 'C2Windows'
        )
        $candidates = @(
            $default
            (Join-Path $appData 'sh.cider.genten')
            (Join-Path $appData 'sh.cider.dotnet')
            $storePackage
        )
    }

    if (Test-Path -LiteralPath $default -PathType Container) {
        return (Join-Path $default 'plugins')
    }
    foreach ($candidate in $candidates) {
        if (Test-Path -LiteralPath $candidate -PathType Container) {
            return (Join-Path $candidate 'plugins')
        }
    }
    return (Join-Path $default 'plugins')
}

function Test-PluginDir {
    param([string]$Dir)
    $yml = Join-Path $Dir 'plugin.yml'
    $js = Join-Path $Dir 'plugin.js'
    return (Test-Path -LiteralPath $yml -PathType Leaf) -and (Test-Path -LiteralPath $js -PathType Leaf)
}

function Resolve-PluginSource {
    param([string]$InputPath)

    if (-not $InputPath) {
        foreach ($candidate in @((Join-Path $RepoRoot 'radio'), (Join-Path $RepoRoot 'dist'))) {
            if (Test-PluginDir $candidate) { return (Resolve-Path -LiteralPath $candidate).Path }
            $nested = Join-Path $candidate 'radio'
            if (Test-PluginDir $nested) { return (Resolve-Path -LiteralPath $nested).Path }
        }
        throw 'No plugin found. Pass the radio folder or the release zip.'
    }

    if (Test-Path -LiteralPath $InputPath -PathType Container) {
        if (Test-PluginDir $InputPath) { return (Resolve-Path -LiteralPath $InputPath).Path }
        $nested = Join-Path $InputPath 'radio'
        if (Test-PluginDir $nested) { return (Resolve-Path -LiteralPath $nested).Path }
        throw "No plugin.yml and plugin.js in $InputPath"
    }

    if (-not (Test-Path -LiteralPath $InputPath -PathType Leaf)) {
        throw "Not found: $InputPath"
    }
    if (-not $InputPath.ToLowerInvariant().EndsWith('.zip')) {
        throw "Expected a directory or a .zip file: $InputPath"
    }

    $work = Join-Path ([System.IO.Path]::GetTempPath()) ("cider-radio-" + [guid]::NewGuid().ToString('n'))
    New-Item -ItemType Directory -Path $work | Out-Null
    $script:WorkDir = $work
    Expand-Archive -LiteralPath $InputPath -DestinationPath $work -Force
    $yml = Get-ChildItem -LiteralPath $work -Filter plugin.yml -Recurse -Depth 3 | Select-Object -First 1
    if (-not $yml) { throw "Zip has no plugin.yml: $InputPath" }
    $dir = $yml.Directory.FullName
    if (-not (Test-PluginDir $dir)) { throw "Zip plugin folder is missing plugin.js: $InputPath" }
    return $dir
}

function Test-RadioIdentifier {
    param([string]$YmlPath)
    $pattern = "(?m)^identifier:\s*['""]?$([regex]::Escape($PluginIdentifier))['""]?\s*$"
    return [regex]::IsMatch((Get-Content -LiteralPath $YmlPath -Raw), $pattern)
}

$script:WorkDir = $null
try {
    $pluginsDir = Get-CiderPluginsDir
    if ($PrintPath) {
        Write-Output $pluginsDir
        return
    }

    $resolved = Resolve-PluginSource $Source
    $ymlPath = Join-Path $resolved 'plugin.yml'
    if (-not (Test-RadioIdentifier $ymlPath)) {
        throw "plugin.yml in $resolved is not $PluginIdentifier"
    }

    $dest = Join-Path $pluginsDir 'radio'
    if (Test-Path -LiteralPath $pluginsDir -PathType Container) {
        foreach ($dir in Get-ChildItem -LiteralPath $pluginsDir -Directory) {
            $existingYml = Join-Path $dir.FullName 'plugin.yml'
            if ((Test-Path -LiteralPath $existingYml -PathType Leaf) -and (Test-RadioIdentifier $existingYml)) {
                $dest = $dir.FullName
                break
            }
        }
    }

    if ($dest -notmatch '[\\/]plugins[\\/][^\\/]+$') {
        throw "Refusing to install outside a Cider plugins directory: $dest"
    }

    $destItem = Get-Item -LiteralPath $dest -Force -ErrorAction SilentlyContinue
    if ($destItem -and $destItem.Attributes -band [IO.FileAttributes]::ReparsePoint) {
        throw "Refusing to replace a symlink: $dest"
    }

    Write-Output "From: $resolved"
    Write-Output "To:   $dest"
    if ($DryRun) {
        Write-Output 'Dry run: nothing was copied.'
        return
    }

    $dataDir = Split-Path -Parent $pluginsDir
    $dataExisted = Test-Path -LiteralPath $dataDir -PathType Container

    New-Item -ItemType Directory -Path $pluginsDir -Force | Out-Null
    if (Test-Path -LiteralPath $dest) {
        Remove-Item -LiteralPath $dest -Recurse -Force
    }
    New-Item -ItemType Directory -Path $dest -Force | Out-Null
    Copy-Item -Path (Join-Path $resolved '*') -Destination $dest -Recurse -Force

    if (-not $dataExisted) {
        Write-Output 'Copied the plugin. Cider has not created its data folder yet; start Cider once so it picks this directory up.'
    }
    else {
        Write-Output 'Copied the plugin. Quit Cider if it is open, start it again, and open Radio from the menu.'
    }
}
finally {
    if ($script:WorkDir -and (Test-Path -LiteralPath $script:WorkDir)) {
        Remove-Item -LiteralPath $script:WorkDir -Recurse -Force
    }
}
