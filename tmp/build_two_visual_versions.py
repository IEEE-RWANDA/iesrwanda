from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageEnhance, ImageFilter, ImageFont
from reportlab.pdfgen import canvas

ROOT = Path(__file__).resolve().parents[1]
BASE = ROOT / "outputs/ies_rwanda_flyer/IES_Rwanda_Flyer_Original_Style_QR.png"
OUTLINE = ROOT / "tmp/pdfs/rwanda_outline.png"
SCENE = Path("/Users/kip/.codex/generated_images/019f8a5d-0569-7271-b6c1-522b32f27273/exec-02820cac-bbea-45cd-aa23-a9ca62e8a02d.png")

CYAN = (53, 192, 255)
BLUE = (10, 77, 129)
ORANGE = (246, 143, 0)
NAVY_TOP = (1, 32, 65)
NAVY_BOTTOM = (0, 20, 47)
WHITE = (255, 255, 255)
LIGHT_BLUE = (105, 186, 235)
BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
NARROW = "/System/Library/Fonts/Supplemental/Arial Narrow Bold.ttf"
REG = "/System/Library/Fonts/Supplemental/Arial.ttf"

def clean_panel(img):
    lower_left = img.crop((0, 940, 456, 1312))
    draw = ImageDraw.Draw(img)
    x0, y0, x1, y1 = 0, 400, img.width, 1312
    for y in range(y0, y1):
        t = (y-y0)/(y1-y0-1)
        c = tuple(round(NAVY_TOP[i]*(1-t)+NAVY_BOTTOM[i]*t) for i in range(3))
        draw.line((x0, y, x1, y), fill=c)
    # Subtle technical grid, deliberately low contrast.
    for x in range(480, x1, 48):
        draw.line((x, y0, x, y1), fill=(4, 49, 86), width=1)
    for y in range(414, y1, 48):
        draw.line((x0, y, x1, y), fill=(4, 49, 86), width=1)
    # Restore the original WHY CONNECT heading and benefit cards unchanged.
    img.paste(lower_left, (0, 940))
    return img

def redraw_copy(img):
    draw = ImageDraw.Draw(img)
    draw.text((45, 425), "ENGINEERING", font=ImageFont.truetype(NARROW, 88), fill=WHITE)
    draw.text((45, 506), "RWANDA’S", font=ImageFont.truetype(NARROW, 94), fill=ORANGE)
    draw.text((45, 597), "INDUSTRIAL FUTURE", font=ImageFont.truetype(NARROW, 72), fill=WHITE)
    draw.text((47, 696), "Connect. Innovate. Lead.", font=ImageFont.truetype(BOLD, 40), fill=LIGHT_BLUE)
    draw.line((48, 762, 178, 762), fill=ORANGE, width=4)
    lines = [
        "Join a growing community advancing",
        "robotics, mechatronics, power electronics,",
        "renewable energy, industrial AI and",
        "smart manufacturing.",
    ]
    for i,line in enumerate(lines):
        draw.text((48, 787+i*37), line, font=ImageFont.truetype(REG, 26), fill=WHITE)
    return img

def draw_robot(draw, ox, oy, s=1.0):
    def P(x, y): return (round(ox+x*s), round(oy+y*s))
    pts = [P(16,94), P(40,70), P(75,49), P(112,58), P(137,31)]
    for a,b in zip(pts,pts[1:]): draw.line((a,b), fill=CYAN, width=max(2,round(5*s)))
    for x,y in pts:
        r=round(8*s); px,py=P(x,y); draw.ellipse((px-r,py-r,px+r,py+r), outline=CYAN, width=max(2,round(3*s)))
    draw.line((P(137,31),P(153,46)), fill=CYAN, width=max(2,round(4*s)))
    draw.line((P(137,31),P(149,14)), fill=CYAN, width=max(2,round(4*s)))
    draw.line((P(7,102),P(43,102)), fill=CYAN, width=max(2,round(4*s)))

def draw_chip(draw, x, y, size=78):
    draw.rounded_rectangle((x,y,x+size,y+size), radius=8, outline=CYAN, width=4)
    draw.rounded_rectangle((x+18,y+18,x+size-18,y+size-18), radius=4, outline=CYAN, width=3)
    for i in range(12, size, 18):
        draw.line((x+i,y-10,x+i,y), fill=CYAN, width=3)
        draw.line((x+i,y+size,x+i,y+size+10), fill=CYAN, width=3)
        draw.line((x-10,y+i,x,y+i), fill=CYAN, width=3)
        draw.line((x+size,y+i,x+size+10,y+i), fill=CYAN, width=3)

def draw_factory(draw, x, y):
    draw.line((x,y+86,x+150,y+86), fill=CYAN, width=4)
    draw.rectangle((x+9,y+34,x+55,y+86), outline=CYAN, width=3)
    draw.rectangle((x+55,y+51,x+105,y+86), outline=CYAN, width=3)
    draw.rectangle((x+105,y+43,x+143,y+86), outline=CYAN, width=3)
    draw.line((x+33,y+34,x+33,y+3), fill=CYAN, width=5)
    draw.line((x+78,y+51,x+78,y+15), fill=CYAN, width=5)

def draw_energy(draw, x, y):
    # Wind turbine and solar panel.
    draw.line((x+68,y+38,x+68,y+132), fill=CYAN, width=4)
    draw.ellipse((x+62,y+32,x+74,y+44), outline=CYAN, width=3)
    draw.line((x+68,y+38,x+92,y+3), fill=CYAN, width=3)
    draw.line((x+68,y+38,x+30,y+29), fill=CYAN, width=3)
    draw.line((x+68,y+38,x+78,y+74), fill=CYAN, width=3)
    panel=(x,y+91,x+58,y+130)
    draw.polygon([(panel[0]+8,panel[1]),(panel[2],panel[1]),(panel[2]-8,panel[3]),(panel[0],panel[3])], outline=CYAN)
    for k in (1,2): draw.line((x+8+k*15,y+91,x+k*15,y+130), fill=CYAN, width=2)
    draw.line((x+4,y+111,x+54,y+111), fill=CYAN, width=2)

def create_map_version():
    img = clean_panel(Image.open(BASE).convert("RGB"))
    draw = ImageDraw.Draw(img)

    raw = Image.open(OUTLINE).convert("RGBA")
    gray = raw.convert("L")
    darkness = gray.point(lambda p: max(0, min(255, (245-p)*8)))
    alpha = ImageChops.multiply(darkness, raw.getchannel("A"))
    colored = Image.new("RGBA", raw.size, CYAN+(0,))
    colored.putalpha(alpha)
    colored = colored.resize((320,282), Image.Resampling.LANCZOS)
    glow_alpha = colored.getchannel("A").filter(ImageFilter.GaussianBlur(8))
    glow = Image.new("RGBA", colored.size, (29,143,255,0)); glow.putalpha(glow_alpha.point(lambda p:p//2))
    img.paste(glow, (640,520), glow)
    img.paste(colored, (640,520), colored)

    # The surrounding technology stays secondary to the correctly proportioned map.
    draw_robot(draw, 686, 554, .55)
    draw_chip(draw, 819, 632, 58)
    draw_factory(draw, 646, 819)
    draw_energy(draw, 838, 918)
    # Energy waveform.
    wave=[]
    for i,v in enumerate([0,-14,20,-30,35,-22,14,0]): wave.append((688+i*20,746+v))
    draw.line(wave, fill=CYAN, width=3)
    out = ROOT / "outputs/ies_rwanda_flyer/IES_Rwanda_Flyer_Accurate_Map.png"
    img = redraw_copy(img)
    img.save(out, quality=100)
    return out

def create_arm_chip_version():
    img = clean_panel(Image.open(BASE).convert("RGB"))
    scene = Image.open(SCENE).convert("RGB")
    scene = ImageEnhance.Contrast(scene).enhance(1.05)
    scene = scene.crop((185, 0, scene.width, 1370)).resize((543, 922), Image.Resampling.LANCZOS)
    mask = Image.new("L", scene.size, 255)
    mp = mask.load()
    for x in range(115):
        a = round(255*x/114)
        for y in range(scene.height): mp[x,y]=a
    img.paste(scene, (460,400), mask)
    img = redraw_copy(img)
    out = ROOT / "outputs/ies_rwanda_flyer/IES_Rwanda_Flyer_Arm_Chip.png"
    img.save(out, quality=100)
    return out

def to_pdf(image_path):
    pdf_dir = ROOT / "output/pdf"
    pdf_dir.mkdir(parents=True, exist_ok=True)
    pdf_path = pdf_dir / (image_path.stem + ".pdf")
    with Image.open(image_path) as im: w,h=im.size
    c=canvas.Canvas(str(pdf_path), pagesize=(w,h), pageCompression=1)
    c.drawImage(str(image_path),0,0,width=w,height=h,preserveAspectRatio=True,mask="auto")
    c.showPage(); c.save()
    return pdf_path

for image_path in (create_map_version(), create_arm_chip_version()):
    print(image_path)
    print(to_pdf(image_path))
