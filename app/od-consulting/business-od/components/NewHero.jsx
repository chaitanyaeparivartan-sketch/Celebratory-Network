"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function NewHero({ className = "" }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`relative w-full bg-white ${className}`}>
      {/* Top Wide Photographic Banner */}
      <div className="relative w-full h-[52vh] sm:h-[58vh] md:h-[62vh] min-h-[360px] sm:min-h-[420px] overflow-hidden bg-[#1F2937]">
        <Image
          src="/business-od/newhero-image-1.jpg"
          alt="Organization Development Cityscape"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] transition-transform duration-1000 ease-out"
          style={{
            transform: isMounted ? "scale(1)" : "scale(1.04)",
          }}
        />
        {/* Subtle gradient overlay to provide contrast for the floating header */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/10 pointer-events-none" />
      </div>

      {/* Overlapping White Panel */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative -mt-10 sm:-mt-12 md:-mt-14 bg-white rounded-t-[28px] sm:rounded-t-[34px] md:rounded-t-[38px] px-6 sm:px-10 md:px-14 lg:px-16 pt-8 sm:pt-12 md:pt-14 pb-12 sm:pb-16 shadow-[0_-12px_36px_rgba(20,20,20,0.06)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
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
              OD CONSULTING — OUR PERSPECTIVE
            </span>
          </div>

          {/* Large Heading - Sentence Case */}
          <h1
            className="text-[#141414] font-semibold text-[clamp(32px,5.2vw,72px)] leading-[1.04] tracking-[-0.035em] max-w-[1100px]"
            style={{
              fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
            }}
          >
            Toward organization development
          </h1>

          {/* Story Body & Dimensions */}
          <div className="mt-6 sm:mt-8 md:mt-10 max-w-[820px] space-y-5">
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

            <div className="pt-2 sm:pt-3 space-y-3">
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
