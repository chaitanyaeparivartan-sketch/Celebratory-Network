import Footer from "@/app/components/Common/Footer";
import CTA from "@/app/components/Common/CTA";
import Hero from "./components/Hero";
import Services from "./components/Services";
import DeiResources from "./components/DeiResources";

export const metadata = {
  title: "Diversity, Equity & Inclusion (DEIB)",
  description:
    "Build inclusive, high-performing workplaces. We design and implement DEIB assessments, leadership journeys, and culture-change programs.",
  alternates: {
    canonical: "/od-consulting/diversity-and-inclusion",
  },
  openGraph: {
    title: "Diversity, Equity & Inclusion (DEIB) | Celebratory Network",
    description:
      "Build inclusive, high-performing workplaces. We design and implement DEIB assessments, leadership journeys, and culture-change programs.",
    url: "/od-consulting/diversity-and-inclusion",
    images: [{ url: "/diversity-inclusion/hero-banner.webp", alt: "Diversity, Equity & Inclusion" }],
  },
  twitter: {
    title: "Diversity, Equity & Inclusion (DEIB) | Celebratory Network",
    description:
      "Build inclusive, high-performing workplaces. We design and implement DEIB assessments, leadership journeys, and culture-change programs.",
    images: ["/diversity-inclusion/hero-banner.webp"],
  },
};

export default function DiversityAndInclusionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-clip">
      <main className="flex-1">
        <Hero />
        <Services />
        <CTA
          title="Ready to build an inclusive, high-performing workplace?"
          text="Get a personalised look at how Celebratory Network can help align your leadership and transform your diversity and inclusion strategy."
          buttonLabel="Book a call"
          href="/contact"
        />
        <DeiResources />
      </main>
      <Footer />
    </div>
  );
}
