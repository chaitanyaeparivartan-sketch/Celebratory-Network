"use client";

import ODHero from "@/app/od-consulting/components/ODHero";

export default function Hero(props) {
  return (
    <ODHero
      badge="Personal Power in Leadership"
      title={
        <>
          For <span className="text-[#FF5E14]">Women.</span>
        </>
      }
      lead="Lead from Within. Lead with Power. Personal Power in Leadership (PPL) is Celebratory Network’s signature, research-based leadership journey that helps women discover the inner capacities that shape authentic leadership."
      bgImage="/interventions/personal-power-in-leadership-hero.jpg"
      {...props}
    />
  );
}
