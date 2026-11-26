import Footer from "@/app/components/Common/Footer";
import Hero from "./components/Hero";
import UpcomingEvent from "./components/UpcomingEvent";
import ConversationsSection from "./components/ConversationsSection";

export const metadata = {
  title: "For the Record — Our Classic Library | Celebratory Network",
  description:
    "A curated library of honest perspectives, timeless lessons, and deeper insights drawn from our client engagements — exploring the human dynamics that shape lasting change.",
};

export default function ForTheRecordPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#171717]">
      <main className="flex-1">
        <Hero />
        <UpcomingEvent />
        <ConversationsSection />
      </main>
      <Footer />
    </div>
  );
}
