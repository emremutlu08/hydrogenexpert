"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import { trackLeadStart, trackLeadSubmit } from "@/lib/analytics";
import { TurnstileField } from "@/components/TurnstileField";

interface LeadCaptureFormProps {
  sourceKind: string;
  compact?: boolean;
}

export function LeadCaptureForm({
  sourceKind,
  compact = false,
}: LeadCaptureFormProps) {
  const pathname = usePathname();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  const formClassName = useMemo(
    () =>
      compact
        ? "lead-form-grid"
        : "lead-form-grid lead-form-grid--paired",
    [compact],
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage(null);
    trackLeadStart(sourceKind);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("sourcePath", pathname || "/");
    formData.set("sourceKind", sourceKind);

    try {
      const response = await fetch("/api/lead-capture", {
        method: "POST",
        body: formData,
      });
      const payload = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !payload.ok) {
        setStatus("error");
        setMessage(payload.error || "Something went wrong. Please try again.");
        trackLeadSubmit(sourceKind, "error");
        return;
      }

      form.reset();
      setStatus("success");
      setMessage("Thanks. I have your note and will reply with the clearest next step.");
      trackLeadSubmit(sourceKind, "success");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
      trackLeadSubmit(sourceKind, "error");
    }
  }

  return (
    <form
      id="email-form"
      onSubmit={handleSubmit}
      className="lead-form-card lead-form-layout scroll-mt-32"
      noValidate
    >
      <div className="lead-form-stack">
        <p className="dna-kicker text-[#8df1cb]">Owned lead capture</p>
        <h3 className="text-xl font-semibold leading-8 text-white md:text-[1.65rem]">
          Request a Hydrogen fit review
        </h3>
        <p className="text-sm leading-7 text-neutral-300">
          Send enough context to qualify the right path: audit, migration, custom build, optimization, support, Liquid cleanup, or no rebuild.
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
        <input name="storeUrl" type="text" autoComplete="url" placeholder="https://yourstore.com" />
      </label>

      <div className={formClassName}>
        <label className="lead-form-field">
          <span>Current storefront</span>
          <select name="currentStack" defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Shopify Liquid theme</option>
            <option>Existing Hydrogen storefront</option>
            <option>Other headless Shopify storefront</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label className="lead-form-field">
          <span>Project type</span>
          <select name="projectType" defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Hydrogen fit audit</option>
            <option>Liquid to Hydrogen migration</option>
            <option>Custom Hydrogen build</option>
            <option>Performance / SEO optimization</option>
            <option>Ongoing Hydrogen support</option>
            <option>Not sure yet</option>
          </select>
        </label>
      </div>

      <div className={formClassName}>
        <label className="lead-form-field">
          <span>Timeline</span>
          <select name="timeline" defaultValue="">
            <option value="" disabled>Select one</option>
            <option>This month</option>
            <option>1-3 months</option>
            <option>3-6 months</option>
            <option>Researching only</option>
          </select>
        </label>
        <label className="lead-form-field">
          <span>Budget range</span>
          <select name="budgetRange" defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Audit only</option>
            <option>$3K-$12K optimization</option>
            <option>$15K-$30K lean build</option>
            <option>$30K-$60K growth build</option>
            <option>$60K+ complex migration</option>
            <option>Not set yet</option>
          </select>
        </label>
      </div>

      <label className="lead-form-field">
        <span>What is blocking growth?</span>
        <textarea
          name="message"
          required
          rows={compact ? 4 : 5}
          placeholder="Mobile UX, slow feature delivery, migration question, performance drag, SEO risk, app limits..."
        />
      </label>

      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <input type="hidden" name="sourcePath" value={pathname || "/"} />
      <input type="hidden" name="sourceKind" value={sourceKind} />
      <TurnstileField />

      <div className="lead-form-actions">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex min-h-11 items-center rounded-full bg-[#10b981] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#171717] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : "Request fit review"}
        </button>
      </div>

      <p className="text-xs leading-6 text-neutral-500">
        Your details are used only to reply to this specific project inquiry. No newsletters, no list sharing.
      </p>

      {message ? (
        <p
          className={`text-sm leading-7 ${
            status === "success" ? "text-[#8df1cb]" : "text-[#ffb4b4]"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
