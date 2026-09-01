import { SectionHeader } from "@/components/SectionHeader";
import type { CommercialIntentOwner } from "@/features/search-intent";

export function IntentOwnershipSection({ intentOwner }: { intentOwner: CommercialIntentOwner }) {
  const cards = [
    ["Decision criteria", intentOwner.decisionFocus],
    ["Deliverable focus", intentOwner.deliverableFocus],
    ["Proof standard", intentOwner.proofFocus],
  ] as const;

  return (
    <section className="surface-card space-y-6">
      <SectionHeader
        eyebrow="Decision path"
        title={intentOwner.intent}
        description="Use these criteria to judge whether this path matches the work, evidence, and ownership your storefront needs."
        className="max-w-5xl"
      />
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map(([label, value]) => (
          <article key={label} className="rounded-[1.2rem] border border-black/8 bg-white p-5">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#0f8a5d]">
              {label}
            </p>
            <p className="mt-3 text-sm leading-7 text-neutral-700">{value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
