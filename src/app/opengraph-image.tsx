import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

/**
 * The card that renders when someone drops a link to this site in Discord
 * — which, for a Discord-first community, is the main way people meet it.
 *
 * Drawn with the default font on purpose: fetching a webfont at build time
 * would make the build depend on the network for no real gain.
 */

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE.name} — futures trading community`;

const ACCENT = "#00d68f";
const ACCENT_BRIGHT = "#5cf0bb";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#07080a",
          borderTop: `10px solid ${ACCENT}`,
          padding: "72px 80px",
          color: "#f4f6f8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <svg
            width="112"
            height="112"
            viewBox="0 0 64 64"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="4" y="9" width="56" height="40" rx="11" stroke={ACCENT} strokeWidth="3" />
            <path d="M32 49v7" stroke={ACCENT} strokeWidth="3" />
            <path d="M22 56h20" stroke={ACCENT} strokeWidth="3" />
            <path d="M16 38l9-9 7 5 13-14" stroke={ACCENT_BRIGHT} strokeWidth="3.2" />
            <path d="M37 20h8v8" stroke={ACCENT_BRIGHT} strokeWidth="3.2" />
          </svg>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 800, letterSpacing: -2 }}>
            TAKEPROFIT
            <div
              style={{
                display: "flex",
                marginLeft: 16,
                background: ACCENT,
                color: "#07080a",
                borderRadius: 14,
                padding: "0 18px",
              }}
            >
              TV
            </div>
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 40, color: "#98a1ae", lineHeight: 1.35, maxWidth: 900 }}>
          Futures trading community. Free Discord, content on YouTube, and the
          best available discount on prop firm evaluations.
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              display: "flex",
              background: ACCENT,
              color: "#07080a",
              fontSize: 40,
              fontWeight: 700,
              borderRadius: 14,
              padding: "14px 32px",
              letterSpacing: 4,
            }}
          >
            CODE {SITE.code}
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "#98a1ae" }}>
            discord · youtube
          </div>
        </div>
      </div>
    ),
    size
  );
}
