import Footer from "@/app/components/Common/Footer";
import Hero from "./components/Hero";
import Experiences from "./components/Experiences";
import Focus from "./components/Focus";
import WhatGroupsTeachUs from "./components/WhatGroupsTeachUs";
import Gallery from "./components/Gallery";
import CTA from "@/app/components/Common/CTA";

export const metadata = {
  title: "Beyond Borders — International OD & Leadership",
  description:
    "Cross-border leadership and organization development programs across the UK, US, Brazil, Germany, Thailand, Malaysia, and Vietnam.",
  alternates: {
    canonical: "/International",
  },
  openGraph: {
    title: "Beyond Borders — International OD & Leadership | Celebratory Network",
    description:
      "Cross-border leadership and organization development programs across the UK, US, Brazil, Germany, Thailand, Malaysia, and Vietnam.",
    url: "/International",
    images: [{ url: "/international/international-hero.webp", alt: "Beyond Borders — International OD & Leadership" }],
  },
  twitter: {
    title: "Beyond Borders — International OD & Leadership | Celebratory Network",
    description:
      "Cross-border leadership and organization development programs across the UK, US, Brazil, Germany, Thailand, Malaysia, and Vietnam.",
    images: ["/international/international-hero.webp"],
  },
};

export default function InternationalPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#171717]">
      <main className="flex-1">
        <Hero />
        <Experiences />
        <Focus />
        <WhatGroupsTeachUs />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
