"use client";

import Image from "next/image";
import Reveal from "@/app/components/common/Reveal";

const SECTIONS_DATA = [
  {
    id: "what-we-see",
    tag: "WHAT WE SEE",
    title: "Across Organizations",
    reverse: false,
    image: "/business-od/challenges-image-1.webp",
    imageAlt: "Lighthouse on coastal breakwater representing navigation through organizational complexity",
    type: "points",
    points: [
      {
        title: "Strategy Moves Faster Than Culture",
        description:
          "New priorities emerge. People continue operating from yesterday’s assumptions.",
      },
      {
        title: "Structure Changes, Behaviour Doesn’t",
        description:
          "New reporting lines emerge. Old power structures remain.",
      },
      {
        title: "Leaders Become Bottlenecks",
        description:
          "Organizations outgrow leader-centric decision making.",
      },
      {
        title: "Collaboration Becomes Harder",
        description:
          "Functions succeed individually but struggle collectively.",
      },
    ],
  },
  {
    id: "impact-of-symptoms",
    tag: "IMPACT OF SYMPTOMS",
    title: "On The System",
    reverse: true,
    image: "/business-od/challenges-image-2.webp",
    imageAlt: "Executive boardroom circle representing interconnected systemic organizational challenges",
    type: "bullets",
    bullets: [
      "Misalignment between strategy and execution",
      "Siloed functions and weak cross-team collaboration",
      "Low productivity / inconsistent results",
      "Difficulty scaling operations or culture during growth",
      "Unclear roles, authority, and accountability",
      "Command-and-control mindsets limiting empowerment",
      "Inconsistent decision-making",
      "Limited succession readiness",
      "Merger / restructuring integration issues",
    ],
  },
];

export default function Challenges() {
  return (
    <section className="w-full bg-white pt-12 sm:pt-16 md:pt-20 pb-14 sm:pb-16 md:pb-24">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* 2 Alternating Feature Rows */}
        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
          {SECTIONS_DATA.map((item) => {
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
                  className={`relative w-full h-full rounded-[8px] border border-[#EAEAEA] bg-white p-6 sm:p-10 md:p-12 xl:px-[80px] xl:py-[64px] flex flex-col justify-between items-start overflow-hidden group hover:border-[#FF5E14]/40 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.07)] transition-all duration-300 ${
                    item.reverse ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Subtle warm peach/orange radial gradient glow matching Home WhatWeDo */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-90"
                    style={{
                      background:
                        "radial-gradient(ellipse at 100% 50%, rgba(255, 218, 198, 0.65) 0%, rgba(255, 238, 228, 0.3) 38%, rgba(255, 255, 255, 0) 72%), #FFFFFF",
                    }}
                  />

                  {/* Content Block */}
                  <div className="flex flex-col items-start relative z-10 w-full">
                    {/* Category Chip */}
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
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
                      className="text-[#171717] font-semibold text-2xl sm:text-3xl md:text-[36px] xl:text-[42px] leading-[1.12] tracking-tight transition-colors duration-300 group-hover:text-[#0f0f0f]"
                      style={{
                        fontFamily:
                          '"PP Mori", var(--font-geist-sans), sans-serif',
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Card Body - Content based on Type */}
                    {item.type === "points" && (
                      <div className="flex flex-col gap-4 sm:gap-5 mt-5 sm:mt-6 w-full">
                        {item.points.map((pt, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-[1px] bg-[#FF5E14] mt-2 shrink-0 transition-transform duration-300 group-hover:scale-125" />
                            <div className="flex flex-col">
                              <h4
                                className="text-[#171717] font-semibold text-[15px] sm:text-[16px] xl:text-[17px] leading-[1.4]"
                                style={{
                                  fontFamily:
                                    '"PP Mori", var(--font-geist-sans), sans-serif',
                                }}
                              >
                                {pt.title}
                              </h4>
                              <p
                                className="text-[#525252] text-[13px] sm:text-[14px] xl:text-[15px] leading-[1.6] mt-0.5"
                                style={{ fontFamily: "Inter, sans-serif" }}
                              >
                                {pt.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {item.type === "bullets" && (
                      <ul className="flex flex-col gap-2.5 sm:gap-3 mt-5 sm:mt-6 w-full">
                        {item.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-[1px] bg-[#FF5E14] mt-2 shrink-0 transition-transform duration-300 group-hover:scale-125" />
                            <span
                              className="text-[#404040] text-[14px] sm:text-[15px] xl:text-[16px] leading-[1.5]"
                              style={{ fontFamily: "Inter, sans-serif" }}
                            >
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Mobile Image (inside the card) */}
                  <div className="lg:hidden mt-6 sm:mt-8 relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[8px] overflow-hidden bg-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      priority={item.id === "what-we-see"}
                    />
                  </div>
                </Reveal>

                {/* Desktop Image Column */}
                <Reveal
                  direction={imageDirection}
                  duration={750}
                  delay={120}
                  distance={36}
                  className={`hidden lg:block relative w-full min-h-[360px] sm:min-h-[440px] lg:min-h-[500px] xl:min-h-[560px] rounded-[8px] overflow-hidden bg-gray-100 group shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-0.5 ${
                    item.reverse ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={item.id === "what-we-see"}
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
