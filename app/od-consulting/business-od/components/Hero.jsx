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

      {/* Layer 2: Building Foreground (Building.png) positioned on right */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden"
        style={{
          opacity: isMounted ? 1 : 0,
          transform: isMounted ? "none" : "translate3d(20px, 16px, 0)",
          transitionDelay: "150ms",
        }}
      >
        <div className="relative w-full h-full lg:translate-x-[6%] xl:translate-x-[10%]">
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

      {/* Layer 4: Main Content - exact layout, typography, and colors from slide */}
      <div className="relative z-20 w-full max-w-[1520px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-32 sm:pt-36 md:pt-38 lg:pt-36 pb-16 sm:pb-20">
        <div className="w-full max-w-[560px] lg:max-w-[590px]">
          {/* Eyebrow / Tag: Orange Square + Orange Text */}
          <div
            className="flex items-center gap-2 mb-3 sm:mb-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? "none" : "translate3d(0, 16px, 0)",
              transitionDelay: "100ms",
            }}
          >
            <span
              className="w-2 h-2 bg-[#FF5E14] inline-block rounded-[1px] shrink-0"
              aria-hidden="true"
            />
            <span
              className="text-[#FF5E14] font-semibold text-[13px] sm:text-[14px] md:text-[15px] tracking-[0.14em] uppercase select-none"
              style={{ fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif' }}
            >
              OUR PERSPECTIVE
            </span>
          </div>

          {/* Heading: Exact 2 Lines, Bold Navy/Slate All-Caps */}
          <h1
            className="text-[#1E293B] font-bold text-[34px] sm:text-[44px] md:text-[50px] lg:text-[54px] xl:text-[58px] leading-[1.06] tracking-tight uppercase mb-5 sm:mb-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? "none" : "translate3d(0, 24px, 0)",
              transitionDelay: "180ms",
            }}
          >
            <span className="block">TOWARD ORGANIZATION</span>
            <span className="block">DEVELOPMENT</span>
          </h1>

          {/* Body Paragraph */}
          <div
            className="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? "none" : "translate3d(0, 20px, 0)",
              transitionDelay: "260ms",
            }}
          >
            <p
              className="text-[#334155] text-[15px] sm:text-[16px] md:text-[16.5px] leading-[1.55] max-w-[530px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Many transformation efforts focus on structures, processes and governance. These are necessary. But they are not sufficient. Organizations are living systems. Formal structures operate alongside informal networks, official priorities coexist with unspoken realities. Success depends on both.
            </p>

            {/* Subheading in Brand Orange + 2 Dimension Bullet Lines */}
            <div className="mt-5 sm:mt-6 max-w-[540px]">
              <h2
                className="text-[#FF5E14] font-bold text-[17px] sm:text-[18px] md:text-[19px] leading-[1.32] mb-3"
                style={{ fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif' }}
              >
                <span className="block">Our work focuses on helping organizations</span>
                <span className="block">understand and work with:</span>
              </h2>

              <div
                className="space-y-1.5 text-[14px] sm:text-[15px] text-[#2D3748] font-medium"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span>Visible systems</span>
                  <span className="text-[#FF5E14] font-bold text-[18px] leading-none select-none">·</span>
                  <span>Culture patterns</span>
                  <span className="text-[#FF5E14] font-bold text-[18px] leading-none select-none">·</span>
                  <span>Invisible dynamics</span>
                </p>
                <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span>Organisational relationships</span>
                  <span className="text-[#FF5E14] font-bold text-[18px] leading-none select-none">·</span>
                  <span>Leadership behaviour</span>
                  <span className="text-[#FF5E14] font-bold text-[18px] leading-none select-none">·</span>
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
