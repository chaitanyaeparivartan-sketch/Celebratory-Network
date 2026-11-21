export default function DirectConnect() {
  return (
    <div className="lg:col-span-5 flex flex-col gap-8 bg-[#FBFBFB] border border-[#EDEDED] p-7 sm:p-9 rounded-[16px]">
      <div>
        <h2 className="font-['PP_Mori',sans-serif] text-[22px] sm:text-[26px] font-semibold text-[#141414]">
          Direct Connect
        </h2>
        <p className="mt-2 text-[#666] text-[14.5px] leading-[1.6]">
          Reach out directly or book an initial consultation with our team.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-full bg-[#FFEAE0] text-[#FF5E14] grid place-items-center shrink-0">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#888]">Email Us</div>
            <a href="mailto:payal@celebratorynetwork.com" className="text-[#141414] font-medium text-[15px] hover:text-[#FF5E14] transition-colors">
              payal@celebratorynetwork.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-full bg-[#FFEAE0] text-[#FF5E14] grid place-items-center shrink-0">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#888]">Location</div>
            <p className="text-[#141414] font-medium text-[15px] leading-snug">
              Mumbai &amp; Global Consortium Network
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-full bg-[#FFEAE0] text-[#FF5E14] grid place-items-center shrink-0">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#888]">Consulting Hours</div>
            <p className="text-[#141414] font-medium text-[15px]">
              Monday &ndash; Friday, 9:00 AM &ndash; 6:00 PM IST
            </p>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-[#EDEDED]">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#888] mb-2">Our Capabilities</div>
        <ul className="text-sm text-[#555] space-y-1.5 list-disc list-inside">
          <li>Organization Development</li>
          <li>Women Leadership Programs (WLP)</li>
          <li>Family Business Consulting</li>
          <li>Large Group Interventions</li>
        </ul>
      </div>
    </div>
  );
}
