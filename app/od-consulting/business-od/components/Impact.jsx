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

    // As user scrolls through the 400vh pinned track, p maps smoothly from 0.0 to 1.0 across all 6 items
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
    <section className={`office-rules-wrapper relative w-full bg-white text-[#111] font-ppmori ${className}`}>
      <style>{`
        .office-rules-wrapper {
          --accent: #FF5E14;
        }
        /* Sticky scroll track: 400vh gives smooth travel across all 6 impact areas */
        .office-rules-track {
          height: 400vh;
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
        .office-rule {
          border-top: 1.5px solid var(--accent);
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        .office-rule:hover {
          background-color: rgba(255, 94, 20, 0.02);
        }
        .office-rule:last-child {
          border-bottom: 1.5px solid var(--accent);
        }
        .office-rule-label {
          font-size: clamp(0.9rem, 1.15vw, 1.15rem);
          text-transform: uppercase;
          padding: clamp(14px, 1.8vw, 22px) 0;
          font-weight: 500;
          font-family: var(--font-inter), 'Inter', sans-serif;
          letter-spacing: -0.01em;
          transition: color 0.25s ease;
          color: #242424;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .office-rule.open .office-rule-label {
          color: var(--accent);
        }
        .office-rule-body {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        .office-rule.open .office-rule-body {
          grid-template-rows: 1fr;
        }
        .office-rule-inner {
          overflow: hidden;
          min-height: 0;
        }
        .office-rule-row {
          display: grid;
          grid-template-columns: 1fr minmax(260px, 36%);
          gap: 3vw;
          align-items: start;
          padding: clamp(4px, 1vw, 12px) 0 clamp(20px, 2.6vw, 36px);
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.35s ease 0.08s, transform 0.45s cubic-bezier(0.25, 0.1, 0.25, 1) 0.05s;
        }
        .office-rule.open .office-rule-row {
          opacity: 1;
          transform: none;
        }
        .office-rule-title {
          font-family: "PP Mori", var(--font-geist-sans), sans-serif;
          font-weight: 600;
          color: var(--accent);
          text-transform: uppercase;
          font-size: clamp(1.5rem, 2.5vw, 2.5rem);
          line-height: 1.12;
          letter-spacing: -0.025em;
          max-width: 18ch;
        }
        .office-rule-desc {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: clamp(0.95rem, 1.1vw, 1.15rem);
          line-height: 1.6;
          padding-top: 0.2em;
          color: #4A4A4A;
        }
        @media (max-width: 768px) {
          .office-rule-row {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .office-rule-body, .office-rule-row {
            transition: none !important;
          }
        }
      `}</style>

      {/* Pinned Scroll Track: Sticks to viewport and reveals each impact area sequentially */}
      <div ref={trackRef} className="office-rules-track">
        <div className="office-rules-pin max-w-[1783px] mx-auto w-full">
          {/* Section Eyebrow & Title matching Home Page style */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <div className="inline-flex items-center gap-1.5 font-['Inter',sans-serif] text-sm font-medium uppercase leading-[18px] tracking-[0.24px] text-[#242424]">
              <span className="w-1.5 h-1.5 rounded-[1px] bg-[#FF5E14]" />
              Areas of Focus
            </div>
            <h2 className="mt-2.5 font-ppmori text-3xl sm:text-4xl md:text-[46px] lg:text-[52px] font-semibold tracking-[-0.8px] leading-[1.08] text-black">
              Where We Create Impact
            </h2>
          </div>

          {/* Accordion Impact Items */}
          {IMPACT_ITEMS.map((item, idx) => {
            const isOpen = active === idx;
            return (
              <div
                key={idx}
                className={`office-rule ${isOpen ? "open" : ""}`}
                onClick={() => handleItemClick(idx)}
              >
                <div className="office-rule-label">
                  <span className="text-[#FF5E14] font-semibold">{item.num}</span>
                  {!isOpen && <span>{item.title}</span>}
                </div>
                <div className="office-rule-body">
                  <div className="office-rule-inner">
                    <div className="office-rule-row">
                      <h3 className="office-rule-title">{item.title}</h3>
                      <p className="office-rule-desc">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
