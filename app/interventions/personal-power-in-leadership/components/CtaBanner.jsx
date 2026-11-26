import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="bg-[#FFF1EA] px-6 py-24" id="contact">
      <div className="mx-auto max-w-[860px] relative overflow-hidden rounded-2xl bg-[#205A9D] text-white shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
        <div className="relative z-10 p-8 sm:p-11 flex flex-col justify-center gap-3">
          <h3 className="font-['Schibsted_Grotesk',Inter,sans-serif] text-[clamp(22px,3vw,28px)] font-medium leading-[1.3] max-w-[420px] text-white">
            Take the first step toward lasting organisational change
          </h3>
          <p className="text-[13.5px] sm:text-[14px] leading-[1.65] text-white/85 max-w-[380px]">
            Get a personalised look at how Celebratory Network can work for your organisation.
          </p>
          <div className="mt-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#FF5E14] px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#e0520f] hover:shadow-[0_4px_16px_rgba(255,94,20,0.4)]"
            >
              Talk to us
            </Link>
          </div>
        </div>

        {/* Diagonal stripes on the right */}
        <div
          className="absolute inset-y-0 right-0 w-[150px] opacity-70 pointer-events-none hidden sm:block"
          style={{
            background:
              "repeating-linear-gradient(115deg, #FF5E14 0 7px, transparent 7px 17px)",
            clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 100%)",
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
