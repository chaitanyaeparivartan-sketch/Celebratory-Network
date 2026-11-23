import Header from "@/app/components/Common/Header";
import Footer from "@/app/components/Common/Footer";
import CTA from "@/app/components/Common/CTA";
import Services from "./components/Services";

export const metadata = {
  title: "Diversity and Inclusion | Celebratory Network",
  description:
    "Building inclusive workplaces. We design, facilitate and implement DEIB solutions that connect culture, leadership, and diversity.",
};

export default function DiversityAndInclusionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Services />
        <CTA
          title="Ready to build an inclusive, high-performing workplace?"
          text="Get a personalised look at how Celebratory Network can help align your leadership and transform your diversity and inclusion strategy."
          buttonLabel="Book a call"
          href="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
