"use client";

import Reveal from "@/app/components/Common/Reveal";

export default function BeliefQuote() {
  return (
    <section className="bg-white px-5 sm:px-6 py-20 sm:py-28 text-center text-[#1a1a1a] relative overflow-hidden">
      {/* Ambient warm glow in background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[280px] rounded-full bg-[#FFF1EA] blur-[110px] opacity-75"
      />

      <div className="mx-auto max-w-[1080px] relative z-10 flex flex-col items-center justify-center text-center">
        <Reveal
          direction="up"
          duration={750}
          distance={28}
          className="flex flex-col items-center justify-center text-center w-full"
        >
          {/* Centered Eyebrow chip */}
          <div className="inline-flex items-center justify-center gap-1.5 font-inter text-[12px] sm:text-[13px] md:text-[14px] font-medium uppercase leading-[18px] tracking-[0.24px] text-[#242424] mb-6 sm:mb-8">
            <span className="h-1.5 w-1.5 rounded-[1px] bg-[#FF5E14]" />
            Our belief
          </div>

          {/* Centered Quote */}
          <div className="relative w-full max-w-[920px] mx-auto flex flex-col items-center justify-center text-center">
            <span
              aria-hidden="true"
              className="pointer-events-none select-none font-serif text-[120px] sm:text-[160px] leading-none text-[#FF5E14]/15 absolute -top-12 sm:-top-16 left-1/2 -translate-x-1/2"
            >
              “
            </span>
            <h2 className="relative z-10 mx-auto max-w-[880px] font-ppmori text-[clamp(28px,4.8vw,52px)] font-semibold leading-[1.22] tracking-[-0.8px] text-[#242424]">
              “When women strengthen within, they{" "}
              <span className="relative inline-block text-[#FF5E14]">
                transform everything
                <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#FF5E14]/30 rounded-full" />
              </span>{" "}
              around them.”
            </h2>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
