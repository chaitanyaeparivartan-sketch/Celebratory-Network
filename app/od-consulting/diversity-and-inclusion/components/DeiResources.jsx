import Link from "next/link";

const items = [
  { title: "Women at work beyond IWD", href: "#" },
  { title: "Strengthen the foundations of DEI", href: "#" },
  { title: "Embracing Diversity", href: "#" },
  { title: "How to build an effective ERG at workplace", href: "#" },
  { title: "ESG: A Corporate Priority", href: "#" },
  { title: "DEI Dilemmas and Questions", href: "#" },
  { title: "DEI Coaching for Senior Leader", href: "#" },
  { title: "Three cases of Diversity, Equity & Inclusion", href: "#" },
  { title: "Learning Journey for Women Leaders", href: "#" },
  { title: "DEI Employee Resource Groups", href: "#" },
  { title: "Inclusive Learning Journey", href: "#" },
  { title: "An Approach to DEI", href: "#" },
];

function ArrowIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4.66675 11.3332L11.3334 4.6665"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33325 4.6665H11.3333V10.6665"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function DeiResources() {
  return (
    <section className="bg-[#f6f6f6] font-['Inter',system-ui,sans-serif] text-[#242424] antialiased">
      <div className="mx-auto max-w-[1783px] px-4 sm:px-6 md:px-8 xl:px-[6vw] pb-14 sm:pb-20 md:pb-24 pt-10 sm:pt-14 md:pt-[72px]">
        {/* Header */}
        <header className="mb-8 sm:mb-12 md:mb-[72px] text-center">
          <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 text-[12px] sm:text-[13px] md:text-[14px] font-medium uppercase leading-[18px] tracking-[0.24px] text-[#242424]">
            <span className="h-2 w-2 flex-none bg-[#FF5E14] rounded-[1px]" aria-hidden="true" />
            Resources
          </div>
          <h2 className="font-ppmori text-3xl sm:text-4xl md:text-[48px] lg:text-[52px] font-semibold leading-[1.12] tracking-[-0.8px] text-[#242424] max-w-[840px] mx-auto px-2">
            Ideas for building inclusive workplaces.
          </h2>
        </header>

        {/* List */}
        <ul className="border-t border-[#e4e4e4]">
          {items.map(({ title, href }) => (
            <li
              key={title}
              className="group border-b border-[#e4e4e4] transition-colors hover:bg-black/[0.02]"
            >
              <Link
                href={href}
                className="flex items-center justify-between gap-3 sm:gap-4 py-4 sm:py-5 md:py-6 no-underline text-[#111] group-hover:text-[#FF5E14] transition-colors"
              >
                <h3 className="font-ppmori text-[16.5px] sm:text-[20px] md:text-[22px] font-semibold leading-[1.3] tracking-[-0.24px] text-inherit transition-colors">
                  {title}
                </h3>

                <span className="inline-flex items-center gap-2 text-sm sm:text-base font-medium shrink-0 text-[#242424] group-hover:text-[#FF5E14] transition-colors pl-2">
                  <span className="hidden sm:inline">Read More</span>
                  <ArrowIcon className="transition-transform duration-200 group-hover:rotate-45" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
