"use client";

import Image from "next/image";
import Reveal from "@/app/components/Common/Reveal";

const FOCUS_ITEMS = [
  {
    num: "01",
    title: "Human Centered",
    desc: "Leadership begins with self-awareness and inner alignment.",
    img: "/international/focus/focus-1.jpg",
    alt: "Human centered leadership and self-awareness",
    pos: "object-center",
  },
  {
    num: "02",
    title: "Human Process",
    desc: "Real learning happens through experience, not instruction.",
    img: "/international/focus/focus-2.jpg",
    alt: "Human process and experiential learning",
    pos: "object-center",
  },
  {
    num: "03",
    title: "Complex Adaptive Systems",
    desc: "Groups are living systems that continuously evolve and reorganize.",
    img: "/international/focus/focus-3.jpg",
    alt: "Complex adaptive systems in modern organization",
    pos: "object-center",
  },
  {
    num: "04",
    title: "Applied Behavioural Science",
    desc: "Evidence-informed approaches that create insight and enable lasting change.",
    img: "/international/focus/focus-4.jpg",
    alt: "Applied behavioural science and collaborative insight",
    pos: "object-center",
  },
];

export default function Focus() {
  return (
    <section className="bg-white text-[#1a1a1a] px-5 sm:px-8 py-10 sm:py-14 md:py-16">
      <div className="mx-auto max-w-[1360px]">
        {/* Section Heading */}
        <Reveal
          direction="up"
          duration={700}
          className="flex flex-col items-center justify-center text-center mb-8 sm:mb-10 px-6"
        >
          {/* Section Chip */}
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-[1px] bg-[#FF5E14]" />
            <span
              className="text-[#242424] font-medium text-[14px] leading-[18px] tracking-[0.24px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Our focus
            </span>
          </div>

          {/* Section Title */}
          <h2
            className="text-[#242424] font-semibold text-3xl sm:text-4xl md:text-[52px] leading-[1.15] tracking-[-0.8px]"
            style={{
              fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
            }}
          >
            What shapes our work.
          </h2>
        </Reveal>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {FOCUS_ITEMS.map((item, index) => (
            <Reveal
              key={item.num}
              direction="up"
              duration={700}
              delay={index * 100}
            >
              <article
                tabIndex={0}
                className="group relative isolate overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#ffffff_60%,#FFF3ED_100%)] p-7 sm:p-8 min-h-[340px] flex flex-col justify-between border border-black/[0.04] shadow-[0_8px_30px_rgba(0,0,0,0.03)] outline-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] focus-visible:ring-2 focus-visible:ring-[#205A9D]"
              >
                {/* Background image on hover */}
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={`absolute inset-0 -z-20 h-full w-full scale-[1.08] object-cover opacity-0 transition duration-[800ms] ease-out group-hover:scale-100 group-hover:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100 ${item.pos}`}
                />

                {/* Dark gradient overlay for text readability on hover */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a1428]/50 via-[#0a1428]/75 to-[#0a1428]/92 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100" />

                {/* Top: Big Orange Number & Title */}
                <div>
                  <span className="block font-['PP_Mori',sans-serif] text-[52px] sm:text-[60px] font-bold leading-none tracking-tight text-[#FF5E14] transition-colors duration-400 group-hover:text-white group-focus-within:text-white">
                    {item.num}
                  </span>

                  <h3 className="mt-5 font-['PP_Mori',sans-serif] text-[20px] sm:text-[22px] font-semibold text-[#171717] transition-colors duration-400 group-hover:text-white group-focus-within:text-white leading-[1.25]">
                    {item.title}
                  </h3>
                </div>

                {/* Bottom: Description */}
                <p className="mt-4 font-['Inter',sans-serif] text-[14px] sm:text-[14.5px] leading-[1.6] text-[#666666] transition-colors duration-400 group-hover:text-white/95 group-focus-within:text-white/95">
                  {item.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
