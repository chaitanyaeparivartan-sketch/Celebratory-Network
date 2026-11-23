"use client";

import { useEffect, useRef, useState } from "react";

const ORANGE = "#FF5E14";

const ITEMS = [
  { label: "Unclear Roles & Decision Rights", value: 75 },
  { label: "Weak Processes & Execution", value: 65 },
  { label: "Compliance Over Ownership", value: 60 },
  { label: "Avoidance Over Dialogue", value: 50 },
  { label: "Old Habits & Resistance to Change", value: 70 },
  { label: "Weak Leadership & Talent Systems", value: 65 },
  { label: "New Structures Without Involvement", value: 55 },
];

const NOISE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 .22 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

// Wave edge + keyframes can't be expressed with utilities alone.
const WAVE_CSS = `
.sy-wave{position:absolute;left:0;right:0;bottom:calc(100% - 1px);height:14px;background:${ORANGE};
  -webkit-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='14' viewBox='0 0 120 14'%3E%3Cpath d='M0 14V7C15 0 45 0 60 7S105 14 120 7V14Z'/%3E%3C/svg%3E") repeat-x 0 100%/120px 14px;
          mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='14' viewBox='0 0 120 14'%3E%3Cpath d='M0 14V7C15 0 45 0 60 7S105 14 120 7V14Z'/%3E%3C/svg%3E") repeat-x 0 100%/120px 14px;
  animation:sy-wave 2.6s linear infinite}
.sy-wave-b{bottom:calc(100% - 3px);-webkit-mask-size:90px 12px;mask-size:90px 12px;animation:sy-wave-b 3.8s linear infinite reverse}
@keyframes sy-wave{to{-webkit-mask-position:120px 100%;mask-position:120px 100%}}
@keyframes sy-wave-b{to{-webkit-mask-position:90px 100%;mask-position:90px 100%}}
@media (prefers-reduced-motion:reduce){.sy-wave{animation:none}}
`;

const reduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function Card({ item, lead, active, onActivate, onDeactivate }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(item.value);

  // Count the percentage up each time the card becomes active
  useEffect(() => {
    if (!active || reduceMotion()) {
      setShown(item.value);
      return;
    }
    let raf;
    const t0 = performance.now();
    const step = (t) => {
      const k = Math.min((t - t0) / 700, 1);
      setShown(Math.round(item.value * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, item.value]);

  const onMove = (e) => {
    if (reduceMotion()) return;
    const el = ref.current;
    if (!el) return;
    const b = el.getBoundingClientRect();
    const x = e.clientX - b.left;
    const y = e.clientY - b.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    el.style.setProperty("--ry", `${((x / b.width - 0.5) * 8).toFixed(2)}deg`);
    el.style.setProperty("--rx", `${((y / b.height - 0.5) * -8).toFixed(2)}deg`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    }
    onDeactivate();
  };

  return (
    <li
      ref={ref}
      tabIndex={0}
      onMouseEnter={onActivate}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onFocus={onActivate}
      onBlur={onDeactivate}
      style={{
        transform:
          "perspective(700px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translateY(var(--ty,0px))",
        "--ty": active ? "-3px" : "0px",
      }}
      className={`relative overflow-hidden rounded-lg bg-white outline-none transition-transform duration-150 ease-out focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2F6FCB] ${
        lead ? "col-span-2 lg:col-span-1 lg:row-span-2" : ""
      }`}
    >
      {/* Rising fill: 10px strip at rest, full card when active */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 transition-[height] duration-300 ease-in"
        style={{
          height: active ? "100%" : "10px",
          backgroundColor: ORANGE,
          backgroundImage: NOISE,
        }}
      >
        <span className={`sy-wave transition-opacity duration-300 ${active ? "opacity-100" : "opacity-0"}`} />
        <span className={`sy-wave sy-wave-b transition-opacity duration-300 ${active ? "opacity-100" : "opacity-0"}`} />
      </div>

      {/* Cursor spotlight */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-[2] transition-opacity duration-300 ${active ? "opacity-100" : "opacity-0"}`}
        style={{
          background: `radial-gradient(${lead ? 180 : 150}px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,${lead ? 0.12 : 0.28}), transparent 70%)`,
        }}
      />

      <div className={`relative flex h-full flex-col justify-between ${lead ? "p-3.5 sm:p-4" : "p-2.5 sm:p-3"}`}>
        <b
          className={`font-semibold leading-none transition-colors duration-300 ease-in ${
            lead ? "text-[64px] sm:text-[72px] tracking-[-0.03em]" : "text-[28px] sm:text-[30px]"
          } ${active ? "text-white" : "text-[#003D7A]"}`}
          style={{ fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif' }}
        >
          {shown}%
        </b>
        <span
          className={`font-medium sm:font-semibold leading-[1.3] transition-colors duration-300 ease-in ${
            lead ? "text-lg sm:text-[19px]" : "text-[12px] sm:text-[13px]"
          } ${active ? "text-white" : "text-[#1C1C1C]"}`}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {item.label}
        </span>
      </div>
    </li>
  );
}

export default function Symptoms({ className = "" }) {
  const [hovered, setHovered] = useState(null);
  // The first card is active until another one is hovered
  const activeIndex = hovered ?? 0;

  return (
    <section
      className={`relative w-full bg-[#2F6FCB] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-white font-ppmori ${className}`}
    >
      <style>{WAVE_CSS}</style>

      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-7 lg:grid-cols-[330px_1fr] lg:gap-12">
        <header>
          <p
            className="mb-3.5 flex items-center gap-2.5 text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.12em] text-white/90"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <i className="block h-[7px] w-[7px] rounded-full" style={{ background: ORANGE }} />
            Symptoms of
          </p>
          <h2
            className="text-[32px] sm:text-[40px] lg:text-[46px] font-semibold leading-[1.08] tracking-tight"
            style={{ fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif' }}
          >
            Organization
            <br />
            Challenges
          </h2>
        </header>

        <ul className="grid auto-rows-[140px] sm:auto-rows-[150px] grid-cols-2 gap-3 lg:auto-rows-auto lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:grid-rows-[repeat(2,180px)]">
          {ITEMS.map((item, i) => (
            <Card
              key={item.label}
              item={item}
              lead={i === 0}
              active={activeIndex === i}
              onActivate={() => setHovered(i)}
              onDeactivate={() => setHovered(null)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
