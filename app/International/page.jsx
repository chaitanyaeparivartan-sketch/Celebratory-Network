import Footer from "@/app/components/Common/Footer";
import Hero from "./components/Hero";
import Experiences from "./components/Experiences";
import Focus from "./components/Focus";
import WhatGroupsTeachUs from "./components/WhatGroupsTeachUs";
import Gallery from "./components/Gallery";

export const metadata = {
  title: "Beyond Borders — OD and Leadership Internationally | Celebratory Network",
  description:
    "Our work internationally has been designed for leaders to work with the business realities of navigating complexity, uncertainty, and change in the UK, US, Brazil, Berlin, Thailand, Malaysia, Vietnam.",
};

export default function InternationalPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#171717]">
      <main className="flex-1">
        <Hero />
        <Experiences />
        <Focus />
        <WhatGroupsTeachUs />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
