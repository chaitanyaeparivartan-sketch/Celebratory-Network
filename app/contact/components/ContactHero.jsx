"use client";

import Reveal from "@/app/components/Common/Reveal";

export default function ContactHero() {
  return (
    <section className="pt-32 sm:pt-36 md:pt-40 pb-4 sm:pb-6 px-4 text-center">
      <Reveal direction="up" duration={700} className="max-w-[800px] mx-auto">
        {/* Eyebrow Chip */}
        <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
          <span className="w-1.5 h-1.5 rounded-[1px] bg-[#FF5E14]" />
          <span
            className="text-[#242424] font-medium text-[14px] leading-[18px] tracking-[0.24px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Contact us
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-[#171717] font-semibold text-4xl sm:text-5xl md:text-[64px] leading-[1.08] tracking-[-1.2px]"
          style={{ fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif' }}
        >
          We’d love to <span className="text-[#FF5E14]">hear from you.</span>
        </h1>
      </Reveal>
    </section>
  );
}
