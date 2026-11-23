"use client";

import teamHuddle from "./assets/team-huddle.jpg";

export default function Hero() {
  const imgSrc = teamHuddle?.src || teamHuddle || "/diversity-inclusion/team-huddle.png";

  return (
    <section className="relative flex min-h-screen flex-col bg-white text-black md:flex-row md:items-center overflow-hidden">
      {/* Text: left 50% */}
      <div className="px-[6vw] pt-28 pb-6 md:w-1/2 md:py-0 md:pl-[7vw] md:pr-[3vw]">
        <div
          className="mb-5 flex items-center gap-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.28em] text-[#171717]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <span className="h-3 w-3 flex-none bg-[#FF5E14]" aria-hidden="true" />
          Our DEIB Practice
        </div>

        <h1
          className="mb-6 text-[clamp(2.2rem,4.4vw,4rem)] font-bold leading-[1.05] tracking-tight text-[#171717]"
          style={{ fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif' }}
        >
          Diversity, Equity, Inclusion &amp; Belonging
        </h1>

        <p
          className="max-w-[30em] text-[clamp(1rem,1.25vw,1.2rem)] font-normal text-[#525252] leading-relaxed"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Building workplaces where every voice is heard, every difference is
          valued and everyone can do their best work.
        </p>
      </div>

      {/* Image: right 50% */}
      <div className="flex h-[50vh] w-full items-center justify-center px-[4vw] py-8 md:h-screen md:w-1/2 md:py-[9vh]">
        <img
          src={imgSrc}
          alt="Colleagues with hands joined in a circle"
          className="h-full w-full object-contain max-h-[580px] drop-shadow-md"
        />
      </div>
    </section>
  );
}
