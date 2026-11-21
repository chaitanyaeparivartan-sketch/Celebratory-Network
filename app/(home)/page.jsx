import Header from "@/app/components/Common/Header";
import Footer from "@/app/components/Common/Footer";
import CTA from "@/app/components/Common/CTA";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import WhatWeDo from "./components/WhatWeDo";
import Statement from "./components/Statement";
import HowWeHelp from "./components/HowWeHelp";
import Testimonials from "./components/Testimonials";

export const metadata = {
  title: "Celebratory Network | Organization Development & Culture Consulting",
  description:
    "We design, facilitate and implement solutions to achieve desired Organizational Culture, aligning leadership and transformation.",
};

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
