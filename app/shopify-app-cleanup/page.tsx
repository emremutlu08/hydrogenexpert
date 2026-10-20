import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeader } from "@/components/SectionHeader";
import { TrackedCTALink } from "@/components/TrackedInternalLink";
import {
  APP_CLEANUP_AUDIENCE,
  APP_CLEANUP_COMPARISON,
  APP_CLEANUP_CTA_HREF,
  APP_CLEANUP_FAQS,
  APP_CLEANUP_FINAL_CTA,
  APP_CLEANUP_HERO,
  APP_CLEANUP_PAGE_SEO,
  APP_CLEANUP_PROBLEM,
  APP_CLEANUP_PROMISE,
  APP_CLEANUP_ROUTE,
  APP_CLEANUP_STEPS,
  APP_CLEANUP_TERMS_NOTE,
  APP_CLEANUP_TIERS,
} from "@/lib/app-cleanup-package";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, getSchemaIds } from "@/lib/site";
import {
  asSchemaArray,
  buildBreadcrumbListSchema,
  buildFaqPageSchema,
  buildServiceSchema,
} from "@/lib/structured-data";

export const metadata = buildMetadata(APP_CLEANUP_PAGE_SEO);

const SOURCE_KIND = "app_cleanup_page";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: APP_CLEANUP_HERO.eyebrow, href: APP_CLEANUP_ROUTE },
] as const;

const breadcrumbSchema = buildBreadcrumbListSchema(
  breadcrumbs.map((item) => ({
    name: item.label,
    url: absoluteUrl(item.href),
  })),
);

const primaryButtonClassName =
  "inline-flex min-h-11 items-center rounded-full bg-[#10b981] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#171717]";
const secondaryButtonClassName =
  "inline-flex min-h-11 items-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-[#171717] transition hover:border-[#10b981] hover:text-[#10b981]";

export default function ShopifyAppCleanupPage() {
  const schemaIds = getSchemaIds();
  const serviceSchema = buildServiceSchema({
    name: APP_CLEANUP_HERO.eyebrow,
    url: absoluteUrl(APP_CLEANUP_ROUTE),
    description: APP_CLEANUP_PAGE_SEO.description,
    providerName: "HydrogenExpert",
    providerUrl: absoluteUrl("/"),
    providerId: schemaIds.professionalService,
    serviceType: APP_CLEANUP_HERO.eyebrow,
  });

  return (
    <>
      <JsonLd data={asSchemaArray(breadcrumbSchema, serviceSchema, buildFaqPageSchema(APP_CLEANUP_FAQS))} />
      <div className="page-shell">
        <Breadcrumbs items={breadcrumbs} />

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow={APP_CLEANUP_HERO.eyebrow}
            title={APP_CLEANUP_HERO.title}
            align="center"
            className="mx-auto max-w-5xl"
            titleClassName="page-title mt-3 max-w-4xl"
            headingAs="h1"
          />
          <p className="mx-auto max-w-3xl text-center text-base leading-8 text-neutral-600">
            {APP_CLEANUP_HERO.subhead}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <TrackedCTALink
              href={APP_CLEANUP_CTA_HREF}
              eventName="package_cta_click"
              sourceKind={SOURCE_KIND}
              ctaLabel={APP_CLEANUP_HERO.primaryCta}
              packageName="B1 App Stack Audit"
              className={primaryButtonClassName}
            >
              {APP_CLEANUP_HERO.primaryCta}
            </TrackedCTALink>
            <TrackedCTALink
              href={APP_CLEANUP_CTA_HREF}
              eventName="scope_review_cta_click"
              sourceKind={SOURCE_KIND}
              ctaLabel={APP_CLEANUP_HERO.secondaryCta}
              className={secondaryButtonClassName}
            >
              {APP_CLEANUP_HERO.secondaryCta}
            </TrackedCTALink>
          </div>
        </section>

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="The problem"
            title={APP_CLEANUP_PROBLEM.lead}
            description={APP_CLEANUP_PROBLEM.intro}
            className="max-w-5xl"
          />
          <ul className="grid gap-3 md:grid-cols-2">
            {APP_CLEANUP_PROBLEM.items.map((item) => (
              <li
                key={item}
                className="rounded-[1.2rem] border border-black/8 bg-white p-5 text-sm leading-7 text-neutral-700"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="max-w-3xl text-base leading-8 text-neutral-700">{APP_CLEANUP_PROBLEM.closing}</p>
        </section>

        <section id="tiers" className="surface-card space-y-6">
          <SectionHeader eyebrow="Fixed price" title="Three fixed-price tiers" className="max-w-5xl" />
          <div className="grid gap-4 xl:grid-cols-3">
            {APP_CLEANUP_TIERS.map((tier) => (
              <article
                key={tier.id}
                id={tier.id}
                className="flex flex-col gap-4 rounded-[1.2rem] border border-black/8 bg-white p-6"
              >
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#10b981]">{tier.code}</p>
                <h3 className="text-xl font-semibold text-[#171717]">
                  {tier.code}. {tier.name}
                </h3>
                <div className="space-y-1">
                  {tier.priceLines.map((line) => (
                    <p key={line} className="text-base font-semibold leading-7 text-[#171717]">
                      {line}
                    </p>
                  ))}
                  <p className="text-sm leading-7 text-neutral-600">
                    <strong className="font-semibold text-[#171717]">Timeline:</strong> {tier.timeline}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-[#171717]">{tier.includesLabel}</p>
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-neutral-700">
                    {tier.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                {tier.notes.map((note) => (
                  <p key={note.strong} className="text-sm leading-7 text-neutral-700">
                    <strong className="font-semibold text-[#171717]">{note.strong}</strong> {note.text}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </section>

        <section className="surface-card space-y-6">
          <SectionHeader eyebrow="B1, B2 and B3" title="Compare at a glance" className="max-w-5xl" />
          <div className="overflow-x-auto rounded-[1.2rem] border border-black/8 bg-white">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[#f7f7f7]">
                <tr>
                  <th className="px-5 py-4 font-bold uppercase text-[#0f8a5d]">
                    <span className="sr-only">Feature</span>
                  </th>
                  {APP_CLEANUP_COMPARISON.columns.map((column) => (
                    <th key={column} className="px-5 py-4 font-bold uppercase text-[#0f8a5d]">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {APP_CLEANUP_COMPARISON.rows.map(([label, ...values]) => (
                  <tr key={label} className="border-t border-black/8 align-top">
                    <th scope="row" className="min-w-[13rem] px-5 py-4 font-semibold leading-7 text-neutral-800">
                      {label}
                    </th>
                    {values.map((value, index) => (
                      <td key={`${label}-${index}`} className="min-w-[10rem] px-5 py-4 leading-7 text-neutral-700">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="surface-card space-y-6">
          <SectionHeader eyebrow="Fit" title="Who this is for" className="max-w-5xl" />
          <ul className="grid gap-3 md:grid-cols-2">
            {APP_CLEANUP_AUDIENCE.items.map((item) => (
              <li
                key={item.strong}
                className="rounded-[1.2rem] border border-black/8 bg-white p-5 text-sm leading-7 text-neutral-700"
              >
                <strong className="font-semibold text-[#171717]">{item.strong}</strong> {item.text}
              </li>
            ))}
          </ul>
          <p className="max-w-4xl text-base leading-8 text-neutral-700">
            <strong className="font-semibold text-[#171717]">{APP_CLEANUP_AUDIENCE.notFit.strong}</strong>{" "}
            {APP_CLEANUP_AUDIENCE.notFit.text}
          </p>
        </section>

        <section className="surface-card space-y-6">
          <SectionHeader eyebrow="Process" title="How it works" className="max-w-5xl" />
          <ol className="list-decimal space-y-3 pl-6 text-base leading-8 text-neutral-700">
            {APP_CLEANUP_STEPS.map((step) => (
              <li key={step.strong}>
                <strong className="font-semibold text-[#171717]">{step.strong}</strong> {step.text}
              </li>
            ))}
          </ol>
          <p className="max-w-3xl text-sm leading-7 text-neutral-600">{APP_CLEANUP_TERMS_NOTE}</p>
        </section>

        <section className="surface-card space-y-6">
          <SectionHeader eyebrow="Promise" title="What I promise, and what I do not" className="max-w-5xl" />
          <p className="max-w-3xl text-base leading-8 text-neutral-700">{APP_CLEANUP_PROMISE}</p>
        </section>

        <FaqSection eyebrow={APP_CLEANUP_HERO.eyebrow} title="FAQ" faqs={APP_CLEANUP_FAQS} />

        <section className="hero-card">
          <div className="relative space-y-6">
            <p className="dna-kicker text-[#8df1cb]">Next Step</p>
            <h2 className="font-display text-[2.5rem] leading-[0.96] tracking-[-0.055em] text-white md:text-6xl">
              {APP_CLEANUP_FINAL_CTA.headline}
            </h2>
            <p className="max-w-2xl text-base leading-8 text-neutral-300 md:text-lg">
              {APP_CLEANUP_FINAL_CTA.subtext}
            </p>
            <div className="pt-3">
              <TrackedCTALink
                href={APP_CLEANUP_CTA_HREF}
                eventName="package_cta_click"
                sourceKind={SOURCE_KIND}
                ctaLabel={APP_CLEANUP_FINAL_CTA.label}
                packageName="B1 App Stack Audit"
                className="inline-flex min-h-11 items-center rounded-full bg-[#10b981] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#171717]"
              >
                {APP_CLEANUP_FINAL_CTA.label}
              </TrackedCTALink>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
