"use client";

import Reveal from "@/app/components/Common/Reveal";

const INITIATIVES = [
  "Organization redesign",
  "Restructuring",
  "Strategic planning",
  "Visioning",
  "Values and principles clarification",
  "Process improvement",
  "Customer/supplier relations",
  "Global learning and development",
  "Formation of collaborative alliances",
];

export default function WhereTheyHelp() {
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

      <div className="mx-auto max-w-[960px] text-center relative z-10">
        {/* Eyebrow */}
        <Reveal direction="up" duration={750} distance={24}>
          <div className="inline-flex items-center justify-center gap-2 text-[12px] sm:text-[13px] md:text-[14px] font-medium uppercase tracking-[0.24px] text-white/95 font-inter mb-3">
            <span className="h-1.5 w-1.5 rounded-[1px] bg-[#FF5E14] shadow-sm" />
            Where they help
          </div>
          <h2 className="mx-auto mt-2 mb-8 sm:mb-12 max-w-[760px] font-ppmori text-[clamp(26px,6vw,44px)] sm:text-[clamp(32px,4.6vw,48px)] font-semibold leading-[1.15] sm:leading-[1.12] tracking-[-0.8px] text-white drop-shadow-sm">
            Across a variety of organization development initiatives.
          </h2>
        </Reveal>

        {/* Chips with Staggered Fluid Entrances */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
          {INITIATIVES.map((item, index) => (
            <Reveal
              key={item}
              direction="up"
              duration={650}
              delay={80 + index * 45}
              distance={20}
            >
              <span
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/25 px-4 sm:px-5 py-2.5 sm:py-3 text-[13px] sm:text-[14.5px] font-medium text-white transition-all duration-300 hover:scale-[1.05] hover:-translate-y-1 hover:border-white/50 hover:shadow-[0_10px_24px_rgba(0,0,0,0.2)] active:scale-95 cursor-default font-inter backdrop-blur-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E14] opacity-80 transition-transform duration-300 group-hover:scale-150 group-hover:opacity-100" />
                <span>{item}</span>
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
