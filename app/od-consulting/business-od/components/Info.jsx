"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";

const PARAGRAPHS = [
  {
    id: 1,
    tag: "Market Agility & Culture",
    text: "In today’s world, where markets and organizations are evolving more rapidly than ever before, alertness, awareness, and agile responsiveness are paramount to success. While most business leaders know the importance of organizational culture, many still struggle to grasp how to use culture as a key driver of performance.",
  },
  {
    id: 2,
    tag: "Sustainable Results",
    text: "Our approach to culture change is designed to help organizations yield sustainable performance results. We offer customized organizational development experiences at the individual, team, and organizational level that connect culture, strategy, and leadership to yield significant and sustainable results.",
  },
  {
    id: 3,
    tag: "Customized Consulting",
    text: "Our experienced organizational culture and leadership consultants know that no two organizations are alike, and we focus on unique challenges and design a customized approach to help them reach and sustain high-performance cultures.",
  },
  {
    id: 4,
    tag: "Evidence-Based Impact",
    text: "We use an evidence-based approach to quantify aspects of organizational culture that are proven to be linked to performance outcomes.",
  },
];

function HighlightParagraph({ item, index, total }) {
  const paragraphRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const updateProgress = useCallback(() => {
    if (!paragraphRef.current) return;
    const rect = paragraphRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight || 800;

    // Start transition when top hits 82% of screen height
    // Complete transition when top reaches 34% of screen height
    const startY = windowHeight * 0.82;
    const endY = windowHeight * 0.34;
    const current = (startY - rect.top) / (startY - endY);
    const clamped = Math.max(0, Math.min(1, current));
    setProgress(clamped);
  }, []);

  useEffect(() => {
    updateProgress();

    let rafId = null;
    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [updateProgress]);

  const words = useMemo(() => item.text.split(" "), [item.text]);
  const isPartiallyActive = progress > 0.05;

  return (
    <div
      ref={paragraphRef}
      className="relative pl-0 md:pl-20 transition-all duration-500"
    >
      {/* Step Indicator Pill & Tag */}
      <div className="flex items-center gap-3 mb-4 sm:mb-5">
        <span
          className="inline-flex items-center justify-center px-2.5 py-1 rounded-[6px] text-[12px] sm:text-[13px] font-semibold transition-colors duration-400"
          style={{
            fontFamily: "Inter, sans-serif",
            backgroundColor: isPartiallyActive ? "#FFF2EB" : "#F3F4F6",
            color: isPartiallyActive ? "#FF5E14" : "#6B7280",
            border: isPartiallyActive
              ? "1px solid #FFD8C4"
              : "1px solid #E5E7EB",
          }}
        >
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <span
          className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors duration-400 font-inter"
          style={{
            color: isPartiallyActive ? "#FF5E14" : "#9CA3AF",
          }}
        >
          {item.tag}
        </span>
      </div>

      {/* Paragraph Text with progressive word-by-word scroll highlighting */}
      <p className="font-ppmori text-[clamp(21px,2.6vw,36px)] leading-[1.38] md:leading-[1.42] tracking-[-0.015em] font-medium select-text">
        {words.map((word, i) => {
          const threshold = words.length > 1 ? i / (words.length - 1) : 0;
          const isHighlighted = progress >= threshold;

          return (
            <span
              key={i}
              className="inline-block transition-colors duration-300 ease-out mr-[0.26em] will-change-[color]"
              style={{
                color: isHighlighted ? "#FF5E14" : "#171717",
              }}
            >
              {word}
            </span>
          );
        })}
      </p>
    </div>
  );
}

export default function Info({ className = "" }) {
  return (
    <section
      className={`relative w-full bg-white font-ppmori py-20 sm:py-28 md:py-36 lg:py-44 overflow-hidden ${className}`}
    >
      <div className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-[800px] mb-16 sm:mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 mb-3.5 sm:mb-4 px-3.5 py-1.5 rounded-full bg-[#FFF2EB] border border-[#FFD8C4]">
            <span
              className="w-2 h-2 rounded-[2px] bg-[#FF5E14] shrink-0"
              aria-hidden="true"
            />
            <span
              className="text-[#FF5E14] font-semibold text-[11px] sm:text-[12.5px] uppercase tracking-[0.14em]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Organizational Development Insights
            </span>
          </div>

          <h3 className="text-[#171717] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.2] tracking-[-0.02em]">
            Connecting culture, leadership, and performance
          </h3>
        </div>

        {/* Highlightable Paragraphs Stack */}
        <div className="space-y-16 sm:space-y-24 md:space-y-32 max-w-[1100px]">
          {PARAGRAPHS.map((item, idx) => (
            <HighlightParagraph
              key={item.id}
              item={item}
              index={idx}
              total={PARAGRAPHS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
