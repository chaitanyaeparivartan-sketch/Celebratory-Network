import Footer from "@/app/components/Common/Footer";
import Hero from "./components/Hero";
import UpcomingEvent from "./components/UpcomingEvent";
import ConversationsSection from "./components/ConversationsSection";

export const metadata = {
  title: "For the Record — Classic Library & Insights",
  description:
    "A curated library of perspectives, client stories, and conversations exploring the human dynamics that shape lasting organizational change.",
  alternates: {
    canonical: "/for-the-record",
  },
  openGraph: {
    title: "For the Record — Classic Library & Insights | Celebratory Network",
    description:
      "A curated library of perspectives, client stories, and conversations exploring the human dynamics that shape lasting organizational change.",
    url: "/for-the-record",
    images: [{ url: "/for-the-record/for-the-record-hero.webp", alt: "For the Record — Classic Library" }],
  },
  twitter: {
    title: "For the Record — Classic Library & Insights | Celebratory Network",
    description:
      "A curated library of perspectives, client stories, and conversations exploring the human dynamics that shape lasting organizational change.",
    images: ["/for-the-record/for-the-record-hero.webp"],
  },
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
