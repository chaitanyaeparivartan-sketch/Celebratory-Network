"use client";

import Image from "next/image";
import Reveal from "@/app/components/Common/Reveal";

const SERVICES = [
  {
    id: 1,
    tag: "ORGANIZATION",
    titleLine1: "Organization",
    titleLine2: "Development",
    description:
      "We design, facilitate and implement solutions to achieve the desired Organizational Culture.",
    image: "/home/whatwedo-image-1.webp",
    imageAlt: "Executive leading strategic organizational agenda",
    reverse: false,
  },
  {
    id: 2,
    tag: "FAMILY BUSINESS",
    titleLine1: "Family Business",
    titleLine2: "Consulting",
    description:
      "We work at the intersection of Family, Business and Organization Development, helping family managed businesses strengthen relationships, professionalize leadership and prepare for sustainable growth across generations.",
    image: "/home/whatwedo-image-2.webp",
    imageAlt: "Family business partners collaborating at desk",
    reverse: true,
  },
  {
    id: 3,
    tag: "TEAM ENGAGEMENT",
    titleLine1: "Large Group",
    titleLine2: "Interventions",
    description:
      "Large Group Interventions bring people across the organization together to surface diverse perspectives, create shared understanding of complex organizational realities.",
    image: "/home/whatwedo-image-3.webp",
    imageAlt: "Cross-functional team collaborating on blueprint diagram",
    reverse: false,
  },
  {
    id: 4,
    tag: "WORKPLACE CULTURE",
    titleLine1: "Happy Workplace",
    titleLine2: "Cultures",
    description:
      "HWC works towards understanding the person, the existing organizational culture and its impact on individuals and the business.",
    image: "/home/whatwedo-image-4.webp",
    imageAlt: "Diverse team connecting and celebrating together",
    reverse: true,
  },
];

export default function WhatWeDo() {
  return (
    <section className="w-full bg-white pt-6 sm:pt-8 md:pt-10 pb-14 sm:pb-16 md:pb-20">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <Reveal direction="up" duration={700} className="flex flex-col items-center justify-center text-center mb-12 sm:mb-16">
          {/* Section Chip */}
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-[1px] bg-[#FF5E14]" />
            <span
              className="text-[#242424] font-medium text-[14px] leading-[18px] tracking-[0.24px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              What we do
            </span>
          </div>

          {/* Section Title */}
          <h2
            className="text-[#242424] font-semibold text-3xl sm:text-4xl md:text-[52px] leading-[48px] tracking-[-0.8px]"
            style={{
              fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
            }}
          >
            What we do
          </h2>
        </Reveal>

        {/* 4 Alternating Feature Rows */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
          {SERVICES.map((item) => {
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
                  className={`relative w-full h-full rounded-[8px] border border-[#EAEAEA] bg-white p-6 sm:p-10 md:p-12 xl:px-[99px] xl:py-[74px] flex flex-col justify-between items-start overflow-hidden group hover:border-[#FF5E14]/40 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.07)] transition-all duration-300 ${
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
                  <div className="flex flex-col items-start gap-2.5 relative z-10 w-full">
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
                      className="text-[#171717] font-semibold text-2xl sm:text-3xl md:text-[36px] xl:text-[42px] leading-[1.12] tracking-tight mt-1 sm:mt-2 transition-colors duration-300 group-hover:text-[#0f0f0f]"
                      style={{
                        fontFamily:
                          '"PP Mori", var(--font-geist-sans), sans-serif',
                      }}
                    >
                      <span className="block">{item.titleLine1}</span>
                      <span className="block">{item.titleLine2}</span>
                    </h3>

                    {/* Description */}
                    <p
                      className="text-[#525252] text-[14px] sm:text-[15px] xl:text-[17px] leading-[1.6] max-w-[540px] mt-2 sm:mt-3"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Mobile Image (inside the card) */}
                  <div className="lg:hidden mt-6 sm:mt-8 relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[8px] overflow-hidden bg-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      priority={item.id <= 2}
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
                    priority={item.id <= 2}
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

