"use client";

import { useEffect, useRef } from "react";

/**
 * Animated counter that smoothly increments numbers when scrolled into view.
 * Handles numbers with suffixes like "20+", "10+", "13+", "9".
 * Directly updates DOM node to ensure 60fps buttery-smooth performance without React re-render thrashing.
 */
export default function AnimatedCounter({
  value,
  duration = 1500,
  className = "",
  style = {},
}) {
  const numberRef = useRef(null);

  // Parse numeric part and suffix (e.g., "20+" -> 20 and "+")
  const numericMatch = String(value).match(/\d+/);
  const targetNumber = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = String(value).replace(/\d+/, "");

  useEffect(() => {
    const el = numberRef.current;
    if (!el) return;

    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.textContent = `${targetNumber}${suffix}`;
      return;
    }

    let hasStarted = false;

    // Reset initially so the animation begins at 0 when viewed
    el.textContent = `0${suffix}`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          hasStarted = true;
          observer.disconnect();

          let startTime = null;
          const startVal = 0;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease-out cubic: 1 - Math.pow(1 - progress, 3)
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(
              easeOutProgress * (targetNumber - startVal) + startVal
            );
            if (el) {
              el.textContent = `${currentVal}${suffix}`;
            }

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else if (el) {
              el.textContent = `${targetNumber}${suffix}`;
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [targetNumber, suffix, duration]);

  return (
    <span ref={numberRef} className={className} style={style}>
      {targetNumber}
      {suffix}
    </span>
  );
}
