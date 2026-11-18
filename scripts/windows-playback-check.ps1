# Play local http and https streams with the frozen app.
# The process PATH is only Windows, so a machine-wide GTK or GStreamer cannot help.
param(
    [Parameter(Mandatory = $true)][string]$Exe,
    [Parameter(Mandatory = $true)][string]$Fixtures
)

$ErrorActionPreference = "Stop"
if (-not (Test-Path -LiteralPath $Exe)) { throw "Missing $Exe" }
$internal = Join-Path (Split-Path -Parent $Exe) "_internal"
$ca = Join-Path $internal "ssl\certs\ca-bundle.crt"
if (-not (Test-Path -LiteralPath $ca)) { throw "Missing bundled CA file $ca" }

$python = (Get-Command python).Source
$httpPort = 18765
$httpsPort = 18766
$cert = Join-Path $Fixtures "cert.pem"
$key = Join-Path $Fixtures "key.pem"
$testCa = Join-Path $env:TEMP "freeradio-test-ca.crt"
Get-Content -LiteralPath $ca -Raw | Set-Content -LiteralPath $testCa -Encoding ascii
Get-Content -LiteralPath $cert -Raw | Add-Content -LiteralPath $testCa -Encoding ascii

$serverScript = Join-Path $PSScriptRoot "windows-test-server.py"
$serverOut = Join-Path $env:TEMP "freeradio-server.out"
$serverErr = Join-Path $env:TEMP "freeradio-server.err"
$server = Start-Process -FilePath $python -ArgumentList @(
    $serverScript,
    "--directory", $Fixtures,
    "--http-port", "$httpPort",
    "--https-port", "$httpsPort",
    "--cert", $cert,
    "--key", $key
) -PassThru -WindowStyle Hidden -RedirectStandardOutput $serverOut -RedirectStandardError $serverErr
$oldPath = $env:PATH

try {
    $ready = $false
    for ($try = 0; $try -lt 40; $try++) {
        try {
            $client = New-Object System.Net.Sockets.TcpClient
            $client.Connect("127.0.0.1", $httpPort)
            $client.Close()
            $ready = $true
            break
        }
        catch {
            Start-Sleep -Milliseconds 250
        }
    }
    if (-not $ready) {
        if (Test-Path $serverErr) { Get-Content $serverErr | Write-Host }
        throw "Playback server did not start"
    }
    $catalogPath = Join-Path $env:TEMP "freeradio-playback-catalog.json"
    $cases = @(
        @{ Id = "test-mp3"; Url = "http://127.0.0.1:${httpPort}/test.mp3"; Ca = $null },
        @{ Id = "test-aac"; Url = "http://127.0.0.1:${httpPort}/test.aac"; Ca = $null },
        @{ Id = "test-ogg"; Url = "http://127.0.0.1:${httpPort}/test.ogg"; Ca = $null },
        @{ Id = "test-https-ogg"; Url = "https://127.0.0.1:${httpsPort}/test.ogg"; Ca = $testCa }
    )
    $cleared = @(
        "GI_TYPELIB_PATH",
        "GST_PLUGIN_PATH",
        "GST_PLUGIN_PATH_1_0",
        "GST_PLUGIN_SYSTEM_PATH",
        "GST_PLUGIN_SYSTEM_PATH_1_0",
        "GST_REGISTRY",
        "GST_REGISTRY_1_0",
        "GIO_MODULE_DIR",
        "XDG_DATA_DIRS",
        "GSETTINGS_SCHEMA_DIR",
        "GDK_PIXBUF_MODULE_FILE",
        "SSL_CERT_FILE",
        "FREERADIO_CA_BUNDLE"
    )
    foreach ($case in $cases) {
        $json = @"
{"groups":[{"id":"test","name":"Test"}],"stations":[{"id":"$($case.Id)","name":"$($case.Id)","group":"test","streamUrl":"$($case.Url)"}]}
"@
        $utf8 = New-Object System.Text.UTF8Encoding $false
        [System.IO.File]::WriteAllText($catalogPath, $json.Trim(), $utf8)
        $log = Join-Path $env:TEMP ("freeradio-" + $case.Id + ".log")
        if (Test-Path -LiteralPath $log) { Remove-Item -LiteralPath $log -Force }
        $env:PATH = "$env:SystemRoot\System32;$env:SystemRoot"
        foreach ($name in $cleared) { Remove-Item "Env:$name" -ErrorAction SilentlyContinue }
        $env:FREERADIO_LOG = $log
        $env:FREERADIO_CATALOG = $catalogPath
        $env:FREERADIO_SINK = "fakesink"
        if ($case.Ca) { $env:FREERADIO_CA_BUNDLE = $case.Ca }
        Write-Host "PLAY $($case.Id) $($case.Url)"
        $proc = Start-Process -FilePath $Exe -ArgumentList @("--play", $case.Id, "--quit-after", "25") -PassThru
        if (-not $proc.WaitForExit(60000)) {
            Stop-Process -Id $proc.Id -Force
            throw "$($case.Id) did not exit"
        }
        $text = ""
        if (Test-Path -LiteralPath $log) { $text = Get-Content -LiteralPath $log -Raw }
        Write-Host $text
        if ($proc.ExitCode -ne 0) { throw "$($case.Id) exited $($proc.ExitCode)" }
        if ($text -notmatch "Free Radio window shown") { throw "$($case.Id) did not show the window" }
        if ($text -notmatch "Stream connected") { throw "$($case.Id) did not connect" }
    }
    $pluginLog = Get-Content -LiteralPath (Join-Path $env:TEMP "freeradio-test-mp3.log") -Raw
    foreach ($line in @(
            "plugin souphttpsrc: yes",
            "plugin mpg123audiodec: yes",
            "plugin oggdemux: yes",
            "plugin vorbisdec: yes",
            "plugin fakesink: yes"
        )) {
        if ($pluginLog -notmatch [regex]::Escape($line)) { throw "Missing $line" }
    }
    if ($pluginLog -notmatch "plugin avdec_aac: yes" -and $pluginLog -notmatch "plugin faad: yes") {
        throw "Neither avdec_aac nor faad loaded"
    }
    Write-Host "playback check passed"
}
finally {
    $env:PATH = $oldPath
    if ($server -and -not $server.HasExited) { Stop-Process -Id $server.Id -Force }
}
