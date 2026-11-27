import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import CTA from "../components/Common/CTA";
import NewHero from "./components/NewHero";
import Hero from "./components/Hero";
import Purpose from "./components/Purpose";
import DNA from "./components/DNA";
import WeGrow from "./components/WeGrow";
import Team from "./components/Team";
import Research from "./components/Research";
import Gallery from "./components/Gallery";

export const metadata = {
  title: "About Us",
  description:
    "Discover Celebratory Network’s purpose, DNA, research, and team—helping leaders and organizations celebrate growth, resilience, and lasting cultural change.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Celebratory Network",
    description:
      "Discover Celebratory Network’s purpose, DNA, research, and team—helping leaders and organizations celebrate growth, resilience, and lasting cultural change.",
    url: "/about",
    images: [{ url: "/about/hero-image-1.webp", alt: "About Celebratory Network" }],
  },
  twitter: {
    title: "About Us | Celebratory Network",
    description:
      "Discover Celebratory Network’s purpose, DNA, research, and team—helping leaders and organizations celebrate growth, resilience, and lasting cultural change.",
    images: ["/about/hero-image-1.webp"],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero  showLogo={false} />
        <Purpose />
        <DNA />
        <WeGrow />
        <Team />
        <Research />
        <CTA />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
