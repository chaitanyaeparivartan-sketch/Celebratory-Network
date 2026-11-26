"use client";

import Reveal from "@/app/components/Common/Reveal";

const OFFERINGS = [
  {
    no: "01",
    title: "World Cafe",
    desc: "A simple, effective way to engage medium to large groups in focused discussion. Shared conversations surface the group’s collective intelligence and lead to creative solutions for complex topics.",
    image: "/interventions/world-cafe.jpg",
  },
  {
    no: "02",
    title: "Appreciative Inquiry Summit",
    desc: "Brings the whole system into one room to explore what works, from the self and history to the future. Runs about 2 days with 50 to 1,000 people, shaping a new culture or strategic goals.",
    image: "/interventions/ai-summit.jpg",
  },
  {
    no: "03",
    title: "Future Search Conference",
    desc: "A 2.5-day conference designed in 1982 by Marvin Weisbord and Sandra Janoff. Up to 70 diverse people explore their shared past and present, then build a common vision.",
    image: "/interventions/future-search.jpg",
  },
  {
    no: "04",
    title: "Open Space",
    desc: "Develops innovative solutions on a chosen subject with 30 to 1,000 people in 1 to 3 days, backed by thorough preparation and a strong post-event implementation process.",
    image: "/interventions/open-space.jpg",
  },
];

const FALLBACK = "linear-gradient(135deg,#1d4a5c,#0f2f3d)";

function OfferingCard({ no, title, desc, image }) {
  const bg = `linear-gradient(rgba(18,18,18,.68),rgba(18,18,18,.68)), ${
    image ? `url(${image})` : FALLBACK
  }`;

  return (
    <article
      tabIndex={0}
      className="group relative isolate aspect-auto min-h-[160px] sm:min-h-[175px] md:aspect-[663/292] w-full cursor-pointer overflow-hidden rounded-[18px] sm:rounded-2xl bg-[#242424] md:bg-white [container-type:inline-size] border border-black/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.04)] outline-none transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(0,0,0,0.12)] hover:border-[#FF5E14]/30"
    >
      {/* photo + dark overlay (visible on mobile, hover on desktop) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-100 md:opacity-0 transition-opacity duration-700 md:group-hover:opacity-100 md:group-active:opacity-100 scale-100 md:group-hover:scale-105 transition-transform duration-700 ease-out"
        style={{ backgroundImage: bg }}
      />

      {/* blurred orange shade (hidden on mobile, visible on desktop until hover) */}
      <span
        aria-hidden
        className="hidden md:block pointer-events-none absolute -z-10 right-[4.5cqw] top-[-18cqw] h-[79.8cqw] w-[3.1cqw] rotate-[12.566deg] bg-[#FF5E14] opacity-30 blur-[6cqw] transition-opacity duration-500 group-hover:opacity-0"
      />

      {/* content: centered horizontally + vertically with fixed number column for rock-solid consistent alignment */}
      <div className="relative md:absolute md:inset-0 flex items-center gap-4 sm:gap-6 md:gap-[5cqw] p-5 sm:p-6 md:px-[4cqw] md:py-0 w-full h-full">
        {/* number column: fixed width so all card titles line up perfectly */}
        <div className="flex-none shrink-0 w-[70px] sm:w-[88px] md:w-[33cqw] flex items-center justify-start">
          <span
            className="offering-card-no inline-block font-ppmori tabular-nums text-[48px] sm:text-[62px] md:text-[length:26.9cqw] font-semibold leading-[1.1] text-white md:text-[#FF5E14] will-change-transform"
          >
            {no}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="offering-card-title font-ppmori text-[17px] sm:text-[19px] md:text-[length:clamp(17px,3.7cqw,24px)] font-semibold leading-tight tracking-[-0.6px] sm:tracking-[-0.8px] text-white md:text-[#242424] transition-colors duration-300">
            {title}
          </h3>
          <p className="offering-card-desc mt-1.5 sm:mt-[0.5em] font-inter text-[13px] sm:text-[13.5px] md:text-[length:clamp(13px,2.4cqw,16px)] font-normal leading-[1.5] sm:leading-[1.55] tracking-[-0.3px] text-white/95 md:text-[#525252] transition-colors duration-300">
            {desc}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Offerings() {
  return (
    <section className="bg-[#f5f5f5] text-[#1a1a1a] px-4 pb-16 pt-10 sm:px-6 md:pb-24 md:pt-16">
      {/* Figma Animations Style Block */}
      <style>{`
        @property --offering-motion-translate-y {
          syntax: '<number>';
          initial-value: 0;
          inherits: false;
        }

        @media (min-width: 768px) {
          .offering-card-no {
            --offering-motion-translate-y: 0;
            transform: translate(0px, calc(var(--offering-motion-translate-y, 0) * 1px));
            transform-origin: 0 0;
            transition: transform 0.6s cubic-bezier(0.22, 0.8, 0.2, 1), color 0.6s cubic-bezier(0.22, 0.8, 0.2, 1);
          }

          .group:hover .offering-card-no {
            animation: kf_offering_motion_y 1.250123s linear forwards,
                       kf_offering_color_num 1.250123s linear forwards;
          }

          .offering-card-title {
            transition: color 0.6s cubic-bezier(0.22, 0.8, 0.2, 1);
          }

          .group:hover .offering-card-title {
            animation: kf_offering_color_text 1.250123s linear forwards;
          }

          .offering-card-desc {
            transition: color 0.6s cubic-bezier(0.22, 0.8, 0.2, 1);
          }

          .group:hover .offering-card-desc {
            animation: kf_offering_color_text 1.250123s linear forwards;
          }
        }

        @keyframes kf_offering_motion_y {
          0% { --offering-motion-translate-y: 0; }
          2.666% { --offering-motion-translate-y: 4.273274; }
          5.333% { --offering-motion-translate-y: 14.119276; }
          7.999% { --offering-motion-translate-y: 26.380674; }
          10.666% { --offering-motion-translate-y: 39.1577; }
          13.332% { --offering-motion-translate-y: 51.369572; }
          15.998% { --offering-motion-translate-y: 62.458492; }
          18.665% { --offering-motion-translate-y: 72.191849; }
          21.331% { --offering-motion-translate-y: 80.531586; }
          23.997% { --offering-motion-translate-y: 87.549355; }
          26.664% { --offering-motion-translate-y: 93.37249; }
          29.33% { --offering-motion-translate-y: 98.150543; }
          31.997% { --offering-motion-translate-y: 102.035339; }
          34.663% { --offering-motion-translate-y: 105.169891; }
          37.329% { --offering-motion-translate-y: 107.682831; }
          39.996% { --offering-motion-translate-y: 109.68634; }
          42.662% { --offering-motion-translate-y: 111.27607; }
          45.328% { --offering-motion-translate-y: 112.532211; }
          47.995% { --offering-motion-translate-y: 113.521103; }
          50.661% { --offering-motion-translate-y: 114.29705; }
          53.328% { --offering-motion-translate-y: 114.904137; }
          55.994% { --offering-motion-translate-y: 115.377853; }
          58.66% { --offering-motion-translate-y: 115.746613; }
          61.327% { --offering-motion-translate-y: 116.033043; }
          63.993% { --offering-motion-translate-y: 116.255096; }
          66.659% { --offering-motion-translate-y: 116.426918; }
          69.326% { --offering-motion-translate-y: 116.559662; }
          71.992% { --offering-motion-translate-y: 116.662048; }
          74.659% { --offering-motion-translate-y: 116.740913; }
          77.325% { --offering-motion-translate-y: 116.801567; }
          79.991% { --offering-motion-translate-y: 116.848175; }
          82.658% { --offering-motion-translate-y: 116.883934; }
          85.324% { --offering-motion-translate-y: 116.911346; }
          87.99% { --offering-motion-translate-y: 116.932343; }
          90.657% { --offering-motion-translate-y: 116.948402; }
          93.323% { --offering-motion-translate-y: 116.960686; }
          95.99% { --offering-motion-translate-y: 116.970055; }
          98.656% { --offering-motion-translate-y: 116.977211; }
          100% { --offering-motion-translate-y: 117; }
        }

        @keyframes kf_offering_color_num {
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
          100% { color: #FFF; }
        }

        @keyframes kf_offering_color_text {
          0% { color: #242424; }
          2.666% { color: #2C2C2C; }
          5.333% { color: #3E3E3E; }
          7.999% { color: #555; }
          10.666% { color: #6D6D6D; }
          13.332% { color: #848484; }
          15.998% { color: #999; }
          18.665% { color: #ABABAB; }
          21.331% { color: #BBB; }
          23.997% { color: #C8C8C8; }
          26.664% { color: #D3D3D3; }
          29.33% { color: #DCDCDC; }
          31.997% { color: #E3E3E3; }
          34.663% { color: #E9E9E9; }
          37.329% { color: #EEE; }
          39.996% { color: #F1F1F1; }
          42.662% { color: #F4F4F4; }
          45.328% { color: #F7F7F7; }
          47.995% { color: #F8F8F8; }
          50.661% { color: #FAFAFA; }
          53.328% { color: #FBFBFB; }
          55.994% { color: #FCFCFC; }
          58.66% { color: #FDFDFD; }
          61.327% { color: #FDFDFD; }
          63.993% { color: #FEFEFE; }
          66.659% { color: #FEFEFE; }
          71.992% { color: #FEFEFE; }
          74.659% { color: #FFF; }
          100% { color: #FFF; }
        }
      `}</style>

      {/* Head */}
      <Reveal
        direction="up"
        duration={700}
        className="mx-auto mb-10 sm:mb-14 max-w-[820px] text-center px-4"
      >
        <div className="inline-flex items-center gap-1.5 font-inter text-[12px] sm:text-[13px] md:text-[14px] font-medium uppercase leading-[18px] tracking-[0.24px] text-[#242424]">
          <span className="h-1.5 w-1.5 rounded-[1px] bg-[#FF5E14]" />
          Our offerings
        </div>
        <h2 className="mt-3.5 font-ppmori text-[clamp(30px,4.6vw,52px)] font-semibold leading-[1.05] sm:leading-[1.12] tracking-[-0.8px] text-[#242424]">
          Four ways to bring the whole system into the room.
        </h2>
      </Reveal>

      {/* Cards Grid */}
      <div className="mx-auto grid max-w-[1342px] grid-cols-1 justify-center gap-4 min-[861px]:grid-cols-2 max-[860px]:max-w-[663px]">
        {OFFERINGS.map((item, index) => (
          <Reveal
            key={item.no}
            direction="up"
            delay={index * 70}
            duration={650}
            distance={24}
            className="w-full"
          >
            <OfferingCard {...item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
