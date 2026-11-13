"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * HowWeHelp
 * Scroll-driven section: titles (left) · stacked photo cards (centre) · details (right).
 */

const TOPICS = [
  {
    title: "Business Transformation",
    lines: ["Business", "Transformation"],
    text: "Business transformation is not only about changing strategy, technology or operating models—it requires people to change how they think, work and collaborate. OD helps organisations translate business transformation into meaningful people and organisational change.",
    image: "/Stats/card1.jpg",
  },
  {
    title: "Leadership Alignment",
    lines: ["Leadership Alignment"],
    text: "Leadership teams succeed when they pull in one direction. OD helps leaders build a shared view of priorities, clarify roles and decisions, and act as one team across the organisation.",
    image: "/Stats/card2.jpg",
  },
  {
    title: "Moving from Functional to Enterprise Leadership",
    lines: ["Moving from Functional to", "Enterprise Leadership"],
    text: "Leaders who grew up in a function must learn to think for the whole enterprise. OD supports this shift with coaching, peer dialogue and real business challenges.",
    image: "/Stats/card3.jpg",
  },
  {
    title: "Building Trust and Relationships",
    lines: ["Building Trust", "and Relationships"],
    text: "Trust is what lets teams move fast and speak openly. OD creates the conditions for honest conversations and stronger working relationships across levels and functions.",
    image: "/Stats/card4.jpg",
  },
  {
    title: "Culture Change",
    lines: ["Culture Change"],
    text: "Culture shows up in everyday behaviour, not in value statements. OD helps organisations define the culture they need and shift the habits, rituals and systems that sustain it.",
    image: "/Stats/card5.jpg",
  },
  {
    title: "Strategic Thinking and Leadership Altitude",
    lines: ["Strategic Thinking and", "Leadership Altitude"],
    text: "Leaders need to step back from daily detail and see the bigger picture. OD builds the habits of strategic thinking and the ability to operate at the right altitude.",
    image: "/WhatWeDo/row1.jpg",
  },
  {
    title: "Learning, Unlearning and Adaptability",
    lines: ["Learning, Unlearning", "and Adaptability"],
    text: "Staying relevant means learning new ways and letting go of old ones. OD helps people and teams build the agility to adapt as the business changes.",
    image: "/WhatWeDo/row3.jpg",
  },
  {
    title: "Working Through Differences and Conflict",
    lines: ["Working Through Differences", "and Conflict"],
    text: "Differences, handled well, lead to better decisions. OD gives teams the skills and structure to work through conflict constructively and come out stronger.",
    image: "/Stats/card6.jpg",
  },
];

const STEP = 0.7; // viewport heights of scrolling per topic (bigger = slower)
const PLACEHOLDER_HUES = [18, 205, 160, 270, 40, 330, 190, 10];

// Transform for each card depending on its position relative to the active one
const CARD_STYLES = {
  0: {
    opacity: 1,
    zIndex: 3,
    transform:
      "translateY(calc(var(--t, 0) * -2.5%)) rotate(calc(5deg - var(--t, 0) * 3deg))",
  },
  1: {
    opacity: 1,
    zIndex: 2,
    transform: "translate(-4%, 3%) rotate(-3deg) scale(.97)",
    filter: "brightness(.7)",
  },
  2: {
    opacity: 1,
    zIndex: 1,
    transform: "translate(2.5%, 5%) rotate(-9deg) scale(.94)",
    filter: "brightness(.5)",
  },
  out: {
    opacity: 0,
    zIndex: 0,
    transform: "translate(0, 7%) rotate(-12deg) scale(.9)",
  },
};

export default function HowWeHelp() {
  const trackRef = useRef(null);
  const stackRef = useRef(null);
  const btnRefs = useRef([]);

  const [active, setActive] = useState(0); // drives list + cards
  const [shown, setShown] = useState(0); // drives right-hand text (fades between)
  const [fading, setFading] = useState(false);
  const [pinned, setPinned] = useState(true); // false on phones
  const [trackHeight, setTrackHeight] = useState(undefined);

  // Desktop / phone switch
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const update = () => setPinned(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Tall scroll track = one viewport + one step per extra topic
  useEffect(() => {
    if (!pinned) {
      setTrackHeight(undefined);
      return;
    }
    const size = () =>
      setTrackHeight(window.innerHeight * (1 + (TOPICS.length - 1) * STEP));
    size();
    window.addEventListener("resize", size);
    return () => window.removeEventListener("resize", size);
  }, [pinned]);

  // Scroll progress -> active topic + continuous card tilt
  useEffect(() => {
    if (!pinned) return;
    let ticking = false;

    const update = () => {
      ticking = false;
      const track = trackRef.current;
      if (!track) return;
      const stepPx = window.innerHeight * STEP;
      const y = Math.min(
        Math.max(-track.getBoundingClientRect().top, 0),
        stepPx * (TOPICS.length - 1)
      );
      const raw = y / stepPx;
      setActive(Math.min(TOPICS.length - 1, Math.round(raw)));
      stackRef.current?.style.setProperty(
        "--t",
        (raw - Math.floor(raw)).toFixed(3)
      );
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
  }, [pinned]);

  // Fade the right-hand text out, swap it, fade back in
  useEffect(() => {
    if (active === shown) return;
    setFading(true);
    const id = setTimeout(() => {
      setShown(active);
      setFading(false);
    }, 220);
    return () => clearTimeout(id);
  }, [active, shown]);

  // Click / keyboard: scroll to a topic (or just select it on phones)
  const goTo = useCallback(
    (i) => {
      if (!pinned) {
        setActive(i);
        return;
      }
      const track = trackRef.current;
      if (!track) return;
      const top = track.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: top + i * window.innerHeight * STEP,
        behavior: "smooth",
      });
    },
    [pinned]
  );

  const onKeyDown = (e) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const next = Math.min(
      TOPICS.length - 1,
      Math.max(0, active + (e.key === "ArrowDown" ? 1 : -1))
    );
    goTo(next);
    btnRefs.current[next]?.focus({ preventScroll: true });
  };

  const current = TOPICS[shown];

  return (
    <section aria-label="Where Can Organization Development Help your Business" className="w-full bg-white pb-14 sm:pb-16 md:pb-20">
      {/* Title Section */}
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-14 sm:pt-16 md:pt-20 pb-8 sm:pb-10 md:pb-12 text-center">
        {/* Section Chip */}
        <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
          <span className="w-1.5 h-1.5 rounded-[1px] bg-[#FF5E14]" />
          <span
            className="text-[#242424] font-medium text-[14px] leading-[18px] tracking-[0.24px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Where Can Organization Development
          </span>
        </div>

        {/* Section Title */}
        <h2
          className="text-[#242424] font-semibold text-3xl sm:text-4xl md:text-[52px] leading-[1.15] md:leading-[58px] tracking-[-0.8px] mb-4 sm:mb-5"
          style={{
            fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
          }}
        >
          Help your Business?
        </h2>

        {/* Subtitle / Description */}
        <p
          className="max-w-[840px] mx-auto text-[#666666] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.65] font-normal"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Every organisation reaches moments when strategy, people and culture
          need to move together. Organisation Development helps your leaders
          build trust, align on direction and work through change as one
          team. Here are ten areas where it makes a real difference to your
          leaders, your teams and your culture.
        </p>
      </div>

      {/* Interactive Scroll-Driven Section */}
      <div
        ref={trackRef}
        style={{ height: trackHeight }}
        className="relative w-full"
      >
        <div
          aria-label="How we help interactive list"
          className="mx-auto grid w-full max-w-[1680px] grid-cols-1 items-center gap-y-10 bg-white px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 font-['Inter',system-ui,sans-serif] text-[#1c1c1c] sm:sticky sm:top-0 sm:h-screen sm:grid-cols-[minmax(0,1.1fr)_minmax(260px,auto)_minmax(0,1fr)] sm:gap-x-10 md:gap-x-12 lg:gap-x-16 xl:gap-x-24 sm:overflow-hidden"
        >
        {/* ---------- Mobile: Horizontal Topic Selector ---------- */}
        <div className="sm:hidden w-full overflow-x-auto pb-2 flex gap-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {TOPICS.map((t, i) => {
            const on = i === active;
            return (
              <button
                key={t.title}
                type="button"
                onClick={() => goTo(i)}
                className={`shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium transition-all ${
                  on
                    ? "bg-[#FF5E14] text-white shadow-sm"
                    : "bg-[#F3F4F6] text-[#4B5563] hover:bg-[#E5E7EB]"
                }`}
              >
                {on && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                <span>{t.title}</span>
              </button>
            );
          })}
        </div>

        {/* ---------- Left: titles (Tablet/Desktop) ---------- */}
        <ul
          role="tablist"
          aria-orientation="vertical"
          onKeyDown={onKeyDown}
          className="hidden sm:flex list-none flex-col items-end gap-[clamp(14px,2vh,28px)] my-auto"
        >
          {TOPICS.map((t, i) => {
            const on = i === active;
            return (
              <li key={t.title} role="presentation" className="max-w-full">
                <button
                  ref={(el) => (btnRefs.current[i] = el)}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  tabIndex={on ? 0 : -1}
                  onClick={() => goTo(i)}
                  className={`group flex max-w-full cursor-pointer items-start justify-start gap-3 bg-transparent p-0 text-left font-['Figtree',sans-serif] text-[16px] sm:text-[clamp(14px,1.3vw,24px)] xl:text-[26px] leading-[1.2] tracking-[-0.02em] transition-colors duration-300 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[6px] focus-visible:outline-[#ef6a2e] sm:justify-end sm:text-right ${
                    on
                      ? "font-medium text-[#1c1c1c]"
                      : "font-light text-[#7a7a7a] hover:text-[#4a4a4a]"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`mt-[.22em] h-[clamp(9px,0.75vw,16px)] w-[clamp(9px,0.75vw,16px)] shrink-0 rounded-[2px] bg-[#ef6a2e] transition duration-300 ${
                      on ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}
                  />
                  {/* ghost bold copy reserves the bold width so text never reflows */}
                  <span className="flex flex-col items-start sm:items-end">
                    {t.lines.map((line, idx) => (
                      <span
                        key={idx}
                        data-text={line}
                        className="block whitespace-nowrap after:invisible after:block after:h-0 after:overflow-hidden after:font-medium after:content-[attr(data-text)]"
                      >
                        {line}
                      </span>
                    ))}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* ---------- Centre: stacked cards ---------- */}
        <div
          ref={stackRef}
          aria-hidden="true"
          className="relative mx-auto aspect-[4/5] w-[min(280px,75vw)] sm:w-[clamp(240px,22vw,390px)] xl:w-[410px]"
        >
          {TOPICS.map((t, i) => {
            const pos = (i - active + TOPICS.length) % TOPICS.length;
            const style = CARD_STYLES[pos < 3 ? pos : "out"];
            const hue = PLACEHOLDER_HUES[i % PLACEHOLDER_HUES.length];
            return (
              <div
                key={t.title}
                style={style}
                className="pointer-events-none absolute inset-0 origin-[50%_60%] overflow-hidden rounded-[clamp(20px,2vw,44px)] border-[clamp(4px,.4vw,10px)] border-white bg-neutral-300 shadow-[0_30px_60px_-18px_rgba(0,0,0,.35),0_6px_14px_rgba(0,0,0,.12)] transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(.22,.8,.24,1)] motion-reduce:transition-none"
              >
                {t.image ? (
                  <img
                    src={t.image}
                    alt=""
                    loading="lazy"
                    className="block h-full w-full object-cover"
                  />
                ) : (
                  <div
                    className="h-full w-full"
                    style={{
                      background: `linear-gradient(135deg, hsl(${hue} 45% 70%), hsl(${hue + 30} 40% 35%))`,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* ---------- Right: details ---------- */}
        <div
          role="tabpanel"
          aria-live="polite"
          className="w-full max-w-[420px] self-center justify-self-start sm:translate-y-[8%]"
        >
          <div
            className={`transition duration-300 motion-reduce:transition-none ${
              fading ? "translate-y-2.5 opacity-0" : "translate-y-0 opacity-100"
            }`}
          >
            <h3 className="mb-[1em] flex items-start gap-3 font-['Figtree',sans-serif] text-[clamp(17px,1.4vw,30px)] leading-[1.25] font-semibold tracking-[-0.01em]">
              <span
                aria-hidden="true"
                className="mt-[0.24em] h-[clamp(10px,0.8vw,18px)] w-[clamp(10px,0.8vw,18px)] shrink-0 rounded-[3px] bg-[#ef6a2e]"
              />
              <span>{current.title}</span>
            </h3>
            <p className="mb-[1.8em] text-[clamp(13.5px,0.95vw,17px)] leading-[1.7] text-[#6b6b6b] sm:min-h-[7.5em]">
              {current.text}
            </p>
            <a
              href="#contact"
              className="inline-block rounded-lg bg-[#ef6a2e] px-[1.8em] py-[.85em] font-['Figtree',sans-serif] text-[clamp(14px,1vw,18px)] font-medium text-white no-underline transition duration-200 hover:-translate-y-0.5 hover:bg-[#d9561c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#1c1c1c]"
            >
              Contact us
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
