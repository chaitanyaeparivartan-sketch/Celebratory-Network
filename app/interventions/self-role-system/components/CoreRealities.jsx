"use client";

import Reveal from "@/app/components/Common/Reveal";

const cards = [
  {
    num: "01",
    title: "The Self",
    sub: "Dynamic and reflex",
    image: "/interventions/the-self.jpg",
    alt: "Young executive reflecting in an office glass window",
    pos: "object-[center_35%]",
    items: [
      "Examine deep-set personal behavioral tendencies under high-stakes ambiguity.",
      "Discover instinctive baselines: stepping forward, observing, controlling, or rescuing.",
      "Deconstruct responses to power, structural boundaries, and authority.",
    ],
  },
  {
    num: "02",
    title: "The Role",
    sub: "The invisible contract",
    image: "/interventions/the-role.jpg",
    alt: "Professional team collaborating in modern glass conference room",
    pos: "object-[center_45%]",
    items: [
      <>
        <b className="text-white md:text-[#1a1a1a] transition-colors duration-500 md:group-hover:text-white md:group-focus-within:text-white">
          “Organizations do not behave. Roles do.”
        </b>{" "}
        Mandates carry systemic history and weight.
      </>,
      "Manage the delicate boundary between formal structures and informal rules.",
      <>
        Analyze <i>Role Biography</i> to understand inherited behavioral patterns.
      </>,
    ],
  },
  {
    num: "03",
    title: "The System",
    sub: "Patterns vs. personalities",
    image: "/interventions/the-system.jpg",
    alt: "Backlit executive boardroom meeting through glass partition",
    pos: "object-center",
    items: [
      "Shift lenses from fixing individual personalities to transforming systemic patterns.",
      "Uncover repeating institutional loops to neutralize blame and polarization.",
      "Optimize the critical links between authority, boundaries, and tasks.",
    ],
  },
];

export default function CoreRealities({ images }) {
  const imgFor = {
    "01": images?.self || "/interventions/the-self.jpg",
    "02": images?.role || "/interventions/the-role.jpg",
    "03": images?.system || "/interventions/the-system.jpg",
  };

  return (
    <section className="bg-[#F4F4F4] text-[#1a1a1a] px-5 sm:px-6 py-20 sm:py-28 relative overflow-hidden">
      {/* Ambient background light accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full bg-[#FF5E14]/[0.07] blur-[140px] animate-pulse"
        style={{ animationDuration: "9s" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 w-[480px] h-[480px] rounded-full bg-[#205A9D]/[0.06] blur-[140px] animate-pulse"
        style={{ animationDuration: "11s" }}
      />

      <div className="mx-auto max-w-[1340px] relative z-10">
        {/* heading */}
        <Reveal
          direction="up"
          duration={700}
          className="mx-auto mb-12 sm:mb-16 max-w-[760px] text-center px-4"
        >
          <div className="inline-flex items-center gap-2 font-inter text-[12px] sm:text-[13px] md:text-[14px] font-medium uppercase leading-[18px] tracking-[0.24px] text-[#242424] bg-white px-4 py-1.5 rounded-full border border-black/[0.06] shadow-sm mb-2 sm:mb-3">
            <span className="relative flex h-2 w-2 flex-none">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5E14] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5E14]" />
            </span>
            Three core realities
          </div>
          <h2 className="mt-2 font-ppmori text-3xl sm:text-4xl md:text-[52px] font-semibold leading-[1.12] tracking-[-0.8px] text-[#1a1a1a]">
            Self. Role. System.
          </h2>
          <p className="mt-3 font-inter text-[15px] sm:text-[16px] md:text-[17px] leading-[1.65] text-[#555555]">
            A multidimensional framework mapping how individuals, mandates, and operational
            conditions intersect to build high-performance cultures.
          </p>
        </Reveal>

        {/* cards */}
        <div className="grid gap-5 md:gap-6 lg:grid-cols-3">
          {cards.map((c, index) => (
            <Reveal
              key={c.num}
              direction="up"
              delay={index * 110}
              duration={650}
              distance={24}
              className="h-full flex"
            >
              <article
                tabIndex={0}
                className="group relative isolate flex flex-col justify-between overflow-hidden rounded-[18px] sm:rounded-2xl bg-[#1e1e1e] md:bg-[linear-gradient(115deg,#fff_60%,#FFF1EA_100%)] p-7 sm:p-8 md:p-9 border border-black/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.04)] outline-none transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_54px_rgba(0,0,0,0.14)] hover:border-[#FF5E14]/40 focus-visible:ring-2 focus-visible:ring-[#FF5E14] w-full cursor-pointer"
              >
                {/* background image, shown by default on mobile, revealed on hover on desktop */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imgFor[c.num] || c.image}
                  alt={c.alt}
                  className={`absolute inset-0 -z-20 h-full w-full object-cover opacity-100 md:opacity-0 scale-100 md:scale-[1.06] transition-all duration-700 ease-out md:group-hover:scale-100 md:group-hover:opacity-100 md:group-focus-within:scale-100 md:group-focus-within:opacity-100 ${c.pos}`}
                />
                {/* dark overlay so the text stays readable */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0a0a]/65 via-[#0a0a0a]/75 to-[#0a0a0a]/90 opacity-100 md:opacity-0 transition-opacity duration-500 md:group-hover:opacity-100 md:group-focus-within:opacity-100" />

                <div>
                  <span className="block font-ppmori text-[72px] sm:text-[84px] md:text-[96px] font-bold leading-none tracking-[-0.03em] text-white md:text-[#FF5E14] transition-all duration-500 md:group-hover:text-white md:group-focus-within:text-white group-hover:translate-x-1 will-change-transform">
                    {c.num}
                  </span>

                  <h3 className="mt-4 sm:mt-5 font-ppmori text-[22px] sm:text-2xl font-semibold text-white md:text-[#1a1a1a] transition-colors duration-500 md:group-hover:text-white md:group-focus-within:text-white">
                    {c.title}
                  </h3>

                  <div className="mb-4 sm:mb-5 mt-1.5 font-inter text-[11px] sm:text-[12px] font-semibold uppercase tracking-[.14em] text-[#FFA57B] md:text-[#FF5E14] transition-all duration-500 md:group-hover:text-[#FFA57B] md:group-focus-within:text-[#FFA57B] group-hover:translate-x-0.5">
                    {c.sub}
                  </div>

                  <ul className="grid gap-3 sm:gap-3.5">
                    {c.items.map((item, i) => (
                      <li
                        key={i}
                        className="relative pl-4 font-inter text-[13.5px] sm:text-sm leading-[1.65] text-white/90 md:text-[#444444] transition-colors duration-500 before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-[1px] before:bg-[#FF5E14] before:content-[''] before:transition-transform before:duration-300 group-hover:before:scale-125 md:group-hover:text-white/90 md:group-focus-within:text-white/90"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
