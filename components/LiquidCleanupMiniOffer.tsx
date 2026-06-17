import Link from "next/link";

import { SectionHeader } from "@/components/SectionHeader";
import { TrackedCTALink } from "@/components/TrackedInternalLink";
import { LIQUID_CLEANUP_SCOPE } from "@/lib/hydrogen-packages";

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
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
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
          <p>
            Serious Liquid cleanup is still filtered. If the request is only a tiny visual
            tweak, a broad agency brief, or complex app replacement, I will say that before
            turning it into the wrong engagement.
          </p>
        </div>
        <div className="grid gap-4">
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
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.2rem] border border-black/8 bg-white p-5">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#10b981]">
                Includes
              </p>
              <ul className="mt-4 grid gap-2">
                {LIQUID_CLEANUP_SCOPE.includes.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-6 text-neutral-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#10b981]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[1.2rem] border border-black/8 bg-white p-5">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-neutral-500">
                Excludes
              </p>
              <ul className="mt-4 grid gap-2">
                {LIQUID_CLEANUP_SCOPE.excludes.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-6 text-neutral-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
