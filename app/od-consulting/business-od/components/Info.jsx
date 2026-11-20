"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";

const PARAGRAPHS = [
  "In today’s world, where markets and organizations are evolving more rapidly than ever before, alertness, awareness, and agile responsiveness are paramount to success. While most business leaders know the importance of organizational culture, many still struggle to grasp how to use culture as a key driver of performance.",
  "Our approach to culture change is designed to help organizations yield sustainable performance results. We offer customized organizational development experiences at the individual, team, and organizational level that connect culture, strategy, and leadership to yield significant and sustainable results.",
  "Our experienced organizational culture and leadership consultants know that no two organizations are alike, and we focus on unique challenges and design a customized approach to help them reach and sustain high-performance cultures.",
  "We use an evidence-based approach to quantify aspects of organizational culture that are proven to be linked to performance outcomes.",
];

function LetterScrubParagraph({ text, paragraphIndex }) {
  const paragraphRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const updateProgress = useCallback(() => {
    if (!paragraphRef.current) return;
    const rect = paragraphRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight || 800;

    // Smooth scrub window: starts as paragraph enters viewport, completes near upper third
    const startY = windowHeight * 0.88;
    const endY = windowHeight * 0.24;
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

  // Pre-parse text into words and individual letters with continuous character indexing
  const { parsedWords, totalChars } = useMemo(() => {
    const words = text.split(" ");
    let runningIndex = 0;

    const parsed = words.map((word) => {
      const letters = word.split("").map((char) => {
        const idx = runningIndex++;
        // Deterministic micro-tilt between -3.2deg and +3.2deg for authentic kinetic scrub
        const baseTilt = (((idx * 17 + paragraphIndex * 13) % 9) - 4) * 0.8;
        return {
          char,
          index: idx,
          baseTilt,
        };
      });
      // Count space separator between words
      runningIndex++;
      return {
        letters,
      };
    });

    return {
      parsedWords: parsed,
      totalChars: Math.max(1, runningIndex),
    };
  }, [text, paragraphIndex]);

  // Current scrub cursor position in character units
  const targetCharIndex = progress * totalChars;
  const waveWidth = 5.5; // Width of active kinetic scrub wave in character units

  return (
    <div ref={paragraphRef} className="relative">
      <p className="font-ppmori text-[clamp(18px,1.9vw,28px)] sm:text-[clamp(19px,2.1vw,30px)] leading-[1.32] md:leading-[1.36] tracking-[-0.012em] font-medium select-text">
        {parsedWords.map((wordObj, wIdx) => (
          <span
            key={wIdx}
            className="inline-block whitespace-nowrap mr-[0.24em]"
          >
            {wordObj.letters.map((letter, lIdx) => {
              const diff = targetCharIndex - letter.index;

              let color = "#171717";
              let scale = 1;
              let tilt = 0;
              let translateY = 0;
              let textShadow = "none";
              let opacity = 0.92;

              if (diff < 0) {
                // Stage 0: Unreached - clean rich black
                color = "#171717";
                scale = 1;
                tilt = 0;
                translateY = 0;
                textShadow = "none";
                opacity = 0.9;
              } else if (diff < waveWidth) {
                // Stage 1: Active Letter-by-Letter Kinetic Pop (Matching two26.studio)
                const t = diff / waveWidth;
                const peak = Math.sin(t * Math.PI);

                color = "#FF5E14";
                scale = 1 + 0.12 * peak;
                tilt = letter.baseTilt * peak;
                translateY = -3.2 * peak;
                textShadow =
                  "0.5px 0.5px 0 #FF5E14, -0.5px -0.5px 0 #FF5E14, 0 0 10px rgba(255, 94, 20, 0.45)";
                opacity = 1;
              } else {
                // Stage 2: Settled - smooth high-contrast brand orange
                color = "#FF5E14";
                scale = 1;
                tilt = 0;
                translateY = 0;
                textShadow = "none";
                opacity = 1;
              }

              return (
                <span
                  key={lIdx}
                  className="inline-block will-change-transform will-change-[color]"
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
                  {letter.char}
                </span>
              );
            })}
          </span>
        ))}
      </p>
    </div>
  );
}

export default function Info({ className = "" }) {
  return (
    <section
      className={`relative w-full bg-white font-ppmori py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden ${className}`}
    >
      <div className="w-full max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Paragraphs with tight, refined sentence and paragraph spacing */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14">
          {PARAGRAPHS.map((text, idx) => (
            <LetterScrubParagraph
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
