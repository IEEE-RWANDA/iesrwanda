const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = "/Users/kip/Documents/IES";
const outDir = path.join(root, "outputs/zipline_visit");
const photoPath = "/Users/kip/Downloads/ziplinemuhanga.jpeg";
const iesPath = path.join(root, "logo.jpeg");
const aessPath = path.join(outDir, "AESS_official_logo.png");
const qrPath = path.join(outDir, "VTools_Registration_QR.png");
const outputPath = path.join(outDir, "IEEE_IES_AESS_Rwanda_Zipline_Visit_Designed.png");

const b64 = (buffer) => buffer.toString("base64");

async function transparentIesLogo() {
  const { data, info } = await sharp(iesPath)
    .resize({ width: 520 })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const lightness = Math.min(r, g, b);
    if (r < 90 && g < 125 && b < 165) {
      data[i] = 255;
      data[i + 1] = 255;
      data[i + 2] = 255;
    }
    if (lightness > 238) {
      data[i + 3] = Math.max(0, Math.round((255 - lightness) * 15));
    }
  }
  return sharp(data, { raw: info }).png().toBuffer();
}

async function build() {
  const [ies, aess, qr, photo] = await Promise.all([
    transparentIesLogo(),
    fs.promises.readFile(aessPath),
    fs.promises.readFile(qrPath),
    sharp(photoPath)
      .resize(1024, 820, { fit: "cover", position: "centre" })
      .modulate({ brightness: 0.92, saturation: 0.96 })
      .png()
      .toBuffer(),
  ]);

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1536" viewBox="0 0 1024 1536">
    <defs>
      <linearGradient id="photoShade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#001b36" stop-opacity=".12"/>
        <stop offset=".62" stop-color="#001b36" stop-opacity=".05"/>
        <stop offset="1" stop-color="#001b36" stop-opacity=".92"/>
      </linearGradient>
      <linearGradient id="navy" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="#002f57"/>
        <stop offset="1" stop-color="#001b36"/>
      </linearGradient>
      <clipPath id="photoClip">
        <path d="M0 235 H1024 V1035 Q740 965 515 1012 Q260 1063 0 970 Z"/>
      </clipPath>
    </defs>

    <rect width="1024" height="1536" fill="url(#navy)"/>

    <!-- Real logos on a clean brand header -->
    <image href="data:image/png;base64,${b64(ies)}" x="42" y="24" width="335" height="190" preserveAspectRatio="xMidYMid meet"/>
    <line x1="414" y1="45" x2="414" y2="196" stroke="#b8c6d1" stroke-width="2"/>
    <image href="data:image/png;base64,${b64(aess)}" x="462" y="38" width="260" height="130" preserveAspectRatio="xMidYMid meet"/>
    <text x="742" y="88" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="21" font-weight="700">IEEE AESS</text>
    <text x="742" y="117" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="21" font-weight="700">RWANDA</text>
    <text x="462" y="198" fill="#dbe6ee" font-family="Arial, Helvetica, sans-serif" font-size="18" letter-spacing="2">INDUSTRIAL INNOVATION • AUTONOMOUS SYSTEMS</text>

    <!-- Untouched real event photograph -->
    <g clip-path="url(#photoClip)">
      <image href="data:image/png;base64,${b64(photo)}" x="0" y="235" width="1024" height="820"/>
      <rect x="0" y="235" width="1024" height="820" fill="url(#photoShade)"/>
    </g>

    <!-- Strong editorial title -->
    <rect x="0" y="460" width="470" height="510" rx="0" fill="#002a4f" fill-opacity=".94"/>
    <rect x="42" y="505" width="7" height="350" fill="#f58220"/>
    <text x="75" y="566" fill="#ffffff" font-family="Arial Narrow, Arial, sans-serif" font-size="62" font-weight="800" letter-spacing="1">INDUSTRIAL</text>
    <text x="75" y="638" fill="#ffffff" font-family="Arial Narrow, Arial, sans-serif" font-size="62" font-weight="800">VISIT TO</text>
    <text x="75" y="730" fill="#f58220" font-family="Arial Narrow, Arial, sans-serif" font-size="84" font-weight="900">ZIPLINE</text>
    <text x="75" y="818" fill="#f58220" font-family="Arial Narrow, Arial, sans-serif" font-size="84" font-weight="900">RWANDA</text>
    <line x1="75" y1="850" x2="420" y2="850" stroke="#f58220" stroke-width="4"/>
    <text x="75" y="900" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="700" font-style="italic">Engineering autonomous delivery</text>
    <text x="75" y="936" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="700" font-style="italic">for healthcare impact</text>

    <!-- Information panel -->
    <rect x="34" y="1017" width="956" height="470" rx="25" fill="#00213e" stroke="#168bc1" stroke-width="2"/>
    <text x="62" y="1067" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="700">Organized by IEEE IES Rwanda Chapter</text>
    <text x="62" y="1101" fill="#d9e6ee" font-family="Arial, Helvetica, sans-serif" font-size="22">in collaboration with IEEE AESS Rwanda</text>

    <rect x="60" y="1130" width="540" height="56" rx="28" fill="#f58220"/>
    <text x="330" y="1167" fill="#ffffff" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="27" font-weight="800">LIMITED TO 30 PARTICIPANTS</text>

    <text x="64" y="1236" fill="#23a9e1" font-family="Arial, Helvetica, sans-serif" font-size="19" font-weight="800">DATE</text>
    <text x="160" y="1236" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="700">FRIDAY, 14 AUGUST 2026</text>
    <line x1="64" y1="1255" x2="600" y2="1255" stroke="#35617e"/>

    <text x="64" y="1302" fill="#23a9e1" font-family="Arial, Helvetica, sans-serif" font-size="19" font-weight="800">TIME</text>
    <text x="160" y="1302" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="700">9:00 AM – 1:00 PM</text>
    <line x1="64" y1="1321" x2="600" y2="1321" stroke="#35617e"/>

    <text x="64" y="1368" fill="#23a9e1" font-family="Arial, Helvetica, sans-serif" font-size="19" font-weight="800">PLACE</text>
    <text x="160" y="1368" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700">ZIPLINE MUHANGA DISTRIBUTION CENTER</text>
    <text x="160" y="1400" fill="#d9e6ee" font-family="Arial, Helvetica, sans-serif" font-size="18">Ruli Cell, Shyogwe Sector, Muhanga District</text>

    <!-- Verified registration QR -->
    <rect x="650" y="1117" width="292" height="292" rx="22" fill="#ffffff"/>
    <image href="data:image/png;base64,${b64(qr)}" x="671" y="1138" width="250" height="250"/>
    <text x="796" y="1450" fill="#f58220" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="800">SCAN TO REGISTER</text>

    <text x="62" y="1460" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="18">ies.ieeerwanda.org</text>
    <circle cx="245" cy="1454" r="4" fill="#f58220"/>
    <text x="263" y="1460" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="18">aess.ieeerwanda.org</text>
  </svg>`;

  await sharp(Buffer.from(svg)).png().toFile(outputPath);
  console.log(outputPath);
}

build().catch((error) => {
  console.error(error);
  process.exit(1);
});
