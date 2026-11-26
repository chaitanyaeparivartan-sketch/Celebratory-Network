import Footer from "@/app/components/Common/Footer";
import Hero from "./self-role-system/components/Hero";
import Architecture from "./self-role-system/components/Architecture";
import CoreRealities from "./self-role-system/components/CoreRealities";
import BeliefQuote from "./self-role-system/components/BeliefQuote";
import Outcomes from "./self-role-system/components/Outcomes";

export const metadata = {
  title: "Interventions | Celebratory Network",
  description:
    "A strategic leadership intervention. An advanced experiential framework for executives steering organisations through high-stakes uncertainty and systemic ambiguity.",
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
