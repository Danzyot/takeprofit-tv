import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { CopyCode } from "@/components/copy-code";
import { TptvMark } from "@/components/tptv-logo";
import { ArrowIcon, DiscordIcon, YoutubeIcon } from "@/components/icons";
import { FIRMS, LINKS, SITE } from "@/lib/site";

const STEPS = [
  {
    n: "1",
    title: "Pick an evaluation",
    body: "Choose a partner firm below and the account size you want to trade.",
  },
  {
    n: "2",
    title: `Enter code ${SITE.code} at checkout`,
    body: "It applies the best discount we can get you — nothing cheaper is being held back.",
  },
  {
    n: "3",
    title: "Join the Discord",
    body: "Free to join. That is where the community, the calls and the announcements live.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* ===================== HERO ===================== */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="grid-bg pointer-events-none absolute inset-0" />
          <div
            aria-hidden
            className="float-slow pointer-events-none absolute left-1/2 top-[-160px] h-[420px] w-[640px] rounded-full bg-accent/10 blur-[130px]"
          />

          <div className="relative mx-auto max-w-3xl px-4 pb-20 pt-20 text-center">
            <Reveal>
              <TptvMark className="mx-auto h-20 w-20" />
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                Futures trading community
              </p>
              <h1 className="heading-gradient mt-4 font-display text-5xl font-extrabold tracking-tight sm:text-6xl">
                Takeprofit TV
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
                Free Discord. Trading content on YouTube. And the best available
                discount on prop firm evaluations with code{" "}
                <span className="font-semibold text-foreground">{SITE.code}</span>.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={LINKS.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-accent px-8 py-4 font-display text-base font-bold text-background shadow-[0_0_44px_-8px_rgba(0,214,143,0.7)] hover:bg-accent-bright sm:w-auto"
                >
                  <DiscordIcon />
                  Join the Discord
                </a>
                <a
                  href={LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-border-subtle bg-surface px-8 py-4 font-display text-base font-bold transition hover:border-live/50 sm:w-auto"
                >
                  <YoutubeIcon />
                  Watch on YouTube
                </a>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="mx-auto mt-12 flex max-w-md flex-col items-center gap-3 rounded-2xl border border-accent/25 bg-surface/70 px-6 py-5 backdrop-blur sm:flex-row sm:justify-between sm:text-left">
                <p className="text-sm text-muted">
                  Best discount on prop firm evals
                </p>
                <CopyCode />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===================== HOW THE CODE WORKS ===================== */}
        <section id="code" className="scroll-mt-20 border-t border-border-subtle">
          <div className="mx-auto max-w-5xl px-4 py-20">
            <Reveal>
              <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                Three steps
              </p>
              <h2 className="heading-gradient mt-3 text-center font-display text-3xl font-bold sm:text-4xl">
                How code {SITE.code} works
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {STEPS.map((step, i) => (
                <Reveal key={step.n} delay={i * 90}>
                  <div className="h-full rounded-2xl border border-border-subtle bg-surface p-6 transition hover:border-accent/40">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-background">
                      {step.n}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ WHY THE CODE MATTERS (disclosure) ============ */}
        <section className="border-t border-border-subtle bg-surface/40">
          <div className="mx-auto max-w-3xl px-4 py-20">
            <Reveal>
              <div className="rounded-2xl border border-accent/25 bg-background p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  Straight up
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                  Why we ask you to use code {SITE.code}
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
                  <p>
                    When you buy an evaluation with code{" "}
                    <span className="font-semibold text-foreground">{SITE.code}</span>
                    , the firm pays us a commission.{" "}
                    <span className="font-semibold text-foreground">
                      It costs you nothing extra
                    </span>{" "}
                    — you still get the best discount we have been able to
                    negotiate, and your price is the same or lower than it would
                    be without it.
                  </p>
                  <p>
                    That commission is the entire reason this community can
                    exist for free. It pays for the Discord, the bots and tools,
                    the giveaways, and the time that goes into the videos. There
                    is no paid membership and nothing locked behind a paywall.
                  </p>
                  <p>
                    So if {SITE.name} has been useful to you, using the code is
                    the single easiest way to keep it going — and you get a
                    cheaper evaluation out of it.
                  </p>
                </div>
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <CopyCode />
                  <Link
                    href="/disclosures"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                  >
                    Read the full disclosures
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===================== PARTNER FIRMS ===================== */}
        <section id="firms" className="scroll-mt-20 border-t border-border-subtle">
          <div className="mx-auto max-w-5xl px-4 py-20">
            <Reveal>
              <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                Where the code works
              </p>
              <h2 className="heading-gradient mt-3 text-center font-display text-3xl font-bold sm:text-4xl">
                Partner {FIRMS.length === 1 ? "firm" : "firms"}
              </h2>
            </Reveal>

            <div
              className={`mx-auto mt-12 grid gap-5 ${
                FIRMS.length === 1 ? "max-w-md" : "sm:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {FIRMS.map((firm, i) => (
                <Reveal key={firm.slug} delay={i * 90}>
                  <div className="flex h-full flex-col rounded-2xl border border-border-subtle bg-gradient-to-b from-accent/[0.07] to-transparent p-7 transition hover:border-accent/40">
                    <span className="self-start rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent">
                      {firm.discount}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-bold">
                      {firm.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {firm.tagline}
                    </p>
                    <ul className="mt-5 space-y-2.5 text-sm">
                      {firm.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <span className="mt-0.5 font-bold text-accent">✓</span>
                          <span className="text-foreground/85">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto space-y-3 pt-7">
                      <p className="rounded-lg border border-accent/25 bg-accent/5 px-3 py-2.5 text-center text-xs font-semibold text-accent">
                        Use code {SITE.code} at checkout
                      </p>
                      <a
                        href={firm.url}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="btn-shine block rounded-lg bg-accent px-4 py-3 text-center font-bold text-background hover:bg-accent-bright"
                      >
                        Get the deal →
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <p className="mt-8 text-center text-sm text-muted">
                More partner firms are on the way. Announcements go out in the
                Discord first.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ===================== DISCORD ===================== */}
        <section className="relative overflow-hidden border-t border-border-subtle bg-surface/40">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-discord/10 blur-[120px]"
          />
          <div className="relative mx-auto max-w-3xl px-4 py-20 text-center">
            <Reveal>
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-discord text-white">
                <DiscordIcon className="h-7 w-7" />
              </span>
              <h2 className="heading-gradient mt-6 font-display text-3xl font-bold sm:text-4xl">
                The community lives in Discord
              </h2>
              <p className="mx-auto mt-4 max-w-lg leading-relaxed text-muted">
                Daily chat, trade ideas, prop firm news and giveaways. Free to
                join, no membership tiers, nothing to buy.
              </p>
              <a
                href={LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine mt-8 inline-flex items-center gap-2.5 rounded-xl bg-discord px-9 py-4 font-display text-base font-bold text-white shadow-[0_0_44px_-8px_rgba(88,101,242,0.8)] hover:brightness-110"
              >
                <DiscordIcon />
                Join the Discord
              </a>
            </Reveal>
          </div>
        </section>

        {/* ===================== YOUTUBE ===================== */}
        <section className="border-t border-border-subtle">
          <div className="mx-auto max-w-3xl px-4 py-20 text-center">
            <Reveal>
              <p className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                <span className="live-dot h-2 w-2 rounded-full bg-live" />
                On the channel
              </p>
              <h2 className="heading-gradient mt-4 font-display text-3xl font-bold sm:text-4xl">
                Watch on YouTube
              </h2>
              <p className="mx-auto mt-4 max-w-lg leading-relaxed text-muted">
                Sessions, breakdowns and the occasional bad trade left in on
                purpose. Subscribe so you catch the new ones.
              </p>
              <a
                href={LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine mt-8 inline-flex items-center gap-2.5 rounded-xl bg-live px-9 py-4 font-display text-base font-bold text-white shadow-[0_0_44px_-8px_rgba(255,61,87,0.75)] hover:brightness-110"
              >
                <YoutubeIcon />
                Watch on YouTube
              </a>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
