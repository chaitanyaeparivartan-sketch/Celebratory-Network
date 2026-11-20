"use client";

import Reveal from "@/app/components/Common/Reveal";

export default function Statement({ className = "" }) {
  return (
    <section
      className={`relative w-full bg-[#FF5E14] overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 font-ppmori ${className}`}
    >
      {/* Subtle pulsating background glow */}
      <style>{`
        @keyframes odStatementGlow {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(1.08); }
        }
      `}</style>
      <div
        className="absolute inset-0 pointer-events-none will-change-transform"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.22) 0%, transparent 70%)",
          animation: "odStatementGlow 8s ease-in-out infinite",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1080px] mx-auto flex flex-col items-center text-center">
          {/* Main Statement Text: White on Brand Orange */}
          <Reveal direction="up" duration={800} distance={28}>
            <h2 className="text-white font-semibold text-2xl sm:text-3xl md:text-[36px] lg:text-[42px] xl:text-[46px] leading-[1.24] tracking-tight">
              Culture is what enables teams to defy the odds and achieve the remarkable
            </h2>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
