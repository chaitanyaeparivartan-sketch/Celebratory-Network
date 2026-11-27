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
  title: {
    absolute: "Celebratory Network | Organization Development & Culture Consulting",
  },
  description:
    "We design, facilitate, and implement organization development and culture transformation solutions that align leadership, people, and strategy.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Celebratory Network | Organization Development & Culture Consulting",
    description:
      "We design, facilitate, and implement organization development and culture transformation solutions that align leadership, people, and strategy.",
    url: "/",
    images: [{ url: "/home/hero-image-1.webp", alt: "Celebratory Network" }],
  },
  twitter: {
    title: "Celebratory Network | Organization Development & Culture Consulting",
    description:
      "We design, facilitate, and implement organization development and culture transformation solutions that align leadership, people, and strategy.",
    images: ["/home/hero-image-1.webp"],
  },
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
