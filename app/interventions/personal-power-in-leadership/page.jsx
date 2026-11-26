import Footer from "@/app/components/Common/Footer";
import Hero from "./components/Hero";
import Cornerstones from "./components/Cornerstones";
import WhyItMatters from "./components/WhyItMatters";
import BeliefQuote from "./components/BeliefQuote";
import CtaBanner from "./components/CtaBanner";

export const metadata = {
  title: "Personal Power in Leadership for Women | Celebratory Network",
  description:
    "Personal Power in Leadership (PPL) is Celebratory Network’s signature, research-based leadership journey that helps women discover the inner capacities that shape authentic leadership.",
};

export default function PersonalPowerInLeadershipPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#171717]">
      <main className="flex-1">
        <Hero />
        <Cornerstones />
        <WhyItMatters />
        <BeliefQuote />
      </main>
      <Footer />
    </div>
  );
}
