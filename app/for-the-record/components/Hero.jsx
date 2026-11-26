"use client";

import ODHero from "@/app/od-consulting/components/ODHero";

export default function Hero(props) {
  return (
    <ODHero
      badge="Our Classic Library"
      title={
        <>
          For the <span className="text-[#FF5E14]">Record.</span>
        </>
      }
      lead={
        <>
          Welcome to <strong className="font-semibold text-inherit">For the Record</strong>, a space dedicated to exploring meaningful insights drawn from our client engagements, thoughtful conversations, and personal experiences. As part of our <strong className="font-semibold text-inherit">Classic Library</strong> series, we share honest perspectives and lasting lessons on organisational dynamics, leadership, and human relationships. Explore our latest reflections and discover the ideas that shape meaningful and lasting change.
        </>
      }
      bgImage="/for-the-record/for-the-record-hero.jpg"
      {...props}
    />
  );
}
