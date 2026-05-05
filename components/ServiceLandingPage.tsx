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
            eyebrow="Offer snapshot"
            title="What a buyer can actually start with."
            description="This keeps the page tied to a purchasable service path instead of only explaining the technical topic."
            className="max-w-5xl"
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Entry point", service.offerSnapshot.entryPoint],
              ["Typical timeline", service.offerSnapshot.typicalTimeline],
              ["Expected output", service.offerSnapshot.expectedOutput],
              ["Qualification", service.offerSnapshot.qualification],
            ].map(([label, value]) => (
              <article key={label} className="rounded-[1.2rem] border border-black/8 bg-white p-5">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#10b981]">
                  {label}
                </p>
                <p className="mt-3 text-sm leading-7 text-neutral-700">{value}</p>
              </article>
            ))}
          </div>
        </section>

        {service.pricingRows?.length ? (
          <section className="surface-card space-y-6">
            <SectionHeader
              eyebrow="Budget ranges"
              title="Start the cost conversation with a real range."
              description="Ranges are planning guidance for early qualification, not a final quote. The actual scope depends on design complexity, catalog behavior, integrations, SEO risk, analytics, QA, and launch support."
              className="max-w-5xl"
            />
            <div className="overflow-hidden rounded-[1.2rem] border border-black/8 bg-white">
              {service.pricingRows.map((row) => (
                <div
                  key={row.engagement}
                  className="grid gap-2 border-t border-black/8 p-4 first:border-t-0 sm:grid-cols-[1fr_auto] sm:items-center"
                >
                  <p className="text-sm font-semibold text-neutral-800">{row.engagement}</p>
                  <p className="text-sm font-bold text-[#0f8a5d]">{row.range}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {service.auditOffer ? (
          <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="hero-card space-y-5">
              <p className="dna-kicker text-[#8df1cb]">Productized audit</p>
              <h2 className="font-display text-[2.25rem] leading-[1] text-white md:text-[3rem]">
                {service.auditOffer.name}
              </h2>
              <div className="grid gap-3 text-sm leading-7 text-neutral-200">
                <p><strong className="text-white">Price:</strong> {service.auditOffer.price}</p>
                <p><strong className="text-white">Timeline:</strong> {service.auditOffer.timeline}</p>
                <p><strong className="text-white">Format:</strong> {service.auditOffer.format}</p>
              </div>
            </div>
            <div className="card-soft space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#10b981]">
                Possible recommendations
              </p>
              <ul className="editorial-list">
                {service.auditOffer.outcomes.map((outcome) => (
                  <li key={outcome}>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        <section className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="sticky top-28">
            <p className="eyebrow">{service.uniqueSection.eyebrow}</p>
            <h2 className="section-heading mt-3 text-[2.35rem] md:text-[3rem]">
              {service.uniqueSection.title}
            </h2>
          </div>
          <div className="space-y-4">
            {service.uniqueSection.body.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-neutral-700">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Decision logic"
            title="What the signal means for the next move."
            description="Use this table to keep the page tied to a real buyer decision instead of a generic service pitch."
            className="max-w-5xl"
          />
          <div className="grid gap-4">
            {service.decisionTable.map((row) => (
              <article
                key={row.signal}
                className="grid gap-4 rounded-[1.2rem] border border-black/8 bg-white p-5 md:grid-cols-[1fr_1fr_1fr]"
              >
                <div>
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#10b981]">
                    Signal
                  </p>
                  <p className="mt-3 text-sm leading-7 text-neutral-700">{row.signal}</p>
                </div>
                <div>
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#10b981]">
                    Stronger move
                  </p>
                  <p className="mt-3 text-sm leading-7 text-neutral-700">{row.strongerMove}</p>
                </div>
                <div>
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#10b981]">
                    Caution
                  </p>
                  <p className="mt-3 text-sm leading-7 text-neutral-700">{row.caution}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {service.wrongFitNotes?.length ? (
          <section className="card-soft grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="eyebrow">Wrong fit</p>
              <h2 className="subsection-title mt-3">Hydrogen may be the wrong investment if...</h2>
            </div>
            <ul className="editorial-list">
              {service.wrongFitNotes.map((note) => (
                <li key={note}>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

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
            <p className="eyebrow">Contextual proof</p>
            <h2 className="subsection-title mt-3">Where the decision connects to real work.</h2>
          </div>
          <div className="authority-links">
            {service.contextualLinks.map((item) => (
              <Link key={item.href} href={item.href} className="authority-link-card">
                <p className="authority-link-card__label">Proof path</p>
                <h3 className="authority-link-card__title">{item.label}</h3>
                <p className="authority-link-card__body">{item.note}</p>
              </Link>
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
