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
  title: "Business OD Consulting",
  description:
    "Align strategy, leadership, and culture for lasting business transformation. Explore our Business OD consulting, diagnostics, and culture-building approach.",
  alternates: {
    canonical: "/od-consulting/business-od",
  },
  openGraph: {
    title: "Business OD Consulting | Celebratory Network",
    description:
      "Align strategy, leadership, and culture for lasting business transformation. Explore our Business OD consulting, diagnostics, and culture-building approach.",
    url: "/od-consulting/business-od",
    images: [{ url: "/business-od/hero-banner.webp", alt: "Business OD Consulting" }],
  },
  twitter: {
    title: "Business OD Consulting | Celebratory Network",
    description:
      "Align strategy, leadership, and culture for lasting business transformation. Explore our Business OD consulting, diagnostics, and culture-building approach.",
    images: ["/business-od/hero-banner.webp"],
  },
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
