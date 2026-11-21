import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import ContactHero from "./components/ContactHero";
import DirectConnect from "./components/DirectConnect";
import ContactForm from "./components/ContactForm";

export const metadata = {
  title: "Contact Us | Celebratory Network",
  description:
    "Connect with our leadership team for organizational development, culture transformation, and leadership alignment consulting.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-white font-['Inter',system-ui,sans-serif]">
      <Header />
      <ContactHero />

      {/* Form & Info Section */}
      <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <DirectConnect />
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
