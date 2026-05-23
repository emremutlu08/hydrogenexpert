import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageIntroSection } from "@/components/PageIntroSection";
import { TrackedCTAButton } from "@/components/TrackedCTAButton";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { buildBreadcrumbListSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Hydrogen Scope Review Request Sent | HydrogenExpert",
  description:
    "Confirmation page for HydrogenExpert scope review requests with next-step links.",
  path: "/thank-you",
  robots: {
    index: false,
    follow: false,
  },
});

const nextStepLinks = [
  { href: "/shopify-hydrogen-packages", label: "View Build Packages" },
  { href: "/when-not-to-use-hydrogen", label: "Read When Not to Use Hydrogen" },
  { href: "/case-studies", label: "See Production Proof" },
] as const;
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Thank You", href: "/thank-you" },
] as const;
const breadcrumbSchema = buildBreadcrumbListSchema(
  breadcrumbs.map((item) => ({
    name: item.label,
    url: absoluteUrl(item.href),
  })),
);

function getBudgetMessage(budget?: string) {
  if (budget === "starter_2k") {
    return "Starter requests are reviewed around core ecommerce flow: home, listing, PDP, cart drawer, checkout handoff, account entry, SEO baseline, and launch readiness.";
  }

  if (budget === "custom_5k_plus") {
    return "Custom requests are reviewed around migration risk, integrations, advanced search, B2B, subscriptions, content architecture, SEO preservation, and launch QA.";
  }

  return null;
}

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ budget?: string }>;
}) {
  const { budget } = await searchParams;
  const budgetMessage = getBudgetMessage(budget);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <div className="page-shell">
        <Breadcrumbs items={breadcrumbs} />
        <PageIntroSection
          eyebrow="Request sent"
          title="Thanks - your Hydrogen scope review request was sent."
          description="I'll review the store URL, design status, product count, selected features, and budget range, then reply with the most honest next step."
          body="The answer may be Starter, Standard, Growth, Custom, Liquid cleanup, support retainer, or no rebuild."
        />

      {budgetMessage ? (
        <section className="surface-card">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#10b981]">
            Budget-specific review note
          </p>
          <p className="mt-4 max-w-4xl text-base leading-8 text-neutral-700">
            {budgetMessage}
          </p>
        </section>
      ) : null}

      <section className="surface-card space-y-6">
        <div className="max-w-3xl">
          <p className="eyebrow">Next steps</p>
          <h2 className="subsection-title mt-3">Useful links while I review the request.</h2>
        </div>
        <div className="authority-links">
          {nextStepLinks.map((item) => (
            <Link key={item.href} href={item.href} className="authority-link-card">
              <p className="authority-link-card__label">Next step</p>
              <h3 className="authority-link-card__title">{item.label}</h3>
              <p className="authority-link-card__body">
                Keep the scope decision grounded in packages, proof, and stack fit.
              </p>
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <TrackedCTAButton
            destination="linkedin"
            label="Message on LinkedIn"
            sourceKind="thank_you_page"
            className="inline-flex min-h-11 items-center rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#10b981]"
          />
          <TrackedCTAButton
            destination="upwork"
            label="Hire on Upwork"
            sourceKind="thank_you_page"
            className="inline-flex min-h-11 items-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#171717] transition hover:border-[#10b981] hover:text-[#10b981]"
          />
        </div>
      </section>
      </div>
    </>
  );
}
