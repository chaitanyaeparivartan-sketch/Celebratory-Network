"use client";

import Image from "next/image";
import Reveal from "@/app/components/Common/Reveal";

const EXPERIENCES = [
  {
    id: 1,
    tag: "PERSONAL POWER",
    titleLine1: "Personal Power",
    titleLine2: "In Leadership",
    description:
      "An Experiential session for senior women leaders to pause, reflect and reconnect with their inner authority and authentic power.",
    bullets: [
      "Beyond roles and identities",
      "Self-awareness and self-authority",
      "Courage, voice, and leadership presence",
      "Influence that creates ripple effects",
    ],
    image: "/international/personal-power-bulb.webp",
    imageAlt: "Personal Power in Leadership",
    link: "/interventions/personal-power-in-leadership",
    reverse: false,
  },
  {
    id: 2,
    tag: "LEADING WITH SHAKTI",
    titleLine1: "Leading with Shakti",
    titleLine2: "In Complex Adaptive System",
    description:
      "An immersive workshop for leaders to explore leadership through the lens of Human Process and Complex Adaptive Systems.",
    bullets: [
      "Awareness of self and systems",
      "Navigating uncertainty with presence",
      "Group dynamics and emergence",
      "Authenticity, trust, and collective intelligence",
    ],
    image: "/international/leading-with-shakti.webp",
    imageAlt: "Leading with Shakti in Complex Adaptive System",
    link: "/interventions/self-role-system",
    reverse: true,
  },
];

export default function Experiences() {
  return (
    <section className="w-full bg-white pt-10 sm:pt-14 md:pt-16 pb-10 sm:pb-12 md:pb-14">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header (exact Home Page styling) */}
        <Reveal
          direction="up"
          duration={700}
          className="flex flex-col items-center justify-center text-center mb-12 sm:mb-16"
        >
          {/* Section Chip */}
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-[1px] bg-[#FF5E14]" />
            <span
              className="text-[#242424] font-medium text-[13px] sm:text-[14px] leading-[18px] tracking-[0.24px] uppercase"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              What we do
            </span>
          </div>

          {/* Section Title */}
          <h2
            className="text-[#242424] font-semibold text-3xl sm:text-4xl md:text-[52px] leading-[1.05] sm:leading-[1.12] tracking-[-0.8px]"
            style={{
              fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
            }}
          >
            Our International Leadership Experiences
          </h2>
        </Reveal>

        {/* Alternating Feature Rows (exact Home Page WhatWeDo structure) */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
          {EXPERIENCES.map((item) => {
            const textDirection = item.reverse ? "left" : "right";
            const imageDirection = item.reverse ? "right" : "left";

            return (
              <div
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch"
              >
                {/* Text Card */}
                <Reveal
                  direction={textDirection}
                  duration={750}
                  delay={60}
                  distance={36}
                  className={`relative w-full h-full rounded-[8px] border border-[#EAEAEA] bg-white p-5 sm:p-8 md:p-12 xl:px-[99px] xl:py-[74px] flex flex-col justify-between items-start overflow-hidden group hover:border-[#FF5E14]/40 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.07)] transition-all duration-300 ${
                    item.reverse ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-90"
                    style={{
                      background:
                        "radial-gradient(ellipse at 100% 50%, rgba(255, 218, 198, 0.65) 0%, rgba(255, 238, 228, 0.3) 38%, rgba(255, 255, 255, 0) 72%), #FFFFFF",
                    }}
                  />

                  {/* Content Block */}
                  <div className="flex flex-col items-start gap-2 sm:gap-2.5 relative z-10 w-full">
                    {/* Category Chip */}
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-[1px] bg-[#FF5E14] transition-transform duration-300 group-hover:scale-125" />
                      <span
                        className="text-[#64748B] font-semibold text-[11px] sm:text-[12px] tracking-[0.08em] uppercase"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {item.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-[#171717] font-semibold text-[22px] sm:text-3xl md:text-[36px] xl:text-[42px] leading-[1.15] sm:leading-[1.12] tracking-tight mt-1 sm:mt-2 transition-colors duration-300 group-hover:text-[#0f0f0f]"
                      style={{
                        fontFamily:
                          '"PP Mori", var(--font-geist-sans), sans-serif',
                      }}
                    >
                      <span className="block">{item.titleLine1}</span>
                      <span className="block text-[#FF5E14]">{item.titleLine2}</span>
                    </h3>

                    {/* Description */}
                    <p
                      className="text-[#525252] text-[13.5px] sm:text-[15px] xl:text-[16px] leading-[1.55] sm:leading-[1.6] max-w-[540px] mt-1.5 sm:mt-3"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item.description}
                    </p>

                    {/* Bullet Points with interactive hover micro-interaction */}
                    <ul className="space-y-2 mt-3.5 sm:mt-4 max-w-[540px]">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="group/bullet flex items-start gap-2.5 text-[13.5px] sm:text-[15px] text-[#4a4a4a] leading-[1.5] transition-all duration-200 hover:translate-x-1 hover:text-[#171717] cursor-default"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          <span className="mt-1.5 sm:mt-2 h-1.5 w-1.5 rounded-[1px] bg-[#FF5E14] shrink-0 transition-transform duration-200 group-hover/bullet:scale-125" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mobile Image (inside the card) */}
                  <div className="lg:hidden mt-5 sm:mt-8 relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[8px] overflow-hidden bg-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </Reveal>

                {/* Desktop Image Column */}
                <Reveal
                  direction={imageDirection}
                  duration={750}
                  delay={120}
                  distance={36}
                  className={`hidden lg:block relative w-full min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] xl:min-h-[460px] rounded-[8px] overflow-hidden bg-gray-100 group shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-0.5 ${
                    item.reverse ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
