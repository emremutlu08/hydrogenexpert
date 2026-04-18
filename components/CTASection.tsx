import { DEFAULT_CTA_HEADLINE } from "@/lib/site";
import { TrackedCTAButton } from "@/components/TrackedCTAButton";

interface CTASectionProps {
  headline?: string;
  subtext: string;
  primaryLink: "linkedin" | "upwork";
}

export function CTASection({
  headline = DEFAULT_CTA_HEADLINE,
  subtext,
  primaryLink,
}: CTASectionProps) {
  const buttonLabel =
    primaryLink === "linkedin" ? "Message Emre on LinkedIn" : "Hire Emre on Upwork";

  return (
    <section className="rounded-[2rem] border border-slate-200 bg-slate-900 px-8 py-12 text-white shadow-[0_32px_80px_-48px_rgba(15,23,42,0.75)] md:px-12">
      <div className="max-w-3xl space-y-5">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
          Next Step
        </p>
        <h2 className="font-display text-3xl leading-tight md:text-4xl">
          {headline}
        </h2>
        <p className="text-base leading-8 text-slate-300 md:text-lg">{subtext}</p>
        <div className="pt-2">
          <TrackedCTAButton
            destination={primaryLink}
            label={buttonLabel}
            className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-blue-50"
          />
        </div>
      </div>
    </section>
  );
}
