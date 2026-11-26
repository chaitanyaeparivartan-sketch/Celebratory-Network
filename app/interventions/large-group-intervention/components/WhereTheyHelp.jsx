const INITIATIVES = [
  "Organization redesign",
  "Restructuring",
  "Strategic planning",
  "Visioning",
  "Values and principles clarification",
  "Process improvement",
  "Customer/supplier relations",
  "Global learning and development",
  "Formation of collaborative alliances",
];

export default function WhereTheyHelp() {
  return (
    <section className="bg-[#205A9D] px-6 py-24 text-white">
      <div className="mx-auto max-w-[960px] text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2 text-[11px] font-medium uppercase tracking-[.18em] text-white">
          <span className="h-1.5 w-1.5 bg-white" />
          Where they help
        </div>

        {/* Title */}
        <h2 className="mx-auto mt-4 mb-10 max-w-[720px] font-['Schibsted_Grotesk',Inter,sans-serif] text-[clamp(30px,4.6vw,44px)] font-semibold leading-[1.18] text-white">
          Across a variety of organization development initiatives.
        </h2>

        {/* Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {INITIATIVES.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/25 bg-white/10 px-5 sm:px-6 py-2.5 sm:py-3 text-[14px] sm:text-[15px] font-medium text-white transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
