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
  `${SITE.name} — free account giveaways, trading content. Discord and ` +
  `YouTube. Use code ${SITE.code}.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.name,
  description,
  openGraph: {
    title: SITE.name,
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
      className={`${shoulders.variable} ${spaceMono.variable}`}
    >
      <head>
        {/* Whether the channel tunes in has to be decided before first
            paint, or the site flashes behind the static. Once per tab,
            never for a visitor who has asked for reduced motion, and with a
            timeout that gives the page back if the script that clears it
            never runs. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              `try{var m=matchMedia("(prefers-reduced-motion: reduce)").matches,b=sessionStorage.getItem("tptv-booted");` +
              `if(!m&&!b){document.documentElement.dataset.boot="1";` +
              `setTimeout(function(){delete document.documentElement.dataset.boot},6000)}}catch(e){}`,
          }}
        />
      </head>
      <body className="grain">
        <div className="site-shell flex min-h-[100svh] flex-col">{children}</div>
        <BootSequence />
      </body>
    </html>
  );
}
