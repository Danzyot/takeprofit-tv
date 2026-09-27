"use client";

import { useEffect, useState } from "react";
import { CopyIcon } from "@/components/icons";
import { SITE } from "@/lib/site";

/**
 * The code, as a clickable chip. If the clipboard is blocked the code
 * is still sitting there to be read and typed, so there is nothing to
 * recover from.
 */
export function CopyCode({
  code = SITE.code,
  className = "",
  compact = false,
}: {
  code?: string;
  className?: string;
  /** Sized to sit in a row with other controls rather than lead a section. */
  compact?: boolean;
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
      className={`inline-flex items-center bg-amber font-display font-black uppercase leading-none tracking-wide text-ink transition hover:bg-bone ${
        compact ? "gap-2.5 px-3.5 py-2.5 text-base" : "gap-3 px-4 py-2.5 text-2xl"
      } ${className}`}
    >
      {code}
      <span className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.15em]">
        <CopyIcon className="h-3.5 w-3.5" />
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}
