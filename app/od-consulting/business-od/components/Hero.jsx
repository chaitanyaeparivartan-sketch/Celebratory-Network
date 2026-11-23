"use client";

import { useState, useEffect } from "react";

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
      {/* Background Building Image Layer using exact Figma specifications */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none select-none z-0 max-w-none transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          width: "1615px",
          height: "945px",
          transform: isMounted
            ? "scaleX(-1)"
            : "scaleX(-1) translate3d(20px, 16px, 0)",
          aspectRatio: "94/55",
          background:
            "url(/business-od/hero-image-2.webp) transparent -51.5px 0px / 104.025% 100% no-repeat",
          opacity: isMounted ? 1 : 0,
        }}
        aria-hidden="true"
      />

      {/* Subtle top gradient overlay to provide contrast for the floating header */}
      <div className="absolute inset-x-0 top-0 h-28 sm:h-36 bg-gradient-to-b from-black/20 via-black/5 to-transparent pointer-events-none z-10" />

      {/* Soft ambient wash on mobile/tablet so text remains crystal clear */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/20 md:from-white/85 md:via-white/40 md:to-transparent lg:hidden pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* Bottom edge feather into the orange Statement section */}
      <div
        className="absolute bottom-0 inset-x-0 h-3 sm:h-4 md:h-5 bg-gradient-to-b from-transparent to-[#FF5E14] pointer-events-none z-15"
        aria-hidden="true"
      />

      {/* Hero Section Content Placed Directly on the Left Side */}
      <div className="relative z-20 w-full max-w-[1520px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-24">
        <div
          className="w-full max-w-[540px] sm:max-w-[580px] md:max-w-[620px] lg:max-w-[660px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: isMounted ? 1 : 0,
            transform: isMounted ? "none" : "translate3d(0, 20px, 0)",
          }}
        >
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <span
              className="w-2 h-2 rounded-[1px] bg-[#FF5E14] inline-block shrink-0"
              aria-hidden="true"
            />
            <span
              className="text-[#374151] font-semibold text-[12px] sm:text-[13px] tracking-[0.2em] uppercase select-none"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              OD CONSULTING — OUR PERSPECTIVE
            </span>
          </div>

          {/* Heading - Sentence Case */}
          <h1
            className="text-[#141414] font-semibold text-[clamp(32px,4.5vw,64px)] leading-[1.06] tracking-[-0.035em] mb-4 sm:mb-5"
            style={{
              fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
            }}
          >
            Toward organization development
          </h1>

          {/* Story Body & Dimensions */}
          <div className="space-y-4 sm:space-y-5">
            <p
              className="text-[#334155] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.68] font-normal"
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
                className="text-[#FF5E14] font-semibold text-[16px] sm:text-[17px] md:text-[18px] leading-snug"
                style={{
                  fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
                }}
              >
                Our work focuses on helping organizations understand and work with:
              </h2>

              <div
                className="space-y-1.5 sm:space-y-2 text-[14px] sm:text-[15px] md:text-[15.5px] leading-[1.5] text-[#2D3748] font-normal"
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
