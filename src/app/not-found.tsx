import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { LINKS } from "@/lib/site";

/* SMPTE bars at 75%, then the pluge strip underneath — the card a
   channel puts up when there is nothing to broadcast. Which is exactly
   what a 404 is. */
const BARS = ["#c0c0c0", "#c0c000", "#00c0c0", "#00c000", "#c000c0", "#c00000", "#0000c0"];
const PLUGE = ["#0000c0", "#0b0b0d", "#c000c0", "#0b0b0d", "#00c0c0", "#0b0b0d", "#c0c0c0"];

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center px-5 py-16">
        <div className="w-full max-w-2xl">
          <div className="scanlines glass relative aspect-[4/3] w-full overflow-hidden border border-[var(--rule)]">
            <div className="flex h-[76%]" aria-hidden="true">
              {BARS.map((c) => (
                <span key={c} className="flex-1" style={{ background: c }} />
              ))}
            </div>
            <div className="flex h-[24%]" aria-hidden="true">
              {PLUGE.map((c, i) => (
                <span key={i} className="flex-1" style={{ background: c }} />
              ))}
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-ink px-8 py-6 text-center">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-dim">
                  Error 404
                </p>
                <p className="mt-2 font-display text-5xl font-black uppercase leading-none sm:text-6xl">
                  No signal
                </p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm text-dim">
            That page is not on any of our channels.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="bg-bone px-7 py-3.5 text-center font-display text-lg font-black uppercase tracking-wide text-ink transition hover:bg-amber"
            >
              Back to CH 01
            </Link>
            <a
              href={LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--rule)] px-7 py-3.5 text-center font-display text-lg font-black uppercase tracking-wide transition hover:border-blurple hover:text-blurple"
            >
              Join the Discord
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
