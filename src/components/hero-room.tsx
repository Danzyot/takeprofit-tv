"use client";

import { useEffect, useRef } from "react";
import { LINKS, SITE } from "@/lib/site";
import { DiscordIcon, YoutubeIcon } from "@/components/icons";

/**
 * The hero: flat layers standing in real 3D space.
 *
 * A wall a long way back, dust in the light, the set in the middle and
 * an out-of-focus foreground — each on its own translateZ, with the
 * whole world rotating a few degrees toward the pointer. The depth is
 * genuine perspective rather than layered blur, which is why it holds
 * up when you move.
 *
 * The screen renders a video when NEXT_PUBLIC_HERO_VIDEO is set, and
 * typography when it isn't — so a Runway clip drops in without a
 * rebuild of this component, and the page is never broken without one.
 */

const HERO_VIDEO = process.env.NEXT_PUBLIC_HERO_VIDEO || "";

export function HeroRoom() {
  const world = useRef<HTMLDivElement>(null);
  const dust = useRef<HTMLDivElement>(null);

  // Dust is generated on the client so the server never ships 40 divs
  // of random inline styles into the HTML payload.
  useEffect(() => {
    const host = dust.current;
    if (!host || host.childElementCount) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    for (let i = 0; i < 40; i++) {
      const mote = document.createElement("i");
      mote.style.cssText = `left:${6 + Math.random() * 88}%;top:${
        10 + Math.random() * 78
      }%;animation-duration:${9 + Math.random() * 13}s;animation-delay:${
        -Math.random() * 16
      }s;opacity:${(0.2 + Math.random() * 0.55).toFixed(2)}`;
      host.appendChild(mote);
    }
  }, []);

  useEffect(() => {
    const el = world.current;
    if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Pointer only. Touch devices get the scene at rest, which is the
    // right call — there is no pointer to lean toward.
    if (!matchMedia("(pointer: fine)").matches) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let x = 0;
    let y = 0;

    function onMove(e: PointerEvent) {
      tx = e.clientX / window.innerWidth - 0.5;
      ty = e.clientY / window.innerHeight - 0.5;
      if (!raf) raf = requestAnimationFrame(tick);
    }
    function tick() {
      // Lerp toward the pointer so the scene has weight instead of
      // snapping — the inertia is what makes it feel like a camera.
      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;
      if (el) {
        el.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 6}deg) translate3d(${
          -x * 30
        }px, ${-y * 20}px, 0)`;
      }
      raf =
        Math.abs(tx - x) > 0.0005 || Math.abs(ty - y) > 0.0005
          ? requestAnimationFrame(tick)
          : 0;
    }
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden" aria-label="Takeprofit TV">
      <div className="room-stage">
        <div className="room-world" ref={world}>
          <div className="room-layer room-wall" />
          <div className="room-layer room-dust" ref={dust} />

          <div className="room-set">
            <div className="room-body" />
            <div className="room-screen scanlines glass">
              {HERO_VIDEO ? (
                <video
                  className="h-full w-full object-cover"
                  src={HERO_VIDEO}
                  poster="/hero-poster.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-hidden="true"
                />
              ) : (
                <div className="flex h-full flex-col justify-between p-5 sm:p-7">
                  <div className="flex justify-between text-[9px] uppercase tracking-[0.2em] text-dim sm:text-[10px]">
                    <span>CH 01 · The Discord</span>
                    <span className="hidden sm:inline">Open 24/7</span>
                  </div>
                  <h1 className="rgb-split font-display text-[13vw] font-black uppercase leading-[0.82] tracking-[-0.015em] sm:text-[62px]">
                    Take
                    <br />
                    Profit <span className="bg-bone px-1 text-ink">TV</span>
                  </h1>
                  <p className="max-w-[34ch] text-[10px] leading-relaxed text-dim sm:text-xs">
                    A futures community that runs like a channel.
                  </p>
                </div>
              )}
            </div>
            <div className="room-feet">
              <span className="room-knob" />
              <b />
              <span className="room-led" />
            </div>
          </div>

          <div className="room-fore" />
        </div>
      </div>

      {/* Copy sits in front of the scene, the way broadcast furniture
          sits in front of a picture. */}
      <div className="relative z-30 mx-auto -mt-8 max-w-5xl px-5 pb-16 sm:-mt-12">
        <p className="max-w-lg text-sm leading-relaxed text-dim">
          The Discord is the studio floor — open all day, free to join, nothing
          to buy. YouTube is the broadcast. And code{" "}
          <span className="font-bold text-bone">{SITE.code}</span> gets you the
          best discount we can get on a prop firm evaluation.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href={LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 bg-bone px-7 py-4 font-display text-lg font-black uppercase tracking-wide text-ink transition hover:bg-amber"
          >
            <DiscordIcon className="h-5 w-5" />
            Join the Discord
          </a>
          <a
            href={LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 border border-[var(--rule)] px-7 py-4 font-display text-lg font-black uppercase tracking-wide transition hover:border-rec hover:text-rec"
          >
            <YoutubeIcon className="h-5 w-5" />
            Watch on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
