# Takeprofit TV

Website for the Takeprofit TV trading community. Two pages, no database, no
login, no admin panel: it points people at the **Discord**, at **YouTube**, and
at partner prop firms with code **TP** — and it is upfront about the fact that
the code pays us.

Deliberately much simpler than the WAWA site. Resist adding to it.

## Stack

- **Next.js (App Router) + TypeScript + Tailwind CSS v4**
- **Vercel** for hosting
- Every page is statically prerendered — there is no server-side data to fetch

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
```

`npm run build` type-checks and prerenders; `npm run lint` runs ESLint. Both
should pass before you push.

## Editing the site

Almost everything you'd want to change lives in **`src/lib/site.ts`**:

| What | Where |
|---|---|
| Brand name, the code (`TP`), tagline | `SITE` |
| Discord + YouTube links | `LINKS` |
| Partner firms (name, discount, bullets, link) | `FIRMS` |

Adding a firm is one object in the `FIRMS` array — the homepage grid, the
footer partner list and the disclosures page all read from it and update
themselves.

Links that are likely to rotate also read an env var first, so the Discord
invite can be changed in Vercel without a deploy. See `.env.example`.

Longer prose lives with its page:

| Path | What it is |
|---|---|
| `src/app/page.tsx` | Home — hero, how the code works, why we ask you to use it, firms, Discord, YouTube |
| `src/app/disclosures/page.tsx` | Full disclosures: affiliate relationship, risk, not-advice |
| `src/components/site-footer.tsx` | Footer, including the short disclosure shown on every page |

## The logo

The TPTV mark is a screen with a trend line breaking out of the corner. It is
drawn as SVG in three places that must stay in sync:

| File | Used for |
|---|---|
| `src/components/tptv-logo.tsx` | The site itself (`TptvMark`, `TptvLogo`) |
| `src/app/icon.svg` | Browser tab — drops the screen frame, which disappears at 16px |
| `public/tptv-logo.svg` | Standalone mark, transparent background |
| `public/tptv-avatar.svg` | Square dark version for a Discord server / YouTube avatar |

`src/app/opengraph-image.tsx` redraws the mark for the link-preview card that
renders when someone posts the site in Discord.

## Disclosures

The affiliate disclosure is a feature, not boilerplate: a short version sits in
the footer of every page, a full section sits on the homepage, and
`/disclosures` has the long form. If you change how the code works or add a
firm, update all three.
