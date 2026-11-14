"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * CTA (Common Component)
 * Orange section with a rounded blue card: photo · heading · text · button · slanted stripes.
 */

// 8+ slanted orange stripes (#FF5E14) leaning at 14.04°, with exact Figma opacity curve
const STRIPE_OPACITIES = [0.50, 0.70, 0.80, 0.90, 0.70, 0.70, 0.50, 0.30, 0.18];

export default function CTA({
  title = "Take the first step toward lasting organisational change",
  text = "Get a personalised look at how Celebratory Network can work for your organisation.",
  buttonLabel = "Talk to us",
  href = "#contact",
  image = "/Common/CTA/cta-office.jpg",
  imageAlt = "Two colleagues standing in a bright office corridor",
  className = "",
}) {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Reveal once when the banner scrolls into view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      const id = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(id);
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
      className={`bg-[#FF5E14] px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 font-['Inter',system-ui,sans-serif] ${className}`}
    >
      <div className="relative isolate mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-y-[22px] overflow-hidden rounded-[clamp(14px,1.2vw,24px)] bg-[#205A9D] p-[clamp(8px,1vw,16px)] pb-7 md:grid-cols-[clamp(200px,24vw,340px)_1fr] md:gap-x-[clamp(24px,2.5vw,50px)] md:gap-y-0 md:pb-[clamp(8px,1vw,16px)]">
        {/* ---------- Image ---------- */}
        <div
          style={{ transitionDelay: "0ms" }}
          className={`aspect-[16/10] self-stretch overflow-hidden rounded-[clamp(8px,.72vw,16px)] bg-[#cfd8e6] md:aspect-[4/3] group/img ${reveal(inView)}`}
        >
          <Image
            src={image}
            alt={imageAlt}
            width={480}
            height={360}
            className="block h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
          />
        </div>

        {/* ---------- Copy ---------- */}
        <div className="relative z-[2] px-3 text-white md:px-0 md:pr-[clamp(16px,2vw,60px)]">
          <h2
            style={{ transitionDelay: "100ms" }}
            className={`mb-[.55em] max-w-[14em] font-['Figtree',sans-serif] text-[clamp(22px,2vw,38px)] font-medium leading-[1.15] tracking-[-0.02em] ${reveal(inView)}`}
          >
            {title}
          </h2>
          <p
            style={{ transitionDelay: "200ms" }}
            className={`mb-[1.7em] max-w-[36em] text-[clamp(12.5px,.85vw,17px)] leading-[1.5] text-white/95 ${reveal(inView)}`}
          >
            {text}
          </p>
          <div style={{ transitionDelay: "300ms" }} className={reveal(inView)}>
            <a
              href={href}
              onClick={handleClick}
              className="inline-block rounded-[.45em] bg-[#FF5E14] px-[1.5em] py-[.8em] font-['Figtree',sans-serif] text-[clamp(13px,.9vw,16px)] font-medium text-white no-underline transition duration-300 hover:-translate-y-0.5 hover:bg-[#e04e0a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-white"
            >
              {buttonLabel}
            </a>
          </div>
        </div>

        {/* ---------- Slanted stripes matching Figma exactly (desktop / tablet only) ---------- */}
        <div
          aria-hidden="true"
          className={`hidden md:block pointer-events-none absolute inset-y-0 right-0 z-[1] h-full w-[210px] md:w-[250px] overflow-hidden transition duration-[1100ms] ease-[cubic-bezier(.22,.8,.24,1)] motion-reduce:translate-x-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
            inView ? "translate-x-0 opacity-100" : "translate-x-[30%] opacity-0"
          }`}
          style={{ transitionDelay: "250ms" }}
        >
          <div
            className="absolute -top-[35%] -bottom-[35%] -right-3 sm:-right-4 flex items-stretch gap-[3.5px] sm:gap-[4.5px]"
            style={{
              transform: "skewX(-14.04deg)",
              transformOrigin: "center right",
            }}
          >
            {STRIPE_OPACITIES.map((opacity, idx) => (
              <div
                key={idx}
                className="w-[12px] sm:w-[15.5px] shrink-0 bg-[#FF5E14]"
                style={{ opacity }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

