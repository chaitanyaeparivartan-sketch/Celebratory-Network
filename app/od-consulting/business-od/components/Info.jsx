'use client'; // needed in Next.js App Router; harmless elsewhere
import { useEffect, useRef } from 'react';

const PARAGRAPHS = [
  'In today’s world, where markets and organizations are evolving more rapidly than ever before, alertness, awareness, and agile responsiveness are paramount to success. While most business leaders know the importance of organizational culture, many still struggle to grasp how to use culture as a key driver of performance.',
  'Our approach to culture change is designed to help organizations yield sustainable performance results. We offer customized organizational development experiences at the individual, team, and organizational level that connect culture, strategy, and leadership to yield significant and sustainable results.',
  'Our experienced organizational culture and leadership consultants know that no two organizations are alike, and we focus on unique challenges and design a customized approach to help them reach and sustain high-performance cultures.',
  'We use an evidence-based approach to quantify aspects of organizational culture that are proven to be linked to performance outcomes.',
];

const clamp = (v) => Math.max(0, Math.min(1, v));

export default function Info({ className = '' }) {
  const sectionRef = useRef(null);
  const wordRefs = useRef([]);

  useEffect(() => {
    const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;

    const update = () => {
      const section = sectionRef.current;
      if (!section || reduce) return;
      const rect = section.getBoundingClientRect();
      const scrollableDist = rect.height - window.innerHeight;
      if (scrollableDist <= 0) return;

      const p = clamp(-rect.top / scrollableDist);

      // Paragraphs: words fill in sequentially between 5% and 85% of scroll
      const words = wordRefs.current;
      const n = clamp((p - 0.05) / 0.80) * words.length;
      const activeIdx = Math.floor(n);

      words.forEach((w, i) => {
        if (!w) return;
        if (i < activeIdx) {
          w.dataset.state = 'done';
        } else if (i === activeIdx && p > 0.05 && p < 0.85) {
          w.dataset.state = 'active';
        } else {
          w.dataset.state = 'pending';
        }
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, []);

  let wordIndex = 0;

  return (
    <section ref={sectionRef} className={`relative min-h-[260vh] bg-white ${className}`}>
      {/* Sticky viewport container */}
      <div className="sticky top-0 flex min-h-screen flex-col justify-center gap-6 sm:gap-8 md:gap-10 px-5 sm:px-8 md:px-[6vw] max-w-[1783px] mx-auto pt-16 sm:pt-20 pb-10">
        {/* Normal Heading: Culture Drives Performance */}
        <h2 className="font-ppmori text-3xl sm:text-4xl md:text-[46px] lg:text-[52px] font-semibold tracking-[-0.8px] leading-[1.08] text-black">
          Culture Drives Performance
        </h2>

        {/* Highlightable Paragraphs Stack */}
        <div className="grid w-full gap-3 sm:gap-4 md:gap-5 text-[clamp(15px,1.25vw,21px)] leading-[1.46] font-medium font-ppmori">
          {PARAGRAPHS.map((para, pi) => (
            <p key={pi}>
              {para.split(' ').map((word, wi, arr) => {
                const idx = wordIndex++;
                return (
                  <span key={wi}>
                    <span
                      ref={(el) => (wordRefs.current[idx] = el)}
                      data-state="pending"
                      className="text-[#171717]/25 transition-colors duration-150 data-[state=active]:text-[#FF5E14] data-[state=done]:text-[#171717] motion-reduce:text-[#171717]"
                    >
                      {word}
                    </span>
                    {wi < arr.length - 1 ? ' ' : ''}
                  </span>
                );
              })}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
