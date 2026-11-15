"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/app/components/Common/Reveal";

function XSocialIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 sm:w-[17px] sm:h-[17px]"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInSocialIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 sm:w-[17px] sm:h-[17px]"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    name: "X",
    href: "https://x.com",
    icon: XSocialIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/celebratory-network",
    icon: LinkedInSocialIcon,
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#FF5E14] text-white font-['Inter',system-ui,sans-serif] overflow-hidden">
      <Reveal direction="up" duration={650} distance={18} className="w-full">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-5 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Left: Brand Logo + Company Name */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0 hover:opacity-90 transition-opacity"
          >
            <div className="relative w-8 h-8 shrink-0">
              <Image
                src="/cn-badge.webp"
                alt="Celebratory Network Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span
              style={{
                color: "#FFF",
                fontFamily: '"Kanchenjunga", sans-serif',
                fontSize: "22.723px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              Celebratory Network
            </span>
          </Link>

          {/* Center: Copyright Notice */}
          <p className="text-white/95 text-[13px] sm:text-[14px] md:text-[15px] font-normal text-center">
            Copyrights © 2026 All Rights Reserved by Celebratory Network
          </p>

          {/* Right: Social Icons (X & LinkedIn) */}
          <div className="flex items-center gap-2.5 shrink-0">
            {SOCIAL_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Celebratory Network on ${item.name}`}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#205A9D] text-white flex items-center justify-center hover:opacity-90 hover:scale-105 transition-all shadow-sm"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
