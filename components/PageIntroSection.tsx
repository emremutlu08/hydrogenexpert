import type { ReactNode } from "react";

import { FreshnessNote } from "@/components/FreshnessNote";
import { SectionHeader } from "@/components/SectionHeader";

interface PageIntroSectionProps {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  body: ReactNode;
  className?: string;
  titleClassName?: string;
  headingAs?: "h1" | "h2";
  reviewedAt?: string;
}

export function PageIntroSection({
  eyebrow,
  title,
  description,
  body,
  className,
  titleClassName = "page-title mt-3 max-w-4xl",
  headingAs = "h1",
  reviewedAt,
}: PageIntroSectionProps) {
  return (
    <section className={`surface-card space-y-5 ${className ?? ""}`.trim()}>
      {reviewedAt ? <FreshnessNote date={reviewedAt} /> : null}
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        align="center"
        className="mx-auto max-w-5xl"
        titleClassName={titleClassName}
        headingAs={headingAs}
      />
      <p className="mx-auto max-w-3xl text-center text-base leading-8 text-neutral-600">{body}</p>
    </section>
  );
}
