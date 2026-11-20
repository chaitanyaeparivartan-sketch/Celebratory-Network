"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/app/components/Common/Reveal";

export default function BusinessODHero({ className = "" }) {
  return (
    <section
      className={`relative w-full overflow-hidden bg-[#e6f1f8] min-h-[640px] sm:min-h-[700px] md:min-h-[760px] lg:min-h-[820px] flex items-center ${className}`}
    >
      {/* Background Image - exact uploaded JPG, unoptimized */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/BusinessOD/hero-building.jpg"
          alt="Toward Organization Development"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-right-bottom"
        />
        {/* Soft atmospheric gradient wash ensuring maximum readability on left */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent md:from-white/85 md:via-white/50 md:to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="max-w-[680px] xl:max-w-[740px] flex flex-col items-start">
          {/* Eyebrow / Tag */}
          <Reveal direction="up" duration={650} delay={60}>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-[1px] bg-[#FF5E14] shrink-0" />
              <span
                className="text-[#4b5563] font-semibold text-[11px] sm:text-[12px] md:text-[13px] tracking-[0.2em] uppercase select-none"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                OUR PERSPECTIVE
              </span>
            </div>
          </Reveal>

          {/* Main Title */}
          <Reveal direction="up" duration={700} delay={120}>
            <h1
              className="text-[#141414] font-semibold text-3xl sm:text-4xl md:text-[44px] lg:text-[50px] xl:text-[56px] leading-[1.1] tracking-tight uppercase"
              style={{
                fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
              }}
            >
              Toward Organization Development
            </h1>
          </Reveal>

          {/* Narrative Body Copy */}
          <Reveal direction="up" duration={750} delay={180}>
            <div
              className="flex flex-col gap-3.5 sm:gap-4 mt-5 sm:mt-6 text-[#2b2b2b] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.6]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <p>
                Many transformation efforts focus on structures, processes and governance.{" "}
                <span className="font-semibold text-[#141414]">
                  These are necessary. But they are not sufficient.
                </span>
              </p>

              <p>
                <span className="font-semibold text-[#141414]">Organizations are living systems.</span>{" "}
                Formal structures operate alongside informal networks, official priorities coexist with unspoken realities.{" "}
                <span className="font-semibold text-[#141414]">
                  Success depends on both.
                </span>
              </p>
            </div>
          </Reveal>

          {/* Work Focus Dimensions */}
          <Reveal direction="up" duration={750} delay={240}>
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#141414]/15 flex flex-col gap-3 w-full">
              <p
                className="text-[#141414] font-semibold text-[14px] sm:text-[15px] md:text-[16px] leading-[1.4]"
                style={{
                  fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
                }}
              >
                Our work focuses on helping organizations understand and work with:
              </p>

              <div
                className="flex flex-col gap-2 sm:gap-2.5 text-[13px] sm:text-[14px] md:text-[15px] text-[#242424] font-medium"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-1">
                  <span>Visible systems</span>
                  <span className="text-[#FF5E14] font-bold select-none">|</span>
                  <span>Culture patterns</span>
                  <span className="text-[#FF5E14] font-bold select-none">|</span>
                  <span>Invisible dynamics</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-1">
                  <span>Organisational relationships</span>
                  <span className="text-[#FF5E14] font-bold select-none">|</span>
                  <span>Leadership behaviour</span>
                  <span className="text-[#FF5E14] font-bold select-none">|</span>
                  <span>Ways of Working</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Actions */}
          <Reveal direction="up" duration={750} delay={300}>
            <div className="mt-8 sm:mt-10 flex items-center gap-3 sm:gap-3.5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-[8px] bg-[#FF5E14] text-white font-['PP_Mori',sans-serif] text-sm font-semibold shadow-sm hover:bg-[#e0500d] hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(255,94,20,0.35)] active:scale-[0.98] transition-all cursor-pointer"
              >
                Book a call
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-[8px] bg-white/90 backdrop-blur-sm border border-[#EAEAEA] text-[#171717] font-['PP_Mori',sans-serif] text-sm font-semibold shadow-sm hover:bg-white hover:border-gray-300 hover:-translate-y-0.5 hover:shadow-sm active:scale-[0.98] transition-all cursor-pointer"
              >
                Know More
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
