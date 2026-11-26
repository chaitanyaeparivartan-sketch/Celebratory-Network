"use client";

import ODHero from "@/app/od-consulting/components/ODHero";

export default function Hero(props) {
  return (
    <ODHero
      badge="Our Perspective"
      title="Toward Organizational Development"
      lead="We help organizations grow by understanding their structures, culture, relationships, leadership, and the invisible dynamics that shape how people work together."
      bgImage="/family-businesses/hero-meeting.jpg"
      {...props}
    />
  );
}
