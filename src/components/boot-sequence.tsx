"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The channel tuning in.
 *
 * The whole viewport becomes a television: bezel, curved glass, scanlines,
 * and grey no-signal static. The signal locks, the name catches on screen,
 * and the tube switches off to reveal the site.
 *
 * Whether it runs is decided before first paint by the inline script in the
 * layout, which sets <html data-boot>. That attribute drives the CSS that
 * both hides the site and shows this overlay, so nothing here reads the DOM
 * during render and there is nothing for hydration to disagree about —
 * React only owns the timeline.
 */

const BEATS = {
  /** heavy static */
  lock: 1050,
  /** signal catches, the name appears */
  word: 1400,
  /** the tube switches off */
  out: 2250,
  /** overlay gone, site revealed */
  done: 2620,
} as const;

type Phase = "static" | "lock" | "word" | "out" | "done";

/** Hand the page back: reveal the site and remember not to do this again. */
function release() {
  const root = document.documentElement;
  delete root.dataset.boot;
  root.dataset.booted = "1";
  try {
    sessionStorage.setItem("tptv-booted", "1");
  } catch {
    // Private mode. It plays again next load, which is the harmless way round.
  }
}

export function BootSequence() {
  const [phase, setPhase] = useState<Phase>("static");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (document.documentElement.dataset.boot !== "1") return;
    const timers = [
      setTimeout(() => setRunning(true), 0),
      setTimeout(() => setPhase("lock"), BEATS.lock),
      setTimeout(() => setPhase("word"), BEATS.word),
      setTimeout(() => setPhase("out"), BEATS.out),
      setTimeout(() => {
        release();
        setPhase("done");
        setRunning(false);
      }, BEATS.done),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  /* The static. The buffer is deliberately tiny and stretched by CSS with
     pixelated rendering — real analogue snow is chunky, and a full-resolution
     buffer would cost far more for a picture nobody can tell apart. */
  useEffect(() => {
    if (!running) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d", { alpha: false });
    if (!canvas || !ctx) return;

    const W = 168;
    const H = Math.max(64, Math.round((W * window.innerHeight) / window.innerWidth));
    canvas.width = W;
    canvas.height = H;
    const frame = ctx.createImageData(W, H);
    const px = frame.data;

    let raf = 0;
    let last = 0;
    const started = performance.now();

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);
      if (now - last < 33) return; // ~30fps; snow does not need more
      last = now;

      /* the snow thins out as the signal comes in */
      const t = now - started;
      const settle = Math.min(1, Math.max(0, (t - BEATS.lock) / 520));
      const spread = 168 * (1 - settle * 0.84);
      const floor = 18 + settle * 28;

      for (let i = 0; i < px.length; i += 4) {
        const v = floor + Math.random() * spread;
        px[i] = v * 0.96;
        px[i + 1] = v * 0.98;
        px[i + 2] = v; // a hair cool, the way a dead channel reads
        px[i + 3] = 255;
      }
      ctx.putImageData(frame, 0, 0);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [running]);

  return (
    <div className="boot" data-phase={phase} aria-hidden="true">
      <canvas ref={canvasRef} />
      <div className="boot-lines" />
      {phase === "static" && <div className="boot-roll" />}
      <div className="boot-glass" />
      <div className="boot-word">
        <span className="font-display text-[clamp(2.5rem,11vw,7rem)] font-black uppercase leading-[0.85] tracking-[-0.02em] text-screen [text-shadow:0_0_28px_rgba(201,204,209,0.45)]">
          Takeprofit
          <span className="ml-3 bg-screen px-3 py-1 text-ink">TV</span>
        </span>
      </div>
      <div className="boot-led" />
    </div>
  );
}
