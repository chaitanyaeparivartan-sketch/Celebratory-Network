"use client";

import ODHero from "@/app/od-consulting/components/ODHero";

export default function Hero(props) {
  return (
    <ODHero
      badge="Our DEIB Practice"
      title="Diversity, Equity, Inclusion & Belonging"
      lead="Building workplaces where every voice is heard, every difference is valued and everyone can do their best work."
      bgImage="/diversity-inclusion/hero-skyscrapers.jpg"
      {...props}
    />
  );
}
