"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const IMPACT_ITEMS = [
  {
    num: "01",
    title: "Organisational Effectiveness",
    desc: "Clarify roles, governance, decision rights and accountability.",
  },
  {
    num: "02",
    title: "Culture Transformation",
    desc: "Aligning behaviours and norms with business strategy.",
  },
  {
    num: "03",
    title: "Leadership Effectiveness",
    desc: "Supporting leaders in navigating growth, complexity and change.",
  },
  {
    num: "04",
    title: "Cross Functional Collaboration",
    desc: "Breaking silos and strengthening enterprise thinking.",
  },
  {
    num: "05",
    title: "Business Transformation",
    desc: "Helping organizations move from intention to execution.",
  },
  {
    num: "06",
    title: "Succession & Leadership Transition",
    desc: "Enabling leadership continuity and long-term sustainability.",
  },
];

export default function Impact({ className = "" }) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const isLockedRef = useRef(false);
  const lockTimeoutRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (isLockedRef.current) return;
    if (!trackRef.current) return;
    const r = trackRef.current.getBoundingClientRect();
    const total = trackRef.current.offsetHeight - window.innerHeight;
    if (total <= 0) return;

    // As user scrolls through the 360vh pinned track, p maps smoothly from 0.0 to 1.0 across all 6 items
    const p = Math.max(0, Math.min(0.9999, -r.top / total));
    const targetIdx = Math.floor(p * IMPACT_ITEMS.length);
    setActive((prev) => (prev !== targetIdx ? targetIdx : prev));
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (lockTimeoutRef.current) clearTimeout(lockTimeoutRef.current);
    };
  }, [handleScroll]);

  const handleItemClick = useCallback((i) => {
    isLockedRef.current = true;
    setActive(i);
    if (lockTimeoutRef.current) clearTimeout(lockTimeoutRef.current);
    lockTimeoutRef.current = setTimeout(() => {
      isLockedRef.current = false;
    }, 800);
  }, []);

  return (
    <section className={`office-rules-wrapper relative w-full bg-white text-[#111] ${className}`}>
      <style>{`
        .office-rules-track {
          height: 360vh;
          position: relative;
        }
        .office-rules-pin {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 3rem 1.5rem;
          z-index: 20;
        }
        @media (min-width: 640px) {
          .office-rules-pin {
            padding: 3.5rem 2rem;
          }
        }
        @media (min-width: 1024px) {
          .office-rules-pin {
            padding: 4rem 3rem;
          }
        }
      `}</style>

      {/* Pinned Scroll Track: Sticks to viewport and reveals each impact area sequentially */}
      <div ref={trackRef} className="office-rules-track">
        <div className="office-rules-pin max-w-[1783px] mx-auto w-full">
          {/* Section Eyebrow & Title */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 mb-2 font-inter text-xs sm:text-[13px] font-semibold uppercase tracking-[0.16em] text-[#FF5E14]">
              <span className="w-1.5 h-1.5 rounded-[1px] bg-[#FF5E14]" />
              Areas of Focus
            </div>
            <h2 className="font-ppmori text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-tight tracking-tight">
              <span className="text-[#171717]">WHERE WE </span>
              <span className="text-[#FF5E14]">CREATE IMPACT</span>
            </h2>
          </div>

          {/* 6 Impact Areas: Same Line & Justified Between */}
          <div className="w-full">
            {IMPACT_ITEMS.map((item, idx) => {
              const isOpen = active === idx;
              return (
                <div
                  key={idx}
                  className={`group relative w-full border-t border-[#FF5E14] last:border-b cursor-pointer transition-colors duration-200 py-4 sm:py-5 md:py-6 ${
                    isOpen ? "bg-[#FF5E14]/[0.02]" : "hover:bg-[#FF5E14]/[0.01]"
                  }`}
                  onClick={() => handleItemClick(idx)}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 w-full">
                    {/* Left: 01 ORGANISATIONAL EFFECTIVENESS */}
                    <div className="flex items-center gap-3 sm:gap-4 shrink-0 font-ppmori text-lg sm:text-xl md:text-2xl lg:text-[25px] font-semibold tracking-tight transition-colors duration-300">
                      <span
                        className={`transition-colors duration-300 ${
                          isOpen ? "text-[#FF5E14]" : "text-[#171717]/40 group-hover:text-[#FF5E14]"
                        }`}
                      >
                        {item.num}
                      </span>
                      <span
                        className={`transition-colors duration-300 ${
                          isOpen ? "text-[#FF5E14]" : "text-[#171717] group-hover:text-[#FF5E14]"
                        }`}
                      >
                        {item.title.toUpperCase()}
                      </span>
                    </div>

                    {/* Right: Clarify roles, governance, decision rights and accountability. */}
                    <div
                      className={`sm:ml-auto max-w-xl transition-all duration-300 ease-out ${
                        isOpen
                          ? "opacity-100 translate-y-0 sm:translate-x-0"
                          : "opacity-0 -translate-y-1 sm:translate-y-0 sm:translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0"
                      }`}
                    >
                      <p className="font-inter text-sm sm:text-base md:text-[15px] lg:text-[16px] text-[#333] leading-relaxed sm:text-right">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
