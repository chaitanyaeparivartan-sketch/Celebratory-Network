"use client";

import { useEffect, useRef } from "react";
import Header from "@/app/components/Common/Header";

export default function Hero() {
  const secRef = useRef(null);
  const bgRef = useRef(null);
  const imgRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    const sec = secRef.current;
    const bg = bgRef.current;
    const img = imgRef.current;
    const body = bodyRef.current;

    if (!sec || !bg || !img || !body) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      bg.style.opacity = "1";
      body.style.setProperty("--c", "255, 255, 255");
      body.style.color = "rgb(255, 255, 255)";
      return;
    }

    function clamp(v) {
      return Math.max(0, Math.min(1, v));
    }

    /* smootherstep */
    function ease(a, b, v) {
      const x = clamp((v - a) / (b - a));
      return x * x * x * (x * (x * 6 - 15) + 10);
    }

    let target = 0;
    let current = 0;
    let last = 0;
    let running = false;
    let rafId = null;

    function readTarget() {
      if (!sec) return;
      const r = sec.getBoundingClientRect();
      const vh = window.innerHeight;
      target = clamp(-r.top / (r.height - vh));
    }

    function paint(t) {
      if (!bg || !img || !body) return;
      const show = ease(0.08, 0.6, t);
      const ink = ease(0.3, 0.62, t);

      bg.style.opacity = show.toFixed(4);
      img.style.transform = `translate3d(0, ${((0.5 - t) * 120).toFixed(2)}px, 0) scale(1.2)`;

      const c = Math.round(13 + 242 * ink);
      const c2 = Math.round(15 + 240 * ink);
      body.style.setProperty("--c", `${c}, ${c}, ${c2}`);
      body.style.color = `rgb(${c}, ${c}, ${c2})`;
    }

    function frame(now) {
      const dt = Math.min(0.05, (now - last) / 1000 || 0.016);
      last = now;
      current += (target - current) * (1 - Math.exp(-dt * 5));

      if (Math.abs(target - current) < 0.0003) {
        current = target;
        paint(current);
        running = false;
        return;
      }

      paint(current);
      rafId = requestAnimationFrame(frame);
    }

    function kick() {
      readTarget();
      if (!running) {
        running = true;
        last = performance.now();
        rafId = requestAnimationFrame(frame);
      }
    }

    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick);

    readTarget();
    current = target;
    paint(current);

    return () => {
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <section
      ref={secRef}
      id="intro"
      aria-labelledby="intro-title"
      className="relative bg-white text-center"
      style={{ height: "280vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col isolate">
        {/* Background photo & overlay */}
        <div
          ref={bgRef}
          className="absolute inset-0 -z-10 opacity-0 pointer-events-none will-change-[opacity]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imgRef}
            src="/family-businesses/hero-meeting.jpg"
            alt="Family Businesses Meeting"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
            style={{
              objectPosition: "70% 55%",
              transform: "translate3d(0, 0, 0) scale(1.2)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, .35), rgba(0, 0, 0, 0) 50%), rgba(0, 0, 0, .55)",
            }}
          />
        </div>

        {/* Pinned Header throughout the entire Hero section */}
        <div className="w-full shrink-0 z-50 text-left">
          <Header isFloating={false} />
        </div>

        {/* Text body */}
        <div
          ref={bodyRef}
          className="flex-1 flex flex-col items-center justify-center px-6 sm:px-8 pb-10 transition-colors duration-75"
          style={{
            color: "rgb(var(--c, 13, 13, 15))",
          }}
        >
          <p className="inline-flex items-center gap-3 text-[14px] sm:text-[15px] font-medium tracking-[0.02em] uppercase font-ppmori">
            <span
              className="w-3 h-3 rounded-[3px] shrink-0"
              style={{ backgroundColor: "#FF5A1F" }}
            />
            Our Perspective
          </p>

          <h2
            id="intro-title"
            className="font-ppmori font-medium text-[34px] sm:text-[46px] md:text-[58px] lg:text-[76px] leading-[1.08] tracking-[-0.035em] max-w-[15em] mx-auto my-[24px] sm:my-[30px] text-balance"
          >
            Toward Organizational Development
          </h2>

          <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-[1.6] max-w-[44em] mx-auto opacity-90 font-ppmori">
            We help organizations grow by understanding their structures, culture,
            relationships, leadership, and the invisible dynamics that shape how
            people work together.
          </p>
        </div>
      </div>
    </section>
  );
}
