import Footer from "@/app/components/Common/Footer";
import Hero from "./components/Hero";
import ConversationsSection from "./components/ConversationsSection";

export const metadata = {
  title: "For the Record — Our Classic Library | Celebratory Network",
  description:
    "Welcome to For the Record, a space dedicated to exploring meaningful insights drawn from our client engagements, thoughtful conversations, and personal experiences. As part of our Classic Library series.",
};

export default function ForTheRecordPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#171717]">
      <main className="flex-1">
        <Hero />
        <ConversationsSection />
      </main>
      <Footer />
    </div>
  );
}
