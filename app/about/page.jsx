import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import CTA from "../components/Common/CTA";
import NewHero from "./components/NewHero";
import Purpose from "./components/Purpose";
import DNA from "./components/DNA";
import WeGrow from "./components/WeGrow";
import Team from "./components/Team";
import Research from "./components/Research";
import Gallery from "./components/Gallery";

export const metadata = {
  title: "About Us | Celebratory Network",
  description:
    "Celebratory is about celebrating all moments of life. Every experience, every encounter, every challenge and every achievement shapes who we are today.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <NewHero showLogo={false} />
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
