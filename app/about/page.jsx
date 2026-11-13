import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import Hero from "./components/Hero";

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
        <Hero showLogo={false} />
      </main>
      <Footer />
    </div>
  );
}
