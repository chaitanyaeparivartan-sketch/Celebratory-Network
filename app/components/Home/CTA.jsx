"use client";

import { useEffect, useRef, useState } from "react";

/**
 * CTA
 * Orange section with a rounded blue card: photo · heading · text · button · slanted stripes.
 * Requires Tailwind CSS v3.x (arbitrary values). Add the fonts to your project:
 * <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600&family=Inter:wght@400;500&display=swap" rel="stylesheet">
 */

// Wide orange bands with thin gaps, leaning ~14°, soft edges and a bright middle
const LINE = "clamp(6px,.8vw,20px)";
const GAP = "clamp(1.5px,.15vw,4px)";
const STRIPES_BG = `repeating-linear-gradient(104deg, #FF5E14 0 ${LINE}, transparent ${LINE} calc(${LINE} + ${GAP}))`;
const STRIPES_MASK =
  "linear-gradient(104deg, transparent 0 31%, rgba(0,0,0,.5) 31%, #000 55%, rgba(0,0,0,.25) 100%)";

// Grey placeholder shown until you pass your own `image`
const PLACEHOLDER =
  "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23e8edf4'/%3E%3Cstop offset='1' stop-color='%2393a6bf'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23g)'/%3E%3C/svg%3E";

export default function CTA({
  title = "Take the first step toward lasting organisational change",
  text = "Get a personalised look at how Celebratory Network can work for your organisation.",
  buttonLabel = "Talk to us",
  href = "#contact",
  image = "/CTA/cta-office.jpg",
  imageAlt = "Two colleagues standing in a bright office corridor",
}) {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Reveal once when the banner scrolls into view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Smooth-scroll to the target section if it exists on the page
  const handleClick = (e) => {
    if (!href.startsWith("#")) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const reveal = (on) =>
    `transition duration-700 ease-[cubic-bezier(.22,.8,.24,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
      on ? "translate-y-0 opacity-100" : "translate-y-[18px] opacity-0"
    }`;

  return (
    <section
      ref={sectionRef}
      className="bg-[#FF5E14] px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-10 md:py-12 font-['Inter',system-ui,sans-serif]"
    >
      <div className="relative isolate mx-auto grid max-w-[1680px] grid-cols-1 items-center gap-y-[22px] overflow-hidden rounded-[clamp(14px,1.2vw,28px)] bg-[#205A9D] p-[clamp(6px,.75vw,16px)] pb-7 md:grid-cols-[clamp(200px,18vw,440px)_1fr] md:gap-x-[clamp(24px,2.5vw,70px)] md:gap-y-0 md:pb-[clamp(6px,.75vw,16px)]">
        {/* ---------- Image ---------- */}
        <div
          style={{ transitionDelay: "0ms" }}
          className={`aspect-[16/10] self-stretch overflow-hidden rounded-[clamp(8px,.72vw,19px)] bg-[#cfd8e6] md:aspect-[4/3] ${reveal(inView)}`}
        >
          <img src={image} alt={imageAlt} className="block h-full w-full object-cover" />
        </div>

        {/* ---------- Copy ---------- */}
        <div className="relative z-[2] px-3 text-white md:px-0 md:pr-[clamp(16px,2vw,60px)]">
          <h2
            style={{ transitionDelay: "100ms" }}
            className={`mb-[.55em] max-w-[14em] font-['Figtree',sans-serif] text-[clamp(24px,2.2vw,60px)] font-medium leading-[1.12] tracking-[-0.02em] ${reveal(inView)}`}
          >
            {title}
          </h2>
          <p
            style={{ transitionDelay: "200ms" }}
            className={`mb-[1.7em] max-w-[42em] text-[clamp(12.5px,.85vw,22px)] leading-[1.5] text-white/95 ${reveal(inView)}`}
          >
            {text}
          </p>
          <div style={{ transitionDelay: "300ms" }} className={reveal(inView)}>
            <a
              href={href}
              onClick={handleClick}
              className="inline-block rounded-[.45em] bg-[#FF5E14] px-[1.5em] py-[.8em] font-['Figtree',sans-serif] text-[clamp(13px,.9vw,23px)] font-medium text-white no-underline transition duration-300 hover:-translate-y-0.5 hover:bg-[#e04e0a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-white"
            >
              {buttonLabel}
            </a>
          </div>
        </div>

        {/* ---------- Slanted stripes ---------- */}
        <div
          aria-hidden="true"
          style={{
            background: STRIPES_BG,
            WebkitMaskImage: STRIPES_MASK,
            maskImage: STRIPES_MASK,
            transitionDelay: "250ms",
          }}
          className={`pointer-events-none absolute bottom-0 right-0 top-auto z-[1] h-[120px] w-[90px] transition duration-[1100ms] ease-[cubic-bezier(.22,.8,.24,1)] motion-reduce:translate-x-0 motion-reduce:opacity-100 motion-reduce:transition-none md:top-0 md:h-auto md:w-[clamp(100px,10vw,280px)] ${
            inView ? "translate-x-0 opacity-100" : "translate-x-[40%] opacity-0"
          }`}
        />
      </div>
    </section>
  );
}