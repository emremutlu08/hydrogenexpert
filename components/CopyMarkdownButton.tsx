"use client";

import { useEffect, useState } from "react";

interface CopyMarkdownButtonProps {
  markdown: string;
}

export function CopyMarkdownButton({ markdown }: CopyMarkdownButtonProps) {
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
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#171717] transition hover:border-[#10b981] hover:text-[#10b981]"
      aria-label="Copy article as Markdown"
    >
      {copied ? "Copied MD" : "Copy MD"}
    </button>
  );
}
