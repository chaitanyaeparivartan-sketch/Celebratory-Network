"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "@/app/components/Common/Reveal";

const GALLERY_ITEMS = [
  {
    image: "/AboutUs/Gallery/gallery-image-1.webp",
    alt: "Team meeting in conference room",
    rotate: "-rotate-[6.167deg]",
  },
  {
    image: "/AboutUs/Gallery/gallery-image-2.webp",
    alt: "Leader standing in modern office corridor",
    rotate: "rotate-[4.139deg]",
  },
  {
    image: "/AboutUs/Gallery/gallery-image-3.webp",
    alt: "Colleagues collaborating in lounge",
    rotate: "-rotate-[6.167deg]",
  },
  {
    image: "/AboutUs/Gallery/gallery-image-4.webp",
    alt: "Team member in vest giving thumbs up",
    rotate: "rotate-[4.139deg]",
  },
  {
    image: "/AboutUs/Gallery/gallery-image-5.webp",
    alt: "Group working together around laptop",
    rotate: "-rotate-[6.167deg]",
  },
  {
    image: "/AboutUs/Gallery/gallery-image-6.webp",
    alt: "Coworkers in casual conversation",
    rotate: "rotate-[4.139deg]",
  },
  {
    image: "/AboutUs/Gallery/gallery-image-7.webp",
    alt: "Two professionals working at desk",
    rotate: "-rotate-[6.167deg]",
  },
  {
    image: "/AboutUs/Gallery/gallery-image-8.webp",
    alt: "Team member working at office workstation",
    rotate: "rotate-[4.139deg]",
  },
];

// Duplicate items for continuous seamless loop
const LOOP_ITEMS = [...GALLERY_ITEMS, ...GALLERY_ITEMS];

export default function Gallery({
  title = "Celebrating every moment",
  description = "Our calling is meaningful work that creates impact in the journeys of organisations, communities and individuals.",
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
    <section
      className="overflow-hidden pt-4 pb-2 sm:pt-6 sm:pb-3 select-none"
      style={{ background: "rgba(255, 94, 20, 0.10)" }}
    >
      {/* Heading Container */}
      <Reveal direction="up" duration={700} className="mx-auto mb-1 sm:mb-2 flex max-w-[760px] flex-col items-center gap-2 sm:gap-2.5 px-6 text-center">
        <h2 className="font-ppmori text-[clamp(30px,4.6vw,52px)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#242424]">
          {title}
        </h2>
        <p className="max-w-[620px] font-inter text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal leading-[1.5] text-[#717171]">
          {description}
        </p>
      </Reveal>

      {/* 6-Card Window Viewport with Auto-Scroll */}
      <Reveal direction="up" duration={750} delay={120} className="mx-auto w-full max-w-[1440px] px-4 sm:px-6">
        <div
          ref={trackRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex w-full items-center overflow-x-auto pt-10 pb-12 sm:pt-12 sm:pb-14 md:pt-14 md:pb-16 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing"
        >
          <div className="flex items-center gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 shrink-0 py-2">
            {items.map((item, i) => (
              <div
                key={i}
                className={`
                  relative
                  w-[160px] h-[225px]
                  sm:w-[175px] sm:h-[245px]
                  md:w-[190px] md:h-[265px]
                  lg:w-[195px] lg:h-[270px]
                  xl:w-[208px] xl:h-[285px]
                  flex-shrink-0
                  rounded-[8px]
                  overflow-hidden
                  bg-white
                  shadow-[0_4px_16px_rgba(0,0,0,0.08)]
                  transition-all duration-300 ease-out
                  hover:z-30 hover:scale-[1.04] hover:-translate-y-1 hover:shadow-2xl
                  cursor-pointer
                  ${item.rotate}
                `}
                style={{ borderRadius: "8px" }}
              >
                <Image
                  src={item.image}
                  alt={item.alt || `Moment ${(i % 8) + 1}`}
                  fill
                  sizes="(max-width: 640px) 175px, (max-width: 1024px) 195px, 210px"
                  className="object-cover object-center rounded-[8px]"
                  style={{ borderRadius: "8px" }}
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
