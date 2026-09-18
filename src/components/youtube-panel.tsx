import { YoutubeIcon } from "@/components/icons";
import { LINKS } from "@/lib/site";

/**
 * The channel, framed the way a broadcast monitor is: 16:9 with the
 * title-safe guide visible, a scrub bar along the bottom, and a slate
 * in the corner.
 */
export function YoutubePanel() {
  return (
    <div className="relative">
      <a
        href={LINKS.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <div className="scanlines glass relative aspect-video w-full overflow-hidden border border-[var(--rule)] bg-ink-2">
          {/* Title-safe guide — the box a broadcast engineer keeps
              graphics inside. Here it is the framing device. */}
          <span className="pointer-events-none absolute inset-[8%] border border-dashed border-[var(--rule)]" />

          <span className="absolute left-4 top-3 font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
            CH 02 · 16:9
          </span>

          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-rec text-white transition group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-8 w-8" aria-hidden="true">
                <path d="M8 5v14l11-7L8 5Z" />
              </svg>
            </span>
          </span>

          {/* Scrub bar. Sits at a plausible playhead rather than
              animating, so it reads as a still frame of a video. */}
          <span className="absolute inset-x-0 bottom-0 h-1 bg-bone/15">
            <span className="block h-full w-1/3 bg-rec" />
          </span>
        </div>
      </a>

      <a
        href={LINKS.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex w-full items-center justify-center gap-2.5 bg-rec px-7 py-4 font-display text-lg font-black uppercase tracking-wide text-white transition hover:brightness-110 sm:w-auto"
      >
        <YoutubeIcon className="h-5 w-5" />
        Watch on YouTube
      </a>
    </div>
  );
}
