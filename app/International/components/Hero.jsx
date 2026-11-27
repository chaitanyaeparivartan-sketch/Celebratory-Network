"use client";

import ODHero from "@/app/od-consulting/components/ODHero";

const INTERNATIONAL_CARDS = [
  {
    id: 1,
    avatar: "/international/personal-power-bulb.webp",
    line1: "Personal Power in",
    line2: "Leadership for women leaders",
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
    avatar: "/international/international-hero.webp",
    line1: "Leading with Shakti in",
    line2: "complex adaptive systems",
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
    avatar: "/international/focus/focus-1.webp",
    line1: "Human-centered inner",
    line2: "alignment & self-awareness",
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
    avatar: "/international/focus/focus-2.webp",
    line1: "Human process & real",
    line2: "experiential learning labs",
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
    avatar: "/international/focus/focus-3.webp",
    line1: "Navigating uncertainty &",
    line2: "complexity beyond borders",
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
    avatar: "/international/focus/focus-4.webp",
    line1: "Applied behavioural science",
    line2: "for lasting system change",
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
    avatar: "/international/leading-with-shakti.webp",
    line1: "Collective intelligence &",
    line2: "authentic group emergence",
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
      badge="OD and leadership"
      title={
        <>
          Beyond <span className="text-[#FF5E14]">Borders.</span>
        </>
      }
      lead="Equipping leadership teams to navigate complexity, uncertainty, and change—across the UK, US, Brazil, Berlin, Thailand, Malaysia, and Vietnam."
      bgImage="/international/international-hero.webp"
      mobileBgImage="/international/international-hero-mobile.webp"
      cards={INTERNATIONAL_CARDS}
      {...props}
    />
  );
}
