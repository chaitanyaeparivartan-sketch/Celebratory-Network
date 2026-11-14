"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Universal performant scroll-reveal component.
 * Uses native IntersectionObserver with GPU-accelerated CSS transforms.
 * Fully hydration-safe and respects `prefers-reduced-motion`.
 */
export default function Reveal({
  children,
  direction = "up", // 'up' | 'down' | 'left' | 'right' | 'scale' | 'none'
  delay = 0, // delay in milliseconds
  duration = 750, // duration in milliseconds
  distance = 28, // initial offset in pixels
  threshold = 0.12, // trigger when 12% is visible
  className = "",
  as = "div",
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback if IntersectionObserver is unsupported
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, delay]);

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return `translate3d(0, ${distance}px, 0)`;
      case "down":
        return `translate3d(0, -${distance}px, 0)`;
      case "left":
        return `translate3d(${distance}px, 0, 0)`;
      case "right":
        return `translate3d(-${distance}px, 0, 0)`;
      case "scale":
        return "scale(0.94) translate3d(0, 16px, 0)";
      case "none":
      default:
        return "none";
    }
  };

  const Component = as;

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : getInitialTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </Component>
  );
}
