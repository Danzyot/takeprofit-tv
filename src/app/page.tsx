import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { CopyCode } from "@/components/copy-code";
import { DiscordIcon, YoutubeIcon } from "@/components/icons";
import { ColourBars } from "@/components/tptv-logo";
import { FIRMS, LINKS, SITE } from "@/lib/site";

/**
 * One screen, no scrolling. Two channels and the code — everything else
 * that used to live down the page is on /disclosures.
 *
 * The height is fixed to the viewport rather than merely fitting inside it,
 * so the layout has to hold at 844px on a phone as well as on a desktop.
 * Every vertical step below is clamped for that reason.
 */

const CHANNELS = [
  {
    ch: "CH 01",
    kicker: "The studio floor",
    title: "Discord",
    line: "Open all day. Chat the session, levels, prop firm news, giveaways. Free to join, nothing to buy.",
    cta: "Join the Discord",
    href: LINKS.discord,
    Icon: DiscordIcon,
    tone: "blurple",
  },
  {
    ch: "CH 02",
    kicker: "The broadcast",
    title: "YouTube",
    line: "Sessions and breakdowns, with the trades that went nowhere left in on purpose.",
    cta: "Watch on YouTube",
    href: LINKS.youtube,
    Icon: YoutubeIcon,
    tone: "rec",
  },
] as const;

export default function HomePage() {
  const firm = FIRMS[0];

  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden">
      <SiteHeader />

      <main className="flex flex-1 items-center overflow-hidden px-5">
        <div className="mx-auto w-full max-w-5xl py-[clamp(0.75rem,3vh,2.5rem)]">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-dim">
            <span className="text-amber">●</span> On air — two channels
          </p>
          <h1 className="mt-3 max-w-[18ch] font-display text-[clamp(2.1rem,7.2vw,4.5rem)] font-black uppercase leading-[0.88] tracking-[-0.02em]">
            A futures community that runs like a channel
          </h1>

          <div className="mt-[clamp(1rem,3.4vh,2rem)] grid gap-3 sm:grid-cols-2 sm:gap-4">
            {CHANNELS.map(({ ch, kicker, title, line, cta, href, Icon, tone }) => (
              <a
                key={ch}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col border border-[var(--rule)] bg-ink-2 p-[clamp(0.9rem,2.4vh,1.4rem)] transition hover:bg-ink-3 ${
                  tone === "blurple" ? "hover:border-blurple" : "hover:border-rec"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
                    {ch} · {kicker}
                  </p>
                  <Icon
                    className={`h-5 w-5 shrink-0 ${
                      tone === "blurple" ? "text-blurple" : "text-rec"
                    }`}
                  />
                </div>

                <h2 className="mt-2 font-display text-[clamp(1.75rem,5vw,2.75rem)] font-black uppercase leading-none">
                  {title}
                </h2>
                <p className="mt-2 hidden text-xs leading-relaxed text-dim sm:block">
                  {line}
                </p>

                <span
                  className={`mt-[clamp(0.7rem,2vh,1.1rem)] inline-flex items-center gap-2 px-3.5 py-2.5 font-display text-base font-black uppercase tracking-wide transition ${
                    tone === "blurple"
                      ? "bg-bone text-ink group-hover:bg-blurple group-hover:text-bone"
                      : "border border-[var(--rule)] text-bone group-hover:border-rec group-hover:text-rec"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {cta}
                </span>
              </a>
            ))}
          </div>

          {/* CH 03 — the code, and why it exists. The short version lives
              here because this is the page that promotes it. */}
          <div className="mt-[clamp(1rem,3.4vh,2rem)] flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[var(--rule)] pt-[clamp(0.9rem,2.6vh,1.5rem)]">
            <CopyCode />
            <p className="max-w-[46ch] text-xs leading-relaxed text-dim">
              <span className="text-bone">Code {SITE.code}</span> gets you the
              best discount we can get on a{" "}
              <a
                href={firm.url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="text-amber underline-offset-4 hover:underline"
              >
                {firm.name}
              </a>{" "}
              evaluation. The firm pays us a commission — it costs you nothing
              extra, and it is what pays for all of this.
            </p>
          </div>
        </div>
      </main>

      <ColourBars className="h-1" />
      <footer className="flex items-center justify-between gap-4 px-5 py-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-dim">
          © {new Date().getFullYear()} {SITE.name}
        </p>
        <Link
          href="/disclosures"
          className="border border-[var(--rule)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-dim transition hover:border-amber hover:text-amber"
        >
          Disclosures
        </Link>
      </footer>
    </div>
  );
}
