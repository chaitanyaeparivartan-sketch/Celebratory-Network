import Link from "next/link";
import Header from "@/app/components/Common/Header";
import Footer from "@/app/components/Common/Footer";

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
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 pl-5 pr-2.5 py-2 rounded-[8px] bg-[#FF5E14] text-white text-center font-['PP_Mori',sans-serif] text-[15px] font-semibold leading-[20px] hover:bg-[#e0500d] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,94,20,0.35)] active:scale-[0.98] transition-all cursor-pointer shadow-sm"
            >
              <span>Back to Home</span>
              <span className="grid h-[28px] w-[28px] place-items-center rounded-[6px] bg-white/20 transition-transform duration-200 group-hover:translate-x-1">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
            <Link
              href="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 pl-5 pr-2.5 py-2 rounded-[8px] border border-[#D9D9D9] bg-white text-[#141414] text-center font-['PP_Mori',sans-serif] text-[15px] font-semibold leading-[20px] hover:border-[#141414] hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer shadow-sm"
            >
              <span>Contact Us</span>
              <span className="grid h-[28px] w-[28px] place-items-center rounded-[6px] bg-[#141414]/5 transition-transform duration-200 group-hover:translate-x-1">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

