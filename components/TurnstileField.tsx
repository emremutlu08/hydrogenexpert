"use client";

import Script from "next/script";
import { useEffect, useId, useRef, useState } from "react";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

interface TurnstileFieldProps {
  inputId?: string;
}

export function TurnstileField({ inputId }: TurnstileFieldProps) {
  const fallbackId = useId().replace(/:/g, "");
  const fieldId = inputId || `turnstile-token-${fallbackId}`;
  const callbackName = `__hydrogenExpertTurnstileCallback_${fieldId.replace(/[^a-zA-Z0-9_]/g, "_")}`;
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || shouldLoad) {
      return;
    }

    const container = containerRef.current;

    if (!container || typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "360px 0px" },
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [shouldLoad]);

  if (!TURNSTILE_SITE_KEY) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      onFocusCapture={() => setShouldLoad(true)}
      onPointerEnter={() => setShouldLoad(true)}
      className="lead-form-turnstile"
    >
      {shouldLoad ? (
        <>
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js"
            strategy="lazyOnload"
          />
          <Script id={`${fieldId}-callback`} strategy="afterInteractive">
            {`
              window[${JSON.stringify(callbackName)}] = function(token) {
                var input = document.getElementById(${JSON.stringify(fieldId)});
                if (input) {
                  input.value = token;
                }
              };
            `}
          </Script>
          <div
            className="cf-turnstile"
            data-sitekey={TURNSTILE_SITE_KEY}
            data-theme="dark"
            data-size="flexible"
            data-callback={callbackName}
          />
        </>
      ) : null}
      <input id={fieldId} type="hidden" name="turnstileToken" />
    </div>
  );
}
