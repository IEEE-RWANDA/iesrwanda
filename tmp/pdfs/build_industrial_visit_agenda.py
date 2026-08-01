from pathlib import Path
from PIL import Image, ImageChops
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, Image as RLImage, KeepTogether

ROOT = Path("/Users/kip/Documents/IES")
TMP = ROOT / "tmp/pdfs/agenda_logos"
OUT = ROOT / "output/pdf/IEEE_IES_Rwanda_Volkswagen_Visit_Agenda.pdf"

def trim_white(src: Path, dst: Path, pad: int = 18):
    im = Image.open(src).convert("RGB")
    bg = Image.new("RGB", im.size, "white")
    diff = ImageChops.difference(im, bg).convert("L")
    bbox = diff.point(lambda x: 0 if x < 18 else 255).getbbox()
    if bbox:
        left, top, right, bottom = bbox
        left = max(0, left - pad); top = max(0, top - pad)
        right = min(im.width, right + pad); bottom = min(im.height, bottom + pad)
        im = im.crop((left, top, right, bottom))
    im.save(dst, quality=95)

def fitted_image(path: Path, max_width, max_height):
    """Create a ReportLab image that fits the box without changing its aspect ratio."""
    with Image.open(path) as im:
        pixel_width, pixel_height = im.size
    scale = min(max_width / pixel_width, max_height / pixel_height)
    return RLImage(str(path), width=pixel_width * scale, height=pixel_height * scale)

top_logo = TMP / "rwanda_chapter_trim.png"
footer_ies = TMP / "footer_ies_ieee.png"
footer_ieee = TMP / "footer_ieee_tagline.png"
footer_yp = TMP / "footer_young_professionals.png"
trim_white(Path("/Users/kip/Downloads/IES Rwanda Chapter H&N.png"), top_logo, 10)
trim_white(TMP / "tshirt-1.png", footer_ies, 8)
trim_white(TMP / "tshirt-2.png", footer_ieee, 8)
trim_white(TMP / "tshirt-3.png", footer_yp, 8)

navy = colors.HexColor("#123B63")
blue = colors.HexColor("#007FA3")
orange = colors.HexColor("#E87722")
light_blue = colors.HexColor("#EAF3F8")
line = colors.HexColor("#CBD8E2")
dark = colors.HexColor("#263746")

doc = SimpleDocTemplate(
    str(OUT), pagesize=A4,
    rightMargin=16*mm, leftMargin=16*mm,
    topMargin=10*mm, bottomMargin=9*mm,
    title="IEEE IES Rwanda Volkswagen Industrial Visit Agenda",
    author="IEEE Industrial Electronics Society Rwanda Chapter",
)

styles = {
    "title": ParagraphStyle("title", fontName="Helvetica-Bold", fontSize=18, leading=21, textColor=navy, alignment=TA_CENTER, spaceAfter=2*mm),
    "subtitle": ParagraphStyle("subtitle", fontName="Helvetica", fontSize=10.5, leading=13, textColor=dark, alignment=TA_CENTER),
    "meta": ParagraphStyle("meta", fontName="Helvetica-Bold", fontSize=9.5, leading=12, textColor=blue, alignment=TA_CENTER),
    "cell": ParagraphStyle("cell", fontName="Helvetica", fontSize=8.1, leading=10, textColor=dark),
    "cell_bold": ParagraphStyle("cell_bold", fontName="Helvetica-Bold", fontSize=8.1, leading=10, textColor=navy),
    "note": ParagraphStyle("note", fontName="Helvetica-Bold", fontSize=8.5, leading=11, textColor=navy, alignment=TA_CENTER),
    "footer": ParagraphStyle("footer", fontName="Helvetica-Oblique", fontSize=7, leading=9, textColor=colors.HexColor("#5D6B78"), alignment=TA_CENTER),
}

story = []
story.append(fitted_image(top_logo, 63*mm, 58*mm))
story.append(Spacer(1, 1*mm))
story.append(Paragraph("INDUSTRIAL VISIT AGENDA", styles["title"]))
story.append(Paragraph("Volkswagen Mobility Solutions Rwanda", styles["subtitle"]))
story.append(Paragraph("Friday, 24 July 2026", styles["meta"]))
story.append(Spacer(1, 24*mm))

agenda = [
    ("9:30 AM", "Registered participants report to the main pickup point"),
    ("9:30 - 9:50 AM", "Registration verification and boarding of the two buses"),
    ("9:50 - 10:00 AM", "Final attendance check and travel instructions"),
    ("10:00 AM", "Both buses leave town promptly"),
    ("10:00 - 11:00 AM", "Travel to Volkswagen, with registered-attendee pickups along the shared route"),
    ("11:00 AM", "Arrival at Volkswagen Mobility Solutions Rwanda"),
    ("11:00 - 11:15 AM", "Security check, welcome and safety briefing"),
    ("11:15 - 11:25 AM", "Introduction to Volkswagen Mobility Solutions Rwanda"),
    ("11:25 AM - 12:10 PM", "Guided facility and vehicle assembly tour"),
    ("12:10 - 12:30 PM", "Automotive technology and career insights"),
    ("12:30 - 12:45 PM", "Questions and answers"),
    ("12:45 - 1:00 PM", "Official group photographs"),
    ("1:00 - 1:40 PM", "Pizza, water, sodas, milk and networking"),
    ("1:40 - 1:50 PM", "Closing remarks and appreciation"),
    ("1:50 - 2:00 PM", "Participants board the buses"),
    ("2:00 PM", "Departure from Volkswagen"),
    ("3:00 PM", "Arrival in town and end of the visit"),
]

data = [[Paragraph("TIME", styles["cell_bold"]), Paragraph("ACTIVITY", styles["cell_bold"])]]
for time, activity in agenda:
    data.append([Paragraph(time, styles["cell_bold"]), Paragraph(activity, styles["cell"])])

table = Table(data, colWidths=[42*mm, 121*mm], repeatRows=1)
table.setStyle(TableStyle([
    ("BACKGROUND", (0,0), (-1,0), navy),
    ("TEXTCOLOR", (0,0), (-1,0), colors.white),
    ("ALIGN", (0,0), (0,-1), "CENTER"),
    ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
    ("LEFTPADDING", (0,0), (-1,-1), 7),
    ("RIGHTPADDING", (0,0), (-1,-1), 7),
    ("TOPPADDING", (0,0), (-1,-1), 3.2),
    ("BOTTOMPADDING", (0,0), (-1,-1), 3.2),
    ("ROWBACKGROUNDS", (0,1), (-1,-1), [colors.white, light_blue]),
    ("LINEBELOW", (0,0), (-1,-1), 0.35, line),
    ("BOX", (0,0), (-1,-1), 0.8, navy),
    ("BACKGROUND", (0,4), (-1,4), colors.HexColor("#FFF1E6")),
    ("TEXTCOLOR", (0,4), (-1,4), orange),
    ("BACKGROUND", (0,5), (-1,5), colors.HexColor("#E3F4F7")),
]))
story.append(table)
story.append(Spacer(1, 3*mm))
story.append(Paragraph("IMPORTANT: The buses leave town at exactly 10:00 AM. The route and pickup points will be shared tomorrow. Only registered attendees will be permitted to board.", styles["note"]))
story.append(Spacer(1, 4*mm))

logos = Table([
    [fitted_image(footer_ies, 53*mm, 23*mm),
     fitted_image(footer_ieee, 48*mm, 23*mm),
     fitted_image(footer_yp, 48*mm, 23*mm)]
], colWidths=[56*mm, 52*mm, 52*mm], rowHeights=[27*mm])
logos.setStyle(TableStyle([
    ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
    ("ALIGN", (0,0), (-1,-1), "CENTER"),
    ("TOPPADDING", (0,0), (-1,-1), 0),
    ("BOTTOMPADDING", (0,0), (-1,-1), 0),
]))
story.append(KeepTogether([
    logos,
    Paragraph(
        "Organized by the IEEE Industrial Electronics Society Rwanda Chapter"
        "<br/><font color='#007FA3'><b>ies.ieeerwanda.org</b></font>",
        styles["footer"],
    ),
]))

doc.build(story)
print(OUT)
