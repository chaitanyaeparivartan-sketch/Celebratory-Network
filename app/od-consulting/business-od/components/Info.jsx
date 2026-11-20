"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";

const PARAGRAPHS = [
  "In today’s world, where markets and organizations are evolving more rapidly than ever before, alertness, awareness, and agile responsiveness are paramount to success. While most business leaders know the importance of organizational culture, many still struggle to grasp how to use culture as a key driver of performance.",
  "Our approach to culture change is designed to help organizations yield sustainable performance results. We offer customized organizational development experiences at the individual, team, and organizational level that connect culture, strategy, and leadership to yield significant and sustainable results.",
  "Our experienced organizational culture and leadership consultants know that no two organizations are alike, and we focus on unique challenges and design a customized approach to help them reach and sustain high-performance cultures.",
  "We use an evidence-based approach to quantify aspects of organizational culture that are proven to be linked to performance outcomes.",
];

function KineticScrubParagraph({ text, paragraphIndex }) {
  const paragraphRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const updateProgress = useCallback(() => {
    if (!paragraphRef.current) return;
    const rect = paragraphRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight || 800;

    // Start scrubbing when paragraph enters bottom of screen (86%)
    // Complete scrub when paragraph moves past upper-middle reading focal point (20%)
    const startY = windowHeight * 0.86;
    const endY = windowHeight * 0.20;
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
  const totalWords = words.length;

  return (
    <div ref={paragraphRef} className="relative">
      <p className="font-ppmori text-[clamp(22px,2.9vw,40px)] leading-[1.4] md:leading-[1.46] tracking-[-0.015em] font-medium select-text">
        {words.map((word, i) => {
          // Word milestone threshold along paragraph scrub progress
          const threshold = totalWords > 1 ? i / (totalWords - 1) : 0;
          const scrubWindow = 0.055; // Width of active kinetic wave
          const diff = progress - threshold;

          // Deterministic pseudo-random tilt between -3.2deg and +3.2deg for authentic kinetic feel
          const baseTilt = (((i * 19 + paragraphIndex * 13) % 9) - 4) * 0.8;

          let color = "#171717";
          let scale = 1;
          let tilt = 0;
          let translateY = 0;
          let textShadow = "none";
          let opacity = 0.95;

          if (diff < 0) {
            // Stage 0: Unreached - clean rich black
            color = "#171717";
            scale = 1;
            tilt = 0;
            translateY = 0;
            textShadow = "none";
            opacity = 0.9;
          } else if (diff < scrubWindow) {
            // Stage 1: Active Kinetic Wave Scrub (Inspired by two26.studio)
            // Arc peaks in the middle of the wave: scale 1.12, micro-tilt, subtle lift, incandescent glow
            const t = diff / scrubWindow;
            const peak = Math.sin(t * Math.PI);

            color = "#FF5E14";
            scale = 1 + 0.12 * peak;
            tilt = baseTilt * peak;
            translateY = -3.5 * peak;
            textShadow =
              "0.6px 0.6px 0 #FF5E14, -0.6px -0.6px 0 #FF5E14, 0 0 12px rgba(255, 94, 20, 0.45)";
            opacity = 1;
          } else {
            // Stage 2: Settled - smooth, solid high-contrast brand orange
            color = "#FF5E14";
            scale = 1;
            tilt = 0;
            translateY = 0;
            textShadow = "none";
            opacity = 1;
          }

          return (
            <span
              key={i}
              className="inline-block mr-[0.27em] will-change-transform will-change-[color]"
              style={{
                color,
                opacity,
                transform: `translate3d(0, ${translateY.toFixed(1)}px, 0) scale(${scale.toFixed(3)}) rotate(${tilt.toFixed(1)}deg)`,
                textShadow,
                transformOrigin: "center bottom",
                transition:
                  "transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), color 0.24s ease, text-shadow 0.24s ease, opacity 0.24s ease",
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
      className={`relative w-full bg-white font-ppmori py-24 sm:py-32 md:py-40 lg:py-48 overflow-hidden ${className}`}
    >
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Highlightable Paragraphs Stack */}
        <div className="space-y-18 sm:space-y-24 md:space-y-36">
          {PARAGRAPHS.map((text, idx) => (
            <KineticScrubParagraph
              key={idx}
              text={text}
              paragraphIndex={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
