"use client";

interface QuizQuestionProps {
  number: number;
  question: string;
  explanation: string;
  value: "yes" | "no" | null;
  onChange: (value: "yes" | "no") => void;
}

export function QuizQuestion({
  number,
  question,
  explanation,
  value,
  onChange,
}: QuizQuestionProps) {
  return (
    <div className="card grid items-center gap-5 md:grid-cols-[0.16fr_1fr]">
      <div className="feature-number self-center">{number}</div>
      <div className="space-y-5">
        <div>
          <h2 className="subsection-title mt-0 text-[1.95rem] md:text-[2.35rem]">{question}</h2>
          <p className="mt-4 text-base leading-8 text-neutral-600">{explanation}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            aria-pressed={value === "yes"}
            onClick={() => onChange("yes")}
            className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
              value === "yes"
                ? "bg-[#171717] text-white"
                : "border border-black/10 bg-white text-[#171717] hover:border-[#10b981] hover:text-[#10b981]"
            }`}
          >
            Yes
          </button>
          <button
            type="button"
            aria-pressed={value === "no"}
            onClick={() => onChange("no")}
            className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
              value === "no"
                ? "bg-[#171717] text-white"
                : "border border-black/10 bg-white text-[#171717] hover:border-[#10b981] hover:text-[#10b981]"
            }`}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
