const cards = [
  {
    num: "01",
    title: "The Self",
    sub: "Dynamic and reflex",
    alt: "A hand holding a small round mirror that reflects a man’s face",
    pos: "object-[center_55%]",
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
    alt: "Six people dressed in black and white standing on a giant chessboard",
    pos: "object-[center_40%]",
    items: [
      <>
        <b className="text-[#1a1a1a] transition-colors duration-500 group-hover:text-white group-focus-within:text-white">
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
    alt: "Wooden figures stacked in a pyramid with one red figure at the top",
    pos: "object-center",
    items: [
      "Shift lenses from fixing individual personalities to transforming systemic patterns.",
      "Uncover repeating institutional loops to neutralize blame and polarization.",
      "Optimize the critical links between authority, boundaries, and tasks.",
    ],
  },
];

// Pass your own images: <CoreRealities images={{ self, role, system }} />
export default function CoreRealities({
  images = {
    self: "/images/mirror.jpg",
    role: "/images/chessboard.jpg",
    system: "/images/pyramid.jpg",
  },
}) {
  const imgFor = { "01": images.self, "02": images.role, "03": images.system };

  return (
    <section className="bg-[#F4F4F4] text-[#1a1a1a] px-6 py-24">
      <div className="mx-auto max-w-[1320px]">
        {/* heading */}
        <div className="mx-auto mb-14 max-w-[720px] text-center">
          <div className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[.18em] text-[#1a1a1a]">
            <span className="h-1.5 w-1.5 bg-[#FF5E14]" />
            Three core realities
          </div>
          <h2 className="my-4 font-['Schibsted_Grotesk','PP_Mori',Inter,sans-serif] text-[clamp(32px,5vw,48px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#1a1a1a]">
            Self. Role. System.
          </h2>
          <p className="text-[15px] sm:text-[16px] leading-[1.65] text-[#555555]">
            A multidimensional framework mapping how individuals, mandates, and operational
            conditions intersect to build high-performance cultures.
          </p>
        </div>

        {/* cards */}
        <div className="grid gap-4 lg:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.num}
              tabIndex={0}
              className="group relative isolate overflow-hidden rounded-lg bg-[linear-gradient(115deg,#fff_60%,#FFF1EA_100%)] px-8 py-9 outline-none focus-visible:ring-2 focus-visible:ring-[#FF5E14]"
            >
              {/* background image, shown on hover */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgFor[c.num]}
                alt={c.alt}
                className={`absolute inset-0 -z-20 h-full w-full scale-[1.06] object-cover opacity-0 transition duration-[900ms] group-hover:scale-100 group-hover:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100 ${c.pos}`}
              />
              {/* dark overlay so the text stays readable */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0a0a]/55 to-[#0a0a0a]/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100" />

              <span className="block font-['Schibsted_Grotesk','PP_Mori',Inter,sans-serif] text-[96px] font-bold leading-none tracking-[-0.03em] text-[#FF5E14]">
                {c.num}
              </span>

              <h3 className="mt-[18px] font-['Schibsted_Grotesk','PP_Mori',Inter,sans-serif] text-2xl font-semibold text-[#1a1a1a] transition-colors duration-500 group-hover:text-white group-focus-within:text-white">
                {c.title}
              </h3>

              <div className="mb-[18px] mt-1.5 text-[11px] font-semibold uppercase tracking-[.14em] text-[#FF5E14]">
                {c.sub}
              </div>

              <ul className="grid gap-3">
                {c.items.map((item, i) => (
                  <li
                    key={i}
                    className="relative pl-4 text-sm leading-[1.65] text-[#444444] transition-colors duration-500 before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:bg-[#FF5E14] before:content-[''] group-hover:text-white/90 group-focus-within:text-white/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
