"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function BusinessODHero({ className = "" }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`relative w-full min-h-[500px] sm:min-h-[580px] md:min-h-[660px] h-[80vh] max-h-[920px] overflow-hidden bg-[#F0F6FC] font-ppmori ${className}`}
    >
      {/* Cityscape Image Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
        <Image
          src="/BusinessOD/business-od-hero.jpg"
          alt="Business Organization Development Cityscape"
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
        />
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
        className="absolute bottom-0 left-0 right-0 h-6 sm:h-10 pointer-events-none z-20"
        style={{
          background:
            "linear-gradient(0deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)",
        }}
      />
    </section>
  );
}
