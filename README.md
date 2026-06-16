# IEEE IES Rwanda Chapter

Official website for the **Rwanda Chapter of the IEEE Industrial Electronics Society (IES)** — part of IEEE Rwanda Section, Region 8, established in Kigali in 2026.

The site covers the chapter's mission across four technical pillars:

- **Control, Robotics & Mechatronics** — intelligent control, motion control, autonomy
- **Power Electronics & Drives** — converters, motor drives, renewable energy grids
- **Factory Automation & Industry 4.0** — IIoT, flexible manufacturing, industrial communications
- **Industrial AI & Instrumentation** — computational intelligence, vision systems, fault diagnosis

## Pages

**Home · About · Leadership · Events · Rwanda · Membership · Contact**

## Tech stack

Built with [Next.js](https://nextjs.org) (App Router), [Tailwind CSS](https://tailwindcss.com) and [Framer Motion](https://www.framer.com/motion). Theme follows [ieee-ies.org](https://www.ieee-ies.org) — white background, IES blue `#006699`, deep navy `#004263`, IES orange `#ec8c00`.

## Content

All site content — chapter details, officers, events, membership tracks, social links and form URLs — is managed from a single file: [`lib/site.ts`](lib/site.ts).

To add officer headshots, drop the image in `public/officers/` and set the `photo` field in [`lib/site.ts`](lib/site.ts) to `/officers/<filename>.jpg`.

Brand assets (`logo.png`, `emblem.png`, `ieee-logo.png`, `ies-logo.png`) live in `public/`. The favicon is `app/icon.png`.
