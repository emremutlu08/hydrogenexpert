import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { HydrogenBuildPackages } from "@/components/HydrogenPackages";
import { JsonLd } from "@/components/JsonLd";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { LiquidCleanupMiniOffer } from "@/components/LiquidCleanupMiniOffer";
import { PageIntroSection } from "@/components/PageIntroSection";
import { SectionHeader } from "@/components/SectionHeader";
import { ScopeReviewBriefTemplates } from "@/components/ScopeReviewBriefTemplates";
import { TrackedCTAButton } from "@/components/TrackedCTAButton";
import { buildMetadata } from "@/lib/seo";
import { OWNER, absoluteUrl } from "@/lib/site";
import { buildBreadcrumbListSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Request a Shopify Hydrogen Scope Review | HydrogenExpert",
  description:
    "Send your Shopify store URL, design status, product count, and needed features to get a direct recommendation on Starter, Standard, Growth, Custom, Liquid cleanup, or no rebuild.",
  path: "/contact",
});

const contactOptions = [
  {
    title: "Hydrogen scope review",
    body: "Best path when you want a direct recommendation on Starter, Standard, Growth, Custom, Liquid cleanup, or no rebuild.",
    href: "#fit-review-form",
  },
  {
    title: "LinkedIn",
    body: "Fastest path for a direct scoping call after the storefront context is clear.",
    href: OWNER.linkedIn,
  },
  {
    title: "Upwork",
    body: "Best path when you want the engagement to start through a public freelance profile.",
    href: OWNER.upwork,
  },
  {
    title: "Case studies",
    body: "Useful when you want to compare your storefront pressure to prior Hydrogen work.",
    href: "/case-studies",
  },
] as const;
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
] as const;
const breadcrumbSchema = buildBreadcrumbListSchema(
  breadcrumbs.map((item) => ({
    name: item.label,
    url: absoluteUrl(item.href),
  })),
);

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <div className="page-shell">
        <Breadcrumbs items={breadcrumbs} />
        <PageIntroSection
          eyebrow="Contact"
          title="Request a Hydrogen scope review."
          description="A useful first message is short: current store URL, design status, product count, needed features, and what needs to ship first."
          body="I will tell you whether the next move looks like Starter, Standard, Growth, Custom, Liquid cleanup, performance or SEO work, support retainer, or no rebuild."
        />

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Start here"
            title="Use the channel that matches the buying motion."
            description="The form is the best path for qualified project context. LinkedIn and Upwork stay available when the buying motion needs them."
          />
          <div className="grid gap-4">
            {contactOptions.map((option) => {
              const external = option.href.startsWith("http");

              return (
                <Link
                  key={option.href}
                  href={option.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="authority-link-card"
                >
                  <p className="authority-link-card__label">Contact path</p>
                  <h2 className="authority-link-card__title">{option.title}</h2>
                  <p className="authority-link-card__body">{option.body}</p>
                </Link>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-3">
            <TrackedCTAButton
              destination="linkedin"
              label="Message on LinkedIn"
              sourceKind="contact_page"
              className="rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#10b981]"
            />
            <TrackedCTAButton
              destination="upwork"
              label="Hire on Upwork"
              sourceKind="contact_page"
              className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#171717] transition hover:border-[#10b981] hover:text-[#10b981]"
            />
          </div>
        </div>

        <LeadCaptureForm sourceKind="contact_page" />
      </section>

      <HydrogenBuildPackages
        title="Use the package path to frame the brief."
        description="The form filters by real project requirements: design readiness, product count, feature needs, budget range, timeline, integrations, and migration risk."
        compact
      />
      <ScopeReviewBriefTemplates />
      <LiquidCleanupMiniOffer />
      </div>
    </>
  );
}
