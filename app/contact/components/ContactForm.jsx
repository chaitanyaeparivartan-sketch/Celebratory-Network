"use client";

import { useState } from "react";

export default function ContactForm() {
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
  );
}
