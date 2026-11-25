"use client";

// OutcomesSection.jsx
// "What changes for you." accordion: one item open at a time, animated open and close.
//
// Usage:
//   import OutcomesSection from "./OutcomesSection";
//   <OutcomesSection />
//
// Props (all optional):
//   eyebrow, heading
//   items       – [{ title, body }]
//   defaultOpen – index of the item open on load (default 1); use null for all closed
//
// Needs Tailwind v3.4+ (for grid-rows-[0fr] -> [1fr] animation) and the Inter +
// Schibsted Grotesk Google Fonts.

import { useState } from "react";

const DEFAULT_ITEMS = [
  {
    title: "Familyness of the family business",
    body: "Every family business has a special bond and set of values that standard companies just don’t have. We help you figure out what makes your family’s story unique and turn those strengths into your biggest advantage—building deep trust with your customers, team, and community.",
  },
  {
    title: "Family Dialogues",
    body: "Talking about business with family can get complicated. We create a safe, supportive space for open and honest conversations where everyone feels heard. By clearing up misunderstandings and aligning your goals, we help your family make clear, confident decisions together without harming personal relationships.",
  },
  {
    title: "Generational Transition",
    body: "Passing the torch to the next generation is one of the biggest milestones a business will ever face. We help you build a smooth succession plan that honors the wisdom of the founders while giving new leaders the freedom to innovate, ensuring your business stays strong and stable for years to come.",
  },
  {
    title: "Owing the Family Business identity",
    body: "It takes work to help every family member feel genuinely connected to the company’s mission. We help build a sense of pride and shared purpose across all generations, turning family members into passionate, responsible stewards who are proud to carry the business forward.",
  },
];

function AccordionItem({ id, title, body, open, onToggle }) {
  return (
    <div className="rounded-[20px] bg-white shadow-[0_2px_8px_rgba(29,40,112,.04)]">
      <button
        type="button"
        id={`${id}-button`}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={onToggle}
        className={[
          "flex w-full cursor-pointer items-center justify-between gap-4 rounded-[20px] px-7 text-left font-['Schibsted_Grotesk',Inter,sans-serif] text-[clamp(17px,2.2vw,21px)] font-medium text-[#1d2870] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d2870]",
          open ? "pt-6 pb-2" : "py-6",
        ].join(" ")}
      >
        <span>{title}</span>

        {/* + that turns into × */}
        <span
          aria-hidden="true"
          className={[
            "relative h-10 w-10 flex-none rounded-full bg-[#1d2870] transition-transform duration-[380ms] ease-[cubic-bezier(.4,0,.2,1)] motion-reduce:transition-none",
            "before:absolute before:left-1/2 before:top-1/2 before:h-[3px] before:w-4 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-sm before:bg-white before:content-['']",
            "after:absolute after:left-1/2 after:top-1/2 after:h-4 after:w-[3px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-sm after:bg-white after:content-['']",
            open ? "rotate-45" : "rotate-0",
          ].join(" ")}
        />
      </button>

      {/* height animates between 0fr and 1fr */}
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        aria-hidden={!open}
        className={[
          "grid transition-[grid-template-rows] duration-[380ms] ease-[cubic-bezier(.4,0,.2,1)] motion-reduce:transition-none",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        ].join(" ")}
      >
        <div className="min-h-0 overflow-hidden">
          <p
            className={[
              "px-7 pb-6 pt-1 text-base leading-[1.65] text-[#5a6180] transition-[opacity,transform] duration-[380ms] ease-[cubic-bezier(.4,0,.2,1)] motion-reduce:transition-none",
              open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0",
            ].join(" ")}
          >
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function OutcomesSection({
  eyebrow = "Outcomes we help create",
  heading = "What changes for you.",
  items = DEFAULT_ITEMS,
  defaultOpen = 1,
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <section className="bg-[#F2F7FB] px-6 py-24 font-['Inter',system-ui,sans-serif] text-[#1a1a1a] antialiased">
      <div className="mx-auto max-w-[1783px] px-5 sm:px-8 md:px-[6vw]">
        <div className="flex items-center justify-center gap-2 text-[11px] font-medium uppercase tracking-[.18em] before:block before:h-1.5 before:w-1.5 before:bg-[#FF5E14] before:content-['']">
          {eyebrow}
        </div>

        <h2 className="mb-12 mt-4 text-center font-['Schibsted_Grotesk',Inter,sans-serif] text-[clamp(32px,5vw,48px)] font-bold tracking-[-.02em]">
          {heading}
        </h2>

        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <AccordionItem
              key={item.title}
              id={`outcome-${i}`}
              title={item.title}
              body={item.body}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
