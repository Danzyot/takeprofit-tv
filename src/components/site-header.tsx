import Link from "next/link";
import { TptvWordmark } from "@/components/tptv-logo";
import { BroadcastChrome } from "@/components/broadcast-chrome";
import { DiscordIcon } from "@/components/icons";
import { FIRMS, LINKS } from "@/lib/site";

/**
 * The bar, and it stays. Sticky is bounded by its containing block, so this
 * sits at the top of the page rather than inside the first screen — put it in
 * there and it scrolls away the moment that section ends.
 *
 * Two calls to action: the community, and the thing that pays for it.
 */
export function SiteHeader() {
  const firm = FIRMS[0];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--rule)] bg-ink/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-5">
        <Link href="/" aria-label="Takeprofit TV — home" className="shrink-0">
          <TptvWordmark />
        </Link>

        <div className="flex items-center gap-2.5 sm:gap-4">
          <BroadcastChrome />
          <a
            href={firm.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="whitespace-nowrap border border-amber px-2.5 py-2 font-display text-sm font-black uppercase tracking-wide text-amber transition hover:bg-amber hover:text-ink sm:px-4 sm:text-base"
          >
            Start Trading
          </a>
          <a
            href={LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 whitespace-nowrap bg-blurple px-2.5 py-2 font-display text-sm font-black uppercase tracking-wide text-bone transition hover:bg-bone hover:text-ink sm:gap-2 sm:px-4 sm:text-base"
          >
            <DiscordIcon className="h-4 w-4" />
            Join
          </a>
        </div>
      </div>
    </header>
  );
}
