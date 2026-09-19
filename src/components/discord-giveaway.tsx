"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The giveaway, running.
 *
 * Entries climb, the clock runs down, the embed flips to the winners, holds,
 * and starts again. It is the claim on the page — daily giveaways — shown
 * rather than asserted.
 *
 * Everything is drawn, not recorded: no video, no screenshots, a couple of KB
 * of markup. That also means the numbers and names are editable text rather
 * than pixels baked into a file.
 */

const RUN = 4.2; // entries climbing
const HOLD = 4.0; // winners on screen
const FLIP = 0.35;
const LOOP = RUN + FLIP + HOLD;
const MAX = 1500;
const WINNERS = ["@mara", "@dez", "@kairo", "@nxv", "@binks"];

const clamp = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t);
const outCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const hhmmss = (s: number) =>
  [s / 3600, (s % 3600) / 60, s % 60]
    .map((n) => String(Math.floor(n)).padStart(2, "0"))
    .join(":");

export function DiscordGiveaway() {
  const [t, setT] = useState(RUN + FLIP); // first paint shows the ended state
  const frame = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = performance.now();
    const tick = (now: number) => {
      frame.current = requestAnimationFrame(tick);
      setT(((now - start) / 1000) % LOOP);
    };
    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, []);

  const p = clamp(t / RUN);
  const entries = Math.round(MAX * outCubic(p));
  const ended = t >= RUN + FLIP;

  return (
    <div className="bg-[#313338] font-sans">
      <div className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] font-bold text-[#f2f3f5] shadow-[0_1px_0_rgba(0,0,0,0.28)]">
        <span className="text-[17px] font-normal text-[#80848e]">#</span>
        giveaways
      </div>

      <div className="px-4 py-4">
        <div className="relative rounded-md border-l-[4px] border-blurple bg-[#2b2d31] p-4">
          {ended ? (
            <>
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#4ade8a]">
                ✅ Giveaway ended
              </p>
              <h3 className="mt-1.5 text-[19px] font-extrabold leading-tight text-[#f2f3f5]">
                5 Lucid Trading accounts!
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {WINNERS.map((w, i) => (
                  <li
                    key={w}
                    className="rounded-md border border-[rgba(74,222,138,0.5)] bg-[rgba(74,222,138,0.13)] px-2 py-1 text-[11px] font-semibold text-[#bff0d0]"
                    style={{
                      opacity: clamp((t - RUN - FLIP - i * 0.07) / 0.22),
                    }}
                  >
                    {w}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#a8b0f5]">
                🎉 Giveaway
              </p>
              <h3 className="mt-1.5 text-[19px] font-extrabold leading-tight text-[#f2f3f5]">
                5 Lucid Trading accounts!
              </h3>
              <div className="mt-3 flex gap-8">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.09em] text-[#8e94a3]">
                    Entries
                  </p>
                  <p className="mt-0.5 text-[18px] font-bold tabular-nums text-[#f2f3f5]">
                    {entries.toLocaleString("en-US")}
                  </p>
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.09em] text-[#8e94a3]">
                    Ends in
                  </p>
                  <p className="mt-0.5 text-[18px] font-bold tabular-nums text-[#f2f3f5]">
                    {hhmmss(Math.max(0, 6 * 3600 * (1 - p)))}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
