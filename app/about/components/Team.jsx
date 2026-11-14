"use client";

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
    image: "/AboutUs/Team/payal-gupta.png",
    position: "center top",
  },
  {
    name: "Saurabh Karade",
    role: "Director",
    image: "/AboutUs/Team/sourabh-karade.png",
    position: "center top",
  },
  {
    name: "Probir Roy",
    role: "High Impact Advisor",
    image: "/AboutUs/Team/probir-roy.png",
    position: "center top",
  },
  {
    name: "Bhanumathy Vasudevan",
    role: "Mentor",
    image: "/AboutUs/Team/bhanumathy-vasudev.png",
    position: "center top",
  },
  {
    name: "Jaya Nuty",
    role: "Principal Consultant",
    image: "/AboutUs/Team/jaya-nuty.png",
    position: "center top",
  },
  {
    name: "Kesha Kapadia",
    role: "Senior Consultant",
    image: "/AboutUs/Team/kesha-kapadia.png",
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
      <div className="flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 font-inter text-[12px] sm:text-[13px] md:text-[14px] font-medium uppercase leading-[18px] tracking-[0.24px] before:h-[6px] before:w-[6px] before:rounded-[1px] before:bg-[#FF5E14] before:content-['']">
          The people behind the network
        </span>
        <h2
          id="team-title"
          className="mt-2.5 font-ppmori text-[clamp(30px,4.6vw,52px)] font-semibold leading-[0.923] tracking-[-0.8px]"
        >
          Celebratory Network team
        </h2>
      </div>

      {/* Grid: 3 columns across the 1346px content width (1920 − 2 × 287) */}
      <ul className="grid w-full max-w-[1346px] grid-cols-1 gap-x-[30px] gap-y-[52px] sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <li key={member.name}>
            <div
              role="img"
              aria-label={`Photo of ${member.name}`}
              style={{
                background: member.position
                  ? `url(${member.image}) lightgray ${member.position} / cover no-repeat`
                  : `url(${member.image}) lightgray center / cover no-repeat`,
              }}
              className="h-[281.055px] self-stretch rounded-[20px] transition-transform duration-300 hover:scale-[1.02]"
            />
            <h3 className="mt-4 font-ppmori text-[20px] sm:text-[22px] md:text-[24px] font-semibold leading-[30px] tracking-[-0.8px]">
              {member.name}
            </h3>
            <p className="mt-1 font-inter text-[15px] sm:text-[16px] md:text-[17px] font-bold uppercase leading-5 tracking-[-0.8px] text-[#FF5E14]">
              {member.role}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export { TeamSection as Team };

