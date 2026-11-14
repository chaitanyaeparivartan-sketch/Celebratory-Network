"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const HERO_VIDEOS = [
  {
    id: 0,
    videoSrc: "/Home/Hero/hero-video-1.mp4",
    poster: "/Home/Hero/poster1.jpg",
    thumb: "/Home/Hero/thumb_video1.jpg",
    alt: "Strategic planning and team transformation session",
  },
  {
    id: 1,
    videoSrc: "/Home/Hero/hero-video-2.mp4",
    poster: "/Home/Hero/poster2.jpg",
    thumb: "/Home/Hero/thumb_video2.jpg",
    alt: "Executive leadership discussion",
  },
  {
    id: 2,
    videoSrc: "/Home/Hero/hero-video-3.mp4",
    poster: "/Home/Hero/poster3.jpg",
    thumb: "/Home/Hero/thumb_video3.jpg",
    alt: "Collaborative team workshop session",
  },
];

export default function Hero() {
  const [activeThumb, setActiveThumb] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeThumb) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeThumb]);

  const handleEnded = () => {
    setActiveThumb((prev) => (prev + 1) % HERO_VIDEOS.length);
  };

  const handleThumbClick = (index) => {
    setActiveThumb(index);
  };

  return (
    <section className="relative w-full min-h-[640px] sm:min-h-[720px] h-[92vh] max-h-[1020px] flex flex-col justify-end overflow-hidden bg-[#1f1e1d] font-ppmori">
      {/* Background Videos with Smooth Cross-fade */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {HERO_VIDEOS.map((item, index) => (
          <video
            key={item.id}
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            src={item.videoSrc}
            autoPlay={index === 0}
            muted
            playsInline
            onEnded={handleEnded}
            preload={index === 0 ? "auto" : "metadata"}
            poster={item.poster}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out ${
              activeThumb === index
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <source src={item.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>

      {/* Left Dark Shade */}
      <div
        className="absolute top-1/2 left-[-90px] -mt-[645px] pointer-events-none z-20"
        style={{
          width: "1109px",
          height: "1290px",
          transform: "rotate(90deg) scaleX(-1)",
          transformOrigin: "center center",
          flexShrink: 0,
          background:
            "linear-gradient(0deg, #000 0.02%, rgba(0, 0, 0, 0.00) 80.26%)",
        }}
      />

      {/* Right Dark Shade */}
      <div
        className="absolute top-1/2 right-[-90px] -mt-[645px] pointer-events-none z-20"
        style={{
          width: "1109px",
          height: "1290px",
          transform: "rotate(-90deg)",
          transformOrigin: "center center",
          flexShrink: 0,
          background:
            "linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 62.98%)",
        }}
      />

      {/* Soft bottom edge transition to white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-5 sm:h-7 md:h-9 pointer-events-none z-20"
        style={{
          background:
            "linear-gradient(0deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)",
        }}
      />

      {/* Hero Content Layer */}
      <div className="relative z-30 w-full max-w-[1783px] mx-auto px-4 sm:px-6 lg:px-12 pb-12 sm:pb-16 pt-28">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-12">
          {/* Left Column: Heading, Subtitle & Buttons */}
          <div className="w-full max-w-[720px] text-left">
            {/* Title */}
            <h1 className="font-ppmori text-[clamp(28px,3.8vw,52px)] font-semibold text-white tracking-[-0.8px] leading-[36px] sm:leading-[42px] md:leading-[48px]">
              <span className="block sm:whitespace-nowrap">Leading organizational</span>
              <span className="block sm:whitespace-nowrap">change &amp; transformation</span>
            </h1>

            {/* Description */}
            <p className="mt-3.5 sm:mt-4 text-white/95 font-inter font-normal text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[1.5] max-w-[500px]">
              Strong organizations don&apos;t happen by chance. We help leaders and
              teams build better workplace cultures, strengthen collaboration,
              and achieve sustainable growth.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 sm:mt-7 flex items-center gap-3.5 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-[8px] bg-[#FF5E14] text-white font-ppmori text-[14px] sm:text-[15px] font-semibold shadow-sm hover:bg-[#e0500d] active:scale-[0.98] transition-all cursor-pointer"
              >
                Book a call
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-[8px] bg-white text-[#171717] font-ppmori text-[14px] sm:text-[15px] font-semibold shadow-sm hover:bg-white/90 active:scale-[0.98] transition-all cursor-pointer"
              >
                Know More
              </Link>
            </div>
          </div>

          {/* Right Column: Video Thumbnails (Hidden on mobile) */}
          <div className="hidden md:flex items-center gap-2.5 sm:gap-3.5 self-end lg:self-end pb-1">
            {HERO_VIDEOS.map((item, index) => {
              const isActive = activeThumb === index;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleThumbClick(index)}
                  className={`group relative w-[72px] h-[44px] sm:w-[84px] sm:h-[52px] md:w-[96px] md:h-[58px] rounded-[6px] overflow-hidden transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "ring-2 ring-[#FF5E14] border-2 border-[#FF5E14] shadow-[0_0_12px_rgba(255,94,20,0.55)] scale-105"
                      : "border border-white/60 opacity-80 hover:opacity-100 hover:border-white hover:scale-102"
                  }`}
                  aria-label={item.alt}
                >
                  <Image
                    src={item.thumb}
                    alt={item.alt}
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
