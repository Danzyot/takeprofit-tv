import Link from "next/link";
import { TptvWordmark } from "@/components/tptv-logo";
import { BroadcastChrome } from "@/components/broadcast-chrome";
import { DiscordIcon } from "@/components/icons";
import { LINKS } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--rule)] bg-ink/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5">
        <Link href="/" aria-label="Takeprofit TV — home" className="shrink-0">
          <TptvWordmark />
        </Link>

        <div className="flex items-center gap-4">
          <BroadcastChrome />
          <a
            href={LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-bone px-3.5 py-2 font-display text-base font-black uppercase tracking-wide text-ink transition hover:bg-amber sm:px-4"
          >
            <DiscordIcon className="h-4 w-4" />
            Join
          </a>
        </div>
      </div>
    </header>
  );
}
