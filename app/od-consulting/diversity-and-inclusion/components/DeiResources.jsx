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
      <div className="mx-auto max-w-[1088px] px-5 pb-[72px] pt-12 md:px-6 md:pb-24 md:pt-[72px]">
        {/* Header */}
        <header className="mb-12 text-center md:mb-[72px]">
          <div className="mb-4 inline-flex items-center gap-2 text-[14px] font-medium uppercase leading-[18px] tracking-[0.24px] text-[#242424]">
            <span className="h-2 w-2 flex-none bg-[#ee6c3a]" aria-hidden="true" />
            Resources
          </div>
          <h2 className="font-['PP_Mori','Inter',system-ui,sans-serif] text-[clamp(34px,9vw,52px)] font-semibold leading-[1.08] tracking-[-0.8px] text-[#242424] md:text-[52px] md:leading-[48px]">
            Ideas for building inclusive workplaces.
          </h2>
        </header>

        {/* List */}
        <ul className="border-t border-[#e4e4e4]">
          {items.map(({ title, href }) => (
            <li
              key={title}
              className="group grid grid-cols-1 items-center gap-y-2.5 border-b border-[#e4e4e4] py-6 md:grid-cols-[1fr_auto] md:gap-x-8 md:py-[34px]"
            >
              <h3 className="text-[20px] font-semibold leading-[26px] tracking-[-0.24px] text-[#111] transition-colors duration-200 motion-reduce:transition-none group-hover:text-[#ee6c3a] group-focus-within:text-[#ee6c3a] md:text-[24px] md:leading-[30px]">
                {title}
              </h3>

              <Link
                href={href}
                className="inline-flex items-center gap-2.5 text-base font-medium text-[#242424] no-underline transition-colors duration-200 motion-reduce:transition-none group-hover:text-[#ee6c3a] focus-visible:text-[#ee6c3a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#242424] md:min-w-[128px] md:justify-end"
              >
                Read More
                <ArrowIcon className="transition-transform duration-200 motion-reduce:transition-none group-hover:rotate-45 group-focus-within:rotate-45" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
