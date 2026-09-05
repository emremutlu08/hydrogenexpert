"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import {
  trackLeadSelection,
  trackLeadStart,
  trackLeadSubmit,
} from "@/lib/analytics";
import type { LeadCaptureApiResponse } from "@/features/lead-capture/server";
import {
  BUDGET_RANGE_OPTIONS,
  CURRENT_STACK_OPTIONS,
  DESIGN_STATUS_OPTIONS,
  ENGAGEMENT_TYPE_OPTIONS,
  MAIN_PROBLEM_OPTIONS,
  MONTHLY_REVENUE_OPTIONS,
  NEEDED_FEATURE_OPTIONS,
  PRODUCT_COUNT_OPTIONS,
  SHOPIFY_PLUS_OPTIONS,
  TIMELINE_OPTIONS,
  leadQualificationToAnalyticsParams,
  parseLeadQualification,
} from "@/lib/lead-qualification";
import { TurnstileField } from "@/components/TurnstileField";
import { useLeadFormViewTracking } from "@/components/useLeadFormViewTracking";

interface LeadCaptureFormProps {
  sourceKind: string;
  compact?: boolean;
}

export function LeadCaptureForm({
  sourceKind,
  compact = false,
}: LeadCaptureFormProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [fallback, setFallback] = useState<LeadCaptureApiResponse["fallback"] | null>(null);
  const hasTrackedStart = useRef(false);
  const optionalDetailsRef = useRef<HTMLDetailsElement>(null);
  const errorMessageRef = useRef<HTMLParagraphElement>(null);
  const formSectionRef = useRef<HTMLElement>(null);
  const sourcePath = pathname || "/";

  const visitId = useLeadFormViewTracking({
    elementRef: formSectionRef,
    sourceKind,
    sourcePath,
  });

  useEffect(() => {
    hasTrackedStart.current = false;
  }, [visitId]);

  useEffect(() => {
    if (status === "error") errorMessageRef.current?.focus();
  }, [status, message]);

  const formClassName = useMemo(
    () =>
      compact
        ? "lead-form-grid"
        : "lead-form-grid lead-form-grid--paired",
    [compact],
  );

  function markFormStarted() {
    if (hasTrackedStart.current) {
      return;
    }

    if (trackLeadStart(sourceKind, sourcePath, visitId)) {
      hasTrackedStart.current = true;
    }
  }

  function handleFieldChange(event: React.ChangeEvent<HTMLFormElement>) {
    const target = event.target;

    markFormStarted();

    if (target instanceof HTMLSelectElement) {
      const value = target.value || null;

      if (target.name === "budgetRange") {
        trackLeadSelection("budget_selected", { sourceKind, sourcePath, value });
      }

      if (target.name === "engagementType") {
        trackLeadSelection("service_selected", { sourceKind, sourcePath, value });
      }

      if (target.name === "designStatus") {
        trackLeadSelection("design_status_selected", { sourceKind, sourcePath, value });
      }

      if (target.name === "productCount") {
        trackLeadSelection("product_count_selected", { sourceKind, sourcePath, value });
      }
    }

    if (target instanceof HTMLInputElement && target.type === "checkbox" && target.name === "neededFeatures") {
      const selectedFeaturesCount =
        target.form?.querySelectorAll<HTMLInputElement>('input[name="neededFeatures"]:checked').length ?? 0;

      trackLeadSelection("feature_selected", {
        sourceKind,
        sourcePath,
        value: target.value,
        selectedFeaturesCount,
      });
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage(null);
    setFallback(null);
    markFormStarted();

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("sourcePath", sourcePath);
    formData.set("sourceKind", sourceKind);
    const qualification = parseLeadQualification(formData);
    const analyticsDetails = leadQualificationToAnalyticsParams(qualification);

    try {
      const response = await fetch("/api/lead-capture", {
        method: "POST",
        body: formData,
      });
      const payload = (await response.json()) as LeadCaptureApiResponse;

      if (!response.ok || !payload.ok) {
        if (response.status === 400 && optionalDetailsRef.current) {
          optionalDetailsRef.current.open = true;
        }
        setStatus("error");
        setMessage(payload.error || "Something went wrong. Please try again.");
        setFallback(payload.fallback ?? null);
        trackLeadSubmit(sourceKind, "error", analyticsDetails, sourcePath);
        return;
      }

      form.reset();
      if (optionalDetailsRef.current) optionalDetailsRef.current.open = false;
      setStatus("success");
      setMessage("Thanks. I have your note and will reply with the clearest next step.");
      trackLeadSubmit(sourceKind, "success", analyticsDetails, sourcePath);
      const budgetQuery = qualification.budgetRange
        ? `?budget=${encodeURIComponent(qualification.budgetRange)}`
        : "";
      router.push(`/thank-you${budgetQuery}`);
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
      setFallback(null);
      trackLeadSubmit(sourceKind, "error", analyticsDetails, sourcePath);
    }
  }

  return (
    <section ref={formSectionRef} data-nosnippet aria-label="Project inquiry form">
      <form
        id="fit-review-form"
        onFocusCapture={markFormStarted}
        onChange={handleFieldChange}
        onSubmit={handleSubmit}
        onInvalidCapture={(event) => {
          const field = event.target;
          if (optionalDetailsRef.current && field instanceof HTMLElement && field.closest("details") === optionalDetailsRef.current) {
            optionalDetailsRef.current.open = true;
            requestAnimationFrame(() => field.focus());
          }
        }}
        className="lead-form-card lead-form-layout scroll-mt-32"
      >
      <div className="lead-form-stack">
        <p className="dna-kicker text-[#8df1cb]">Project inquiry</p>
        <h3 className="text-xl font-semibold leading-8 text-white md:text-[1.65rem]">
          Request a Hydrogen Scope Review
        </h3>
        <p className="text-sm leading-7 text-neutral-300">
          Tell me about your store and the main problem. Add project details if you have them.
        </p>
        <p className="lead-form-note">
          The first review helps identify whether Liquid, Hydrogen, or a smaller fix fits your store.
        </p>

      </div>

      <div className={formClassName}>
        <label className="lead-form-field">
          <span>Name</span>
          <input name="name" type="text" required autoComplete="name" />
        </label>
        <label className="lead-form-field">
          <span>Email</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>

      <label className="lead-form-field">
        <span>Store URL or brand</span>
        <input name="storeUrl" type="text" required autoComplete="url" placeholder="https://yourstore.com" />
      </label>

        <label className="lead-form-field">
          <span>Main problem</span>
          <select name="mainProblem" required defaultValue="">
            <option value="">Select one</option>
            {MAIN_PROBLEM_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

      <label className="lead-form-field">
        <span>Anything else? (optional)</span>
        <textarea
          name="message"
          rows={3}
          placeholder="A short note about what you want to change..."
        />
      </label>

      <details ref={optionalDetailsRef} className="rounded-[1.15rem] border border-white/15 p-4">
        <summary className="min-h-11 cursor-pointer rounded-md py-3 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8df1cb]">
          Add project details (optional)
        </summary>
        <div className="lead-form-layout mt-5">
          <div className={formClassName}>
            <label className="lead-form-field">
              <span>Current stack</span>
              <select name="currentStack" defaultValue="">
                <option value="">Optional</option>
                {CURRENT_STACK_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

          </div>

          <div className={formClassName}>
            <label className="lead-form-field">
              <span>Budget range</span>
              <select name="budgetRange" defaultValue="">
                <option value="">Optional</option>
                {BUDGET_RANGE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="lead-form-field">
              <span>Timeline</span>
              <select name="timeline" defaultValue="">
                <option value="">Optional</option>
                {TIMELINE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className={formClassName}>
            <label className="lead-form-field">
              <span>Monthly revenue</span>
              <select name="monthlyRevenueBand" defaultValue="">
                <option value="">Optional</option>
                {MONTHLY_REVENUE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="lead-form-field">
              <span>Shopify Plus?</span>
              <select name="shopifyPlusStatus" defaultValue="">
                <option value="">Optional</option>
                {SHOPIFY_PLUS_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="lead-form-field">
            <span>What kind of help?</span>
            <select name="engagementType" defaultValue="">
              <option value="">Optional</option>
              {ENGAGEMENT_TYPE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <div className={formClassName}>
            <label className="lead-form-field">
              <span>Do you already have a design?</span>
              <select name="designStatus" defaultValue="">
                <option value="">Optional</option>
                {DESIGN_STATUS_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="lead-form-field">
              <span>How many products?</span>
              <select name="productCount" defaultValue="">
                <option value="">Optional</option>
                {PRODUCT_COUNT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <fieldset className="lead-form-field">
            <legend>Which features are needed?</legend>
            <div className="lead-form-choice-grid">
              {NEEDED_FEATURE_OPTIONS.map((option) => (
                <label key={option.value} className="lead-form-choice">
                  <input type="checkbox" name="neededFeatures" value={option.value} />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      </details>

      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <input type="hidden" name="sourcePath" value={sourcePath} />
      <input type="hidden" name="sourceKind" value={sourceKind} />
      <TurnstileField />

      <div className="lead-form-actions">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex min-h-11 items-center rounded-full bg-[#10b981] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#171717] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : "Request Scope Review"}
        </button>
      </div>

      <p className="text-xs leading-6 text-neutral-500">
        Your details are used only to reply to this project inquiry. No newsletters, no list sharing. If this is a small theme tweak, I will usually point you to a lighter option.
      </p>

      {message ? (
        <p
          ref={errorMessageRef}
          role={status === "error" ? "alert" : "status"}
          tabIndex={-1}
          className={`text-sm leading-7 ${
            status === "success" ? "text-[#8df1cb]" : "text-[#ffb4b4]"
          }`}
        >
          {message}
        </p>
      ) : null}
      {status === "error" && fallback ? (
        <div className="rounded-[1.2rem] border border-[#ffb4b4]/40 bg-white/5 p-4 text-sm leading-7 text-neutral-200">
          <p>{fallback.message}</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {fallback.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#10b981] hover:text-[#8df1cb]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
      </form>
    </section>
  );
}
