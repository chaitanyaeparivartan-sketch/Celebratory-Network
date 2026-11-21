"use client";

import { useRef } from "react";
import Reveal from "@/app/components/Common/Reveal";

const TESTIMONIALS = [
  // 1-5. Participant Testimonials (Women Leadership Program)
  {
    id: 1,
    category: "participant",
    title: "Women Leadership Program",
    role: "Participant",
    initials: "WLP",
    statement: "“The secret ingredient is you.”",
    text: "The nine-month journey became a space to recognise and celebrate what lies within me, while connecting it to a larger sense of purpose. Through reflection, experimentation and stepping beyond my comfort zone, I began to recognise the limiting voices within me and explore what becomes possible when I stop defining myself by boundaries. The program helped me turn inward, challenge myself and step into a more authentic expression of my leadership—with a community of women growing alongside me.",
  },
  {
    id: 2,
    category: "participant",
    title: "Women Leadership Program",
    role: "Participant",
    initials: "WLP",
    statement: "“Leadership is a skill that can be learnt.”",
    text: "One of my biggest realisations through this nine-month journey was that leadership is a skill that can be learnt. The program gave me the space to reflect on who I am, explore who I want to become and challenge myself to step into the unknown. It pushed me beyond my comfort zone and gave me the confidence to experiment with new possibilities. What made the journey special was the community—the women who walked alongside me, challenged me and supported me throughout. Sometimes, growth begins simply by being willing to explore the unknown.",
  },
  {
    id: 3,
    category: "participant",
    title: "Women Leadership Program",
    role: "Participant",
    initials: "WLP",
    statement: "“Leadership is not just about achievement—it is also about inspiring and empowering those around us.”",
    text: "Nine months ago, I embarked on a leadership journey that challenged me to look deeper at myself, my influence and the kind of leader I want to become. The program created opportunities to explore influence, networking, self-belief and the power of helping others. Each experience helped me move closer to my potential, while reminding me that leadership is not just about achievement—it is also about inspiring and empowering those around us. I leave the journey with greater confidence, a stronger network and a deeper sense of purpose.",
  },
  {
    id: 4,
    category: "participant",
    title: "Women Leadership Program",
    role: "Participant",
    initials: "WLP",
    statement: "“Leadership is also about knowing when to learn, unlearn and remain open to the wisdom of others.”",
    text: "The nine-month journey created a space to exchange ideas, reflect on personal values and learn from the experiences of fellow women leaders. The conversations, relationships and collective learning helped me look at my own leadership journey with a fresh perspective. I am walking away with a stronger belief in the value of meaningful connections—and in the possibility of creating something greater through them.",
  },
  {
    id: 5,
    category: "participant",
    title: "Women Leadership Program",
    role: "Participant",
    initials: "WLP",
    statement: "“Leaders are not simply born. They are shaped, challenged and made.”",
    text: "For nine months, this journey challenged me to look at leadership differently. Designed to move beyond the stereotype of what a leadership program should be, it gave me the space to reflect, introspect, challenge my thinking and understand my own potential. The journey helped me discover the power of personal branding and, more importantly, the possibilities that emerge when we are willing to challenge ourselves. I came away with a belief that leaders are not simply born. They are shaped, challenged and made.",
  },

  // 6-18. Client & Organizational Leadership Testimonials
  {
    id: 6,
    category: "client",
    title: "Pharma Manufacturing Organization",
    role: "MD",
    initials: "PM",
    statement: "“Innovation and progress hinge on diverse leadership voices.”",
    text: "As we reflect on International Women’s Day, a day that celebrates resilience, remarkable achievement, and the fight for equality, I wonder how we can innovate within the culture to accelerate progress. Innovation and progress hinge on diverse leadership voices. Our ‘We Lead’ initiative, designed to break the glass ceiling from within by mentoring women for leadership, reflects this... Hearing from team members who have personally experienced the program’s benefits, validates the essential skills they have gained and their inclusion in our organization’s key talent pool.",
  },
  {
    id: 7,
    category: "client",
    title: "Mining Industry",
    role: "President HR",
    initials: "MI",
    statement: "“It was a community with the courage to shape its own journey.”",
    text: "Celebratory Network helped create the space for women across generations and levels to come together, share honestly and explore what was really shaping their experience. Through systemic diagnosis, visioning and co-creation, they helped the group find its voice, build ownership and shape a shared direction. What emerged was more than a women’s network. It was a community with the courage to shape its own journey.",
  },
  {
    id: 8,
    category: "client",
    title: "Pharma Manufacturing Organization",
    role: "Vice President",
    initials: "PM",
    statement: "“It began building an ecosystem where women could thrive.”",
    text: "What stood out for me was how intentionally the journey was designed around the realities of women leaders—not just what they needed to learn, but where they were in their own journey. Across nine months, reflection, coaching, mentoring, conversations and real-world experiences came together to create something much more meaningful than a leadership program... And perhaps most importantly, the journey didn’t just build individuals. It began building an ecosystem where women could thrive.",
  },
  {
    id: 9,
    category: "client",
    title: "Infrastructure & Construction Organization",
    role: "CHRO",
    initials: "IC",
    statement: "“It was a journey from diagnosis to dialogue to action.”",
    text: "What stood out for me was the depth of listening that shaped this journey. Celebratory Network brought a systemic lens to the conversations, creating safe spaces to understand what was working, uncover blind spots and surface what needed to change. The insights then moved beyond diagnosis—helping translate conversations into practical action through leadership dialogues, awareness and capability building. It was a journey from diagnosis to dialogue to action.",
  },
  {
    id: 10,
    category: "client",
    title: "Global Financial Services Company",
    role: "Founder, MD",
    initials: "FS",
    statement: "“Connect, question, listen and grow together.”",
    text: "Some leadership experiences give you new tools. Others give you the space to pause, reflect and see yourself differently. Celebratory Network created that space through thoughtful conversations, reflection, diverse perspectives and shared experiences—helping leaders reconnect with their purpose, authenticity and impact. What made it special was the opportunity to connect, question, listen and grow together. And sometimes, that is where personal power truly begins.",
  },
  {
    id: 11,
    category: "client",
    title: "Biotechnology Research Company",
    role: "Manager HR",
    initials: "BT",
    statement: "“A big Thank You to the CN team for engaging with us.”",
    text: "Our organization was looking for support on improving our work culture. I learnt of Celebratory Network from a peer in My MBA alumni group and approached Payal and Kesha. From the get go they were eager to understand more on our organization , our culture and how they can support us. Payal conducted a day long workshop at our organization that was thought provoking, insightful and engaging... A big Thank You to the CN team for engaging with us and helping us have an honest conversation on inclusivity at the workplace.",
  },
  {
    id: 12,
    category: "client",
    title: "Electrical & Electronics Manufacturing, Europe",
    role: "Leadership Team",
    initials: "EE",
    statement: "“You really know our pulse and are working with our reality.”",
    text: "“at first I thought, we will take up HWC, because it will be a new experience, but was very certain of how much will come out of it, besides some gyaan and tips. I must say, I have been happily wronged. HWC has given me a deeper insight into my people and where we are heading... You guys are unlike those organizations , which gives you generalized advice; you really know our pulse and are working with our reality and not some to do’s”",
  },
  {
    id: 13,
    category: "client",
    title: "Insurance Company",
    role: "Country Head HR",
    initials: "IC",
    statement: "“We were allowed to be at ease with ourselves.”",
    text: "I enjoyed the session and found value in it. I appreciate the facilitators style of facilitation – we were allowed to be at ease with ourselves, were encouraged to explore and it was ok not to ‘be perfect’... By the end of the session some of us picked us some skills and were speaking ‘the language.",
  },
  {
    id: 14,
    category: "client",
    title: "Design Services Company",
    role: "CPO",
    initials: "DS",
    statement: "“A space for ‘renewal’ and ‘productive anxiety’.”",
    text: "I describe the conversation circle as a space for ‘renewal’. This space provides a connection through the exchange of narratives (stories) of whoever shows up in the circle. The circle also offers a space for mental exercises that enables one to process thoughts in a healthy way. Through acts of listening and speaking one is led to a state of what I would like to refer to as ‘productive anxiety’. As one of our team mate put it “an energy booster” leading us to affirm it, to be a renewal circle.",
  },
  {
    id: 15,
    category: "client",
    title: "Consulting Firm, UAE",
    role: "Leadership Team",
    initials: "CF",
    statement: "“Happy Workplace Cultures has made us look at ourselves.”",
    text: "Happy Workplace Cultures has made us look at ourselves and what we contribute or not to our own Happyness and that of the organization. It brings in ownership from all stakeholders to meet results, be happy and grow. Irrespective of role and designation we learn how to make ourselves and the workplace a happier place” – Client shifted from working with Employee Engagement to Happy Workplace Cultures.",
  },
  {
    id: 16,
    category: "client",
    title: "Business Consulting Services",
    role: "CHRO",
    initials: "BC",
    statement: "“Goes highly recommended.”",
    text: "We recently partnered with Celebratory Network Pvt Ltd. and conducted a series of very heartening sessions called “conversation circles”. They offer some truly relevant topics, and it was great to see teams sharing their feelings and experiences through a common chord. I must congratulate Payal Gupta for the outstanding work she is doing in bringing people together on such a platform within organizations. Goes highly recommended.",
  },
  {
    id: 17,
    category: "client",
    title: "Financial Services Company",
    role: "Corporate HR",
    initials: "FS",
    statement: "“Through positive reinforcement and encouragement, she helped me make amends.”",
    text: "I have known Payal for years now. She has a friendly and simplistic approach towards Coaching. I approached her for assistance as a Coach. Through positive reinforcement and encouragement, she helped me make amends and some changes in the way I approached challenges faced. I have gained from the conversations and realigning my focus to what I want has allowed me to take certain decisions. Thanks a lot, Payal for the help.",
  },
  {
    id: 18,
    category: "client",
    title: "Pharma Manufacturing Organization, Brazil",
    role: "Leadership Team (Women Leadership Program)",
    initials: "PM",
    statement: "“We continue to learn, evolve and lead with purpose.”",
    text: "In the last five days, women leaders from across different divisions came together for an intensive and deeply meaningful leadership experience. The journey created space for genuine exchange, shared experiences, support, active listening, empathy and learning... We are proud to create spaces where women can pause, reflect, challenge themselves and grow together—strengthening not only individual leadership, but the communities and teams they influence. We continue to learn, evolve and lead with purpose.",
  },
];


function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <path
        d="M21.4956 10.537L17.3669 14.0996L18.6248 19.4274C18.6942 19.7166 18.6763 20.0199 18.5734 20.299C18.4705 20.5781 18.2872 20.8204 18.0467 20.9954C17.8062 21.1703 17.5192 21.2701 17.222 21.282C16.9248 21.2939 16.6307 21.2175 16.3769 21.0624L11.7436 18.2108L7.10761 21.0624C6.85386 21.2166 6.56015 21.2923 6.26347 21.2799C5.96678 21.2676 5.68039 21.1677 5.44036 20.9929C5.20032 20.8181 5.01738 20.5762 4.91455 20.2976C4.81173 20.019 4.79363 19.7163 4.86253 19.4274L6.12498 14.0996L1.99631 10.537C1.7718 10.343 1.60943 10.0871 1.52948 9.80133C1.44953 9.51556 1.45554 9.21257 1.54676 8.9302C1.63798 8.64783 1.81037 8.39859 2.0424 8.21361C2.27442 8.02862 2.55581 7.9161 2.8514 7.89008L8.26455 7.45336L10.3527 2.39987C10.4658 2.12445 10.6581 1.88887 10.9054 1.72308C11.1527 1.55728 11.4436 1.46875 11.7414 1.46875C12.0391 1.46875 12.33 1.55728 12.5773 1.72308C12.8246 1.88887 13.0169 2.12445 13.13 2.39987L15.2172 7.45336L20.6304 7.89008C20.9266 7.91513 21.2088 8.02703 21.4416 8.21176C21.6745 8.39648 21.8477 8.64582 21.9395 8.92854C22.0313 9.21125 22.0376 9.51477 21.9576 9.80106C21.8777 10.0873 21.715 10.3437 21.4901 10.5379L21.4956 10.537Z"
        fill="#FF5E14"
      />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#242424" aria-hidden>
      <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-2.638 3.995-4.849h-4v-11h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-2.638 3.996-4.849h-3.983v-11h9.983z" />
    </svg>
  );
}

function Tail() {
  return (
    <svg
      aria-hidden
      className="absolute left-[30px] top-[-26px] h-[28px] w-[40px] max-[600px]:left-5"
      viewBox="0 0 40 28"
      fill="none"
    >
      <path d="M0 28H40C22 26 8 16 0 0V28Z" fill="white" />
    </svg>
  );
}

function TestimonialItem({ title, role, initials, text, statement }) {
  return (
    <div className="flex w-[min(540px,85vw)] flex-none snap-start flex-col group">
      {/* Profile Header */}
      <div className="mb-6 flex items-center gap-3.5">
        <div className="grid h-[52px] w-[52px] flex-none place-items-center rounded-full bg-[#FFEAE0] font-['Inter',sans-serif] text-[15px] font-semibold text-[#FF5E14] shadow-sm transition-transform duration-300 group-hover:scale-105">
          {initials}
        </div>
        <div className="min-w-0">
          <h3 className="truncate font-['Inter',sans-serif] text-[17px] sm:text-[19px] font-semibold leading-tight text-[#242424]">
            {title}
          </h3>
          <p className="truncate font-['Inter',sans-serif] text-[13.5px] sm:text-[14px] font-medium leading-normal text-[#FF5E14]">
            {role}
          </p>
        </div>
      </div>

      {/* Speech Bubble Card */}
      <div className="relative flex flex-1 flex-col items-start justify-between gap-4 rounded-[28px] bg-white p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#EDEDED] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] group-hover:border-[#FF5E14]/30">
        <Tail />

        {/* Top Bar: Quote Icon & 5 Stars */}
        <div className="flex items-center justify-between self-stretch">
          <div className="grid h-[40px] w-[40px] place-items-center rounded-lg bg-[#F6F6F6] transition-colors group-hover:bg-[#FFEAE0]">
            <QuoteIcon />
          </div>
          <div className="flex gap-0.5" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
        </div>

        {/* Body Content */}
        <p className="font-['Inter',sans-serif] text-[14.5px] sm:text-[15.5px] font-normal leading-[1.65] text-[#4A4A4A] flex-1">
          {text}
        </p>

        {/* Highlight Statement Quote */}
        <p className="font-['Inter',sans-serif] text-[15px] sm:text-[16px] font-semibold leading-[1.35] text-[#FF5E14] pt-3.5 border-t border-[#F2F2F2] self-stretch">
          {statement}
        </p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const trackRef = useRef(null);

  const step = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild;
    const amount = card ? card.offsetWidth + 20 : 400;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="overflow-x-hidden bg-[#f5f5f5] pb-14 pt-10 md:pb-20 md:pt-16">
      {/* Section Heading */}
      <Reveal direction="up" duration={700} className="mb-8 px-4 text-center md:mb-12">
        <div className="inline-flex items-center gap-1.5 font-['Inter',sans-serif] text-sm font-medium uppercase leading-[18px] tracking-[0.24px] text-[#242424]">
          <span className="h-2 w-2 rounded-[2px] bg-[#FF5E14]" />
          Testimonial
        </div>
        <h2 className="mt-3 font-['PP_Mori',sans-serif] text-[length:clamp(32px,4.6vw,52px)] font-semibold leading-[1.05] tracking-[-0.8px] text-[#242424]">
          What Clients Say
        </h2>
      </Reveal>

      {/* Horizontal Carousel Track */}
      <Reveal direction="up" duration={750} delay={100}>
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-[max(16px,calc((100vw-1342px)/2))] pb-4 [scroll-padding-inline:max(16px,calc((100vw-1342px)/2))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {TESTIMONIALS.map((item) => (
            <TestimonialItem key={item.id} {...item} />
          ))}
        </div>
      </Reveal>

      {/* Navigation Arrows */}
      <Reveal direction="up" duration={700} delay={180} className="mx-auto mt-6 flex max-w-[1342px] items-center justify-center px-4 sm:px-6">
        <div className="flex gap-2.5">
          {[
            { label: "Previous", dir: -1, d: "M15 18l-6-6 6-6" },
            { label: "Next", dir: 1, d: "M9 6l6 6-6 6" },
          ].map(({ label, dir, d }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              onClick={() => step(dir)}
              className="grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-full border border-[#24242430] bg-white text-[#242424] transition-all hover:border-[#FF5E14] hover:bg-[#FF5E14] hover:text-white hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={d} />
              </svg>
            </button>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
