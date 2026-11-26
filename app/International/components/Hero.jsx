"use client";

import ODHero from "@/app/od-consulting/components/ODHero";

const INTERNATIONAL_CARDS = [
  {
    id: 1,
    avatar: "/international/uk.jpg",
    line1: "Navigating complexity &",
    line2: "uncertainty in the UK",
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
    avatar: "/international/us.webp",
    line1: "Strategic leadership &",
    line2: "business impact across US",
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
    avatar: "/international/brazil.webp",
    line1: "Empowering leadership",
    line2: "teams in Brazil",
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
    avatar: "/international/berlin.webp",
    line1: "Organization development",
    line2: "initiatives in Berlin",
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
    avatar: "/international/thailand.webp",
    line1: "Personal Power in",
    line2: "Leadership in Thailand",
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
    avatar: "/international/malaysia.webp",
    line1: "Cross-border adaptive",
    line2: "systems in Malaysia",
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
    avatar: "/international/vietnam.webp",
    line1: "Transforming leadership",
    line2: "culture in Vietnam",
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
      lead="Our work internationally has been designed for leaders to work with the business realities of navigating complexity, uncertainty, and change. We work with leadership teams whose impact helps businesses realise their full potential. Celebratory Network has partnered with leaders on Personal Power in Leadership and Organization Development in the UK, US, Brazil, Berlin, Thailand, Malaysia, Vietnam…"
      bgImage="/international/international-hero.jpg"
      cards={INTERNATIONAL_CARDS}
      {...props}
    />
  );
}
