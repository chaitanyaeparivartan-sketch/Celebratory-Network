"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";

const PARAGRAPHS = [
  "In today’s world, where markets and organizations are evolving more rapidly than ever before, alertness, awareness, and agile responsiveness are paramount to success. While most business leaders know the importance of organizational culture, many still struggle to grasp how to use culture as a key driver of performance.",
  "Our approach to culture change is designed to help organizations yield sustainable performance results. We offer customized organizational development experiences at the individual, team, and organizational level that connect culture, strategy, and leadership to yield significant and sustainable results.",
  "Our experienced organizational culture and leadership consultants know that no two organizations are alike, and we focus on unique challenges and design a customized approach to help them reach and sustain high-performance cultures.",
  "We use an evidence-based approach to quantify aspects of organizational culture that are proven to be linked to performance outcomes.",
];

function HighlightParagraph({ text }) {
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

  const words = useMemo(() => text.split(" "), [text]);

  return (
    <div ref={paragraphRef} className="relative">
      <p className="font-ppmori text-[clamp(22px,2.8vw,38px)] leading-[1.38] md:leading-[1.44] tracking-[-0.015em] font-medium select-text">
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
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Highlightable Paragraphs Stack */}
        <div className="space-y-16 sm:space-y-24 md:space-y-32">
          {PARAGRAPHS.map((text, idx) => (
            <HighlightParagraph key={idx} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
}
