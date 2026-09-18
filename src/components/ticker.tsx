import { SITE } from "@/lib/site";

const ITEMS = [
  "Discord open 24/7",
  `Code ${SITE.code} at checkout`,
  "Free to join",
  "Nothing to buy",
  "New video every week",
  "No signals, no course",
];

/**
 * The news crawl. The track carries the items twice: at -50% the
 * duplicate sits exactly where the original started, so the loop has
 * no seam. Hovering pauses it, in CSS, with no listener.
 */
export function Ticker() {
  return (
    <div className="ticker overflow-hidden border-y border-[var(--rule)] bg-ink-2 py-2.5">
      <div className="ticker-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
            {ITEMS.map((item) => (
              <span
                key={item}
                className="flex items-center whitespace-nowrap px-6 text-[11px] uppercase tracking-[0.2em] text-dim"
              >
                <span className="mr-6 text-amber">◆</span>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
