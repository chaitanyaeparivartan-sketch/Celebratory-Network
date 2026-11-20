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
      className={`relative w-full h-screen min-h-[680px] min-h-[100dvh] bg-white overflow-hidden font-ppmori ${className}`}
    >
      {/* Background Image - exact uploaded JPG, unoptimized */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          opacity: isMounted ? 1 : 0,
          transform: isMounted ? "none" : "translate3d(0, 20px, 0)",
          transitionDelay: "200ms",
        }}
      >
        <Image
          src="/BusinessOD/hero-building.jpg"
          alt="Our Perspective on Organization Development"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-right-bottom block"
        />
        {/* Soft atmospheric gradient wash ensuring maximum readability on left */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent md:from-white/85 md:via-white/45 md:to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Main Story Content - exactly matching app/about/components/Hero.jsx CSS */}
      <div className="relative z-10 w-full max-w-[1520px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-32 sm:pt-36 md:pt-40 lg:pt-36 pb-16 sm:pb-20 lg:pb-24">
        <div className="w-full max-w-[440px] sm:max-w-[520px] md:max-w-[620px] lg:max-w-[680px]">
          {/* Top Tag */}
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
            <span className="text-[#374151] font-semibold text-[11px] sm:text-[12px] md:text-[13px] tracking-[0.14em] uppercase select-none">
              Visible Systems · Culture · Invisible Dynamics
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-[#141414] font-semibold text-[clamp(28px,3.8vw,52px)] leading-[36px] sm:leading-[42px] md:leading-[48px] tracking-[-0.8px] mb-2.5 sm:mb-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? "none" : "translate3d(0, 24px, 0)",
              transitionDelay: "180ms",
            }}
          >
            Our Perspective on Organization Development
          </h1>

          {/* Story Paragraphs / Brief */}
          <div
            className="space-y-3 sm:space-y-3.5 max-w-[540px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? "none" : "translate3d(0, 20px, 0)",
              transitionDelay: "280ms",
            }}
          >
            <p className="text-[#242424] text-[15px] sm:text-[15.5px] md:text-[16px] lg:text-[16.5px] leading-[1.55] sm:leading-[1.5] font-normal">
              Structures, processes and governance are necessary, but not sufficient. Organizations are living systems where formal structures run alongside informal networks. We help you work with both: culture patterns, relationships, leadership behaviour and ways of working.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
