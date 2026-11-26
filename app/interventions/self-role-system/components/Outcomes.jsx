"use client";

import { useState } from "react";

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
    <section className="bg-white text-[#1a1a1a] px-6 py-24">
      <div className="mx-auto max-w-[1080px]">
        {/* heading */}
        <div className="mx-auto mb-10 max-w-[720px] text-center">
          <div className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[.18em] text-[#1a1a1a]">
            <span className="h-1.5 w-1.5 bg-[#FF5E14]" />
            Strategic outcomes
          </div>
          <h2 className="my-4 font-['Schibsted_Grotesk','PP_Mori',Inter,sans-serif] text-[clamp(32px,5vw,48px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#1a1a1a]">
            What changes for leaders.
          </h2>
          <p className="text-[15px] sm:text-[16px] leading-[1.65] text-[#555555]">
            Moving beyond localised symptoms to implement systemic, sustainable transformation.
          </p>
        </div>

        {/* accordion */}
        <div className="border-b border-[#dedede]">
          {OUTCOMES.map((o, i) => {
            const isOpen = open === i;
            return (
              <div key={o.title} className="border-t border-[#dedede]">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`outcome-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className={`flex w-full items-center justify-between gap-4 py-9 text-left font-['Schibsted_Grotesk','PP_Mori',Inter,sans-serif] text-[clamp(22px,3vw,32px)] font-medium transition-colors hover:text-[#FF5E14] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#FF5E14] ${
                      isOpen ? "text-[#FF5E14]" : "text-[#1a1a1a]"
                    }`}
                  >
                    {o.title}
                    <span
                      aria-hidden="true"
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-lg font-normal transition-colors ${
                        isOpen ? "bg-[#FF5E14] text-white" : "bg-[#FFF1EA] text-[#FF5E14]"
                      }`}
                    >
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>
                </h3>

                <div
                  id={`outcome-${i}`}
                  role="region"
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[760px] pb-9 pr-[72px] text-[15px] leading-[1.7] text-[#444444]">
                      {o.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
