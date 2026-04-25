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
          Prefer email over platform DMs?
        </h3>
        <p className="text-sm leading-7 text-neutral-300">
          Send a short note about what is slowing your storefront down. I only need enough context to tell you whether the next move is Liquid, Hydrogen, or no rebuild at all.
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

      <label className="lead-form-field">
        <span>What is blocking growth?</span>
        <textarea
          name="message"
          required
          rows={compact ? 4 : 5}
          placeholder="Mobile UX, slow feature delivery, migration question, performance drag..."
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
          className="inline-flex items-center rounded-full bg-[#10b981] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#171717] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : "Send project note"}
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
