from pathlib import Path
from playwright.sync_api import sync_playwright
import subprocess
import time
import signal

ROOT = Path(__file__).resolve().parents[1]
WEB = ROOT / "web"
OUT = ROOT / "docs/relatorios/evidencias"
OUT.mkdir(parents=True, exist_ok=True)

server = subprocess.Popen(
    ["python3", "-m", "http.server", "8091", "--bind", "127.0.0.1"],
    cwd=str(WEB),
    stdout=subprocess.DEVNULL,
    stderr=subprocess.DEVNULL,
)

time.sleep(1)

try:
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1440, "height": 2000})
        page.goto("http://127.0.0.1:8091/index.html", wait_until="networkidle")

        # Clean state and reload for deterministic screenshots
        page.evaluate("localStorage.clear()")
        page.reload(wait_until="networkidle")

        # Fill basic context
        page.fill("#project-name", "Painel de Doacoes para ONG")
        page.fill("#project-partner", "Instituto Comunitario Ponte Verde")
        page.select_option("#project-objective", label="Fome zero e agricultura sustentável")
        page.click("#project-form button[type='submit']")

        # Fill a few fields in ADS V forms so screenshots are meaningful
        page.fill("textarea[name='introContext']", "Contato inicial realizado com a coordenacao da ONG para mapear fluxo atual de doacoes e gargalos de controle.")
        page.fill("textarea[name='objectiveGeneral']", "Implementar piloto funcional para registro de entradas, saidas e consulta de estoque.")
        page.fill("textarea[name='pilotSelectionPlanning']", "Modulo de movimentacoes e consulta de estoque selecionado para validacao inicial.")
        page.click("#planning-form button[type='submit']")
        page.click("#pilot-form button[type='submit']")

        # Seed sample data
        page.on("dialog", lambda d: d.accept())
        page.click("#seed-data")

        # Capture required evidence prints
        page.locator("#entry-form").screenshot(path=str(OUT / "print-entrada-ponte-verde-01.png"))
        page.locator("#out-form").screenshot(path=str(OUT / "print-saida-ponte-verde-01.png"))

        stock_table = page.locator("#stock-table-body").locator("xpath=ancestor::table[1]")
        stock_table.screenshot(path=str(OUT / "print-estoque-ponte-verde-01.png"))

        page.locator("#planning-form").screenshot(path=str(OUT / "print-adsv-estruturacao-ponte-verde-01.png"))

        browser.close()
finally:
    server.send_signal(signal.SIGTERM)
    try:
        server.wait(timeout=3)
    except Exception:
        server.kill()
