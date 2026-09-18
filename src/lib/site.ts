/**
 * Everything editable about this site lives here.
 *
 * The site is deliberately static — no database, no admin dashboard. To
 * change a link, the code, or the firm list, edit this file and redeploy.
 * Links that are likely to rotate (the Discord invite especially) also read
 * an env var first, so they can be changed in Vercel without a code change.
 */

export const SITE = {
  /** Full brand name, as written in prose. */
  name: "Takeprofit TV",
  /** Short form, used in the logo mark and tight spaces. */
  short: "TPTV",
  /** The discount / affiliate code members type at firm checkouts. */
  code: "TP",
  tagline:
    "A futures trading community. Free Discord, daily content on YouTube, and the best available discount on prop firm evaluations with code TP.",
  /** Canonical origin — used for metadata. Override per-deployment. */
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://takeprofit.tv",
} as const;

/**
 * Discord invite is expected to rotate, so env wins over the default.
 * Set NEXT_PUBLIC_DISCORD_URL in Vercel to change it without a deploy.
 */
export const LINKS = {
  discord: process.env.NEXT_PUBLIC_DISCORD_URL || "https://discord.gg/wawatrading",
  youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || "https://youtube.com/@cj_wawa",
} as const;

export type Firm = {
  /** Stable key — also the logo filename in /public/firms/<slug>.png. */
  slug: string;
  name: string;
  /** Short badge above the name, e.g. the headline discount. */
  discount: string;
  /** One line on why this firm is worth a look. */
  tagline: string;
  /** Three or four bullets, kept short enough to read at a glance. */
  features: string[];
  /** Affiliate landing page. Code TP still has to be entered at checkout. */
  url: string;
};

/**
 * Partner firms. One for now — add objects here as more come on board and
 * the grid, the footer and the firm count all pick them up automatically.
 */
export const FIRMS: Firm[] = [
  {
    slug: "lucid",
    name: "Lucid Trading",
    discount: "Up to 40% off",
    tagline: "No eval consistency rule and no minimum days — pass in as little as one day.",
    features: [
      "Pass in 1 day — no minimum trading days",
      "No consistency rule on the evaluation",
      "Payouts every 3 trading days, 90/10 split",
      "$0 activation fee",
    ],
    url: process.env.NEXT_PUBLIC_LUCID_URL || "https://lucidtrading.com/ref/TP",
  },
];
