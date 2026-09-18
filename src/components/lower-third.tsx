/**
 * A section heading built as a broadcast lower third: the channel slug
 * on a solid slab, the title wiping in from the left beside it.
 *
 * The channel numbers are real structure, not decoration — the page is
 * ordered as channels and the nav refers to them by number.
 */
export function LowerThird({
  channel,
  kicker,
  title,
  tone = "amber",
}: {
  channel: string;
  kicker: string;
  title: string;
  tone?: "amber" | "blurple" | "rec";
}) {
  const slab =
    tone === "blurple"
      ? "bg-blurple text-white"
      : tone === "rec"
        ? "bg-rec text-white"
        : "bg-amber text-ink";

  return (
    <div className="lower-third">
      <div className="flex items-stretch">
        <span
          className={`flex items-center px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] ${slab}`}
        >
          {channel}
        </span>
        <span className="flex items-center border border-l-0 border-[var(--rule)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
          {kicker}
        </span>
      </div>
      <h2 className="mt-4 font-display text-[clamp(44px,9vw,86px)] font-black uppercase leading-[0.86] tracking-[-0.02em]">
        {title}
      </h2>
    </div>
  );
}
