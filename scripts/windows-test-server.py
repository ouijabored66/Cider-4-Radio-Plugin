"""Serve the playback fixtures over http and https for the Windows check."""

import argparse
import http.server
import os
import socketserver
import ssl
import threading

TYPES = {
    ".mp3": "audio/mpeg",
    ".aac": "audio/aac",
    ".ogg": "audio/ogg",
}


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, directory=None, **kwargs):
        super().__init__(*args, directory=directory, **kwargs)

    def guess_type(self, path):
        ext = os.path.splitext(path)[1].lower()
        return TYPES.get(ext, "application/octet-stream")

    def log_message(self, fmt, *args):
        print("server:", fmt % args)


def serve(directory, port, cert, key):
    class Bound(Handler):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=directory, **kwargs)

    httpd = socketserver.TCPServer(("127.0.0.1", port), Bound)
    if cert and key:
        context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
        context.load_cert_chain(cert, key)
        httpd.socket = context.wrap_socket(httpd.socket, server_side=True)
    thread = threading.Thread(target=httpd.serve_forever, daemon=True)
    thread.start()
    return httpd


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--directory", required=True)
    parser.add_argument("--http-port", type=int, required=True)
    parser.add_argument("--https-port", type=int, required=True)
    parser.add_argument("--cert", required=True)
    parser.add_argument("--key", required=True)
    args = parser.parse_args()
    serve(args.directory, args.http_port, None, None)
    serve(args.directory, args.https_port, args.cert, args.key)
    print(f"listening http://127.0.0.1:{args.http_port} https://127.0.0.1:{args.https_port}", flush=True)
    threading.Event().wait()


if __name__ == "__main__":
    main()
