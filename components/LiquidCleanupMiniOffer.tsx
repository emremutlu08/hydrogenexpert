import Link from "next/link";

import { SectionHeader } from "@/components/SectionHeader";
import { TrackedCTALink } from "@/components/TrackedInternalLink";

const GOOD_FIT_ITEMS = [
  "You need 2-3 custom sections",
  "The catalog is simple",
  "The current theme is mostly fine",
  "Checkout is not the issue",
  "You need faster visual or UX polish before a larger rebuild",
] as const;

export function LiquidCleanupMiniOffer() {
  return (
    <section className="surface-card space-y-6">
      <SectionHeader
        eyebrow="Liquid cleanup instead"
        title="If Hydrogen is too much, the next move may be a smaller Liquid cleanup."
        description="This is not the main HydrogenExpert offer, but I may recommend it when Hydrogen would be overkill."
        className="max-w-5xl"
      />
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-4 text-base leading-8 text-neutral-700">
          <p>
            Small Liquid cleanup is scoped separately when it is clearly the better
            commercial move.
          </p>
          <p>
            The point is not to turn HydrogenExpert into a general Liquid agency. It is to
            avoid selling a custom storefront when a smaller theme-native fix would protect
            the budget better.
          </p>
        </div>
        <div className="rounded-[1.2rem] border border-black/8 bg-white p-5">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#10b981]">
            Good fit when
          </p>
          <ul className="editorial-list mt-5">
            {GOOD_FIT_ITEMS.map((item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <TrackedCTALink
              href="/contact#fit-review-form"
              eventName="scope_review_cta_click"
              sourceKind="liquid_cleanup_mini_offer"
              ctaLabel="Request Scope Review"
              className="inline-flex min-h-11 items-center rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#10b981]"
            >
              Request Scope Review
            </TrackedCTALink>
            <Link
              href="/when-not-to-use-hydrogen"
              className="inline-flex min-h-11 items-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#171717] transition hover:border-[#10b981] hover:text-[#10b981]"
            >
              Read when Liquid is better
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
