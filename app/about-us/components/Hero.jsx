"use client";

import Image from "next/image";

export default function Hero({ showLogo = true, className = "" }) {
  return (
    <section
      className={`relative w-full bg-white overflow-hidden min-h-[680px] sm:min-h-[740px] md:min-h-[800px] lg:min-h-[860px] xl:min-h-[920px] flex flex-col justify-between ${className}`}
      style={{ fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif' }}
    >
      {/* Warm Sunrise / Sunset Radial Sky Glow behind Bridge Towers & Seagulls */}
      <div
        className="absolute top-0 right-0 w-[75%] sm:w-[65%] lg:w-[60%] h-[60%] sm:h-[70%] lg:h-[75%] pointer-events-none select-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 72% 38%, rgba(248, 178, 138, 0.45) 0%, rgba(254, 218, 202, 0.28) 32%, rgba(255, 245, 240, 0.12) 55%, rgba(255, 255, 255, 0) 72%)",
        }}
        aria-hidden="true"
      />

      {/* Top Right Logo (CN Celebratory Network) */}
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
          top: "8%",
          left: "67%",
          width: "clamp(50px, 8.5vw, 105px)",
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
          top: "17%",
          left: "86%",
          width: "clamp(16px, 2.6vw, 28px)",
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

      {/* Main Story Content (Left Column) */}
      <div className="relative z-10 w-full max-w-[1520px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-4 sm:pt-5 md:pt-6 lg:pt-8 pb-8">
        <div className="w-full max-w-[460px] sm:max-w-[500px] md:max-w-[540px] lg:max-w-[580px]">
          {/* Top Story Tag */}
          <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-2.5">
            <span
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#e06526] inline-block rounded-[1px] shrink-0"
              aria-hidden="true"
            />
            <span className="text-[#374151] font-semibold text-[10px] sm:text-[11px] md:text-[11.5px] tracking-[0.2em] uppercase select-none">
              OUR STORY
            </span>
          </div>

          {/* Heading - Exactly 3 Lines */}
          <h1 className="text-[#141414] font-bold text-[22px] sm:text-[26px] md:text-[30px] lg:text-[35px] xl:text-[38px] leading-[1.12] tracking-[-0.03em] mb-3 sm:mb-3.5 lg:mb-4">
            A name often brings<br />
            curiosity. What does it really<br />
            mean?
          </h1>

          {/* Story Paragraphs */}
          <div className="space-y-2 sm:space-y-2.5 lg:space-y-3">
            <p className="text-[#242424] text-[12px] sm:text-[12.5px] md:text-[13px] lg:text-[14px] leading-[1.5] font-normal">
              <span className="text-[#e06526] font-semibold">Celebratory</span>{" "}
              is about celebrating all moments of life. Every experience, every
              encounter, every challenge and every achievement shapes who we are
              today: as professionals, as organisations, and as people.
            </p>

            <p className="text-[#242424] text-[12px] sm:text-[12.5px] md:text-[13px] lg:text-[14px] leading-[1.5] font-normal">
              <span className="text-[#e06526] font-semibold">Network:</span>{" "}
              from the very beginning,{" "}
              <strong className="font-bold text-[#141414]">Payal</strong> started
              Celebratory Network with a belief in the power of passion and
              ownership. We consciously moved away from the traditional employee
              model of work and embraced a consortium model, bringing together
              people, expertise and perspectives to create meaningful work
            </p>

            <p className="text-[#e06526] font-semibold text-[12px] sm:text-[12.5px] md:text-[13px] lg:text-[14px] leading-snug pt-0.5">
              And that is how we became Celebratory Network.
            </p>
          </div>
        </div>
      </div>

      {/* Bandra-Worli Sea Link Bridge at bottom */}
      <div className="relative sm:absolute bottom-0 left-0 right-0 w-full pointer-events-none select-none z-0 mt-6 sm:mt-0 flex justify-center">
        <div className="w-full max-w-[1920px]">
          <Image
            src="/AboutUs/about-us-image-1.png"
            alt="Bandra-Worli Sea Link Mumbai"
            width={1920}
            height={1273}
            priority
            className="w-full h-auto object-cover object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
