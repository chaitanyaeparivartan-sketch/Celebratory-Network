import Footer from "@/app/components/Common/Footer";
import Hero from "./components/Hero";
import FamilySections from "./components/FamilySection";
import ServicesSection from "./components/ServicesSection";
import DifferenceSection from "./components/DifferenceSection";
import OutcomesSection from "./components/OutcomesSection";

export const metadata = {
  title: "Family Business Consulting",
  description:
    "Transforming family-managed businesses into future-ready organizations through succession planning, leadership alignment, and professionalization.",
  alternates: {
    canonical: "/od-consulting/family-bussinesses",
  },
  openGraph: {
    title: "Family Business Consulting | Celebratory Network",
    description:
      "Transforming family-managed businesses into future-ready organizations through succession planning, leadership alignment, and professionalization.",
    url: "/od-consulting/family-bussinesses",
    images: [{ url: "/family-businesses/hero-meeting.webp", alt: "Family Business Consulting" }],
  },
  twitter: {
    title: "Family Business Consulting | Celebratory Network",
    description:
      "Transforming family-managed businesses into future-ready organizations through succession planning, leadership alignment, and professionalization.",
    images: ["/family-businesses/hero-meeting.webp"],
  },
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
