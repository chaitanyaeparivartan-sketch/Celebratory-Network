export default function BeliefQuote() {
  return (
    <section className="bg-[#FF5E14] px-6 py-24 text-center text-white">
      <div className="mx-auto max-w-[1080px]">
        <div className="flex items-center justify-center gap-2 text-[11px] font-medium uppercase tracking-[.18em]">
          <span className="h-1.5 w-1.5 bg-white" />
          Our belief
        </div>

        <h2 className="mx-auto mt-[18px] max-w-[860px] font-['Schibsted_Grotesk',Inter,sans-serif] text-[clamp(30px,5vw,54px)] font-semibold leading-[1.2] tracking-[-0.01em]">
          “We don’t fix people. We enable systems to notice and learn from its patterns.”
        </h2>
      </div>
    </section>
  );
}
