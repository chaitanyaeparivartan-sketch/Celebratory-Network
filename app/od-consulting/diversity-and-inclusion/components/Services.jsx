"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/app/components/Common/Reveal";

/**
 * Services.jsx — DEIB Services
 * Scroll-driven section exactly matching Home Page HowWeHelp:
 * titles (left) · stacked photo cards (centre) · details with bullets (right).
 */

const SERVICES = [
  {
    title: "DEI Assessment",
    lines: ["DEI Assessment"],
    text: "Comprehensive diagnostics to understand your organisation's current diversity landscape, cultural inclusion readiness, and strategic opportunities for progress.",
    items: [
      "DEI Audit",
      "DEI Index",
      "Cultural Assessment",
      "Leadership Readiness Dialogues",
    ],
    image: "/diversity-inclusion/dei-assessment.webp",
  },
  {
    title: "DEI for Leadership and Sponsors",
    lines: ["DEI for Leadership and", "Sponsors"],
    text: "Equipping executive leaders and sponsors with shared perspective, strategic clarity, and governing structures to drive authentic DEI accountability.",
    items: [
      "Leadership context setting",
      "DEI Vision",
      "DEI Strategy",
      "Setting up DEI Council",
    ],
    image: "/diversity-inclusion/dei-leadership.webp",
  },
  {
    title: "Diversity Champions",
    lines: ["Diversity Champions"],
    text: "Building an active network of internal champions across business functions with the skills, awareness, and frameworks to champion inclusion locally.",
    items: [
      "DEI Conceptual understanding",
      "Awareness",
      "Skill building",
      "Actioning DEI Pillars",
    ],
    image: "/diversity-inclusion/diversity-champions.webp",
  },
  {
    title: "Learning Journey",
    lines: ["Learning Journey"],
    text: "Immersive learning tracks and experiential dialogues covering unconscious bias, allyship, women in leadership, second careers, and intergenerational workplace dynamics.",
    items: [
      "Inclusive Leadership",
      "Unconscious Bias",
      "Allyship",
      "Learning journey for Women",
      "Returntship/ Second Careers",
      "Gender - Dialogues",
      "Generational Dialogues - Ageism",
    ],
    image: "/diversity-inclusion/learning-journey.webp",
  },
  {
    title: "DEI Game Changer",
    lines: ["DEI Game Changer"],
    text: "High-impact systemic interventions, including Employee Resource Group (ERG) design and implementation, and structured empathy circles for transformative dialogue.",
    items: [
      "ERG Design and Implementation - Gender, Generations etc.",
      "Empathy Circles",
    ],
    image: "/diversity-inclusion/dei-game-changer.webp",
  },
];

const STEP = 0.7; // viewport heights of scrolling per service
const PLACEHOLDER_HUES = [18, 205, 160, 270, 40];

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

function PhotoStack({ image = "/diversity-inclusion/dei-assessment.webp" }) {
  return (
    <div className="relative my-5 mx-auto sm:mr-auto sm:ml-2 aspect-[4/5] sm:aspect-[475/580] w-[calc(100%-16px)] max-w-[320px] sm:max-w-[340px]">
      <i className="absolute inset-0 rounded-[8px] bg-[#d9d6d2] opacity-50 [transform:rotate(-4deg)_translate(-4px,3px)]" />
      <i className="absolute inset-0 rounded-[8px] bg-[#d9d6d2] opacity-75 [transform:rotate(2deg)_translate(6px,2px)]" />
      <div
        className="absolute inset-0 -rotate-1 rounded-[8px] bg-cover bg-[center_20%] shadow-[0_12px_28px_-10px_rgba(0,0,0,0.3)]"
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  );
}

export default function Services() {
  const trackRef = useRef(null);
  const stackRef = useRef(null);
  const btnRefs = useRef([]);

  const [active, setActive] = useState(0); // drives list + cards
  const [shown, setShown] = useState(0); // drives right-hand text
  const [fading, setFading] = useState(false);
  const [pinned, setPinned] = useState(true); // false on phones
  const [trackHeight, setTrackHeight] = useState(undefined);

  // Mobile accordion state
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (i) => setOpenIndex((cur) => (cur === i ? null : i));

  // Desktop / mobile switch (activate pinned 3-column scroll on laptops and desktop screens)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setPinned(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Tall scroll track = one viewport + one step per extra topic
  useEffect(() => {
    if (!pinned) {
      const id = requestAnimationFrame(() => setTrackHeight(undefined));
      return () => cancelAnimationFrame(id);
    }
    const size = () =>
      setTrackHeight(window.innerHeight * (1 + (SERVICES.length - 1) * STEP));
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
        stepPx * (SERVICES.length - 1)
      );
      const raw = y / stepPx;
      setActive(Math.min(SERVICES.length - 1, Math.round(raw)));
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
    const fadeTimer = setTimeout(() => setFading(true), 0);
    const id = setTimeout(() => {
      setShown(active);
      setFading(false);
    }, 220);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(id);
    };
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
      SERVICES.length - 1,
      Math.max(0, active + (e.key === "ArrowDown" ? 1 : -1))
    );
    goTo(next);
    btnRefs.current[next]?.focus({ preventScroll: true });
  };

  const current = SERVICES[shown];

  return (
    <section aria-label="DEIB Services" className="w-full bg-white pb-0">
      {/* ---------- Mobile & Tablet Accordion View (< 1024px) ---------- */}
      <div className="lg:hidden w-full bg-white px-4 sm:px-6 pt-10 sm:pt-12 pb-8 font-inter text-[#1a1a1a]">
        <div className="mx-auto max-w-[680px]">
          <Reveal direction="up" duration={700}>
            <div className="inline-flex items-center gap-2 font-inter text-[12px] sm:text-[13px] md:text-[14px] font-medium uppercase leading-[18px] tracking-[0.24px] text-[#242424] mb-2 sm:mb-2.5">
              <span className="w-1.5 h-1.5 rounded-[1px] bg-[#FF5E14] shrink-0" />
              DEIB Services
            </div>

            <h2 className="mt-1 mb-3 font-ppmori text-3xl sm:text-4xl md:text-[46px] font-semibold leading-[1.12] tracking-[-0.8px] text-[#1c1c1c]">
              Building inclusive workplaces.
            </h2>

            <p className="mb-6 sm:mb-8 font-inter text-[15px] sm:text-[16px] leading-[1.65] text-[#555555]">
              We design, facilitate and implement systemic DEIB solutions that connect
              organizational culture, leadership altitude, and diversity to build
              thriving workplaces where everyone can do their best work.
            </p>
          </Reveal>

          <ul className="m-0 list-none border-t border-[#ececec] p-0">
            {SERVICES.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <Reveal
                  as="li"
                  key={item.title}
                  direction="up"
                  delay={Math.min(i * 35, 300)}
                  duration={550}
                  distance={18}
                  className="border-b border-[#ececec]"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`mobile-panel-${i}`}
                    onClick={() => toggleAccordion(i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-3 border-0 bg-transparent py-4 sm:py-5 text-left [-webkit-tap-highlight-color:transparent] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5E14]"
                  >
                    <span className="flex items-center gap-3 min-w-0 pr-2">
                      <span
                        className={`h-2 w-2 flex-none rounded-[1px] transition-colors duration-200 motion-reduce:transition-none ${
                          isOpen ? "bg-[#FF5E14]" : "bg-[#dedede]"
                        }`}
                      />
                      <span
                        className={`text-[18px] sm:text-[21px] leading-[1.25] tracking-[-0.02em] font-ppmori transition-colors duration-200 motion-reduce:transition-none ${
                          isOpen
                            ? "font-semibold text-[#1a1a1a]"
                            : "font-normal text-[#666666]"
                        }`}
                      >
                        {item.title}
                      </span>
                    </span>

                    {/* Expand/Collapse pill indicator */}
                    <span
                      aria-hidden="true"
                      className={`grid h-8 w-8 sm:h-9 sm:w-9 flex-none place-items-center rounded-full font-ppmori text-lg font-medium transition-all duration-300 ${
                        isOpen
                          ? "bg-[#FF5E14] text-white rotate-180 shadow-[0_4px_12px_rgba(255,94,20,0.3)]"
                          : "bg-[#FFF1EA] text-[#FF5E14] hover:bg-[#ffe2d3]"
                      }`}
                    >
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>

                  <div
                    id={`mobile-panel-${i}`}
                    aria-hidden={!isOpen}
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden pl-0 sm:pl-5 pr-0 sm:pr-1">
                      <PhotoStack image={item.image} />
                      <p className="mb-4 font-inter text-[14.5px] sm:text-[15px] leading-[1.65] text-[#525252]">
                        {item.text}
                      </p>
                      {item.items && item.items.length > 0 && (
                        <ul className="mb-5 space-y-2.5 list-none p-0">
                          {item.items.map((subItem, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2.5 font-inter text-[13.5px] sm:text-[14.5px] text-[#333333] font-medium leading-[1.5]"
                            >
                              <span className="w-1.5 h-1.5 rounded-[1px] bg-[#FF5E14] shrink-0" />
                              <span>{subItem}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      <Link
                        href="/contact"
                        tabIndex={isOpen ? 0 : -1}
                        className="group mb-5 sm:mb-6 inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-[8px] bg-[#FF5E14] pl-5 pr-2.5 py-2.5 sm:py-2 font-['PP_Mori',sans-serif] text-[14.5px] sm:text-[15px] font-semibold leading-[20px] text-white no-underline transition-all duration-300 hover:bg-[#e0500d] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,94,20,0.35)] active:scale-[0.98] shadow-sm cursor-pointer"
                      >
                        <span>Contact us</span>
                        <span className="grid h-[28px] w-[28px] place-items-center rounded-[6px] bg-white/20 transition-transform duration-200 group-hover:translate-x-1">
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M5 12h14M13 6l6 6-6 6" />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Title Section (Split Header for Desktop/Tablet >= 1024px) */}
      <div className="hidden lg:block w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-12 sm:pt-14 pb-0">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 sm:gap-8">
          {/* Left Column: Eyebrow + Main Title */}
          <Reveal direction="up" duration={750} className="flex flex-col items-start text-left max-w-[620px]">
            {/* Section Chip */}
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-2.5">
              <span className="w-1.5 h-1.5 rounded-[1px] bg-[#FF5E14] shrink-0" />
              <span
                className="text-[#242424] font-medium font-inter text-[12px] sm:text-[13px] md:text-[14px] uppercase leading-[18px] tracking-[0.24px]"
              >
                DEIB Services
              </span>
            </div>

            {/* Section Title */}
            <h2 className="text-[#1c1c1c] font-semibold font-ppmori text-3xl sm:text-4xl md:text-[48px] lg:text-[52px] leading-[1.12] tracking-[-0.8px] mt-1">
              Building inclusive workplaces.
            </h2>
          </Reveal>

          {/* Right Column: Paragraph */}
          <Reveal direction="up" duration={750} delay={120} className="max-w-[480px] md:text-right">
            <p className="text-[#555555] font-inter text-[15px] sm:text-[16px] md:text-[17px] leading-[1.65] font-normal">
              We design, facilitate and implement systemic DEIB solutions that connect
              organizational culture, leadership altitude, and diversity to build
              thriving workplaces where everyone can do their best work.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Interactive Scroll-Driven Section (Desktop/Tablet >= 1024px) */}
      <div
        ref={trackRef}
        style={{ height: trackHeight }}
        className="hidden lg:block relative w-full"
      >
        <div
          aria-label="DEIB services interactive list"
          className="mx-auto grid w-full max-w-[1680px] grid-cols-1 items-center gap-y-10 bg-white px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 font-['Inter',system-ui,sans-serif] text-[#1c1c1c] sm:sticky sm:top-0 sm:h-screen sm:grid-cols-[minmax(0,1.1fr)_minmax(260px,auto)_minmax(0,1fr)] sm:gap-x-10 md:gap-x-12 lg:gap-x-16 xl:gap-x-24 sm:overflow-hidden"
        >

        {/* ---------- Left: titles (Tablet/Desktop) ---------- */}
        <Reveal direction="right" duration={700} distance={24} className="hidden sm:flex my-auto w-full">
        <ul
          role="tablist"
          aria-orientation="vertical"
          onKeyDown={onKeyDown}
          className="flex list-none flex-col items-start gap-3 sm:gap-3.5 md:gap-4 lg:gap-5 w-full"
        >
          {SERVICES.map((t, i) => {
            const on = i === active;
            return (
              <li key={t.title} role="presentation" className="w-full flex justify-start">
                <button
                  ref={(el) => (btnRefs.current[i] = el)}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  tabIndex={on ? 0 : -1}
                  onClick={() => goTo(i)}
                  className={`group flex items-start gap-2.5 sm:gap-3 text-left cursor-pointer bg-transparent p-0 font-ppmori text-[18px] sm:text-[clamp(17px,1.35vw,23px)] xl:text-[25px] leading-[1.2] tracking-[-0.015em] transition-colors duration-300 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[6px] focus-visible:outline-[#FF5E14] ${
                    on
                      ? "font-semibold text-[#1c1c1c]"
                      : "font-normal text-[#717171] hover:text-[#2d2d2d]"
                  }`}
                >
                  {/* Indicator Box: fixed width so every line of text starts at the identical horizontal position */}
                  <span className="w-[10px] sm:w-[12px] xl:w-[14px] mt-[0.22em] shrink-0 flex items-center justify-center">
                    <span
                      aria-hidden="true"
                      className={`h-[9px] w-[9px] sm:h-[10px] sm:w-[10px] xl:h-[12px] xl:w-[12px] rounded-[2px] bg-[#FF5E14] transition-all duration-300 ${
                        on ? "scale-100 opacity-100" : "scale-0 opacity-0"
                      }`}
                    />
                  </span>

                  {/* Title text: clean column layout with ghost bold width preservation */}
                  <span className="flex flex-col items-start text-left">
                    {t.lines.map((line, idx) => (
                      <span
                        key={idx}
                        data-text={line}
                        className="block leading-[1.2] whitespace-nowrap text-left after:invisible after:block after:h-0 after:leading-none after:text-[0px] after:overflow-hidden after:font-semibold after:content-[attr(data-text)]"
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
        </Reveal>

        {/* ---------- Centre: stacked cards ---------- */}
        <Reveal direction="scale" duration={750} delay={100} distance={20} className="mx-auto">
        <div
          ref={stackRef}
          aria-hidden="true"
          className="relative mx-auto aspect-[4/5] w-[min(280px,75vw)] sm:w-[clamp(240px,22vw,390px)] xl:w-[410px]"
        >
          {SERVICES.map((t, i) => {
            const pos = (i - active + SERVICES.length) % SERVICES.length;
            const style = CARD_STYLES[pos < 3 ? pos : "out"];
            const hue = PLACEHOLDER_HUES[i % PLACEHOLDER_HUES.length];
            return (
              <div
                key={t.title}
                style={style}
                className="pointer-events-none absolute inset-0 origin-[50%_60%] overflow-hidden rounded-[8px] border-[clamp(4px,.4vw,10px)] border-white bg-neutral-300 shadow-[0_30px_60px_-18px_rgba(0,0,0,.35),0_6px_14px_rgba(0,0,0,.12)] transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(.22,.8,.24,1)] motion-reduce:transition-none"
              >
                {t.image ? (
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 410px"
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
        </Reveal>

        {/* ---------- Right: details ---------- */}
        <Reveal direction="left" duration={700} delay={180} distance={24} className="w-full max-w-[480px] self-center justify-self-start sm:translate-y-[4%]">
        <div
          role="tabpanel"
          aria-live="polite"
          className="w-full"
        >
          <div
            className={`transition duration-300 motion-reduce:transition-none ${
              fading ? "translate-y-2.5 opacity-0" : "translate-y-0 opacity-100"
            }`}
          >
            <h3 className="mb-[0.65em] flex items-start gap-3.5 font-ppmori text-2xl sm:text-3xl md:text-[32px] leading-[1.2] font-semibold tracking-[-0.015em] text-[#1c1c1c]">
              <span
                aria-hidden="true"
                className="mt-[0.22em] h-[clamp(12px,0.9vw,18px)] w-[clamp(12px,0.9vw,18px)] shrink-0 rounded-[3px] bg-[#FF5E14]"
              />
              <span>{current.title}</span>
            </h3>

            <p className="mb-[1.2em] font-inter text-[15px] sm:text-[16px] md:text-[17px] leading-[1.65] text-[#555555]">
              {current.text}
            </p>

            {current.items && current.items.length > 0 && (
              <ul className="mb-[1.8em] space-y-2.5 list-none p-0">
                {current.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 font-inter text-[14px] sm:text-[14.5px] md:text-[15px] text-[#333333] font-medium leading-[1.5]"
                  >
                    <span className="w-1.5 h-1.5 rounded-[1px] bg-[#FF5E14] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 rounded-[8px] bg-[#FF5E14] pl-5 pr-2.5 py-2 font-['PP_Mori',sans-serif] text-[15px] font-semibold leading-[20px] text-white no-underline transition-all duration-300 hover:bg-[#e0500d] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,94,20,0.35)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#1c1c1c] shadow-sm cursor-pointer"
            >
              <span>Contact us</span>
              <span className="grid h-[28px] w-[28px] place-items-center rounded-[6px] bg-white/20 transition-transform duration-200 group-hover:translate-x-1">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
        </Reveal>
        </div>
      </div>
    </section>
  );
}
