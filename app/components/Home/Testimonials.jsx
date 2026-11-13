"use client";

import { useRef } from "react";

function XIcon({ className = "w-4 h-4 sm:w-[18px] sm:h-[18px]" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={`${className} shrink-0`}
    >
      <path
        d="M20.1562 20.6109C20.0917 20.7286 19.9967 20.8267 19.8813 20.8951C19.7659 20.9636 19.6342 20.9998 19.5 21H15C14.8738 21 14.7496 20.9681 14.639 20.9073C14.5284 20.8465 14.4349 20.7587 14.3672 20.6522L10.5712 14.6869L5.055 20.7544C4.92053 20.8988 4.73454 20.9845 4.53735 20.9927C4.34017 21.0009 4.14769 20.9311 4.00163 20.7984C3.85558 20.6657 3.76773 20.4807 3.75713 20.2836C3.74653 20.0866 3.81403 19.8933 3.945 19.7456L9.73594 13.3706L3.86719 4.15313C3.79491 4.03973 3.75444 3.90898 3.75004 3.77458C3.74563 3.64018 3.77744 3.50707 3.84213 3.38918C3.90683 3.27129 4.00203 3.17296 4.11777 3.10449C4.23351 3.03603 4.36552 2.99993 4.5 3H9C9.12622 3.00004 9.2504 3.03194 9.36102 3.09274C9.47164 3.15353 9.56512 3.24127 9.63281 3.34781L13.4287 9.31312L18.945 3.24562C19.0795 3.10117 19.2655 3.01555 19.4626 3.00731C19.6598 2.99907 19.8523 3.06888 19.9984 3.20161C20.1444 3.33435 20.2323 3.51929 20.2429 3.71636C20.2535 3.91343 20.186 4.10674 20.055 4.25438L14.2641 10.6247L20.1328 19.8478C20.2047 19.9613 20.2448 20.0919 20.2489 20.2262C20.253 20.3604 20.221 20.4933 20.1562 20.6109Z"
        fill="#242424"
      />
    </svg>
  );
}

function StarIcon({ className = "w-5 h-5 sm:w-6 sm:h-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      className={`${className} shrink-0`}
    >
      <path
        d="M29.271 14.3484L23.6489 19.1996L25.3618 26.4546C25.4563 26.8485 25.4319 27.2615 25.2918 27.6415C25.1517 28.0215 24.9021 28.3515 24.5746 28.5897C24.2471 28.828 23.8563 28.9638 23.4516 28.98C23.0469 28.9963 22.6464 28.8922 22.3009 28.681L15.9916 24.798L9.67865 28.681C9.33312 28.891 8.93317 28.9941 8.52917 28.9772C8.12518 28.9604 7.73519 28.8244 7.40833 28.5863C7.08147 28.3483 6.83235 28.0189 6.69233 27.6396C6.55232 27.2602 6.52767 26.8479 6.62149 26.4546L8.3406 19.1996L2.71852 14.3484C2.4128 14.0842 2.19169 13.7358 2.08282 13.3466C1.97395 12.9575 1.98214 12.5449 2.10635 12.1604C2.23057 11.7759 2.46531 11.4365 2.78127 11.1846C3.09722 10.9327 3.48039 10.7795 3.88291 10.744L11.2541 10.1493L14.0976 3.26792C14.2515 2.89288 14.5135 2.57209 14.8502 2.34632C15.1869 2.12055 15.5831 2 15.9885 2C16.3939 2 16.7901 2.12055 17.1268 2.34632C17.4635 2.57209 17.7255 2.89288 17.8794 3.26792L20.7217 10.1493L28.0928 10.744C28.4962 10.7781 28.8805 10.9305 29.1976 11.1821C29.5147 11.4336 29.7505 11.7731 29.8755 12.1581C30.0005 12.5431 30.0091 12.9564 29.9002 13.3462C29.7913 13.7361 29.5699 14.0851 29.2635 14.3497L29.271 14.3484Z"
        fill="#FF5E14"
      />
    </svg>
  );
}

const TESTIMONIALS = [
  {
    id: 1,
    type: "text",
    name: "Kane Williamson",
    role: "CEO & Founder",
    avatar: "/Testimonials/avatar-kane.jpg",
    text: "Our organization was looking for support on improving our work culture. I learnt of Celebratory Network from a peer in My MBA alumni group and approached Payal and Kesha. From the get go they were responsive and empathetic...",
    date: "09/30/2024",
  },
  {
    id: 2,
    type: "video",
    name: "Kane Williamson",
    role: "CEO & Founder",
    image: "/Testimonials/client-woman-smile.jpg",
    date: "09/30/2024",
  },
  {
    id: 3,
    type: "text",
    name: "Kane Williamson",
    role: "CEO & Founder",
    avatar: "/Testimonials/avatar-kane.jpg",
    text: "Our organization was looking for support on improving our work culture. I learnt of Celebratory Network from a peer in My MBA alumni group and approached Payal and Kesha. From the get go they were responsive and empathetic...",
    date: "09/30/2024",
  },
  {
    id: 4,
    type: "video",
    name: "Kane Williamson",
    role: "CEO & Founder",
    image: "/Testimonials/video-woman.jpg",
    date: "09/30/2024",
  },
  {
    id: 5,
    type: "text",
    name: "Kane Williamson",
    role: "CEO & Founder",
    avatar: "/Testimonials/avatar-kane.jpg",
    text: "Our organization was looking for support on improving our work culture. I learnt of Celebratory Network from a peer in My MBA alumni group and approached Payal and Kesha. From the get go they were responsive and empathetic...",
    date: "09/30/2024",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const offset = direction === "left" ? -480 : 480;
    scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-[#F6F6F6] pt-14 sm:pt-16 md:pt-20 pb-10 sm:pb-12 md:pb-16 overflow-hidden">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-10">
          {/* Section Chip */}
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-[1px] bg-[#FF5E14]" />
            <span
              className="text-[#242424] font-medium text-[14px] leading-[18px] tracking-[0.24px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Testimonial
            </span>
          </div>

          {/* Section Title */}
          <h2
            className="text-[#242424] font-semibold text-3xl sm:text-4xl md:text-[52px] leading-[1.15] md:leading-[58px] tracking-[-0.8px]"
            style={{
              fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
            }}
          >
            What Clients Say
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll Carousel */}
      <div className="relative w-full">
        <div
          ref={scrollRef}
          className="flex gap-5 sm:gap-6 md:gap-7 overflow-x-auto scroll-smooth px-4 sm:px-6 lg:px-8 xl:px-12 pt-6 pb-12 sm:pb-16 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {TESTIMONIALS.map((card) => {
            if (card.type === "video") {
              return (
                <div
                  key={card.id}
                  className="group relative flex flex-col justify-between shrink-0 rounded-[8px] overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] hover:-translate-y-1 w-[300px] sm:w-[380px] md:w-[420px] lg:w-[440px] h-[480px] sm:h-[500px] md:h-[520px] p-6 sm:p-7 md:p-8"
                  style={{
                    background: `linear-gradient(180deg, #FFF 0.03%, rgba(255, 255, 255, 0.00) 18%, rgba(255, 255, 255, 0.00) 75%, #FFF 99.97%), url(${card.image}) lightgray 50% / cover no-repeat`,
                  }}
                >
                  {/* Top: Profile Title, Tag, and X Icon */}
                  <div className="relative z-10 flex items-start justify-between w-full">
                    <div className="flex flex-col">
                      <h4
                        className="text-[#242424] text-[18px] sm:text-[20px] font-semibold leading-tight tracking-[-0.01em]"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {card.name}
                      </h4>
                      <p
                        className="text-[#666] text-[14px] sm:text-[15px] font-normal leading-normal mt-0.5"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {card.role}
                      </p>
                    </div>

                    {/* X Icon Badge */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-[6px] bg-white/90 backdrop-blur-md border border-[#EAEAEA] flex items-center justify-center shadow-sm">
                      <XIcon />
                    </div>
                  </div>

                  {/* Center: Play Button */}
                  <div className="relative z-10 flex items-center justify-center my-auto">
                    <button
                      type="button"
                      aria-label="Play testimonial video"
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/40 backdrop-blur-md border border-white/70 flex items-center justify-center shadow-lg cursor-pointer group-hover:scale-110 transition-transform duration-300 group-hover:bg-white/50"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-6 h-6 sm:w-7 sm:h-7 fill-white ml-0.5 filter drop-shadow"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>

                  {/* Bottom: Stars and Date */}
                  <div className="relative z-10 flex items-center justify-between w-full">
                    <div className="flex items-center gap-1">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                    <span
                      className="text-[#717171] text-[15px] sm:text-[16px] md:text-[17px] font-medium"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {card.date}
                    </span>
                  </div>
                </div>
              );
            }

            // Text Card
            return (
              <div
                key={card.id}
                className="group relative flex flex-col justify-between shrink-0 rounded-[8px] bg-[#FFF] border border-[#EAEAEA] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] hover:-translate-y-1 w-[300px] sm:w-[380px] md:w-[420px] lg:w-[440px] h-[480px] sm:h-[500px] md:h-[520px] p-6 sm:p-7 md:p-8"
              >
                {/* Top Row: Avatar + Title/Tag + X Icon */}
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3 sm:gap-3.5">
                    {/* Profile Avatar */}
                    <div
                      className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-full shrink-0 overflow-hidden"
                      style={{
                        background: `url(${card.avatar}) lightgray 50% / cover no-repeat`,
                      }}
                    />
                    <div className="flex flex-col">
                      <h4
                        className="text-[#242424] text-[17px] sm:text-[19px] font-semibold leading-tight tracking-[-0.01em]"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {card.name}
                      </h4>
                      <p
                        className="text-[#888] text-[13px] sm:text-[14px] font-normal leading-normal mt-0.5"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {card.role}
                      </p>
                    </div>
                  </div>

                  {/* X Icon Badge */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-[6px] bg-white border border-[#EAEAEA] flex items-center justify-center shadow-sm">
                    <XIcon />
                  </div>
                </div>

                {/* Testimonial Quote Text */}
                <div className="flex-1 flex flex-col justify-center my-3">
                  <p
                    className="text-[#242424] leading-[1.4] sm:leading-[1.45] tracking-[-0.4px] line-clamp-5 sm:line-clamp-6"
                    style={{
                      fontFamily: '"PP Mori", var(--font-geist-sans), sans-serif',
                      fontSize: "clamp(18px, 1.4vw, 22px)",
                      fontWeight: 400,
                    }}
                  >
                    {card.text}
                  </p>
                  <button
                    type="button"
                    className="text-[#FF5E14] text-[14px] sm:text-[15px] font-medium mt-2 text-left hover:underline cursor-pointer transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Read More
                  </button>
                </div>

                {/* Bottom Row: 5 Stars + Date */}
                <div className="flex items-center justify-between w-full pt-3 border-t border-[#F5F5F5]">
                  <div className="flex items-center gap-1">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <span
                    className="text-[#717171] text-[15px] sm:text-[16px] md:text-[17px] font-medium"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {card.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 mt-2 sm:mt-3 flex items-center justify-end gap-2.5">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-[#DCDCDC] bg-white flex items-center justify-center text-[#242424] hover:bg-[#FF5E14] hover:text-white hover:border-[#FF5E14] transition-colors shadow-sm cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-[#DCDCDC] bg-white flex items-center justify-center text-[#242424] hover:bg-[#FF5E14] hover:text-white hover:border-[#FF5E14] transition-colors shadow-sm cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
