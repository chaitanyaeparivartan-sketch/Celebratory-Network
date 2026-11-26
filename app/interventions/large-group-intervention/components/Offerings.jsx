"use client";

const OFFERINGS = [
  {
    num: "01",
    title: "World Cafe",
    desc: "A simple, effective way to engage medium to large groups in focused discussion. Shared conversations surface the group’s collective intelligence and lead to creative solutions for complex topics.",
    img: "/interventions/world-cafe.jpg",
    pos: "object-center",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 stroke-[#FF5E14] group-hover:stroke-white transition-colors duration-400 fill-none stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Appreciative Inquiry Summit",
    desc: "Brings the whole system into one room to explore what works, from the self and history to the future. Runs about 2 days with 50 to 1,000 people, shaping a new culture or strategic goals.",
    img: "/interventions/ai-summit.jpg",
    pos: "object-center",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 stroke-[#FF5E14] group-hover:stroke-white transition-colors duration-400 fill-none stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 9h8M8 13h8M8 17h5" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Future Search Conference",
    desc: "A 2.5-day conference designed in 1982 by Marvin Weisbord and Sandra Janoff. Up to 70 diverse people explore their shared past and present, then build a common vision.",
    img: "/interventions/future-search.jpg",
    pos: "object-center",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 stroke-[#FF5E14] group-hover:stroke-white transition-colors duration-400 fill-none stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]"
      >
        <circle cx="10" cy="10" r="6" />
        <path d="M15 15l5 5" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Open Space",
    desc: "Develops innovative solutions on a chosen subject with 30 to 1,000 people in 1 to 3 days, backed by thorough preparation and a strong post-event implementation process.",
    img: "/interventions/open-space.jpg",
    pos: "object-center",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 stroke-[#FF5E14] group-hover:stroke-white transition-colors duration-400 fill-none stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]"
      >
        <circle cx="12" cy="6" r="3" />
        <path d="M4 20v-4a8 8 0 0 1 16 0v4z" />
      </svg>
    ),
  },
];

export default function Offerings() {
  return (
    <section className="bg-[#F4F4F4] text-[#1a1a1a] px-6 py-24">
      <div className="mx-auto max-w-[1240px]">
        {/* Head */}
        <div className="mx-auto mb-14 max-w-[720px] text-center">
          <div className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[.18em] text-[#1a1a1a]">
            <span className="h-1.5 w-1.5 bg-[#FF5E14]" />
            Our offerings
          </div>
          <h2 className="mt-4 font-['Schibsted_Grotesk',Inter,sans-serif] text-[clamp(32px,5vw,48px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#1a1a1a]">
            Four ways to bring the whole system into the room.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {OFFERINGS.map((item) => (
            <article
              key={item.num}
              tabIndex={0}
              className="group relative isolate overflow-hidden rounded-[24px] bg-[linear-gradient(115deg,#fff_60%,#FFF1EA_100%)] p-8 sm:p-10 min-h-[360px] flex flex-col justify-between border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.03)] outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#205A9D]"
            >
              {/* background image, shown on hover */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.img}
                alt={item.title}
                className={`absolute inset-0 -z-20 h-full w-full scale-[1.08] object-cover opacity-0 transition duration-[800ms] ease-out group-hover:scale-100 group-hover:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100 ${item.pos}`}
              />

              {/* dark overlay so text stays crisp and readable on hover */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a1428]/55 via-[#0a1428]/75 to-[#0a1428]/92 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100" />

              <div>
                <div className="flex items-center justify-between">
                  <span className="font-['Schibsted_Grotesk',Inter,sans-serif] text-[72px] sm:text-[84px] font-bold leading-none tracking-[-0.03em] text-[#FF5E14] transition-colors duration-400 group-hover:text-white group-focus-within:text-white">
                    {item.num}
                  </span>
                  <div className="w-12 h-12 rounded-[14px] bg-[#FFF1EA] group-hover:bg-white/15 transition-colors duration-400 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>

                <h3 className="mt-6 mb-3.5 font-['Schibsted_Grotesk',Inter,sans-serif] text-[22px] sm:text-[24px] font-semibold leading-[1.25] text-[#1a1a1a] transition-colors duration-400 group-hover:text-white group-focus-within:text-white">
                  {item.title}
                </h3>
              </div>

              <p className="mt-2 text-[14.5px] leading-[1.75] text-[#555555] transition-colors duration-400 group-hover:text-white/95 group-focus-within:text-white/95">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
