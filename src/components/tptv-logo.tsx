/**
 * The TPTV logo.
 *
 * A screen (the "TV") with a trend line breaking out of the top-right
 * corner (the "take profit"). The mark is pure SVG so it stays crisp at
 * any size and needs no hosted asset; the wordmark is live text in the
 * display font, so it inherits colour and never ships as a blurry PNG.
 *
 * The same artwork exists standalone at /public/tptv-logo.svg (for a
 * Discord server icon, a YouTube avatar, etc.) and at src/app/icon.svg
 * for the browser tab. Change one, change all three.
 */

/** Mirrors --accent / --accent-bright in globals.css. */
const ACCENT = "#00d68f";
const ACCENT_BRIGHT = "#5cf0bb";

export function TptvMark({
  className = "h-9 w-9",
  /** Draw the whole mark in currentColor instead of the mint two-tone. */
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
      {/* Screen + stand */}
      <g stroke={mono ? "currentColor" : ACCENT} strokeWidth={3}>
        <rect x="4" y="9" width="56" height="40" rx="11" />
        <path d="M32 49v7" />
        <path d="M22 56h20" />
      </g>
      {/* Trend line breaking out to the top right */}
      <g
        stroke={mono ? "currentColor" : ACCENT_BRIGHT}
        strokeWidth={3.2}
        opacity={mono ? 0.75 : 1}
      >
        <path d="M16 38l9-9 7 5 13-14" />
        <path d="M37 20h8v8" />
      </g>
    </svg>
  );
}

export function TptvLogo({
  className = "",
  markClassName = "h-8 w-8",
  /** "responsive" shows TPTV on phones and TAKEPROFIT TV from sm up. */
  variant = "responsive",
}: {
  className?: string;
  markClassName?: string;
  variant?: "responsive" | "full" | "short";
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <TptvMark className={markClassName} />
      <span className="font-display text-lg font-extrabold uppercase leading-none tracking-tight">
        {variant !== "short" && (
          <span className={variant === "responsive" ? "hidden sm:inline" : ""}>
            Takeprofit
          </span>
        )}
        {variant !== "full" && (
          <span className={variant === "responsive" ? "sm:hidden" : ""}>TP</span>
        )}
        <span className="ml-1 rounded-[5px] bg-accent px-1.5 py-1 text-background">
          TV
        </span>
      </span>
    </span>
  );
}
