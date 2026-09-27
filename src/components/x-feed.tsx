"use client";

import { useEffect, useRef, useState } from "react";
import { XIcon } from "@/components/icons";
import Image from "next/image";
import { SITE, X_POSTS } from "@/lib/site";

/**
 * The timeline, filling up.
 *
 * Posts arrive at the bottom of the screen and push the older ones up, the
 * way a live feed behaves. The list is rendered twice and the window slides
 * through it, so the loop has no seam and nothing remounts as it goes round.
 */

const ITEM = 66; // px per post, fixed so the slide is a whole number
const SHOWN = 3;
const BEAT = 2.1; // seconds a post holds before the next arrives
const SLIDE = 0.26; // the fraction of a beat spent moving

const clamp = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t);
const outCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function XFeed() {
  const [t, setT] = useState(0);
  const frame = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = performance.now();
    const tick = (now: number) => {
      frame.current = requestAnimationFrame(tick);
      setT((now - start) / 1000);
    };
    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, []);

  const step = Math.floor(t / BEAT) % X_POSTS.length;
  const slide = outCubic(clamp((t % BEAT) / (BEAT * SLIDE)));
  const doubled = [...X_POSTS, ...X_POSTS];

  return (
    <div className="bg-black font-sans">
      <div className="flex items-center gap-2 px-4 py-2.5 text-[13px] font-bold text-white shadow-[0_1px_0_rgba(255,255,255,0.1)]">
        <XIcon className="h-3.5 w-3.5" />
        {SITE.name}
      </div>

      <div
        className="relative overflow-hidden"
        style={{ height: SHOWN * ITEM }}
      >
        <div
          className="absolute inset-x-0 top-0"
          style={{ transform: `translateY(${-(step + slide) * ITEM}px)` }}
        >
          {doubled.map((post, i) => (
            <div
              key={i}
              className="flex items-start gap-2.5 px-4"
              style={{ height: ITEM }}
            >
              <Image
                src="/tptv-mark.png"
                alt=""
                width={28}
                height={28}
                className="mt-3 h-7 w-7 shrink-0 rounded-full"
              />
              <div className="min-w-0 pt-3">
                <p className="flex items-center gap-1.5 text-[11.5px] leading-none">
                  <span className="font-bold text-white">{SITE.name}</span>
                  <span className="text-[#71767b]">{SITE.handle}</span>
                </p>
                <p className="mt-1 text-[12.5px] leading-snug text-[#e7e9ea]">
                  {post}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* the older posts fade out at the top rather than being chopped */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black to-transparent" />
      </div>
    </div>
  );
}
