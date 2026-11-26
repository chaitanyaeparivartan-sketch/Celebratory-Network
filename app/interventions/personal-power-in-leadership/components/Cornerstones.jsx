"use client";

const CORNERSTONES = [
  {
    num: "01",
    title: "Trust in Self",
    img: "/interventions/trust-in-self.jpg",
    alt: "Person jumping with open arms into the sky",
    pos: "object-center",
    text: "The confidence to trust one’s own competence, intuition and inner voice — especially during uncertainty.",
  },
  {
    num: "02",
    title: "Self Authority",
    img: "/interventions/self-authority.jpg",
    alt: "Hand signing a contract with pen",
    pos: "object-center",
    text: "The innate ability to take ownership of our choices, exercise agency and lead without seeking external validation.",
  },
  {
    num: "03",
    title: "Courage",
    img: "/interventions/courage.jpg",
    alt: "Person stepping forward on cliff above the clouds",
    pos: "object-top",
    text: "The willingness to challenge limiting beliefs, embrace uncertainty and step forward despite fear.",
  },
];

export default function Cornerstones({ cornerstones = CORNERSTONES }) {
  return (
    <section className="bg-[#F4F4F4] text-[#1a1a1a] px-6 py-24" id="overview">
      <div className="mx-auto max-w-[1240px]">
        {/* Head */}
        <div className="mx-auto mb-14 max-w-[720px] text-center">
          <div className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[.18em] text-[#1a1a1a]">
            <span className="h-1.5 w-1.5 bg-[#FF5E14]" />
            Three cornerstones
          </div>
          <h2 className="mt-4 font-['Schibsted_Grotesk',Inter,sans-serif] text-[clamp(32px,5vw,48px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#1a1a1a]">
            Of personal power.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-4 lg:grid-cols-3">
          {cornerstones.map((c) => (
            <article
              key={c.num}
              tabIndex={0}
              className="group relative isolate overflow-hidden rounded-[24px] bg-[linear-gradient(115deg,#fff_60%,#FFF1EA_100%)] p-9 min-h-[380px] flex flex-col justify-between outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#205A9D] border border-black/[0.04]"
            >
              {/* background image, shown on hover */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.img}
                alt={c.alt}
                className={`absolute inset-0 -z-20 h-full w-full scale-[1.08] object-cover opacity-0 transition duration-[800ms] ease-out group-hover:scale-100 group-hover:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100 ${c.pos}`}
              />

              {/* dark overlay so the text stays easily readable on hover */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a1428]/45 via-[#0a1428]/70 to-[#0a1428]/90 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100" />

              <div>
                <span className="block font-['Schibsted_Grotesk',Inter,sans-serif] text-[96px] font-bold leading-none tracking-[-0.03em] text-[#FF5E14] transition-colors duration-400 group-hover:text-white group-focus-within:text-white">
                  {c.num}
                </span>

                <h3 className="mt-5 font-['Schibsted_Grotesk',Inter,sans-serif] text-[24px] font-semibold text-[#1a1a1a] transition-colors duration-400 group-hover:text-white group-focus-within:text-white">
                  {c.title}
                </h3>
              </div>

              <p className="mt-3 text-[14.5px] leading-[1.7] text-[#555555] transition-colors duration-400 group-hover:text-white/95 group-focus-within:text-white/95">
                {c.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
