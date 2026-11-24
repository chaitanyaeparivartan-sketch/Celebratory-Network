"use client";

import { useEffect, useState } from "react";

export default function NewHero({ className = "" }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 40);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`relative w-full bg-white flex flex-col justify-center items-center overflow-hidden pt-36 sm:pt-44 md:pt-48 pb-16 sm:pb-24 md:pb-28 ${className}`}
    >
      <div className="relative z-10 w-full max-w-[1783px] mx-auto px-5 sm:px-8 md:px-[6vw] flex flex-col items-center text-center">
        <div className="max-w-[960px] mx-auto flex flex-col items-center">
          {/* Eyebrow Pill / Tag */}
          <div
            className="mb-5 sm:mb-6 inline-flex items-center gap-2.5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? "none" : "translate3d(0, 16px, 0)",
              transitionDelay: "80ms",
            }}
          >
            <span
              className="w-3.5 h-2.5 rounded-[3px] bg-[#FF5E14] inline-block shrink-0"
              aria-hidden="true"
            />
            <span
              className="text-[#242424] font-semibold text-xs sm:text-[13px] md:text-sm tracking-[0.2em] uppercase select-none"
              style={{ fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif' }}
            >
              OUR PERSPECTIVE
            </span>
          </div>

          {/* Heading - Toward Organizational Development */}
          <h1
            className="text-[#171717] font-semibold text-[clamp(2.4rem,5.6vw,4.75rem)] leading-[1.06] tracking-[-0.03em] mb-6 sm:mb-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? "none" : "translate3d(0, 24px, 0)",
              transitionDelay: "160ms",
            }}
          >
            <span className="block">Toward Organizational</span>
            <span className="block">Development</span>
          </h1>

          {/* Description */}
          <p
            className="text-[#4A4A4A] text-[clamp(15px,1.2vw,18.5px)] leading-[1.65] font-normal max-w-[720px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              fontFamily: "Inter, sans-serif",
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? "none" : "translate3d(0, 20px, 0)",
              transitionDelay: "240ms",
            }}
          >
            We help organizations grow by understanding their structures, culture,
            relationships, leadership, and the invisible dynamics that shape how
            people work together.
          </p>
        </div>
      </div>
    </section>
  );
}
