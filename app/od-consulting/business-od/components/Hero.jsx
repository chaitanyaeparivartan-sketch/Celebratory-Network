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
      className={`relative w-full min-h-screen min-h-[100dvh] overflow-hidden flex items-center ${className}`}
      style={{
        background:
          "linear-gradient(180deg, hsl(209.1177deg 93.8045% 45%) 0%, hsl(209.1177deg 82.4294% 100%) 148.67%)",
      }}
    >
      {/* Background Architectural Building Layer (Right-aligned matching Figma Frame 146) */}
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

      {/* Main Content (Left Column on Sky Background - Exact Typography from Frame 146) */}
      <div className="relative z-20 w-full max-w-[1520px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-24">
        <div
          className="w-full max-w-[540px] sm:max-w-[580px] md:max-w-[620px] lg:max-w-[660px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: isMounted ? 1 : 0,
            transform: isMounted ? "none" : "translate3d(0, 20px, 0)",
          }}
        >
          {/* Eyebrow Tag: Orange Square + White Tracking Text */}
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <span
              className="w-2 h-2 rounded-[1px] bg-[#FF5E14] inline-block shrink-0"
              aria-hidden="true"
            />
            <span
              className="text-white font-semibold text-[11px] sm:text-[12px] md:text-[13px] tracking-[0.2em] uppercase select-none"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              WHERE CAN ORGANIZATION DEVELOPMENT
            </span>
          </div>

          {/* Heading from Frame 146: Help your Business? */}
          <h1
            className="text-white font-semibold text-[clamp(36px,5.2vw,72px)] leading-[1.05] tracking-[-0.035em] mb-5 sm:mb-6"
            style={{
              fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
            }}
          >
            Help your Business?
          </h1>

          {/* Story Body Narrative & System Dimensions */}
          <div className="space-y-4 sm:space-y-5">
            <p
              className="text-white/90 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.68] font-normal"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Many transformation efforts focus on structures, processes and
              governance. These are necessary. But they are not sufficient.
              Organizations are living systems. Formal structures operate
              alongside informal networks, official priorities coexist with
              unspoken realities. Success depends on both.
            </p>

            <div className="pt-2 sm:pt-2.5 space-y-2.5 sm:space-y-3">
              <h2
                className="text-[#FF5E14] font-semibold text-[16px] sm:text-[17px] md:text-[18px] leading-snug drop-shadow-sm"
                style={{
                  fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
                }}
              >
                Our work focuses on helping organizations understand and work with:
              </h2>

              <div
                className="space-y-1.5 sm:space-y-2 text-[14px] sm:text-[15px] md:text-[15.5px] leading-[1.5] text-white/95 font-normal"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                  <span>Visible systems</span>
                  <span className="text-[#FF5E14] font-bold text-[14px] sm:text-[15px] select-none">
                    ·
                  </span>
                  <span>Culture patterns</span>
                  <span className="text-[#FF5E14] font-bold text-[14px] sm:text-[15px] select-none">
                    ·
                  </span>
                  <span>Invisible dynamics</span>
                </p>
                <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                  <span>Organisational relationships</span>
                  <span className="text-[#FF5E14] font-bold text-[14px] sm:text-[15px] select-none">
                    ·
                  </span>
                  <span>Leadership behaviour</span>
                  <span className="text-[#FF5E14] font-bold text-[14px] sm:text-[15px] select-none">
                    ·
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
