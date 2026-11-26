"use client";

import ODHero from "@/app/od-consulting/components/ODHero";

export default function Hero(props) {
  return (
    <ODHero
      badge="A Strategic Leadership Intervention"
      title="Self. Role. System."
      lead="An advanced experiential framework for executives steering organisations through high-stakes uncertainty and systemic ambiguity."
      bgImage="/interventions/self-role-system-hero.jpg"
      {...props}
    />
  );
}
