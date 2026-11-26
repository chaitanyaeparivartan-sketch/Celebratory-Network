"use client";

import Reveal from "@/app/components/Common/Reveal";

export default function MapSection() {
  return (
    <section className="w-full bg-[#FF5E14] text-white px-5 sm:px-8 py-16 sm:py-20 md:py-24">
      <div className="max-w-[1140px] mx-auto">
        {/* Head */}
        <Reveal
          direction="up"
          duration={700}
          className="flex flex-col items-center justify-center text-center mb-10 sm:mb-12"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-2 h-2 rounded-[1px] bg-white inline-block" />
            <span
              className="text-white/95 font-medium text-[12px] sm:text-[13px] leading-[18px] tracking-[0.2em] uppercase"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Find us
            </span>
          </div>

          {/* Title */}
          <h2
            className="text-white font-semibold text-3xl sm:text-4xl md:text-[48px] leading-[1.12] tracking-[-0.8px]"
            style={{
              fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
            }}
          >
            Our Mumbai office.
          </h2>
        </Reveal>

        {/* Map Card */}
        <Reveal direction="up" duration={750} delay={100}>
          <div className="relative w-full rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.25)] bg-[#f4f4f4] aspect-[4/3] sm:aspect-[16/8] min-h-[420px] sm:min-h-[480px] flex flex-col justify-start">
            {/* Google Maps Embed iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.339476451486!2d72.82494849999999!3d19.0072234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfed7062e02f%3A0x895cb085e264e532!2sJolie's!5e1!3m2!1sen!2sin!4v1795696481463!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 w-full h-full border-0"
              title="Google Maps - Jolie's Birla Centurion, Worli, Mumbai"
            />

            {/* Pin Info Overlay Card */}
            <div className="relative sm:absolute left-4 top-4 sm:left-6 sm:top-6 m-3 sm:m-0 w-auto sm:w-[320px] bg-white/95 backdrop-blur-md text-[#171717] rounded-[16px] p-5 sm:p-6 shadow-[0_12px_32px_rgba(0,0,0,0.18)] z-10 pointer-events-auto border border-black/[0.06]">
              <b
                className="block text-[17px] font-bold text-[#171717] mb-1"
                style={{ fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif' }}
              >
                Jolie’s
              </b>
              <span
                className="block text-[13px] text-[#555555] leading-[1.55] mb-4"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                At Birla Centurion, Pandurang Budhkar Marg, Century Mills, Worli, Mumbai, Maharashtra 400030
              </span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Jolie%27s+Birla+Centurion+Worli+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#205A9D] text-white text-[12.5px] font-semibold hover:bg-[#1a4a82] transition-colors shadow-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Open in Maps ↗
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
