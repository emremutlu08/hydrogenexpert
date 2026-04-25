"use client";

interface QuizScoreDisplayProps {
  yesCount: number;
  totalQuestions: number;
}

export function QuizScoreDisplay({ yesCount, totalQuestions }: QuizScoreDisplayProps) {
  const progress = (yesCount / totalQuestions) * 100;
  const threshold = (3 / totalQuestions) * 100;
  const accentClassName = yesCount >= 3 ? "bg-[#10b981]" : "bg-[#171717]";

  return (
    <section className="card space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="dna-kicker">Live score</p>
          <h2 className="subsection-title mt-3">Hydrogen fit signal: {yesCount}/{totalQuestions}</h2>
        </div>
        <p className="text-sm font-medium text-neutral-500">Threshold marker at 3 yes answers</p>
      </div>
      <div className="space-y-3">
        <div className="relative h-4 overflow-hidden rounded-full bg-neutral-200">
          <div className={`h-full rounded-full transition-all duration-300 ${accentClassName}`} style={{ width: `${progress}%` }} />
          <span
            aria-hidden="true"
            className="absolute top-[-4px] h-6 w-[2px] rounded-full bg-[#10b981]"
            style={{ left: `${threshold}%` }}
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-neutral-500">
          <span>0</span>
          <span>3 yes answers = evaluate Hydrogen seriously</span>
          <span>{totalQuestions}</span>
        </div>
      </div>
    </section>
  );
}
