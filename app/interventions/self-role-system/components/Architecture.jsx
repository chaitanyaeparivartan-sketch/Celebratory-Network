"use client";

import Reveal from "@/app/components/Common/Reveal";

const TIERS = [
  {
    num: "01",
    label: "Self Awareness",
    detail: "Decoding personal reflex, default assumptions, and high-pressure blind spots.",
  },
  {
    num: "02",
    label: "Role Dynamics",
    detail: "Navigating unspoken mandates, systemic authority, and boundary management.",
  },
  {
    num: "03",
    label: "System Patterns",
    detail: "Transforming recurring institutional loops, friction, and organizational silos.",
  },
];

export default function Architecture() {
  return (
    <section className="bg-[#205A9D] px-5 sm:px-6 py-20 sm:py-28 text-white relative overflow-hidden">
      {/* Ambient background glowing orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-36 -left-36 w-[480px] h-[480px] rounded-full bg-white/[0.12] blur-[130px] animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -right-36 w-[480px] h-[480px] rounded-full bg-black/30 blur-[130px] animate-pulse"
        style={{ animationDuration: "10s" }}
      />

      <div className="mx-auto max-w-[960px] text-center relative z-10">
        {/* Eyebrow Chip with live beacon */}
        <Reveal direction="up" duration={700} distance={24}>
          <div className="inline-flex items-center justify-center gap-2.5 font-inter text-[12px] sm:text-[13px] md:text-[14px] font-medium uppercase leading-[18px] tracking-[0.24px] text-white/95 mb-4 bg-white/10 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-sm shadow-sm transition-all duration-300 hover:bg-white/15">
            <span className="relative flex h-2 w-2 flex-none">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            The architecture of awareness
          </div>

          <h2 className="mb-5 mt-2 font-ppmori text-3xl sm:text-4xl md:text-[52px] font-semibold leading-[1.12] tracking-[-0.8px] text-white">
            Beneath the surface is where agility lives.
          </h2>

          <p className="font-inter text-[15px] sm:text-[16px] md:text-[17px] leading-[1.65] text-white/90 max-w-[760px] mx-auto">
            Traditional frameworks prioritize structure, strategies, and KPIs. True organizational
            agility, however, operates beneath the surface — driven by human behavior, deep-seated
            corporate reflexes, and structural demands. This architecture shifts leadership from blind
            reaction to conscious choice.
          </p>
        </Reveal>

        {/* Interactive 3-Tier Awareness Architecture Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mt-10 sm:mt-12 text-left">
          {TIERS.map((tier, idx) => (
            <Reveal
              key={tier.num}
              direction="up"
              delay={120 + idx * 80}
              duration={650}
              distance={20}
              className="h-full flex"
            >
              <div className="group relative w-full rounded-2xl border border-white/20 bg-white/[0.08] p-5 sm:p-6 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.16] hover:border-white/40 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.2)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-ppmori text-[24px] sm:text-[28px] font-bold text-white/40 group-hover:text-[#FF5E14] transition-colors duration-300">
                    {tier.num}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/40 group-hover:bg-[#FF5E14] group-hover:scale-125 transition-all duration-300" />
                </div>
                <h3 className="font-ppmori text-[18px] sm:text-[19px] font-semibold text-white mb-1.5 group-hover:text-white transition-colors">
                  {tier.label}
                </h3>
                <p className="font-inter text-[13px] sm:text-[13.5px] leading-[1.55] text-white/80 group-hover:text-white/95 transition-colors">
                  {tier.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Glassmorphism Quote Card with glowing hover */}
        <Reveal direction="up" delay={320} duration={750} distance={24}>
          <blockquote className="group mx-auto mt-10 rounded-2xl border border-white/20 bg-white/10 px-7 sm:px-9 py-6 sm:py-7 font-ppmori text-[16px] sm:text-[18px] md:text-[19px] font-medium leading-[1.5] text-white shadow-sm backdrop-blur-md transition-all duration-500 hover:border-white/40 hover:bg-white/[0.15] hover:shadow-[0_16px_40px_rgba(0,0,0,0.22)] hover:-translate-y-0.5">
            <span className="relative flex h-2 w-2 inline-flex mr-2.5 -translate-y-0.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5E14] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5E14]" />
            </span>
            “Self-awareness is the first intervention. Understanding your own reflex allows you to
            choose response over reaction.”
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
