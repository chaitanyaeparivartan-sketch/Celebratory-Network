export default function BeliefQuote() {
  return (
    <section className="bg-white px-6 py-24 text-center text-[#1a1a1a]">
      <div className="mx-auto max-w-[1080px]">
        <div className="flex items-center justify-center gap-2 text-[11px] font-medium uppercase tracking-[.18em] text-[#1a1a1a]">
          <span className="h-1.5 w-1.5 bg-[#FF5E14]" />
          Our belief
        </div>

        <h2 className="mx-auto mt-[18px] max-w-[860px] font-['Schibsted_Grotesk',Inter,sans-serif] text-[clamp(28px,4.6vw,48px)] font-semibold leading-[1.25] tracking-[-0.01em] text-[#1a1a1a]">
          “When women strengthen within, they <em className="not-italic text-[#FF5E14]">transform everything</em> around
          them.”
        </h2>
      </div>
    </section>
  );
}
