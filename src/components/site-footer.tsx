import Link from "next/link";
import { TptvLogo } from "@/components/tptv-logo";
import { DiscordIcon, YoutubeIcon } from "@/components/icons";
import { FIRMS, LINKS, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border-subtle bg-surface/40">
      <div className="mx-auto max-w-5xl px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <TptvLogo variant="full" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              A futures trading community. Free Discord, content on YouTube,
              and the best available discount on prop firm evaluations with
              code {SITE.code}.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-muted transition hover:border-discord/60 hover:text-discord"
              >
                <DiscordIcon />
              </a>
              <a
                href={LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-muted transition hover:border-live/60 hover:text-live"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Navigate */}
          <nav>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              Site
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-muted transition hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#code" className="text-muted transition hover:text-accent">
                  Code {SITE.code}
                </Link>
              </li>
              <li>
                <Link
                  href="/disclosures"
                  className="text-muted transition hover:text-accent"
                >
                  Disclosures
                </Link>
              </li>
            </ul>
          </nav>

          {/* Partner firms */}
          <nav>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              Partners
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {FIRMS.map((firm) => (
                <li key={firm.slug}>
                  <a
                    href={firm.url}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="text-muted transition hover:text-accent"
                  >
                    {firm.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Standing disclosure — deliberately on every page, not buried. */}
        <div className="mt-12 border-t border-border-subtle pt-8">
          <p className="text-xs leading-relaxed text-muted">
            <strong className="text-foreground/80">Disclosure:</strong>{" "}
            {SITE.name} is a trading community, not a broker, prop firm or
            financial adviser. We earn a commission when you buy from a partner
            firm using code {SITE.code} or our links — it costs you nothing
            extra and it is what funds this community. Nothing here is
            financial advice. Trading leveraged products carries substantial
            risk of loss; never trade money you cannot afford to lose. Read the
            full{" "}
            <Link href="/disclosures" className="text-accent hover:underline">
              disclosures
            </Link>
            .
          </p>
          <p className="mt-6 text-xs text-muted">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
