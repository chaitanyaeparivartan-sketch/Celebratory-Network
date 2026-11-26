"use client";

import { useState } from "react";
import Reveal from "@/app/components/Common/Reveal";

const OUTCOMES = [
  {
    title: "Clarity and Agency",
    body: "Leaders execute complex mandates with minimized personalization and enhanced intentional posture.",
  },
  {
    title: "Reduced Interpersonal Friction",
    body: "Transforming interpersonal conflict from personal confrontation into systemic inquiry, unlocking collaborative alignment across levels.",
  },
  {
    title: "Boundary Collaboration",
    body: "Bridging cross-functional divides and clarifying role authority to eliminate organizational silos and friction.",
  },
  {
    title: "Strategic Decision-Making",
    body: "Anchoring high-stakes choices in systemic perspective, mitigating organizational blind spots and reactive leadership habits.",
  },
];

export default function Outcomes() {
  const [open, setOpen] = useState(0); // index of the open row, or null for all closed

  return (
    <section className="bg-white text-[#1a1a1a] px-5 sm:px-6 py-20 sm:py-28 relative overflow-hidden">
      {/* Ambient warm background accent lights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 w-[440px] h-[440px] rounded-full bg-[#FF5E14]/[0.05] blur-[130px] animate-pulse"
        style={{ animationDuration: "9s" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 w-[440px] h-[440px] rounded-full bg-[#205A9D]/[0.04] blur-[130px] animate-pulse"
        style={{ animationDuration: "11s" }}
      />

      <div className="mx-auto max-w-[1080px] relative z-10">
        {/* heading */}
        <Reveal
          direction="up"
          duration={700}
          className="mx-auto mb-12 sm:mb-16 max-w-[760px] text-center px-4"
        >
          <div className="inline-flex items-center justify-center gap-2.5 font-inter text-[12px] sm:text-[13px] md:text-[14px] font-medium uppercase leading-[18px] tracking-[0.24px] text-[#242424] mb-3 bg-[#F4F4F4] px-4 py-1.5 rounded-full border border-black/[0.05] shadow-sm transition-all duration-300 hover:bg-[#eaeaea]">
            <span className="relative flex h-2 w-2 flex-none">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5E14] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5E14]" />
            </span>
            Strategic outcomes
          </div>
          <h2 className="mt-2 font-ppmori text-3xl sm:text-4xl md:text-[52px] font-semibold leading-[1.12] tracking-[-0.8px] text-[#242424]">
            What changes for leaders.
          </h2>
          <p className="mt-3 font-inter text-[15px] sm:text-[16px] md:text-[17px] leading-[1.65] text-[#555555]">
            Moving beyond localised symptoms to implement systemic, sustainable transformation.
          </p>
        </Reveal>

        {/* accordion */}
        <Reveal direction="up" duration={750} delay={100} distance={24}>
          <div className="border-b border-[#dedede]">
            {OUTCOMES.map((o, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={o.title}
                  className={`border-t border-[#dedede] transition-colors duration-300 rounded-xl px-3 sm:px-5 -mx-3 sm:-mx-5 ${
                    isOpen ? "bg-[#FFF9F6]/80" : "hover:bg-[#FAFAFA]"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`outcome-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className={`group flex w-full items-center justify-between gap-4 py-7 sm:py-8 md:py-9 text-left font-ppmori text-xl sm:text-2xl md:text-[28px] font-semibold leading-[1.25] tracking-tight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#FF5E14] cursor-pointer ${
                        isOpen ? "text-[#FF5E14]" : "text-[#1a1a1a] hover:text-[#FF5E14]"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`w-1.5 h-6 rounded-full bg-[#FF5E14] transition-all duration-300 ${
                            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-50"
                          }`}
                        />
                        <span className="group-hover:translate-x-0.5 transition-transform duration-300">
                          {o.title}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className={`grid h-10 w-10 sm:h-11 sm:w-11 shrink-0 place-items-center rounded-full font-ppmori text-xl font-medium transition-all duration-300 ${
                          isOpen
                            ? "bg-[#FF5E14] text-white rotate-180 shadow-[0_4px_16px_rgba(255,94,20,0.35)]"
                            : "bg-[#FFF1EA] text-[#FF5E14] hover:bg-[#ffe2d3] group-hover:scale-105"
                        }`}
                      >
                        {isOpen ? "–" : "+"}
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`outcome-${i}`}
                    role="region"
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[780px] pb-8 sm:pb-9 pl-4 sm:pl-5 pr-6 sm:pr-[72px] font-inter text-[14.5px] sm:text-[15.5px] md:text-[16px] leading-[1.65] text-[#525252]">
                        {o.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
