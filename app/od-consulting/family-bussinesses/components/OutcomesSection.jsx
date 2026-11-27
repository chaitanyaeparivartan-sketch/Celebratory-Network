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
import Reveal from "@/app/components/Common/Reveal";

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
    <div
      className={`transition-colors duration-300 px-3 sm:px-6 ${
        open ? "bg-[#FFF9F6]/80" : "hover:bg-[#FAFAFA]"
      }`}
    >
      <h3>
        <button
          type="button"
          id={`${id}-button`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
          className={`group flex w-full items-center justify-between gap-3 sm:gap-4 py-5 sm:py-7 md:py-9 text-left font-ppmori text-[18px] sm:text-2xl md:text-[28px] font-semibold leading-[1.25] tracking-tight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#FF5E14] cursor-pointer ${
            open ? "text-[#FF5E14]" : "text-[#1a1a1a] hover:text-[#FF5E14]"
          }`}
        >
          <span className="flex items-center gap-2.5 sm:gap-3">
            <span
              className={`w-1.5 h-5 sm:h-6 rounded-[1px] bg-[#FF5E14] transition-all duration-300 shrink-0 ${
                open ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
            />
            <span className="group-hover:translate-x-0.5 transition-transform duration-300">
              {title}
            </span>
          </span>

          <span
            aria-hidden="true"
            className={`grid h-9 w-9 sm:h-11 sm:w-11 shrink-0 place-items-center rounded-full font-ppmori text-lg sm:text-xl font-medium transition-all duration-300 ${
              open
                ? "bg-[#FF5E14] text-white rotate-180 shadow-[0_4px_16px_rgba(255,94,20,0.35)]"
                : "bg-[#FFF1EA] text-[#FF5E14] hover:bg-[#ffe2d3] group-hover:scale-105"
            }`}
          >
            {open ? "–" : "+"}
          </span>
        </button>
      </h3>

      {/* height animates between 0fr and 1fr */}
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        aria-hidden={!open}
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[780px] pb-6 sm:pb-8 md:pb-9 pl-4 sm:pl-5 pr-2 sm:pr-[72px] font-inter text-[14.5px] sm:text-[15.5px] md:text-[16px] leading-[1.65] text-[#525252]">
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
  defaultOpen = 0,
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <section className="bg-white text-[#1a1a1a] px-4 sm:px-6 py-14 sm:py-20 md:py-28 relative overflow-hidden">
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
          className="mx-auto mb-8 sm:mb-12 md:mb-16 max-w-[760px] text-center px-2 sm:px-4"
        >
          <p className="inline-flex items-center justify-center gap-2 text-[12px] sm:text-[13px] md:text-[14px] font-medium tracking-[0.24px] uppercase font-inter text-[#242424] mb-2 sm:mb-3 opacity-90">
            <span className="w-1.5 h-1.5 rounded-[1px] bg-[#FF5E14] shrink-0" />
            {eyebrow}
          </p>
          <h2 className="mt-2 font-ppmori text-3xl sm:text-4xl md:text-[48px] lg:text-[52px] font-semibold leading-[1.12] tracking-[-0.8px] text-[#242424]">
            {heading}
          </h2>
        </Reveal>

        {/* accordion */}
        <Reveal direction="up" duration={750} delay={100} distance={24}>
          <div className="border-y border-[#dedede] divide-y divide-[#dedede]">
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
        </Reveal>
      </div>
    </section>
  );
}
