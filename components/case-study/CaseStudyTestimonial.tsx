import type { CaseStudyTestimonial as CaseStudyTestimonialType } from "@/data/caseStudies";

interface CaseStudyTestimonialProps {
  testimonial?: CaseStudyTestimonialType | null;
}

export function CaseStudyTestimonial({ testimonial }: CaseStudyTestimonialProps) {
  if (!testimonial || !testimonial.quote || testimonial.quote === "TODO") {
    // No testimonial yet - pending client response
    return null;
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
