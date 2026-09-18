import { DiscordIcon } from "@/components/icons";
import { LINKS } from "@/lib/site";

/* Illustrative, not transcribed — and deliberately free of any profit
   or payout claim. A trading community fabricating results on its own
   homepage is a compliance problem, not a design flourish. */
const FEED = [
  { who: "cj", text: "morning. NQ open in 10", accent: true },
  { who: "mara", text: "levels posted in #plans" },
  { who: "dez", text: "anyone else watching that range" },
  { who: "cj", text: "new video goes up tonight", accent: true },
];

export function DiscordPanel() {
  return (
    <div className="relative">
      {/* The one place on the site where blurple appears — like tuning
          the set over to channel two. */}
      <div className="scanlines glass relative overflow-hidden border border-[var(--rule)] bg-ink-2">
        <div className="flex items-center justify-between border-b border-[var(--rule)] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blurple" />
            #general
          </span>
          <span>Open 24/7</span>
        </div>

        <div className="tube-on origin-center space-y-3 p-5 sm:p-6">
          {FEED.map((m) => (
            <p key={m.text} className="flex gap-3 text-xs leading-relaxed sm:text-sm">
              <span
                className={`shrink-0 font-bold ${m.accent ? "text-blurple" : "text-dim"}`}
              >
                @{m.who}
              </span>
              <span className="text-bone/85">{m.text}</span>
            </p>
          ))}
          <p className="flex items-center gap-2 pt-1 text-dim" aria-label="Someone is typing">
            <span className="h-1.5 w-1.5 rounded-full bg-dim" />
            <span className="h-1.5 w-1.5 rounded-full bg-dim" />
            <span className="h-1.5 w-1.5 rounded-full bg-dim" />
          </p>
        </div>
      </div>

      <a
        href={LINKS.discord}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex w-full items-center justify-center gap-2.5 bg-blurple px-7 py-4 font-display text-lg font-black uppercase tracking-wide text-white transition hover:brightness-110 sm:w-auto"
      >
        <DiscordIcon className="h-5 w-5" />
        Join the Discord
      </a>
    </div>
  );
}
