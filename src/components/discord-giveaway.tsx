"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CopyIcon } from "@/components/icons";

/**
 * The giveaway, running, and then the DM that follows it.
 *
 * Entries climb, the clock runs down, the embed flips to the winners, and the
 * channel cross-fades to the message a winner actually gets. It is the claim
 * on the page — daily account giveaways — shown rather than asserted, and it
 * carries the whole thing through to the payoff.
 *
 * Everything is drawn, not recorded: a couple of KB of markup, no video. The
 * names, the prize and the code stay editable text rather than pixels baked
 * into a file.
 */

/* Beats, in seconds from the top of the loop. */
const RUN = 2.6; // entries climbing
const ENDED = RUN + 0.25; // the embed flips
const DM = ENDED + 1.7; // the channel starts turning into a DM
const SWAP = 0.35; // how long that cross-fade takes
const LOOP = DM + 3.0;

const MAX = 1500;
const WINNERS = ["@mara", "@dez", "@kairo", "@nxv", "@binks"];
const PRIZE = "5 Lucid Trading accounts!";
const CODE = "K4XQ92MTBD";
const PLAN = "LucidPro Eval 150k";

const clamp = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t);
const outCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const hhmmss = (s: number) =>
  [s / 3600, (s % 3600) / 60, s % 60]
    .map((n) => String(Math.floor(n)).padStart(2, "0"))
    .join(":");

const KICKER = "text-[10px] font-bold uppercase tracking-[0.1em]";
const TITLE = "mt-1.5 text-[19px] font-extrabold leading-tight text-[#f2f3f5]";

export function DiscordGiveaway() {
  /* First paint is the DM: it is the most legible frame, so it is the one a
     visitor who never sees the animation is left with. */
  const [t, setT] = useState(DM + SWAP);
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
  const ended = t >= ENDED;
  const swap = clamp((t - DM) / SWAP); // 0 = channel, 1 = DM
  const since = t - DM - SWAP; // seconds into the DM

  return (
    <div className="relative bg-[#313338] font-sans">
      {/* header: #giveaways turning into the DM it opens */}
      <div className="relative h-[42px] shadow-[0_1px_0_rgba(0,0,0,0.28)]">
        <div
          className="absolute inset-0 flex items-center gap-2.5 px-4 text-[13px] font-bold text-[#f2f3f5]"
          style={{ opacity: 1 - swap }}
        >
          <span className="text-[17px] font-normal text-[#80848e]">#</span>
          giveaways
        </div>
        <div
          className="absolute inset-0 flex items-center gap-2.5 px-4 text-[13px] font-bold text-[#f2f3f5]"
          style={{ opacity: swap }}
        >
          <Image
            src="/cj.png"
            alt=""
            width={24}
            height={24}
            className="rounded-full"
          />
          CJ WAWA
        </div>
      </div>

      {/* One height for both views, so the cabinet never resizes mid-loop —
          and tall enough for the DM, because flex `justify-end` spills
          overflow out of the TOP and the message climbed over the header. */}
      <div className="relative flex min-h-[196px] items-center px-4 py-4">
        {/* the giveaway */}
        <div className="w-full" style={{ opacity: 1 - swap }}>
          <div className="rounded-md border-l-[4px] border-blurple bg-[#2b2d31] p-4">
            {ended ? (
              <>
                <p className={`${KICKER} text-[#4ade8a]`}>✅ Giveaway ended</p>
                <h3 className={TITLE}>{PRIZE}</h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {WINNERS.map((w, i) => (
                    <li
                      key={w}
                      className="rounded-md border border-[rgba(74,222,138,0.5)] bg-[rgba(74,222,138,0.13)] px-2 py-1 text-[11px] font-semibold text-[#bff0d0]"
                      style={{ opacity: clamp((t - ENDED - i * 0.06) / 0.2) }}
                    >
                      {w}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <p className={`${KICKER} text-[#a8b0f5]`}>🎉 Giveaway</p>
                <h3 className={TITLE}>{PRIZE}</h3>
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

        {/* the message a winner gets */}
        <div
          className="absolute inset-0 flex flex-col justify-center px-4 py-4"
          style={{ opacity: swap }}
        >
          {/* The header already names him, and Discord drops the name on a
              follow-on message anyway — so this is just the line itself. */}
          <div
            className="flex items-center gap-2.5"
            style={{
              opacity: clamp(since / 0.3),
              transform: `translateY(${(1 - outCubic(clamp(since / 0.3))) * 8}px)`,
            }}
          >
            <Image
              src="/cj.png"
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 shrink-0 rounded-full"
            />
            <p className="text-[12.5px] leading-snug text-[#dbdee1]">
              congrats — here&apos;s your free account code
            </p>
          </div>

          <div
            className="mt-3 rounded-lg border border-white/[0.07] bg-[#1e1f22] p-3"
            style={{
              opacity: clamp((since - 0.25) / 0.32),
              transform: `scale(${0.97 + 0.03 * outCubic(clamp((since - 0.25) / 0.32))})`,
            }}
          >
            <p className="font-mono text-[18px] font-bold tracking-[0.09em] text-[#f2f3f5]">
              {CODE}
            </p>
            <div className="mt-2 flex items-center gap-2.5">
              <span className="rounded bg-[#2b2d31] px-2 py-1 text-[10px] text-[#b5bac1]">
                {PLAN}
              </span>
              <span className="text-[11px] font-bold text-[#3ba55c]">
                100% off
              </span>
            </div>
            <div
              className="mt-2.5 flex h-7 items-center justify-center gap-1.5 rounded-md border border-white/[0.07] bg-[#2b2d31] text-[11px] font-semibold text-[#dbdee1]"
              style={{ opacity: clamp((since - 0.6) / 0.3) }}
            >
              <CopyIcon className="h-3 w-3" />
              Copy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
