"use client";

import Reveal from "@/app/components/Common/Reveal";

const TEACHINGS = [
  {
    id: 1,
    text: "Leadership comes alive in groups. Every group is a living system where each interaction influences the whole, shaping relationships, decisions, and collective outcomes.",
  },
  {
    id: 2,
    text: "As people and contexts evolve, alignment cannot be assumed — it is a continuous practice of rediscovering shared purpose and renewing commitment.",
  },
  {
    id: 3,
    text: "Resistance is not something to overcome, but valuable information that reveals tensions, unmet needs, and possibilities for growth. Equally, when marginalised voices are invited into the conversation, the system gains access to perspectives that fuel innovation, resilience, and wiser decisions.",
  },
  {
    id: 4,
    text: "At the heart of every thriving community lies authenticity. When people feel safe to show up as themselves, trust deepens, belonging grows, and leadership becomes a shared capacity rather than the responsibility of a few.",
  },
];

export default function WhatGroupsTeachUs() {
  return (
    <section className="w-full bg-[#FF5E14] text-white px-5 sm:px-8 py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Ambient glowing lighting orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full bg-white/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-black/20 blur-[120px]"
      />

      <div className="mx-auto max-w-[1360px] relative z-10">
        {/* Header with reveal animation */}
        <Reveal
          direction="up"
          duration={750}
          distance={28}
          className="flex flex-col items-center justify-center text-center mb-12 sm:mb-16 px-4"
        >
          {/* Eyebrow Chip */}
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-[1px] bg-white inline-block shadow-sm" />
            <span
              className="text-white/95 font-medium text-[13px] sm:text-[14px] leading-[18px] tracking-[0.24px] uppercase"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              WHAT GROUPS TEACH US
            </span>
          </div>

          {/* Title */}
          <h2
            className="text-white font-semibold text-3xl sm:text-4xl md:text-[52px] leading-[1.05] sm:leading-[1.12] tracking-[-0.8px] drop-shadow-sm"
            style={{
              fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
            }}
          >
            About leadership.
          </h2>
        </Reveal>

        {/* 2x2 Interactive Glassmorphic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {TEACHINGS.map((item, index) => (
            <Reveal
              key={item.id}
              direction="up"
              duration={700}
              delay={index * 110}
              distance={32}
            >
              <div className="group h-full rounded-[20px] sm:rounded-[24px] bg-white/[0.12] hover:bg-white/[0.2] backdrop-blur-md border border-white/25 hover:border-white/50 p-7 sm:p-9 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_50px_rgba(0,0,0,0.2)] hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col justify-between">
                {/* Card Top: Number badge and decorative quotation glyph */}
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <span
                    className="inline-flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-white/20 text-white text-xs sm:text-[13px] font-semibold tracking-wider transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-[#FF5E14] shadow-sm"
                    style={{ fontFamily: '"PP Mori", sans-serif' }}
                  >
                    0{item.id}
                  </span>
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white/35 transition-all duration-300 group-hover:text-white/85 group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Card Body */}
                <p
                  className="text-white text-[14.5px] sm:text-[15.5px] md:text-[16px] leading-[1.65] font-normal"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
