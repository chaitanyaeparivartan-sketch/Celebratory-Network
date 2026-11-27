"use client";

import ODHero from "@/app/od-consulting/components/ODHero";

const DEIB_HERO_CARDS = [
  {
    id: 1,
    avatar: "/diversity-inclusion/dei-leadership.webp",
    line1: "Leadership & Sponsors: DEI",
    line2: "councils, vision & governance",
    bg: "bg-[#E5F2FF]",
    bullet: "bg-[#0284C7]",
    pos: "left-[2%] sm:left-[3%] xl:left-[4%] top-[195px] xl:top-[215px] max-[700px]:left-[4%] max-[700px]:top-[104px]",
    animName: "chipFloat1",
    animDuration: "5.8s",
    animDelay: "0s",
    parallax: { x: -14, y: -10 },
    speed: -90,
  },
  {
    id: 2,
    avatar: "/diversity-inclusion/hero-banner.webp",
    line1: "Diversity Champions: active",
    line2: "internal inclusion networks",
    bg: "bg-[#E6FAE1]",
    bullet: "bg-[#16A34A]",
    pos: "left-[18%] xl:left-[22%] top-[120px] sm:top-[126px] xl:top-[134px] max-[700px]:hidden",
    grow: true, // Expands into the full screen background photo!
    animName: "chipFloat2",
    animDuration: "5.2s",
    animDelay: "0.8s",
    parallax: { x: 10, y: -10 },
    speed: -40,
  },
  {
    id: 3,
    avatar: "/diversity-inclusion/dei-game-changer.webp",
    line1: "Empathy circles: structured",
    line2: "transformative dialogue",
    bg: "bg-[#F5EBFF]",
    bullet: "bg-[#C026D3]",
    pos: "left-[54%] xl:left-[56%] top-[120px] sm:top-[126px] xl:top-[134px] max-[700px]:hidden",
    animName: "chipFloat3",
    animDuration: "6.4s",
    animDelay: "0.4s",
    parallax: { x: -10, y: -8 },
    speed: -100,
  },
  {
    id: 4,
    avatar: "/diversity-inclusion/dei-assessment.webp",
    line1: "DEI Assessment: index,",
    line2: "audits & cultural diagnostics",
    bg: "bg-[#FFF0E6]",
    bullet: "bg-[#EA580C]",
    pos: "right-[2%] sm:right-[3%] xl:right-[4%] top-[195px] xl:top-[215px] max-[700px]:hidden",
    animName: "chipFloat4",
    animDuration: "5.5s",
    animDelay: "1.2s",
    parallax: { x: 14, y: 10 },
    speed: -80,
  },
  {
    id: 5,
    avatar: "/diversity-inclusion/learning-journey.webp",
    line1: "Employee Resource Groups:",
    line2: "Gender, Generations & Pride",
    bg: "bg-[#FFF7ED]",
    bullet: "bg-[#D97706]",
    pos: "left-[3%] sm:left-[4%] xl:left-[5%] bottom-[48px] xl:bottom-[56px] max-[700px]:left-[3%] max-[700px]:bottom-[40px]",
    animName: "chipFloat5",
    animDuration: "5.0s",
    animDelay: "0.2s",
    parallax: { x: -8, y: 12 },
    speed: 120,
  },
  {
    id: 6,
    avatar: "/diversity-inclusion/learning-journey.webp",
    line1: "Inclusive Learning Journeys:",
    line2: "unconscious bias & allyship",
    bg: "bg-[#EFF6FF]",
    bullet: "bg-[#2563EB]",
    pos: "left-[26%] xl:left-[28%] bottom-[32px] xl:bottom-[40px] max-[700px]:hidden",
    animName: "chipFloat6",
    animDuration: "6.2s",
    animDelay: "0.6s",
    parallax: { x: 8, y: 12 },
    speed: 130,
  },
  {
    id: 7,
    avatar: "/diversity-inclusion/diversity-champions.webp",
    line1: "Returntships & second careers:",
    line2: "intergenerational workplaces",
    bg: "bg-[#E6FAE1]",
    bullet: "bg-[#16A34A]",
    pos: "right-[3%] sm:right-[4%] xl:right-[5%] bottom-[48px] xl:bottom-[56px] max-[700px]:right-[3%] max-[700px]:bottom-[40px]",
    animName: "chipFloat7",
    animDuration: "6.0s",
    animDelay: "0.3s",
    parallax: { x: 12, y: 10 },
    speed: 100,
  },
];

export default function Hero(props) {
  return (
    <ODHero
      badge="Our DEIB Practice"
      title={
        <>
          Diversity, Equity,{" "}
          <span className="text-[#FF5E14]">Inclusion & Belonging</span>
        </>
      }
      lead="Building workplaces where every voice is heard, every difference is valued and everyone can do their best work."
      bgImage="/diversity-inclusion/hero-banner.webp"
      mobileBgImage="/diversity-inclusion/hero-banner-mobile.webp"
      cards={DEIB_HERO_CARDS}
      {...props}
    />
  );
}
