"use client";

import { useEffect, useState } from "react";

import { trackChecklistCopy } from "@/lib/analytics";

interface CopyChecklistButtonProps {
  templateId: string;
  templateTitle: string;
  checklist: readonly string[];
}

function buildChecklistMarkdown(title: string, checklist: readonly string[]) {
  return [`## ${title}`, "", ...checklist.map((item) => `- ${item}`)].join("\n");
}

export function CopyChecklistButton({
  templateId,
  templateTitle,
  checklist,
}: CopyChecklistButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeout = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(buildChecklistMarkdown(templateTitle, checklist));
      trackChecklistCopy({ templateId, templateTitle });
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex min-h-11 items-center rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#171717] transition hover:border-[#10b981] hover:text-[#10b981]"
      aria-label={`Copy ${templateTitle} checklist`}
    >
      {copied ? "Copied checklist" : "Copy checklist"}
    </button>
  );
}
