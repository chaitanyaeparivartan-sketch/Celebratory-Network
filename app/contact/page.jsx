"use client";

import Header from "@/app/components/Common/Header";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden bg-[#1F5A9D] text-white select-none isolate">
      {/* Primary Site Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center px-6 sm:px-10 md:px-12 lg:px-16 pt-28 sm:pt-32 md:pt-36 pb-8 sm:pb-12 z-20">
        {/* Left Column: Bold Statement & Map */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h1
            className="font-bold tracking-tight text-white leading-tight text-[clamp(24px,3.4vw,48px)] sm:whitespace-nowrap"
            style={{ fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif' }}
          >
            Want to Discuss with us.
          </h1>

          {/* Map Embed */}
          <div className="mt-6 sm:mt-8 w-full rounded-2xl overflow-hidden border border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.25)] bg-[#17467c] aspect-[16/9] sm:aspect-[16/8] min-h-[220px] max-h-[320px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.339476451486!2d72.82494849999999!3d19.0072234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfed7062e02f%3A0x895cb085e264e532!2sJolie's!5e1!3m2!1sen!2sin!4v1795696481463!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Google Maps - Jolie's Birla Centurion, Worli, Mumbai"
              className="w-full h-full border-0 block"
            />
          </div>
        </div>

        {/* Right Column: Contact Inquiries & Offices */}
        <div className="lg:col-span-5 flex flex-col gap-7 sm:gap-9 lg:pl-8">
          {/* For Inquiries */}
          <div>
            <span
              className="block text-white/60 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] mb-2"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              FOR INQUIRIES
            </span>
            <a
              href="mailto:team@celebratorynetwork.com"
              className="text-white hover:text-[#FF9D70] text-xl sm:text-2xl lg:text-[26px] font-semibold tracking-tight transition-colors block"
              style={{ fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif' }}
            >
              team@celebratorynetwork.com
            </a>
            <a
              href="tel:+918879551654"
              className="text-white/90 hover:text-[#FF9D70] text-base sm:text-lg font-medium tracking-tight transition-colors block mt-1"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              +91-8879551654
            </a>
          </div>

          {/* India Office */}
          <div>
            <span
              className="block text-white/60 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] mb-2"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              INDIA OFFICE
            </span>
            <p
              className="text-white/90 text-[14px] sm:text-[15px] leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Jolie’s, Birla Centurion,
              <br />
              Pandurang Budhkar Marg, Century Mills,
              <br />
              Worli, Mumbai, Maharashtra 400030
            </p>
          </div>

          {/* Canada Office */}
          <div>
            <span
              className="block text-white/60 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] mb-2"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              CANADA OFFICE
            </span>
            <p
              className="text-white/90 text-[14px] sm:text-[15px] leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              24 Lovegrove Lane, Ajax, ON L1S 0E7
              <br />
              <a
                href="tel:+14086200196"
                className="text-white hover:text-[#FF9D70] transition-colors"
              >
                +1 (408) 620 0196
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Bottom Bar: Social Pills */}
      <footer className="w-full flex items-center justify-between z-30 px-6 sm:px-10 md:px-12 lg:px-16 pb-6 sm:pb-8 pt-4">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/celebratorynetwork"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/30 text-white hover:bg-white/10 text-xs sm:text-sm font-medium transition-all backdrop-blur-sm cursor-pointer"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          Instagram
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/celebratory-network"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/30 text-white hover:bg-white/10 text-xs sm:text-sm font-medium transition-all backdrop-blur-sm cursor-pointer"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.94 0 1.7-.76 1.7-1.7s-.76-1.7-1.7-1.7-1.7.76-1.7 1.7.76 1.7 1.7 1.7m1.4 9.74v-8.37H5.06v8.37h2.8z" />
          </svg>
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
