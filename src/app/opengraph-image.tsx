import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

/**
 * The card that renders when someone drops a link to this site in Discord
 * — which, for a Discord-first community, is the main way people meet it.
 *
 * Drawn with the default font on purpose: fetching a webfont at build time
 * would make the build depend on the network for no real gain. The mark is
 * read off disk and inlined for the same reason — it is the real logo, not a
 * drawn copy of it, and it still costs no network call.
 */

const MARK = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public", "tptv-mark.png")
).toString("base64")}`;

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE.name} — futures trading community`;

const ACCENT = "#ff9e2c";

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
          background: "#0b0b0d",
          borderTop: `10px solid ${ACCENT}`,
          padding: "72px 80px",
          color: "#f4f6f8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <img src={MARK} alt="" style={{ width: 112, height: 112 }} />
          <div style={{ display: "flex", fontSize: 76, fontWeight: 800, letterSpacing: -2 }}>
            TAKEPROFIT
            <div
              style={{
                display: "flex",
                marginLeft: 16,
                background: ACCENT,
                color: "#0b0b0d",
                borderRadius: 14,
                padding: "0 18px",
              }}
            >
              TV
            </div>
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 40, color: "#98a1ae", lineHeight: 1.35, maxWidth: 900 }}>
          Day trading community, content and giveaways. Free prop firm accounts
          given away in the Discord, every day.
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              display: "flex",
              background: ACCENT,
              color: "#0b0b0d",
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
            discord · youtube · x
          </div>
        </div>
      </div>
    ),
    size
  );
}
