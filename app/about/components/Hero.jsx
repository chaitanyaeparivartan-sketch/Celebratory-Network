"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero({ showLogo = false, className = "" }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`relative w-full bg-white overflow-hidden font-ppmori ${className}`}
    >
      {/* Gliding Seagulls Animation Keyframes */}
      <style>{`
        @keyframes seagullFloat1 {
          0%, 100% { transform: rotate(43deg) translate3d(0, 0, 0); }
          50% { transform: rotate(41deg) translate3d(-10px, -8px, 0); }
        }
        @keyframes seagullFloat2 {
          0%, 100% { transform: rotate(8deg) translate3d(0, 0, 0); }
          50% { transform: rotate(10deg) translate3d(8px, -6px, 0); }
        }
      `}</style>

      {/* Warm Sunrise / Sunset Radial Sky Glow behind Bridge Towers & Seagulls */}
      <div
        className="absolute top-0 right-0 w-[75%] sm:w-[65%] lg:w-[60%] h-[60%] sm:h-[70%] lg:h-[75%] pointer-events-none select-none z-0 transition-opacity duration-1000"
        style={{
          opacity: isMounted ? 1 : 0,
          background:
            "radial-gradient(ellipse at 72% 40%, rgba(248, 178, 138, 0.40) 0%, rgba(254, 218, 202, 0.25) 32%, rgba(255, 245, 240, 0.10) 55%, rgba(255, 255, 255, 0) 72%)",
        }}
        aria-hidden="true"
      />

      {/* Top Right Logo (CN Celebratory Network) - shown when standalone without global Header */}
      {showLogo && (
        <div className="absolute top-4 sm:top-5 md:top-6 lg:top-8 right-6 sm:right-8 md:right-10 lg:right-14 z-20">
          <Image
            src="/common/header-image-1.webp"
            alt="Celebratory Network"
            width={282}
            height={51}
            priority
            className="h-[24px] sm:h-[28px] md:h-[32px] lg:h-[36px] w-auto object-contain"
          />
        </div>
      )}

      {/* Seagulls in Sky */}
      {/* Seagull 1 (Larger, Gliding down-right) */}
      <div
        className="absolute pointer-events-none select-none z-10 transition-opacity duration-1000"
        style={{
          top: "14%",
          left: "67%",
          width: "clamp(48px, 8vw, 100px)",
          transformOrigin: "center center",
          opacity: isMounted ? 0.95 : 0,
          animation: "seagullFloat1 6s ease-in-out infinite",
        }}
        aria-hidden="true"
      >
        <Image
          src="/about/hero-image-2.webp"
          alt="Seagull flying"
          width={229}
          height={239}
          priority
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Seagull 2 (Smaller, in distance) */}
      <div
        className="absolute pointer-events-none select-none z-10 transition-opacity duration-1000"
        style={{
          top: "22%",
          left: "86%",
          width: "clamp(15px, 2.5vw, 26px)",
          transformOrigin: "center center",
          opacity: isMounted ? 0.85 : 0,
          animation: "seagullFloat2 7s ease-in-out 1s infinite",
        }}
        aria-hidden="true"
      >
        <Image
          src="/about/hero-image-3.webp"
          alt="Seagull flying in distance"
          width={94}
          height={98}
          priority
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Main Story Content (Left Column on Pure White Sky Section) */}
      <div className="relative lg:absolute lg:top-0 lg:left-0 lg:right-0 z-10 w-full max-w-[1520px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-32 sm:pt-36 md:pt-40 lg:pt-36 pb-4 lg:pb-0">
        <div className="w-full max-w-[440px] sm:max-w-[520px] md:max-w-[620px] lg:max-w-[680px]">
          {/* Top Story Tag */}
          <div
            className="flex items-center gap-1.5 sm:gap-2 mb-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? "none" : "translate3d(0, 16px, 0)",
              transitionDelay: "100ms",
            }}
          >
            <span
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#e06526] inline-block rounded-[1px] shrink-0"
              aria-hidden="true"
            />
            <span className="text-[#374151] font-semibold text-[12px] sm:text-[13px] md:text-[14px] tracking-[0.2em] uppercase select-none">
              OUR STORY
            </span>
          </div>

          {/* Heading - Exactly 3 Lines */}
          <h1
            className="text-[#141414] font-semibold text-[clamp(28px,3.8vw,52px)] leading-[36px] sm:leading-[42px] md:leading-[48px] tracking-[-0.8px] mb-2.5 sm:mb-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? "none" : "translate3d(0, 24px, 0)",
              transitionDelay: "180ms",
            }}
          >
            A name often brings<br />
            curiosity. What does it really<br />
            mean?
          </h1>

          {/* Story Paragraphs */}
          <div
            className="space-y-3 sm:space-y-3.5 max-w-[540px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? "none" : "translate3d(0, 20px, 0)",
              transitionDelay: "280ms",
            }}
          >
            <p className="text-[#242424] text-[15px] sm:text-[15.5px] md:text-[16px] lg:text-[16.5px] leading-[1.55] sm:leading-[1.5] font-normal">
              <span className="text-[#e06526] font-semibold">Celebratory</span>{" "}
              is about celebrating all moments of life. Every experience, every
              encounter, every challenge and every achievement shapes who we are
              today: as professionals, as organisations, and as people.
            </p>

            <p className="text-[#242424] text-[15px] sm:text-[15.5px] md:text-[16px] lg:text-[16.5px] leading-[1.55] sm:leading-[1.5] font-normal">
              <span className="text-[#e06526] font-semibold">Network:</span>{" "}
              from the very beginning,{" "}
              <strong className="font-bold text-[#141414]">Payal</strong> started
              Celebratory Network with a belief in the power of passion and
              ownership. We consciously moved away from the traditional employee
              model of work and embraced a consortium model, bringing together
              people, expertise and perspectives to create meaningful work.
            </p>

            <p className="text-[#e06526] font-semibold text-[15px] sm:text-[15.5px] md:text-[16px] lg:text-[16.5px] leading-snug pt-1">
              And that is how we became Celebratory Network.
            </p>
          </div>
        </div>
      </div>

      {/* Bandra-Worli Sea Link Bridge at bottom (FULL image, 100% visible, no cut off) */}
      <div
        className="relative w-full flex justify-center pointer-events-none select-none z-0 mt-4 sm:mt-8 md:mt-12 lg:mt-0 lg:pt-[340px] xl:pt-[400px] 2xl:pt-[460px] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          opacity: isMounted ? 1 : 0,
          transform: isMounted ? "none" : "translate3d(0, 30px, 0)",
          transitionDelay: "200ms",
        }}
      >
        <div className="w-full max-w-[1920px]">
          <Image
            src="/about/hero-image-1.webp"
            alt="Bandra-Worli Sea Link Mumbai"
            width={1920}
            height={1273}
            priority
            className="w-full h-auto object-contain object-bottom block"
          />
        </div>
      </div>
    </section>
  );
}
