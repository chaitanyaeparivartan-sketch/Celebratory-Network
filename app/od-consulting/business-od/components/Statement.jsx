"use client";

import Reveal from "@/app/components/Common/Reveal";

export default function Statement({ className = "" }) {
  return (
    <section className={`w-full bg-white font-ppmori ${className}`}>
      {/* 1. Lead Culture Statement (Image 1) */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-14 sm:py-18 md:py-24">
        <Reveal direction="up" duration={700} distance={24}>
          <h2 className="text-[#171717] font-semibold text-center text-[clamp(22px,3vw,40px)] leading-[1.28] tracking-[-0.02em] max-w-[1080px] mx-auto">
            Culture is what enables teams to defy the odds and achieve the remarkable
          </h2>
        </Reveal>
      </div>

      {/* 2. Orange Quote Banner (Image 2 - without any photo/image) */}
      <div className="relative w-full bg-[#FF5E14] overflow-hidden py-14 sm:py-16 md:py-20 lg:py-24">
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

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-[880px] mx-auto flex flex-col items-center text-center">
            {/* Quote */}
            <Reveal direction="up" duration={800} distance={28}>
              <blockquote className="text-white font-semibold text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] xl:text-[40px] leading-[1.22] tracking-tight">
                &ldquo;Self as an instrument of change is the key to facilitate
                any change process&rdquo;.
              </blockquote>
            </Reveal>

            {/* Author Name */}
            <Reveal direction="up" duration={800} delay={120} distance={20}>
              <h3 className="mt-7 sm:mt-9 text-white font-bold text-sm sm:text-base tracking-[0.08em] uppercase">
                PAYAL GUPTA
              </h3>
            </Reveal>

            {/* Author Title & Company with CN Badge (pure CSS / no image) */}
            <Reveal direction="up" duration={800} delay={200} distance={16}>
              <div className="mt-2.5 flex items-center justify-center gap-2 group cursor-default">
                {/* Pure CSS CN Badge */}
                <span
                  className="w-[18px] h-[18px] rounded-full bg-[#183B56] text-white text-[9px] font-bold flex items-center justify-center shrink-0 shadow-sm"
                  aria-hidden="true"
                >
                  CN
                </span>
                <span
                  className="text-white/95 font-medium text-[11px] sm:text-[12px] tracking-wide uppercase font-inter"
                >
                  CEO, DIRECTOR &ndash; CELEBRATORY NETWORK
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
