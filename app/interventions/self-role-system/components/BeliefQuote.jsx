"use client";

import Reveal from "@/app/components/Common/Reveal";

export default function BeliefQuote() {
  return (
    <section className="relative w-full bg-[#FF5E14] overflow-hidden px-5 sm:px-6 py-20 sm:py-28 text-center text-white">
      {/* Subtle pulsating background glow effect matching home page Statement section */}
      <style>{`
        @keyframes statementGlow {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.08); }
        }
        @keyframes quoteFloat {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -8px); }
        }
      `}</style>
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none will-change-transform"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.24) 0%, transparent 68%)",
          animation: "statementGlow 8s ease-in-out infinite",
        }}
      />

      <div className="mx-auto max-w-[1080px] relative z-10 flex flex-col items-center justify-center text-center">
        <Reveal
          direction="up"
          duration={750}
          distance={28}
          className="flex flex-col items-center justify-center text-center w-full"
        >
          {/* Centered Eyebrow chip with live radar beacon */}
          <div className="inline-flex items-center justify-center gap-2.5 font-inter text-[12px] sm:text-[13px] md:text-[14px] font-medium uppercase leading-[18px] tracking-[0.24px] text-white/95 mb-6 sm:mb-8 bg-white/10 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-sm shadow-sm transition-all duration-300 hover:bg-white/15">
            <span className="relative flex h-2 w-2 flex-none">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            Our belief
          </div>

          {/* Quote container with floating quote decoration */}
          <div className="relative w-full max-w-[920px] mx-auto flex flex-col items-center justify-center text-center">
            <span
              aria-hidden="true"
              className="pointer-events-none select-none font-serif text-[120px] sm:text-[160px] leading-none text-white/20 absolute -top-12 sm:-top-16 left-1/2 will-change-transform"
              style={{ animation: "quoteFloat 6s ease-in-out infinite" }}
            >
              “
            </span>
            <h2 className="relative z-10 mx-auto max-w-[880px] font-ppmori text-2xl sm:text-3xl md:text-[42px] lg:text-[48px] font-semibold leading-[1.22] tracking-[-0.8px] text-white">
              “We don’t fix people. We enable systems to{" "}
              <span className="relative inline-block text-white">
                notice and learn
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-white/50 rounded-full animate-pulse" />
              </span>{" "}
              from their patterns.”
            </h2>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
