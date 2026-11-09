"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const THUMBNAILS = [
  {
    id: 0,
    src: "/Hero/thumb1.jpg",
    alt: "Team meeting and agenda discussion",
  },
  {
    id: 1,
    src: "/Hero/thumb2.jpg",
    alt: "Leadership presentation session",
  },
  {
    id: 2,
    src: "/Hero/thumb3.jpg",
    alt: "Collaborative team workshop",
  },
];

export default function Hero() {
  const [activeThumb, setActiveThumb] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, []);

  const handleThumbClick = (index) => {
    setActiveThumb(index);
    if (videoRef.current && index === 0) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section className="relative w-full min-h-[640px] sm:min-h-[720px] h-[92vh] max-h-[1020px] flex flex-col justify-end overflow-hidden bg-[#1f1e1d]">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/Hero/video_poster.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/Hero/HeroVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Soft bottom edge transition to white */}
      <div className="absolute inset-x-0 bottom-0 h-12 sm:h-20 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none z-20" />

      {/* Hero Content Layer */}
      <div className="relative z-30 w-full max-w-[1783px] mx-auto px-4 sm:px-6 lg:px-12 pb-12 sm:pb-16 pt-28">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-12">
          {/* Left Column: Heading, Subtitle & Buttons */}
          <div className="w-full max-w-[720px] text-left">
            {/* Title */}
            <h1 className="font-['PP_Mori',sans-serif] text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.15]">
              <span className="block sm:whitespace-nowrap">Leading organizational</span>
              <span className="block sm:whitespace-nowrap">change &amp; transformation</span>
            </h1>

            {/* Description */}
            <p className="mt-3.5 sm:mt-4 text-white font-normal text-sm sm:text-base leading-relaxed max-w-[500px]">
              Strong organizations don&apos;t happen by chance. We help leaders and
              teams build better workplace cultures, strengthen collaboration,
              and achieve sustainable growth.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 sm:mt-7 flex items-center gap-3.5 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-[8px] bg-[#FF5E14] text-white font-['PP_Mori',sans-serif] text-sm sm:text-base font-semibold shadow-sm hover:bg-[#e0500d] active:scale-[0.98] transition-all cursor-pointer"
              >
                Book a call
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-[8px] bg-white text-[#171717] font-['PP_Mori',sans-serif] text-sm sm:text-base font-semibold shadow-sm hover:bg-white/90 active:scale-[0.98] transition-all cursor-pointer"
              >
                Know More
              </Link>
            </div>
          </div>

          {/* Right Column: Video Thumbnails */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 self-end lg:self-end pb-1">
            {THUMBNAILS.map((thumb, index) => {
              const isActive = activeThumb === index;
              return (
                <button
                  key={thumb.id}
                  type="button"
                  onClick={() => handleThumbClick(index)}
                  className={`group relative w-[72px] h-[44px] sm:w-[84px] sm:h-[52px] md:w-[96px] md:h-[58px] rounded-[6px] overflow-hidden transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "ring-2 ring-[#FF5E14] border-2 border-[#FF5E14] shadow-[0_0_12px_rgba(255,94,20,0.55)] scale-105"
                      : "border border-white/60 opacity-80 hover:opacity-100 hover:border-white hover:scale-102"
                  }`}
                  aria-label={thumb.alt}
                >
                  <Image
                    src={thumb.src}
                    alt={thumb.alt}
                    fill
                    sizes="(max-width: 768px) 80px, 100px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
