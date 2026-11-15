"use client";

import Reveal from "@/app/components/Common/Reveal";

export default function Purpose({ className = "" }) {
  return (
    <section
      className={`relative w-full bg-[#FF5E14] overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 px-6 sm:px-8 md:px-12 flex flex-col items-center justify-center select-none font-ppmori ${className}`}
      aria-label="Our Purpose"
    >
      {/* Concentric Circles Background with Subtle Pulse */}
      <style>{`
        @keyframes purposeRipple {
          0%, 100% { transform: translate(-50%, 50%) scale(1); opacity: 0.95; }
          50% { transform: translate(-50%, 50%) scale(1.03); opacity: 0.75; }
        }
      `}</style>
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Outer Circle (1809px) */}
        <div
          className="absolute left-1/2 bottom-0 pointer-events-none will-change-transform"
          style={{
            width: "1809px",
            height: "1809px",
            borderRadius: "1809px",
            border: "1px solid #FFF",
            filter: "blur(13px)",
            transform: "translate(-50%, 50%)",
            animation: "purposeRipple 9s ease-in-out infinite",
          }}
        />

        {/* Middle Circle (1262px) */}
        <div
          className="absolute left-1/2 bottom-0 pointer-events-none will-change-transform"
          style={{
            width: "1262px",
            height: "1262px",
            borderRadius: "1262px",
            border: "1px solid #FFF",
            filter: "blur(8px)",
            transform: "translate(-50%, 50%)",
            animation: "purposeRipple 8s ease-in-out 1s infinite",
          }}
        />

        {/* Inner Circle (612px) */}
        <div
          className="absolute left-1/2 bottom-0 pointer-events-none will-change-transform"
          style={{
            width: "612px",
            height: "612px",
            borderRadius: "612px",
            border: "1px solid #FFF",
            filter: "blur(8px)",
            transform: "translate(-50%, 50%)",
            animation: "purposeRipple 7s ease-in-out 2s infinite",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1080px] mx-auto flex flex-col items-center text-center">
        {/* Top Tag / Pill: ■ Our Purpose */}
        <Reveal direction="up" duration={700}>
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-5 md:mb-6">
            <span
              className="w-1.5 h-1.5 bg-white inline-block rounded-[1px] shrink-0"
              aria-hidden="true"
            />
            <span className="text-white text-[12px] sm:text-[13px] md:text-[14px] font-medium tracking-normal">
              Our Purpose
            </span>
          </div>
        </Reveal>

        {/* Main Purpose Statement */}
        <Reveal direction="up" duration={800} delay={100}>
          <h2 className="text-white font-semibold text-[clamp(30px,4.6vw,52px)] leading-[1.2] sm:leading-[1.17] md:leading-[1.15] tracking-[-0.025em] text-center max-w-[940px]">
            To do meaningful work that creates
            <br className="hidden sm:inline" />{" "}
            impact and enables transformation in the
            <br className="hidden sm:inline" />{" "}
            journeys of organisations, communities
            <br className="hidden sm:inline" />{" "}
            and individuals.
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
