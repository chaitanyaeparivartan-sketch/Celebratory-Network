"use client";

import Reveal from "@/app/components/Common/Reveal";

/**
 * TeamSection — "Celebratory Network team" grid (Tailwind CSS v3+ / v4).
 *
 * Built from the 1920px design spec:
 *   padding 83px 287px 106.891px, 58px gap between header and grid, bg #F6F6F6,
 *   photo height 281.055px, radius 20px.
 */

const DEFAULT_TEAM = [
  {
    name: "Payal Gupta",
    role: "CEO and Director",
    image: "/about/team-image-1.webp",
    position: "center top",
  },
  {
    name: "Saurabh Karade",
    role: "Director",
    image: "/about/team-image-2.webp",
    position: "center top",
  },
  {
    name: "Probir Roy",
    role: "High Impact Advisor",
    image: "/about/team-image-3.webp",
    position: "center top",
  },
  {
    name: "Bhanumathy Vasudevan",
    role: "Mentor",
    image: "/about/team-image-4.webp",
    position: "center top",
  },
  {
    name: "Jaya Nuty",
    role: "Principal Consultant",
    image: "/about/team-image-5.webp",
    position: "center top",
  },
  {
    name: "Kesha Kapadia",
    role: "Senior Consultant",
    image: "/about/team-image-6.webp",
    position: "center top",
  },
];

export default function TeamSection({ team = DEFAULT_TEAM }) {
  return (
    <section
      aria-labelledby="team-title"
      className="flex flex-col items-center gap-[58px] bg-[#F6F6F6] px-[clamp(20px,15vw,287px)] pb-10 sm:pb-12 lg:pb-14 pt-[83px] text-[#242424] antialiased max-sm:gap-10 max-sm:pt-14"
    >
      {/* Header */}
      <Reveal direction="up" duration={700} className="flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 font-inter text-[12px] sm:text-[13px] md:text-[14px] font-medium uppercase leading-[18px] tracking-[0.24px] before:h-[6px] before:w-[6px] before:rounded-[1px] before:bg-[#FF5E14] before:content-['']">
          The people behind the network
        </span>
        <h2
          id="team-title"
          className="mt-2.5 font-ppmori text-[clamp(30px,4.6vw,52px)] font-semibold leading-[0.923] tracking-[-0.8px]"
        >
          Celebratory Network team
        </h2>
      </Reveal>

      {/* Grid: 3 columns across the 1346px content width (1920 − 2 × 287) */}
      <ul className="grid w-full max-w-[1346px] grid-cols-1 gap-x-[30px] gap-y-[52px] sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
        {team.map((member, index) => (
          <Reveal
            as="li"
            key={member.name}
            direction="up"
            delay={index * 70}
            duration={650}
            distance={24}
            className="group cursor-pointer"
          >
            <div
              role="img"
              aria-label={`Photo of ${member.name}`}
              style={{
                background: member.position
                  ? `url(${member.image}) lightgray ${member.position} / cover no-repeat`
                  : `url(${member.image}) lightgray center / cover no-repeat`,
              }}
              className="h-[281.055px] self-stretch rounded-[20px] transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]"
            />
            <h3 className="mt-4 font-ppmori text-[20px] sm:text-[22px] md:text-[24px] font-semibold leading-[30px] tracking-[-0.8px] transition-colors duration-300 group-hover:text-[#0f0f0f]">
              {member.name}
            </h3>
            <p className="mt-1 font-inter text-[15px] sm:text-[16px] md:text-[17px] font-bold uppercase leading-5 tracking-[-0.8px] text-[#FF5E14]">
              {member.role}
            </p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

export { TeamSection as Team };

