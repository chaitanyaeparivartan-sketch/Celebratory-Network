// ServicesSection.jsx
// "Where we create impact" section: six service cards that reveal a photo on hover/focus.
//
// Usage:
//   import ServicesSection from "./ServicesSection";
//   <ServicesSection />
//
// Or pass your own content (each item needs title, description, image):
//   <ServicesSection services={myServices} />
//
// Needs Tailwind v3+ and the Inter + Schibsted Grotesk Google Fonts.

import Reveal from "@/app/components/Common/Reveal";

const DEFAULT_SERVICES = [
  {
    title: "Family Business Health Check",
    description:
      "Understand the underlying patterns influencing business performance, leadership effectiveness, relationships and organizational culture before deciding where change is required.",
    image: "/images/services/family-business-health-check.webp",
  },
  {
    title: "Familyness in Business",
    description:
      "Help family strengths become organisational strengths while reducing patterns that unintentionally limit growth.",
    image: "/images/services/familyness-in-business.webp",
  },
  {
    title: "Professionalizing the Organization",
    description:
      "Support the transition from founder-led, person-dependent ways of working to role clarity, accountability, systems and professional management.",
    image: "/images/services/professionalizing-the-organization.webp",
  },
  {
    title: "Leadership Alignment",
    description:
      "Create shared understanding between family members, professionals and key leaders around purpose, decisions and direction.",
    image: "/images/services/leadership-alignment.webp",
  },
  {
    title: "Next Generation Leadership",
    description:
      "Prepare future leaders to develop self-worth, business capability and leadership identity before they inherit responsibility.",
    image: "/images/services/next-generation-leadership.webp",
  },
  {
    title: "Succession Planning",
    description:
      "Facilitate thoughtful, fair and sustainable succession processes that preserve both business continuity and family relationships.",
    image: "/images/services/succession-planning.webp",
  },
];

function ServiceCard({ index, title, description, image }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      tabIndex={0}
      className="group relative isolate flex h-full w-full flex-col items-start gap-3 sm:min-h-[260px] md:min-h-[290px] sm:flex-row sm:items-center sm:gap-6 overflow-hidden rounded-[16px] sm:rounded-3xl bg-[#1e1e1e] md:bg-[linear-gradient(115deg,#fff_62%,#FFF1EA_100%)] p-6 sm:p-8 outline-offset-[3px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(0,0,0,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF5E14] cursor-pointer"
    >
      {/* photo shown by default on mobile/tablet, revealed on hover/focus on desktop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 scale-100 md:scale-[1.06] opacity-100 md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100 md:group-focus-visible:scale-100 md:group-focus-visible:opacity-100 motion-reduce:transition-none"
        style={{
          backgroundImage: `linear-gradient(rgba(16,16,16,.72),rgba(16,16,16,.78)), url("${image}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          transition: "opacity .45s ease, transform .9s ease",
        }}
      />

      <span className="service-card-no flex-none basis-auto sm:basis-[130px] md:basis-[170px] font-ppmori text-[56px] sm:text-[96px] md:text-[136px] font-bold leading-none tracking-[-.03em] text-white md:text-[#FF5E14] will-change-transform">
        {number}
      </span>

      <div>
        <h3 className="font-ppmori text-xl sm:text-[22px] md:text-[24px] font-semibold leading-[1.25] tracking-[-0.015em] text-white md:text-[#1a1a1a] transition-colors duration-300 md:group-hover:text-white md:group-focus-visible:text-white motion-reduce:transition-none">
          {title}
        </h3>
        <p className="mt-2 font-inter text-[14.5px] sm:text-[15px] leading-[1.65] text-white/90 md:text-[#555] transition-colors duration-300 md:group-hover:text-white md:group-focus-visible:text-white motion-reduce:transition-none">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function ServicesSection({
  eyebrow = "Where we create impact",
  heading = "Our services for family managed businesses.",
  services = DEFAULT_SERVICES,
}) {
  return (
    <section className="bg-[#F4F4F4] px-4 sm:px-6 py-14 sm:py-20 md:py-24 font-['Inter',system-ui,sans-serif] text-[#1a1a1a] antialiased">
      {/* Our DNA matching animation style block */}
      <style>{`
        @property --motion-translate-y {
          syntax: '<number>';
          initial-value: 0;
          inherits: false;
        }

        @media (min-width: 768px) {
          .service-card-no {
            --motion-translate-y: 0;
            transform: translate(0px, calc(var(--motion-translate-y, 0) * 1px));
            transform-origin: 0 0;
            transition: transform 0.6s cubic-bezier(0.22, 0.8, 0.2, 1), color 0.6s cubic-bezier(0.22, 0.8, 0.2, 1);
          }

          .group:hover .service-card-no,
          .group:focus-visible .service-card-no {
            animation: kf_services_translate_y 1.250123s linear forwards,
                       kf_services_color 1.250123s linear forwards;
          }
        }

        /* Number Translation */
        @keyframes kf_services_translate_y {
          0% { transform: translateY(0px); --motion-translate-y: 0; }
          2.666% { transform: translateY(4.27px); --motion-translate-y: 4.273274; }
          5.333% { transform: translateY(14.12px); --motion-translate-y: 14.119276; }
          7.999% { transform: translateY(26.38px); --motion-translate-y: 26.380674; }
          10.666% { transform: translateY(39.16px); --motion-translate-y: 39.1577; }
          13.332% { transform: translateY(51.37px); --motion-translate-y: 51.369572; }
          15.998% { transform: translateY(62.46px); --motion-translate-y: 62.458492; }
          18.665% { transform: translateY(72.19px); --motion-translate-y: 72.191849; }
          21.331% { transform: translateY(80.53px); --motion-translate-y: 80.531586; }
          23.997% { transform: translateY(87.55px); --motion-translate-y: 87.549355; }
          26.664% { transform: translateY(93.37px); --motion-translate-y: 93.37249; }
          29.33% { transform: translateY(98.15px); --motion-translate-y: 98.150543; }
          31.997% { transform: translateY(102.04px); --motion-translate-y: 102.035339; }
          34.663% { transform: translateY(105.17px); --motion-translate-y: 105.169891; }
          37.329% { transform: translateY(107.68px); --motion-translate-y: 107.682831; }
          39.996% { transform: translateY(109.69px); --motion-translate-y: 109.68634; }
          42.662% { transform: translateY(111.28px); --motion-translate-y: 111.27607; }
          45.328% { transform: translateY(112.53px); --motion-translate-y: 112.532211; }
          47.995% { transform: translateY(113.52px); --motion-translate-y: 113.521103; }
          50.661% { transform: translateY(114.30px); --motion-translate-y: 114.29705; }
          53.328% { transform: translateY(114.90px); --motion-translate-y: 114.904137; }
          55.994% { transform: translateY(115.38px); --motion-translate-y: 115.377853; }
          58.66% { transform: translateY(115.75px); --motion-translate-y: 115.746613; }
          61.327% { transform: translateY(116.03px); --motion-translate-y: 116.033043; }
          63.993% { transform: translateY(116.26px); --motion-translate-y: 116.255096; }
          66.659% { transform: translateY(116.43px); --motion-translate-y: 116.426918; }
          69.326% { transform: translateY(116.56px); --motion-translate-y: 116.559662; }
          71.992% { transform: translateY(116.66px); --motion-translate-y: 116.662048; }
          74.659% { transform: translateY(116.74px); --motion-translate-y: 116.740913; }
          77.325% { transform: translateY(116.80px); --motion-translate-y: 116.801567; }
          79.991% { transform: translateY(116.85px); --motion-translate-y: 116.848175; }
          82.658% { transform: translateY(116.88px); --motion-translate-y: 116.883934; }
          85.324% { transform: translateY(116.91px); --motion-translate-y: 116.911346; }
          87.99% { transform: translateY(116.93px); --motion-translate-y: 116.932343; }
          90.657% { transform: translateY(116.95px); --motion-translate-y: 116.948402; }
          93.323% { transform: translateY(116.96px); --motion-translate-y: 116.960686; }
          95.99% { transform: translateY(116.97px); --motion-translate-y: 116.970055; }
          98.656% { transform: translateY(116.98px); --motion-translate-y: 116.977211; }
          100% { transform: translateY(117px); --motion-translate-y: 117; }
        }

        /* Number Color Transition (#FF5E14 -> #FFF) */
        @keyframes kf_services_color {
          0% { color: #FF5E14; }
          2.666% { color: #FF641D; }
          5.333% { color: #FF7130; }
          7.999% { color: #FF8249; }
          10.666% { color: #FF9463; }
          13.332% { color: #FFA57B; }
          15.998% { color: #FFB491; }
          18.665% { color: #FFC1A5; }
          21.331% { color: #FFCDB6; }
          23.997% { color: #FFD6C4; }
          26.664% { color: #FFDED0; }
          29.33% { color: #FFE5D9; }
          31.997% { color: #FFEAE1; }
          34.663% { color: #FFEFE7; }
          37.329% { color: #FFF2EC; }
          39.996% { color: #FFF5F0; }
          42.662% { color: #FFF7F4; }
          45.328% { color: #FFF9F6; }
          47.995% { color: #FFFAF8; }
          50.661% { color: #FFFBFA; }
          53.328% { color: #FFFCFB; }
          55.994% { color: #FFFDFC; }
          58.66% { color: #FFFDFC; }
          61.327% { color: #FFFEFD; }
          63.993% { color: #FFFEFE; }
          66.659% { color: #FFFEFE; }
          69.326% { color: #FFFEFE; }
          71.992% { color: #FFFFFE; }
          74.659% { color: #FFFFFE; }
          77.325% { color: #FFF; }
          98.656% { color: #FFF; }
          100% { color: #FFF; }
        }
      `}</style>

      <div className="mx-auto max-w-[1783px] px-0 sm:px-8 md:px-[6vw]">
        <Reveal direction="up" duration={650} distance={20} className="text-center">
          <div className="inline-flex items-center justify-center gap-2 font-inter text-[12px] sm:text-[13px] md:text-[14px] font-medium uppercase leading-[18px] tracking-[0.24px] text-[#242424] before:block before:h-1.5 before:w-1.5 before:rounded-[1px] before:bg-[#FF5E14] before:content-['']">
            {eyebrow}
          </div>

          <h2 className="mx-auto mb-8 sm:mb-12 md:mb-14 mt-2 sm:mt-3 max-w-[760px] text-center font-ppmori text-3xl sm:text-4xl md:text-[48px] lg:text-[52px] font-semibold leading-[1.12] tracking-[-0.8px] text-[#1c1c1c]">
            {heading}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              direction="up"
              duration={600}
              delay={i * 75}
              distance={22}
              className="flex h-full"
            >
              <ServiceCard index={i} {...service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
