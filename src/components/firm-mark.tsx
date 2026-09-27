/**
 * The partner firm's mark.
 *
 * PLACEHOLDER. This is a drawn stand-in, not Lucid Trading's logo — inventing
 * another company's branding would put a wrong mark on the page and next to
 * an affiliate link, which is the worst place for one. Drop the real file in
 * at public/lucid.png (or .svg) and swap the body of this component for an
 * <Image>; nothing else needs to change.
 */
export function FirmMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-sm border border-amber/60 bg-amber/10 ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
        <path
          d="M4 17l5-5 3.5 2.5L20 7"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-amber"
        />
      </svg>
    </span>
  );
}
