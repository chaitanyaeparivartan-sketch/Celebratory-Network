"use client";

import { useState } from "react";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: "Organization Development",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="relative min-h-screen bg-white font-['Inter',system-ui,sans-serif]">
      <Header />

      {/* Hero Header */}
      <section className="relative w-full bg-gradient-to-b from-[#FFF5F0] via-white to-white pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-[2px] bg-[#FF5E14]" />
            <span className="text-[#FF5E14] font-semibold text-[13px] sm:text-[14px] uppercase tracking-wider">
              Get in Touch
            </span>
          </div>
          <h1 className="font-['PP_Mori',sans-serif] text-[clamp(32px,5vw,56px)] font-bold text-[#141414] tracking-[-0.02em] leading-[1.1]">
            Book a Call with Our Leadership Team
          </h1>
          <p className="mt-4 max-w-[680px] mx-auto text-[#555] text-[15px] sm:text-[17px] leading-[1.6]">
            Every organisation reaches moments when strategy, people, and culture need to move together.
            Tell us about your leadership challenges and let&apos;s explore what&apos;s possible.
          </p>
        </div>
      </section>

      {/* Form & Info Section */}
      <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Contact Info */}
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

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white border border-[#EAEAEA] p-7 sm:p-10 rounded-[16px] shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 grid place-items-center mb-4">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-['PP_Mori',sans-serif] text-2xl font-bold text-[#141414]">
                  Thank you for reaching out!
                </h3>
                <p className="mt-2 text-[#555] max-w-[420px]">
                  We have received your message. Our leadership team will review your requirements and connect with you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-[8px] bg-[#FF5E14] text-white font-semibold text-sm hover:bg-[#e0500d] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#444] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-[8px] border border-[#DDD] text-sm text-[#141414] focus:outline-none focus:border-[#FF5E14] focus:ring-1 focus:ring-[#FF5E14] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#444] mb-1.5">
                      Work Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-[8px] border border-[#DDD] text-sm text-[#141414] focus:outline-none focus:border-[#FF5E14] focus:ring-1 focus:ring-[#FF5E14] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#444] mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-[8px] border border-[#DDD] text-sm text-[#141414] focus:outline-none focus:border-[#FF5E14] focus:ring-1 focus:ring-[#FF5E14] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-xs font-semibold uppercase tracking-wider text-[#444] mb-1.5">
                      Organization
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      value={form.organization}
                      onChange={handleChange}
                      placeholder="Your Company Name"
                      className="w-full px-4 py-3 rounded-[8px] border border-[#DDD] text-sm text-[#141414] focus:outline-none focus:border-[#FF5E14] focus:ring-1 focus:ring-[#FF5E14] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-[#444] mb-1.5">
                    Area of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-[8px] border border-[#DDD] text-sm text-[#141414] bg-white focus:outline-none focus:border-[#FF5E14] focus:ring-1 focus:ring-[#FF5E14] transition-all"
                  >
                    <option value="Organization Development">Organization Development</option>
                    <option value="Leadership Alignment">Leadership Alignment</option>
                    <option value="Women Leadership Program">Women Leadership Program</option>
                    <option value="Family Business Consulting">Family Business Consulting</option>
                    <option value="Large Group Interventions">Large Group Interventions</option>
                    <option value="Culture Change">Culture Change</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#444] mb-1.5">
                    Message / Context
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Briefly describe what your organisation is looking to achieve..."
                    className="w-full px-4 py-3 rounded-[8px] border border-[#DDD] text-sm text-[#141414] focus:outline-none focus:border-[#FF5E14] focus:ring-1 focus:ring-[#FF5E14] transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-[8px] bg-[#FF5E14] text-white font-['PP_Mori',sans-serif] text-base font-semibold shadow-sm hover:bg-[#e0500d] active:scale-[0.98] transition-all cursor-pointer"
                >
                  Schedule Conversation
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

