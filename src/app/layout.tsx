import type { Metadata } from "next";
import { Big_Shoulders, Space_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
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
        {/* Restore the visitor's effects preference before first paint,
            so someone who turned the texture off never sees it flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("tptv-fx")==="off")document.documentElement.dataset.fx="off"}catch(e){}`,
          }}
        />
      </head>
      <body className="grain flex min-h-full flex-col">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
