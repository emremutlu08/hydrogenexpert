"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

import {
  ANALYTICS_CONSENT_CHANGE_EVENT,
  readEffectiveAnalyticsConsent,
} from "@/lib/analytics-consent";
import { createLeadFormVisitId, trackLeadFormView } from "@/lib/analytics";

interface LeadFormViewTrackingOptions {
  elementRef: RefObject<HTMLElement | null>;
  sourceKind: string;
  sourcePath: string;
  enabled?: boolean;
}

export function useLeadFormViewTracking({
  elementRef,
  sourceKind,
  sourcePath,
  enabled = true,
}: LeadFormViewTrackingOptions) {
  const viewedContexts = useRef(new Set<string>());
  const [visitId, setVisitId] = useState(createLeadFormVisitId);

  useEffect(() => {
    const element = elementRef.current;
    const contextKey = `${sourceKind}:${sourcePath}`;

    if (!enabled || !element || typeof IntersectionObserver === "undefined") {
      return;
    }

    let isVisible = false;
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries.some((entry) => entry.isIntersecting);
        trackVisibleForm();
      },
      { threshold: 0, rootMargin: "0px 0px -20% 0px" },
    );

    function trackVisibleForm() {
      if (
        isVisible &&
        !viewedContexts.current.has(contextKey) &&
        trackLeadFormView(sourceKind, sourcePath, visitId)
      ) {
        viewedContexts.current.add(contextKey);
        observer.disconnect();
      }
    }

    function handleConsentChange(event: Event) {
      const eventPreference =
        typeof CustomEvent !== "undefined" && event instanceof CustomEvent
          ? event.detail
          : readEffectiveAnalyticsConsent();

      if (eventPreference !== "granted") {
        setVisitId(createLeadFormVisitId());
        return;
      }

      trackVisibleForm();
    }

    observer.observe(element);
    window.addEventListener(ANALYTICS_CONSENT_CHANGE_EVENT, handleConsentChange);
    window.addEventListener("storage", handleConsentChange);

    return () => {
      observer.disconnect();
      window.removeEventListener(ANALYTICS_CONSENT_CHANGE_EVENT, handleConsentChange);
      window.removeEventListener("storage", handleConsentChange);
    };
  }, [elementRef, enabled, sourceKind, sourcePath, visitId]);

  return visitId;
}
