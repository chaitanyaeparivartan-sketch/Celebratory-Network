// FamilySections.jsx
// First two sections of the Celebratory Network "Family Managed Businesses" page.
//
// Setup:
// 1. Add the fonts to your <head> (or load them however your app prefers):
//    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Schibsted+Grotesk:wght@500;600;700&family=Geist:wght@600&display=swap" rel="stylesheet">
// 2. Put the two photos in your public folder and update the paths below.
// 3. Tailwind v3+ (arbitrary values are used for the brand colours and fonts).

import Reveal from "@/app/components/Common/Reveal";

const ORANGE = "#FF5E14";

const IMAGES = {
  office: "/images/family-managed-business-meeting.webp",
  family: "/images/family-businesses-are-different.webp",
};

function Eyebrow({ children, light = false }) {
  return (
    <div
      className={[
        "inline-flex items-center gap-2 font-inter text-[12px] sm:text-[13px] md:text-[14px] font-medium uppercase leading-[18px] tracking-[0.24px]",
        "before:block before:h-1.5 before:w-1.5 before:rounded-[1px] before:content-['']",
        light ? "text-white before:bg-white" : "text-[#242424] before:bg-[#FF5E14]",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-white py-14 sm:py-20 md:py-24 font-inter text-[#1a1a1a] antialiased">
      <div className="mx-auto grid max-w-[1783px] grid-cols-1 items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20 px-4 sm:px-8 md:px-[6vw] md:grid-cols-2">
        <Reveal direction="up" duration={650} distance={24}>
          <Eyebrow>Family managed businesses</Eyebrow>

          <h1 className="mb-4 sm:mb-6 mt-2 sm:mt-3 font-ppmori text-3xl sm:text-4xl md:text-[48px] lg:text-[52px] font-semibold leading-[1.12] tracking-[-0.8px] text-[#141414]">
            Growing Family Businesses Together
          </h1>

          <p className="mb-4 font-inter text-[16px] sm:text-[17px] md:text-[18px] font-semibold leading-[1.5] text-[#222]">
            Transforming Family Managed Businesses into Future-Ready Organizations.
          </p>

          <p className="mb-4 font-inter text-[15px] sm:text-[16px] md:text-[17px] leading-[1.65] text-[#444]">
            Family businesses carry extraordinary strengths — deep commitment,
            long-term vision and entrepreneurial resilience. They also carry
            invisible dynamics that can either accelerate growth or quietly limit
            it.
          </p>

          <p className="mb-4 font-inter text-[15px] sm:text-[16px] md:text-[17px] leading-[1.65] text-[#444]">
            At <strong className="text-[#FF5E14]">Celebratory Network</strong> we
            work at the intersection of <strong>Family</strong>,{" "}
            <strong>Business</strong> and <strong>Organization Development</strong>
            , helping family managed businesses strengthen relationships,
            professionalize leadership and prepare for sustainable growth across
            generations.
          </p>
        </Reveal>

        <Reveal
          direction="scale"
          duration={700}
          delay={120}
          distance={20}
          className="w-full max-w-[540px] mx-auto md:ml-auto md:mr-0 overflow-hidden rounded-[8px] shadow-[0_20px_50px_rgba(0,0,0,.08)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMAGES.office}
            alt="Multi-generational family discussing together around a laptop at their business"
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
          />
        </Reveal>
      </div>
    </section>
  );
}

function TwoSystems() {
  return (
    <section
      className="py-14 sm:py-20 md:py-24 font-inter text-white antialiased"
      style={{ backgroundColor: ORANGE }}
    >
      <div className="mx-auto grid max-w-[1783px] grid-cols-1 items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20 px-4 sm:px-8 md:px-[6vw] md:grid-cols-2">
        <Reveal
          direction="scale"
          duration={700}
          distance={20}
          className="order-2 md:order-1 w-full max-w-[540px] mx-auto md:mr-auto md:ml-0 overflow-hidden rounded-[8px] shadow-[0_20px_50px_rgba(0,0,0,.18)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMAGES.family}
            alt="Executive reviewing business performance charts and strategic reports at a desk"
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
          />
        </Reveal>

        <Reveal direction="up" duration={650} delay={120} distance={24} className="order-1 md:order-2">
          <Eyebrow light>Family businesses are different</Eyebrow>

          <h2 className="mb-4 sm:mb-6 mt-2 sm:mt-3 font-ppmori text-3xl sm:text-4xl md:text-[48px] lg:text-[52px] font-semibold leading-[1.12] tracking-[-0.8px]">
            Two systems. One future.
          </h2>

          <p className="mb-4 font-inter text-[15px] sm:text-[16px] md:text-[17px] leading-[1.65] text-white/90">
            Every family business operates through two interconnected systems.
            One is the business. The other is the family.
          </p>

          <p className="mb-4 font-inter text-[15px] sm:text-[16px] md:text-[17px] leading-[1.65] text-white/90">
            While the business seeks efficiency, accountability and growth, the
            family operates through relationships, history, emotions, identity
            and shared values. Growth becomes difficult when these two systems
            pull in different directions.
          </p>

          <p className="mt-6 font-inter text-[16px] sm:text-[17px] md:text-[18px] font-semibold leading-[1.5] text-white">
            Our work helps both systems evolve together — creating businesses that
            are stronger because of the family, not constrained by it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default function FamilySections() {
  return (
    <>
      <Hero />
      <TwoSystems />
    </>
  );
}

export { Hero as FamilyHero, TwoSystems };
