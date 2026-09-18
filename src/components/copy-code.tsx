"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

/**
 * The code, as a clickable chip. If the clipboard is blocked the code
 * is still sitting there to be read and typed, so there is nothing to
 * recover from.
 */
export function CopyCode({
  code = SITE.code,
  className = "",
}: {
  code?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(t);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
    } catch {
      // Clipboard unavailable — the chip still shows the code.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      title={`Copy code ${code}`}
      className={`inline-flex items-center gap-3 bg-amber px-4 py-2.5 font-display text-2xl font-black uppercase leading-none tracking-wide text-ink transition hover:bg-bone ${className}`}
    >
      {code}
      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.15em]">
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}
