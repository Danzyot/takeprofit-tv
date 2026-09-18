"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

/* ---------------------------------------------------------------
   The effects preference lives on <html data-fx>, which an inline
   script in the layout sets before first paint. That attribute — not
   React — is the source of truth, so the toggle reads it through
   useSyncExternalStore rather than copying it into state on mount.
   --------------------------------------------------------------- */

let listeners: (() => void)[] = [];

function subscribe(onChange: () => void) {
  listeners.push(onChange);
  return () => {
    listeners = listeners.filter((l) => l !== onChange);
  };
}

function getSnapshot() {
  return document.documentElement.dataset.fx !== "off";
}

/** Effects are on by default, which is what the server renders. */
function getServerSnapshot() {
  return true;
}

function setEffects(on: boolean) {
  document.documentElement.dataset.fx = on ? "on" : "off";
  try {
    localStorage.setItem("tptv-fx", on ? "on" : "off");
  } catch {
    // Storage blocked — the preference just won't survive a reload.
  }
  listeners.forEach((l) => l());
}

/**
 * The corner furniture every channel has: a REC light, a running
 * timecode, and the switch that turns the analog texture off.
 *
 * The timecode counts from mount rather than showing wall-clock time —
 * it is set dressing, and a fake clock that disagrees with the
 * visitor's own is worse than an honest stopwatch.
 */
export function BroadcastChrome() {
  const fx = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [frames, setFrames] = useState(0);

  useEffect(() => {
    // Four ticks a second reads as a running frame counter without
    // waking the main thread 25 times a second.
    const id = setInterval(() => setFrames((f) => f + 6), 240);
    return () => clearInterval(id);
  }, []);

  const total = Math.floor(frames / 25);
  const timecode = [
    Math.floor(total / 3600),
    Math.floor((total % 3600) / 60),
    total % 60,
    frames % 25,
  ]
    .map((n) => String(n).padStart(2, "0"))
    .join(":");

  return (
    <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-dim">
      <span className="hidden items-center gap-2 sm:flex">
        <span className="rec-dot h-1.5 w-1.5 rounded-full bg-rec" />
        Rec
      </span>
      <span className="tabular-nums" suppressHydrationWarning>
        {timecode}
      </span>
      <button
        type="button"
        onClick={() => setEffects(!fx)}
        aria-pressed={!fx}
        title={
          fx ? "Turn off grain, scanlines and glitch" : "Turn effects back on"
        }
        className="border border-[var(--rule)] px-2 py-1 transition hover:border-amber hover:text-amber"
      >
        FX {fx ? "On" : "Off"}
      </button>
    </div>
  );
}
