"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

const ANIMATE_SELECTOR = "[data-animate]";
const TILT_SELECTOR = "[data-tilt]";

export function MotionProvider() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const animatedElements = Array.from(document.querySelectorAll<HTMLElement>(ANIMATE_SELECTOR));
    if (animatedElements.length === 0) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      animatedElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    document.documentElement.classList.add("motion-enabled");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.14,
      },
    );

    animatedElements.forEach((element) => observer.observe(element));
    const revealAllTimer = window.setTimeout(() => {
      animatedElements.forEach((element) => {
        element.classList.add("is-visible");
        observer.unobserve(element);
      });
    }, 4500);

    const canTilt = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cleanupTiltHandlers: Array<() => void> = [];

    if (canTilt) {
      document.querySelectorAll<HTMLElement>(TILT_SELECTOR).forEach((element) => {
        let frame = 0;

        const updateTilt = (event: PointerEvent) => {
          window.cancelAnimationFrame(frame);
          frame = window.requestAnimationFrame(() => {
            const rect = element.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;

            element.style.setProperty("--tilt-x", `${(-y * 2.4).toFixed(2)}deg`);
            element.style.setProperty("--tilt-y", `${(x * 2.4).toFixed(2)}deg`);
            element.style.setProperty("--lift", "-4px");
          });
        };

        const resetTilt = () => {
          window.cancelAnimationFrame(frame);
          element.style.setProperty("--tilt-x", "0deg");
          element.style.setProperty("--tilt-y", "0deg");
          element.style.setProperty("--lift", "0px");
        };

        element.addEventListener("pointermove", updateTilt);
        element.addEventListener("pointerleave", resetTilt);

        cleanupTiltHandlers.push(() => {
          window.cancelAnimationFrame(frame);
          element.removeEventListener("pointermove", updateTilt);
          element.removeEventListener("pointerleave", resetTilt);
        });
      });
    }

    return () => {
      window.clearTimeout(revealAllTimer);
      observer.disconnect();
      cleanupTiltHandlers.forEach((cleanup) => cleanup());
      document.documentElement.classList.remove("motion-enabled");
    };
  }, [pathname]);

  return null;
}
