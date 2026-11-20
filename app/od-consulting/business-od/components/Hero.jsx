"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const CAPABILITIES = [
  "Leadership Alignment",
  "Culture Transformation",
  "Systemic Change",
  "Enterprise Thinking",
];

export default function BusinessODHero({ className = "" }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`relative w-full bg-white overflow-hidden font-ppmori min-h-[640px] sm:min-h-[720px] lg:min-h-[780px] xl:min-h-[840px] flex flex-col justify-between ${className}`}
    >
      {/* Background Ambience: Warm Sunrise / Sunset Radial Sky Glow */}
      <div
        className="absolute top-0 right-0 w-[85%] sm:w-[75%] lg:w-[65%] h-[70%] sm:h-[80%] pointer-events-none select-none z-0 transition-opacity duration-1000"
        style={{
          opacity: isMounted ? 1 : 0,
          background:
            "radial-gradient(ellipse at 78% 45%, rgba(254, 186, 138, 0.45) 0%, rgba(255, 222, 198, 0.28) 35%, rgba(255, 245, 238, 0.12) 60%, rgba(255, 255, 255, 0) 75%)",
        }}
        aria-hidden="true"
      />

      {/* Floating Seagulls Animation in the Sky */}
      <style>{`
        @keyframes birdGlide1 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(-14px, -10px, 0) rotate(-2deg); }
        }
        @keyframes birdGlide2 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(12px, -8px, 0) rotate(3deg); }
        }
      `}</style>

      {/* Floating Bird Accent 1 */}
      <div
        className="hidden md:block absolute pointer-events-none select-none z-10 transition-opacity duration-1000"
        style={{
          top: "16%",
          left: "69%",
          width: "38px",
          opacity: isMounted ? 0.75 : 0,
          animation: "birdGlide1 7s ease-in-out infinite",
        }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 44 24" fill="none" className="w-full h-auto text-[#6b5545] opacity-70">
          <path
            d="M2 18C10 6 18 10 22 18C26 10 34 6 42 18"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Floating Bird Accent 2 */}
      <div
        className="hidden md:block absolute pointer-events-none select-none z-10 transition-opacity duration-1000"
        style={{
          top: "23%",
          left: "79%",
          width: "22px",
          opacity: isMounted ? 0.6 : 0,
          animation: "birdGlide2 8.5s ease-in-out 1.2s infinite",
        }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 44 24" fill="none" className="w-full h-auto text-[#6b5545] opacity-60">
          <path
            d="M2 18C10 6 18 10 22 18C26 10 34 6 42 18"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 w-full max-w-[1680px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-6 sm:pb-8">
        <div className="w-full max-w-[760px] flex flex-col items-start text-left">
          {/* Eyebrow Tag */}
          <div
            className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 py-1.5 rounded-full bg-[#FFF2EB] border border-[#FFD8C4] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? "none" : "translate3d(0, 16px, 0)",
              transitionDelay: "100ms",
            }}
          >
            <span className="w-2 h-2 rounded-[2px] bg-[#FF5E14] shrink-0" aria-hidden="true" />
            <span
              className="text-[#FF5E14] font-semibold text-[11px] sm:text-[12px] md:text-[12.5px] uppercase tracking-[0.14em]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Organization Development
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="text-[#171717] font-semibold text-[clamp(32px,4.4vw,58px)] leading-[1.08] sm:leading-[1.06] tracking-[-0.03em] mb-4 sm:mb-5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? "none" : "translate3d(0, 24px, 0)",
              transitionDelay: "180ms",
            }}
          >
            Aligning strategy, people &amp;
            <br />
            culture for sustainable growth.
          </h1>

          {/* Description Copy */}
          <p
            className="text-[#4A4A4A] text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.6] max-w-[620px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              fontFamily: "Inter, sans-serif",
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? "none" : "translate3d(0, 20px, 0)",
              transitionDelay: "280ms",
            }}
          >
            Strong organisations don&apos;t happen by chance. We design, facilitate and implement
            custom OD solutions that help leaders navigate complexity, build high-trust
            collaboration, and turn transformation into measurable business performance.
          </p>

          {/* Key Capabilities Pills */}
          <div
            className="mt-6 flex flex-wrap items-center gap-2 sm:gap-2.5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? "none" : "translate3d(0, 18px, 0)",
              transitionDelay: "360ms",
            }}
          >
            {CAPABILITIES.map((pill, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#F5F5F5] border border-[#E8E8E8] text-[#333] text-[12px] sm:text-[13px] font-medium"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E14]" />
                {pill}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="mt-8 sm:mt-9 flex items-center gap-3.5 sm:gap-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? "none" : "translate3d(0, 18px, 0)",
              transitionDelay: "440ms",
            }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-[8px] bg-[#FF5E14] text-white font-ppmori text-[14px] sm:text-[15px] font-semibold shadow-sm hover:bg-[#e0500d] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,94,20,0.35)] active:scale-[0.98] transition-all cursor-pointer"
            >
              Book a call
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-[8px] bg-white border border-[#DCDCDC] text-[#171717] font-ppmori text-[14px] sm:text-[15px] font-semibold shadow-sm hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-0.5 hover:shadow-sm active:scale-[0.98] transition-all cursor-pointer"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>

      {/* Skyline Image Illustration: Beautiful Golden Sunset Cityscape */}
      <div
        className="relative w-full z-10 select-none pointer-events-none mt-2 sm:mt-4 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          opacity: isMounted ? 1 : 0,
          transform: isMounted ? "none" : "translate3d(0, 32px, 0)",
          transitionDelay: "220ms",
        }}
      >
        {/* Soft top gradient blend so the image melts seamlessly into the white page background */}
        <div
          className="absolute -top-1 left-0 right-0 h-16 sm:h-24 md:h-32 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.8) 40%, rgba(255, 255, 255, 0) 100%)",
          }}
        />

        <div className="relative w-full max-w-[1920px] mx-auto overflow-hidden">
          <Image
            src="/BusinessOD/business-od-hero.webp"
            alt="Business Organization Development - Modern Cityscape at Sunset"
            width={1920}
            height={1080}
            priority
            sizes="100vw"
            className="w-full h-auto object-cover object-bottom block max-h-[580px] sm:max-h-[640px] md:max-h-[720px] lg:max-h-[760px]"
          />

          {/* Soft Bottom Warm Glow edge */}
          <div
            className="absolute bottom-0 left-0 right-0 h-8 sm:h-12 pointer-events-none"
            style={{
              background:
                "linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
