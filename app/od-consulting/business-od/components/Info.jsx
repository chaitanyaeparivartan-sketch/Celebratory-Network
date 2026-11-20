'use client'; // needed in Next.js App Router; harmless elsewhere
import { useEffect, useRef } from 'react';

const BADGE = 'ORGANIZATIONAL DEVELOPMENT INSIGHTS';
const TITLE = 'Culture Drives Performance';
const SUBTITLE = 'Connecting culture, leadership, and performance';

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
      words.forEach((w, i) => {
        if (w) w.dataset.on = String(i < n);
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
      {/* Sticky viewport container without overflow clipping */}
      <div className="sticky top-0 flex min-h-screen flex-col justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 md:py-20 w-full max-w-[1783px] mx-auto">
        {/* Section Header with Eyebrow Badge & Title */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFEAE0] border border-[#FF5E14]/30 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-[1px] bg-[#FF5E14]" />
            <span className="font-inter text-xs sm:text-[13px] font-semibold uppercase tracking-[0.14em] text-[#FF5E14]">
              {BADGE}
            </span>
          </div>

          <h2 className="font-ppmori text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold text-[#141414] leading-[1.15] tracking-[-0.025em]">
            {TITLE}
            <span className="block text-lg sm:text-xl md:text-2xl lg:text-[28px] font-medium text-[#FF5E14] mt-1.5 sm:mt-2 tracking-normal">
              {SUBTITLE}
            </span>
          </h2>
        </div>

        {/* Highlightable Paragraphs Stack */}
        <div className="grid w-full gap-5 sm:gap-6 md:gap-7 text-[clamp(17px,1.5vw,24px)] leading-[1.46] font-medium font-ppmori">
          {PARAGRAPHS.map((para, pi) => (
            <p key={pi}>
              {para.split(' ').map((word, wi, arr) => {
                const idx = wordIndex++;
                return (
                  <span key={wi}>
                    <span
                      ref={(el) => (wordRefs.current[idx] = el)}
                      data-on="false"
                      className="text-[#171717]/25 transition-colors duration-150 data-[on=true]:text-[#FF5E14] motion-reduce:text-[#FF5E14]"
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
