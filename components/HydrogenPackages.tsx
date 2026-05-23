import { FaqSection } from "@/components/FaqSection";
import { SectionHeader } from "@/components/SectionHeader";
import { TrackedPackageCTALink } from "@/components/TrackedInternalLink";
import {
  AI_WORKFLOW_COPY,
  AUDIT_REVIEW_OPTIONS,
  HYDROGEN_BUILD_PACKAGES,
  LIQUID_VS_HYDROGEN_DECISION,
  PACKAGE_PRICING_PRINCIPLE,
  PACKAGE_SCOPE_COPY,
  PRICE_DRIVER_ITEMS,
  PRICING_FAQS,
  TWO_K_BUILD_IS,
  TWO_K_BUILD_IS_NOT,
} from "@/lib/hydrogen-packages";

interface HydrogenBuildPackagesProps {
  id?: string;
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  compact?: boolean;
}

export function HydrogenBuildPackages({
  id = "packages",
  className,
  eyebrow = "Build packages",
  title = "Hydrogen build packages priced by project requirements.",
  description = "Fixed-scope storefront packages for brands that want a lean custom Hydrogen build without agency overhead.",
  compact = false,
}: HydrogenBuildPackagesProps) {
  return (
    <section id={id} className={`surface-card scroll-mt-32 space-y-7 ${className ?? ""}`.trim()}>
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={`${description} ${PACKAGE_PRICING_PRINCIPLE}`}
        className="max-w-5xl"
      />

      <div className="grid gap-4 xl:grid-cols-4">
        {HYDROGEN_BUILD_PACKAGES.map((buildPackage) => (
          <article
            key={buildPackage.id}
            className="flex h-full flex-col rounded-[1.15rem] border border-black/8 bg-white p-5 shadow-[0_22px_48px_-42px_rgba(15,23,42,0.22)]"
          >
            <div className="h-1 w-12 rounded-full bg-[#10b981]" />
            <div className="mt-5">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#10b981]">
                {buildPackage.price}
              </p>
              <h3 className="mt-3 text-xl font-semibold leading-7 text-[#171717]">
                {buildPackage.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                <strong className="text-neutral-800">Best for:</strong> {buildPackage.bestFor}
              </p>
            </div>

            <div className="mt-5 grid flex-1 gap-5">
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#0f8a5d]">
                  Includes
                </p>
                <ul className="mt-3 grid gap-2">
                  {buildPackage.includes.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-6 text-neutral-700">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#10b981]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-neutral-500">
                  Not included
                </p>
                <ul className="mt-3 grid gap-2">
                  {buildPackage.notIncluded.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-6 text-neutral-600">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <TrackedPackageCTALink
              href="/contact#fit-review-form"
              packageName={buildPackage.name}
              ctaLabel="Request Scope Review"
              sourceKind="package_cards"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-[#171717] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#10b981]"
            >
              Request Scope Review
            </TrackedPackageCTALink>
          </article>
        ))}
      </div>

      {!compact ? (
        <div className="grid gap-4 lg:grid-cols-2">
          {PACKAGE_SCOPE_COPY.map((paragraph) => (
            <p
              key={paragraph}
              className="rounded-[1.1rem] border border-black/8 bg-[#f6f7f7] p-5 text-sm leading-7 text-neutral-700"
            >
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}
    </section>
  );
}

export function PriceDriversSection() {
  return (
    <section className="surface-card space-y-6">
      <SectionHeader
        eyebrow="Price drivers"
        title="What moves a build from $2K toward $5K or custom."
        description="The quote changes when the work adds more templates, product logic, integrations, migration risk, or launch support."
        className="max-w-5xl"
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {PRICE_DRIVER_ITEMS.map((item) => (
          <div
            key={item}
            className="rounded-[1rem] border border-black/8 bg-white px-4 py-3 text-sm font-semibold leading-6 text-neutral-700"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export function TwoKBuildBoundarySection() {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <div className="card-soft space-y-5">
        <p className="eyebrow">What $2K covers</p>
        <h2 className="subsection-title">What a $2K Hydrogen build is</h2>
        <div className="space-y-4">
          {TWO_K_BUILD_IS.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-neutral-600">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="card-soft space-y-5">
        <p className="eyebrow">Scope boundary</p>
        <h2 className="subsection-title">What it is not</h2>
        <ul className="editorial-list">
          {TWO_K_BUILD_IS_NOT.map((item) => (
            <li key={item}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function LiquidHydrogenDecisionSection() {
  return (
    <section className="surface-card space-y-6">
      <SectionHeader
        eyebrow="Liquid vs Hydrogen"
        title="Should this be Liquid or Hydrogen?"
        description="Small theme-only leads should not be pushed into Hydrogen. The package path starts only when a custom storefront has a clear reason to exist."
        className="max-w-5xl"
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {LIQUID_VS_HYDROGEN_DECISION.map((group) => (
          <article key={group.title} className="rounded-[1.2rem] border border-black/8 bg-white p-5">
            <h3 className="text-lg font-semibold text-[#171717]">{group.title}</h3>
            <ul className="editorial-list mt-4">
              {group.items.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function AiAssistedWorkflowSection() {
  return (
    <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
      <div>
        <p className="eyebrow">AI-assisted workflow</p>
        <h2 className="section-heading mt-3 text-[2.2rem] md:text-[2.8rem]">
          Why the price is lower than a traditional agency rebuild.
        </h2>
      </div>
      <div className="space-y-4">
        {AI_WORKFLOW_COPY.map((paragraph) => (
          <p key={paragraph} className="text-base leading-8 text-neutral-700">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

export function PricingFaqSection() {
  return (
    <FaqSection
      title="Pricing questions buyers usually ask."
      faqs={PRICING_FAQS}
    />
  );
}

export function AuditScopeReviewSection() {
  return (
    <section className="surface-card space-y-6">
      <SectionHeader
        eyebrow="Scope review"
        title="Most small builds do not need a full audit first."
        description="Start with a free scope review. Use a paid review only when SEO, apps, migration, analytics, or unclear requirements could change the estimate."
        className="max-w-5xl"
      />
      <div className="grid gap-4 md:grid-cols-3">
        {AUDIT_REVIEW_OPTIONS.map((option) => (
          <article key={option.name} className="rounded-[1.2rem] border border-black/8 bg-white p-5">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#10b981]">
              {option.price}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-[#171717]">
              {option.name}
            </h3>
            <p className="mt-4 text-sm leading-7 text-neutral-600">{option.bestFor}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
