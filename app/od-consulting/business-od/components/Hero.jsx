"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BusinessODHero({ className = "" }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`relative w-full min-h-[640px] sm:min-h-[720px] h-[92vh] max-h-[1020px] flex flex-col justify-end overflow-hidden bg-[#F0F6FC] font-ppmori ${className}`}
    >
      {/* Background Cityscape Image with Clear Blue Sky */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
        <Image
          src="/BusinessOD/business-od-hero.jpg"
          alt="Leading organizational change & transformation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[75%_bottom] md:object-right-bottom"
        />

        {/* Ambient Gradient Wash: softens text area on left while keeping towers, blue sky, and clouds vibrant */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.72) 36%, rgba(255, 255, 255, 0.2) 60%, transparent 88%)",
          }}
        />

        {/* Mobile Gradient: subtle vertical shade from top-down to ensure readability on small screens */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-t from-white/95 via-white/75 to-transparent" />
      </div>

      {/* Floating Bird Micro-Animations */}
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

      {/* Flying Bird 1 */}
      <div
        className="hidden md:block absolute pointer-events-none select-none z-10 transition-opacity duration-1000"
        style={{
          top: "16%",
          left: "69%",
          width: "36px",
          opacity: isMounted ? 0.75 : 0,
          animation: "birdGlide1 7s ease-in-out infinite",
        }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 44 24" fill="none" className="w-full h-auto text-[#334155] opacity-75">
          <path
            d="M2 18C10 6 18 10 22 18C26 10 34 6 42 18"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Flying Bird 2 */}
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
        <svg viewBox="0 0 44 24" fill="none" className="w-full h-auto text-[#334155] opacity-65">
          <path
            d="M2 18C10 6 18 10 22 18C26 10 34 6 42 18"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Soft bottom edge transition to page background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-6 sm:h-8 md:h-10 pointer-events-none z-20"
        style={{
          background:
            "linear-gradient(0deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)",
        }}
      />

      {/* Hero Content Layer */}
      <div className="relative z-30 w-full max-w-[1783px] mx-auto px-4 sm:px-6 lg:px-12 pb-12 sm:pb-16 pt-28">
        <div className="w-full max-w-[720px] text-center md:text-left mx-auto md:mx-0 flex flex-col items-center md:items-start">
          {/* Eyebrow Tag */}
          <div
            className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 py-1.5 rounded-full bg-[#FFF2EB] border border-[#FFD8C4] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? "none" : "translate3d(0, 16px, 0)",
              transitionDelay: "80ms",
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

          {/* Title with staggered entrance */}
          <h1 className="font-ppmori text-[clamp(28px,3.8vw,52px)] font-semibold text-[#171717] tracking-[-0.8px] leading-[36px] sm:leading-[42px] md:leading-[48px] text-center md:text-left overflow-hidden">
            <span
              className="block sm:whitespace-nowrap transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: isMounted ? 1 : 0,
                transform: isMounted ? "none" : "translate3d(0, 32px, 0)",
                transitionDelay: "140ms",
              }}
            >
              Leading organizational
            </span>
            <span
              className="block sm:whitespace-nowrap transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: isMounted ? 1 : 0,
                transform: isMounted ? "none" : "translate3d(0, 32px, 0)",
                transitionDelay: "240ms",
              }}
            >
              change &amp; transformation
            </span>
          </h1>

          {/* Description */}
          <p
            className="mt-3.5 sm:mt-4 text-[#374151] font-inter font-normal text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[1.5] max-w-[500px] text-center md:text-left mx-auto md:mx-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? "none" : "translate3d(0, 20px, 0)",
              transitionDelay: "340ms",
            }}
          >
            Strong organizations don&apos;t happen by chance. We help leaders and
            teams build better workplace cultures, strengthen collaboration,
            and achieve sustainable growth.
          </p>

          {/* CTA Buttons */}
          <div
            className="mt-6 sm:mt-7 flex items-center justify-center md:justify-start gap-3.5 sm:gap-4 w-full md:w-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: isMounted ? 1 : 0,
              transform: isMounted ? "none" : "translate3d(0, 18px, 0)",
              transitionDelay: "440ms",
            }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-[8px] bg-[#FF5E14] text-white font-ppmori text-[14px] sm:text-[15px] font-semibold shadow-sm hover:bg-[#e0500d] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,94,20,0.35)] active:scale-[0.98] transition-all cursor-pointer"
            >
              Book a call
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-[8px] bg-white border border-[#DCDCDC] text-[#171717] font-ppmori text-[14px] sm:text-[15px] font-semibold shadow-sm hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-0.5 hover:shadow-sm active:scale-[0.98] transition-all cursor-pointer"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
