'use client'; // needed in Next.js App Router; harmless elsewhere
import { useEffect, useRef } from 'react';

const TITLE_LINES = ['CULTURE DRIVES', 'PERFORMANCE'];

const PARAGRAPHS = [
  'In today’s world, where markets and organizations are evolving more rapidly than ever before, alertness, awareness, and agile responsiveness are paramount to success. While most business leaders know the importance of organizational culture, many still struggle to grasp how to use culture as a key driver of performance.',
  'Our approach to culture change is designed to help organizations yield sustainable performance results. We offer customized organizational development experiences at the individual, team, and organizational level that connect culture, strategy, and leadership to yield significant and sustainable results.',
  'Our experienced organizational culture and leadership consultants know that no two organizations are alike, and we focus on unique challenges and design a customized approach to help them reach and sustain high-performance cultures.',
  'We use an evidence-based approach to quantify aspects of organizational culture that are proven to be linked to performance outcomes.',
];

const clamp = (v) => Math.max(0, Math.min(1, v));

export default function Info({ className = '' }) {
  const sectionRef = useRef(null);
  const charRefs = useRef([]);
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

      // Heading: letters rise into place from behind overflow clip, all finished by 18% of scroll
      const tp = clamp(p / 0.18);
      const chars = charRefs.current;
      chars.forEach((c, i) => {
        if (!c) return;
        const local = clamp(tp * 1.6 - (i / chars.length) * 0.6);
        c.style.transform = local >= 1 ? 'none' : `translateY(${(1 - local) * 105}%)`;
      });

      // Paragraphs: words fill in sequentially between 15% and 80% of scroll
      const words = wordRefs.current;
      const n = clamp((p - 0.15) / 0.65) * words.length;
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

  let charIndex = 0;
  let wordIndex = 0;

  return (
    <section ref={sectionRef} className={`relative h-[320vh] bg-white ${className}`}>
      {/* Sticky viewport container */}
      <div className="sticky top-0 flex min-h-screen flex-col justify-center gap-6 sm:gap-8 md:gap-10 px-5 sm:px-8 md:px-[6vw] max-w-[1783px] mx-auto pt-16 sm:pt-20 pb-10">
        {/* Kinetic Rising Title: CULTURE DRIVES PERFORMANCE */}
        <h2
          aria-label="Culture drives performance"
          className="flex flex-col gap-1 sm:gap-2 font-[Archivo,'Helvetica_Neue',Arial,sans-serif] text-[length:clamp(2.4rem,6.2vw,5.6rem)] font-black uppercase leading-[.88] text-[#FF5E14] [font-stretch:65%] tracking-tight select-none"
        >
          {TITLE_LINES.map((line, lineIdx) => (
            <div key={lineIdx} className="flex flex-wrap gap-x-[.25em]">
              {line.split(' ').map((word) => (
                <span key={word} aria-hidden="true" className="inline-flex overflow-hidden pb-[.06em]">
                  {word.split('').map((ch, i) => {
                    const idx = charIndex++;
                    return (
                      <span
                        key={i}
                        ref={(el) => (charRefs.current[idx] = el)}
                        className="inline-block translate-y-[105%] will-change-transform motion-reduce:translate-y-0"
                      >
                        {ch}
                      </span>
                    );
                  })}
                </span>
              ))}
            </div>
          ))}
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
