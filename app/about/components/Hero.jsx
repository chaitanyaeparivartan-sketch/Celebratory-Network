"use client";

import Image from "next/image";

export default function Hero({ showLogo = false, className = "" }) {
  return (
    <section
      className={`relative w-full bg-white overflow-hidden ${className}`}
      style={{ fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif' }}
    >
      {/* Warm Sunrise / Sunset Radial Sky Glow behind Bridge Towers & Seagulls */}
      <div
        className="absolute top-0 right-0 w-[75%] sm:w-[65%] lg:w-[60%] h-[60%] sm:h-[70%] lg:h-[75%] pointer-events-none select-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 72% 40%, rgba(248, 178, 138, 0.40) 0%, rgba(254, 218, 202, 0.25) 32%, rgba(255, 245, 240, 0.10) 55%, rgba(255, 255, 255, 0) 72%)",
        }}
        aria-hidden="true"
      />

      {/* Top Right Logo (CN Celebratory Network) - shown when standalone without global Header */}
      {showLogo && (
        <div className="absolute top-4 sm:top-5 md:top-6 lg:top-8 right-6 sm:right-8 md:right-10 lg:right-14 z-20">
          <Image
            src="/logo.png"
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
        className="absolute pointer-events-none select-none z-10"
        style={{
          top: "14%",
          left: "67%",
          width: "clamp(48px, 8vw, 100px)",
          transform: "rotate(43deg)",
          transformOrigin: "center center",
        }}
        aria-hidden="true"
      >
        <Image
          src="/AboutUs/about-us-image-2.png"
          alt="Seagull flying"
          width={229}
          height={239}
          priority
          className="w-full h-auto object-contain opacity-95"
        />
      </div>

      {/* Seagull 2 (Smaller, in distance) */}
      <div
        className="absolute pointer-events-none select-none z-10"
        style={{
          top: "22%",
          left: "86%",
          width: "clamp(15px, 2.5vw, 26px)",
          transform: "rotate(8deg)",
          transformOrigin: "center center",
        }}
        aria-hidden="true"
      >
        <Image
          src="/AboutUs/about-us-image-3.png"
          alt="Seagull flying in distance"
          width={94}
          height={98}
          priority
          className="w-full h-auto object-contain opacity-85"
        />
      </div>

      {/* Main Story Content (Left Column on Pure White Sky Section) */}
      <div className="relative lg:absolute lg:top-0 lg:left-0 lg:right-0 z-10 w-full max-w-[1520px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-24 sm:pt-28 md:pt-32 lg:pt-24 pb-4 lg:pb-0">
        <div className="w-full max-w-[440px] sm:max-w-[480px] md:max-w-[500px] lg:max-w-[520px]">
          {/* Top Story Tag */}
          <div className="flex items-center gap-1.5 sm:gap-2 mb-2">
            <span
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#e06526] inline-block rounded-[1px] shrink-0"
              aria-hidden="true"
            />
            <span className="text-[#374151] font-semibold text-[10px] sm:text-[11px] tracking-[0.2em] uppercase select-none">
              OUR STORY
            </span>
          </div>

          {/* Heading - Exactly 3 Lines */}
          <h1 className="text-[#141414] font-bold text-[20px] sm:text-[23px] md:text-[26px] lg:text-[29px] leading-[1.14] tracking-[-0.03em] mb-2.5 sm:mb-3">
            A name often brings<br />
            curiosity. What does it really<br />
            mean?
          </h1>

          {/* Story Paragraphs */}
          <div className="space-y-2 sm:space-y-2.5">
            <p className="text-[#242424] text-[11px] sm:text-[11.5px] md:text-[12px] lg:text-[12.5px] leading-[1.48] font-normal">
              <span className="text-[#e06526] font-semibold">Celebratory</span>{" "}
              is about celebrating all moments of life. Every experience, every
              encounter, every challenge and every achievement shapes who we are
              today: as professionals, as organisations, and as people.
            </p>

            <p className="text-[#242424] text-[11px] sm:text-[11.5px] md:text-[12px] lg:text-[12.5px] leading-[1.48] font-normal">
              <span className="text-[#e06526] font-semibold">Network:</span>{" "}
              from the very beginning,{" "}
              <strong className="font-bold text-[#141414]">Payal</strong> started
              Celebratory Network with a belief in the power of passion and
              ownership. We consciously moved away from the traditional employee
              model of work and embraced a consortium model, bringing together
              people, expertise and perspectives to create meaningful work
            </p>

            <p className="text-[#e06526] font-semibold text-[11px] sm:text-[11.5px] md:text-[12px] lg:text-[12.5px] leading-snug pt-0.5">
              And that is how we became Celebratory Network.
            </p>
          </div>
        </div>
      </div>

      {/* Bandra-Worli Sea Link Bridge at bottom (FULL image, 100% visible, no cut off) */}
      <div className="relative w-full flex justify-center pointer-events-none select-none z-0 mt-2 sm:mt-4 lg:mt-0 lg:pt-20">
        <div className="w-full max-w-[1920px]">
          <Image
            src="/AboutUs/about-us-image-1.png"
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
