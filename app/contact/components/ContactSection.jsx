"use client";

import { useState } from "react";
import Reveal from "@/app/components/Common/Reveal";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const msg = form.message.trim();
    const subject = form.subject.trim() || "Message from website";

    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !msg) {
      setStatus("Please provide your name, a valid email, and a message.");
      return;
    }

    setIsSubmitting(true);
    setStatus(`Thank you, ${name}. Opening your email app to send your message to the team…`);

    const mailtoBody = encodeURIComponent(`${msg}\n\n— ${name} (${email})`);
    const mailtoSubj = encodeURIComponent(subject);

    setTimeout(() => {
      window.location.href = `mailto:team@celebratorynetwork.com?subject=${mailtoSubj}&body=${mailtoBody}`;
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 px-5 sm:px-8">
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column: Office Locations */}
        <Reveal direction="up" duration={700} className="space-y-10 sm:space-y-12">
          {/* India Office */}
          <div className="space-y-4">
            <h3 className="flex items-center gap-4 text-xs sm:text-[13px] font-bold tracking-[0.16em] uppercase text-[#171717]">
              <span>India Office</span>
              <span className="flex-1 h-[2px] bg-gradient-to-r from-[#FF5E14] to-[#FF5E14]/15" />
            </h3>

            <address
              className="not-italic text-[16px] sm:text-[17px] leading-[1.65] text-[#222222]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Jolie’s, Birla Centurion,
              <br />
              Pandurang Budhkar Marg,
              <br />
              Century Mills, Worli,
              <br />
              Mumbai, Maharashtra 400030
            </address>

            <p
              className="text-[14.5px] sm:text-[15px] text-[#555555] leading-[1.7]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Contact -{" "}
              <a
                href="tel:+918879551654"
                className="text-[#FF5E14] font-semibold hover:underline"
              >
                +91-8879551654
              </a>{" "}
              | Email -{" "}
              <a
                href="mailto:team@celebratorynetwork.com"
                className="text-[#FF5E14] font-semibold hover:underline"
              >
                team@celebratorynetwork.com
              </a>
            </p>
          </div>

          {/* Canada Office */}
          <div className="space-y-4">
            <h3 className="flex items-center gap-4 text-xs sm:text-[13px] font-bold tracking-[0.16em] uppercase text-[#171717]">
              <span>Canada Office</span>
              <span className="flex-1 h-[2px] bg-gradient-to-r from-[#FF5E14] to-[#FF5E14]/15" />
            </h3>

            <address
              className="not-italic text-[16px] sm:text-[17px] leading-[1.65] text-[#222222]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              24 Lovegrove Lane
              <br />
              Ajax, ON L1S 0E7
            </address>

            <p
              className="text-[14.5px] sm:text-[15px] text-[#555555] leading-[1.7]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Contact:{" "}
              <a
                href="tel:+14086200196"
                className="text-[#FF5E14] font-semibold hover:underline"
              >
                +1 (408) 620 0196
              </a>
            </p>
          </div>
        </Reveal>

        {/* Right Column: Interactive Form Card */}
        <Reveal direction="up" duration={700} delay={120}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-[24px] bg-white p-7 sm:p-9 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-black/[0.06] flex flex-col gap-4"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#555555] mb-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full text-[15px] px-4 py-3.5 rounded-[12px] bg-[#FAFAFA] border border-[#DCDCDC] text-[#171717] placeholder:text-[#999] outline-none transition-all duration-200 focus:bg-white focus:border-[#FF5E14] focus:ring-2 focus:ring-[#FF5E14]/20"
                style={{ fontFamily: "Inter, sans-serif" }}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#555555] mb-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                E-mail
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="E-mail"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full text-[15px] px-4 py-3.5 rounded-[12px] bg-[#FAFAFA] border border-[#DCDCDC] text-[#171717] placeholder:text-[#999] outline-none transition-all duration-200 focus:bg-white focus:border-[#FF5E14] focus:ring-2 focus:ring-[#FF5E14]/20"
                style={{ fontFamily: "Inter, sans-serif" }}
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="contact-subject"
                className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#555555] mb-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full text-[15px] px-4 py-3.5 rounded-[12px] bg-[#FAFAFA] border border-[#DCDCDC] text-[#171717] placeholder:text-[#999] outline-none transition-all duration-200 focus:bg-white focus:border-[#FF5E14] focus:ring-2 focus:ring-[#FF5E14]/20"
                style={{ fontFamily: "Inter, sans-serif" }}
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#555555] mb-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full text-[15px] px-4 py-3.5 rounded-[12px] bg-[#FAFAFA] border border-[#DCDCDC] text-[#171717] placeholder:text-[#999] outline-none transition-all duration-200 focus:bg-white focus:border-[#FF5E14] focus:ring-2 focus:ring-[#FF5E14]/20 min-h-[140px] resize-y"
                style={{ fontFamily: "Inter, sans-serif" }}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-[8px] bg-[#FF5E14] text-white text-[14px] font-semibold shadow-sm hover:bg-[#e0500d] hover:shadow-[0_6px_20px_rgba(255,94,20,0.35)] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-60"
                style={{ fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif' }}
              >
                {isSubmitting ? "Opening Email App…" : "Send Message"}
              </button>
            </div>

            {/* Status Feedback Note */}
            {status && (
              <p
                role="status"
                aria-live="polite"
                className={`text-[13.5px] leading-relaxed pt-1 ${
                  status.includes("Thank you") ? "text-emerald-700 font-medium" : "text-amber-800"
                }`}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {status}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
