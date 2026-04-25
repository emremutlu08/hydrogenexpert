import { SectionHeader } from "@/components/SectionHeader";

interface FaqItem {
  question: string;
  answer: string;
  linkHref?: string;
  linkLabel?: string;
}

interface FaqSectionProps {
  title: string;
  faqs: readonly FaqItem[];
  eyebrow?: string;
  className?: string;
  headerClassName?: string;
}

export function FaqSection({
  title,
  faqs,
  eyebrow = "FAQ",
  className,
  headerClassName = "max-w-3xl",
}: FaqSectionProps) {
  return (
    <section className={`surface-card space-y-6 ${className ?? ""}`.trim()}>
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        className={headerClassName}
      />
      <div className="grid gap-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="agency-accordion rounded-[1.2rem] border border-black/8 bg-white px-5 py-4"
          >
            <summary className="cursor-pointer text-base font-semibold text-[#171717]">
              {faq.question}
            </summary>
            <div className="mt-4 max-w-3xl space-y-3 text-sm leading-7 text-neutral-600">
              <p>{faq.answer}</p>
              {faq.linkHref && faq.linkLabel ? (
                <a
                  href={faq.linkHref}
                  className="inline-flex font-medium text-[#171717] underline decoration-black/20 underline-offset-4 transition hover:text-[#10b981]"
                >
                  {faq.linkLabel}
                </a>
              ) : null}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
