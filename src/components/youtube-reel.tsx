"use client";

import { useEffect, useRef } from "react";
import { Tv } from "@/components/tv";

/**
 * Three clips, each in its own set, over a blurred blow-up of themselves.
 *
 * They are muted, looping and re-encoded down to about 230KB each — the
 * originals were 1080p and ten megabytes together, which is not something to
 * put on a homepage someone opens on mobile data. Playback is paused while
 * the reel is off screen, so arriving at the page does not spend three video
 * decoders on something nobody is looking at.
 */

const CLIPS = [
  { src: "/clips/a.webm", lift: "sm:-translate-y-4" },
  { src: "/clips/b.webm", lift: "sm:translate-y-3" },
  { src: "/clips/c.webm", lift: "sm:-translate-y-2" },
];

export function YoutubeReel() {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const vids = [...el.querySelectorAll("video")];
    const io = new IntersectionObserver(
      ([entry]) => {
        vids.forEach((v) => {
          if (entry.isIntersecting) v.play().catch(() => {});
          else v.pause();
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrap} className="relative isolate">
      <span className="reel-glow" aria-hidden="true" />
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        {CLIPS.map(({ src, lift }) => (
          <Tv key={src} small className={`transition-transform ${lift}`}>
            <video
              src={src}
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              className="block aspect-video w-full object-cover"
            />
            <span className="absolute bottom-1.5 left-1.5 grid h-4 w-6 place-items-center rounded bg-rec sm:bottom-2 sm:left-2 sm:h-5 sm:w-7">
              <svg viewBox="0 0 24 24" className="ml-px h-2.5 w-2.5 fill-white">
                <path d="M8 5v14l11-7L8 5Z" />
              </svg>
            </span>
          </Tv>
        ))}
      </div>
    </div>
  );
}
