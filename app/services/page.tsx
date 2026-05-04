import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PageIntroSection } from "@/components/PageIntroSection";
import { SectionHeader } from "@/components/SectionHeader";
import { buildMetadata } from "@/lib/seo";
import { SECONDARY_SERVICE, SERVICE_PACKAGES } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";
import {
  asSchemaArray,
  buildBreadcrumbListSchema,
  buildServiceSchema,
} from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Shopify Hydrogen Services for Plus Brands | Emre Mutlu",
  description:
    "Hydrogen-first Shopify services for audits, Liquid to Hydrogen migrations, custom storefront development, performance, SEO, UX, and support retainers.",
  path: "/services",
});

export default function ServicesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
  ] as const;
  const breadcrumbSchema = buildBreadcrumbListSchema(
    breadcrumbs.map((item) => ({
      name: item.label,
      url: absoluteUrl(item.href),
    })),
  );
  const serviceSchemas = SERVICE_PACKAGES.map((servicePackage) =>
    buildServiceSchema({
      name: servicePackage.name,
      url: absoluteUrl(servicePackage.pagePath),
      description: servicePackage.metaDescription,
      providerName: "HydrogenExpert",
      serviceType: servicePackage.name,
    }),
  );

  return (
    <>
      <JsonLd data={asSchemaArray(breadcrumbSchema, ...serviceSchemas)} />
      <div className="page-shell">
        <Breadcrumbs items={breadcrumbs} />
        <PageIntroSection
          eyebrow="Hydrogen-first services"
          title="Shopify Hydrogen services without the agency maze"
          description="Choose the commercial path that matches the search: agency alternative, developer, audit, migration, SEO, cost, build, optimization, or support."
          body="This is not a broad Shopify agency service list. The work is centered on Shopify Hydrogen, custom storefront decisions, and the honest question behind every serious rebuild: should this be Hydrogen, Liquid, or no rebuild at all?"
        />

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="hero-card space-y-5">
          <p className="dna-kicker text-[#8df1cb]">Positioning</p>
          <h2 className="font-display text-[2.4rem] leading-[0.95] tracking-[-0.055em] text-white md:text-[3.4rem]">
            Hydrogen is powerful. That does not mean every store should use it.
          </h2>
          <p className="text-base leading-8 text-neutral-300">
            I help Shopify teams decide when Hydrogen is worth the operational cost, then scope
            and ship the work directly. If Liquid is faster, safer, and better for the business,
            I will say that before you spend rebuild money.
          </p>
        </div>

        <div className="card-soft space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#10b981]">
            How this differs from an agency page
          </p>
          <ul className="editorial-list">
            <li><span>No generic “full-service ecommerce” positioning.</span></li>
            <li><span>No automatic push toward headless if Liquid can solve the problem.</span></li>
            <li><span>No account manager layer between strategy and implementation.</span></li>
            <li><span>Every service is tied to a storefront decision, migration, build, optimization, or support need.</span></li>
          </ul>
        </div>
      </section>

      <section className="surface-card space-y-7">
        <SectionHeader
          eyebrow="Core services"
          title="Commercial paths for serious Hydrogen decisions"
          description="Start with the buyer intent: agency comparison, developer help, audit, migration, SEO, cost, custom build, optimization, or ongoing support."
          className="max-w-4xl"
        />

        <div className="grid gap-4">
          {SERVICE_PACKAGES.map((servicePackage, index) => (
            <article
              id={servicePackage.slug}
              key={servicePackage.slug}
              className="scroll-mt-32 rounded-[1.25rem] border border-black/8 bg-white p-5 shadow-[0_22px_48px_-42px_rgba(15,23,42,0.22)] md:p-7"
            >
              <div className="h-1 w-12 rounded-full bg-[#10b981]" />
              <div className="mt-5 grid gap-6 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#10b981]/25 bg-[#10b981]/10 text-xs font-bold text-[#0f8a5d]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#10b981]">
                      {servicePackage.name}
                    </p>
                  </div>
                  <h2 className="mt-4 font-display text-[1.75rem] leading-[1] tracking-[-0.045em] text-black md:text-[2.2rem]">
                    <Link href={servicePackage.pagePath} className="transition hover:text-[#10b981]">
                      {servicePackage.title}
                    </Link>
                  </h2>
                  <p className="mt-4 max-w-2xl text-[0.98rem] leading-8 text-neutral-600">
                    {servicePackage.summary}
                  </p>
                  <Link
                    href={servicePackage.pagePath}
                    className="mt-5 inline-flex rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-[#171717] transition hover:border-[#10b981] hover:text-[#10b981]"
                  >
                    View service page
                  </Link>
                </div>

                <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] xl:gap-7">
                  <div className="border-l border-[#10b981]/40 pl-5">
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#10b981]">
                      Best for
                    </p>
                    <p className="mt-3 text-sm leading-7 text-neutral-600">
                      {servicePackage.bestFor}
                    </p>
                  </div>

                  <div>
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#10b981]">
                      Includes
                    </p>
                    <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                      {servicePackage.deliverables.map((deliverable) => (
                        <li key={deliverable} className="flex gap-3 border-t border-black/8 pt-3 first:border-t-0 first:pt-0 sm:[&:nth-child(2)]:border-t-0 sm:[&:nth-child(2)]:pt-0 lg:[&:nth-child(2)]:border-t lg:[&:nth-child(2)]:pt-3 xl:[&:nth-child(2)]:border-t-0 xl:[&:nth-child(2)]:pt-0">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#10b981]" />
                          <span className="text-sm leading-7 text-neutral-700">
                            {deliverable}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="card-soft grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="eyebrow">Secondary service</p>
          <h2 className="subsection-title mt-3">{SECONDARY_SERVICE.title}</h2>
        </div>
        <div>
          <p className="text-base leading-8 text-neutral-600">
            {SECONDARY_SERVICE.body}
          </p>
          <ul className="editorial-list mt-5">
            {SECONDARY_SERVICE.bullets.map((bullet) => (
              <li key={bullet}>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        subtext="Send the current store URL and what feels slow, limiting, or expensive to change. I will tell you whether the next move is an audit, a Liquid refactor, Hydrogen migration, custom build, optimization pass, or no rebuild."
        sourceKind="services_cta"
      />
      </div>
    </>
  );
}
