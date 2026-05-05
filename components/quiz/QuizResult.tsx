"use client";

import Link from "next/link";

import { TrackedCTAButton } from "@/components/TrackedCTAButton";

interface QuizResultProps {
  score: number;
  answers: readonly ("yes" | "no")[];
  emailAnchorId: string;
}

export function QuizResult({ score, answers, emailAnchorId }: QuizResultProps) {
  const isHydrogenFit = score >= 3;
  const totalAnswers = answers.length;

  return (
    <section className="hero-card space-y-6">
      <div className="space-y-4">
        <p className="dna-kicker text-[#8df1cb]">Result</p>
        <h2 className="font-display text-[2.2rem] leading-[0.98] tracking-[-0.05em] text-white md:text-[3.2rem]">
          {isHydrogenFit
            ? `Your score: ${score}/${totalAnswers} - Hydrogen is worth evaluating`
            : `Your score: ${score}/${totalAnswers} - A stronger Liquid setup is likely the smarter move`}
        </h2>
        <p className="max-w-3xl text-base leading-8 text-neutral-300">
          {isHydrogenFit
            ? "Based on your answers, your store is hitting the kinds of limits that a theme cannot solve cleanly. The next step is scoping: what should ship first, what can wait, and whether the budget and timeline work for your stage."
            : "Based on your answers, the current constraints do not yet justify a custom storefront rebuild. A better theme, cleaner app stack, or a targeted UX fix will probably deliver more ROI right now."}
        </p>
      </div>

      {isHydrogenFit ? (
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
          <Link
            href={`#${emailAnchorId}`}
            className="inline-flex text-sm font-medium text-white underline decoration-white/25 underline-offset-4 transition hover:text-[#8df1cb]"
          >
            Or send an email brief
          </Link>
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
