from pathlib import Path

from PIL import Image
from reportlab.pdfgen import canvas

ROOT = Path(__file__).resolve().parents[2]
image_path = ROOT / "outputs/ies_rwanda_flyer/IES_Rwanda_Flyer_Original_Style_QR.png"
output_path = ROOT / "output/pdf/IES_Rwanda_Flyer.pdf"
output_path.parent.mkdir(parents=True, exist_ok=True)

with Image.open(image_path) as image:
    width, height = image.size

# Use a page with the exact flyer aspect ratio and no margins or cropping.
pdf = canvas.Canvas(str(output_path), pagesize=(width, height), pageCompression=1)
pdf.drawImage(str(image_path), 0, 0, width=width, height=height, preserveAspectRatio=True, mask="auto")
pdf.showPage()
pdf.save()

print(output_path)
