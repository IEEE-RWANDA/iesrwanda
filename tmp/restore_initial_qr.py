from PIL import Image, ImageDraw, ImageFont

BASE = "outputs/ies_rwanda_flyer/IES_Rwanda_Flyer_Updated.png"
QR = "/private/tmp/ies-rwanda-qr-120.png"
OUT = "outputs/ies_rwanda_flyer/IES_Rwanda_Flyer_Original_Style_QR.png"

img = Image.open(BASE).convert("RGB")
draw = ImageDraw.Draw(img)
w, h = img.size

WHITE = (255, 255, 255)
NAVY_TOP = (0, 25, 55)
NAVY_BOTTOM = (0, 20, 47)
BLUE = (36, 132, 235)
LIGHT_BLUE = (159, 207, 238)
ORANGE = (246, 143, 0)
INK = (7, 31, 57)

BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
REG = "/System/Library/Fonts/Supplemental/Arial.ttf"

# Keep the original flyer and CTA untouched. Rebuild only the website band.
start = 1401
for y in range(start, h):
    t = (y - start) / max(1, h - start - 1)
    color = tuple(round(NAVY_TOP[i] * (1-t) + NAVY_BOTTOM[i] * t) for i in range(3))
    draw.line((0, y, w, y), fill=color)

# Exact QR in a restrained white card. The code is not resized or redrawn.
qr = Image.open(QR).convert("RGB")
card = (92, 1409, 236, 1539)
draw.rounded_rectangle(card, radius=12, fill=WHITE)
img.paste(qr, (104, 1414))

# Website block aligned beside the QR, with ample breathing room.
label_font = ImageFont.truetype(BOLD, 14)
url_font = ImageFont.truetype(BOLD, 46)
body_font = ImageFont.truetype(REG, 18)
footer_font = ImageFont.truetype(BOLD, 13)

draw.text((277, 1413), "OFFICIAL CHAPTER WEBSITE", font=label_font, fill=ORANGE)
draw.text((277, 1436), "ies.ieeerwanda.org", font=url_font, fill=BLUE)
draw.text((279, 1493), "Scan the QR code or visit the website to connect.", font=body_font, fill=WHITE)

# Original-style technical accent and compact chapter footer.
draw.line((277, 1526, 917, 1526), fill=(17, 116, 183), width=2)
draw.ellipse((262, 1521, 272, 1531), outline=ORANGE, width=2)
draw.ellipse((922, 1521, 932, 1531), outline=ORANGE, width=2)
draw.text((w // 2, 1555), "IEEE IES RWANDA CHAPTER   •   IEEE REGION 8", font=footer_font, fill=LIGHT_BLUE, anchor="mm")

img.save(OUT, quality=100)
print(OUT)
