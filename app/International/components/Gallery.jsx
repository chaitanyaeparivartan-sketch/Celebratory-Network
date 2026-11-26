"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "@/app/components/Common/Reveal";

const GALLERY_ITEMS = [
  {
    image: "/international/gallery/gallery-1.jpg",
    alt: "Global leadership summit circle gathering",
    rotate: "-rotate-[5deg]",
  },
  {
    image: "/international/gallery/gallery-2.jpg",
    alt: "Women in leadership experiential cohort",
    rotate: "rotate-[3.8deg]",
  },
  {
    image: "/international/gallery/gallery-3.jpg",
    alt: "Experiential systemic process exercise",
    rotate: "-rotate-[4.5deg]",
  },
  {
    image: "/international/gallery/gallery-4.jpg",
    alt: "Leadership presence and trust exercise",
    rotate: "rotate-[4.2deg]",
  },
  {
    image: "/international/gallery/gallery-5.jpg",
    alt: "Cross-cultural leadership team selfie celebration",
    rotate: "-rotate-[4deg]",
  },
  {
    image: "/international/gallery/gallery-6.jpg",
    alt: "Deep dialogue and coaching circle",
    rotate: "rotate-[3.6deg]",
  },
  {
    image: "/international/gallery/gallery-7.jpg",
    alt: "International cohort gathering",
    rotate: "-rotate-[4.8deg]",
  },
  {
    image: "/international/gallery/gallery-8.jpg",
    alt: "Collaborative inquiry and reflection",
    rotate: "rotate-[3.9deg]",
  },
  {
    image: "/international/gallery/gallery-9.jpg",
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
            className="text-[#242424] font-medium text-[14px] leading-[18px] tracking-[0.24px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {eyebrow}
          </span>
        </div>

        {/* Section Title */}
        <h2
          className="text-[#242424] font-semibold text-3xl sm:text-4xl md:text-[52px] leading-[1.15] tracking-[-0.8px]"
          style={{
            fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
          }}
        >
          {title}
        </h2>
      </Reveal>

      {/* Card Window Viewport with Auto-Scroll */}
      <Reveal
        direction="up"
        duration={750}
        delay={120}
        className="mx-auto w-full max-w-[1600px] px-4 sm:px-6"
      >
        <div
          ref={trackRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex w-full items-center overflow-x-auto pt-8 pb-12 sm:pt-10 sm:pb-14 md:pt-12 md:pb-16 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing"
        >
          <div className="flex items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 shrink-0 py-3">
            {items.map((item, i) => (
              <div
                key={i}
                className={`
                  relative
                  w-[200px] h-[270px]
                  sm:w-[220px] sm:h-[295px]
                  md:w-[240px] md:h-[320px]
                  lg:w-[260px] lg:h-[340px]
                  flex-shrink-0
                  rounded-[12px]
                  overflow-hidden
                  bg-white
                  shadow-[0_4px_20px_rgba(0,0,0,0.08)]
                  transition-all duration-300 ease-out
                  hover:z-30 hover:scale-[1.04] hover:-translate-y-1.5 hover:shadow-2xl
                  cursor-pointer
                  ${item.rotate}
                `}
                style={{ borderRadius: "12px" }}
              >
                <Image
                  src={item.image}
                  alt={item.alt || `International moment ${(i % GALLERY_ITEMS.length) + 1}`}
                  fill
                  sizes="(max-width: 640px) 220px, (max-width: 1024px) 240px, 260px"
                  className="object-cover object-center rounded-[12px]"
                  style={{ borderRadius: "12px" }}
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
