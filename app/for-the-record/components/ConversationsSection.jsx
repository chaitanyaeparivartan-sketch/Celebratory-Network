"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Reveal from "@/app/components/Common/Reveal";

const slides = [
  {
    src: "/images/conversations/01-cover.jpg",
    alt: "The conversations underneath the conversation",
  },
  {
    src: "/images/conversations/02-two-conversations.jpg",
    alt: "There are often two conversations happening at the same time in an organization",
  },
  {
    src: "/images/conversations/03-we-can-hear.jpg",
    alt: "The conversation we can hear",
  },
  {
    src: "/images/conversations/04-underneath.jpg",
    alt: "And then there is the conversation underneath",
  },
  {
    src: "/images/conversations/05-two-levels.jpg",
    alt: "Two different levels of conversation",
  },
  {
    src: "/images/conversations/06-real-work.jpg",
    alt: "Sometimes that is where real work begins",
  },
  {
    src: "/images/conversations/07-contact.jpg",
    alt: "Contact Celebratory Network",
  },
];

export default function ConversationsSection() {
  const rail = useRef(null);
  const [active, setActive] = useState(0);

  // Mark the slide closest to the centre of the rail as active.
  const updateActive = useCallback(() => {
    const el = rail.current;
    if (!el || !el.children.length) return;
    const centre = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let min = Infinity;
    [...el.children].forEach((child, i) => {
      const d = Math.abs(child.offsetLeft + child.offsetWidth / 2 - centre);
      if (d < min) {
        min = d;
        best = i;
      }
    });
    setActive(best);
  }, []);

  useEffect(() => {
    updateActive();
    window.addEventListener("resize", updateActive);
    return () => window.removeEventListener("resize", updateActive);
  }, [updateActive]);

  const goTo = (i) => {
    const el = rail.current;
    if (!el || !el.children[i]) return;
    const slide = el.children[i];
    el.scrollTo({
      left: slide.offsetLeft - (el.clientWidth - slide.offsetWidth) / 2,
      behavior: "smooth",
    });
  };

  const goPrev = () => {
    if (active > 0) goTo(active - 1);
  };

  const goNext = () => {
    if (active < slides.length - 1) goTo(active + 1);
  };

  return (
    <section className="overflow-hidden bg-[#1d56a8] pt-16 sm:pt-20 md:pt-24 pb-14 sm:pb-18 md:pb-20 text-center text-white relative">
      {/* Background ambient lighting glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/10 blur-[120px] rounded-full"
      />

      {/* Header with scroll reveal */}
      <Reveal direction="up" duration={750} distance={24} className="mx-auto max-w-[1080px] px-5 sm:px-8 mb-8 sm:mb-12 md:mb-14 relative z-10">
        {/* Eyebrow Chip */}
        <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
          <span className="w-2 h-2 rounded-[1px] bg-white inline-block shadow-sm" />
          <span
            className="text-white/95 font-medium text-[12px] sm:text-[13px] leading-[18px] tracking-[0.2em] uppercase"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            The Conversations
          </span>
        </div>

        {/* Section Title */}
        <h2
          className="text-white font-semibold text-3xl sm:text-4xl md:text-[52px] leading-[1.15] tracking-[-0.8px] mb-3 sm:mb-4 drop-shadow-sm"
          style={{ fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif' }}
        >
          Underneath the conversation
        </h2>

        {/* Lede Paragraph */}
        <p
          className="text-sm sm:text-base leading-relaxed text-white/90 max-w-[820px] mx-auto font-normal"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          When challenges persist despite new processes and revised frameworks,
          the issue is rarely a lack of knowledge.
          <br className="hidden min-[1100px]:inline" /> It is often what remains
          unsaid. Swipe through to see how an Organization Development (OD) lens
          <br className="hidden min-[1100px]:inline" /> helps uncover, and solve,
          the conversation underneath the conversation.
        </p>
      </Reveal>

      {/* Carousel with scroll reveal entrance */}
      <Reveal direction="up" duration={850} delay={120} distance={32}>
        <div
          ref={rail}
          onScroll={updateActive}
          tabIndex={0}
          aria-label="Carousel"
          className="relative flex items-center snap-x snap-mandatory gap-5 sm:gap-6 overflow-x-auto px-[10%] pt-6 pb-28 sm:pt-8 sm:pb-32 text-left [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing"
        >
          {slides.map((s, i) => (
            <figure
              key={s.src}
              onClick={() => goTo(i)}
              className={`group/slide my-2 w-[min(680px,80%)] sm:w-[min(700px,75%)] md:w-[min(720px,68%)] flex-none snap-center overflow-hidden rounded-xl transition-all duration-500 ease-out cursor-pointer ${
                i === active
                  ? "scale-100 opacity-100 shadow-[0_24px_50px_rgba(0,0,0,0.45)] ring-2 ring-white/40"
                  : "scale-[.93] opacity-45 hover:opacity-75 hover:scale-[.96] shadow-xl"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.src}
                alt={s.alt}
                className="block h-auto w-full rounded-xl select-none transition-transform duration-700 ease-out group-hover/slide:scale-[1.02]"
                draggable={false}
              />
            </figure>
          ))}
        </div>
      </Reveal>

      {/* Navigation Controls: Backward and Forward Icons Only */}
      <Reveal direction="up" duration={700} delay={180} distance={16} className="-mt-16 sm:-mt-20 flex items-center justify-center gap-4 relative z-10">
        {/* Backward / Previous Button */}
        <button
          type="button"
          onClick={goPrev}
          disabled={active === 0}
          aria-label="Previous slide"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30 hover:scale-110 active:scale-95 disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer shadow-lg hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
        >
          <svg className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Forward / Next Button */}
        <button
          type="button"
          onClick={goNext}
          disabled={active === slides.length - 1}
          aria-label="Next slide"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30 hover:scale-110 active:scale-95 disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer shadow-lg hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
        >
          <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </Reveal>
    </section>
  );
}
