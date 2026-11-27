import Footer from "@/app/components/Common/Footer";
import CTA from "@/app/components/Common/CTA";
import Hero from "./components/Hero";
import NewHero from "./components/NewHero";
import Statement from "./components/Statement";
import Challenges from "./components/Challenges";
import Symptoms from "./components/Symptoms";
import Info from "./components/Info";
import Impact from "./components/Impact";

export const metadata = {
  title: "Business OD | Celebratory Network",
  description:
    "We design, facilitate and implement solutions to achieve the desired Organizational Culture. Aligning strategy, people, and culture for lasting transformation.",
};

export default function BusinessODPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-clip">
      <main className="flex-1">
        <NewHero />
        <Statement />
        <Challenges />
        <Symptoms />
        <Info />
        <CTA
          title="Ready to build a resilient, high-performing organization?"
          text="Get a personalised look at how Celebratory Network can help align your leadership and transform your workplace culture."
          buttonLabel="Book a call"
          href="/contact"
        />
        <Impact />
      </main>
      <Footer />
    </div>
  );
}
