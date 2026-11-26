"use client";

import ODHero from "@/app/od-consulting/components/ODHero";

export default function Hero(props) {
  return (
    <ODHero
      badge="Large Group"
      title={
        <>
          <span className="text-[#FF5E14]">Interventions.</span>
        </>
      }
      lead="Large Group Interventions have been helpful to our clients when they wish to bring in inclusiveness and widespread participation in a change process. They have been an integral component in numerous organizational change efforts we have worked with, across a variety of organization development initiatives."
      bgImage="/interventions/large-group-intervention-hero.jpg"
      {...props}
    />
  );
}
