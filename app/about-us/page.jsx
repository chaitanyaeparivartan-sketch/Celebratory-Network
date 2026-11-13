import Hero from "./components/Hero";

export const metadata = {
  title: "About Us | Celebratory Network",
  description:
    "Celebratory is about celebrating all moments of life. Every experience, every encounter, every challenge and every achievement shapes who we are today.",
};

export default function AboutUsPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Hero />
    </main>
  );
}
