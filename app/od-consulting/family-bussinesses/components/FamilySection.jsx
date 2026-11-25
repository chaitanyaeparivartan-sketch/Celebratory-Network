// FamilySections.jsx
// First two sections of the Celebratory Network "Family Managed Businesses" page.
//
// Setup:
// 1. Add the fonts to your <head> (or load them however your app prefers):
//    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Schibsted+Grotesk:wght@500;600;700&family=Geist:wght@600&display=swap" rel="stylesheet">
// 2. Put the two photos in your public folder and update the paths below.
// 3. Tailwind v3+ (arbitrary values are used for the brand colours and fonts).

const ORANGE = "#FF5E14";

const IMAGES = {
  office: "/images/family-managed-business-meeting.jpg",
  family: "/images/candid-family-moments-by-the-water.png",
};

function Eyebrow({ children, light = false }) {
  return (
    <div
      className={[
        "flex items-center gap-2 text-[11px] font-medium uppercase tracking-[.18em]",
        "before:block before:h-1.5 before:w-1.5 before:content-['']",
        light ? "text-white before:bg-white" : "before:bg-[#FF5E14]",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-white py-20 sm:py-24 font-['Inter',system-ui,sans-serif] text-[#1a1a1a] antialiased">
      <div className="mx-auto grid max-w-[1783px] grid-cols-1 items-center gap-12 lg:gap-16 xl:gap-20 px-5 sm:px-8 md:px-[6vw] md:grid-cols-2">
        <div>
          <Eyebrow>Family managed businesses</Eyebrow>

          <h1 className="mb-6 mt-4 font-ppmori text-[36px] sm:text-[44px] md:text-[52px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#141414]">
            Growing Family Businesses Together
          </h1>

          <p className="mb-4 text-base sm:text-lg font-semibold leading-[1.45] text-[#222]">
            Transforming Family Managed Businesses into Future-Ready Organizations.
          </p>

          <p className="mb-4 text-sm sm:text-[15px] leading-[1.7] text-[#444]">
            Family businesses carry extraordinary strengths — deep commitment,
            long-term vision and entrepreneurial resilience. They also carry
            invisible dynamics that can either accelerate growth or quietly limit
            it.
          </p>

          <p className="mb-4 text-sm sm:text-[15px] leading-[1.7] text-[#444]">
            At <strong className="text-[#FF5E14]">Celebratory Network</strong> we
            work at the intersection of <strong>Family</strong>,{" "}
            <strong>Business</strong> and <strong>Organization Development</strong>
            , helping family managed businesses strengthen relationships,
            professionalize leadership and prepare for sustainable growth across
            generations.
          </p>
        </div>

        <div className="w-full max-w-[540px] mx-auto md:ml-auto md:mr-0 overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,.08)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMAGES.office}
            alt="Multi-generational family discussing together around a laptop at their business"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function TwoSystems() {
  return (
    <section
      className="py-20 sm:py-24 font-['Inter',system-ui,sans-serif] text-white antialiased"
      style={{ backgroundColor: ORANGE }}
    >
      <div className="mx-auto grid max-w-[1783px] grid-cols-1 items-center gap-12 lg:gap-16 xl:gap-20 px-5 sm:px-8 md:px-[6vw] md:grid-cols-2">
        <div className="w-full max-w-[480px] lg:max-w-[500px] mx-auto md:mr-auto md:ml-0 overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,.18)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMAGES.family}
            alt="A family of four relaxing together at a table by the water"
            className="aspect-square w-full object-cover"
          />
        </div>

        <div>
          <Eyebrow light>Family businesses are different</Eyebrow>

          <h2 className="mb-6 mt-4 font-['Schibsted_Grotesk',Inter,sans-serif] text-[clamp(32px,5vw,48px)] font-semibold leading-[1.1]">
            Two systems. One future.
          </h2>

          <p className="mb-4 text-sm sm:text-[15px] leading-[1.7] text-white/90">
            Every family business operates through two interconnected systems.
            One is the business. The other is the family.
          </p>

          <p className="mb-4 text-sm sm:text-[15px] leading-[1.7] text-white/90">
            While the business seeks efficiency, accountability and growth, the
            family operates through relationships, history, emotions, identity
            and shared values. Growth becomes difficult when these two systems
            pull in different directions.
          </p>

          <p className="mt-6 text-base sm:text-lg font-semibold leading-[1.4] text-white">
            Our work helps both systems evolve together — creating businesses that
            are stronger because of the family, not constrained by it.
          </p>
        </div>
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
