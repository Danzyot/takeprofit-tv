# Takeprofit TV

Website for the Takeprofit TV trading community. Two pages, no database, no
login, no admin panel: it points people at the **Discord**, at **YouTube**, and
at partner prop firms with code **TP** — and it is upfront that the code pays us.

## The design

The brand is called Takeprofit **TV**, so the site is built as a channel rather
than as a landing page. That is the whole art direction, and it is deliberate:
the generic prop-firm look (near-black + one neon accent, gradient headline,
three rounded feature cards, fade-up-on-scroll) is what every competitor and
every AI-generated site already looks like.

What that means in practice:

- **Broadcast furniture instead of SaaS components.** A channel bug, a running
  timecode, a REC light, lower thirds for section headings, a news ticker, and
  channels (`CH 01 — Discord`) instead of anonymous sections.
- **Seven colours, not one accent.** SMPTE colour bars at 75% are the
  decorative palette; amber is the UI accent. Discord blurple appears only in
  the Discord section and YouTube red only in the YouTube section — like
  switching channels.
- **Type as the graphic.** Big Shoulders (heavy condensed) against Space Mono.
  Not Inter, and not a geometric display face, both of which are fingerprints.
- **Asymmetric layouts.** Columns are `5fr 7fr`, not thirds, and panels sit off
  the heading's baseline on purpose.
- **Restrained texture.** Film grain sits over the page at 5.5% opacity.
  Scanlines and the phosphor stripe live only inside screen frames, never over
  body copy, because they cost contrast. The signal glitch on the hero fires
  for a moment every 14 seconds rather than looping.

**Accessibility is not optional here.** Rapid flicker is a photosensitivity
risk, so everything textural is gated behind `prefers-reduced-motion` *and* a
visible **FX On/Off** switch in the header, whose setting is restored before
first paint. If you add an effect, wire it into both.

## Stack

- **Next.js (App Router) + TypeScript + Tailwind CSS v4**, hosted on **Vercel**
- Every route is statically prerendered — there is no server-side data

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

Adding a firm is one object in the `FIRMS` array — the homepage, the footer
partner list and the disclosures page all read from it and update themselves.
Links likely to rotate also read an env var first, so the Discord invite can
change in Vercel without a deploy. See `.env.example`.

| Path | What it is |
|---|---|
| `src/app/page.tsx` | Home — hero room, CH 01 Discord, CH 02 YouTube, CH 03 code TP |
| `src/app/disclosures/page.tsx` | Full disclosures: affiliate relationship, risk, not-advice |
| `src/app/not-found.tsx` | SMPTE test card + NO SIGNAL |
| `src/components/hero-room.tsx` | The 2.5D room (see below) |
| `src/components/broadcast-chrome.tsx` | Timecode, REC light, FX switch |
| `src/app/globals.css` | The whole design system — tokens, texture, motion |

## The hero room

The hero is flat layers standing in genuine 3D space: a wall at `translateZ(-620px)`,
dust at `-240px`, the set at `+60px`, an out-of-focus foreground at `+300px`, with
the world rotating a few degrees toward the pointer. The pointer move is lerped so
the scene has weight. Touch devices and `prefers-reduced-motion` get it at rest.

**Dropping in a video.** Set `NEXT_PUBLIC_HERO_VIDEO` to a clip URL and the
screen plays it instead of rendering type — no code change. Add a
`public/hero-poster.jpg` for the first frame. Keep the clip short, silent,
seamless and under ~2MB.

## The logo

A screen with a trend line breaking out of the corner. Drawn as SVG in four
places that must stay in sync:

| File | Used for |
|---|---|
| `src/components/tptv-logo.tsx` | The site (`TptvMark`, `TptvWordmark`, `ColourBars`) |
| `src/app/icon.svg` | Browser tab — drops the frame, which disappears at 16px |
| `public/tptv-logo.svg` | Standalone mark, transparent |
| `public/tptv-avatar.svg` | Square dark version for a Discord / YouTube avatar |

`src/app/opengraph-image.tsx` redraws it for the link-preview card that renders
when someone posts the site in Discord — which, for a Discord-first community,
is how most people meet it.

## Disclosures

The affiliate disclosure is a feature, not boilerplate: a short version sits in
the footer of every page, a full section is CH 03 on the homepage, and
`/disclosures` has the long form. If you change how the code works or add a
firm, update all three.

Two standing rules for anything added to this site: **no fabricated results.**
The Discord panel on the homepage carries no profit or payout claims, and it
should stay that way — invented numbers on a trading community's homepage are a
compliance problem, not a design flourish. And nothing on the site should imply
the code costs the buyer anything, because it doesn't.
