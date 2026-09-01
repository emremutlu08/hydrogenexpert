"use client";

import { useEffect, useRef, type RefObject } from "react";

import {
  ANALYTICS_CONSENT_CHANGE_EVENT,
} from "@/lib/analytics-consent";
import { trackLeadFormView } from "@/lib/analytics";

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
        trackLeadFormView(sourceKind, sourcePath)
      ) {
        viewedContexts.current.add(contextKey);
        observer.disconnect();
      }
    }

    observer.observe(element);
    window.addEventListener(ANALYTICS_CONSENT_CHANGE_EVENT, trackVisibleForm);
    window.addEventListener("storage", trackVisibleForm);

    return () => {
      observer.disconnect();
      window.removeEventListener(ANALYTICS_CONSENT_CHANGE_EVENT, trackVisibleForm);
      window.removeEventListener("storage", trackVisibleForm);
    };
  }, [elementRef, enabled, sourceKind, sourcePath]);
}
