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

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-[1520px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-32 sm:pt-36 md:pt-38 lg:pt-36 pb-16 sm:pb-20">
        <div className="w-full max-w-[480px] sm:max-w-[560px] md:max-w-[640px] lg:max-w-[700px]">
          {/* Eyebrow Tag */}
          <div
            className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
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
              Our Perspective
            </span>
          </div>

          {/* Heading - Toward Organizational Development */}
          <h1
            className="text-white font-semibold text-[clamp(32px,4.5vw,56px)] leading-[1.08] tracking-[-0.8px] mb-4 sm:mb-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? "none" : "translate3d(0, 24px, 0)",
              transitionDelay: "180ms",
            }}
          >
            Toward Organizational Development
          </h1>

          {/* Description */}
          <p
            className="text-white/90 text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] leading-[1.6] font-normal max-w-[560px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              fontFamily: "Inter, sans-serif",
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? "none" : "translate3d(0, 20px, 0)",
              transitionDelay: "260ms",
            }}
          >
            We help organizations grow by understanding their structures, culture, relationships, leadership, and the invisible dynamics that shape how people work together.
          </p>
        </div>
      </div>
    </section>
  );
}
