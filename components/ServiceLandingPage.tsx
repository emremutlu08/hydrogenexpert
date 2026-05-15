import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { PageIntroSection } from "@/components/PageIntroSection";
import { SectionHeader } from "@/components/SectionHeader";
import type { Article } from "@/lib/articles";
import { getPublicArticleBySlugForDate } from "@/lib/articles";
import type { ServicePackage } from "@/lib/services";
import { absoluteUrl, getSchemaIds, OWNER } from "@/lib/site";
import {
  asSchemaArray,
  buildBreadcrumbListSchema,
  buildFaqPageSchema,
  buildServiceSchema,
} from "@/lib/structured-data";

interface ServiceLandingPageProps {
  service: ServicePackage;
}

function getServiceCta(service: ServicePackage) {
  if (service.slug === "shopify-hydrogen-developer") {
    return {
      headline: "Need a senior Shopify Hydrogen developer?",
      subtext:
        "Send your current store URL and the commercial pressure behind the work. I will tell you whether senior Hydrogen development, a fit audit, Liquid cleanup, or no rebuild is the safer next step.",
      primaryLabel: "Request a Hydrogen Fit Review",
      srOnly:
        "Emre Mutlu provides senior Shopify Hydrogen development, audit, migration, SEO, and storefront optimization support for Shopify Plus and growth-stage brands.",
    };
  }

  if (service.slug === "shopify-hydrogen-experts") {
    return {
      headline: "Comparing Shopify Hydrogen experts?",
      subtext:
        "Send your current store URL, the expert or agency options you are comparing, and what feels risky about the rebuild. I will help you decide whether the safer next step is a Fit & Risk Audit, direct senior support, broader agency scope, Liquid cleanup, or no rebuild.",
      primaryLabel: "Request a Hydrogen Fit Review",
      srOnly:
        "Emre Mutlu helps Shopify Plus and growth-stage brands evaluate Shopify Hydrogen experts, production proof, migration risk, SEO, and implementation scope.",
    };
  }

  if (service.slug === "hydrogen-strategy-fit-audit") {
    return {
      headline: "Need a clear Hydrogen decision before rebuild budget moves?",
      subtext:
        "Send your current store URL, what feels slow or limiting, and why Hydrogen is being discussed. I will tell you whether a Fit & Risk Audit, Liquid cleanup, focused optimization, migration scope, or no rebuild is the safer next step.",
      primaryLabel: "Start with a Fit & Risk Audit",
      srOnly:
        "Emre Mutlu provides Shopify Hydrogen Fit & Risk Audits, migration planning, SEO review, and senior storefront advisory for Shopify Plus and growth-stage brands.",
    };
  }

  if (service.slug === "shopify-hydrogen-seo") {
    return {
      headline: "Need a Hydrogen SEO review before traffic or rankings are at risk?",
      subtext:
        "Send the current store URL, planned route changes, and the SEO pressure behind the work. I will tell you whether the safer next step is an SEO audit, migration review, focused cleanup, or no rebuild.",
      primaryLabel: "Request a Hydrogen Fit Review",
      srOnly:
        "Emre Mutlu provides Shopify Hydrogen SEO review, metadata, canonical, sitemap, structured data, and crawlability support for custom Shopify storefronts.",
    };
  }

  if (service.slug === "liquid-to-hydrogen-migration") {
    return {
      headline: "Need a Liquid to Hydrogen migration plan that protects SEO and launch stability?",
      subtext:
        "Send the current theme, store URL, and what feels limiting. I will tell you whether migration, Liquid cleanup, focused optimization, or no rebuild is the safer next step.",
      primaryLabel: "Request a Hydrogen Fit Review",
      srOnly:
        "Emre Mutlu provides Liquid to Hydrogen migration planning, route mapping, SEO preservation, and senior storefront implementation support.",
    };
  }

  if (service.slug === "shopify-hydrogen-cost") {
    return {
      headline: "Need a realistic Hydrogen cost range before scope expands?",
      subtext:
        "Send the current store URL, rough scope, timeline pressure, and budget range. I will tell you whether an audit, cleanup sprint, developer support, agency scope, or delayed rebuild is the safer next step.",
      primaryLabel: "Request a Hydrogen Fit Review",
      srOnly:
        "Emre Mutlu provides Shopify Hydrogen cost planning, fit audits, rebuild scope review, and senior storefront advisory for Shopify Plus and growth-stage brands.",
    };
  }

  return {
    headline: "Need senior Hydrogen support for this storefront decision?",
    subtext:
      "Send the current store URL and the commercial pressure behind the work. I will help you choose the safer next step: audit, migration, custom build, optimization, support, Liquid cleanup, or no rebuild.",
    primaryLabel: "Request a Hydrogen Fit Review",
    srOnly: `${OWNER.name} provides senior Shopify Hydrogen service support for Shopify Plus and growth-stage storefronts.`,
  };
}

function isArticle(article: Article | null): article is Article {
  return article !== null;
}

function formatShortAnswerAudience(bestFor: string) {
  const normalized = bestFor.trim().replace(/\.$/, "");

  return normalized.charAt(0).toLowerCase() + normalized.slice(1);
}

export function ServiceLandingPage({ service }: ServiceLandingPageProps) {
  const schemaIds = getSchemaIds();
  const serviceCta = getServiceCta(service);
  const publicDeveloperArticle = getPublicArticleBySlugForDate("how-to-hire-shopify-hydrogen-developer");
  const publicExperiencedArticle = getPublicArticleBySlugForDate("experienced-shopify-hydrogen-developers");
  const publicExpertsArticle = getPublicArticleBySlugForDate("shopify-hydrogen-experts-production-experience");
  const publicCostArticle = getPublicArticleBySlugForDate(
    "shopify-hydrogen-development-cost-developer-agency-audit",
  );
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
    providerUrl: absoluteUrl("/"),
    providerId: schemaIds.professionalService,
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

        <section className="surface-card space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#10b981]">
            Short answer
          </p>
          <p className="max-w-4xl text-lg leading-8 text-neutral-700">
            {service.name} is the right next step for {formatShortAnswerAudience(service.bestFor)}. If that pressure is not visible yet, start with a narrower audit before buying a full Hydrogen scope.
          </p>
        </section>

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
            description="A quick view of the practical entry point, timeline, output, and qualification signals before a buyer commits to the next step."
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

        {service.slug === "shopify-hydrogen-developer" ? (
          <section className="surface-card space-y-6">
            <SectionHeader
              eyebrow="Hiring decision"
              title="When to hire Shopify Hydrogen developers instead of a general Shopify developer"
              description="Hiring Shopify Hydrogen developers makes sense when the work is closer to application engineering than theme customization."
              className="max-w-5xl"
            />
            <div className="max-w-4xl space-y-4 text-base leading-8 text-neutral-700">
              <p>
                A general Shopify developer can usually handle Liquid sections, app setup, theme
                edits, and standard storefront changes. A Hydrogen developer is the better fit when
                the storefront needs React, Remix, Storefront API work, server-rendered product
                content, custom routing, SEO-safe migration planning, cart logic, analytics
                behavior, and launch QA in one system.
              </p>
              <p>
                For growth-stage or Shopify Plus brands, the real hiring question is not whether
                someone can write React. It is whether the developer can protect revenue, SEO,
                product data, checkout handoff, and merchant maintainability after launch.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                "Custom storefront architecture, not theme edits",
                "Storefront API, routing, SEO, and cart logic in one scope",
                "Launch safety for Shopify Plus and growth-stage brands",
              ].map((item) => (
                <article key={item} className="rounded-[1.2rem] border border-black/8 bg-white p-5">
                  <div className="h-1 w-10 rounded-full bg-[#10b981]" />
                  <p className="mt-4 text-sm font-semibold leading-7 text-neutral-800">{item}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="surface-card space-y-6">
          <SectionHeader
            eyebrow="Decision logic"
            title="What the signal means for the next move."
            description="Compare the storefront signal, stronger move, and caution before deciding how much Hydrogen scope to buy."
            className="max-w-5xl"
          />
          <div className="overflow-x-auto rounded-[1.2rem] border border-black/8 bg-white">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[#f7f7f7]">
                <tr>
                  <th className="px-5 py-4 font-bold uppercase tracking-[0.16em] text-[#0f8a5d]">
                    Signal
                  </th>
                  <th className="px-5 py-4 font-bold uppercase tracking-[0.16em] text-[#0f8a5d]">
                    Stronger move
                  </th>
                  <th className="px-5 py-4 font-bold uppercase tracking-[0.16em] text-[#0f8a5d]">
                    Caution
                  </th>
                </tr>
              </thead>
              <tbody>
                {service.decisionTable.map((row) => (
                  <tr key={row.signal} className="border-t border-black/8 align-top">
                    <td className="min-w-[14rem] px-5 py-4 leading-7 text-neutral-700">
                      {row.signal}
                    </td>
                    <td className="min-w-[14rem] px-5 py-4 leading-7 text-neutral-700">
                      {row.strongerMove}
                    </td>
                    <td className="min-w-[14rem] px-5 py-4 leading-7 text-neutral-700">
                      {row.caution}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            description="The scope stays tied to visible storefront pressure, proof, and maintenance reality before a rebuild gets bigger than it should."
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

        {service.slug === "shopify-hydrogen-developer" ? (
          <section className="surface-card space-y-6">
            <SectionHeader
              eyebrow="Production proof"
              title="Shopify Hydrogen work connected to real storefronts"
              description="A compact proof layer linked to the full case studies, without adding unsupported testimonials or invented metrics."
              className="max-w-5xl"
            />
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "EveShop",
                  body:
                    "Frontend team lead on Turkey's first production Shopify Hydrogen storefront for a nationwide cosmetics and personal care retailer, referenced on HydrogenExpert as production-scale work with 400K+ users.",
                  href: "/case-studies/eveshop-shopify-hydrogen",
                  label: "Read the EveShop case study",
                },
                {
                  title: "Bayam Jewelry",
                  body:
                    "Shopify Hydrogen storefront for a luxury jewelry and watch catalog where premium discovery, collection context, and responsive storefront presentation mattered.",
                  href: "/case-studies/bayam-jewelry-shopify-hydrogen",
                  label: "Read the Bayam Jewelry case study",
                },
                {
                  title: "Rebel Bunny Matcha",
                  body:
                    "Custom Hydrogen storefront work across DTC, partner/wholesale, and education paths, with public 5.0 Upwork feedback shown on the case study.",
                  href: "/case-studies/rebel-bunny-shopify-hydrogen",
                  label: "Read the Rebel Bunny case study",
                },
              ].map((item) => (
                <article key={item.title} className="rounded-[1.2rem] border border-black/8 bg-white p-5">
                  <h3 className="text-lg font-semibold text-[#171717]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{item.body}</p>
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex min-h-11 items-center rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-[#171717] transition hover:border-[#10b981] hover:text-[#10b981]"
                  >
                    {item.label}
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {service.slug === "hydrogen-strategy-fit-audit" ? (
          <>
            <section className="surface-card space-y-6">
              <SectionHeader
                eyebrow="Audit outcome"
                title="What you know at the end"
                description="The audit is a productized paid diagnostic with a written memo and Loom walkthrough."
                className="max-w-5xl"
              />
              <ul className="editorial-list">
                {[
                  "Whether to stay on Liquid, refactor Liquid, optimize the current storefront, migrate to Hydrogen, or delay the rebuild.",
                  "Which storefront constraints are real commercial blockers and which are just technical preferences.",
                  "Where SEO, analytics, routing, app-stack, and checkout-handoff risks could affect launch.",
                  "What scope, budget range, and next step are commercially sane.",
                ].map((item) => (
                  <li key={item}><span>{item}</span></li>
                ))}
              </ul>
            </section>

            <section className="grid gap-6 lg:grid-cols-2">
              <div className="card-soft space-y-5">
                <p className="eyebrow">Inputs</p>
                <h2 className="subsection-title">What I need before the audit</h2>
                <ul className="editorial-list">
                  {[
                    "Current store URL and current storefront stack.",
                    "Main business reason Hydrogen is being discussed.",
                    "Known performance, SEO, conversion, or app-stack problems.",
                    "Planned redesign, migration, or launch timeline.",
                    "Optional analytics, Search Console, or theme/app context if available.",
                  ].map((item) => (
                    <li key={item}><span>{item}</span></li>
                  ))}
                </ul>
              </div>

              <div className="card-soft space-y-5">
                <p className="eyebrow">Boundary</p>
                <h2 className="subsection-title">What the audit does not include</h2>
                <ul className="editorial-list">
                  {[
                    "Full storefront implementation.",
                    "Full UX redesign.",
                    "App replacement project.",
                    "Analytics rebuild.",
                    "Guaranteed ranking or conversion lift.",
                    "A recommendation to use Hydrogen by default.",
                  ].map((item) => (
                    <li key={item}><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="surface-card space-y-6">
              <SectionHeader
                eyebrow="Decision memo preview"
                title="The written memo should answer these questions"
                description="The memo turns the storefront situation into a commercially sane next step."
                className="max-w-5xl"
              />
              <ol className="grid gap-3">
                {[
                  "What is the real storefront constraint?",
                  "Can Liquid still solve it?",
                  "What would Hydrogen improve?",
                  "What would Hydrogen make more expensive?",
                  "What SEO, route, analytics, and data risks matter?",
                  "What budget and timeline range is realistic?",
                  "What is the safest next scope?",
                ].map((item, index) => (
                  <li key={item} className="rounded-[1.1rem] border border-black/8 bg-white p-4 text-sm leading-7 text-neutral-700">
                    <span className="mr-3 font-bold text-[#0f8a5d]">{index + 1}.</span>
                    {item}
                  </li>
                ))}
              </ol>
            </section>
          </>
        ) : null}

        {service.slug === "shopify-hydrogen-developer" &&
        (publicDeveloperArticle || publicExperiencedArticle || publicExpertsArticle) ? (
          <section className="card-soft space-y-5">
            <div className="max-w-3xl">
              <p className="eyebrow">Published articles</p>
              <h2 className="subsection-title mt-3">Evergreen hiring guides once they are public.</h2>
            </div>
            <div className="authority-links">
              {[publicDeveloperArticle, publicExperiencedArticle, publicExpertsArticle].filter(isArticle).map((article) => (
                <Link key={article.slug} href={`/articles/${article.slug}`} className="authority-link-card">
                  <p className="authority-link-card__label">{article.category}</p>
                  <h3 className="authority-link-card__title">{article.title}</h3>
                  <p className="authority-link-card__body">{article.description}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        {service.slug === "shopify-hydrogen-experts" &&
        (publicExpertsArticle || publicExperiencedArticle || publicDeveloperArticle) ? (
          <section className="card-soft space-y-5">
            <div className="max-w-3xl">
              <p className="eyebrow">Published articles</p>
              <h2 className="subsection-title mt-3">Evaluation guides for expert-search intent.</h2>
            </div>
            <div className="authority-links">
              {[publicExpertsArticle, publicExperiencedArticle, publicDeveloperArticle].filter(isArticle).map((article) => (
                <Link key={article.slug} href={`/articles/${article.slug}`} className="authority-link-card">
                  <p className="authority-link-card__label">{article.category}</p>
                  <h3 className="authority-link-card__title">{article.title}</h3>
                  <p className="authority-link-card__body">{article.description}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        {service.slug === "hydrogen-strategy-fit-audit" && publicCostArticle ? (
          <section className="card-soft space-y-5">
            <div className="max-w-3xl">
              <p className="eyebrow">Published article</p>
              <h2 className="subsection-title mt-3">Cost guidance once it is public.</h2>
            </div>
            <Link href={`/articles/${publicCostArticle.slug}`} className="authority-link-card">
              <p className="authority-link-card__label">{publicCostArticle.category}</p>
              <h3 className="authority-link-card__title">{publicCostArticle.title}</h3>
              <p className="authority-link-card__body">{publicCostArticle.description}</p>
            </Link>
          </section>
        ) : null}

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
          title="Common buyer questions."
          faqs={service.faq}
        />

        <CTASection
          headline={serviceCta.headline}
          subtext={serviceCta.subtext}
          sourceKind={`service:${service.slug}`}
          primaryLabel={serviceCta.primaryLabel}
        />

        <p className="sr-only">
          {serviceCta.srOnly}
        </p>
      </div>
    </>
  );
}
