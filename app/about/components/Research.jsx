"use client";

import Reveal from "@/app/components/Common/Reveal";

/**
 * components/Research.jsx  (Next.js + Tailwind CSS)
 */

const RESEARCH = [
  {
    year: "2017–19",
    title: "Happiness Research",
    desc: "3rd global research on Happiness at work. Also published on an online news platform.",
    cta: "Read More",
    href: "#",
  },
  {
    year: "2019",
    title: "India ABS Summit",
    desc: "Presented a paper on Happiness at work at the Applied Behavioral Science Summit, November 2019.",
    cta: "Read More",
    href: "#",
  },
  {
    year: "2020",
    title: "Receptiveness to Complexity",
    desc: "Global research on the impact of the pandemic on leaders and businesses.",
    cta: "Read More",
    href: "#",
  },
  {
    year: "2022",
    title: "Joy & Belongingness at Work",
    desc: "To understand the levels of joy and belongingness one experiences at work.",
    cta: "Read More",
    href: "#",
  },
];

const VOICE = [
  {
    year: "Forum",
    title: "Disrupt HR",
    desc: "Payal Gupta, CEO & Director, presented our work on Happy Workplace Cultures® at Disrupt HR, the first forum of its kind in India.",
    cta: "Read More",
    href: "#",
  },
  {
    year: "Podcast",
    title: "People Matters",
    desc: "Payal Gupta, CEO & Director, was interviewed for the podcast on The Science of Happyness at Work by People Matters.",
    cta: "Listen",
    href: "#",
  },
  {
    year: "Textbook",
    title: "Organization Development Book",
    desc: "Our work is published as case studies in the Organization Development textbook by French, Bell and Vora.",
    cta: "Read More",
    href: "#",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
    >
      <path d="M4.66675 11.3332L11.3334 4.6665" stroke="#242424" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.33325 4.6665H11.3333V10.6665" stroke="#242424" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Row({ year, title, desc, cta, href }) {
  return (
    <div className="flex items-center gap-12 border-t border-[#e2e0d8] py-8 max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-2.5 max-[760px]:py-6 transition-colors duration-300 hover:bg-black/[0.015] px-2 rounded-sm group">
      <div className="w-[120px] flex-none font-inter text-[14px] sm:text-[15px] font-semibold text-[#FF5E14] max-[760px]:w-auto">
        {year}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="font-inter text-[20px] sm:text-[22px] md:text-[24px] font-semibold leading-[30px] tracking-[-0.24px] text-[#111] transition-colors duration-200 group-hover:text-[#FF5E14]">
          {title}
        </h3>
        <p className="mt-2 max-w-[760px] font-inter text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal leading-[1.6] text-[#5a5a55]">
          {desc}
        </p>
      </div>

      <a
        href={href}
        className="group/link inline-flex flex-none items-center justify-center gap-2.5 whitespace-nowrap px-[19px] py-[13px] font-inter text-[14px] sm:text-[15px] font-medium leading-none text-[#242424] underline-offset-4 hover:underline hover:text-[#FF5E14] transition-colors duration-200 max-[760px]:mt-1 max-[760px]:px-0 max-[760px]:py-2"
      >
        {cta}
        <ArrowIcon />
      </a>
    </div>
  );
}

function Group({ label, rows }) {
  return (
    <section>
      <Reveal direction="up" duration={600} distance={18}>
        <div className="mb-6 font-inter text-[12px] sm:text-[13px] md:text-[14px] font-semibold uppercase tracking-[1.68px] text-[#5a5a55]">
          {label}
        </div>
      </Reveal>
      <div className="border-b border-[#e2e0d8]">
        {rows.map((r, i) => (
          <Reveal
            key={r.title}
            direction="up"
            delay={i * 60}
            duration={650}
            distance={20}
          >
            <Row {...r} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default function Research() {
  return (
    <section className="bg-[#f5f5f5] px-4 pb-12 pt-6 sm:px-8 sm:pt-8 lg:pb-[88px] lg:pt-10">
      <div className="mx-auto flex w-full max-w-[1132px] flex-col gap-8 lg:gap-[58px]">
        {/* heading */}
        <Reveal direction="up" duration={700} className="text-center">
          <div className="inline-flex items-center gap-1.5 font-inter text-[12px] sm:text-[13px] md:text-[14px] font-medium uppercase leading-[18px] tracking-[0.24px] text-[#242424]">
            <span className="h-2 w-2 rounded-[2px] bg-[#FF5E14]" />
            Research &amp; Recognition
          </div>
          <h2 className="mt-3.5 font-ppmori text-[clamp(30px,4.6vw,52px)] font-semibold leading-[0.92] tracking-[-0.8px] text-[#242424]">
            Studying how people thrive at work.
          </h2>
        </Reveal>

        <Group label="Research" rows={RESEARCH} />
        <Group label="Voice & Publications" rows={VOICE} />
      </div>
    </section>
  );
}

export { Research as ResearchRecognition };

