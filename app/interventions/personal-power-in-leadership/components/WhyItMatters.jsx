"use client";

import Reveal from "@/app/components/Common/Reveal";

const BARRIERS = [
  "Self-doubt",
  "Limited visibility",
  "Internalised expectations",
  "Lack of self-authority",
];

export default function WhyItMatters() {
  return (
    <section className="bg-[#205A9D] px-4 sm:px-6 py-16 sm:py-20 md:py-24 text-white relative overflow-hidden">
      {/* Ambient glowing lighting orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-white/10 blur-[130px] animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 w-[420px] h-[420px] rounded-full bg-black/25 blur-[130px] animate-pulse"
        style={{ animationDuration: "10s" }}
      />

      <div className="mx-auto max-w-[820px] text-center relative z-10">
        <Reveal direction="up" duration={750} distance={24}>
          <div className="inline-flex items-center justify-center gap-2 text-[12px] sm:text-[13px] md:text-[14px] font-medium uppercase tracking-[0.24px] text-white/95 font-inter mb-3">
            <span className="h-1.5 w-1.5 rounded-[1px] bg-[#FF5E14] shadow-sm" />
            Why this work matters
          </div>

          <h2 className="mt-2 mb-4 font-ppmori text-[clamp(28px,5vw,48px)] font-semibold leading-[1.12] tracking-[-0.8px] text-white drop-shadow-sm">
            Rarely about capability.
          </h2>

          <p className="mb-4 font-ppmori text-[18px] sm:text-[22px] font-semibold text-white/95 leading-snug">
            Leadership challenges for women are rarely about capability.
          </p>

          <p className="text-[15px] sm:text-[17px] leading-[1.65] text-white/85 font-inter max-w-[680px] mx-auto">
            Personal Power in Leadership addresses the invisible barriers so women can lead
            authentically and create impact that lasts.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 text-left">
          {BARRIERS.map((b, idx) => (
            <Reveal
              key={b}
              direction="up"
              duration={650}
              delay={100 + idx * 60}
              distance={20}
            >
              <div
                className="group flex items-center gap-3.5 rounded-2xl border border-white/20 bg-white/10 hover:bg-white/20 hover:border-white/50 px-6 py-5 text-[15px] sm:text-[16px] font-medium leading-[1.5] text-white backdrop-blur-[6px] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.22)] cursor-default"
              >
                <span className="relative flex h-2 w-2 flex-none">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5E14] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5E14]" />
                </span>
                <span className="group-hover:translate-x-0.5 transition-transform duration-300">{b}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
