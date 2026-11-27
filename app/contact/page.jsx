"use client";

import Header from "@/app/components/Common/Header";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden bg-[#1F5A9D] text-white select-none isolate">
      {/* Primary Site Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto flex flex-col justify-center px-6 sm:px-10 md:px-12 lg:px-16 pt-28 sm:pt-32 md:pt-36 pb-8 sm:pb-12 z-20">
        {/* Heading Row */}
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 mb-2.5 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-[1px] bg-[#FF5E14] shrink-0" />
            <span className="font-inter text-[12px] sm:text-[13px] md:text-[14px] font-medium uppercase tracking-[0.24px] text-white/80">
              Get in touch
            </span>
          </div>

          <h1 className="font-ppmori font-semibold tracking-[-0.03em] text-white leading-[1.08] text-3xl sm:text-4xl md:text-[44px] lg:text-[48px]">
            Want to discuss <span className="text-[#FF5E14]">with us?</span>
          </h1>

          <p className="mt-3 sm:mt-4 font-inter text-[15px] sm:text-[16px] leading-[1.6] text-white/85 max-w-[540px]">
            Tell us about the change you are working towards. We would love to start the conversation.
          </p>
        </div>

        {/* 50-50 Row: Map Card (Left) & Contact Details (Right) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Map Card (50%) */}
          <div className="w-full rounded-2xl overflow-hidden border border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.25)] bg-[#17467c] min-h-[260px] sm:min-h-[320px] lg:min-h-[340px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.339476451486!2d72.82494849999999!3d19.0072234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfed7062e02f%3A0x895cb085e264e532!2sJolie's!5e1!3m2!1sen!2sin!4v1795696481463!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Google Maps - Jolie's Birla Centurion, Worli, Mumbai"
              className="absolute inset-0 w-full h-full border-0 block"
            />
          </div>

          {/* Right Column: Contact Inquiries & Offices (50%) */}
          <div className="flex flex-col justify-between gap-7 sm:gap-8 w-full lg:pl-2">
            {/* For Inquiries */}
            <div>
              <span
                className="block text-white/60 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] mb-2.5"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                FOR INQUIRIES
              </span>
              <a
                href="mailto:team@celebratorynetwork.com"
                className="group inline-flex items-center gap-3 text-white hover:text-[#FF9D70] text-xl sm:text-2xl lg:text-[26px] font-semibold tracking-tight transition-colors"
                style={{ fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif' }}
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-[#FF9D70] transition-transform duration-200 group-hover:scale-110"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="break-all sm:break-normal">team@celebratorynetwork.com</span>
              </a>
              <div>
                <a
                  href="tel:+918879551654"
                  className="group inline-flex items-center gap-3 text-white/90 hover:text-[#FF9D70] text-base sm:text-lg font-medium tracking-tight transition-colors mt-2"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <svg
                    className="w-4 h-4 sm:w-[18px] sm:h-[18px] shrink-0 text-[#FF9D70] transition-transform duration-200 group-hover:scale-110"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+91-8879551654</span>
                </a>
              </div>
            </div>

            {/* India Office */}
            <div>
              <span
                className="block text-white/60 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] mb-2.5"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                INDIA OFFICE
              </span>
              <div className="flex items-start gap-3">
                <svg
                  className="w-[18px] h-[18px] shrink-0 text-[#FF9D70] mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
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
            </div>

            {/* Canada Office */}
            <div>
              <span
                className="block text-white/60 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] mb-2.5"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                CANADA OFFICE
              </span>
              <div className="flex items-start gap-3">
                <svg
                  className="w-[18px] h-[18px] shrink-0 text-[#FF9D70] mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p
                  className="text-white/90 text-[14px] sm:text-[15px] leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  24 Lovegrove Lane, Ajax, ON L1S 0E7
                </p>
              </div>
              <div className="mt-2">
                <a
                  href="tel:+14086200196"
                  className="group inline-flex items-center gap-3 text-white hover:text-[#FF9D70] text-[14px] sm:text-[15px] font-medium transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <svg
                    className="w-4 h-4 sm:w-[18px] sm:h-[18px] shrink-0 text-[#FF9D70] transition-transform duration-200 group-hover:scale-110"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+1 (408) 620 0196</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Bar: Social Pills (X & LinkedIn only) */}
      <footer className="w-full flex flex-wrap items-center justify-between gap-3 z-30 px-6 sm:px-10 md:px-12 lg:px-16 pb-6 sm:pb-8 pt-4">
        {/* X */}
        <a
          href="https://x.com/CelebratoryNet1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Celebratory Network on X"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-white/30 text-white hover:bg-white/10 text-xs sm:text-sm font-medium transition-all backdrop-blur-sm cursor-pointer"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/celebratory-network/"
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
