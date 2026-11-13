"use client";

import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    id: 1,
    tag: "ORGANIZATION",
    titleLine1: "Organization",
    titleLine2: "Development",
    description:
      "We design, facilitate and implement solutions to achieve the desired Organizational Culture.",
    image: "/WhatWeDo/row1.jpg",
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
    image: "/WhatWeDo/row2.jpg",
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
    image: "/WhatWeDo/row3.jpg",
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
    image: "/WhatWeDo/row4.jpg",
    imageAlt: "Diverse team connecting and celebrating together",
    reverse: true,
  },
];

export default function WhatWeDo() {
  return (
    <section className="w-full bg-white pt-6 sm:pt-8 md:pt-10 pb-14 sm:pb-16 md:pb-20">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12 sm:mb-16">
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
        </div>

        {/* 4 Alternating Feature Rows */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
          {SERVICES.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch"
            >
              {/* Text Card */}
              <div
                className={`relative w-full rounded-[8px] border border-[#EAEAEA] bg-white p-6 sm:p-10 md:p-12 xl:px-[99px] xl:py-[74px] flex flex-col justify-between items-start overflow-hidden group hover:border-[#D4D4D4] transition-colors ${
                  item.reverse ? "lg:order-2" : "lg:order-1"
                }`}
                style={{
                  background:
                    "radial-gradient(ellipse at 100% 50%, rgba(255, 218, 198, 0.65) 0%, rgba(255, 238, 228, 0.3) 38%, rgba(255, 255, 255, 0) 72%), #FFFFFF",
                }}
              >
                {/* Content Block */}
                <div className="flex flex-col items-start gap-2.5 relative z-10 w-full">
                  {/* Category Chip */}
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-[1px] bg-[#FF5E14]" />
                    <span
                      className="text-[#64748B] font-semibold text-[11px] sm:text-[12px] tracking-[0.08em] uppercase"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[#171717] font-semibold text-2xl sm:text-3xl md:text-[36px] xl:text-[42px] leading-[1.12] tracking-tight mt-1 sm:mt-2"
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
                    className="text-[#525252] text-xs sm:text-sm xl:text-[14.5px] leading-relaxed max-w-[540px] mt-2 sm:mt-3"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 sm:mt-10 flex items-center gap-3 sm:gap-3.5 relative z-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-[8px] bg-[#FF5E14] text-white font-['PP_Mori',sans-serif] text-xs sm:text-sm font-semibold shadow-sm hover:bg-[#e0500d] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    Book a call
                  </Link>
                  <Link
                    href="/about-us"
                    className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-[8px] bg-white border border-[#EAEAEA] text-[#171717] font-['PP_Mori',sans-serif] text-xs sm:text-sm font-semibold shadow-sm hover:bg-gray-50 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    Know More
                  </Link>
                </div>
              </div>

              {/* Image Column */}
              <div
                className={`relative w-full min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] xl:min-h-[460px] rounded-[8px] overflow-hidden bg-gray-100 group shadow-[0_1px_3px_rgba(0,0,0,0.04)] ${
                  item.reverse ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                  priority={item.id <= 2}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

