"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const HERO_VIDEOS = [
  {
    id: 0,
    videoSrc: "/Home/Hero/hero-video-1.mp4",
    poster: "/Home/Hero/poster1.webp",
    thumb: "/Home/Hero/thumb_video1.webp",
    alt: "Brings spotlight on the Being and the Doing of Leadership",
    titleLine1: "Brings spotlight on the Being",
    titleLine2: "and the Doing of Leadership",
    description:
      "A journey for Women Leaders who dream of possibilities and have the willingness to make it happen.",
    primaryBtn: { label: "Book a call", href: "/contact" },
    secondaryBtn: { label: "Know More", href: "/about" },
  },
  {
    id: 1,
    videoSrc: "/Home/Hero/hero-video-2.mp4",
    poster: "/Home/Hero/poster2.webp",
    thumb: "/Home/Hero/thumb_video2.webp",
    alt: "Personal Power In Leadership For Women Leaders",
    titleLine1: "Personal Power In Leadership",
    titleLine2: "For Women Leaders",
    description:
      "Brings spotlight on the Being and the Doing of Leadership A journey for Women Leaders who dream of possibilities and have the willingness to make it happen.",
    primaryBtn: { label: "Book a call", href: "/contact" },
    secondaryBtn: { label: "Know More", href: "/about" },
  },
  {
    id: 2,
    videoSrc: "/Home/Hero/hero-video-3.mp4",
    poster: "/Home/Hero/poster3.webp",
    thumb: "/Home/Hero/thumb_video3.webp",
    alt: "Collaborative team workshop session",
    titleLine1: "Leading organizational",
    titleLine2: "change & transformation",
    description:
      "Strong organizations don't happen by chance. We help leaders and teams build better workplace cultures, strengthen collaboration, and achieve sustainable growth.",
    primaryBtn: { label: "Book a call", href: "/contact" },
    secondaryBtn: { label: "Know More", href: "/about" },
  },
];

export default function Hero() {
  const [activeThumb, setActiveThumb] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const videoRefs = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 60);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
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
      {/* Mobile Background Image */}
      <div className="md:hidden absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <Image
          src="/Home/Hero/Mobile-Hero.webp"
          alt="Brings spotlight on the Being and the Doing of Leadership"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Subtle mobile shade gradient for text readability while keeping the image clear */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Desktop Background Videos with Smooth Cross-fade */}
      <div className="hidden md:block absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
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

      {/* Left Dark Shade (Desktop only) */}
      <div
        className="hidden md:block absolute top-1/2 left-[-90px] -mt-[645px] pointer-events-none z-20"
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

      {/* Right Dark Shade (Desktop only) */}
      <div
        className="hidden md:block absolute top-1/2 right-[-90px] -mt-[645px] pointer-events-none z-20"
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
        <div className="flex flex-col lg:flex-row items-center md:items-start lg:items-end justify-between gap-8 lg:gap-12">
          {/* Left Column: Heading, Subtitle & Buttons */}
          <div className="w-full max-w-[720px] text-center md:text-left mx-auto md:mx-0 flex flex-col items-center md:items-start relative min-h-[220px] sm:min-h-[240px]">
            {HERO_VIDEOS.map((slide, index) => {
              const isActive = activeThumb === index;
              return (
                <div
                  key={slide.id}
                  className={`w-full flex flex-col items-center md:items-start transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive
                      ? "opacity-100 translate-y-0 relative z-10 pointer-events-auto"
                      : "opacity-0 translate-y-3 absolute inset-0 pointer-events-none"
                  }`}
                  style={
                    index === 0 && !isMounted
                      ? {
                          opacity: 0,
                          transform: "translate3d(0, 24px, 0)",
                        }
                      : undefined
                  }
                >
                  {/* Title */}
                  <h1 className="font-ppmori text-[clamp(28px,3.8vw,52px)] font-semibold text-white tracking-[-0.8px] leading-[36px] sm:leading-[42px] md:leading-[48px] text-center md:text-left overflow-hidden">
                    <span className="block sm:whitespace-nowrap">
                      {slide.titleLine1}
                    </span>
                    <span className="block sm:whitespace-nowrap">
                      {slide.titleLine2}
                    </span>
                  </h1>

                  {/* Description */}
                  <p className="mt-3.5 sm:mt-4 text-white/95 font-inter font-normal text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[1.5] max-w-[500px] text-center md:text-left mx-auto md:mx-0">
                    {slide.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="mt-6 sm:mt-7 flex items-center justify-center md:justify-start gap-3.5 sm:gap-4 w-full md:w-auto">
                    <Link
                      href={slide.primaryBtn.href}
                      className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-[8px] bg-[#FF5E14] text-white font-ppmori text-[14px] sm:text-[15px] font-semibold shadow-sm hover:bg-[#e0500d] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,94,20,0.35)] active:scale-[0.98] transition-all cursor-pointer"
                    >
                      {slide.primaryBtn.label}
                    </Link>

                    <Link
                      href={slide.secondaryBtn.href}
                      className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-[8px] bg-white text-[#171717] font-ppmori text-[14px] sm:text-[15px] font-semibold shadow-sm hover:bg-white/95 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,255,255,0.25)] active:scale-[0.98] transition-all cursor-pointer"
                    >
                      {slide.secondaryBtn.label}
                    </Link>
                  </div>
                </div>
              );
            })}

            {/* Mobile Carousel Indicators */}
            <div className="flex md:hidden items-center justify-center gap-2 mt-6">
              {HERO_VIDEOS.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleThumbClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeThumb === index
                      ? "w-7 bg-[#FF5E14]"
                      : "w-2 bg-white/40 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Video Thumbnails (Hidden on mobile) */}
          <div
            className="hidden md:flex items-center gap-2.5 sm:gap-3.5 self-end lg:self-end pb-1 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? "none" : "translate3d(24px, 0, 0)",
              transitionDelay: "560ms",
            }}
          >
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
