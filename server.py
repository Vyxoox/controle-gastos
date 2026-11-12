import http.server
import json
import os
import socket
import subprocess
from pathlib import Path

PORT = 8765
SPREADSHEET_ID = "1JtMlngFxJIRslebjO0zr092jfVN_EfkMttq5U4eKOH0"
GSHEETS_CMD = r"C:\Users\vsoliveira\.gemini\config\plugins\gsheets\skills\gsheets\scripts\gsheets.cmd"
BASE_DIR = Path(__file__).resolve().parent


def get_local_ip() -> str:
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "127.0.0.1"


class Meta2029Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(BASE_DIR), **kwargs)

    def do_POST(self):
        if self.path == "/api/sync-freela":
            length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(length).decode("utf-8")
            try:
                data = json.loads(body)
                month_key = data.get("monthKey", "2027-01")
                date_str = data.get("date", "")
                category = data.get("category", "Freelance")
                desc = str(data.get("desc", "")).replace(",", " ")
                amount = str(data.get("amount", 0)).replace(".", ",")

                row_str = f"{month_key},{date_str},{category},{desc},{amount},Recebido via App"
                ok = False
                if os.path.exists(GSHEETS_CMD):
                    res = subprocess.run(
                        [GSHEETS_CMD, "mutate", "append", SPREADSHEET_ID, "Freelances_e_Extras!A1", row_str],
                        capture_output=True,
                        text=True,
                        timeout=15,
                    )
                    ok = res.returncode == 0

                self.send_response(200)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.end_headers()
                self.wfile.write(json.dumps({"ok": ok}).encode("utf-8"))
                return
            except Exception as exc:
                self.send_response(500)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.end_headers()
                self.wfile.write(json.dumps({"ok": False, "error": str(exc)}).encode("utf-8"))
                return

        self.send_response(404)
        self.end_headers()


if __name__ == "__main__":
    local_ip = get_local_ip()
    print("=" * 62)
    print("🚀 App Meta 2029 (PWA Android + Google Sheets) Iniciado!")
    print(f"💻 Acesse no Computador: http://localhost:{PORT}")
    print(f"📱 Acesse no Celular (mesmo Wi-Fi): http://{local_ip}:{PORT}")
    print("=" * 62)
    with http.server.ThreadingHTTPServer(("0.0.0.0", PORT), Meta2029Handler) as httpd:
        httpd.serve_forever()
