// UpcomingEvent.jsx
// Styled with Home Page typography & smooth interactive reveal animations

import Reveal from "@/app/components/Common/Reveal";

const EVENT = {
  chip: "Upcoming Event",
  heading: ["Save the", "Date."],
  title: "Family Business, Legacy & Succession",
  intro:
    "A workshop by Celebratory Network and ANB Legal for family business owners and the next generation. Work through generational dynamics, see how they shape the business, and plan succession together.",
  highlight: "Interactive sessions and networking",
  highlightRest: " with current and next-generation family business leaders.",
  month: "October",
  day: "7",
  weekday: "Wednesday",
  time: "5:30 PM onwards",
  venue: "The Quorum, Mumbai",
  note: "One registration covers two people: a current and a next-generation family business leader.",
  cta: "Register for the workshop",
  link: "https://tinyurl.com/fmbworkshop",
  linkLabel: "tinyurl.com/fmbworkshop",
  posterAlt:
    "Event poster: Family Business, Legacy and Succession, with speakers Payal Gupta and Jahnavi Kohli",
};

const fontMori = "font-['PP_Mori',var(--font-geist-sans),sans-serif]";
const fontInter = "font-['Inter',var(--font-geist-sans),sans-serif]";

export default function UpcomingEvent({ poster = "/event-poster.jpg" }) {
  return (
    <section
      aria-labelledby="ev-title"
      className={`mx-auto max-w-[1240px] bg-white px-4 py-8 ${fontInter} text-[#171717] antialiased sm:px-8 md:py-[72px] lg:px-12`}
    >
      {/* Section heading with scroll reveal entrance */}
      <Reveal direction="up" duration={750} distance={24} className="mb-8 text-center md:mb-12">
        <header>
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-[1px] bg-[#FF5E14]" />
            <span className="text-[#242424] font-medium text-[13px] sm:text-[14px] leading-[18px] tracking-[0.24px] uppercase">
              {EVENT.chip}
            </span>
          </div>
          <h2 className={`${fontMori} text-3xl sm:text-4xl md:text-[52px] font-semibold leading-[1.12] tracking-[-0.8px] text-[#171717]`}>
            {EVENT.heading[0]} <span className="text-[#FF5E14]">{EVENT.heading[1]}</span>
          </h2>
        </header>
      </Reveal>

      {/* Main Event Card with smooth entrance and floating hover physics */}
      <Reveal direction="up" duration={850} delay={100} distance={32}>
        <div className="group/card grid grid-cols-1 overflow-hidden rounded-[8px] border border-[#EAEAEA] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.09)] transition-all duration-500 md:grid-cols-2">
          {/* Content column */}
          <div className="flex flex-col items-start justify-center p-6 sm:p-8 md:p-12 xl:p-14">
            {/* Card Title */}
            <h3
              id="ev-title"
              className={`${fontMori} mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-[34px] xl:text-[40px] font-semibold leading-[1.15] tracking-tight text-[#171717] transition-colors duration-300 group-hover/card:text-black`}
            >
              {EVENT.title}
            </h3>

            {/* Mobile poster: renders under title only on mobile screens (< md) */}
            <div className="mb-5 mt-2 flex w-full justify-center md:hidden overflow-hidden rounded-[8px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={poster}
                alt={EVENT.posterAlt}
                className="block h-auto w-full max-w-[420px] rounded-[8px] border border-[#EAEAEA] object-contain shadow-sm transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
            </div>

            {/* Body paragraphs */}
            <p className="mb-2.5 max-w-[540px] text-[14px] sm:text-[15px] xl:text-[16px] leading-[1.6] text-[#525252]">
              {EVENT.intro}
            </p>
            <p className="mb-2 max-w-[540px] text-[14px] sm:text-[15px] xl:text-[16px] leading-[1.6] text-[#525252]">
              <b className="font-semibold text-[#171717]">{EVENT.highlight}</b>
              {EVENT.highlightRest}
            </p>

            {/* Date / Time / Venue micro-cards matching design */}
            <div className="mb-5 mt-4 flex w-full flex-col gap-3">
              {/* Top Date Card - Full Width Navy Banner */}
              <div className="flex w-full items-center justify-center gap-6 sm:gap-10 rounded-[14px] bg-[#0A1628] px-6 py-3.5 sm:py-4 text-white shadow-sm transition-transform duration-300 hover:scale-[1.01]">
                <span className="text-[15px] sm:text-[17px] font-normal text-[#94A3B8]">
                  {EVENT.month}
                </span>
                <span className={`${fontMori} text-[32px] sm:text-[38px] font-bold leading-none text-white`}>
                  {EVENT.day}
                </span>
                <span className="text-[15px] sm:text-[17px] font-normal text-[#94A3B8]">
                  {EVENT.weekday}
                </span>
              </div>

              {/* Bottom 2 Cards: Time & Venue side-by-side */}
              <div className="grid w-full grid-cols-2 gap-3">
                {/* Time Card */}
                <div className="flex flex-col justify-center rounded-[14px] border border-[#E2E8F0] bg-white p-4 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF5E14]/40 hover:shadow-md">
                  <span className="text-[13px] sm:text-[14px] font-normal text-[#64748B] mb-1">
                    Time
                  </span>
                  <div className={`${fontMori} text-[15.5px] sm:text-[17.5px] font-bold text-[#0A1628] leading-[1.3]`}>
                    5:30 PM<br />onwards
                  </div>
                </div>

                {/* Venue Card */}
                <div className="flex flex-col justify-center rounded-[14px] border border-[#E2E8F0] bg-white p-4 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF5E14]/40 hover:shadow-md">
                  <span className="text-[13px] sm:text-[14px] font-normal text-[#64748B] mb-1">
                    Venue
                  </span>
                  <div className={`${fontMori} text-[15.5px] sm:text-[17.5px] font-bold text-[#0A1628] leading-[1.3]`}>
                    The Quorum,<br />Mumbai
                  </div>
                </div>
              </div>
            </div>

            {/* Note Box */}
            <div className="mb-5 flex w-full items-start gap-3 rounded-[8px] bg-[#F8FAFC] border border-[#E2E8F0] px-3.5 py-3 text-[13px] sm:text-[14px] leading-[1.5] text-[#475569] transition-all hover:border-[#FF5E14]/30 hover:bg-[#FFFDFB]">
              <svg
                className="mt-0.5 flex-none text-[#FF5E14]"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <div>{EVENT.note}</div>
            </div>

            {/* CTA Button matching Image 3 */}
            <a
              href={EVENT.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center justify-center gap-3.5 rounded-[8px] bg-[#FF5E14] py-3.5 pl-6 pr-3 text-[15px] sm:text-[16px] font-semibold text-white no-underline transition-all duration-300 hover:bg-[#e0500d] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(255,94,20,0.38)] active:scale-[0.98] focus-visible:outline focus-visible:outline-[2px] focus-visible:outline-offset-[3px] focus-visible:outline-[#FF5E14] max-sm:w-full ${fontMori}`}
            >
              <span>{EVENT.cta}</span>
              <span className="grid h-[32px] w-[32px] place-items-center rounded-[6px] bg-white/20 transition-transform duration-200 group-hover:translate-x-1">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>
          </div>

          {/* Desktop Poster column with hover zoom animation */}
          <div className="group/poster hidden items-center justify-center bg-white p-6 md:flex md:p-8 xl:p-10 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={poster}
              alt={EVENT.posterAlt}
              className="block h-auto w-full max-w-[480px] rounded-[8px] border border-[#EAEAEA] object-contain shadow-sm transition-transform duration-700 ease-out group-hover/poster:scale-[1.03]"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
