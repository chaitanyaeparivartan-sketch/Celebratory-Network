"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * WeGrow — values carousel section
 */

const DEFAULT_ITEMS = [
  {
    tab: "Passion",
    title: "Passion and ownership",
    body: "We care deeply about our work and take personal ownership of the impact we create.",
    image: "/about/grow-image-1.webp",
    mobileImage: "/about/grow-image-1-clean.webp",
  },
  {
    tab: "Walk the talk",
    title: "We walk the talk",
    body: "Our actions reflect our values, our commitments and the change we want to create.",
    image: "/about/grow-image-2.webp",
    mobileImage: "/about/grow-image-2-clean.webp",
  },
  {
    tab: "Committed",
    title: "Committed to every client",
    body: "We stay with each engagement from the first conversation to the lasting result.",
    image: "/about/grow-image-3.webp",
    mobileImage: "/about/grow-image-3-clean.webp",
  },
  {
    tab: "Self-driven",
    title: "Self-driven by nature",
    body: "We take the initiative, set our own bar and keep raising it without being asked.",
    image: "/about/grow-image-4.webp",
    mobileImage: "/about/grow-image-4-clean.webp",
  },
  {
    tab: "Curious",
    title: "Always curious",
    body: "We ask better questions, learn from every project and share what we find.",
    image: "/about/grow-image-5.webp",
    mobileImage: "/about/grow-image-5-clean.webp",
  },
  {
    tab: "Impact",
    title: "Impact that lasts",
    body: "We measure our work by the change it leaves behind in people and organisations.",
    image: "/about/grow-image-6.webp",
    mobileImage: "/about/grow-image-6-clean.webp",
  },
];

const EASE = "ease-[cubic-bezier(.22,.8,.24,1)]";

export default function WeGrow({ items = DEFAULT_ITEMS, buttonHref = "#network", autoScrollInterval = 4000 }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const stageRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const tabRefs = useRef([]);

  const drag = useRef({ down: false, moved: false, startX: 0, dx: 0 });
  const [dragging, setDragging] = useState(false);

  // Auto-scroll through cards every interval (loops seamlessly)
  useEffect(() => {
    if (isPaused || dragging) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, autoScrollInterval);

    return () => clearInterval(timer);
  }, [isPaused, dragging, items.length, current, autoScrollInterval]);

  // Centre the active card in the stage
  const center = useCallback(() => {
    const stage = stageRef.current;
    const track = trackRef.current;
    const card = cardRefs.current[current];
    if (!stage || !track || !card) return;
    const offset = stage.clientWidth / 2 - (card.offsetLeft + card.offsetWidth / 2);
    track.style.transform = `translate3d(${offset}px,0,0)`;
  }, [current]);

  useLayoutEffect(center, [center]);

  useEffect(() => {
    window.addEventListener("resize", center);
    window.addEventListener("load", center);
    return () => {
      window.removeEventListener("resize", center);
      window.removeEventListener("load", center);
    };
  }, [center]);

  // Keep the active tab visible inside the tab bar (scrolls only the bar, never the page)
  useEffect(() => {
    const tab = tabRefs.current[current];
    const bar = tab?.parentNode;
    if (bar && bar.scrollWidth > bar.clientWidth) {
      const targetLeft = tab.offsetLeft - (bar.clientWidth - tab.offsetWidth) / 2;
      if (typeof bar.scrollTo === "function") {
        bar.scrollTo({ left: targetLeft, behavior: "smooth" });
      } else {
        bar.scrollLeft = targetLeft;
      }
    }
  }, [current]);

  const go = useCallback(
    (i, focusTab = false) => {
      const next = Math.max(0, Math.min(items.length - 1, i));
      setCurrent(next);
      if (focusTab) tabRefs.current[next]?.focus();
    },
    [items.length]
  );

  // Drag / swipe
  useEffect(() => {
    const onMove = (e) => {
      const d = drag.current;
      if (!d.down) return;
      d.dx = e.clientX - d.startX;
      if (Math.abs(d.dx) > 6) {
        d.moved = true;
        setDragging(true);
      }
    };
    const onUp = () => {
      const d = drag.current;
      if (!d.down) return;
      d.down = false;
      setDragging(false);
      if (Math.abs(d.dx) > 60) setCurrent((c) => Math.max(0, Math.min(items.length - 1, c + (d.dx < 0 ? 1 : -1))));
      setTimeout(() => (d.moved = false), 0);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [items.length]);

  const onPointerDown = (e) => {
    drag.current = { down: true, moved: false, startX: e.clientX, dx: 0 };
  };

  const onTabKeyDown = (e) => {
    const keys = {
      ArrowRight: current + 1,
      ArrowLeft: current - 1,
      Home: 0,
      End: items.length - 1,
    };
    if (e.key in keys) {
      e.preventDefault();
      go(keys[e.key], true);
    }
  };

  const focusRing =
    "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-white";

  return (
    <section
      aria-labelledby="we-grow-title"
      className="overflow-hidden bg-[#FF5E14] pb-[110px] pt-20 text-white antialiased max-[700px]:pb-[72px] max-[700px]:pt-14"
    >
      {/* ---------- Header ---------- */}
      <div className="flex flex-col items-center px-5 text-center">
        <span className="inline-flex items-center gap-2 font-inter text-[12px] sm:text-[13px] md:text-[14px] font-medium uppercase leading-[18px] tracking-[0.24px] before:h-2 before:w-2 before:rounded-[2px] before:bg-white before:content-['']">
          We grow
        </span>

        {/* Always 2 lines; scales down with the viewport */}
        <h2
          id="we-grow-title"
          className="mt-[14px] whitespace-nowrap font-ppmori text-[clamp(30px,4.6vw,52px)] font-semibold leading-[0.923] tracking-[-0.015em]"
        >
          We grow because
          <br />
          we have
        </h2>

        {/* Always 2 lines (natural wrapping below 480px) */}
        <p className="mt-3 font-inter text-[15px] sm:text-[16px] md:text-[17px] font-normal leading-[1.17]">
          <span className="block whitespace-nowrap max-[480px]:inline max-[480px]:whitespace-normal">
            Our calling is meaningful work that creates impact in the
          </span>{" "}
          <span className="block whitespace-nowrap max-[480px]:inline max-[480px]:whitespace-normal">
            journeys of organisations, communities and individuals.
          </span>
        </p>
      </div>

      {/* ---------- Carousel ---------- */}
      <div
        ref={stageRef}
        onPointerDown={onPointerDown}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className={`mt-[60px] touch-pan-y max-[700px]:mt-10 ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
      >
        <div
          ref={trackRef}
          className={`flex w-max gap-12 transition-transform duration-700 ${EASE} will-change-transform motion-reduce:transition-none max-[700px]:gap-4`}
        >
          {items.map((item, i) => {
            const active = i === current;
            return (
              <article
                key={item.title}
                id={`we-grow-card-${i}`}
                ref={(el) => (cardRefs.current[i] = el)}
                aria-label={item.title}
                aria-hidden={!active}
                onClick={() => {
                  if (!drag.current.moved && !active) go(i);
                }}
                className={`relative h-[460px] w-[1021px] shrink-0 select-none overflow-hidden rounded-[30px] bg-[#AC3600] transition-opacity duration-500 motion-reduce:transition-none max-[1100px]:w-[min(86vw,1021px)] max-[700px]:h-[380px] max-[480px]:h-[350px] ${
                  active ? "opacity-100" : "opacity-30"
                }`}
              >
                {/* text */}
                <div className="relative z-10 absolute left-[130px] top-1/2 -translate-y-1/2 max-[1100px]:left-[clamp(32px,8vw,130px)] max-[700px]:left-6 max-[700px]:right-6 max-[700px]:top-6 max-[700px]:translate-y-0">
                  <h3 className="sm:whitespace-nowrap font-ppmori text-[clamp(20px,2.5vw,30px)] font-semibold leading-[1.2] sm:leading-[34.96px] tracking-[-0.304px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 sm:mt-[14px] max-w-[320px] font-inter text-[14px] sm:text-[16px] md:text-[17px] font-normal leading-[1.4] sm:leading-[26.88px]">
                    {item.body}
                  </p>
                </div>

                {/* illustration image from /AboutUs */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-0 top-0 bottom-0 h-full flex items-center justify-end select-none max-[700px]:top-[115px] max-[700px]:bottom-0 max-[700px]:left-0 max-[700px]:w-full max-[700px]:justify-center max-[700px]:h-auto"
                >
                  {/* Desktop Image with original glow */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={592}
                    height={460}
                    priority={i === 0}
                    className={`h-full w-auto object-contain object-right transition-transform duration-700 ${EASE} motion-reduce:transition-none max-[700px]:hidden ${
                      active ? "scale-100" : "scale-[0.96]"
                    }`}
                  />
                  {/* Mobile Image without background shade */}
                  <Image
                    src={item.mobileImage || item.image}
                    alt={item.title}
                    width={592}
                    height={460}
                    priority={i === 0}
                    className={`min-[701px]:hidden h-full w-auto object-contain object-center transition-transform duration-700 ${EASE} motion-reduce:transition-none -translate-x-[5.5%] ${
                      active ? "scale-100" : "scale-[0.96]"
                    }`}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* ---------- Tabs ---------- */}
      <div
        className="mt-4 sm:mt-6 w-full px-3 sm:px-5"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          role="tablist"
          aria-label="Our values"
          className="mx-auto flex h-[44px] sm:h-[50px] md:h-[58px] lg:h-[60.5px] w-[820px] max-w-full items-center gap-1 sm:gap-1.5 overflow-x-auto rounded-full bg-[rgba(22,22,22,0.16)] p-1 sm:p-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden touch-pan-x select-none"
        >
          {items.map((item, i) => {
            const selected = i === current;
            return (
              <button
                key={item.tab}
                ref={(el) => (tabRefs.current[i] = el)}
                id={`we-grow-tab-${i}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`we-grow-card-${i}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => go(i)}
                onKeyDown={onTabKeyDown}
                className={`flex-[1_0_auto] h-full flex items-center justify-center cursor-pointer whitespace-nowrap rounded-full border-0 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-center font-inter text-[12px] sm:text-[13.5px] md:text-[15px] font-semibold leading-none transition-all duration-300 motion-reduce:transition-none ${focusRing} ${
                  selected
                    ? "bg-white text-[#242424] shadow-sm"
                    : "bg-transparent text-white/90 hover:text-white"
                }`}
              >
                {item.tab}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

