"use client";

import Reveal from "@/app/components/Common/Reveal";

const CORNERSTONES = [
  {
    no: "01",
    title: "Trust in Self",
    desc: "The confidence to trust one’s own competence, intuition and inner voice — especially during uncertainty.",
    image: "/interventions/trust-in-self.jpg",
  },
  {
    no: "02",
    title: "Self Authority",
    desc: "The innate ability to take ownership of our choices, exercise agency and lead without seeking external validation.",
    image: "/interventions/self-authority.jpg",
  },
  {
    no: "03",
    title: "Courage",
    desc: "The willingness to challenge limiting beliefs, embrace uncertainty and step forward despite fear.",
    image: "/interventions/courage.jpg",
  },
];

const FALLBACK = "linear-gradient(135deg,#1d4a5c,#0f2f3d)";

function CornerstoneCard({ no, title, desc, image }) {
  const bg = `linear-gradient(rgba(18,18,18,.68),rgba(18,18,18,.68)), ${
    image ? `url(${image})` : FALLBACK
  }`;

  return (
    <article
      tabIndex={0}
      className="group relative isolate aspect-auto min-h-[160px] sm:min-h-[175px] min-[860px]:aspect-[434/248] w-full cursor-pointer overflow-hidden rounded-[18px] sm:rounded-2xl bg-[#242424] md:bg-white [container-type:inline-size] border border-black/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.04)] outline-none transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(0,0,0,0.12)] hover:border-[#FF5E14]/30"
    >
      {/* photo + dark overlay (visible on mobile, revealed on hover on desktop) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-100 md:opacity-0 transition-opacity duration-700 md:group-hover:opacity-100 md:group-active:opacity-100 scale-100 md:group-hover:scale-105 transition-transform duration-700 ease-out"
        style={{ backgroundImage: bg }}
      />

      {/* blurred orange shade (hidden on small mobile, visible on desktop until hover) */}
      <span
        aria-hidden
        className="hidden md:block pointer-events-none absolute -z-10 right-[4.5cqw] top-[-18cqw] h-[79.8cqw] w-[3.1cqw] rotate-[12.566deg] bg-[#FF5E14] opacity-30 blur-[6cqw] transition-opacity duration-500 group-hover:opacity-0"
      />

      {/* content: centered horizontally + vertically with fixed number column for rock-solid consistent alignment */}
      <div className="relative md:absolute md:inset-0 flex items-center gap-3.5 sm:gap-4 md:gap-[4cqw] p-5 sm:p-6 md:px-[4.5cqw] md:py-0 w-full h-full">
        {/* number column: fixed width so all card titles line up perfectly */}
        <div className="flex-none shrink-0 w-[76px] sm:w-[90px] min-[860px]:w-[34cqw] flex items-center justify-start">
          <span
            className="cornerstone-card-no inline-block font-ppmori tabular-nums text-[54px] sm:text-[64px] min-[860px]:text-[length:28.5cqw] font-semibold leading-[1.1] text-white md:text-[#FF5E14] will-change-transform"
          >
            {no}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="cornerstone-card-title font-ppmori text-[20px] sm:text-[22px] min-[860px]:text-[length:clamp(19px,5.4cqw,26px)] font-semibold leading-tight tracking-[-0.6px] sm:tracking-[-0.8px] text-white md:text-[#242424] transition-colors duration-300">
            {title}
          </h3>
          <p className="cornerstone-card-desc mt-1.5 sm:mt-[0.5em] font-inter text-[14px] sm:text-[14.5px] min-[860px]:text-[length:clamp(13px,3.3cqw,16px)] font-normal leading-[1.55] tracking-[-0.3px] text-white/95 md:text-[#525252] transition-colors duration-300">
            {desc}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Cornerstones() {
  return (
    <section className="bg-[#f5f5f5] text-[#1a1a1a] px-4 pb-16 pt-10 sm:px-6 md:pb-24 md:pt-16 relative overflow-hidden" id="overview">
      {/* Ambient background light orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full bg-[#FF5E14]/[0.05] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 w-[420px] h-[420px] rounded-full bg-[#205A9D]/[0.05] blur-[120px]"
      />
      {/* Figma Animations Style Block */}
      <style>{`
        @property --cornerstone-motion-translate-y {
          syntax: '<number>';
          initial-value: 0;
          inherits: false;
        }

        @media (min-width: 768px) {
          .cornerstone-card-no {
            --cornerstone-motion-translate-y: 0;
            transform: translate(0px, calc(var(--cornerstone-motion-translate-y, 0) * 1px));
            transform-origin: 0 0;
            transition: transform 0.6s cubic-bezier(0.22, 0.8, 0.2, 1), color 0.6s cubic-bezier(0.22, 0.8, 0.2, 1);
          }

          .group:hover .cornerstone-card-no {
            animation: kf_cornerstone_motion_y 1.250123s linear forwards,
                       kf_cornerstone_color_num 1.250123s linear forwards;
          }

          .cornerstone-card-title {
            transition: color 0.6s cubic-bezier(0.22, 0.8, 0.2, 1);
          }

          .group:hover .cornerstone-card-title {
            animation: kf_cornerstone_color_text 1.250123s linear forwards;
          }

          .cornerstone-card-desc {
            transition: color 0.6s cubic-bezier(0.22, 0.8, 0.2, 1);
          }

          .group:hover .cornerstone-card-desc {
            animation: kf_cornerstone_color_text 1.250123s linear forwards;
          }
        }

        @keyframes kf_cornerstone_motion_y {
          0% { --cornerstone-motion-translate-y: 0; }
          2.666% { --cornerstone-motion-translate-y: 3.473274; }
          5.333% { --cornerstone-motion-translate-y: 11.519276; }
          7.999% { --cornerstone-motion-translate-y: 21.480674; }
          10.666% { --cornerstone-motion-translate-y: 32.1577; }
          13.332% { --cornerstone-motion-translate-y: 42.369572; }
          15.998% { --cornerstone-motion-translate-y: 51.458492; }
          18.665% { --cornerstone-motion-translate-y: 59.191849; }
          21.331% { --cornerstone-motion-translate-y: 66.531586; }
          23.997% { --cornerstone-motion-translate-y: 72.549355; }
          26.664% { --cornerstone-motion-translate-y: 77.37249; }
          29.33% { --cornerstone-motion-translate-y: 81.150543; }
          31.997% { --cornerstone-motion-translate-y: 84.035339; }
          34.663% { --cornerstone-motion-translate-y: 86.169891; }
          37.329% { --cornerstone-motion-translate-y: 88.682831; }
          39.996% { --cornerstone-motion-translate-y: 90.68634; }
          42.662% { --cornerstone-motion-translate-y: 91.27607; }
          45.328% { --cornerstone-motion-translate-y: 92.532211; }
          47.995% { --cornerstone-motion-translate-y: 93.521103; }
          50.661% { --cornerstone-motion-translate-y: 94.29705; }
          53.328% { --cornerstone-motion-translate-y: 94.904137; }
          55.994% { --cornerstone-motion-translate-y: 95.377853; }
          58.66% { --cornerstone-motion-translate-y: 95.746613; }
          61.327% { --cornerstone-motion-translate-y: 96.033043; }
          63.993% { --cornerstone-motion-translate-y: 96.255096; }
          66.659% { --cornerstone-motion-translate-y: 96.426918; }
          69.326% { --cornerstone-motion-translate-y: 96.559662; }
          71.992% { --cornerstone-motion-translate-y: 96.662048; }
          74.659% { --cornerstone-motion-translate-y: 96.740913; }
          77.325% { --cornerstone-motion-translate-y: 96.801567; }
          79.991% { --cornerstone-motion-translate-y: 96.848175; }
          82.658% { --cornerstone-motion-translate-y: 96.883934; }
          85.324% { --cornerstone-motion-translate-y: 96.911346; }
          87.99% { --cornerstone-motion-translate-y: 96.932343; }
          90.657% { --cornerstone-motion-translate-y: 96.948402; }
          93.323% { --cornerstone-motion-translate-y: 96.960686; }
          95.99% { --cornerstone-motion-translate-y: 96.970055; }
          98.656% { --cornerstone-motion-translate-y: 104.977211; }
          100% { --cornerstone-motion-translate-y: 105; }
        }

        @keyframes kf_cornerstone_color_num {
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

        @keyframes kf_cornerstone_color_text {
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
          Three cornerstones
        </div>
        <h2 className="mt-3.5 font-ppmori text-[clamp(30px,4.6vw,52px)] font-semibold leading-[1.05] sm:leading-[1.12] tracking-[-0.8px] text-[#242424]">
          Of personal power.
        </h2>
      </Reveal>

      {/* Cards Grid: 3 cards in a single row on desktop */}
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 justify-center gap-4 sm:gap-5 min-[860px]:grid-cols-3">
        {CORNERSTONES.map((item, index) => (
          <Reveal
            key={item.no}
            direction="up"
            delay={index * 80}
            duration={650}
            distance={24}
            className="w-full"
          >
            <CornerstoneCard {...item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
