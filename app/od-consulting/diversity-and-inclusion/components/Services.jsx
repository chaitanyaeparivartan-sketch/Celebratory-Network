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
const STEP = 0.65; // Viewport heights of scroll per service item

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
        className="absolute bottom-[24px] left-6 flex items-center gap-2.5 text-xs font-semibold tracking-[0.12em] text-white md:left-[34px]"
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
  const [trackHeight, setTrackHeight] = useState(undefined);
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

  // Compute total track height based on step per service
  useEffect(() => {
    const size = () => {
      setTrackHeight(window.innerHeight * (1 + (n - 1) * STEP));
    };
    size();
    window.addEventListener("resize", size);
    return () => window.removeEventListener("resize", size);
  }, [n]);

  // One distinct scroll step opens each service in order
  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      if (Date.now() < lockRef.current || !wrapRef.current) return;
      const track = wrapRef.current;
      const stepPx = window.innerHeight * STEP;
      const top = -track.getBoundingClientRect().top;
      if (top < 0) {
        go(0);
        return;
      }
      const y = Math.min(Math.max(top, 0), stepPx * (n - 1));
      const raw = y / stepPx;
      const target = Math.min(n - 1, Math.round(raw));
      go(target);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [go, n]);

  const onSelect = (i) => {
    go(i);
    const track = wrapRef.current;
    if (!track) return;
    const stepPx = window.innerHeight * STEP;
    const trackTop = track.getBoundingClientRect().top + window.scrollY;
    lockRef.current = Date.now() + 800;
    window.scrollTo({
      top: trackTop + i * stepPx,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={wrapRef}
      id="services"
      className="relative bg-white w-full"
      style={{
        minHeight: trackHeight ? `${trackHeight}px` : `${100 + (n - 1) * 65}vh`,
      }}
    >
      {/* keyframes for the image wipe */}
      <style>{`
        @keyframes wipeUp{from{clip-path:inset(100% 0 0 0)}to{clip-path:inset(0 0 0 0)}}
        @keyframes wipeDown{from{clip-path:inset(0 0 100% 0)}to{clip-path:inset(0 0 0 0)}}
        @keyframes settle{from{transform:scale(1.35)}to{transform:scale(1)}}
        @keyframes push{from{transform:translateY(0) scale(1)}to{transform:translateY(-12%) scale(1.05)}}
        @keyframes dim{from{opacity:0}to{opacity:.55}}
      `}</style>

      <div className="sticky top-0 flex h-screen max-h-screen w-full flex-col justify-center px-4 sm:px-6 lg:px-8 xl:px-12 pt-14 sm:pt-16 pb-6 sm:pb-8">
        <div className="mx-auto flex w-full max-w-[1520px] flex-col">
          {/* TOP: Horizontally Centered Heading */}
          <div className="mb-4 sm:mb-5 md:mb-6 flex flex-col items-center text-center flex-none">
            <div
              className="mb-1.5 inline-flex items-center gap-2 text-center text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.14em] text-[#242424]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <i className="block h-2 w-2 rounded-full bg-[#FF5E14]" />
              DEIB Services
            </div>

            <h2
              className="text-center text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] font-semibold leading-[1.1] tracking-tight text-[#171717]"
              style={{ fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif' }}
            >
              Building inclusive workplaces.
            </h2>
          </div>

          {/* BOTTOM: Left Media & Right Content */}
          <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* LEFT — media filling available viewport height */}
            <div className="relative h-[340px] sm:h-[440px] md:h-[calc(100vh-210px)] min-h-[400px] max-h-[720px] w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-md">
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

            {/* RIGHT — accordion content with increased typography */}
            <div className="flex flex-col justify-center w-full">
              <div>
                {SERVICES.map((s, i) => {
                  const open = i === st.cur;
                  return (
                    <div
                      key={s.title}
                      onClick={() => onSelect(i)}
                      className="cursor-pointer border-b border-black/[.12] last:border-b-0 transition-colors"
                    >
                      <h3
                        className="pb-[12px] pt-[14px] sm:pb-[14px] sm:pt-[16px] md:pb-[16px] md:pt-[18px] text-[19px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-medium leading-[1.2] tracking-tight transition-colors duration-300"
                        style={{
                          fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
                          color: open ? s.color : "#171717",
                        }}
                      >
                        {s.title}
                      </h3>

                      <div
                        className={`grid transition-[grid-template-rows] duration-[500ms] ease-[cubic-bezier(.65,0,.2,1)] ${
                          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <ul
                            className={`space-y-1.5 pb-[18px] pt-[2px] text-[15px] sm:text-[15.5px] md:text-[16.5px] leading-[1.65] text-[#4e4e4e] transition-all duration-400 ${
                              open ? "translate-y-0 opacity-100 delay-100" : "translate-y-2.5 opacity-0"
                            }`}
                            style={{ fontFamily: "Inter, sans-serif" }}
                          >
                            {s.items.map((it) => (
                              <li key={it} className="relative pl-[22px]">
                                <span
                                  className="absolute left-0 top-[0.6em] h-2 w-2 rounded-full"
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
      </div>
    </section>
  );
}
