"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

/**
 * The code chip — click to copy. Falls back to simply showing the code if
 * the clipboard is blocked (insecure origin, permission denied), which is
 * fine: the code is right there to be typed.
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
      // Clipboard unavailable — the code stays visible on the chip.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      title={`Copy code ${code}`}
      className={`btn-shine inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 font-mono text-base font-bold tracking-widest text-background hover:bg-accent-bright ${className}`}
    >
      {code}
      {copied ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m20 6-11 11-5-5" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="9" y="9" width="13" height="13" rx="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
      <span className="sr-only">{copied ? "Copied" : "Copy code"}</span>
    </button>
  );
}
