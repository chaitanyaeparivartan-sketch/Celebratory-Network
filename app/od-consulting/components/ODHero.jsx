"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import Header from "@/app/components/Common/Header";

const DEFAULT_CHIPS = [
  {
    id: 1,
    avatar: "/home/stats-image-1.webp",
    line1: "Guide transformation with",
    line2: "your people on board",
    bg: "bg-[#E5F2FF]",
    bullet: "bg-[#0284C7]",
    pos: "left-[2%] sm:left-[3%] xl:left-[4%] top-[195px] xl:top-[215px] max-[700px]:left-[4%] max-[700px]:top-[104px]",
    animName: "chipFloat1",
    animDuration: "5.8s",
    animDelay: "0s",
    parallax: { x: -14, y: -10 },
    speed: -90,
  },
  {
    id: 2,
    avatar: "/home/stats-image-2.webp",
    line1: "Align leadership teams on",
    line2: "one shared direction",
    bg: "bg-[#E6FAE1]",
    bullet: "bg-[#16A34A]",
    pos: "left-[18%] xl:left-[22%] top-[120px] sm:top-[126px] xl:top-[134px] max-[700px]:hidden",
    grow: true, // Expands into the full screen background photo!
    animName: "chipFloat2",
    animDuration: "5.2s",
    animDelay: "0.8s",
    parallax: { x: 10, y: -10 },
    speed: -40,
  },
  {
    id: 3,
    avatar: "/home/stats-image-3.webp",
    line1: "Move leaders from function to",
    line2: "enterprise thinking",
    bg: "bg-[#F5EBFF]",
    bullet: "bg-[#C026D3]",
    pos: "left-[54%] xl:left-[56%] top-[120px] sm:top-[126px] xl:top-[134px] max-[700px]:hidden",
    animName: "chipFloat3",
    animDuration: "6.4s",
    animDelay: "0.4s",
    parallax: { x: -10, y: -8 },
    speed: -100,
  },
  {
    id: 4,
    avatar: "/home/stats-image-4.webp",
    line1: "Build trust that",
    line2: "survives disagreement",
    bg: "bg-[#FFF0E6]",
    bullet: "bg-[#EA580C]",
    pos: "right-[2%] sm:right-[3%] xl:right-[4%] top-[195px] xl:top-[215px] max-[700px]:hidden",
    animName: "chipFloat4",
    animDuration: "5.5s",
    animDelay: "1.2s",
    parallax: { x: 14, y: -10 },
    speed: -80,
  },
  {
    id: 5,
    avatar: "/home/stats-image-5.webp",
    line1: "Evolve culture, keep",
    line2: "what makes you unique",
    bg: "bg-[#F5EBFF]",
    bullet: "bg-[#D946EF]",
    pos: "left-[3%] sm:left-[4%] xl:left-[5%] bottom-[48px] xl:bottom-[56px] max-[700px]:hidden",
    animName: "chipFloat5",
    animDuration: "6.2s",
    animDelay: "0.6s",
    parallax: { x: -12, y: 10 },
    speed: 90,
  },
  {
    id: 6,
    avatar: "/home/stats-image-6.webp",
    line1: "Work through conflict, keep",
    line2: "relationships strong",
    bg: "bg-[#FFF3DB]",
    bullet: "bg-[#F97316]",
    pos: "left-[36%] xl:left-[38%] bottom-[24px] xl:bottom-[32px] max-[700px]:hidden",
    animName: "chipFloat6",
    animDuration: "5.6s",
    animDelay: "1.5s",
    parallax: { x: 8, y: 12 },
    speed: 130,
  },
  {
    id: 7,
    avatar: "/home/stats-image-7.webp",
    line1: "Strengthen decision-making",
    line2: "and accountability",
    bg: "bg-[#E6FAE1]",
    bullet: "bg-[#16A34A]",
    pos: "right-[3%] sm:right-[4%] xl:right-[5%] bottom-[48px] xl:bottom-[56px] max-[700px]:right-[3%] max-[700px]:bottom-[40px]",
    animName: "chipFloat7",
    animDuration: "6.0s",
    animDelay: "0.3s",
    parallax: { x: 12, y: 10 },
    speed: 100,
  },
];

const clamp = (v) => Math.max(0, Math.min(1, v));
const ease = (a, b, v) => {
  const x = clamp((v - a) / (b - a));
  return x * x * x * (x * (x * 6 - 15) + 10);
};

export default function ODHero({
  badge = "Our Perspective",
  title = "Toward Organizational Development",
  lead = "We help organizations grow by understanding their structures, culture, relationships, leadership, and the invisible dynamics that shape how people work together.",
  bgImage = "/home/stats-image-2.webp",
  mobileBgImage = null,
  cards = null,
}) {
  const [chipsIn, setChipsIn] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const secRef = useRef(null);
  const stickyRef = useRef(null);
  const growRef = useRef(null);
  const veilRef = useRef(null);
  const bodyRef = useRef(null);
  const chipRefs = useRef([]);
  const pillRefs = useRef([]);
  const thumbRefs = useRef([]);

  const pRef = useRef(0);
  const goalRef = useRef(0);
  const runningRef = useRef(false);
  const startAnimRef = useRef(null);

  // Compute active cards list, ensuring growing card thumbnail matches the target background photo unless custom cards provide an explicit avatar
  const activeCards = useMemo(() => {
    const list = cards || DEFAULT_CHIPS;
    return list.map((card) => {
      if (card.grow && !cards) {
        return {
          ...card,
          avatar: bgImage,
        };
      }
      return card;
    });
  }, [cards, bgImage]);

  /* Float the chips in once the section is on screen */
  useEffect(() => {
    const sticky = stickyRef.current;
    if (!sticky) return;
    if (!("IntersectionObserver" in window)) {
      setChipsIn(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => setChipsIn(e.isIntersecting)),
      { threshold: 0.1 }
    );
    io.observe(sticky);
    return () => io.disconnect();
  }, []);

  /* Mouse parallax interaction */
  const handleMouseMove = (e) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    if (pRef.current > 0.05 || !stickyRef.current) return;
    const rect = stickyRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  /* Lock page scroll until bg image is fully added and expanded */
  useEffect(() => {
    const checkMobile = () => typeof window !== "undefined" && window.innerWidth < 768;

    const sec = secRef.current;
    const sticky = stickyRef.current;
    const grow = growRef.current;
    const veil = veilRef.current;
    const body = bodyRef.current;
    const growIdx = activeCards.findIndex((c) => c.grow);
    const gThumb = thumbRefs.current[growIdx];
    const gPill = pillRefs.current[growIdx];
    if (!sec || !sticky || !grow || !veil || !body || !gThumb || !gPill) return;

    const applyMobileState = () => {
      pRef.current = 1;
      goalRef.current = 1;
      runningRef.current = false;
      grow.style.left = "0px";
      grow.style.top = "0px";
      grow.style.width = "100%";
      grow.style.height = "100%";
      grow.style.borderRadius = "0px";
      grow.style.opacity = "1";
      veil.style.opacity = "0.75";
      body.style.setProperty("--c", "255,255,255");
      body.style.color = "rgb(255,255,255)";
      body.style.setProperty("--accent-color", "rgb(255,255,255)");
      body.style.transform = "none";
    };

    if (checkMobile()) {
      applyMobileState();
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      pRef.current = 1;
      const sr = sticky.getBoundingClientRect();
      const maxShift = sr.width < 640 ? Math.min(85, sr.height * 0.12) : Math.min(160, Math.max(70, sr.height * 0.17));
      body.style.transform = `translate3d(0, ${maxShift}px, 0)`;
      return;
    }

    const DUR = 0.85; // 850ms smooth transition
    let last = 0;
    let raf = 0;
    let initialThumbRect = null;

    const getThumbRect = () => {
      if (!initialThumbRect || pRef.current === 0) {
        const tr0 = gThumb.getBoundingClientRect();
        const sr0 = sticky.getBoundingClientRect();
        if (tr0.width > 0 && sr0.width > 0) {
          initialThumbRect = {
            x0: tr0.left - sr0.left,
            y0: tr0.top - sr0.top,
            w0: tr0.width,
            h0: tr0.height,
          };
        }
      }
      return initialThumbRect;
    };

    const paint = (p) => {
      if (checkMobile()) {
        applyMobileState();
        return;
      }

      const e = ease(0, 1, p);
      const sr = sticky.getBoundingClientRect();
      const W = sr.width;
      const H = sr.height;

      const rect = getThumbRect();
      const x0 = rect ? rect.x0 : W * 0.22;
      const y0 = rect ? rect.y0 : 130;
      const w0 = rect ? rect.w0 : 48;
      const h0 = rect ? rect.h0 : 48;

      grow.style.left = (x0 * (1 - e)).toFixed(2) + "px";
      grow.style.top = (y0 * (1 - e)).toFixed(2) + "px";
      grow.style.width = (w0 + (W - w0) * e).toFixed(2) + "px";
      grow.style.height = (h0 + (H - h0) * e).toFixed(2) + "px";
      grow.style.borderRadius = ((1 - e) * 12).toFixed(2) + "px";

      const on = e > 0.001;
      grow.style.opacity = on ? "1" : "0";
      gThumb.style.opacity = on ? "0" : "1";
      veil.style.opacity = ease(0.25, 0.8, p).toFixed(4);

      const ink = ease(0.5, 0.9, p);
      const c = Math.round(13 + 242 * ink);
      const c2 = Math.round(15 + 240 * ink);
      body.style.setProperty("--c", `${c},${c},${c2}`);
      body.style.color = `rgb(${c},${c},${c2})`;

      const rAcc = 255;
      const gAcc = Math.round(94 + (255 - 94) * ink);
      const bAcc = Math.round(20 + (255 - 20) * ink);
      body.style.setProperty("--accent-color", `rgb(${rAcc},${gAcc},${bAcc})`);

      // Smoothly move content towards bottom as hero section image expands
      const maxShift = sr.width < 640 ? Math.min(85, H * 0.12) : Math.min(160, Math.max(70, H * 0.17));
      const textShiftY = (ease(0.12, 0.95, p) * maxShift).toFixed(2);
      body.style.transform = `translate3d(0, ${textShiftY}px, 0)`;

      const co = (1 - ease(0, 0.45, p)).toFixed(3);
      chipRefs.current.forEach((el, k) => {
        if (!el) return;
        if (k === growIdx) {
          if (gPill) gPill.style.opacity = co;
        } else {
          el.style.opacity = co;
        }
        if (activeCards[k]) {
          el.style.transform = `translate3d(0,${(p * activeCards[k].speed).toFixed(1)}px,0)`;
        }
      });
    };

    const frame = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000 || 0.016);
      last = now;
      const d = dt / DUR;
      let p = pRef.current;
      const goal = goalRef.current;

      p = goal > p ? Math.min(goal, p + d) : Math.max(goal, p - d);
      pRef.current = p;
      paint(p);

      if (p === goal) {
        runningRef.current = false;
        return;
      }
      raf = requestAnimationFrame(frame);
    };

    const startAnim = (newGoal) => {
      if (checkMobile()) return;
      goalRef.current = newGoal;
      if (pRef.current !== newGoal && !runningRef.current) {
        runningRef.current = true;
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    };
    startAnimRef.current = startAnim;

    // Check initial scroll position
    if (checkMobile()) {
      applyMobileState();
    } else if (window.scrollY > 50) {
      pRef.current = 1;
      goalRef.current = 1;
      paint(1);
    } else {
      pRef.current = 0;
      goalRef.current = 0;
      paint(0);
    }

    /* Wheel interception: NO page scroll until bg image is fully added (Desktop only) */
    const onWheel = (e) => {
      if (checkMobile()) return;
      const scrollY = window.scrollY;

      // When at top of page and background is NOT yet added
      if (scrollY <= 5 && pRef.current < 1) {
        if (e.deltaY > 0) {
          e.preventDefault();
          startAnim(1);
        }
        return;
      }

      // While animation is currently in flight at top of page
      if (runningRef.current && scrollY <= 5) {
        e.preventDefault();
        return;
      }

      // When at top of page and background IS added, scroll UP reverses back to chips
      if (scrollY <= 5 && pRef.current >= 1 && e.deltaY < -15) {
        e.preventDefault();
        startAnim(0);
        return;
      }
    };

    /* Touch interception for mobile */
    let touchStartY = 0;
    const onTouchStart = (e) => {
      if (checkMobile()) return;
      touchStartY = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      if (checkMobile()) return;
      const scrollY = window.scrollY;
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (scrollY <= 5 && pRef.current < 1 && deltaY > 10) {
        if (e.cancelable) e.preventDefault();
        startAnim(1);
      } else if (runningRef.current && scrollY <= 5) {
        if (e.cancelable) e.preventDefault();
      } else if (scrollY <= 5 && pRef.current >= 1 && deltaY < -20) {
        if (e.cancelable) e.preventDefault();
        startAnim(0);
      }
    };

    /* Keyboard navigation guard */
    const onKeyDown = (e) => {
      if (checkMobile()) return;
      if (window.scrollY <= 5 && pRef.current < 1) {
        if (["ArrowDown", "PageDown", " "].includes(e.key)) {
          e.preventDefault();
          startAnim(1);
        }
      }
    };

    /* Hard scroll guard: do not allow page to scroll away before bg is added */
    const onScroll = () => {
      if (checkMobile()) return;
      if (pRef.current < 1 && window.scrollY > 0) {
        window.scrollTo(0, 0);
        startAnim(1);
      }
    };

    const handleResize = () => {
      if (checkMobile()) {
        applyMobileState();
      } else {
        initialThumbRect = null;
        paint(pRef.current);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(raf);
    };
  }, [activeCards]);

  return (
    <section
      id="intro"
      ref={secRef}
      aria-labelledby="intro-title"
      className="relative h-screen bg-white text-center font-sans overflow-hidden max-md:overflow-visible max-md:z-30 motion-reduce:h-auto max-md:h-[60vh] max-md:min-h-0"
    >
      {/* Floating Keyframes Definition — subtle & organic floating physics */}
      <style>{`
        @keyframes chipFloat1 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(3px, -7px, 0) rotate(-0.4deg); }
        }
        @keyframes chipFloat2 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(-3px, -7px, 0) rotate(0.5deg); }
        }
        @keyframes chipFloat3 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(3px, -6px, 0) rotate(-0.4deg); }
        }
        @keyframes chipFloat4 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(-3px, -7px, 0) rotate(0.4deg); }
        }
        @keyframes chipFloat5 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(3px, -6px, 0) rotate(0.4deg); }
        }
        @keyframes chipFloat6 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(-3px, -7px, 0) rotate(-0.4deg); }
        }
        @keyframes chipFloat7 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(3px, -6px, 0) rotate(0.5deg); }
        }
      `}</style>

      {/* Hero stage */}
      <div
        ref={stickyRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="isolate relative flex h-full w-full flex-col overflow-hidden max-md:overflow-visible bg-white motion-reduce:min-h-screen"
      >
        {/* Background that the thumbnail grows into */}
        <div
          ref={growRef}
          className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden max-md:!opacity-100 max-md:!inset-0 max-md:!w-full max-md:!h-full max-md:!rounded-none opacity-0 motion-reduce:opacity-100"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <picture className="absolute inset-0 h-full w-full">
            {mobileBgImage && (
              <source media="(max-width: 767px)" srcSet={mobileBgImage} />
            )}
            <img
              src={bgImage}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover object-center max-md:object-bottom"
            />
          </picture>
          <div
            ref={veilRef}
            className="absolute inset-0 max-md:!opacity-90 opacity-0 [background:linear-gradient(0deg,rgba(0,0,0,.85)_0%,rgba(0,0,0,.45)_55%,rgba(0,0,0,.35)_100%)] motion-reduce:opacity-100"
          />
        </div>

        {/* Pinned Header from Home page */}
        <div className="w-full shrink-0 z-50 text-left">
          <Header isFloating={false} />
        </div>

        {/* Floating cards around the screen matching Home Page */}
        <div className="pointer-events-none absolute inset-0 max-w-[1783px] mx-auto z-[1] motion-reduce:hidden max-md:hidden">
          {activeCards.map((card, index) => {
            const parallaxX = mousePos.x * card.parallax.x;
            const parallaxY = mousePos.y * card.parallax.y;

            return (
              <div
                key={card.id}
                ref={(el) => (chipRefs.current[index] = el)}
                onClick={() => {
                  if (card.grow && startAnimRef.current) {
                    startAnimRef.current(1);
                  }
                }}
                className={`absolute text-left will-change-[transform,opacity] ${card.pos} ${
                  card.grow ? "pointer-events-auto cursor-pointer" : ""
                }`}
              >
                <div
                  style={{
                    transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0)`,
                    transition: "transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)",
                  }}
                  className={`transition-all duration-700 ease-[cubic-bezier(.2,.8,.2,1)] ${
                    chipsIn ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  }`}
                >
                  {/* Continuous Floating Physics Container */}
                  <div
                    className="flex items-center gap-2 will-change-transform transition-transform duration-300 ease-out hover:scale-105"
                    style={{
                      animation: `${card.animName} ${card.animDuration} ease-in-out ${card.animDelay} infinite`,
                    }}
                  >
                    {/* Avatar Image */}
                    <div
                      ref={(el) => (thumbRefs.current[index] = el)}
                      className="relative w-[44px] h-[44px] xl:w-[48px] xl:h-[48px] rounded-[10px] xl:rounded-[12px] overflow-hidden shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.06)] bg-gray-100 hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow"
                    >
                      <Image
                        src={card.avatar}
                        alt=""
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>

                    {/* Pastel Pill Card */}
                    <div
                      ref={(el) => (pillRefs.current[index] = el)}
                      className={`flex items-center gap-2 px-3 py-2 xl:px-3.5 xl:py-2.5 rounded-[10px] xl:rounded-[12px] ${card.bg} shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] border border-white/60 transition-all duration-300`}
                    >
                      <span
                        className={`w-2 h-2 rounded-[2px] ${card.bullet} shrink-0`}
                      />
                      <span className="font-['Inter',sans-serif] text-[11.5px] xl:text-[13px] font-medium text-[#1E293B] leading-[1.3] whitespace-nowrap block text-left">
                        <span>{card.line1}</span>
                        <br />
                        <span>{card.line2}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Copy */}
        <div
          ref={bodyRef}
          className="relative z-[2] flex flex-1 flex-col items-center justify-center max-md:justify-end px-4 sm:px-8 pb-12 sm:pb-10 max-md:pb-6 max-md:pt-4 text-center text-[rgb(var(--c))] [--c:13,13,15] [--accent-color:#FF5E14] max-md:!text-white max-md:[--c:255,255,255] max-md:[--accent-color:#ffffff] motion-reduce:[--c:255,255,255] motion-reduce:[--accent-color:#ffffff] will-change-transform"
        >
          <p className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] md:text-[14px] font-medium tracking-[0.24px] uppercase font-['Inter',sans-serif] mb-2 sm:mb-3 opacity-90 max-md:text-white/90">
            <span className="w-1.5 h-1.5 rounded-[1px] bg-[#FF5E14] shrink-0" />
            {badge}
          </p>
          <h2
            id="intro-title"
            className="mx-auto mb-3 sm:mb-[22px] max-w-[16em] text-balance font-['PP_Mori',sans-serif] text-3xl sm:text-4xl md:text-[48px] lg:text-[54px] font-semibold leading-[1.08] tracking-[-.035em] text-center [&_span]:!text-[var(--accent-color)]"
          >
            {title}
          </h2>
          <p className="mx-auto max-w-[44em] text-[14.5px] sm:text-[15.5px] md:text-[16.5px] font-['Inter',sans-serif] font-normal leading-[1.6] opacity-[.92] max-md:text-white/90 text-center">
            {lead}
          </p>
        </div>
      </div>
    </section>
  );
}
