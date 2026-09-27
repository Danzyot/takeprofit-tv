/**
 * The channel bug: a REC light, and nothing else.
 *
 * This used to carry a running timecode and an FX switch as well. The
 * timecode was set dressing on a page that fits one screen, and "FX" reads
 * as forex on a trading site — which is the opposite of what it meant.
 * Reduced motion is still honoured automatically, so nothing was lost by
 * dropping the manual switch.
 */
export function BroadcastChrome() {
  return (
    <span className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-dim sm:flex">
      <span className="rec-dot h-1.5 w-1.5 rounded-full bg-rec" />
      Rec
    </span>
  );
}
