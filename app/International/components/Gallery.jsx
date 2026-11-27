"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "@/app/components/Common/Reveal";

const GALLERY_ITEMS = [
  {
    image: "/international/gallery/gallery-1.webp",
    alt: "Global leadership summit circle gathering",
    rotate: "-rotate-[5deg]",
  },
  {
    image: "/international/gallery/gallery-2.webp",
    alt: "Women in leadership experiential cohort",
    rotate: "rotate-[3.8deg]",
  },
  {
    image: "/international/gallery/gallery-3.webp",
    alt: "Experiential systemic process exercise",
    rotate: "-rotate-[4.5deg]",
  },
  {
    image: "/international/gallery/gallery-4.webp",
    alt: "Leadership presence and trust exercise",
    rotate: "rotate-[4.2deg]",
  },
  {
    image: "/international/gallery/gallery-5.webp",
    alt: "Cross-cultural leadership team selfie celebration",
    rotate: "-rotate-[4deg]",
  },
  {
    image: "/international/gallery/gallery-6.webp",
    alt: "Deep dialogue and coaching circle",
    rotate: "rotate-[3.6deg]",
  },
  {
    image: "/international/gallery/gallery-7.webp",
    alt: "International cohort gathering",
    rotate: "-rotate-[4.8deg]",
  },
  {
    image: "/international/gallery/gallery-8.webp",
    alt: "Collaborative inquiry and reflection",
    rotate: "rotate-[3.9deg]",
  },
  {
    image: "/international/gallery/gallery-9.webp",
    alt: "Grounding and emergence breakout session",
    rotate: "-rotate-[4.2deg]",
  },
];

// Duplicate items for continuous seamless loop
const LOOP_ITEMS = [...GALLERY_ITEMS, ...GALLERY_ITEMS];

export default function Gallery({
  eyebrow = "Gallery",
  title = "Leadership around the world.",
  description = "Moments of connection, learning, and systemic transformation across our international leadership journeys.",
  items = LOOP_ITEMS,
}) {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Smooth continuous auto-scroll with seamless loop
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let animId;
    const speed = 0.75; // Smooth cinematic glide speed (px per frame)

    const step = () => {
      if (!isPaused && el) {
        el.scrollLeft += speed;
        const halfWidth = el.scrollWidth / 2;
        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  const scrollManual = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden pt-8 sm:pt-10 md:pt-12 pb-14 sm:pb-18 md:pb-20 select-none relative bg-white">
      {/* Heading Container */}
      <Reveal
        direction="up"
        duration={700}
        className="flex flex-col items-center justify-center text-center mb-6 sm:mb-8 px-6"
      >
        {/* Section Chip */}
        <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
          <span className="w-1.5 h-1.5 rounded-[1px] bg-[#FF5E14]" />
          <span
            className="text-[#242424] font-medium text-[13px] sm:text-[14px] leading-[18px] tracking-[0.24px] uppercase"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {eyebrow}
          </span>
        </div>

        {/* Section Title */}
        <h2
          className="text-[#242424] font-semibold text-3xl sm:text-4xl md:text-[52px] leading-[1.05] sm:leading-[1.12] tracking-[-0.8px]"
          style={{
            fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
          }}
        >
          {title}
        </h2>
      </Reveal>

      {/* Card Window Viewport with Auto-Scroll & Edge Fades */}
      <Reveal
        direction="up"
        duration={750}
        delay={120}
        className="relative mx-auto w-full max-w-[1600px] px-4 sm:px-6"
      >
        {/* Left and Right Gradient Fades */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10"
        />

        <div
          ref={trackRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex w-full items-center overflow-x-auto pt-8 pb-10 sm:pt-10 sm:pb-12 md:pt-12 md:pb-14 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing touch-pan-x"
        >
          <div className="flex items-center gap-4 sm:gap-7 md:gap-10 lg:gap-12 shrink-0 py-4 px-2 sm:px-4">
            {items.map((item, i) => (
              <div
                key={i}
                className={`
                  group/photo
                  relative
                  w-[170px] h-[230px]
                  sm:w-[210px] sm:h-[280px]
                  md:w-[240px] md:h-[320px]
                  lg:w-[260px] lg:h-[340px]
                  flex-shrink-0
                  rounded-[14px]
                  overflow-hidden
                  bg-white
                  shadow-[0_4px_24px_rgba(0,0,0,0.06)]
                  border border-black/[0.04]
                  transition-all duration-500 ease-out
                  hover:z-30 hover:scale-[1.08] hover:-translate-y-3 hover:rotate-0 hover:shadow-[0_24px_50px_rgba(0,0,0,0.18)]
                  cursor-pointer
                  ${item.rotate}
                `}
                style={{ borderRadius: "14px" }}
              >
                <Image
                  src={item.image}
                  alt={item.alt || `International moment ${(i % GALLERY_ITEMS.length) + 1}`}
                  fill
                  sizes="(max-width: 640px) 220px, (max-width: 1024px) 240px, 260px"
                  className="object-cover object-center rounded-[14px] transition-transform duration-700 ease-out group-hover/photo:scale-108"
                  style={{ borderRadius: "14px" }}
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
