"use client";

import Link from "next/link";

import { TrackedCTAButton } from "@/components/TrackedCTAButton";
import { TrackedCTALink } from "@/components/TrackedInternalLink";

interface QuizResultProps {
  score: number;
  answers: readonly ("yes" | "no")[];
  emailAnchorId: string;
}

export function QuizResult({ score, answers, emailAnchorId }: QuizResultProps) {
  const totalAnswers = answers.length;
  const result =
    score <= 2
      ? {
          title: `Your score: ${score}/${totalAnswers} - stay on Liquid or refactor first`,
          body:
            "Hydrogen is probably not the next move yet. A stronger theme, cleaner app stack, faster product pages, or narrower UX cleanup may create more ROI than a custom storefront rebuild.",
          strongFit: false,
        }
      : score <= 4
        ? {
            title: `Your score: ${score}/${totalAnswers} - request a scope review`,
            body:
              "Hydrogen may be justified, but the decision needs scope discipline. Before rebuild budget moves, review the current storefront constraint, SEO risk, app stack, analytics, migration complexity, and maintenance readiness.",
            strongFit: true,
          }
        : {
            title: `Your score: ${score}/${totalAnswers} - Hydrogen deserves serious planning`,
            body:
              "The store is likely running into custom UX, performance, merchandising, or growth-stage limits that a theme may not solve cleanly. The next step is a scoped Hydrogen plan with migration, SEO, data, launch, and maintenance ownership defined.",
            strongFit: true,
          };

  return (
    <section className="hero-card space-y-6">
      <div className="space-y-4">
        <p className="dna-kicker text-[#8df1cb]">Result</p>
        <h2 className="font-display text-[2.2rem] leading-[0.98] tracking-[-0.05em] text-white md:text-[3.2rem]">
          {result.title}
        </h2>
        <p className="max-w-3xl text-base leading-8 text-neutral-300">
          {result.body}
        </p>
      </div>

      {result.strongFit ? (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            <TrackedCTAButton
              destination="upwork"
              label="Hire Emre on Upwork"
              sourceKind="hydrogen_quiz_result"
              className="inline-flex items-center rounded-full bg-[#10b981] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#171717]"
            />
            <TrackedCTAButton
              destination="linkedin"
              label="Message on LinkedIn"
              sourceKind="hydrogen_quiz_result"
              className="inline-flex items-center rounded-full border border-white/16 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#8df1cb] hover:text-[#8df1cb]"
            />
          </div>
          <TrackedCTALink
            href={`#${emailAnchorId}`}
            eventName="cta_click_email_brief"
            sourceKind="hydrogen_quiz_result"
            className="inline-flex text-sm font-medium text-white underline decoration-white/25 underline-offset-4 transition hover:text-[#8df1cb]"
          >
            Send an email brief
          </TrackedCTALink>
        </div>
      ) : (
        <Link
          href={`#${emailAnchorId}`}
          className="inline-flex items-center rounded-full border border-white/16 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#8df1cb] hover:text-[#8df1cb]"
        >
          If you want a second opinion, send a short note
        </Link>
      )}
    </section>
  );
}
