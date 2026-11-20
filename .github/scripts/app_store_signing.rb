#!/usr/bin/env ruby
# frozen_string_literal: true
# Registers the Free Radio bundle ID and makes sure this Mac can sign with an
# Apple Distribution certificate and an App Store provisioning profile.
# Reads ASC_KEY_ID, ASC_ISSUER_ID, ASC_KEY_P8, and PROFILE_NAME.
# Writes a shell env file. Does not print the key, the token, or the team id.

require "openssl"
require "json"
require "net/http"
require "base64"
require "fileutils"
require "securerandom"
require "time"

API = "https://api.appstoreconnect.apple.com".freeze
BUNDLE_ID = "com.ouijabored66.freeradio".freeze
BUNDLE_NAME = "Free Radio".freeze

def die(message)
  warn message
  exit 1
end

def b64url(data)
  Base64.urlsafe_encode64(data).delete("=")
end

def ecdsa_raw(der)
  seq = OpenSSL::ASN1.decode(der)
  parts = seq.value.map do |item|
    bytes = item.value.to_s(2)
    bytes = bytes[-32, 32] if bytes.bytesize > 32
    bytes.rjust(32, "\x00")
  end
  die("Could not sign the App Store Connect request.") unless parts.size == 2
  parts.join
end

def jwt(key_id, issuer, p8)
  key = OpenSSL::PKey.read(p8)
  now = Time.now.to_i
  header = b64url({ alg: "ES256", kid: key_id, typ: "JWT" }.to_json)
  body = b64url({ iss: issuer, iat: now, exp: now + 1000, aud: "appstoreconnect-v1" }.to_json)
  signing_input = "#{header}.#{body}"
  sig = ecdsa_raw(key.sign(OpenSSL::Digest::SHA256.new, signing_input))
  "#{signing_input}.#{b64url(sig)}"
end

def call_api(method, path, token, body = nil, query = nil)
  uri = URI(API + path)
  uri.query = URI.encode_www_form(query) if query
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true
  http.open_timeout = 30
  http.read_timeout = 60
  request = method == "POST" ? Net::HTTP::Post.new(uri) : Net::HTTP::Get.new(uri)
  request["Authorization"] = "Bearer #{token}"
  request["Content-Type"] = "application/json"
  request.body = JSON.generate(body) if body
  response = http.request(request)
  parsed = response.body.to_s.empty? ? {} : JSON.parse(response.body)
  [response.code.to_i, parsed]
rescue JSON::ParserError
  [response.code.to_i, {}]
end

def error_detail(parsed)
  parsed.dig("errors", 0, "detail") || "The App Store Connect request failed."
end

def shell_assign(key, value)
  escaped = value.to_s.gsub("'", "'\\''")
  "#{key}='#{escaped}'"
end

def ensure_bundle(token, identifier, name, platform)
  query = { "filter[identifier]" => identifier, "limit" => "5" }
  code, parsed = call_api("GET", "/v1/bundleIds", token, nil, query)
  die("Could not list bundle IDs (#{code}). The API key needs Admin access.") unless code == 200
  found = (parsed["data"] || []).find { |item| item.dig("attributes", "identifier") == identifier }
  return found["id"] if found && !found["id"].to_s.empty?

  payload = {
    data: {
      type: "bundleIds",
      attributes: { identifier: identifier, name: name, platform: platform },
    },
  }
  code, parsed = call_api("POST", "/v1/bundleIds", token, payload)
  created = parsed.dig("data", "id").to_s
  return created unless created.empty?
  return refetch_bundle(token, identifier) if code == 409

  die("Could not register #{identifier}. #{error_detail(parsed)}")
end

def refetch_bundle(token, identifier)
  code, parsed = call_api("GET", "/v1/bundleIds", token, nil, {
    "filter[identifier]" => identifier,
    "limit" => "5",
  })
  die("Could not list bundle IDs (#{code}). The API key needs Admin access.") unless code == 200
  found = (parsed["data"] || []).find { |item| item.dig("attributes", "identifier") == identifier }
  die("Could not register #{identifier}.") if found.nil? || found["id"].to_s.empty?
  found["id"]
end

def team_from_der(der)
  cert = OpenSSL::X509::Certificate.new(der)
  cert.subject.to_a.each do |kind, value, _|
    return value if kind == "OU" && !value.to_s.empty?
  end
  nil
end

def create_distribution_cert(token, work)
  key_path = File.join(work, "distribution.key")
  csr_path = File.join(work, "distribution.csr")
  # A fresh runner has no private key for an older certificate.
  # Create one this run can sign with. Apple limits how many can exist at once.
  ok = system(
    "openssl", "req", "-new", "-newkey", "rsa:2048", "-nodes",
    "-keyout", key_path, "-out", csr_path,
    "-subj", "/CN=Free Radio Distribution"
  )
  die("Could not make a certificate request.") unless ok
  File.chmod(0o600, key_path)
  csr = File.read(csr_path)
  code, parsed = call_api("POST", "/v1/certificates", token, {
    data: {
      type: "certificates",
      attributes: { certificateType: "DISTRIBUTION", csrContent: csr },
    },
  })
  unless code == 201
    die(
      "Could not create an Apple Distribution certificate. #{error_detail(parsed)} " \
      "If the account already has as many as Apple allows, revoke an unused Apple Distribution certificate and run this again."
    )
  end
  cert_id = parsed.dig("data", "id").to_s
  der = Base64.decode64(parsed.dig("data", "attributes", "certificateContent").to_s)
  die("The new certificate was empty.") if der.empty? || cert_id.empty?
  cer_path = File.join(work, "distribution.cer")
  File.binwrite(cer_path, der)
  File.chmod(0o600, cer_path)
  [key_path, cer_path, team_from_der(der), cert_id]
end

def import_identity(key_path, cer_path, work)
  pem_path = File.join(work, "distribution.pem")
  p12_path = File.join(work, "distribution.p12")
  password = SecureRandom.hex(24)
  die("Could not pack the signing identity.") if password.empty?
  ok = system("openssl", "x509", "-inform", "DER", "-in", cer_path, "-out", pem_path)
  die("Could not read the new certificate.") unless ok
  # OpenSSL 3's default PKCS12 MAC is one macOS `security import` cannot read.
  # The same non-empty password is passed to -passout here and to -P below.
  ok = system(
    "openssl", "pkcs12", "-export",
    "-inkey", key_path, "-in", pem_path, "-out", p12_path,
    "-legacy",
    "-keypbe", "PBE-SHA1-3DES", "-certpbe", "PBE-SHA1-3DES", "-macalg", "sha1",
    "-passout", "pass:#{password}"
  )
  die("Could not pack the signing identity.") unless ok
  File.chmod(0o600, p12_path)
  keychain = File.join(work, "signing.keychain-db")
  ok = system("security", "create-keychain", "-p", password, keychain)
  die("Could not create a keychain.") unless ok
  system("security", "set-keychain-settings", "-lut", "21600", keychain)
  system("security", "unlock-keychain", "-p", password, keychain)
  current = `security list-keychains -d user`.split("\n").map { |line| line.strip.delete('"') }.reject(&:empty?)
  system("security", "list-keychains", "-d", "user", "-s", keychain, *current)
  system("security", "default-keychain", "-s", keychain)
  ok = system(
    "security", "import", p12_path, "-k", keychain, "-P", password,
    "-T", "/usr/bin/codesign", "-T", "/usr/bin/security"
  )
  die("Could not import the signing identity.") unless ok
  system(
    "security", "set-key-partition-list",
    "-S", "apple-tool:,apple:,codesign:", "-s", "-k", password, keychain
  )
  [keychain, password]
end

def install_profile(path, uuid)
  [
    File.expand_path("~/Library/MobileDevice/Provisioning Profiles"),
    File.expand_path("~/Library/Developer/Xcode/UserData/Provisioning Profiles"),
  ].each do |dir|
    FileUtils.mkdir_p(dir)
    FileUtils.cp(path, File.join(dir, "#{uuid}.mobileprovision"))
  end
end

def create_profile(token, bundle_resource_id, cert_id, name, work)
  code, parsed = call_api("POST", "/v1/profiles", token, {
    data: {
      type: "profiles",
      attributes: { name: name, profileType: "IOS_APP_STORE" },
      relationships: {
        bundleId: { data: { type: "bundleIds", id: bundle_resource_id } },
        certificates: { data: [{ type: "certificates", id: cert_id }] },
      },
    },
  })
  die("Could not create an App Store provisioning profile. #{error_detail(parsed)}") unless code == 201
  content = parsed.dig("data", "attributes", "profileContent").to_s
  uuid = parsed.dig("data", "attributes", "uuid").to_s
  profile_name = parsed.dig("data", "attributes", "name").to_s
  profile_name = name if profile_name.empty?
  der = Base64.decode64(content)
  die("The provisioning profile was empty.") if der.empty? || uuid.empty?
  path = File.join(work, "#{uuid}.mobileprovision")
  File.binwrite(path, der)
  File.chmod(0o600, path)
  install_profile(path, uuid)
  [path, profile_name, uuid]
end

work = ARGV[0]
die("Pass a work directory.") if work.nil? || work.empty?
FileUtils.mkdir_p(work)
File.umask(0o077)

key_id = ENV["ASC_KEY_ID"].to_s
issuer = ENV["ASC_ISSUER_ID"].to_s
p8 = ENV["ASC_KEY_P8"].to_s
profile_name = ENV["PROFILE_NAME"].to_s
die("ASC_KEY_ID, ASC_ISSUER_ID, and ASC_KEY_P8 are required.") if key_id.empty? || issuer.empty? || p8.empty?
die("PROFILE_NAME is required.") if profile_name.empty?
die("PROFILE_NAME has unsupported characters.") unless profile_name.match?(/\A[A-Za-z0-9._-]+\z/)

token = jwt(key_id, issuer, p8)
bundle_resource_id = ensure_bundle(token, BUNDLE_ID, BUNDLE_NAME, "IOS")
die("Could not find the bundle ID.") if bundle_resource_id.nil? || bundle_resource_id.empty?

key_path, cer_path, team, cert_id = create_distribution_cert(token, work)
keychain, keychain_password = import_identity(key_path, cer_path, work)
die("Could not read the team from the distribution certificate.") if team.nil? || team.empty?

profile_path, installed_name, profile_uuid = create_profile(
  token, bundle_resource_id, cert_id, profile_name, work
)

env_path = File.join(work, "env")
File.write(env_path, [
  shell_assign("APPLE_TEAM_ID", team),
  shell_assign("SIGNING_KEYCHAIN", keychain),
  shell_assign("SIGNING_KEYCHAIN_PASSWORD", keychain_password),
  shell_assign("PROFILE_NAME", installed_name),
  shell_assign("PROFILE_UUID", profile_uuid),
  shell_assign("PROFILE_PATH", profile_path),
].join("\n") + "\n")
File.chmod(0o600, env_path)
warn "The bundle ID is registered, a distribution certificate is ready, and an App Store profile is installed."
