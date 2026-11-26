import Footer from "@/app/components/Common/Footer";
import Hero from "./components/Hero";
import WhereTheyHelp from "./components/WhereTheyHelp";
import Offerings from "./components/Offerings";
import CTA from "@/app/components/Common/CTA";

export const metadata = {
  title: "Large Group Interventions | Celebratory Network",
  description:
    "Large Group Interventions bring inclusiveness and widespread participation into change processes across organizational development initiatives.",
};

export default function LargeGroupInterventionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#171717]">
      <main className="flex-1">
        <Hero />
        <WhereTheyHelp />
        <Offerings />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
