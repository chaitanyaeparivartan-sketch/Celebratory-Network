import Footer from "@/app/components/Common/Footer";
import Hero from "./components/Hero";
import Architecture from "./components/Architecture";
import CoreRealities from "./components/CoreRealities";
import BeliefQuote from "./components/BeliefQuote";
import Outcomes from "./components/Outcomes";
import CTA from "@/app/components/Common/CTA";

export const metadata = {
  title: "Self. Role. System | Celebratory Network",
  description:
    "An advanced experiential framework for executives steering organisations through high-stakes uncertainty and systemic ambiguity.",
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
