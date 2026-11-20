"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";

const PARAGRAPHS = [
  "In today’s world, where markets and organizations are evolving more rapidly than ever before, alertness, awareness, and agile responsiveness are paramount to success. While most business leaders know the importance of organizational culture, many still struggle to grasp how to use culture as a key driver of performance.",
  "Our approach to culture change is designed to help organizations yield sustainable performance results. We offer customized organizational development experiences at the individual, team, and organizational level that connect culture, strategy, and leadership to yield significant and sustainable results.",
  "Our experienced organizational culture and leadership consultants know that no two organizations are alike, and we focus on unique challenges and design a customized approach to help them reach and sustain high-performance cultures.",
  "We use an evidence-based approach to quantify aspects of organizational culture that are proven to be linked to performance outcomes.",
];

export default function Info({ className = "" }) {
  const containerRef = useRef(null);
  const [globalProgress, setGlobalProgress] = useState(0);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight || 800;

    // Total scrollable travel distance of the pinned container
    const totalDistance = rect.height - windowHeight;
    if (totalDistance <= 0) return;

    // Progress from 0 (container hits top of screen) to 1 (reaches bottom of container)
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / totalDistance));
    setGlobalProgress(progress);
  }, []);

  useEffect(() => {
    handleScroll();

    let rafId = null;
    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [handleScroll]);

  const numParagraphs = PARAGRAPHS.length;
  const sliceSize = 1 / numParagraphs; // 0.25 per paragraph

  // Pre-parse all paragraphs into words and continuous letter indexes
  const parsedData = useMemo(() => {
    return PARAGRAPHS.map((text, pIdx) => {
      const words = text.split(" ");
      let runningIndex = 0;

      const parsedWords = words.map((word) => {
        const letters = word.split("").map((char) => {
          const idx = runningIndex++;
          // Deterministic micro-tilt between -3.2deg and +3.2deg
          const baseTilt = (((idx * 17 + pIdx * 13) % 9) - 4) * 0.8;
          return {
            char,
            index: idx,
            baseTilt,
          };
        });
        runningIndex++; // word space
        return { letters };
      });

      return {
        parsedWords,
        totalChars: Math.max(1, runningIndex),
      };
    });
  }, []);

  // Current active paragraph index
  const activeParagraphIndex = Math.min(
    numParagraphs - 1,
    Math.floor(globalProgress / sliceSize)
  );

  return (
    // Outer scroll track: 360vh allows smooth, comfortable scrub travel for each paragraph
    <section
      ref={containerRef}
      className={`relative w-full h-[360vh] bg-white font-ppmori ${className}`}
    >
      {/* Sticky Fullscreen Stage: Pins in viewport while user scrolls through all 4 paragraphs */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between items-center overflow-hidden px-5 sm:px-8 lg:px-12 py-12 sm:py-16 md:py-20 select-text">
        {/* Top Minimal Progress Indicator */}
        <div className="w-full max-w-[1100px] flex items-center justify-between pointer-events-none z-20">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-[2px] bg-[#FF5E14]" aria-hidden="true" />
            <span
              className="text-[#FF5E14] font-semibold text-[11px] sm:text-[12px] uppercase tracking-[0.14em]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Perspective {activeParagraphIndex + 1} of {numParagraphs}
            </span>
          </div>

          {/* Slim segmented progress track */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {PARAGRAPHS.map((_, idx) => {
              const segStart = idx * sliceSize;
              const segProgress = Math.max(
                0,
                Math.min(1, (globalProgress - segStart) / sliceSize)
              );

              return (
                <div
                  key={idx}
                  className="w-8 sm:w-12 h-1.5 rounded-full bg-[#E5E7EB] overflow-hidden"
                >
                  <div
                    className="h-full bg-[#FF5E14] transition-all duration-150"
                    style={{ width: `${(segProgress * 100).toFixed(0)}%` }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Center Stage: Renders ONE paragraph at a time */}
        <div className="relative w-full max-w-[1100px] flex-1 flex items-center justify-center my-auto">
          {PARAGRAPHS.map((_, pIdx) => {
            const sliceStart = pIdx * sliceSize;
            const sliceEnd = (pIdx + 1) * sliceSize;

            // Check if paragraph is within its visible window (with small cross-fade buffer)
            const isVisible =
              globalProgress >= sliceStart - 0.04 &&
              globalProgress <= sliceEnd + 0.04;

            if (!isVisible) return null;

            // Local progress within this paragraph's slice (0 to 1)
            const localProgress = Math.max(
              0,
              Math.min(1, (globalProgress - sliceStart) / sliceSize)
            );

            // Smooth entrance and exit opacity & subtle Y translation
            let opacity = 1;
            let translateY = 0;

            const isFirst = pIdx === 0;
            const isLast = pIdx === numParagraphs - 1;

            if (localProgress < 0.12 && !isFirst) {
              // Fade in
              const t = localProgress / 0.12;
              opacity = t;
              translateY = (1 - t) * 16;
            } else if (localProgress > 0.88 && !isLast) {
              // Fade out
              const t = (localProgress - 0.88) / 0.12;
              opacity = 1 - t;
              translateY = -t * 16;
            }

            // Letter scrub range within this paragraph: 0.10 -> 0.82
            const scrubP = Math.max(
              0,
              Math.min(1, (localProgress - 0.10) / (0.82 - 0.10))
            );

            const { parsedWords, totalChars } = parsedData[pIdx];
            const targetCharIndex = scrubP * totalChars;
            const waveWidth = 5.0; // Active kinetic pop wave span in character units

            return (
              <div
                key={pIdx}
                className="absolute inset-0 flex items-center justify-center transition-all duration-200"
                style={{
                  opacity,
                  transform: `translate3d(0, ${translateY.toFixed(1)}px, 0)`,
                  pointerEvents: opacity > 0.2 ? "auto" : "none",
                }}
              >
                <p className="font-ppmori text-center text-[clamp(20px,2.4vw,34px)] leading-[1.38] md:leading-[1.44] tracking-[-0.012em] font-medium select-text">
                  {parsedWords.map((wordObj, wIdx) => (
                    <span
                      key={wIdx}
                      className="inline-block whitespace-nowrap mr-[0.26em]"
                    >
                      {wordObj.letters.map((letter, lIdx) => {
                        const diff = targetCharIndex - letter.index;

                        let color = "#171717";
                        let scale = 1;
                        let tilt = 0;
                        let letterY = 0;
                        let textShadow = "none";
                        let letterOpacity = 0.92;

                        if (diff < 0) {
                          // Unreached: Clean black
                          color = "#171717";
                          scale = 1;
                          tilt = 0;
                          letterY = 0;
                          textShadow = "none";
                          letterOpacity = 0.9;
                        } else if (diff < waveWidth) {
                          // Active Kinetic Scrub (two26.studio style)
                          const t = diff / waveWidth;
                          const peak = Math.sin(t * Math.PI);

                          color = "#FF5E14";
                          scale = 1 + 0.12 * peak;
                          tilt = letter.baseTilt * peak;
                          letterY = -3.2 * peak;
                          textShadow =
                            "0.5px 0.5px 0 #FF5E14, -0.5px -0.5px 0 #FF5E14, 0 0 10px rgba(255, 94, 20, 0.45)";
                          letterOpacity = 1;
                        } else {
                          // Settled: Solid brand orange
                          color = "#FF5E14";
                          scale = 1;
                          tilt = 0;
                          letterY = 0;
                          textShadow = "none";
                          letterOpacity = 1;
                        }

                        return (
                          <span
                            key={lIdx}
                            className="inline-block will-change-transform will-change-[color]"
                            style={{
                              color,
                              opacity: letterOpacity,
                              transform: `translate3d(0, ${letterY.toFixed(1)}px, 0) scale(${scale.toFixed(3)}) rotate(${tilt.toFixed(1)}deg)`,
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
          })}
        </div>

        {/* Bottom Scroll Hint */}
        <div className="w-full flex items-center justify-center pointer-events-none z-20">
          <span
            className="text-[#9CA3AF] text-[11px] sm:text-[12px] uppercase tracking-[0.16em]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Scroll to continue
          </span>
        </div>
      </div>
    </section>
  );
}
