import Link from "next/link";

import { DEFAULT_CTA_HEADLINE } from "@/lib/site";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { TrackedCTAButton } from "@/components/TrackedCTAButton";

interface CTASectionProps {
  headline?: string;
  subtext: string;
  primaryLink?: "linkedin" | "upwork";
  sourceKind?: string;
}

export function CTASection({
  headline = DEFAULT_CTA_HEADLINE,
  subtext,
  sourceKind = "shared_cta",
}: CTASectionProps) {
  return (
    <section className="hero-card fade-up">
      <div className="ambient-orb right-[-3rem] top-[-2rem] h-40 w-40 bg-[#10b981]/30" />
      <div className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
        <div className="space-y-6">
          <p className="dna-kicker text-[#8df1cb]">Next Step</p>
          <h2 className="font-display text-[2.5rem] leading-[0.96] tracking-[-0.055em] text-white md:text-6xl">
            {headline}
          </h2>
          <p className="max-w-2xl text-base leading-8 text-neutral-300 md:text-lg">
            {subtext}
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <TrackedCTAButton
              destination="upwork"
              label="Hire Emre on Upwork"
              className="inline-flex items-center rounded-full bg-[#10b981] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#171717]"
            />
            <TrackedCTAButton
              destination="linkedin"
              label="Message on LinkedIn"
              className="inline-flex items-center rounded-full border border-white/16 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#8df1cb] hover:text-[#8df1cb]"
            />
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#email-form"
              className="text-sm font-medium text-white underline decoration-white/25 underline-offset-4 transition hover:text-[#8df1cb]"
            >
              Or send an email brief
            </Link>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
              Direct access. No agency maze.
            </p>
          </div>
        </div>
        <LeadCaptureForm sourceKind={sourceKind} />
      </div>
    </section>
  );
}
