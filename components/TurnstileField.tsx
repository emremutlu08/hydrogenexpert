"use client";

import Script from "next/script";
import { useId } from "react";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

declare global {
  interface Window {
    __hydrogenExpertTurnstileCallback?: (token: string) => void;
  }
}

interface TurnstileFieldProps {
  inputId?: string;
}

export function TurnstileField({ inputId }: TurnstileFieldProps) {
  const fallbackId = useId().replace(/:/g, "");
  const fieldId = inputId || `turnstile-token-${fallbackId}`;

  if (!TURNSTILE_SITE_KEY) {
    return null;
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      <Script id={`${fieldId}-callback`} strategy="afterInteractive">
        {`
          window.__hydrogenExpertTurnstileCallback = function(token) {
            var inputs = document.querySelectorAll('input[name="turnstileToken"]');
            inputs.forEach(function(input) {
              input.value = token;
            });
          };
        `}
      </Script>
      <div className="lead-form-turnstile">
        <div
          className="cf-turnstile"
          data-sitekey={TURNSTILE_SITE_KEY}
          data-theme="dark"
          data-size="flexible"
          data-callback="__hydrogenExpertTurnstileCallback"
        />
      </div>
      <input id={fieldId} type="hidden" name="turnstileToken" />
    </>
  );
}
