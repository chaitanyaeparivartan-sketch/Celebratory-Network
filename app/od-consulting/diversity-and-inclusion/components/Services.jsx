"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Services.jsx — DEIB services, pinned split-screen accordion (React + Tailwind)
 *
 * Setup:
 *  1. Put wheel.jpg and podium.jpg in /public/images/  (or change the `img` paths below)
 *  2. Load Inter (e.g. Google Fonts link in index.html). "PP Mori" is a licensed font –
 *     add your own @font-face for it; until then the stack falls back to Inter.
 */

const SERVICES = [
  {
    title: "DEI Assessment",
    color: "#4a6bb5",
    img: "/images/wheel.jpg",
    pos: "70% 45%",
    items: ["DEI Audit", "DEI Index", "Cultural Assessment", "Leadership Readiness Dialogues."],
  },
  {
    title: "DEI for Leadership and Sponsors",
    color: "#3aa57c",
    img: "/images/podium.jpg",
    pos: "42% 50%",
    items: ["Leadership context setting", "DEI Vision", "DEI Strategy", "Setting up DEI Council"],
  },
  {
    title: "Diversity Champions",
    color: "#c9a53a",
    img: "/images/wheel.jpg",
    pos: "8% 62%",
    items: ["DEI Conceptual understanding", "Awareness", "Skill building", "Actioning DEI Pillars"],
  },
  {
    title: "Learning Journey",
    color: "#d4562b",
    img: "/images/podium.jpg",
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
    img: "/images/wheel.jpg",
    pos: "95% 28%",
    items: ["ERG Design and Implementation - Gender, Generations etc.", "Empathy Circles"],
  },
];

const EASE = "cubic-bezier(.77,0,.18,1)";
const DUR = 1050;
const FONT = "font-['PP_Mori','Inter','Helvetica_Neue',Arial,sans-serif]";

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
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black/55 to-transparent" />
      <div className="absolute bottom-[30px] left-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[.14em] text-white md:left-[34px]">
        <i className="block h-2.5 w-2.5 rounded-full" style={{ background: s.color }} />
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
    <section ref={wrapRef} id="services" className="relative h-[500vh] bg-white md:h-[400vh]">
      {/* keyframes for the image wipe */}
      <style>{`
        @keyframes wipeUp{from{clip-path:inset(100% 0 0 0)}to{clip-path:inset(0 0 0 0)}}
        @keyframes wipeDown{from{clip-path:inset(0 0 100% 0)}to{clip-path:inset(0 0 0 0)}}
        @keyframes settle{from{transform:scale(1.35)}to{transform:scale(1)}}
        @keyframes push{from{transform:translateY(0) scale(1)}to{transform:translateY(-12%) scale(1.05)}}
        @keyframes dim{from{opacity:0}to{opacity:.55}}
      `}</style>

      <div className="sticky top-0 grid h-screen grid-rows-[42vh_1fr] overflow-hidden bg-white md:grid-cols-2 md:grid-rows-1">
        {/* LEFT — media */}
        <div className="relative overflow-hidden bg-neutral-800">
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
        <div className="flex flex-col bg-white px-6 pt-9 md:px-[58px] md:pt-[clamp(44px,8vh,90px)]">
          <div
            className={`mb-3.5 flex items-center justify-start gap-2.5 text-left text-[14px] font-medium uppercase leading-[18px] tracking-[0.24px] text-[#242424] font-['Inter',sans-serif]`}
          >
            <i className="block h-2.5 w-2.5 bg-[#f26a3d]" />
            DEIB Services
          </div>

          <h2
            className={`mb-[26px] text-left text-[36px] font-semibold leading-9 tracking-[-0.8px] text-[#242424] md:text-[52px] md:leading-[48px] ${FONT}`}
          >
            Building inclusive workplaces.
          </h2>

          <div className="border-t border-black/[.18]">
            {SERVICES.map((s, i) => {
              const open = i === st.cur;
              return (
                <div
                  key={s.title}
                  onClick={() => onSelect(i)}
                  className="cursor-pointer border-b border-black/[.18]"
                >
                  <h3
                    className={`pb-[21px] pt-[23px] text-[20px] font-medium uppercase leading-[1.1] tracking-[-0.3px] transition-colors duration-300 md:text-[26px] ${FONT}`}
                    style={{ color: open ? s.color : "#111" }}
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
                        className={`space-y-0 pb-[34px] pt-[3px] font-mono text-[15px] leading-[1.75] tracking-[.02em] text-[#555] transition-all duration-500 ${
                          open ? "translate-y-0 opacity-100 delay-150" : "translate-y-2.5 opacity-0"
                        }`}
                      >
                        {s.items.map((it) => (
                          <li key={it} className="relative pl-[26px]">
                            <span
                              className="absolute left-0 top-[.75em] h-1.5 w-1.5"
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
    </section>
  );
}
