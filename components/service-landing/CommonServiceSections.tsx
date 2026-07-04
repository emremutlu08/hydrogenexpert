import Link from "next/link";

import { SectionHeader } from "@/components/SectionHeader";
import type { ServicePackage } from "@/features/services/registry";

function formatShortAnswerAudience(bestFor: string) {
  const normalized = bestFor.trim().replace(/\.$/, "");

  return normalized.charAt(0).toLowerCase() + normalized.slice(1);
}

export function ShortAnswerSection({ service }: { service: ServicePackage }) {
  return (
    <section className="surface-card space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#10b981]">
        Short answer
      </p>
      <p className="max-w-4xl text-lg leading-8 text-neutral-700">
        {service.name} is the right next step for {formatShortAnswerAudience(service.bestFor)}. If
        that pressure is not visible yet, start with a narrower scope review before buying a full
        Hydrogen scope.
      </p>
    </section>
  );
}

export function ServiceInclusionSection({ service }: { service: ServicePackage }) {
  return (
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
  );
}

export function OfferSnapshotSection({ service }: { service: ServicePackage }) {
  return (
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
  );
}

export function PricingRowsSection({ service }: { service: ServicePackage }) {
  if (!service.pricingRows?.length) {
    return null;
  }

  return (
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
  );
}

export function AuditOfferSection({ service }: { service: ServicePackage }) {
  if (!service.auditOffer) {
    return null;
  }

  return (
    <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="hero-card space-y-5">
        <p className="dna-kicker text-[#8df1cb]">Paid review</p>
        <h2 className="font-display text-[2.25rem] leading-[1] text-white md:text-[3rem]">
          {service.auditOffer.name}
        </h2>
        <div className="grid gap-3 text-sm leading-7 text-neutral-200">
          <p>
            <strong className="text-white">Price:</strong> {service.auditOffer.price}
          </p>
          <p>
            <strong className="text-white">Timeline:</strong> {service.auditOffer.timeline}
          </p>
          <p>
            <strong className="text-white">Format:</strong> {service.auditOffer.format}
          </p>
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
  );
}

export function UniqueServiceSection({ service }: { service: ServicePackage }) {
  return (
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
  );
}

export function DecisionLogicSection({ service }: { service: ServicePackage }) {
  return (
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
  );
}

export function HireFitSection({ service }: { service: ServicePackage }) {
  if (!service.hireFitNotes?.length) {
    return null;
  }

  return (
    <section className="card-soft grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
      <div>
        <p className="eyebrow">When to hire me</p>
        <h2 className="subsection-title mt-3">Use this path when senior ownership lowers risk.</h2>
      </div>
      <ul className="editorial-list">
        {service.hireFitNotes.map((note) => (
          <li key={note}>
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function WrongFitSection({ service }: { service: ServicePackage }) {
  if (!service.wrongFitNotes?.length) {
    return null;
  }

  return (
    <section className="card-soft grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
      <div>
        <p className="eyebrow">Wrong fit</p>
        <h2 className="subsection-title mt-3">When not to hire me for this path.</h2>
      </div>
      <ul className="editorial-list">
        {service.wrongFitNotes.map((note) => (
          <li key={note}>
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ProofNotesSection({ service }: { service: ServicePackage }) {
  return (
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
  );
}

export function ContextualProofSection({ service }: { service: ServicePackage }) {
  return (
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
  );
}

export function RelatedPathsSection({ service }: { service: ServicePackage }) {
  return (
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
  );
}
