"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const RULES = [
  {
    label: "The Office Rules 01",
    title: "The brief is not set in stone",
    desc: "A brief is a starting point, not a set of commandments. We’ll challenge it if we think there’s a better way to get where we need to go.",
  },
  {
    label: "The Office Rules 02",
    title: "Good ideas need space",
    desc: "We don’t believe in rushing to the first solution that kind of works. Give an idea enough room to breathe, and it might just be the one.",
  },
  {
    label: "The Office Rules 03",
    title: "Pretty is not a strategy",
    desc: "We love beautiful things. But looking good is only part of the job. Everything we put out there needs to have a reason to be.",
  },
  {
    label: "The Office Rules 04",
    title: "If it can be simple, simplify",
    desc: "Complexity for complexity’s sake is not cool, actually. If your brand can say more with less, we’ll make it happen.",
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

    // Fast, responsive index mapping across track travel
    const p = Math.max(0, Math.min(0.9999, -r.top / total));
    const targetIdx = Math.floor(p * RULES.length);
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

  const handleRuleClick = useCallback((i) => {
    isLockedRef.current = true;
    setActive(i);
    if (lockTimeoutRef.current) clearTimeout(lockTimeoutRef.current);
    lockTimeoutRef.current = setTimeout(() => {
      isLockedRef.current = false;
    }, 600);
  }, []);

  return (
    <section className={`office-rules-wrapper w-full bg-[#f7efea] text-[#111] overflow-hidden ${className}`}>
      <style>{`
        .office-rules-wrapper {
          --bg: #f7efea;
          --ink: #111;
          --accent: #FF5E14;
        }
        .office-rules-track {
          height: 220vh;
          position: relative;
        }
        .office-rules-pin {
          position: sticky;
          top: 0;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 3rem 1.5rem;
        }
        @media (min-width: 640px) {
          .office-rules-pin {
            padding: 4rem 2rem;
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
          font-size: clamp(0.95rem, 1.35vw, 1.3rem);
          text-transform: uppercase;
          padding: clamp(18px, 2.4vw, 32px) 0;
          font-weight: 600;
          font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
          letter-spacing: -0.01em;
          transition: color 0.25s ease;
          color: #222;
        }
        .office-rule.open .office-rule-label {
          color: var(--accent);
        }
        .office-rule-body {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.42s cubic-bezier(0.16, 1, 0.3, 1);
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
          grid-template-columns: 1fr minmax(260px, 34%);
          gap: 3vw;
          align-items: start;
          padding: clamp(6px, 1.2vw, 16px) 0 clamp(24px, 3.2vw, 44px);
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.35s ease 0.08s, transform 0.42s cubic-bezier(0.16, 1, 0.3, 1) 0.05s;
        }
        .office-rule.open .office-rule-row {
          opacity: 1;
          transform: none;
        }
        .office-rule-title {
          font-family: Anton, Impact, "Arial Narrow", sans-serif;
          font-weight: 400;
          color: var(--accent);
          text-transform: uppercase;
          font-size: clamp(2.4rem, 6.8vw, 6.5rem);
          line-height: 0.96;
          letter-spacing: -0.01em;
          max-width: 12ch;
        }
        .office-rule-desc {
          font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
          font-size: clamp(0.95rem, 1.3vw, 1.35rem);
          line-height: 1.45;
          padding-top: 0.4em;
          color: #222;
        }
        @media (max-width: 768px) {
          .office-rule-row {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .office-rule-body, .office-rule-row {
            transition: none !important;
          }
        }
      `}</style>

      {/* Pinned Scroll Track with Fast 220vh Travel */}
      <div ref={trackRef} className="office-rules-track">
        <div className="office-rules-pin max-w-[1783px] mx-auto w-full">
          {RULES.map((rule, idx) => {
            const isOpen = active === idx;
            return (
              <div
                key={idx}
                className={`office-rule ${isOpen ? "open" : ""}`}
                onClick={() => handleRuleClick(idx)}
              >
                <div className="office-rule-label">{rule.label}</div>
                <div className="office-rule-body">
                  <div className="office-rule-inner">
                    <div className="office-rule-row">
                      <h2 className="office-rule-title">{rule.title}</h2>
                      <p className="office-rule-desc">{rule.desc}</p>
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
