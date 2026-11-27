import Footer from "@/app/components/Common/Footer";
import Hero from "./components/Hero";
import Architecture from "./components/Architecture";
import CoreRealities from "./components/CoreRealities";
import BeliefQuote from "./components/BeliefQuote";
import Outcomes from "./components/Outcomes";
import CTA from "@/app/components/Common/CTA";

export const metadata = {
  title: "Self. Role. System.",
  description:
    "An advanced experiential framework for executives navigating high-stakes uncertainty, systemic ambiguity, and boundary-spanning leadership.",
  alternates: {
    canonical: "/interventions/self-role-system",
  },
  openGraph: {
    title: "Self. Role. System. | Celebratory Network",
    description:
      "An advanced experiential framework for executives navigating high-stakes uncertainty, systemic ambiguity, and boundary-spanning leadership.",
    url: "/interventions/self-role-system",
    images: [{ url: "/interventions/self-role-system-hero.webp", alt: "Self. Role. System." }],
  },
  twitter: {
    title: "Self. Role. System. | Celebratory Network",
    description:
      "An advanced experiential framework for executives navigating high-stakes uncertainty, systemic ambiguity, and boundary-spanning leadership.",
    images: ["/interventions/self-role-system-hero.webp"],
  },
};

export default function SelfRoleSystemPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#171717]">
      <main className="flex-1">
        <Hero />
        <Architecture />
        <CoreRealities />
        <BeliefQuote />
        <Outcomes />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
