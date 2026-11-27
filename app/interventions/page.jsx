import Footer from "@/app/components/Common/Footer";
import Hero from "./self-role-system/components/Hero";
import Architecture from "./self-role-system/components/Architecture";
import CoreRealities from "./self-role-system/components/CoreRealities";
import BeliefQuote from "./self-role-system/components/BeliefQuote";
import Outcomes from "./self-role-system/components/Outcomes";

export const metadata = {
  title: "Leadership & Systemic Interventions",
  description:
    "Explore Celebratory Network’s experiential interventions—Self. Role. System., Personal Power in Leadership, and Large Group Interventions.",
  alternates: {
    canonical: "/interventions",
  },
  openGraph: {
    title: "Leadership & Systemic Interventions | Celebratory Network",
    description:
      "Explore Celebratory Network’s experiential interventions—Self. Role. System., Personal Power in Leadership, and Large Group Interventions.",
    url: "/interventions",
    images: [{ url: "/interventions/self-role-system-hero.webp", alt: "Leadership & Systemic Interventions" }],
  },
  twitter: {
    title: "Leadership & Systemic Interventions | Celebratory Network",
    description:
      "Explore Celebratory Network’s experiential interventions—Self. Role. System., Personal Power in Leadership, and Large Group Interventions.",
    images: ["/interventions/self-role-system-hero.webp"],
  },
};

export default function InterventionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#171717]">
      <main className="flex-1">
        <Hero />
        <Architecture />
        <CoreRealities />
        <BeliefQuote />
        <Outcomes />
      </main>
      <Footer />
    </div>
  );
}
