# IEEE IES Rwanda Chapter

Website for the **Rwanda Chapter of the IEEE Industrial Electronics Society (IES)**.

Built with Next.js (App Router), Tailwind CSS and Framer Motion. The theme mirrors
[ieee-ies.org](https://www.ieee-ies.org) — white background, Helvetica, IES blue
`#006699`, deep navy `#004263` and the IES orange accent `#ec8c00`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
```

## Editing content

Almost everything is driven from a single file — **[`lib/site.ts`](lib/site.ts)**:

- Chapter name, email, location
- Officers (set `photo: "/officers/<name>.jpg"` to add a headshot — drop the file in `public/officers/`)
- Events, stats, membership tracks and benefits
- `volunteerFormUrl` — paste your Google Form link here

Brand assets live in `public/` (`logo.png`, `emblem.png`) and `app/icon.png` (favicon).

## Pages

Home · About · Leadership · Events · Membership · Contact

> Note: officer names and events are realistic placeholders — replace with real
> chapter data in `lib/site.ts`.
