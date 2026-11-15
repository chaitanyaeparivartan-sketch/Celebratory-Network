"use client";

/**
 * components/DNA.jsx  (Next.js + Tailwind CSS)
 */

const ITEMS = [
  {
    no: "01",
    title: "The client system comes first",
    desc: "Every engagement starts with the whole system around the client, not just the brief in front of us.",
    image: "/AboutUs/DNA/dna-image-1.webp",
  },
  {
    no: "02",
    title: "We Operate as Equals",
    desc: "We believe meaningful work happens through partnership, openness, and mutual respect, not hierarchy.",
    image: "/AboutUs/DNA/dna-image-2.webp",
  },
  {
    no: "03",
    title: "Novelty is Important to Bring Energy",
    desc: "We bring fresh thinking, new perspectives, and creative approaches to keep the work alive and energising.",
    image: "/AboutUs/DNA/dna-image-3.webp",
  },
  {
    no: "04",
    title: "Commitment to Deliverables",
    desc: "We take ownership of what we commit to and stay focused on creating meaningful outcomes.",
    image: "/AboutUs/DNA/dna-image-4.webp",
  },
  {
    no: "05",
    title: "Speed and Flow",
    desc: "We value momentum, responsiveness, and a smooth flow of work without compromising thoughtfulness.",
    image: "/AboutUs/DNA/dna-image-5.webp",
  },
  {
    no: "06",
    title: "Saying No",
    desc: "We believe that knowing when to say no is as important as knowing what to say yes to.",
    image: "/AboutUs/DNA/dna-image-6.webp",
  },
];

const FALLBACK = "linear-gradient(135deg,#1d4a5c,#0f2f3d)";

function DnaCard({ no, title, desc, image }) {
  const bg = `linear-gradient(rgba(36,36,36,.55),rgba(36,36,36,.55)), ${
    image ? `url(${image})` : FALLBACK
  }`;

  return (
    <article
      className="group relative isolate aspect-[663/292] w-full cursor-pointer overflow-hidden rounded-2xl bg-[#242424] md:bg-white [container-type:inline-size] max-[480px]:aspect-auto max-[480px]:min-h-[190px]"
    >
      {/* photo + dark overlay (visible on mobile, hover on desktop) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-100 md:opacity-0 transition-opacity duration-700 md:group-hover:opacity-100"
        style={{ backgroundImage: bg }}
      />

      {/* blurred orange shade (hidden on mobile, visible on desktop until hover) */}
      <span
        aria-hidden
        className="hidden md:block pointer-events-none absolute -z-10 right-[4.5cqw] top-[-18cqw] h-[79.8cqw] w-[3.1cqw] rotate-[12.566deg] bg-[#FF5E14] opacity-30 blur-[6cqw] transition-opacity duration-500 group-hover:opacity-0"
      />

      {/* content: centered horizontally + vertically */}
      <div className="absolute inset-0 flex items-center justify-center gap-[7cqw] px-[4cqw] max-[480px]:relative max-[480px]:inset-auto max-[480px]:min-h-[190px] max-[480px]:gap-[5cqw] max-[480px]:px-[5cqw] max-[480px]:py-5">
        {/* number: vertically centered + white on mobile, interactive on desktop */}
        <span
          className="dna-card-no flex-none font-ppmori text-[length:26.9cqw] font-semibold leading-[1.25] text-white md:text-[#FF5E14] will-change-transform max-[480px]:text-[length:25cqw]"
        >
          {no}
        </span>

        <div className="min-w-0 flex-[0_1_52.6cqw] max-[480px]:flex-1">
          <h3 className="dna-card-title font-inter text-[length:clamp(16px,3.62cqw,24px)] font-semibold leading-tight tracking-[-0.8px] text-white md:text-[#242424] max-[480px]:text-[length:clamp(15px,4.6cqw,20px)]">
            {title}
          </h3>
          <p className="dna-card-desc mt-[0.5em] font-inter text-[length:clamp(12px,2.41cqw,16px)] font-normal leading-tight tracking-[-0.4px] text-white/95 md:text-[#242424] max-[480px]:text-[length:clamp(12px,3.6cqw,14px)]">
            {desc}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function OurDna() {
  return (
    <section className="bg-[#f5f5f5] px-4 pb-24 pt-10 sm:px-6 md:pt-16">
      {/* Figma Animations Style Block */}
      <style>{`
        @property --motion-translate-y {
          syntax: '<number>';
          initial-value: 0;
          inherits: false;
        }

        @media (min-width: 768px) {
          .dna-card-no {
            --motion-translate-y: 0;
            transform: translate(0px, calc(var(--motion-translate-y, 0) * 1px));
            transform-origin: 0 0;
            transition: transform 0.6s cubic-bezier(0.22, 0.8, 0.2, 1), color 0.6s cubic-bezier(0.22, 0.8, 0.2, 1);
          }

          .group:hover .dna-card-no {
            animation: kf_203_5880_--motion-translate-y_0 1.250123s linear forwards,
                       kf_203_5881_color_0 1.250123s linear forwards;
          }

          .dna-card-title {
            transition: color 0.6s cubic-bezier(0.22, 0.8, 0.2, 1);
          }

          .group:hover .dna-card-title {
            animation: kf_203_5879_color_0 1.250123s linear forwards;
          }

          .dna-card-desc {
            transition: color 0.6s cubic-bezier(0.22, 0.8, 0.2, 1);
          }

          .group:hover .dna-card-desc {
            animation: kf_203_5878_color_0 1.250123s linear forwards;
          }
        }

        /* Frame 104 Number Translation */
        @keyframes kf_203_5880_--motion-translate-y_0 {
          0% { --motion-translate-y: 0; }
          2.666% { --motion-translate-y: 4.273274; }
          5.333% { --motion-translate-y: 14.119276; }
          7.999% { --motion-translate-y: 26.380674; }
          10.666% { --motion-translate-y: 39.1577; }
          13.332% { --motion-translate-y: 51.369572; }
          15.998% { --motion-translate-y: 62.458492; }
          18.665% { --motion-translate-y: 72.191849; }
          21.331% { --motion-translate-y: 80.531586; }
          23.997% { --motion-translate-y: 87.549355; }
          26.664% { --motion-translate-y: 93.37249; }
          29.33% { --motion-translate-y: 98.150543; }
          31.997% { --motion-translate-y: 102.035339; }
          34.663% { --motion-translate-y: 105.169891; }
          37.329% { --motion-translate-y: 107.682831; }
          39.996% { --motion-translate-y: 109.68634; }
          42.662% { --motion-translate-y: 111.27607; }
          45.328% { --motion-translate-y: 112.532211; }
          47.995% { --motion-translate-y: 113.521103; }
          50.661% { --motion-translate-y: 114.29705; }
          53.328% { --motion-translate-y: 114.904137; }
          55.994% { --motion-translate-y: 115.377853; }
          58.66% { --motion-translate-y: 115.746613; }
          61.327% { --motion-translate-y: 116.033043; }
          63.993% { --motion-translate-y: 116.255096; }
          66.659% { --motion-translate-y: 116.426918; }
          69.326% { --motion-translate-y: 116.559662; }
          71.992% { --motion-translate-y: 116.662048; }
          74.659% { --motion-translate-y: 116.740913; }
          77.325% { --motion-translate-y: 116.801567; }
          79.991% { --motion-translate-y: 116.848175; }
          82.658% { --motion-translate-y: 116.883934; }
          85.324% { --motion-translate-y: 116.911346; }
          87.99% { --motion-translate-y: 116.932343; }
          90.657% { --motion-translate-y: 116.948402; }
          93.323% { --motion-translate-y: 116.960686; }
          95.99% { --motion-translate-y: 116.970055; }
          98.656% { --motion-translate-y: 116.977211; }
          100% { --motion-translate-y: 117; }
        }

        /* Number Color Transition (#FF5E14 -> #FFF) */
        @keyframes kf_203_5881_color_0 {
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

        /* Title Color Transition (#242424 -> #FFF) */
        @keyframes kf_203_5879_color_0 {
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

        /* Description Color Transition (#242424 -> #FFF) */
        @keyframes kf_203_5878_color_0 {
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

      <div className="mb-6 text-center md:mb-10">
        <div className="inline-flex items-center gap-1.5 font-inter text-[12px] sm:text-[13px] md:text-[14px] font-medium uppercase leading-[18px] tracking-[0.24px] text-[#242424]">
          <span className="h-1.5 w-1.5 rounded-[1px] bg-[#FF5E14]" />
          Our DNA
        </div>
        <h2 className="mt-3.5 font-ppmori text-[clamp(30px,4.6vw,52px)] font-semibold leading-none tracking-[-0.8px] text-[#242424]">
          What we believe, How we work.
        </h2>
      </div>

      <div className="mx-auto grid max-w-[1342px] grid-cols-1 justify-center gap-4 min-[861px]:grid-cols-2 max-[860px]:max-w-[663px]">
        {ITEMS.map((item) => (
          <DnaCard key={item.no} {...item} />
        ))}
      </div>
    </section>
  );
}

export { OurDna as DNA };
