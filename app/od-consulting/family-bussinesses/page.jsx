import Footer from "@/app/components/Common/Footer";
import Hero from "./components/Hero";
import FamilySections from "./components/FamilySection";
import ServicesSection from "./components/ServicesSection";
import DifferenceSection from "./components/DifferenceSection";
import OutcomesSection from "./components/OutcomesSection";

export const metadata = {
  title: "Family Businesses | Celebratory Network",
  description:
    "Transforming Family Managed Businesses into Future-Ready Organizations. We work at the intersection of Family, Business and Organization Development.",
};

export default function FamilyBusinessesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-clip">
      <main className="flex-1">
        <Hero />
        <FamilySections />
        <ServicesSection />
        <DifferenceSection />
        <OutcomesSection />
      </main>
      <Footer />
    </div>
  );
}
