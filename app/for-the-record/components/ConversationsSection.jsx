"use client";

import { useEffect, useRef, useState, useCallback } from "react";

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
    <section className="overflow-hidden bg-[#1d56a8] pt-10 sm:pt-12 md:pt-14 pb-8 sm:pb-10 text-center text-white relative">
      <div className="mx-auto max-w-[1080px] px-5">
        <p className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-semibold uppercase tracking-wide text-white/90 mb-1">
          <span className="h-2 w-2 rounded-sm bg-white" />
          The Conversations
        </p>

        <h2 className="mb-2 whitespace-nowrap text-[clamp(22px,4vw,46px)] font-bold leading-[1.1] tracking-tight">
          Underneath the conversation
        </h2>

        <p className="text-sm sm:text-[15px] leading-relaxed text-white/90 max-w-[820px] mx-auto font-['Inter',sans-serif]">
          When challenges persist despite new processes and revised frameworks,
          the issue is rarely a lack of knowledge.
          <br className="hidden min-[1100px]:inline" /> It is often what remains
          unsaid. Swipe through to see how an Organization Development (OD) lens
          <br className="hidden min-[1100px]:inline" /> helps uncover, and solve,
          the conversation underneath the conversation.
        </p>
      </div>

      {/* Carousel */}
      <div
        ref={rail}
        onScroll={updateActive}
        tabIndex={0}
        aria-label="Carousel"
        className="relative flex snap-x snap-mandatory gap-5 sm:gap-6 overflow-x-auto px-[10%] pt-5 pb-3 sm:pt-6 sm:pb-4 text-left [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing"
      >
        {slides.map((s, i) => (
          <figure
            key={s.src}
            onClick={() => goTo(i)}
            className={`m-0 w-[min(680px,80%)] sm:w-[min(700px,75%)] md:w-[min(720px,68%)] flex-none snap-center overflow-hidden rounded-xl shadow-2xl transition-all duration-300 cursor-pointer ${
              i === active
                ? "scale-100 opacity-100 ring-2 ring-white/30"
                : "scale-[.94] opacity-45 hover:opacity-70"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.src}
              alt={s.alt}
              className="block h-auto w-full rounded-xl select-none"
              draggable={false}
            />
          </figure>
        ))}
      </div>

      {/* Navigation Controls: Backward and Forward Icons Only */}
      <div className="mt-4 sm:mt-5 flex items-center justify-center gap-4">
        {/* Backward / Previous Button */}
        <button
          type="button"
          onClick={goPrev}
          disabled={active === 0}
          aria-label="Previous slide"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all hover:bg-white/30 hover:scale-105 active:scale-95 disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer shadow-md"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Forward / Next Button */}
        <button
          type="button"
          onClick={goNext}
          disabled={active === slides.length - 1}
          aria-label="Next slide"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all hover:bg-white/30 hover:scale-105 active:scale-95 disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer shadow-md"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
