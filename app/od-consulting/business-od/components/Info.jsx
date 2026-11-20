"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";

const PARAGRAPHS = [
  "In today’s world, where markets and organizations are evolving more rapidly than ever before, alertness, awareness, and agile responsiveness are paramount to success. While most business leaders know the importance of organizational culture, many still struggle to grasp how to use culture as a key driver of performance.",
  "Our approach to culture change is designed to help organizations yield sustainable performance results. We offer customized organizational development experiences at the individual, team, and organizational level that connect culture, strategy, and leadership to yield significant and sustainable results.",
  "Our experienced organizational culture and leadership consultants know that no two organizations are alike, and we focus on unique challenges and design a customized approach to help them reach and sustain high-performance cultures.",
  "We use an evidence-based approach to quantify aspects of organizational culture that are proven to be linked to performance outcomes.",
];

function SingleParagraphScrub({ text, paragraphIndex }) {
  const paragraphRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);

  const calculateTarget = useCallback(() => {
    if (!paragraphRef.current) return;
    const rect = paragraphRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight || 800;

    // Generous, slow scrub travel window:
    // Starts as paragraph enters lower viewport (82%)
    // Slowly glides across viewport until 18% near the top
    const startY = windowHeight * 0.82;
    const endY = windowHeight * 0.18;
    const current = (startY - rect.top) / (startY - endY);
    targetProgressRef.current = Math.max(0, Math.min(1, current));
  }, []);

  useEffect(() => {
    calculateTarget();
    currentProgressRef.current = targetProgressRef.current;
    setProgress(targetProgressRef.current);

    let rafId = null;
    const loop = () => {
      calculateTarget();
      const diff = targetProgressRef.current - currentProgressRef.current;
      // Smooth slow-motion dampening factor (0.065 creates silky, slow inertial scrub)
      if (Math.abs(diff) > 0.0006) {
        currentProgressRef.current += diff * 0.065;
        setProgress(currentProgressRef.current);
      } else if (currentProgressRef.current !== targetProgressRef.current) {
        currentProgressRef.current = targetProgressRef.current;
        setProgress(currentProgressRef.current);
      }
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [calculateTarget]);

  // Pre-parse text into words and individual letters with continuous character indexing
  const { parsedWords, totalChars } = useMemo(() => {
    const words = text.split(" ");
    let runningIndex = 0;

    const parsed = words.map((word) => {
      const letters = word.split("").map((char) => {
        const idx = runningIndex++;
        // Deterministic micro-tilt between -3.2deg and +3.2deg
        const baseTilt = (((idx * 17 + paragraphIndex * 13) % 9) - 4) * 0.8;
        return {
          char,
          index: idx,
          baseTilt,
        };
      });
      runningIndex++; // space separator
      return { letters };
    });

    return {
      parsedWords: parsed,
      totalChars: Math.max(1, runningIndex),
    };
  }, [text, paragraphIndex]);

  const targetCharIndex = progress * totalChars;
  const waveWidth = 8.5; // Wider, slower kinetic wave span in character units

  return (
    <div ref={paragraphRef} className="relative w-full">
      <p className="font-ppmori text-[clamp(21px,2.1vw,36px)] sm:text-[clamp(23px,2.3vw,40px)] leading-[1.38] md:leading-[1.42] tracking-[-0.012em] font-medium select-text">
        {parsedWords.map((wordObj, wIdx) => (
          <span
            key={wIdx}
            className="inline-block whitespace-nowrap mr-[0.25em]"
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
                // Unreached: Clean black
                color = "#171717";
                scale = 1;
                tilt = 0;
                translateY = 0;
                textShadow = "none";
                opacity = 0.9;
              } else if (diff < waveWidth) {
                // Active Letter-by-Letter Kinetic Pop (Slow, smooth arc)
                const t = diff / waveWidth;
                const peak = Math.sin(t * Math.PI);

                color = "#FF5E14";
                scale = 1 + 0.12 * peak;
                tilt = letter.baseTilt * peak;
                translateY = -3.2 * peak;
                textShadow =
                  "0.5px 0.5px 0 #FF5E14, -0.5px -0.5px 0 #FF5E14, 0 0 12px rgba(255, 94, 20, 0.45)";
                opacity = 1;
              } else {
                // Settled: Solid high-contrast brand orange
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
                      "transform 0.42s cubic-bezier(0.16, 1, 0.3, 1), color 0.48s ease, text-shadow 0.48s ease, opacity 0.48s ease",
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
      className={`relative w-full bg-white font-ppmori py-14 sm:py-18 md:py-24 lg:py-28 overflow-hidden ${className}`}
    >
      {/* Aligns directly to the Navbar max-width [1783px] and horizontal padding */}
      <div className="w-full max-w-[1783px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 sm:space-y-8 md:space-y-9 lg:space-y-10">
          {PARAGRAPHS.map((text, idx) => (
            <SingleParagraphScrub
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
