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
    <section className="bg-[#FF5E14] px-6 py-24 text-center font-['Inter',system-ui,sans-serif] text-white antialiased">
      <div className="mx-auto max-w-[1783px] px-5 sm:px-8 md:px-[6vw]">
        <div className="flex items-center justify-center gap-2 text-[11px] font-medium uppercase tracking-[.18em] text-white before:block before:h-1.5 before:w-1.5 before:bg-white before:content-['']">
          {eyebrow}
        </div>

        <h2 className="mx-auto mb-14 mt-4 max-w-[680px] font-['Schibsted_Grotesk',Inter,sans-serif] text-[clamp(32px,5vw,48px)] font-semibold leading-[1.1]">
          {heading}
        </h2>

        <div className="grid grid-cols-1 gap-4 text-left md:grid-cols-3">
          {points.map((point) => (
            <p
              key={point}
              className="rounded-2xl border border-white/20 bg-white/10 p-7 text-[15px] leading-[1.65]"
            >
              {point}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
