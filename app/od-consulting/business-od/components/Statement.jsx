"use client";

import Reveal from "@/app/components/common/Reveal";

export default function Statement({ className = "" }) {
  return (
    <section
      className={`relative w-full bg-[#FF5E14] overflow-hidden py-8 sm:py-10 md:py-12 lg:py-14 select-none font-ppmori ${className}`}
    >
      {/* Concentric Circles Background Elements with Subtle Pulse */}
      <style>{`
        @keyframes odStatementRipple {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.95; }
          50% { transform: translate(-50%, -50%) scale(1.03); opacity: 0.75; }
        }
      `}</style>
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Outer Circle (1809px) */}
        <div
          className="absolute left-1/2 top-1/2 pointer-events-none will-change-transform"
          style={{
            width: "1809px",
            height: "1809px",
            borderRadius: "1809px",
            border: "1px solid #FFF",
            filter: "blur(13px)",
            transform: "translate(-50%, -50%)",
            animation: "odStatementRipple 9s ease-in-out infinite",
          }}
        />

        {/* Middle Circle (1262px) */}
        <div
          className="absolute left-1/2 top-1/2 pointer-events-none will-change-transform"
          style={{
            width: "1262px",
            height: "1262px",
            borderRadius: "1262px",
            border: "1px solid #FFF",
            filter: "blur(8px)",
            transform: "translate(-50%, -50%)",
            animation: "odStatementRipple 8s ease-in-out 1s infinite",
          }}
        />

        {/* Inner Circle (612px) */}
        <div
          className="absolute left-1/2 top-1/2 pointer-events-none will-change-transform"
          style={{
            width: "612px",
            height: "612px",
            borderRadius: "612px",
            border: "1px solid #FFF",
            filter: "blur(8px)",
            transform: "translate(-50%, -50%)",
            animation: "odStatementRipple 7s ease-in-out 2s infinite",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1080px] mx-auto flex flex-col items-center text-center">
          {/* Main Statement Quote: White on Brand Orange with Double Quotes */}
          <Reveal direction="up" duration={800} distance={24}>
            <blockquote className="text-white font-semibold text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] xl:text-[44px] leading-[1.24] tracking-tight">
              &ldquo;Culture is what enables teams to defy the odds and achieve the remarkable&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </div>

      {/* Minimal bottom edge feather into the next white section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-3 sm:h-4 md:h-5 pointer-events-none z-10 bg-gradient-to-b from-[#FF5E14] to-white"
        aria-hidden="true"
      />
    </section>
  );
}
