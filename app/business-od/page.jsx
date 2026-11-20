import Header from "@/app/components/Common/Header";
import Footer from "@/app/components/Common/Footer";
import CTA from "@/app/components/Common/CTA";
import BusinessODHero from "../od-consulting/business-od/components/Hero";
import Statement from "../od-consulting/business-od/components/Statement";
import Challenges from "../od-consulting/business-od/components/Challenges";
import Info from "../od-consulting/business-od/components/Info";
import Impact from "../od-consulting/business-od/components/Impact";

export const metadata = {
  title: "Business OD | Celebratory Network",
  description:
    "We design, facilitate and implement solutions to achieve the desired Organizational Culture. Aligning strategy, people, and culture for lasting transformation.",
};

export default function BusinessODPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <BusinessODHero />
        <Statement />
        <Challenges />
        <Info />
        <Impact />
      </main>
      <Footer />
    </div>
  );
}
