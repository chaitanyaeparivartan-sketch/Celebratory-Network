"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Reveal from "@/app/components/Common/Reveal";
import AnimatedCounter from "@/app/components/Common/AnimatedCounter";

const FLOATING_CARDS = [
  {
    id: 1,
    avatar: "/Home/Stats/stat-image-1.webp",
    line1: "Guide transformation with",
    line2: "your people on board",
    bg: "bg-[#E5F2FF]",
    bullet: "bg-[#0284C7]",
    desktopStyle: { left: "0%", top: "18%" },
    animName: "chipFloat1",
    animDuration: "5.8s",
    animDelay: "0s",
    parallax: { x: -18, y: -14 },
  },
  {
    id: 2,
    avatar: "/Home/Stats/stat-image-2.webp",
    line1: "Align leadership teams on",
    line2: "one shared direction",
    bg: "bg-[#E6FAE1]",
    bullet: "bg-[#16A34A]",
    desktopStyle: { left: "24%", top: "4%" },
    animName: "chipFloat2",
    animDuration: "5.2s",
    animDelay: "0.8s",
    parallax: { x: 12, y: -16 },
  },
  {
    id: 3,
    avatar: "/Home/Stats/stat-image-3.webp",
    line1: "Move leaders from function to",
    line2: "enterprise thinking",
    bg: "bg-[#F5EBFF]",
    bullet: "bg-[#C026D3]",
    desktopStyle: { left: "55%", top: "4%" },
    animName: "chipFloat3",
    animDuration: "6.4s",
    animDelay: "0.4s",
    parallax: { x: -14, y: -12 },
  },
  {
    id: 4,
    avatar: "/Home/Stats/stat-image-4.webp",
    line1: "Build trust that",
    line2: "survives disagreement",
    bg: "bg-[#FFF0E6]",
    bullet: "bg-[#EA580C]",
    desktopStyle: { right: "0.5%", top: "18%" },
    animName: "chipFloat4",
    animDuration: "5.5s",
    animDelay: "1.2s",
    parallax: { x: 20, y: -15 },
  },
  {
    id: 5,
    avatar: "/Home/Stats/stat-image-5.webp",
    line1: "Evolve culture, keep",
    line2: "what makes you unique",
    bg: "bg-[#F5EBFF]",
    bullet: "bg-[#D946EF]",
    desktopStyle: { left: "5%", bottom: "24px" },
    animName: "chipFloat5",
    animDuration: "6.2s",
    animDelay: "0.6s",
    parallax: { x: -16, y: 14 },
  },
  {
    id: 6,
    avatar: "/Home/Stats/stat-image-6.webp",
    line1: "Work through conflict, keep",
    line2: "relationships strong",
    bg: "bg-[#FFF3DB]",
    bullet: "bg-[#F97316]",
    desktopStyle: { left: "39.5%", bottom: "12px" },
    animName: "chipFloat6",
    animDuration: "5.6s",
    animDelay: "1.5s",
    parallax: { x: 10, y: 16 },
  },
  {
    id: 7,
    avatar: "/Home/Stats/stat-image-7.webp",
    line1: "Strengthen decision-making",
    line2: "and accountability",
    bg: "bg-[#E6FAE1]",
    bullet: "bg-[#16A34A]",
    desktopStyle: { right: "1%", bottom: "20px" },
    animName: "chipFloat7",
    animDuration: "6.0s",
    animDelay: "0.3s",
    parallax: { x: 18, y: 14 },
  },
];

const MOBILE_TOP_CHIPS = [
  {
    id: 2,
    avatar: "/Home/Stats/stat-image-2.webp",
    line1: "Align leadership teams on",
    line2: "one shared direction",
    bg: "bg-[#E6FAE1]",
    bullet: "bg-[#16A34A]",
    alignClass: "justify-end",
    direction: "left", // slides in from right to left
    animName: "chipFloat2",
    animDuration: "5.2s",
    animDelay: "0.4s",
  },
  {
    id: 1,
    avatar: "/Home/Stats/stat-image-1.webp",
    line1: "Guide transformation with",
    line2: "your people on board",
    bg: "bg-[#E5F2FF]",
    bullet: "bg-[#0284C7]",
    alignClass: "justify-start",
    direction: "right", // slides in from left to right
    animName: "chipFloat1",
    animDuration: "5.8s",
    animDelay: "0s",
  },
  {
    id: 4,
    avatar: "/Home/Stats/stat-image-4.webp",
    line1: "Build trust that survives",
    line2: "disagreement",
    bg: "bg-[#FFF0E6]",
    bullet: "bg-[#EA580C]",
    alignClass: "justify-end",
    direction: "left", // slides in from right to left
    animName: "chipFloat4",
    animDuration: "5.5s",
    animDelay: "0.8s",
  },
];

const MOBILE_BOTTOM_CHIPS = [
  {
    id: 3,
    avatar: "/Home/Stats/stat-image-3.webp",
    line1: "Move leaders from function",
    line2: "to enterprise thinking",
    bg: "bg-[#F5EBFF]",
    bullet: "bg-[#C026D3]",
    alignClass: "justify-end",
    direction: "left", // slides in from right to left
    animName: "chipFloat3",
    animDuration: "6.4s",
    animDelay: "0.3s",
  },
  {
    id: 5,
    avatar: "/Home/Stats/stat-image-5.webp",
    line1: "Evolve culture, keep what",
    line2: "makes you unique",
    bg: "bg-[#F5EBFF]",
    bullet: "bg-[#D946EF]",
    alignClass: "justify-start",
    direction: "right", // slides in from left to right
    animName: "chipFloat5",
    animDuration: "6.2s",
    animDelay: "0.6s",
  },
  {
    id: 6,
    avatar: "/Home/Stats/stat-image-6.webp",
    line1: "Work through conflict, keep",
    line2: "relationships strong",
    bg: "bg-[#FFF3DB]",
    bullet: "bg-[#F97316]",
    alignClass: "justify-end",
    direction: "left", // slides in from right to left
    animName: "chipFloat6",
    animDuration: "5.6s",
    animDelay: "0.9s",
  },
  {
    id: 7,
    avatar: "/Home/Stats/stat-image-7.webp",
    line1: "Strengthen decision-",
    line2: "making and accountability",
    bg: "bg-[#E6FAE1]",
    bullet: "bg-[#16A34A]",
    alignClass: "justify-start ml-2 sm:ml-4",
    direction: "right", // slides in from left to right
    animName: "chipFloat7",
    animDuration: "6.0s",
    animDelay: "0.2s",
  },
];

const STATS = [
  {
    value: "20+",
    prefix: "Years of",
    highlight: "helping organization",
  },
  {
    value: "10+",
    prefix: "Countries,",
    highlight: "Global reach",
  },
  {
    value: "13+",
    prefix: "Research",
    highlight: "Projects",
  },
  {
    value: "9",
    prefix: "Months,",
    highlight: "Women Leadership journey",
  },
];

export default function Stats() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section className="relative w-full bg-white overflow-hidden pt-12 sm:pt-16 pb-8 sm:pb-10 md:pb-12">
      {/* Floating Keyframes Definition */}
      <style>{`
        @keyframes chipFloat1 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(4px, -10px, 0) rotate(-0.5deg); }
        }
        @keyframes chipFloat2 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(-5px, -12px, 0) rotate(0.8deg); }
        }
        @keyframes chipFloat3 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(5px, -9px, 0) rotate(-0.6deg); }
        }
        @keyframes chipFloat4 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(-4px, -11px, 0) rotate(0.5deg); }
        }
        @keyframes chipFloat5 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(5px, -8px, 0) rotate(0.6deg); }
        }
        @keyframes chipFloat6 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(-3px, -13px, 0) rotate(-0.5deg); }
        }
        @keyframes chipFloat7 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(4px, -10px, 0) rotate(0.7deg); }
        }
      `}</style>

      {/* Upper Area: Center Headline with Floating Cards around it */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full max-w-[1400px] lg:h-[490px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center pt-2 pb-4 lg:py-0"
      >
        {/* Floating Cards (Desktop Absolute Positioning with continuous float + mouse parallax + scroll entrance) */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          {FLOATING_CARDS.map((card, index) => {
            const parallaxX = mousePos.x * card.parallax.x;
            const parallaxY = mousePos.y * card.parallax.y;

            return (
              <Reveal
                key={card.id}
                direction="scale"
                distance={20}
                delay={index * 90}
                duration={750}
                className="absolute pointer-events-auto group cursor-pointer"
                style={card.desktopStyle}
              >
                <div
                  style={{
                    transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0)`,
                    transition: "transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)",
                  }}
                >
                  {/* Continuous Floating Physics Container */}
                  <div
                    className="flex items-center gap-2 will-change-transform transition-transform duration-300 ease-out group-hover:scale-105"
                    style={{
                      animation: `${card.animName} ${card.animDuration} ease-in-out ${card.animDelay} infinite`,
                    }}
                  >
                    {/* Avatar Image */}
                    <div className="relative w-[44px] h-[44px] xl:w-[48px] xl:h-[48px] rounded-[10px] xl:rounded-[12px] overflow-hidden shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.06)] bg-gray-100 group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow">
                      <Image
                        src={card.avatar}
                        alt=""
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>

                    {/* Pastel Pill Card */}
                    <div
                      className={`flex items-center gap-2 px-3 py-2 xl:px-3.5 xl:py-2.5 rounded-[10px] xl:rounded-[12px] ${card.bg} shadow-[0_2px_10px_rgba(0,0,0,0.03)] group-hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] border border-white/60 transition-all duration-300`}
                    >
                      <span
                        className={`w-2 h-2 rounded-[2px] ${card.bullet} shrink-0`}
                      />
                      <span className="text-[11.5px] xl:text-[13px] font-medium text-[#1E293B] leading-[1.3] whitespace-nowrap block">
                        <span>{card.line1}</span>
                        <br />
                        <span>{card.line2}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Mobile View: Top 3 Chips (above headline) */}
        <div className="lg:hidden w-full max-w-[560px] mx-auto flex flex-col gap-3.5 sm:gap-4 px-2 sm:px-4 mb-7 sm:mb-9">
          {MOBILE_TOP_CHIPS.map((chip, index) => (
            <Reveal
              key={chip.id}
              direction={chip.direction}
              distance={48}
              delay={index * 90}
              duration={750}
              className={`w-full flex ${chip.alignClass}`}
            >
              <div
                className="flex items-center gap-2.5 sm:gap-3.5 group cursor-pointer will-change-transform transition-transform duration-300 hover:scale-[1.02] w-full max-w-[340px] sm:max-w-[410px]"
                style={{
                  animation: `${chip.animName} ${chip.animDuration} ease-in-out ${chip.animDelay} infinite`,
                }}
              >
                {/* Avatar */}
                <div className="relative w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] rounded-[16px] sm:rounded-[18px] overflow-hidden shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.06)] bg-gray-100">
                  <Image
                    src={chip.avatar}
                    alt=""
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>

                {/* Pastel Pill Card - wider with flex-1 and generous padding */}
                <div
                  className={`flex-1 flex items-center gap-2.5 sm:gap-3 px-5 sm:px-6 py-3.5 sm:py-4 rounded-[22px] sm:rounded-[24px] ${chip.bg} shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-white/60`}
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-[2.5px] ${chip.bullet} shrink-0`}
                  />
                  <span className="text-[13px] sm:text-[14px] font-medium text-[#1E293B] leading-[1.38] text-left block">
                    <span>{chip.line1}</span>
                    <br />
                    <span>{chip.line2}</span>
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Center Main Headline */}
        <Reveal direction="up" duration={750} className="relative z-10 max-w-[700px] mx-auto text-center px-4 my-2 lg:my-0">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold text-[#171717] tracking-tight leading-[1.2] sm:leading-[1.24]"
            style={{ fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif' }}
          >
            We build solutions that meet the
            <br />
            real challenges organisations
            <br />
            face every day to help leaders
            <br />
            and teams thrive.
          </h2>
        </Reveal>

        {/* Mobile View: Bottom 4 Chips (below headline) */}
        <div className="lg:hidden w-full max-w-[560px] mx-auto flex flex-col gap-3.5 sm:gap-4 px-2 sm:px-4 mt-7 sm:mt-9">
          {MOBILE_BOTTOM_CHIPS.map((chip, index) => (
            <Reveal
              key={chip.id}
              direction={chip.direction}
              distance={48}
              delay={index * 90 + 100}
              duration={750}
              className={`w-full flex ${chip.alignClass}`}
            >
              <div
                className="flex items-center gap-2.5 sm:gap-3.5 group cursor-pointer will-change-transform transition-transform duration-300 hover:scale-[1.02] w-full max-w-[340px] sm:max-w-[410px]"
                style={{
                  animation: `${chip.animName} ${chip.animDuration} ease-in-out ${chip.animDelay} infinite`,
                }}
              >
                {/* Avatar */}
                <div className="relative w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] rounded-[16px] sm:rounded-[18px] overflow-hidden shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.06)] bg-gray-100">
                  <Image
                    src={chip.avatar}
                    alt=""
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>

                {/* Pastel Pill Card - wider with flex-1 and generous padding */}
                <div
                  className={`flex-1 flex items-center gap-2.5 sm:gap-3 px-5 sm:px-6 py-3.5 sm:py-4 rounded-[22px] sm:rounded-[24px] ${chip.bg} shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-white/60`}
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-[2.5px] ${chip.bullet} shrink-0`}
                  />
                  <span className="text-[13px] sm:text-[14px] font-medium text-[#1E293B] leading-[1.38] text-left block">
                    <span>{chip.line1}</span>
                    <br />
                    <span>{chip.line2}</span>
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Full-width Divider Line */}
      <div className="w-full border-t border-[#F0F0F0] mt-6 sm:mt-8" />

      {/* Bottom Area: 4-Column Stats Grid */}
      <div className="w-full max-w-[1400px] mx-auto pt-8 sm:pt-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 text-center">
          {STATS.map((stat, index) => (
            <Reveal
              key={index}
              direction="up"
              delay={index * 110}
              duration={700}
              className="flex flex-col items-center group cursor-default"
            >
              {/* Stat Number with animated counter & hover scale */}
              <span
                className="text-4xl sm:text-5xl lg:text-[54px] font-medium text-[#171717] tracking-tight leading-none mb-2.5 transition-transform duration-300 ease-out group-hover:scale-105 group-hover:text-[#FF5E14]"
                style={{
                  fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
                }}
              >
                <AnimatedCounter value={stat.value} duration={1500} />
              </span>

              {/* Stat Description */}
              <p
                className="text-xs sm:text-sm md:text-[14.5px] font-medium leading-snug"
                style={{
                  fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
                }}
              >
                <span className="text-[#64748B]">{stat.prefix} </span>
                <span className="text-[#FF5E14]">{stat.highlight}</span>
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
