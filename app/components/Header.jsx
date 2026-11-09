"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function DropdownIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      viewBox="0 0 15 15"
      fill="none"
      className={className}
    >
      <path
        d="M12.5191 5.95664L7.83164 10.6441C7.78811 10.6877 7.73641 10.7223 7.67951 10.7459C7.6226 10.7695 7.5616 10.7816 7.5 10.7816C7.4384 10.7816 7.37741 10.7695 7.3205 10.7459C7.26359 10.7223 7.2119 10.6877 7.16836 10.6441L2.48086 5.95664C2.41523 5.89108 2.37053 5.80753 2.35241 5.71655C2.33429 5.62557 2.34358 5.53127 2.37909 5.44557C2.4146 5.35987 2.47473 5.28663 2.55189 5.23513C2.62904 5.18363 2.71974 5.15618 2.8125 5.15625H12.1875C12.2803 5.15618 12.371 5.18363 12.4481 5.23513C12.5253 5.28663 12.5854 5.35987 12.6209 5.44557C12.6564 5.53127 12.6657 5.62557 12.6476 5.71655C12.6295 5.80753 12.5848 5.89108 12.5191 5.95664Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Header({
  navLinks = [
    { label: "Home", href: "/", active: true },
    { label: "About Us", href: "/about" },
    {
      label: "OD Consulting",
      href: "/od-consulting",
      hasDropdown: true,
      children: [
        { label: "Business OD", href: "/od-consulting/business-od" },
        { label: "Family Businesses", href: "/od-consulting/family-businesses" },
        { label: "Diversity and Inclusion", href: "/od-consulting/diversity-and-inclusion" },
      ],
    },
    {
      label: "Interventions",
      href: "/interventions",
      hasDropdown: true,
      children: [
        { label: "Self Role System", href: "/interventions/self-role-system" },
        { label: "Personal Power in Leadership", href: "/interventions/personal-power-in-leadership" },
        { label: "Large Group Intervention", href: "/interventions/large-group-intervention" },
      ],
    },
    { label: "International", href: "/international" },
    { label: "For the Record", href: "/for-the-record" },
  ],
  buttonText = "Book a call",
  onButtonClick,
  isFloating = true,
  className = "",
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);

  const toggleMobileSubmenu = (label) => {
    setOpenMobileSubmenu((prev) => (prev === label ? null : label));
  };

  return (
    <header
      className={`w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5 lg:pt-6 pb-2 z-50 ${
        isFloating ? "absolute top-0 left-0 right-0" : "relative"
      } ${className}`}
    >
      <nav
        className="flex items-center justify-between w-full max-w-[1783px] h-[64px] sm:h-[70px] pl-[22px] sm:pl-[27px] pr-[10px] py-[14px] sm:py-[16px] rounded-[8px] border border-[#F4F4F4] bg-[#FFF] shadow-[0_0_22px_0_rgba(0,0,0,0.20)]"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center shrink-0 hover:opacity-90 transition-opacity"
        >
          <Image
            src="/logo.png"
            alt="Celebratory Network Logo"
            width={282}
            height={51}
            priority
            className="h-[30px] sm:h-[32px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav Items */}
        <ul className="hidden lg:flex items-center justify-center gap-[24px] xl:gap-[30px] flex-[1_0_0] list-none m-0 p-0">
          {navLinks.map((item) => {
            if (item.hasDropdown) {
              const isHovered = activeDropdown === item.label;
              return (
                <li
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    className={`flex items-center justify-center gap-1.5 font-['PP_Mori',sans-serif] text-[16px] sm:text-[17px] font-medium leading-[20px] text-center transition-colors py-2 cursor-pointer focus:outline-none ${
                      isHovered
                        ? "text-[#FF5E14]"
                        : "text-[#0A0A0A] hover:text-[#FF5E14]"
                    }`}
                    aria-expanded={isHovered}
                  >
                    <span>{item.label}</span>
                    <DropdownIcon
                      className={`w-[11px] h-[11px] transition-transform duration-200 ${
                        isHovered ? "rotate-180 text-[#FF5E14]" : "text-[#0A0A0A] group-hover:text-[#FF5E14]"
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {isHovered && item.children && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-60">
                      <div className="bg-white rounded-[8px] border border-[#F4F4F4] shadow-[0_8px_24px_rgba(0,0,0,0.12)] py-1.5">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-4 py-2 font-['PP_Mori',sans-serif] text-[14px] font-medium text-[#0A0A0A] hover:text-[#FF5E14] hover:bg-[#FFF8F3] transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            }

            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`block font-['PP_Mori',sans-serif] text-[16px] sm:text-[17px] font-medium leading-[20px] text-center transition-colors ${
                    item.active
                      ? "text-[#FF5E14]"
                      : "text-[#0A0A0A] hover:text-[#FF5E14]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Action Button */}
        <div className="hidden lg:flex items-center">
          <button
            type="button"
            onClick={onButtonClick}
            className="flex items-center justify-center gap-[10px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-[8px] bg-[#FF5E14] text-white text-center font-['PP_Mori',sans-serif] text-[15px] sm:text-[16px] font-semibold leading-[20px] hover:bg-[#e0500d] active:scale-[0.98] transition-all cursor-pointer shadow-sm"
          >
            <span>{buttonText}</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex items-center justify-center w-9 h-9 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full max-w-[1783px] mt-2 rounded-[8px] border border-[#F4F4F4] bg-[#FFF] shadow-[0_8px_24px_rgba(0,0,0,0.15)] p-4 flex flex-col gap-2.5">
          <ul className="flex flex-col gap-1 list-none p-0 m-0">
            {navLinks.map((item) => {
              if (item.hasDropdown) {
                const isSubOpen = openMobileSubmenu === item.label;
                return (
                  <li key={item.label} className="border-b border-gray-50 pb-1">
                    <button
                      type="button"
                      onClick={() => toggleMobileSubmenu(item.label)}
                      className="w-full flex items-center justify-between py-2 font-['PP_Mori',sans-serif] text-[15px] font-medium leading-[18px] text-[#0A0A0A] hover:text-[#FF5E14] transition-colors"
                    >
                      <span>{item.label}</span>
                      <DropdownIcon
                        className={`w-[11px] h-[11px] transition-transform duration-200 ${
                          isSubOpen ? "rotate-180 text-[#FF5E14]" : "text-[#0A0A0A]"
                        }`}
                      />
                    </button>
                    {isSubOpen && item.children && (
                      <div className="pl-4 py-1 flex flex-col gap-1.5">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 font-['PP_Mori',sans-serif] text-[13.5px] font-medium text-[#4B5563] hover:text-[#FF5E14]"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.label} className="border-b border-gray-50 pb-1">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 font-['PP_Mori',sans-serif] text-[15px] font-medium leading-[18px] transition-colors ${
                      item.active
                        ? "text-[#FF5E14]"
                        : "text-[#0A0A0A] hover:text-[#FF5E14]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="pt-2">
            <button
              type="button"
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (onButtonClick) onButtonClick(e);
              }}
              className="w-full flex items-center justify-center px-5 py-2.5 rounded-[8px] bg-[#FF5E14] text-white text-center font-['PP_Mori',sans-serif] text-[15px] font-semibold leading-[20px] hover:bg-[#e0500d] active:scale-[0.98] transition-all cursor-pointer shadow-sm"
            >
              <span>{buttonText}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
