import Footer from "@/app/components/Common/Footer";
import Hero from "./components/Hero";
import Cornerstones from "./components/Cornerstones";
import WhyItMatters from "./components/WhyItMatters";
import BeliefQuote from "./components/BeliefQuote";
import CTA from "@/app/components/Common/CTA";

export const metadata = {
  title: "Personal Power in Leadership for Women",
  description:
    "Celebratory Network’s research-based leadership journey helping women cultivate inner authority, courage, and authentic executive presence.",
  alternates: {
    canonical: "/interventions/personal-power-in-leadership",
  },
  openGraph: {
    title: "Personal Power in Leadership for Women | Celebratory Network",
    description:
      "Celebratory Network’s research-based leadership journey helping women cultivate inner authority, courage, and authentic executive presence.",
    url: "/interventions/personal-power-in-leadership",
    images: [{ url: "/interventions/personal-power-in-leadership-hero.webp", alt: "Personal Power in Leadership for Women" }],
  },
  twitter: {
    title: "Personal Power in Leadership for Women | Celebratory Network",
    description:
      "Celebratory Network’s research-based leadership journey helping women cultivate inner authority, courage, and authentic executive presence.",
    images: ["/interventions/personal-power-in-leadership-hero.webp"],
  },
};

export default function PersonalPowerInLeadershipPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#171717]">
      <main className="flex-1">
        <Hero />
        <Cornerstones />
        <WhyItMatters />
        <BeliefQuote />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
