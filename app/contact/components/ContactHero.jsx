export default function ContactHero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#FFF5F0] via-white to-white pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-[2px] bg-[#FF5E14]" />
          <span className="text-[#FF5E14] font-semibold text-[13px] sm:text-[14px] uppercase tracking-wider">
            Get in Touch
          </span>
        </div>
        <h1 className="font-['PP_Mori',sans-serif] text-[clamp(32px,5vw,56px)] font-bold text-[#141414] tracking-[-0.02em] leading-[1.1]">
          Book a Call with Our Leadership Team
        </h1>
        <p className="mt-4 max-w-[680px] mx-auto text-[#555] text-[15px] sm:text-[17px] leading-[1.6]">
          Every organisation reaches moments when strategy, people, and culture need to move together.
          Tell us about your leadership challenges and let&apos;s explore what&apos;s possible.
        </p>
      </div>
    </section>
  );
}
