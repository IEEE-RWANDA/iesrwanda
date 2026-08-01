from PIL import Image, ImageDraw, ImageFont, ImageEnhance

BG = "/Users/kip/.codex/generated_images/019f8a5d-0569-7271-b6c1-522b32f27273/exec-02820cac-bbea-45cd-aa23-a9ca62e8a02d.png"
LOGO = "tmp/pdfs/agenda_logos/rwanda_chapter_trim.png"
QR = "/private/tmp/ies-rwanda-qr-132.png"
OUT = "outputs/ies_rwanda_flyer/IES_Rwanda_Flyer_Premium.png"

W, H = 1080, 1350
NAVY = (5, 28, 54)
DEEP = (3, 22, 43)
HERO = (0, 20, 46)
BLUE = (18, 111, 176)
LIGHT_BLUE = (104, 188, 235)
ORANGE = (244, 139, 0)
WHITE = (255, 255, 255)
INK = (16, 38, 62)
MUTED = (78, 96, 116)

REG = "/System/Library/Fonts/Supplemental/Arial.ttf"
BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
NARROW = "/System/Library/Fonts/Supplemental/Arial Narrow Bold.ttf"

def font(path, size):
    return ImageFont.truetype(path, size)

def fit_cover(im, size):
    tw, th = size
    scale = max(tw / im.width, th / im.height)
    nw, nh = round(im.width * scale), round(im.height * scale)
    im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - tw) // 2
    top = (nh - th) // 2
    return im.crop((left, top, left + tw, top + th))

def paste_contain(canvas, im, box):
    x0, y0, x1, y1 = box
    scale = min((x1-x0)/im.width, (y1-y0)/im.height)
    im = im.resize((round(im.width*scale), round(im.height*scale)), Image.Resampling.LANCZOS)
    x = x0 + ((x1-x0)-im.width)//2
    y = y0 + ((y1-y0)-im.height)//2
    canvas.paste(im, (x, y))

bg = Image.open(BG).convert("RGB")
bg = ImageEnhance.Contrast(bg).enhance(1.06)

# Use the industrial scene as a complete right-side visual instead of zooming it
# to fill the canvas. This keeps the robotic arm, energy system, and chip visible.
img = Image.new("RGB", (W, H), HERO)
scene = bg.crop((155, 10, bg.width, 1360))
scene = scene.resize((376, 600), Image.Resampling.LANCZOS)
scene_mask = Image.new("L", scene.size, 255)
mask_px = scene_mask.load()
for x in range(110):
    alpha = round(255 * x / 109)
    for y in range(scene.height):
        mask_px[x, y] = alpha
img.paste(scene, (704, 205), scene_mask)
img = img.convert("RGBA")
draw = ImageDraw.Draw(img)

# Header.
draw.rectangle((0, 0, W, 205), fill=WHITE)
logo = Image.open(LOGO).convert("RGB")
paste_contain(img, logo, (42, 18, 380, 190))
draw.line((419, 41, 419, 164), fill=(217, 225, 233), width=2)
draw.text((457, 49), "ADVANCING INDUSTRY.", font=font(BOLD, 27), fill=INK)
draw.text((457, 83), "EMPOWERING INNOVATION.", font=font(BOLD, 27), fill=BLUE)
draw.rounded_rectangle((457, 126, 738, 165), radius=19, fill=(235, 242, 248))
draw.text((597, 146), "RWANDA  •  IEEE REGION 8", font=font(BOLD, 16), fill=INK, anchor="mm")

# Hero headline and introduction.
draw.rounded_rectangle((60, 251, 294, 291), radius=20, fill=ORANGE)
draw.text((177, 271), "INDUSTRIAL ELECTRONICS", font=font(BOLD, 15), fill=NAVY, anchor="mm")
draw.text((57, 327), "ENGINEERING", font=font(NARROW, 74), fill=WHITE)
draw.text((57, 397), "RWANDA’S", font=font(NARROW, 84), fill=ORANGE)
draw.text((57, 479), "INDUSTRIAL FUTURE", font=font(NARROW, 67), fill=WHITE)
draw.line((60, 567, 184, 567), fill=ORANGE, width=5)
draw.text((60, 594), "Connect. Innovate. Lead.", font=font(BOLD, 31), fill=LIGHT_BLUE)
intro = [
    "Join a community advancing robotics, mechatronics,",
    "power electronics, renewable energy, industrial AI",
    "and smart manufacturing in Rwanda and beyond.",
]
for i, line in enumerate(intro):
    draw.text((60, 649 + i*32), line, font=font(REG, 22), fill=WHITE)

# Clean benefit panel overlapping the hero.
panel = (45, 795, 1035, 1082)
draw.rounded_rectangle(panel, radius=28, fill=WHITE)
draw.rounded_rectangle((45, 795, 1035, 812), radius=8, fill=ORANGE)
draw.text((78, 842), "WHY CONNECT WITH IES RWANDA?", font=font(BOLD, 25), fill=BLUE)
draw.text((78, 879), "Build your network. Expand your impact.", font=font(REG, 20), fill=MUTED)

cards = [
    ("01", "LEARN", "Technical talks &\npractical workshops"),
    ("02", "CONNECT", "Industry, research &\npeer collaboration"),
    ("03", "GROW", "Career opportunities in a\nglobal IEEE community"),
]
for i, (num, title, body) in enumerate(cards):
    x = 74 + i*321
    if i:
        draw.line((x-22, 920, x-22, 1040), fill=(220, 228, 235), width=2)
    draw.ellipse((x, 925, x+54, 979), fill=NAVY)
    draw.text((x+27, 952), num, font=font(BOLD, 17), fill=WHITE, anchor="mm")
    draw.text((x+70, 927), title, font=font(BOLD, 22), fill=ORANGE)
    for j, line in enumerate(body.split("\n")):
        draw.text((x+70, 963 + j*27), line, font=font(REG, 19), fill=INK)

# Integrated, spacious CTA footer.
draw.rectangle((0, 1052, W, H), fill=DEEP)
draw.rectangle((0, 1052, W, 1058), fill=ORANGE)
draw.text((61, 1100), "EXPLORE IES RWANDA", font=font(BOLD, 21), fill=ORANGE)
draw.text((61, 1143), "ies.ieeerwanda.org", font=font(BOLD, 49), fill=WHITE)
draw.text((63, 1208), "Events  •  Resources  •  Opportunities  •  Community", font=font(BOLD, 16), fill=LIGHT_BLUE)
draw.text((63, 1245), "Scan the QR code or visit the website to connect.", font=font(REG, 20), fill=WHITE)

# Exact QR: no resizing, redrawing, or text in its quiet zone.
qr = Image.open(QR).convert("RGBA")
qr_x, qr_y = 850, 1090
draw.rounded_rectangle((830, 1072, 1002, 1260), radius=18, fill=WHITE)
img.alpha_composite(qr, (qr_x, qr_y))
draw.text((916, 1242), "SCAN TO VISIT", font=font(BOLD, 14), fill=INK, anchor="mm")

draw.line((61, 1294, 1019, 1294), fill=(31, 91, 139), width=2)
draw.text((61, 1316), "IEEE INDUSTRIAL ELECTRONICS SOCIETY — RWANDA CHAPTER", font=font(BOLD, 14), fill=WHITE)
draw.text((1019, 1316), "IEEE REGION 8", font=font(BOLD, 14), fill=LIGHT_BLUE, anchor="ra")

img.convert("RGB").save(OUT, quality=100)
print(OUT)
