from pathlib import Path

from PIL import Image
from reportlab.lib.pagesizes import landscape, letter
from reportlab.pdfgen import canvas

source = Path("/Users/kip/Documents/IES/tmp/pdfs/expense-conversion/form.png")
cropped = Path("/Users/kip/Documents/IES/tmp/pdfs/expense-conversion/form-cropped.png")
output = Path("/Users/kip/Documents/IES/output/pdf/IEEE_IES_Rwanda_Expense_Report_KOECH_BRIAN.pdf")

with Image.open(source) as image:
    # Remove spreadsheet row/column headings from the rendered form.
    clean = image.crop((100, 50, image.width, image.height))
    clean.save(cropped, "PNG", optimize=True)
    image_width, image_height = clean.size

page_width, page_height = landscape(letter)
margin = 24
available_width = page_width - 2 * margin
available_height = page_height - 2 * margin
scale = min(available_width / image_width, available_height / image_height)
draw_width = image_width * scale
draw_height = image_height * scale
x = (page_width - draw_width) / 2
y = (page_height - draw_height) / 2

pdf = canvas.Canvas(str(output), pagesize=(page_width, page_height))
pdf.setTitle("IEEE IES Rwanda Expense Report - KOECH BRIAN")
pdf.drawImage(
    str(cropped),
    x,
    y,
    width=draw_width,
    height=draw_height,
    preserveAspectRatio=True,
    mask="auto",
)
pdf.showPage()
pdf.save()
print(output)
