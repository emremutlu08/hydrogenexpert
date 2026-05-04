import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { PageIntroSection } from "@/components/PageIntroSection";
import { SectionHeader } from "@/components/SectionHeader";
import type { ServicePackage } from "@/lib/services";
import { absoluteUrl, OWNER } from "@/lib/site";
import {
  asSchemaArray,
  buildBreadcrumbListSchema,
  buildFaqPageSchema,
  buildServiceSchema,
} from "@/lib/structured-data";

interface ServiceLandingPageProps {
  service: ServicePackage;
}

export function ServiceLandingPage({ service }: ServiceLandingPageProps) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.name, href: service.pagePath },
  ] as const;
  const breadcrumbSchema = buildBreadcrumbListSchema(
    breadcrumbs.map((item) => ({
      name: item.label,
      url: absoluteUrl(item.href),
    })),
  );
  const serviceSchema = buildServiceSchema({
    name: service.name,
    url: absoluteUrl(service.pagePath),
    description: service.metaDescription,
    providerName: "HydrogenExpert",
    serviceType: service.name,
  });
  const faqSchema = buildFaqPageSchema(service.faq);

  return (
    <>
      <JsonLd data={asSchemaArray(serviceSchema, breadcrumbSchema, faqSchema)} />
      <div className="page-shell">
        <Breadcrumbs items={breadcrumbs} />

        <PageIntroSection
          eyebrow="Shopify Hydrogen service"
          title={service.heroTitle}
          description={service.summary}
          body={service.commercialIntent}
        />

        <section className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="hero-card space-y-5">
            <p className="dna-kicker text-[#8df1cb]">Best for</p>
            <h2 className="font-display text-[2.35rem] leading-[0.98] text-white md:text-[3.2rem]">
              {service.title}
            </h2>
            <p className="text-base leading-8 text-neutral-300">{service.bestFor}</p>
          </div>

          <div className="card-soft space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#10b981]">
              What this includes
            </p>
            <ul className="editorial-list">
              {service.deliverables.map((deliverable) => (
                <li key={deliverable}>
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Proof-led scoping"
            title="What stays grounded before the work starts."
            description="The page is specific enough for commercial search, but the work stays honest about fit, proof, and maintenance cost."
            className="max-w-5xl"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {service.proofNotes.map((note) => (
              <article key={note} className="rounded-[1.2rem] border border-black/8 bg-white p-5">
                <div className="h-1 w-10 rounded-full bg-[#10b981]" />
                <p className="mt-4 text-sm leading-7 text-neutral-700">{note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="card-soft space-y-5">
          <div className="max-w-3xl">
            <p className="eyebrow">Related paths</p>
            <h2 className="subsection-title mt-3">Where this connects across HydrogenExpert.</h2>
          </div>
          <div className="authority-links">
            {service.relatedLinks.map((item) => (
              <Link key={item.href} href={item.href} className="authority-link-card">
                <p className="authority-link-card__label">HydrogenExpert</p>
                <h3 className="authority-link-card__title">{item.label}</h3>
                <p className="authority-link-card__body">{item.note}</p>
              </Link>
            ))}
          </div>
        </section>

        <FaqSection
          title={`Questions about ${service.name.toLowerCase()}.`}
          faqs={service.faq}
        />

        <CTASection
          primaryLink="upwork"
          headline={`Need ${service.name.toLowerCase()} from a senior Hydrogen developer?`}
          subtext={`Send the current store URL and the commercial pressure behind the work. I will tell you whether ${service.name.toLowerCase()} is the right next move, or whether a narrower Shopify path is safer.`}
          sourceKind={`service:${service.slug}`}
        />

        <p className="sr-only">
          {OWNER.name} provides {service.name.toLowerCase()} for Shopify Hydrogen and Shopify Plus storefronts.
        </p>
      </div>
    </>
  );
}
