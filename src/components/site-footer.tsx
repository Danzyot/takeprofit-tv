import Link from "next/link";
import { TptvWordmark, ColourBars } from "@/components/tptv-logo";
import { DiscordIcon, YoutubeIcon } from "@/components/icons";
import { FIRMS, LINKS, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--rule)] bg-ink-2">
      <ColourBars className="h-1" />
      <div className="mx-auto max-w-5xl px-5 py-14">
        <div className="grid gap-10 sm:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <TptvWordmark variant="full" />
            <p className="mt-4 max-w-[34ch] text-xs leading-relaxed text-dim">
              A futures community that runs like a channel. Discord, YouTube,
              and code {SITE.code}.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="flex h-10 w-10 items-center justify-center border border-[var(--rule)] text-dim transition hover:border-blurple hover:text-blurple"
              >
                <DiscordIcon />
              </a>
              <a
                href={LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center border border-[var(--rule)] text-dim transition hover:border-rec hover:text-rec"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          <nav>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
              Channels
            </p>
            <ul className="mt-4 space-y-2.5 font-mono text-[11px] uppercase tracking-[0.12em]">
              <li>
                <Link href="/#discord" className="text-dim transition hover:text-amber">
                  CH 01 — Discord
                </Link>
              </li>
              <li>
                <Link href="/#youtube" className="text-dim transition hover:text-amber">
                  CH 02 — YouTube
                </Link>
              </li>
              <li>
                <Link href="/#code" className="text-dim transition hover:text-amber">
                  CH 03 — Code {SITE.code}
                </Link>
              </li>
              <li>
                <Link href="/disclosures" className="text-dim transition hover:text-amber">
                  Disclosures
                </Link>
              </li>
            </ul>
          </nav>

          <nav>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
              Partners
            </p>
            <ul className="mt-4 space-y-2.5 font-mono text-[11px] uppercase tracking-[0.12em]">
              {FIRMS.map((firm) => (
                <li key={firm.slug}>
                  <a
                    href={firm.url}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="text-dim transition hover:text-amber"
                  >
                    {firm.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* The standing disclosure. On every page, not buried. */}
        <div className="mt-12 border-t border-[var(--rule)] pt-8">
          <p className="max-w-[80ch] text-[11px] leading-relaxed text-dim">
            <span className="text-bone">Disclosure:</span> {SITE.name} is a
            trading community — not a broker, prop firm or financial adviser. We
            earn a commission when you buy from a partner firm using code{" "}
            {SITE.code} or our links; it costs you nothing extra and it is what
            funds this community. Nothing here is financial advice. Trading
            leveraged products carries substantial risk of loss — never trade
            money you cannot afford to lose. Read the full{" "}
            <Link href="/disclosures" className="text-amber hover:underline">
              disclosures
            </Link>
            .
          </p>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.15em] text-dim">
            © {new Date().getFullYear()} {SITE.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
