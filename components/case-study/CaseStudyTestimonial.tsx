import type { CaseStudyTestimonial as CaseStudyTestimonialType } from "@/data/caseStudies";

interface CaseStudyTestimonialProps {
  testimonial?: CaseStudyTestimonialType | null;
}

export function CaseStudyTestimonial({ testimonial }: CaseStudyTestimonialProps) {
  if (!testimonial?.quote) {
    return (
      <section className="rounded-[1.5rem] border border-dashed border-black/12 bg-[#f6f7f7] p-6 md:p-8">
        <p className="eyebrow">Client feedback</p>
        <p className="mt-4 text-base font-semibold leading-7 text-[#171717]">
          Client testimonial pending approval.
        </p>
        <p className="mt-2 text-sm leading-7 text-neutral-600">
          Verified client quote to be added after approval.
        </p>
      </section>
    );
  }

  return (
    <section className="rounded-[1.5rem] border border-black/8 bg-[#171717] p-8 text-white">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8df1cb]">
        Client feedback
      </p>
      <blockquote className="mt-4 text-xl leading-9 text-white">
        &quot;{testimonial.quote}&quot;
      </blockquote>
      <p className="mt-5 text-sm leading-7 text-neutral-300">
        {testimonial.authorName} - {testimonial.authorRole}, {testimonial.authorCompany}
      </p>
    </section>
  );
}
