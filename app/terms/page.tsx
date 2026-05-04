import Link from "next/link";

import { PageIntroSection } from "@/components/PageIntroSection";
import { SectionHeader } from "@/components/SectionHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms | HydrogenExpert",
  description:
    "Basic terms for using the HydrogenExpert professional services website.",
  path: "/terms",
  robots: {
    index: false,
    follow: true,
  },
});

const terms = [
  {
    title: "Professional services site",
    body: "HydrogenExpert is a professional services and lead-generation website for Shopify Hydrogen advisory and implementation work. It is not an ecommerce checkout site.",
  },
  {
    title: "No guaranteed result from browsing",
    body: "The site provides general information, case-study context, and service descriptions. A specific project outcome depends on the storefront, scope, data quality, team readiness, and implementation constraints.",
  },
  {
    title: "Proof and claims",
    body: "The site avoids unsupported testimonials, fake screenshots, invented logos, and unverified metrics. Proof may be limited when client approval or public evidence is incomplete.",
  },
  {
    title: "External links",
    body: "The site links to external profiles and references such as LinkedIn, Upwork, Udemy, Shopify, and client sites. Those services are governed by their own terms and policies.",
  },
] as const;

export default function TermsPage() {
  return (
    <div className="page-shell">
      <PageIntroSection
        eyebrow="Terms"
        title="Website terms"
        description="Basic terms for using the HydrogenExpert website and reading its service content."
        body="Project terms, payment terms, and delivery responsibilities are handled separately inside the actual client engagement."
      />

      <section className="surface-card space-y-6">
        <SectionHeader
          eyebrow="Site use"
          title="The website explains services; it does not create a client engagement by itself."
          description="A project starts only after direct scope, agreement, and channel-specific terms are accepted."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {terms.map((term) => (
            <article key={term.title} className="rounded-[1.2rem] border border-black/8 bg-white p-5">
              <h2 className="text-lg font-semibold text-[#171717]">{term.title}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-600">{term.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card-soft space-y-4">
        <p className="eyebrow">Questions</p>
        <h2 className="subsection-title">Need project-specific terms?</h2>
        <p className="max-w-3xl text-base leading-8 text-neutral-600">
          Start from the{" "}
          <Link href="/contact" className="font-semibold text-[#10b981]">
            contact page
          </Link>{" "}
          with the current store URL and the commercial pressure behind the work.
        </p>
      </section>
    </div>
  );
}
