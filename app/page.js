import Header from "./components/Common/Header";
import Hero from "./components/Home/Hero";
import Stats from "./components/Home/Stats";
import WhatWeDo from "./components/Home/WhatWeDo";
import Statement from "./components/Home/Statement";
import HowWeHelp from "./components/Home/HowWeHelp";
import Testimonials from "./components/Home/Testimonials";
import CTA from "./components/Home/CTA";
import Footer from "./components/Common/Footer";

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
