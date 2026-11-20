import Header from "@/app/components/Common/Header";
import Footer from "@/app/components/Common/Footer";
import CTA from "@/app/components/Common/CTA";
import BusinessODHero from "../od-consulting/business-od/components/Hero";

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
        <CTA
          title="Ready to build a resilient, high-performing organization?"
          text="Get a personalised look at how Celebratory Network can help align your leadership and transform your workplace culture."
          buttonLabel="Book a call"
          href="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
