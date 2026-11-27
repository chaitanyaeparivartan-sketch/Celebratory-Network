// DifferenceSection.jsx
// "What makes our work different" section: orange band with three translucent statement cards.
//
// Usage:
//   import DifferenceSection from "./DifferenceSection";
//   <DifferenceSection />
//
// Or pass your own content:
//   <DifferenceSection points={["First point", "Second point", "Third point"]} />
//
// Needs Tailwind v3+ and the Inter + Schibsted Grotesk Google Fonts.

import Reveal from "@/app/components/Common/Reveal";

const DEFAULT_POINTS = [
  "We work with the dynamics of the family and organization that impact perpetuity of the business – not just the visible structures and processes.",
  "Our Organization Development lens addresses relationships, leadership, culture and decision-making.",
  "Our consultants have firsthand experience of family businesses, understanding both the visible and invisible realities.",
];

export default function DifferenceSection({
  eyebrow = "What makes our work different",
  heading = "We see what the family sees, and what it doesn’t.",
  points = DEFAULT_POINTS,
}) {
  return (
    <section className="bg-[#FF5E14] px-4 sm:px-6 py-14 sm:py-20 md:py-24 text-center font-inter text-white antialiased">
      <div className="mx-auto max-w-[1783px] px-0 sm:px-8 md:px-[6vw]">
        <Reveal direction="up" duration={650} distance={20}>
          <div className="inline-flex items-center justify-center gap-2 font-inter text-[12px] sm:text-[13px] md:text-[14px] font-medium uppercase leading-[18px] tracking-[0.24px] text-white before:block before:h-1.5 before:w-1.5 before:rounded-[1px] before:bg-white before:content-['']">
            {eyebrow}
          </div>

          <h2 className="mx-auto mb-8 sm:mb-12 md:mb-14 mt-2 sm:mt-3 max-w-[680px] font-ppmori text-3xl sm:text-4xl md:text-[48px] lg:text-[52px] font-semibold leading-[1.12] tracking-[-0.8px]">
            {heading}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-3.5 sm:gap-4 text-left md:grid-cols-3">
          {points.map((point, idx) => (
            <Reveal
              key={point}
              direction="up"
              duration={600}
              delay={idx * 90}
              distance={22}
              className="flex h-full"
            >
              <p className="w-full rounded-[12px] sm:rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-7 font-inter text-[15px] sm:text-[16px] md:text-[17px] leading-[1.65] transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/15 hover:border-white/35 hover:shadow-[0_16px_36px_rgba(0,0,0,0.16)]">
                {point}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
