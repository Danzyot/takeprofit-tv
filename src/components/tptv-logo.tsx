/**
 * The TPTV logo.
 *
 * A screen with a trend line breaking out of the top-right corner —
 * "take profit" plus "TV". The mark is SVG so it stays sharp at any
 * size; the wordmark is live text in the display face so it inherits
 * colour and never ships as a blurry PNG.
 *
 * Kept in sync with src/app/icon.svg, public/tptv-logo.svg and
 * public/tptv-avatar.svg. Change one, change all four.
 */

const ACCENT = "#ff9e2c";

export function TptvMark({
  className = "h-9 w-9",
  mono = false,
}: {
  className?: string;
  mono?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g stroke={mono ? "currentColor" : ACCENT} strokeWidth={3}>
        <rect x="4" y="9" width="56" height="40" rx="11" />
        <path d="M32 49v7" />
        <path d="M22 56h20" />
      </g>
      <g stroke="currentColor" strokeWidth={3.2} opacity={mono ? 0.7 : 0.95}>
        <path d="M16 38l9-9 7 5 13-14" />
        <path d="M37 20h8v8" />
      </g>
    </svg>
  );
}

/**
 * The wordmark. `variant` controls how much of it shows — phones get
 * TPTV, everything else gets the full name.
 */
export function TptvWordmark({
  className = "",
  variant = "responsive",
}: {
  className?: string;
  variant?: "responsive" | "full" | "short";
}) {
  return (
    <span
      className={`font-display text-2xl font-black uppercase leading-none tracking-[-0.01em] ${className}`}
    >
      {variant !== "short" && (
        <span className={variant === "responsive" ? "hidden sm:inline" : ""}>
          Takeprofit
        </span>
      )}
      {variant !== "full" && (
        <span className={variant === "responsive" ? "sm:hidden" : ""}>TP</span>
      )}
      <span className="ml-1 bg-bone px-1.5 py-0.5 text-ink">TV</span>
    </span>
  );
}

/** SMPTE colour bars at 75%. A divider that means something here. */
export function ColourBars({ className = "h-1.5" }: { className?: string }) {
  return (
    <div className={`flex w-full ${className}`} aria-hidden="true">
      {["#c0c0c0", "#c0c000", "#00c0c0", "#00c000", "#c000c0", "#c00000", "#0000c0"].map(
        (c) => (
          <span key={c} className="flex-1" style={{ background: c }} />
        )
      )}
    </div>
  );
}
