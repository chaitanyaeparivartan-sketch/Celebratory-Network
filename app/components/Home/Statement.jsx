"use client";

import Image from "next/image";

const CLIENT_LOGOS = [
  {
    name: "LOQO",
    src: "/Statement/logo-loqo.png",
    width: 260,
    height: 84,
  },
  {
    name: "IPSUM",
    src: "/Statement/logo-ipsum.png",
    width: 240,
    height: 84,
  },
  {
    name: "ULTRA CLEAR",
    src: "/Statement/logo-ultra-clear.png",
    width: 172,
    height: 155,
  },
  {
    name: "ULTRA PRESTIGIOUS WINNER",
    src: "/Statement/logo-ultra-prestigious.png",
    width: 220,
    height: 124,
  },
  {
    name: "STRIPES",
    src: "/Statement/logo-stripes.png",
    width: 200,
    height: 104,
  },
  {
    name: "Logoipsum",
    src: "/Statement/logo-logoipsum.png",
    width: 230,
    height: 140,
  },
];

// Repeat 3 times for a seamless 33.333% infinite loop
const MARQUEE_ITEMS = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

export default function Statement() {
  return (
    <section className="relative w-full bg-[#FF5E14] overflow-hidden py-14 sm:py-16 md:py-20">
      {/* Marquee Keyframes */}
      <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333333%, 0, 0);
          }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marqueeScroll 28s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Top Headline */}
        <h2
          className="text-white text-center font-medium sm:font-semibold text-xl sm:text-2xl md:text-[28px] lg:text-[32px] leading-snug tracking-tight max-w-[800px] mx-auto mb-10 sm:mb-14"
          style={{
            fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
          }}
        >
          Building stronger workplace cultures, trusted
          <br className="hidden sm:inline" /> by organizations and leaders.
        </h2>
      </div>

      {/* Infinite Auto-Scrolling Logos Marquee (Full Bleed) */}
      <div className="relative w-full overflow-hidden py-4 sm:py-6">
        {/* Left & Right Soft Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 md:w-44 bg-gradient-to-r from-[#FF5E14] via-[#FF5E14]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 md:w-44 bg-gradient-to-l from-[#FF5E14] via-[#FF5E14]/80 to-transparent z-10 pointer-events-none" />

        {/* Moving Track */}
        <div className="marquee-track flex items-center gap-12 sm:gap-16 md:gap-20 lg:gap-24">
          {MARQUEE_ITEMS.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex items-center justify-center shrink-0 h-14 sm:h-16 md:h-20 lg:h-24 px-2 opacity-95 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="object-contain max-h-12 sm:max-h-16 md:max-h-18 lg:max-h-[68px] w-auto drop-shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Statement / Quote Block */}
        <div className="mt-14 sm:mt-18 lg:mt-22 w-full max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16 px-4">
          {/* Photo Card */}
          <div className="relative w-[230px] h-[270px] sm:w-[260px] sm:h-[310px] md:w-[280px] md:h-[330px] rounded-[8px] overflow-hidden bg-[#BD3B00] shrink-0 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
            <Image
              src="/Statement/payal-gupta-card.jpg"
              alt="Payal Gupta - CEO, Director Celebratory Network"
              fill
              sizes="(max-width: 768px) 260px, 300px"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Quote & Author Details */}
          <div className="flex flex-col items-start text-left max-w-[620px]">
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
              <div className="relative w-[18px] h-[18px] shrink-0">
                <Image
                  src="/Statement/cn-badge.png"
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
          </div>
        </div>
      </div>
    </section>
  );
}
