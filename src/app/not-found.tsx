import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { TptvMark } from "@/components/tptv-logo";
import { LINKS } from "@/lib/site";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center px-4 py-24 text-center">
        <div>
          <TptvMark className="mx-auto h-16 w-16 opacity-60" />
          <p className="mt-6 font-mono text-sm tracking-widest text-muted">404</p>
          <h1 className="heading-gradient mt-2 font-display text-3xl font-bold">
            No signal
          </h1>
          <p className="mt-3 text-muted">That page does not exist.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="btn-shine rounded-xl bg-accent px-7 py-3 font-display font-bold text-background hover:bg-accent-bright"
            >
              Back home
            </Link>
            <a
              href={LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine rounded-xl border border-border-subtle bg-surface px-7 py-3 font-display font-bold"
            >
              Join the Discord
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
