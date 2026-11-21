"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function NewHero({ showLogo = false, className = "" }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`relative w-full bg-[#FFFFFF] ${className}`}>
      {/* Top Photographic Banner */}
      <div className="relative w-full h-[52vh] sm:h-[58vh] md:h-[62vh] min-h-[360px] sm:min-h-[420px] overflow-hidden bg-[#1F2937]">
        <Image
          src="/about/newhero-image-1.webp"
          alt="Celebratory Network team collaborating"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_30%] transition-transform duration-1000 ease-out"
          style={{
            transform: isMounted ? "scale(1)" : "scale(1.04)",
          }}
        />
        {/* Subtle gradient overlay to provide contrast for floating header */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/15 pointer-events-none" />

        {/* Top Right Logo if standalone */}
        {showLogo && (
          <div className="absolute top-4 sm:top-6 right-6 sm:right-10 z-20">
            <Image
              src="/common/header-image-1.webp"
              alt="Celebratory Network"
              width={240}
              height={44}
              priority
              className="h-[28px] sm:h-[32px] w-auto object-contain brightness-0 invert"
            />
          </div>
        )}
      </div>

      {/* Overlapping White Panel */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative -mt-10 sm:-mt-14 md:-mt-16 bg-white rounded-t-[28px] sm:rounded-t-[36px] md:rounded-t-[40px] px-6 sm:px-10 md:px-14 lg:px-16 pt-8 sm:pt-12 md:pt-14 pb-12 sm:pb-16 shadow-[0_-12px_36px_rgba(20,20,20,0.06)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: isMounted ? 1 : 0,
            transform: isMounted ? "none" : "translate3d(0, 24px, 0)",
          }}
        >
          {/* Decorative Orange Asterisk in Top Right */}
          <span
            className="absolute right-6 sm:right-10 md:right-14 top-6 sm:top-8 md:top-10 text-[#FF5E14] text-[28px] sm:text-[34px] md:text-[38px] leading-none select-none transition-transform duration-500 hover:rotate-45 cursor-default"
            aria-hidden="true"
          >
            ✱
          </span>

          {/* Eyebrow Tag */}
          <div className="flex items-center gap-2 mb-4 sm:mb-5">
            <span
              className="w-2 h-2 rounded-[1px] bg-[#FF5E14] inline-block shrink-0"
              aria-hidden="true"
            />
            <span
              className="text-[#374151] font-semibold text-[12px] sm:text-[13px] tracking-[0.2em] uppercase select-none"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              OUR STORY
            </span>
          </div>

          {/* Large Heading */}
          <h1
            className="text-[#141414] font-semibold text-[clamp(32px,5.4vw,76px)] leading-[1.02] sm:leading-[0.98] tracking-[-0.035em] max-w-[1100px]"
            style={{
              fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
            }}
          >
            A name often brings curiosity. What does it really mean?
          </h1>

          {/* Story Narrative Grid */}
          <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-14 max-w-[1240px]">
            {/* Column 1: Celebratory */}
            <div className="space-y-4">
              <p
                className="text-[#334155] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.68] font-normal"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <span className="text-[#FF5E14] font-semibold">Celebratory</span>{" "}
                is about celebrating all moments of life. Every experience,
                every encounter, every challenge and every achievement shapes who
                we are today: as professionals, as organisations, and as people.
              </p>
            </div>

            {/* Column 2: Network & Punchline */}
            <div className="space-y-4">
              <p
                className="text-[#334155] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.68] font-normal"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <span className="text-[#FF5E14] font-semibold">Network:</span>{" "}
                from the very beginning,{" "}
                <strong className="font-semibold text-[#141414]">Payal</strong>{" "}
                started Celebratory Network with a belief in the power of passion
                and ownership. We consciously moved away from the traditional
                employee model of work and embraced a consortium model, bringing
                together people, expertise and perspectives to create meaningful
                work.
              </p>

              <p
                className="text-[#FF5E14] font-semibold text-[16px] sm:text-[17px] md:text-[18px] leading-snug pt-1"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                And that is how we became Celebratory Network.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
