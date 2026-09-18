import type { Metadata } from "next";
import { Big_Shoulders, Space_Mono } from "next/font/google";
import { BootSequence } from "@/components/boot-sequence";
import { SITE } from "@/lib/site";
import "./globals.css";

/* A heavy condensed grotesk against a mono with real character.
   Deliberately not Inter, and deliberately not a geometric display
   face — that pairing is the fingerprint of every generated site. */
const shoulders = Big_Shoulders({
  variable: "--font-shoulders",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});
const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const description =
  `${SITE.name} is a futures trading community that runs like a channel. ` +
  `Free Discord, content on YouTube, and the best available discount on prop ` +
  `firm evaluations with code ${SITE.code}.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.name} — Futures Community`,
  description,
  openGraph: {
    title: `${SITE.name} — Futures Community`,
    description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: SITE.name, description },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${shoulders.variable} ${spaceMono.variable} h-full`}
    >
      <head>
        {/* Two decisions that have to be made before first paint.
            The effects preference, so someone who turned the texture off
            never sees it flash. And whether the channel tunes in: once per
            tab, never for a visitor who has asked for reduced motion, and
            with a timeout that gives the page back if the script that
            clears it never runs. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              `try{if(localStorage.getItem("tptv-fx")==="off")document.documentElement.dataset.fx="off"}catch(e){}` +
              `try{var m=matchMedia("(prefers-reduced-motion: reduce)").matches,b=sessionStorage.getItem("tptv-booted");` +
              `if(!m&&!b){document.documentElement.dataset.boot="1";` +
              `setTimeout(function(){delete document.documentElement.dataset.boot},6000)}}catch(e){}`,
          }}
        />
      </head>
      <body className="grain">
        <div className="site-shell flex min-h-full flex-col">{children}</div>
        <BootSequence />
      </body>
    </html>
  );
}
