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
    <section className="w-full bg-[#FF5E14] text-white px-5 sm:px-8 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-[1360px]">
        {/* Header */}
        <Reveal
          direction="up"
          duration={700}
          className="flex flex-col items-center justify-center text-center mb-10 sm:mb-14 px-4"
        >
          {/* Eyebrow Chip */}
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-2 h-2 rounded-[1px] bg-white inline-block" />
            <span
              className="text-white/95 font-medium text-[12px] sm:text-[13px] leading-[18px] tracking-[0.2em] uppercase"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              WHAT GROUPS TEACH US
            </span>
          </div>

          {/* Title */}
          <h2
            className="text-white font-semibold text-3xl sm:text-4xl md:text-[52px] leading-[1.15] tracking-[-0.8px]"
            style={{
              fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
            }}
          >
            About leadership.
          </h2>
        </Reveal>

        {/* 2x2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {TEACHINGS.map((item, index) => (
            <Reveal
              key={item.id}
              direction="up"
              duration={700}
              delay={index * 90}
            >
              <div className="h-full rounded-[20px] sm:rounded-[24px] bg-white/[0.12] hover:bg-white/[0.17] border border-white/20 p-7 sm:p-9 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300">
                <p
                  className="text-white text-[15px] sm:text-[16px] md:text-[17px] leading-[1.7] font-normal"
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
