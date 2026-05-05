import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PageIntroSection } from "@/components/PageIntroSection";
import { SectionHeader } from "@/components/SectionHeader";
import type { DecisionPageData } from "@/lib/decision-pages";
import { absoluteUrl } from "@/lib/site";
import {
  asSchemaArray,
  buildBreadcrumbListSchema,
  buildServiceSchema,
} from "@/lib/structured-data";

interface DecisionLandingPageProps {
  page: DecisionPageData;
  parent?: {
    href: string;
    label: string;
  };
}

export function DecisionLandingPage({
  page,
  parent = { href: "/services", label: "Services" },
}: DecisionLandingPageProps) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: parent.label, href: parent.href },
    { label: page.navLabel, href: page.path },
  ] as const;
  const breadcrumbSchema = buildBreadcrumbListSchema(
    breadcrumbs.map((item) => ({
      name: item.label,
      url: absoluteUrl(item.href),
    })),
  );
  const serviceSchema = buildServiceSchema({
    name: page.navLabel,
    url: absoluteUrl(page.path),
    description: page.metaDescription,
    providerName: "HydrogenExpert",
    serviceType: page.navLabel,
  });

  return (
    <>
      <JsonLd data={asSchemaArray(serviceSchema, breadcrumbSchema)} />
      <div className="page-shell">
        <Breadcrumbs items={breadcrumbs} />
        <PageIntroSection
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
          body={page.body}
        />

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="hero-card space-y-5">
            <p className="dna-kicker text-[#8df1cb]">Positioning</p>
            <h2 className="font-display text-[2.25rem] leading-[1] text-white md:text-[3rem]">
              Source-grounded, proof-led, and not sold as a default upgrade.
            </h2>
            <p className="text-base leading-8 text-neutral-300">
              Platform claims are grounded in Shopify developer documentation. Commercial judgment is
              Emre&apos;s operator interpretation, and proof claims stay tied to approved case context.
            </p>
          </div>
          <div className="card-soft space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#10b981]">
              Decision filter
            </p>
            <ul className="editorial-list">
              {page.decisionRows.map((row) => (
                <li key={row.signal}>
                  <span>{row.signal}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {page.sections.map((section) => (
          <section
            key={section.title}
            className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start"
          >
            <div>
              <p className="eyebrow">{section.eyebrow}</p>
              <h2 className="section-heading mt-3 text-[2.35rem] md:text-[3rem]">
                {section.title}
              </h2>
            </div>
            <div className="space-y-4">
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-neutral-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Decision table"
            title="When this page is the right next step."
            description="Each row separates the commercial signal, the recommended move, and the caution that keeps Hydrogen from becoming a default answer."
            className="max-w-5xl"
          />
          <div className="grid gap-4">
            {page.decisionRows.map((row) => (
              <article
                key={row.signal}
                className="grid gap-4 rounded-[1.2rem] border border-black/8 bg-white p-5 md:grid-cols-3"
              >
                <div>
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#10b981]">
                    Signal
                  </p>
                  <p className="mt-3 text-sm leading-7 text-neutral-700">{row.signal}</p>
                </div>
                <div>
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#10b981]">
                    Move
                  </p>
                  <p className="mt-3 text-sm leading-7 text-neutral-700">{row.move}</p>
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

        <section className="card-soft space-y-5">
          <div className="max-w-3xl">
            <p className="eyebrow">Related paths</p>
            <h2 className="subsection-title mt-3">Where to go next.</h2>
          </div>
          <div className="authority-links">
            {page.links.map((item) => (
              <Link key={item.href} href={item.href} className="authority-link-card">
                <p className="authority-link-card__label">HydrogenExpert</p>
                <h3 className="authority-link-card__title">{item.label}</h3>
                <p className="authority-link-card__body">{item.note}</p>
              </Link>
            ))}
          </div>
        </section>

        <CTASection
          headline={page.cta.headline}
          subtext={page.cta.subtext}
          sourceKind={page.cta.sourceKind}
        />
      </div>
    </>
  );
}
