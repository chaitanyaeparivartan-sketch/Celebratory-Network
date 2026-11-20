"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";

const PARAGRAPHS = [
  "In today’s world, where markets and organizations are evolving more rapidly than ever before, alertness, awareness, and agile responsiveness are paramount to success. While most business leaders know the importance of organizational culture, many still struggle to grasp how to use culture as a key driver of performance.",
  "Our approach to culture change is designed to help organizations yield sustainable performance results. We offer customized organizational development experiences at the individual, team, and organizational level that connect culture, strategy, and leadership to yield significant and sustainable results.",
  "Our experienced organizational culture and leadership consultants know that no two organizations are alike, and we focus on unique challenges and design a customized approach to help them reach and sustain high-performance cultures.",
  "We use an evidence-based approach to quantify aspects of organizational culture that are proven to be linked to performance outcomes.",
];

export default function Info({ className = "" }) {
  const sectionRef = useRef(null);
  const firstParaRef = useRef(null);
  const lastParaRef = useRef(null);

  // globalProgress runs continuously from 0.0 to 4.0:
  // [0.0 -> 1.0]: Paragraph 1 highlights. Paragraph 2, 3, 4 remain strictly 0 (black).
  // [1.0 -> 2.0]: Paragraph 1 is 100% finished. Paragraph 2 highlights.
  // [2.0 -> 3.0]: Paragraph 1 & 2 are 100% finished. Paragraph 3 highlights.
  // [3.0 -> 4.0]: Paragraph 1, 2, 3 are 100% finished. Paragraph 4 highlights to completion.
  const [currentProgress, setCurrentProgress] = useState(0);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);

  const numParagraphs = PARAGRAPHS.length;

  const calculateTarget = useCallback(() => {
    // Safety: If user has scrolled to the bottom of the page, complete all paragraphs 100%
    const scrollY = window.scrollY || window.pageYOffset || 0;
    const windowHeight = window.innerHeight || 800;
    const docHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight
    );

    if (scrollY + windowHeight >= docHeight - 30) {
      targetProgressRef.current = numParagraphs;
      return;
    }

    if (!firstParaRef.current || !lastParaRef.current) return;
    const firstRect = firstParaRef.current.getBoundingClientRect();
    const lastRect = lastParaRef.current.getBoundingClientRect();

    // Start point: when top of first paragraph enters 74% of viewport
    const startY = windowHeight * 0.74;

    // End point: when last paragraph reaches comfortable reading line (46% of viewport)
    // This guarantees the last sentence is 100% completed while comfortably in view
    const endY = windowHeight * 0.46;

    const paraDistance = lastRect.top - firstRect.top;
    const totalTravel = (startY - endY) + paraDistance;

    if (totalTravel <= 0) return;

    const scrolled = startY - firstRect.top;
    const raw = (scrolled / totalTravel) * numParagraphs;
    targetProgressRef.current = Math.max(0, Math.min(numParagraphs, raw));
  }, [numParagraphs]);

  useEffect(() => {
    calculateTarget();
    currentProgressRef.current = targetProgressRef.current;
    setCurrentProgress(targetProgressRef.current);

    let rafId = null;
    const loop = () => {
      calculateTarget();
      const diff = targetProgressRef.current - currentProgressRef.current;
      // Smooth slow-motion inertial lerp
      if (Math.abs(diff) > 0.0005) {
        currentProgressRef.current += diff * 0.075;
        setCurrentProgress(currentProgressRef.current);
      } else if (currentProgressRef.current !== targetProgressRef.current) {
        currentProgressRef.current = targetProgressRef.current;
        setCurrentProgress(currentProgressRef.current);
      }
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [calculateTarget]);

  // Pre-parse all paragraphs into words and continuous letter indexing
  const parsedData = useMemo(() => {
    return PARAGRAPHS.map((text) => {
      const words = text.split(" ");
      let runningIndex = 0;

      const parsedWords = words.map((word) => {
        const letters = word.split("").map((char) => {
          const idx = runningIndex++;
          return {
            char,
            index: idx,
          };
        });
        runningIndex++; // space separator
        return { letters };
      });

      return {
        parsedWords,
        totalChars: Math.max(1, runningIndex),
      };
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full bg-white font-ppmori py-14 sm:py-18 md:py-24 lg:py-28 overflow-hidden ${className}`}
    >
      <div className="w-full max-w-[1783px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 sm:space-y-8 md:space-y-9 lg:space-y-10">
          {PARAGRAPHS.map((_, pIdx) => {
            // Strict sequential guarantee:
            // Paragraph pIdx only begins when currentProgress >= pIdx (i.e. previous para is 100% finished)
            let paraProgress = 0;
            if (currentProgress >= pIdx + 1) {
              paraProgress = 1; // 100% finished
            } else if (currentProgress > pIdx) {
              paraProgress = currentProgress - pIdx; // actively scrubbing from 0.0 to 1.0
            } else {
              paraProgress = 0; // has not started yet (strictly black)
            }

            const { parsedWords, totalChars } = parsedData[pIdx];
            const waveWidth = 4.0; // Clean, smooth 4-character color feathering
            const targetCharIndex = paraProgress * (totalChars + waveWidth);

            const isFirst = pIdx === 0;
            const isLast = pIdx === numParagraphs - 1;

            return (
              <div
                key={pIdx}
                ref={isFirst ? firstParaRef : isLast ? lastParaRef : null}
                className="relative w-full"
              >
                <p className="font-ppmori text-[clamp(18px,1.6vw,26px)] sm:text-[clamp(20px,1.8vw,30px)] md:text-[clamp(21px,2.1vw,32px)] leading-[1.4] md:leading-[1.46] tracking-[-0.012em] font-medium select-text">
                  {parsedWords.map((wordObj, wIdx) => (
                    <span
                      key={wIdx}
                      className="inline-block whitespace-nowrap mr-[0.25em]"
                    >
                      {wordObj.letters.map((letter, lIdx) => {
                        const diff = targetCharIndex - letter.index;

                        let color = "#171717";
                        let opacity = 0.9;

                        if (paraProgress >= 1) {
                          // Paragraph 100% complete: Normal size, solid brand orange
                          color = "#FF5E14";
                          opacity = 1;
                        } else if (paraProgress <= 0 || diff < 0) {
                          // Unreached: Normal size, clean black
                          color = "#171717";
                          opacity = 0.88;
                        } else if (diff < waveWidth) {
                          // Active smooth color feathering from black to brand orange
                          const t = diff / waveWidth;
                          const r = Math.round(23 + (255 - 23) * t);
                          const g = Math.round(23 + (94 - 23) * t);
                          const b = Math.round(23 + (20 - 23) * t);
                          color = `rgb(${r}, ${g}, ${b})`;
                          opacity = 0.88 + 0.12 * t;
                        } else {
                          // Settled: Normal size, solid brand orange
                          color = "#FF5E14";
                          opacity = 1;
                        }

                        return (
                          <span
                            key={lIdx}
                            className="inline-block will-change-[color] transition-colors duration-150 ease-out"
                            style={{
                              color,
                              opacity,
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
      </div>
    </section>
  );
}
