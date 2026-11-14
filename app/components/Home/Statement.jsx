"use client";

import Image from "next/image";
import Reveal from "@/app/components/Common/Reveal";

export default function Statement() {
  return (
    <section className="relative w-full bg-[#FF5E14] overflow-hidden py-14 sm:py-16 md:py-20 lg:py-24">
      {/* Subtle background glow effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(255, 255, 255, 0.18) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Statement / Quote Block */}
        <div className="w-full max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16 px-4">
          {/* Photo Card with gentle entrance and hover lift */}
          <Reveal direction="scale" duration={800} className="shrink-0">
            <div className="relative w-[230px] h-[270px] sm:w-[260px] sm:h-[310px] md:w-[280px] md:h-[330px] rounded-[8px] overflow-hidden bg-[#BD3B00] shadow-[0_12px_32px_rgba(0,0,0,0.18)] group transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/Home/Statement/payal-gupta-card.jpg"
                alt="Payal Gupta - CEO, Director Celebratory Network"
                fill
                sizes="(max-width: 768px) 260px, 300px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
            </div>
          </Reveal>

          {/* Quote & Author Details */}
          <Reveal direction="up" duration={800} delay={120} className="flex flex-col items-start text-left max-w-[620px]">
            <blockquote
              className="text-white font-semibold text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] xl:text-[40px] leading-[1.18] tracking-tight"
              style={{
                fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
              }}
            >
              &ldquo;Self as an instrument of
              <br className="hidden sm:inline" /> change is the key to
              facilitate
              <br className="hidden sm:inline" /> any change process&rdquo;.
            </blockquote>

            {/* Author Name */}
            <h3
              className="mt-6 sm:mt-8 text-white font-bold text-sm sm:text-base tracking-[0.06em] uppercase"
              style={{
                fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
              }}
            >
              PAYAL GUPTA
            </h3>

            {/* Author Title & Company with CN Badge */}
            <div className="mt-2 flex items-center gap-2">
              <div className="relative w-[18px] h-[18px] shrink-0 transition-transform duration-300 hover:rotate-12">
                <Image
                  src="/Home/Statement/cn-badge.png"
                  alt="Celebratory Network"
                  fill
                  sizes="20px"
                  className="object-contain"
                />
              </div>
              <span
                className="text-white/90 font-medium text-[11px] sm:text-[12px] tracking-wide uppercase"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                CEO, DIRECTOR &ndash; CELEBRATORY NETWORK
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
