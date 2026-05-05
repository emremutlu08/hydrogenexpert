import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { PageIntroSection } from "@/components/PageIntroSection";
import { SectionHeader } from "@/components/SectionHeader";
import { TrackedCTAButton } from "@/components/TrackedCTAButton";
import { buildMetadata } from "@/lib/seo";
import { OWNER, absoluteUrl } from "@/lib/site";
import { buildBreadcrumbListSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Contact Emre Mutlu | HydrogenExpert",
  description:
    "Contact Emre Mutlu for Shopify Hydrogen audits, migrations, custom storefront development, performance work, and support.",
  path: "/contact",
});

const contactOptions = [
  {
    title: "LinkedIn",
    body: "Fastest path for a direct conversation and quick storefront context.",
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
          title="Send the storefront context first."
          description="A useful first message is short: current store URL, what feels slow or limiting, and why Hydrogen is being discussed."
          body="I will tell you whether the next move looks like Liquid cleanup, a Hydrogen audit, migration scope, custom build, performance work, or no rebuild."
        />

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Start here"
            title="Use the channel that matches the buying motion."
            description="No intake maze. Just enough context to make the next step honest."
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
      </div>
    </>
  );
}
