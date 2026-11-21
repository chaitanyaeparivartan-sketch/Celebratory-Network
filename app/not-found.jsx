import Link from "next/link";
import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#141414] font-['Inter',system-ui,sans-serif]">
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 py-32 sm:py-40">
        <div className="max-w-xl text-center mx-auto">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#FF5E14] bg-[#FF5E14]/10 rounded-full mb-4">
            404 — Page Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-4 text-[#141414]">
            This page is under development
          </h1>
          <p className="text-base sm:text-lg text-[#555] mb-8 leading-relaxed">
            The page you are looking for may have been moved, is being updated,
            or does not exist yet. Please navigate back to our homepage or get in touch.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#FF5E14] text-white font-medium text-sm hover:bg-[#e05210] transition-colors text-center"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#D9D9D9] text-[#141414] font-medium text-sm hover:border-[#141414] transition-colors text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

