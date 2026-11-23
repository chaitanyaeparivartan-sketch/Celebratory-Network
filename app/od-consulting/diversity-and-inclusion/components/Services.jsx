"use client";

"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Services.jsx — DEIB services, pinned split-screen accordion (React + Tailwind)
 */

const SERVICES = [
  {
    title: "DEI Assessment",
    color: "#4a6bb5",
    img: "/diversity-inclusion/pexels-werner-pfennig-6949925.jpg",
    pos: "70% 45%",
    items: ["DEI Audit", "DEI Index", "Cultural Assessment", "Leadership Readiness Dialogues."],
  },
  {
    title: "DEI for Leadership and Sponsors",
    color: "#3aa57c",
    img: "/diversity-inclusion/pexels-ivan-s-8117475.jpg",
    pos: "42% 50%",
    items: ["Leadership context setting", "DEI Vision", "DEI Strategy", "Setting up DEI Council"],
  },
  {
    title: "Diversity Champions",
    color: "#c9a53a",
    img: "/diversity-inclusion/pexels-werner-pfennig-6949925.jpg",
    pos: "8% 62%",
    items: ["DEI Conceptual understanding", "Awareness", "Skill building", "Actioning DEI Pillars"],
  },
  {
    title: "Learning Journey",
    color: "#d4562b",
    img: "/diversity-inclusion/pexels-ivan-s-8117475.jpg",
    pos: "88% 60%",
    items: [
      "Inclusive Leadership",
      "Unconscious Bias",
      "Allyship",
      "Learning journey for Women",
      "Returntship/ Second Careers",
      "Gender - Dialogues",
      "Generational Dialogues - Ageism",
    ],
  },
  {
    title: "DEI Game Changer",
    color: "#d6342f",
    img: "/diversity-inclusion/pexels-werner-pfennig-6949925.jpg",
    pos: "95% 28%",
    items: ["ERG Design and Implementation - Gender, Generations etc.", "Empathy Circles"],
  },
];

const EASE = "cubic-bezier(.77,0,.18,1)";
const DUR = 1050;
const FONT = 'font-["PP_Mori",var(--font-geist-sans),sans-serif]';

/* One image layer. mode: idle (first paint) | enter | prev */
function Layer({ s, mode, rev }) {
  const wrapAnim =
    mode === "enter"
      ? { animation: `${rev ? "wipeDown" : "wipeUp"} ${DUR}ms ${EASE} forwards` }
      : {};
  const imgAnim =
    mode === "enter"
      ? { animation: `settle 1400ms cubic-bezier(.22,.8,.2,1) forwards` }
      : mode === "prev"
      ? { animation: `push ${DUR}ms ${EASE} forwards` }
      : {};

  return (
    <div
      className={`absolute inset-0 overflow-hidden ${mode === "enter" ? "z-20" : "z-10"}`}
      style={wrapAnim}
    >
      <img
        src={s.img}
        alt={s.title}
        className="h-full w-full object-cover"
        style={{ objectPosition: s.pos, ...imgAnim }}
      />
      {/* bottom gradient + caption */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black/60 to-transparent" />
      <div
        className="absolute bottom-[24px] left-6 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white md:left-[34px]"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <i className="block h-2.5 w-2.5 rounded-full shadow-sm" style={{ background: s.color }} />
        {s.title}
      </div>
      {mode === "prev" && (
        <div
          className="absolute inset-0 bg-black"
          style={{ animation: `dim ${DUR}ms ${EASE} forwards` }}
        />
      )}
    </div>
  );
}

export default function Services() {
  const wrapRef = useRef(null);
  const curRef = useRef(0);
  const tickRef = useRef(0);
  const lockRef = useRef(0);
  const [st, setSt] = useState({ cur: 0, prev: null, rev: false, tick: 0 });
  const n = SERVICES.length;

  const go = useCallback((i) => {
    if (i === curRef.current) return;
    const rev = i < curRef.current;
    const prev = curRef.current;
    curRef.current = i;
    const tick = ++tickRef.current;
    setSt({ cur: i, prev, rev, tick });
    setTimeout(() => setSt((s) => (s.tick === tick ? { ...s, prev: null } : s)), DUR + 100);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (Date.now() < lockRef.current || !wrapRef.current) return;
      const el = wrapRef.current;
      const total = el.offsetHeight - window.innerHeight;
      const p = Math.min(0.9999, Math.max(0, -el.getBoundingClientRect().top / total));
      go(Math.floor(p * n));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [go, n]);

  const onSelect = (i) => {
    const el = wrapRef.current;
    const total = el.offsetHeight - window.innerHeight;
    const top = el.getBoundingClientRect().top + window.scrollY;
    lockRef.current = Date.now() + 900;
    go(i);
    window.scrollTo({ top: top + (total * (i + 0.5)) / n, behavior: "smooth" });
  };

  return (
    <section ref={wrapRef} id="services" className="relative h-[250vh] bg-white md:h-[220vh] w-full">
      {/* keyframes for the image wipe */}
      <style>{`
        @keyframes wipeUp{from{clip-path:inset(100% 0 0 0)}to{clip-path:inset(0 0 0 0)}}
        @keyframes wipeDown{from{clip-path:inset(0 0 100% 0)}to{clip-path:inset(0 0 0 0)}}
        @keyframes settle{from{transform:scale(1.35)}to{transform:scale(1)}}
        @keyframes push{from{transform:translateY(0) scale(1)}to{transform:translateY(-12%) scale(1.05)}}
        @keyframes dim{from{opacity:0}to{opacity:.55}}
      `}</style>

      <div className="sticky top-0 flex h-screen w-full items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 pt-20 sm:pt-24 pb-8 sm:pb-10">
        <div className="relative mx-auto grid w-full max-w-[1680px] h-[calc(100vh-140px)] min-h-[540px] max-h-[720px] grid-rows-[280px_1fr] md:grid-rows-1 md:grid-cols-2 overflow-hidden bg-white">
          {/* LEFT — media */}
          <div className="relative h-full w-full overflow-hidden bg-neutral-900">
            {st.prev !== null && (
              <Layer key={`p${st.tick}`} s={SERVICES[st.prev]} mode="prev" />
            )}
            <Layer
              key={`c${st.tick}`}
              s={SERVICES[st.cur]}
              mode={st.tick === 0 ? "idle" : "enter"}
              rev={st.rev}
            />
          </div>

          {/* RIGHT — heading + accordion */}
          <div className="flex h-full flex-col justify-center bg-white px-6 py-6 sm:px-8 md:px-[44px] lg:px-[54px] xl:px-[64px] overflow-y-auto">
            <div
              className="mb-2 sm:mb-2.5 flex items-center justify-start gap-2 text-left text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.12em] text-[#242424]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <i className="block h-2 w-2 rounded-full bg-[#FF5E14]" />
              DEIB Services
            </div>

            <h2
              className="mb-4 sm:mb-5 text-left text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] font-semibold leading-[1.08] tracking-tight text-[#171717]"
              style={{ fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif' }}
            >
              Building inclusive workplaces.
            </h2>

            <div className="border-t border-black/[.12]">
              {SERVICES.map((s, i) => {
                const open = i === st.cur;
                return (
                  <div
                    key={s.title}
                    onClick={() => onSelect(i)}
                    className="cursor-pointer border-b border-black/[.12] transition-colors"
                  >
                    <h3
                      className="pb-[13px] pt-[15px] text-[17px] sm:text-[20px] md:text-[22px] font-medium uppercase leading-[1.15] tracking-tight transition-colors duration-300"
                      style={{
                        fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
                        color: open ? s.color : "#171717",
                      }}
                    >
                      {s.title}
                    </h3>

                    <div
                      className={`grid transition-[grid-template-rows] duration-[600ms] ease-[cubic-bezier(.65,0,.2,1)] ${
                        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <ul
                          className={`space-y-1 pb-[18px] pt-[2px] text-[13px] sm:text-[14px] leading-[1.65] text-[#525252] transition-all duration-500 ${
                            open ? "translate-y-0 opacity-100 delay-150" : "translate-y-2.5 opacity-0"
                          }`}
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          {s.items.map((it) => (
                            <li key={it} className="relative pl-[20px]">
                              <span
                                className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full"
                                style={{ background: s.color }}
                              />
                              {it}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
