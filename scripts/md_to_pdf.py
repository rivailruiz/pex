from pathlib import Path
import re
from xml.sax.saxutils import escape

from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Preformatted

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "docs/relatorios/relatorio-ads-v-ong-painel-doacoes.md"
OUT = ROOT / "docs/relatorios/relatorio-ads-v-ong-painel-doacoes-final.pdf"


def inline_markdown_to_rl(text: str) -> str:
    """Convert simple inline markdown (**bold** and `code`) to ReportLab paragraph tags."""
    # Tokenize on bold or inline-code snippets.
    tokens = re.split(r"(\*\*[^*]+\*\*|`[^`]+`)", text)
    out = []

    for token in tokens:
        if not token:
            continue
        if token.startswith("**") and token.endswith("**") and len(token) >= 4:
            inner = escape(token[2:-2])
            out.append(f"<b>{inner}</b>")
        elif token.startswith("`") and token.endswith("`") and len(token) >= 2:
            inner = escape(token[1:-1])
            out.append(f"<font name='Courier'>{inner}</font>")
        else:
            out.append(escape(token))

    return "".join(out)


def build_pdf(src: Path, out: Path) -> None:
    lines = src.read_text(encoding="utf-8").splitlines()

    styles = getSampleStyleSheet()
    style_body = ParagraphStyle(
        "Body", parent=styles["Normal"], fontName="Helvetica", fontSize=10.5, leading=14
    )
    style_h1 = ParagraphStyle(
        "H1",
        parent=styles["Heading1"],
        fontName="Helvetica-Bold",
        fontSize=16,
        leading=20,
        spaceAfter=8,
    )
    style_h2 = ParagraphStyle(
        "H2",
        parent=styles["Heading2"],
        fontName="Helvetica-Bold",
        fontSize=13,
        leading=17,
        spaceBefore=8,
        spaceAfter=6,
    )
    style_h3 = ParagraphStyle(
        "H3",
        parent=styles["Heading3"],
        fontName="Helvetica-Bold",
        fontSize=11.5,
        leading=15,
        spaceBefore=6,
        spaceAfter=4,
    )
    style_pre = ParagraphStyle("Pre", parent=styles["Code"], fontName="Courier", fontSize=8.5, leading=11)

    story = []
    for raw in lines:
        line = raw.rstrip("\n")

        if not line.strip():
            story.append(Spacer(1, 6))
            continue

        if line.strip() == "---":
            story.append(Spacer(1, 8))
            continue

        if line.startswith("### "):
            story.append(Paragraph(inline_markdown_to_rl(line[4:]), style_h3))
            continue

        if line.startswith("## "):
            story.append(Paragraph(inline_markdown_to_rl(line[3:]), style_h2))
            continue

        if line.startswith("# "):
            story.append(Paragraph(inline_markdown_to_rl(line[2:]), style_h1))
            continue

        if line.startswith("|"):
            story.append(Preformatted(line, style_pre))
            continue

        story.append(Paragraph(inline_markdown_to_rl(line), style_body))

    doc = SimpleDocTemplate(
        str(out),
        pagesize=A4,
        leftMargin=2 * cm,
        rightMargin=2 * cm,
        topMargin=1.8 * cm,
        bottomMargin=1.8 * cm,
        title="Relatorio ADS V - Painel de Doacoes",
        author="Alexander Rivail Ruiz Martins",
    )
    doc.build(story)


if __name__ == "__main__":
    build_pdf(SRC, OUT)
    print(OUT)
