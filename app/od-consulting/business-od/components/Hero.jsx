"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function BusinessODHero({ className = "" }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`relative w-full min-h-screen min-h-[100dvh] overflow-hidden font-ppmori flex items-center ${className}`}
      style={{
        background:
          "linear-gradient(180deg, hsl(209.1177deg 93.8045% 45%) 0%, hsl(209.1177deg 82.4294% 100%) 148.67%)",
      }}
    >
      {/* Background Architectural Building Layer (Right-aligned) */}
      <div
        className="absolute right-0 bottom-0 pointer-events-none select-none z-0 w-[54vw] max-w-[960px] min-w-[360px] aspect-[1062/945] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          opacity: isMounted ? 1 : 0,
          transform: isMounted ? "none" : "translate3d(24px, 20px, 0)",
        }}
        aria-hidden="true"
      >
        <Image
          src="/business-od/hero-image-2.webp"
          alt="Modern Organization Development Architecture"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 55vw"
          className="object-contain object-right-bottom block"
        />
      </div>

      {/* Subtle top gradient overlay to provide contrast for the floating header */}
      <div className="absolute inset-x-0 top-0 h-28 sm:h-36 bg-gradient-to-b from-black/25 via-black/10 to-transparent pointer-events-none z-10" />

      {/* Soft ambient wash on mobile/tablet so text remains crystal clear */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent md:hidden pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* Bottom edge feather into the orange Statement section */}
      <div
        className="absolute bottom-0 inset-x-0 h-3 sm:h-4 md:h-5 bg-gradient-to-b from-transparent to-[#FF5E14] pointer-events-none z-15"
        aria-hidden="true"
      />

      {/* Main Content - EXACT font sizes, font families & weights matching About Us Hero */}
      <div className="relative z-20 w-full max-w-[1520px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-32 sm:pt-36 md:pt-38 lg:pt-36 pb-16 sm:pb-20">
        <div className="w-full max-w-[440px] sm:max-w-[520px] md:max-w-[620px] lg:max-w-[680px]">
          {/* Eyebrow Tag */}
          <div
            className="flex items-center gap-1.5 sm:gap-2 mb-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? "none" : "translate3d(0, 16px, 0)",
              transitionDelay: "100ms",
            }}
          >
            <span
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FF5E14] inline-block rounded-[1px] shrink-0"
              aria-hidden="true"
            />
            <span
              className="text-white font-semibold text-[12px] sm:text-[13px] md:text-[14px] tracking-[0.2em] uppercase select-none"
              style={{ fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif' }}
            >
              OUR PERSPECTIVE
            </span>
          </div>

          {/* Heading - Toward Organization Development */}
          <h1
            className="text-white font-semibold text-[clamp(28px,3.8vw,52px)] leading-[36px] sm:leading-[42px] md:leading-[48px] tracking-[-0.8px] mb-2.5 sm:mb-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? "none" : "translate3d(0, 24px, 0)",
              transitionDelay: "180ms",
            }}
          >
            <span className="block">Toward organization</span>
            <span className="block">development</span>
          </h1>

          {/* Story Paragraphs */}
          <div
            className="space-y-3 sm:space-y-3.5 max-w-[540px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? "none" : "translate3d(0, 20px, 0)",
              transitionDelay: "260ms",
            }}
          >
            <div
              className="space-y-2 text-white/90 text-[15px] sm:text-[15.5px] md:text-[16px] lg:text-[16.5px] leading-[1.55] sm:leading-[1.5] font-normal"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <p>
                Many transformation efforts focus on structures, processes and governance.
                <br className="hidden sm:inline" />
                {" "}These are necessary. But they are not sufficient.
              </p>
              <p>
                Organizations are living systems.
                <br className="hidden sm:inline" />
                {" "}Formal structures operate alongside informal networks, official priorities coexist with unspoken realities.
                <br className="hidden sm:inline" />
                {" "}Success depends on both.
              </p>
            </div>

            {/* Subheading in Brand Orange + 2 Dimension Bullet Lines */}
            <div className="pt-1.5 sm:pt-2 space-y-2">
              <h2
                className="text-[#FF5E14] font-semibold text-[15px] sm:text-[15.5px] md:text-[16px] lg:text-[16.5px] leading-snug drop-shadow-sm pt-1"
                style={{
                  fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
                }}
              >
                Our work focuses on helping organizations understand and work with:
              </h2>

              <div
                className="space-y-1 sm:space-y-1.5 text-[14px] sm:text-[14.5px] md:text-[15px] leading-[1.5] text-white/95 font-normal"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <p className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
                  <span>Visible systems</span>
                  <span className="text-[#FF5E14] font-medium text-[13px] sm:text-[14px] select-none mx-1">
                    |
                  </span>
                  <span>Culture patterns</span>
                  <span className="text-[#FF5E14] font-medium text-[13px] sm:text-[14px] select-none mx-1">
                    |
                  </span>
                  <span>Invisible dynamics</span>
                </p>
                <p className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
                  <span>Organisational relationships</span>
                  <span className="text-[#FF5E14] font-medium text-[13px] sm:text-[14px] select-none mx-1">
                    |
                  </span>
                  <span>Leadership behaviour</span>
                  <span className="text-[#FF5E14] font-medium text-[13px] sm:text-[14px] select-none mx-1">
                    |
                  </span>
                  <span>Ways of Working</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
