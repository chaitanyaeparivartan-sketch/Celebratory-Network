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
      className={`relative w-full min-h-screen min-h-[100dvh] bg-[#f0f6fc] overflow-hidden font-ppmori flex items-center ${className}`}
    >
      {/* Layer 1: Sky Background (Bg.png) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/BusinessOD/Bg.png"
          alt="Sky background"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center block"
        />
      </div>

      {/* Layer 2: Building Foreground (Building.png) shifted right so it never overlaps text */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden"
        style={{
          opacity: isMounted ? 1 : 0,
          transform: isMounted ? "none" : "translate3d(20px, 16px, 0)",
          transitionDelay: "150ms",
        }}
      >
        <div className="relative w-full h-full translate-x-[36%] sm:translate-x-[42%] md:translate-x-[46%] lg:translate-x-[50%] xl:translate-x-[52%]">
          <Image
            src="/BusinessOD/Building.png"
            alt="Organization Development Building"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-right-bottom block"
          />
        </div>
      </div>

      {/* Layer 3: Soft ambient gradient wash on mobile/tablet for crystal-clear readability */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent md:from-white/85 md:via-white/30 md:to-transparent lg:hidden pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* Layer 4: Minimal bottom edge feather into the orange Statement section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-3 sm:h-4 md:h-5 pointer-events-none z-15 bg-gradient-to-b from-transparent to-[#FF5E14]"
        aria-hidden="true"
      />

      {/* Main Content - exact font sizes matching app/about/components/Hero.jsx */}
      <div className="relative z-20 w-full max-w-[1520px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-32 sm:pt-36 md:pt-38 lg:pt-36 pb-16 sm:pb-20">
        <div className="w-full max-w-[440px] sm:max-w-[520px] md:max-w-[620px] lg:max-w-[680px]">
          {/* Eyebrow / Tag */}
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
              className="text-[#FF5E14] font-semibold text-[12px] sm:text-[13px] md:text-[14px] tracking-[0.2em] uppercase select-none"
              style={{ fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif' }}
            >
              OUR PERSPECTIVE
            </span>
          </div>

          {/* Heading - Sentence case matching About Us Hero */}
          <h1
            className="text-[#1E293B] font-semibold text-[clamp(28px,3.8vw,52px)] leading-[36px] sm:leading-[42px] md:leading-[48px] tracking-[-0.8px] mb-2.5 sm:mb-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
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

          {/* Story Paragraphs - exact font size and line-height from About Us Hero */}
          <div
            className="space-y-3 sm:space-y-3.5 max-w-[540px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? "none" : "translate3d(0, 20px, 0)",
              transitionDelay: "260ms",
            }}
          >
            <p
              className="text-[#334155] text-[15px] sm:text-[15.5px] md:text-[16px] lg:text-[16.5px] leading-[1.55] sm:leading-[1.5] font-normal"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Many transformation efforts focus on structures, processes and governance. These are necessary. But they are not sufficient. Organizations are living systems. Formal structures operate alongside informal networks, official priorities coexist with unspoken realities. Success depends on both.
            </p>

            {/* Subheading in Brand Orange + 2 Dimension Bullet Lines */}
            <div className="pt-1.5 sm:pt-2 space-y-2">
              <h2
                className="text-[#FF5E14] font-semibold text-[15px] sm:text-[15.5px] md:text-[16px] lg:text-[16.5px] leading-snug"
                style={{ fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif' }}
              >
                <span className="block">Our work focuses on helping organizations</span>
                <span className="block">understand and work with:</span>
              </h2>

              <div
                className="space-y-1 sm:space-y-1.5 text-[14px] sm:text-[14.5px] md:text-[15px] leading-[1.5] text-[#2D3748] font-normal"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span>Visible systems</span>
                  <span className="text-[#FF5E14] font-bold text-[14px] sm:text-[15px] select-none">·</span>
                  <span>Culture patterns</span>
                  <span className="text-[#FF5E14] font-bold text-[14px] sm:text-[15px] select-none">·</span>
                  <span>Invisible dynamics</span>
                </p>
                <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span>Organisational relationships</span>
                  <span className="text-[#FF5E14] font-bold text-[14px] sm:text-[15px] select-none">·</span>
                  <span>Leadership behaviour</span>
                  <span className="text-[#FF5E14] font-bold text-[14px] sm:text-[15px] select-none">·</span>
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
