"use client";

import teamHuddle from "./assets/team-huddle.jpg";

export default function Hero() {
  const imgSrc = teamHuddle?.src || teamHuddle || "/diversity-inclusion/team-huddle.png";

  return (
    <section
      className="relative flex min-h-screen flex-col text-black md:flex-row md:items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(270deg, rgba(255, 94, 20, 0.24) 0%, rgba(255, 138, 77, 0.14) 34%, rgba(255, 238, 228, 0.05) 68%, #FFFFFF 100%)",
      }}
    >
      {/* Ambient warm orange glow concentrated behind the team circle */}
      <div
        className="pointer-events-none absolute right-[-5%] top-1/2 -translate-y-1/2 w-[55vw] h-[55vw] max-w-[760px] max-h-[760px] rounded-full blur-3xl opacity-75"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 94, 20, 0.35) 0%, rgba(255, 155, 100, 0.18) 45%, transparent 72%)",
        }}
        aria-hidden="true"
      />

      {/* Text: left 50% */}
      <div className="relative z-10 px-[6vw] pt-28 pb-6 md:w-1/2 md:py-0 md:pl-[7vw] md:pr-[3vw]">
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

      {/* Image: right 50% with realistic directional & ground shadows */}
      <div className="relative z-10 flex h-[50vh] w-full items-center justify-center px-[4vw] py-8 md:h-screen md:w-1/2 md:py-[9vh]">
        <div className="relative flex items-center justify-center w-full max-h-[580px] aspect-square">
          {/* Ambient ground contact shadow directly under the standing circle */}
          <div
            className="pointer-events-none absolute -bottom-2 w-[84%] aspect-[1/0.85] rounded-full blur-[28px] opacity-75 select-none"
            style={{
              background:
                "radial-gradient(ellipse at 52% 56%, rgba(35, 15, 5, 0.45) 0%, rgba(60, 25, 10, 0.28) 36%, rgba(100, 45, 18, 0.12) 60%, transparent 75%)",
              transform: "translateY(24px) rotate(-2deg)",
            }}
            aria-hidden="true"
          />

          {/* Cut-out image with multi-layered directional shadows (top-left light source casting downwards-right) */}
          <img
            src={imgSrc}
            alt="Colleagues with hands joined in a circle"
            className="relative z-10 h-full w-full object-contain"
            style={{
              filter:
                "drop-shadow(3px 8px 12px rgba(30, 15, 5, 0.32)) drop-shadow(8px 22px 32px rgba(45, 20, 10, 0.22)) drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.15))",
            }}
          />
        </div>
      </div>
    </section>
  );
}
