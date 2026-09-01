"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { TurnstileField } from "@/components/TurnstileField";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { QuizResult } from "@/components/quiz/QuizResult";
import { QuizScoreDisplay } from "@/components/quiz/QuizScoreDisplay";
import { useLeadFormViewTracking } from "@/components/useLeadFormViewTracking";
import {
  trackLeadStart,
  trackLeadSubmit,
  trackQuizResult,
} from "@/lib/analytics";

interface QuizItem {
  title: string;
  body: string;
}

interface HydrogenFitQuizProps {
  questions: readonly QuizItem[];
}

type AnswerValue = "yes" | "no" | null;

const EMAIL_GATE_ID = "quiz-email-gate";
const QUIZ_SOURCE_KIND = "hydrogen_quiz_result";
const QUIZ_SOURCE_PATH = "/should-i-use-it";

export function HydrogenFitQuiz({ questions }: HydrogenFitQuizProps) {
  const [answers, setAnswers] = useState<AnswerValue[]>(() => questions.map(() => null));
  const [showResult, setShowResult] = useState(false);
  const [wantsEmailSummary, setWantsEmailSummary] = useState(false);
  const [email, setEmail] = useState("");
  const [confirmation, setConfirmation] = useState<string | null>(null);
  const [emailStatus, setEmailStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const hasTrackedEmailStart = useRef(false);
  const emailGateRef = useRef<HTMLElement>(null);

  const visitId = useLeadFormViewTracking({
    elementRef: emailGateRef,
    sourceKind: QUIZ_SOURCE_KIND,
    sourcePath: QUIZ_SOURCE_PATH,
    enabled: showResult,
  });

  useEffect(() => {
    hasTrackedEmailStart.current = false;
  }, [visitId]);

  const yesCount = useMemo(
    () => answers.filter((answer) => answer === "yes").length,
    [answers],
  );
  const allAnswered = answers.every((answer) => answer !== null);

  function markEmailStart() {
    if (
      !hasTrackedEmailStart.current &&
      trackLeadStart(QUIZ_SOURCE_KIND, QUIZ_SOURCE_PATH, visitId)
    ) {
      hasTrackedEmailStart.current = true;
    }
  }

  function handleAnswerChange(index: number, nextValue: "yes" | "no") {
    setAnswers((current) => current.map((value, valueIndex) => (valueIndex === index ? nextValue : value)));
    setConfirmation(null);
  }

  function handleShowResult() {
    if (!allAnswered) {
      return;
    }

    if (!showResult) {
      trackQuizResult({ score: yesCount, total: questions.length, sourcePath: "/should-i-use-it" });
    }

    setShowResult(true);
  }

  async function handleEmailSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!wantsEmailSummary || !email.trim()) {
      return;
    }

    setEmailStatus("submitting");
    setConfirmation(null);
    markEmailStart();

    const formData = new FormData(event.currentTarget);
    formData.set("name", "Hydrogen quiz result");
    formData.set("email", email.trim());
    formData.set("sourcePath", "/should-i-use-it");
    formData.set("sourceKind", "hydrogen_quiz_result");
    formData.set(
      "message",
      [
        `Hydrogen fit quiz score: ${yesCount}/${questions.length}`,
        "",
        ...questions.map((question, index) => {
          const answer = answers[index] ?? "unanswered";
          return `${index + 1}. ${question.title}: ${answer}`;
        }),
      ].join("\n"),
    );

    try {
      const response = await fetch("/api/lead-capture", {
        method: "POST",
        body: formData,
      });
      const payload = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !payload.ok) {
        setEmailStatus("error");
        setConfirmation(payload.error || "Something went wrong. Please try again.");
        trackLeadSubmit(QUIZ_SOURCE_KIND, "error", {}, QUIZ_SOURCE_PATH);
        return;
      }

      setEmailStatus("success");
      setConfirmation("Thanks. Your quiz summary was sent, and I will reply with a practical next step.");
      setEmail("");
      setWantsEmailSummary(false);
      trackLeadSubmit(QUIZ_SOURCE_KIND, "success", {}, QUIZ_SOURCE_PATH);
    } catch {
      setEmailStatus("error");
      setConfirmation("Something went wrong. Please try again.");
      trackLeadSubmit(QUIZ_SOURCE_KIND, "error", {}, QUIZ_SOURCE_PATH);
    }
  }

  return (
    <div className="space-y-6">
      <section className="card">
        <p className="dna-kicker">How to read your score</p>
        <h2 className="subsection-title">Three or more yes answers usually means Hydrogen deserves a real plan.</h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-neutral-700">
          Below that threshold, a stronger theme strategy may still be the smarter move. Above it,
          the store is usually running into UX, merchandising, or performance limits that a custom
          storefront can remove.
        </p>
      </section>

      <QuizScoreDisplay yesCount={yesCount} totalQuestions={questions.length} />

      <section className="grid gap-6">
        {questions.map((question, index) => (
          <QuizQuestion
            key={question.title}
            number={index + 1}
            question={question.title}
            explanation={question.body}
            value={answers[index]}
            onChange={(value) => handleAnswerChange(index, value)}
          />
        ))}
      </section>

      <div className="flex justify-start">
        <button
          type="button"
          onClick={handleShowResult}
          disabled={!allAnswered}
          className="inline-flex items-center rounded-full bg-[#171717] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#10b981] disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:text-neutral-500"
        >
          See your result
        </button>
      </div>

      {showResult ? (
        <>
          <QuizResult
            score={yesCount}
            answers={answers.filter((answer): answer is "yes" | "no" => answer !== null)}
            emailAnchorId={EMAIL_GATE_ID}
          />

          <section
            ref={emailGateRef}
            id={EMAIL_GATE_ID}
            className="card scroll-mt-32 space-y-5"
          >
            <div className="space-y-3">
              <p className="dna-kicker">Optional follow-up</p>
              <h2 className="subsection-title">Save this result for the email-summary flow</h2>
              <p className="text-base leading-8 text-neutral-600">
                Send the score and answers with your email. I will reply with the clearest next step:
                Liquid, Hydrogen, or no rebuild.
              </p>
            </div>

            <form
              id="quiz-summary-form"
              className="space-y-4"
              onFocusCapture={markEmailStart}
              onChange={markEmailStart}
              onSubmit={handleEmailSubmit}
            >
              <label className="flex items-start gap-3 text-sm leading-7 text-neutral-700">
                <input
                  type="checkbox"
                  name="wantsEmailSummary"
                  checked={wantsEmailSummary}
                  onChange={(event) => setWantsEmailSummary(event.target.checked)}
                  className="mt-2 h-4 w-4 rounded border-black/15 text-[#10b981] focus:ring-[#10b981]"
                />
                <span>Email me a detailed summary of this result + a recommended next step</span>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-neutral-700">Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  disabled={!wantsEmailSummary}
                  name="email"
                  placeholder="you@brand.com"
                  className="w-full rounded-[1rem] border border-black/10 bg-white px-4 py-3 text-sm text-[#171717] outline-none transition placeholder:text-neutral-400 focus:border-[#10b981] disabled:cursor-not-allowed disabled:bg-neutral-100"
                />
              </label>

              <input type="hidden" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <input type="hidden" name="storeUrl" value="" />
              <TurnstileField inputId="quiz-turnstile-token" />

              <button
                type="submit"
                disabled={!wantsEmailSummary || email.trim().length === 0 || emailStatus === "submitting"}
                className="inline-flex items-center rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#10b981] disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:text-neutral-500"
              >
                {emailStatus === "submitting" ? "Sending..." : "Send summary request"}
              </button>
            </form>

            {confirmation ? (
              <p className={`text-sm leading-7 ${emailStatus === "error" ? "text-red-600" : "text-[#0f8a5d]"}`}>
                {confirmation}
              </p>
            ) : null}
          </section>
        </>
      ) : null}
    </div>
  );
}
