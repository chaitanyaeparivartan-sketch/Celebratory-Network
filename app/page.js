import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import WhatWeDo from "./components/WhatWeDo";
import Statement from "./components/Statement";
import HowWeHelp from "./components/HowWeHelp";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <WhatWeDo />
        <Statement />
        <HowWeHelp />
        <CTA />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
