import Footer from "@/app/components/Common/Footer";
import Hero from "./components/Hero";
import WhereTheyHelp from "./components/WhereTheyHelp";
import Offerings from "./components/Offerings";
import CTA from "@/app/components/Common/CTA";

export const metadata = {
  title: "Large Group Interventions",
  description:
    "Drive organization-wide alignment and inclusive change through World Café, AI Summit, Future Search, and Open Space large group interventions.",
  alternates: {
    canonical: "/interventions/large-group-intervention",
  },
  openGraph: {
    title: "Large Group Interventions | Celebratory Network",
    description:
      "Drive organization-wide alignment and inclusive change through World Café, AI Summit, Future Search, and Open Space large group interventions.",
    url: "/interventions/large-group-intervention",
    images: [{ url: "/interventions/large-group-intervention-hero.webp", alt: "Large Group Interventions" }],
  },
  twitter: {
    title: "Large Group Interventions | Celebratory Network",
    description:
      "Drive organization-wide alignment and inclusive change through World Café, AI Summit, Future Search, and Open Space large group interventions.",
    images: ["/interventions/large-group-intervention-hero.webp"],
  },
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
