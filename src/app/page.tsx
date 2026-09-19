import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { CopyCode } from "@/components/copy-code";
import { ArrowIcon, DiscordIcon, YoutubeIcon } from "@/components/icons";
import { Tv } from "@/components/tv";
import { DiscordGiveaway } from "@/components/discord-giveaway";
import { YoutubeReel } from "@/components/youtube-reel";
import { ColourBars } from "@/components/tptv-logo";
import { FIRMS, LINKS, SITE } from "@/lib/site";

/**
 * The first screen holds the whole offer — two channels and the code — and
 * then the page goes on to show each one rather than describe it.
 *
 * Sized to `svh`, not `dvh`: the small viewport height is the phone's worst
 * case, with the browser's address bar showing. `dvh` is the *current*
 * height, which grows and shrinks as that bar hides — so a box pinned to it
 * is a box that stops fitting the moment the bar comes back.
 *
 * And it is a MINIMUM height with no clipping. On a short enough phone the
 * page scrolls a little, which is the right failure: cutting a sentence in
 * half is far worse than a small scroll.
 */

/* `kicker` is the phone-only line. On wider screens `line` says the same
   thing at length, so showing both would be the card repeating itself. */
const CHANNELS = [
  {
    kicker: "Daily giveaways",
    title: "Discord",
    line: "Daily giveaways. Free to join. Chat about trading, news and more.",
    cta: "Join the Discord",
    href: LINKS.discord,
    Icon: DiscordIcon,
    tone: "blurple",
  },
  {
    kicker: "Trading content",
    title: "YouTube",
    line: "Trading content, vlogs and livestreams.",
    cta: "Watch on YouTube",
    href: LINKS.youtube,
    Icon: YoutubeIcon,
    tone: "rec",
  },
] as const;

export default function HomePage() {
  const firm = FIRMS[0];

  return (
    <>
      <SiteHeader />

      <div className="flex min-h-[calc(100svh-4rem)] flex-col">

        <main className="flex flex-1 items-center px-5">
          <div className="mx-auto w-full max-w-5xl py-[clamp(0.5rem,2vh,2.5rem)]">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-dim">
              <span className="text-amber">●</span> On air
            </p>
            <h1 className="mt-2 max-w-[18ch] font-display text-[clamp(1.75rem,7vw,4.5rem)] sm:mt-3 font-black uppercase leading-[0.88] tracking-[-0.02em]">
              Day trading community, content and giveaways
            </h1>

            <div className="mt-[clamp(0.75rem,2.6vh,2rem)] grid gap-2.5 sm:grid-cols-2 sm:gap-4">
              {CHANNELS.map(({ kicker, title, line, cta, href, Icon, tone }) => (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col border border-[var(--rule)] bg-ink-2 p-[clamp(0.7rem,2.2vh,1.4rem)] transition hover:bg-ink-3 ${
                    tone === "blurple" ? "hover:border-blurple" : "hover:border-rec"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim sm:hidden">
                      {kicker}
                    </p>
                    <Icon
                      className={`h-5 w-5 shrink-0 ${
                        tone === "blurple" ? "text-blurple" : "text-rec"
                      }`}
                    />
                  </div>

                  <div className="mt-2 flex items-center justify-between gap-3">
                    <h2 className="font-display text-[clamp(1.6rem,5vw,2.75rem)] font-black uppercase leading-none">
                      {title}
                    </h2>
                    <ArrowIcon className="h-5 w-5 shrink-0 text-dim sm:hidden" />
                  </div>
                  <p className="mt-2 hidden text-xs leading-relaxed text-dim sm:block">
                    {line}
                  </p>

                  <span
                    className={`mt-[clamp(0.7rem,2vh,1.1rem)] hidden items-center gap-2 px-3.5 py-2.5 font-display text-base font-black uppercase tracking-wide transition sm:inline-flex ${
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
            <div className="mt-[clamp(0.75rem,2.6vh,2rem)] flex flex-wrap items-center gap-x-5 gap-y-2.5 border-t border-[var(--rule)] pt-[clamp(0.7rem,2.2vh,1.5rem)]">
              <CopyCode />
              <p className="max-w-[46ch] text-xs leading-relaxed text-dim">
                Use code <span className="text-bone">{SITE.code}</span> for the
                BEST discount on{" "}
                <a
                  href={firm.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="text-amber underline-offset-4 hover:underline"
                >
                  {firm.name}
                </a>
                . We use the commission to bring you DAILY account giveaways.
              </p>
            </div>
          </div>
        </main>

        <p className="scroll-cue pb-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
          ↓ Scroll
        </p>
      </div>

      {/* ---------- Discord ---------- */}
      <section
        id="discord"
        className="border-t border-[var(--rule)] bg-ink-2 px-5 py-[clamp(3rem,9vh,6rem)]"
      >
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[5fr_6fr] lg:gap-16">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-blurple">
              Discord
            </p>
            <h2 className="mt-3 max-w-[16ch] font-display text-[clamp(1.9rem,6vw,3.5rem)] font-black uppercase leading-[0.9] tracking-[-0.02em]">
              Daily account giveaways
            </h2>
            <a
              href={LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 bg-blurple px-5 py-3.5 font-display text-lg font-black uppercase tracking-wide text-bone transition hover:bg-bone hover:text-ink"
            >
              <DiscordIcon className="h-5 w-5" />
              Join the Discord
            </a>
          </div>

          <Tv>
            <DiscordGiveaway />
          </Tv>
        </div>
      </section>

      <ColourBars className="h-1" />

      {/* ---------- YouTube ---------- */}
      <section id="youtube" className="px-5 py-[clamp(3rem,9vh,6rem)]">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[6fr_5fr] lg:gap-16">
          <div className="lg:order-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-rec">
              YouTube
            </p>
            <h2 className="mt-3 max-w-[16ch] font-display text-[clamp(1.9rem,6vw,3.5rem)] font-black uppercase leading-[0.9] tracking-[-0.02em]">
              Trading content, vlogs and livestreams
            </h2>
            <a
              href={LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 bg-rec px-5 py-3.5 font-display text-lg font-black uppercase tracking-wide text-bone transition hover:bg-bone hover:text-ink"
            >
              <YoutubeIcon className="h-5 w-5" />
              Watch on YouTube
            </a>
          </div>

          <div className="lg:order-1">
            <YoutubeReel />
          </div>
        </div>
      </section>

      <ColourBars className="h-1" />

      {/* ---------- the code, one last time ---------- */}
      <section id="code" className="bg-ink-2 px-5 py-[clamp(2rem,6vh,3.5rem)]">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-4">
          <CopyCode />
          <a
            href={firm.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2.5 bg-amber px-5 py-3.5 font-display text-lg font-black uppercase tracking-wide text-ink transition hover:bg-bone"
          >
            Start Trading
            <ArrowIcon className="h-4 w-4" />
          </a>
        </div>
      </section>

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
    </>
  );
}
