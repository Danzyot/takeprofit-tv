import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { CopyCode } from "@/components/copy-code";
import { FIRMS, LINKS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Disclosures — ${SITE.name}`,
  description: `How ${SITE.name} makes money, what code ${SITE.code} does, and the risks of trading leveraged products.`,
};

const SECTIONS: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. Who we are",
    body: (
      <>
        {SITE.name}{" "}
        (&quot;we&quot;, &quot;us&quot;) is a futures trading community. We run
        a free Discord server, publish trading content on
        YouTube, and promote partner proprietary-trading firms through the
        discount / affiliate code <strong>{SITE.code}</strong>. We are{" "}
        <strong>not</strong> a broker, a prop firm, a financial institution, or
        an investment adviser, and we do not hold, manage or have access to
        your money.
      </>
    ),
  },
  {
    title: `2. How we make money — code ${SITE.code}`,
    body: (
      <>
        <p>
          This is the part people usually bury, so we are putting it first:{" "}
          <strong>
            when you buy an evaluation from a partner firm using code{" "}
            {SITE.code} or one of our links, that firm pays us a commission.
          </strong>{" "}
          This is an affiliate relationship.
        </p>
        <p className="mt-3">
          Using the code costs you nothing extra. The code applies the best
          discount we have been able to negotiate with that firm — your price is
          the same or lower than it would be without it. We are not holding back
          a cheaper option.
        </p>
        <p className="mt-3">
          That commission is what funds the community: the Discord, the bots and
          tools we build, the giveaways, and the time that goes into the
          content. There is no paid membership, no signal service and no upsell.
          If the community is useful to you, using the code is how you keep it
          running.
        </p>
        <p className="mt-3">
          We would rather you take a deal that suits you than one that pays us
          best. If a partner firm stops being a firm we would use ourselves, we
          will drop it.
        </p>
      </>
    ),
  },
  {
    title: "3. Nothing here is financial advice",
    body: (
      <>
        Nothing on this website, in our Discord, in our videos or on any of our
        social media is financial, investment, legal or tax advice, and none of
        it is a recommendation to buy or sell anything. It is education and
        entertainment. You are responsible for your own trading decisions. If
        you need advice, speak to a licensed professional in your jurisdiction.
      </>
    ),
  },
  {
    title: "4. Risk warning",
    body: (
      <>
        Trading futures and other leveraged products carries a substantial risk
        of loss and is not suitable for everyone. Most people who attempt prop
        firm evaluations do not pass them, and evaluation fees are generally not
        refundable. Past performance — ours, our members&apos;, or anyone
        else&apos;s — does not guarantee future results, and any results shown
        on this site or in our content are not typical.{" "}
        <strong>Never trade with money you cannot afford to lose.</strong>
      </>
    ),
  },
  {
    title: "5. Partner prop firms",
    body: (
      <>
        <p>
          Partner firms are independent companies. We do not operate them, hold
          your funds, or control their rules, evaluations, payouts, pricing or
          customer service. Any firm details shown on this site are provided for
          convenience, can go out of date at any time, and are always superseded
          by that firm&apos;s own published terms — check them before you buy.
        </p>
        <p className="mt-3">
          We currently partner with{" "}
          {FIRMS.map((firm, i) => (
            <span key={firm.slug}>
              {i > 0 && (i === FIRMS.length - 1 ? " and " : ", ")}
              <strong>{firm.name}</strong>
            </span>
          ))}
          . Any dispute about an account, a payout or a purchase is between you
          and that firm.
        </p>
      </>
    ),
  },
  {
    title: "6. Community conduct",
    body: (
      <>
        Our Discord has its own rules, enforced by the team. Scamming,
        impersonating staff, selling signals or courses to members, and posting
        other people&apos;s personal information all get you removed. Giveaways,
        when we run them, are announced in the Discord with their own terms
        attached to that giveaway.
      </>
    ),
  },
  {
    title: "7. Liability",
    body: (
      <>
        This site and our content are provided &quot;as is&quot;, without
        warranties of any kind. To the maximum extent permitted by law,{" "}
        {SITE.name}{" "}
        and its team are not liable for any loss arising from your trading
        decisions, from a prop firm&apos;s actions, or from your use of this
        website.
      </>
    ),
  },
  {
    title: "8. Changes to this page",
    body: (
      <>
        We may update these disclosures at any time; the version on this page is
        the one that applies. Questions? Ask the team in the{" "}
        <a
          href={LINKS.discord}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Discord
        </a>
        .
      </>
    ),
  },
];

export default function DisclosuresPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1 px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="heading-gradient font-display text-4xl font-extrabold tracking-tight">
            Disclosures
          </h1>
          <p className="mt-3 text-sm text-muted">
            How {SITE.name} makes money, what code {SITE.code} does, and the
            risks involved. Plain English, no small print.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 rounded-xl border border-accent/25 bg-surface px-5 py-4">
            <p className="text-sm text-muted">
              Code {SITE.code} pays us a commission — at no extra cost to you.
            </p>
            <CopyCode className="ml-auto" />
          </div>

          <div className="mt-10 space-y-6">
            {SECTIONS.map((section) => (
              <section
                key={section.title}
                className="rounded-2xl border border-border-subtle bg-surface p-6 sm:p-7"
              >
                <h2 className="font-display text-lg font-bold">
                  {section.title}
                </h2>
                <div className="mt-3 text-sm leading-relaxed text-foreground/80">
                  {section.body}
                </div>
              </section>
            ))}
          </div>

          <p className="mt-10 text-center text-xs text-muted">
            Last updated: September 2026
          </p>
        </div>
      </main>
    </>
  );
}
