import Link from "next/link";
import { TptvLogo } from "@/components/tptv-logo";
import { DiscordIcon, YoutubeIcon } from "@/components/icons";
import { LINKS } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-4">
        <Link href="/" aria-label="Takeprofit TV — home">
          <TptvLogo />
        </Link>

        <nav className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/disclosures"
            className="hidden rounded-md px-2 py-1.5 text-sm text-muted transition hover:text-foreground sm:inline-block"
          >
            Disclosures
          </Link>
          <a
            href={LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Takeprofit TV on YouTube"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle text-muted transition hover:border-live/50 hover:text-live"
          >
            <YoutubeIcon />
          </a>
          <a
            href={LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex items-center gap-2 rounded-lg bg-accent px-3.5 py-2 text-sm font-bold text-background hover:bg-accent-bright sm:px-4"
          >
            <DiscordIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Join Discord</span>
            <span className="sm:hidden">Join</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
