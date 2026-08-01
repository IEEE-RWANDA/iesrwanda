from io import BytesIO
from pathlib import Path

from pypdf import PdfReader, PdfWriter
from reportlab.pdfgen import canvas

source = Path("/Users/kip/Downloads/IEEE IES Rwanda INVOICE copy.pdf")
output = Path("/Users/kip/Documents/IES/output/pdf/IEEE_IES_Rwanda_RECEIPT.pdf")

reader = PdfReader(str(source))
page = reader.pages[0]
page_width = float(page.mediabox.width)
page_height = float(page.mediabox.height)

overlay_buffer = BytesIO()
overlay = canvas.Canvas(overlay_buffer, pagesize=(page_width, page_height))

# Cover only the title area inside the existing outlined box.
overlay.setFillColorRGB(1, 1, 1)
overlay.rect(75, 642, 456, 36, stroke=0, fill=1)

# Recreate the centered title in the original visual style.
overlay.setFillColorRGB(0, 0, 0)
overlay.setFont("Helvetica-Bold", 24)
overlay.drawCentredString(page_width / 2, 651, "RECEIPT")
overlay.save()

overlay_buffer.seek(0)
overlay_page = PdfReader(overlay_buffer).pages[0]
page.merge_page(overlay_page)

writer = PdfWriter()
writer.add_page(page)
writer.add_metadata(
    {
        "/Title": "IEEE IES Rwanda RECEIPT",
        "/Author": "Mg Modern Design S. Ltd.",
        "/Subject": "Receipt for IEEE IES Rwanda",
    }
)
with output.open("wb") as stream:
    writer.write(stream)

print(output)
