from PIL import Image, ImageDraw, ImageFont

BASE = "outputs/ies_rwanda_flyer/IES_Rwanda_Flyer_Updated.png"
QR = "/private/tmp/ies-rwanda-qr-132.png"
OUT = "outputs/ies_rwanda_flyer/IES_Rwanda_Flyer_QR_Fixed.png"

img = Image.open(BASE).convert("RGB")
draw = ImageDraw.Draw(img)
w, h = img.size

navy = (4, 31, 60)
blue = (34, 132, 235)
orange = (246, 143, 0)
white = (255, 255, 255)

# Rebuild the complete CTA/footer area as one integrated information panel.
panel_top = 1313
draw.rectangle((0, panel_top, w, h), fill=navy)
draw.line((0, panel_top, w, panel_top), fill=orange, width=3)

# Subtle technical corner lines keep the footer connected to the flyer language.
draw.line((36, 1350, 158, 1350, 184, 1376), fill=orange, width=3)
draw.ellipse((25, 1339, 47, 1361), outline=orange, width=3)
draw.line((845, 1350, 967, 1350), fill=orange, width=3)
draw.ellipse((956, 1339, 978, 1361), outline=orange, width=3)

qr = Image.open(QR).convert("RGB")
card_x, card_y = 91, 1389
draw.rounded_rectangle((card_x, card_y, card_x + 156, card_y + 144), radius=12, fill=white)
img.paste(qr, (card_x + 12, card_y + 6))

bold = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
regular = "/System/Library/Fonts/Supplemental/Arial.ttf"
cta_font = ImageFont.truetype(bold, 34)
url_font = ImageFont.truetype(bold, 48)
label_font = ImageFont.truetype(bold, 15)
body_font = ImageFont.truetype(regular, 19)
footer_font = ImageFont.truetype(bold, 14)

# CTA pill is centered and entirely contained within the footer panel.
cta_box = (244, 1328, 759, 1381)
draw.rounded_rectangle(cta_box, radius=27, fill=orange)
draw.text(((cta_box[0] + cta_box[2]) // 2, 1355), "DISCOVER IES RWANDA", font=cta_font, fill=white, anchor="mm")

draw.text((card_x + 78, 1377), "SCAN TO EXPLORE", font=label_font, fill=white, anchor="mm")

url = "ies.ieeerwanda.org"
url_x = 286
url_y = 1405
draw.text((url_x, url_y), url, font=url_font, fill=blue)
draw.text((url_x + 2, url_y + 61), "EVENTS  •  RESOURCES  •  OPPORTUNITIES", font=label_font, fill=orange)
draw.text((url_x + 2, url_y + 88), "Connect with Rwanda’s industrial electronics community.", font=body_font, fill=white)

footer = "IEEE IES RWANDA CHAPTER   •   REGION 8"
draw.line((77, 1544, 926, 1544), fill=(20, 135, 206), width=2)
draw.text((w // 2, 1557), footer, font=footer_font, fill=white, anchor="mm")

img.save(OUT, quality=100)
print(OUT)
