import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { HeroRoom } from "@/components/hero-room";
import { Ticker } from "@/components/ticker";
import { LowerThird } from "@/components/lower-third";
import { DiscordPanel } from "@/components/discord-panel";
import { YoutubePanel } from "@/components/youtube-panel";
import { CopyCode } from "@/components/copy-code";
import { ColourBars } from "@/components/tptv-logo";
import { FIRMS, SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <HeroRoom />
        <Ticker />

        {/* ===================== CH 01 — DISCORD ===================== */}
        <section id="discord" className="scroll-mt-20 border-b border-[var(--rule)]">
          <div className="mx-auto grid max-w-5xl gap-10 px-5 py-20 lg:grid-cols-[5fr_7fr] lg:gap-14">
            <div className="self-start">
              <LowerThird
                channel="CH 01"
                kicker="The studio floor"
                title="Discord"
                tone="blurple"
              />
              <p className="mt-6 max-w-[42ch] text-sm leading-relaxed text-dim">
                This is where everyone actually is. Chat through the session,
                levels, prop firm news, giveaways. Free to join — there are no
                membership tiers, no signal service and nothing to buy.
              </p>
              <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-dim">
                You do not need an account on this website. There is nothing to
                sign up for here.
              </p>
            </div>

            {/* Deliberately dropped below the heading's baseline — three
                things sharing one baseline is what makes a page read as
                a template. */}
            <div className="lg:mt-16">
              <DiscordPanel />
            </div>
          </div>
        </section>

        {/* ===================== CH 02 — YOUTUBE ===================== */}
        <section id="youtube" className="scroll-mt-20 border-b border-[var(--rule)]">
          <div className="mx-auto grid max-w-5xl gap-10 px-5 py-20 lg:grid-cols-[7fr_5fr] lg:gap-14">
            <div className="lg:order-2 lg:self-start">
              <LowerThird
                channel="CH 02"
                kicker="The broadcast"
                title="YouTube"
                tone="rec"
              />
              <p className="mt-6 max-w-[42ch] text-sm leading-relaxed text-dim">
                Sessions, breakdowns, and the trades that went nowhere left in
                on purpose. Subscribe and the new ones find you.
              </p>
            </div>
            <div className="lg:order-1 lg:mt-14">
              <YoutubePanel />
            </div>
          </div>
        </section>

        <ColourBars />

        {/* ===================== CH 03 — CODE TP ===================== */}
        <section id="code" className="scroll-mt-20">
          <div className="mx-auto max-w-5xl px-5 py-20">
            <LowerThird
              channel="CH 03"
              kicker="How this is paid for"
              title={`Code ${SITE.code}`}
            />

            <div className="mt-10 grid gap-12 lg:grid-cols-[6fr_5fr] lg:gap-16">
              <div className="space-y-5 text-sm leading-relaxed text-dim sm:text-[15px]">
                <p className="text-bone">
                  Straight up: when you buy a prop firm evaluation with code{" "}
                  <span className="font-bold text-amber">{SITE.code}</span>, the
                  firm pays us a commission.
                </p>
                <p>
                  <span className="text-bone">It costs you nothing extra.</span>{" "}
                  The code applies the best discount we have been able to
                  negotiate — your price is the same or lower than it would be
                  without it. We are not holding back a cheaper option.
                </p>
                <p>
                  That commission is the entire reason this runs for free. It
                  pays for the Discord, the bots, the giveaways and the time
                  that goes into the videos. There is no paid membership and
                  nothing behind a paywall.
                </p>
                <p>
                  So if this has been useful to you, using the code is the
                  easiest way to keep it going — and you get a cheaper
                  evaluation out of it.
                </p>
                <div className="flex flex-wrap items-center gap-5 pt-2">
                  <CopyCode />
                  <Link
                    href="/disclosures"
                    className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber underline-offset-4 hover:underline"
                  >
                    Full disclosures →
                  </Link>
                </div>
              </div>

              {/* Partner firms. One for now; the list drives itself. */}
              <div className="space-y-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
                  Where the code works
                </p>
                {FIRMS.map((firm) => (
                  <div
                    key={firm.slug}
                    className="border border-[var(--rule)] bg-ink-2 p-6 transition hover:border-amber/50"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-2xl font-black uppercase leading-none">
                        {firm.name}
                      </h3>
                      <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.15em] text-amber">
                        {firm.discount}
                      </span>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-dim">
                      {firm.tagline}
                    </p>
                    <ul className="mt-4 space-y-1.5 border-t border-[var(--rule)] pt-4 text-xs text-bone/80">
                      {firm.features.map((feature) => (
                        <li key={feature} className="flex gap-2.5">
                          <span className="text-amber">—</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={firm.url}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="mt-5 block bg-bone px-4 py-3 text-center font-display text-base font-black uppercase tracking-wide text-ink transition hover:bg-amber"
                    >
                      Go to {firm.name} →
                    </a>
                  </div>
                ))}
                <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.15em] text-dim">
                  More firms on the way. Announced in the Discord first.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
