const BARRIERS = [
  "Self-doubt",
  "Limited visibility",
  "Internalised expectations",
  "Lack of self-authority",
];

export default function WhyItMatters() {
  return (
    <section className="bg-[#205A9D] px-6 py-24 text-white">
      <div className="mx-auto max-w-[780px] text-center">
        <div className="flex items-center justify-center gap-2 text-[11px] font-medium uppercase tracking-[.18em] text-white">
          <span className="h-1.5 w-1.5 bg-white" />
          Why this work matters
        </div>

        <h2 className="mt-4 mb-6 font-['Schibsted_Grotesk',Inter,sans-serif] text-[clamp(32px,5vw,48px)] font-semibold leading-[1.1] text-white">
          Rarely about capability.
        </h2>

        <p className="mb-4 font-['Schibsted_Grotesk',Inter,sans-serif] text-[20px] sm:text-[22px] font-semibold text-white leading-snug">
          Leadership challenges for women are rarely about capability.
        </p>

        <p className="text-[17px] sm:text-[18px] leading-[1.7] text-white/95">
          Personal Power in Leadership addresses the invisible barriers so women can lead
          authentically and create impact that lasts.
        </p>

        <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left">
          {BARRIERS.map((b) => (
            <div
              key={b}
              className="rounded-2xl border border-white/22 bg-white/10 px-6 py-5 text-[15px] sm:text-[16px] font-medium leading-[1.6] text-white backdrop-blur-[2px]"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
