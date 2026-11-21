# Design System & Implementation Specification: About Us Page
> **Purpose**: This document serves as the complete, authoritative design specification extracted from the **About Us** page (`app/about/`). Use this guide to design, architect, and implement the **Diversity & Inclusion** (D&I) page (or other high-conversion consulting pages) with identical brand fidelity, typography, spacing, animation physics, component architecture, and asset conventions.

---

## 1. Architectural & File Structure Rules

All pages and assets strictly follow the isolated page-folder structure:

```
app/
├── [page-route]/                   # e.g., app/diversity-inclusion/
│   ├── page.jsx                    # Server component entry point with metadata
│   └── components/                 # Page-specific components only
│       ├── Hero.jsx
│       ├── Purpose.jsx             # Or high-impact Orange Statement
│       ├── Pillars.jsx             # DNA / Core philosophy cards
│       ├── ImpactFramework.jsx     # Interactive tabs or carousel
│       ├── LeadershipVoice.jsx     # Team / Experts grid
│       ├── CaseStudies.jsx         # Timeline / Row group list
│       └── Gallery.jsx             # Auto-scroll marquee
└── components/
    └── Common/                     # Shared cross-page components
        ├── Header.jsx
        ├── Footer.jsx
        ├── CTA.jsx
        ├── Reveal.jsx
        └── AnimatedCounter.jsx

public/
└── [page-route]/                   # Lowercase, flat folder (NO nested subfolders)
    ├── hero-image-1.webp
    ├── pillars-image-1.webp
    ├── team-image-1.webp
    └── ...
```

---

## 2. Brand Colors & Design Tokens

### Core Color Palette
| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| **Brand Orange** | `#FF5E14` | Primary brand accent, category pills, square dots, active tabs, buttons |
| **Brand Orange Dark** | `#e0500d` / `#e06526` | Button hover states, secondary eyebrow accents |
| **Primary Dark Text** | `#141414` / `#1E293B` / `#242424` | Main headings, bold titles, strong narrative text |
| **Body Text** | `#334155` / `#404040` / `#555555` | Secondary descriptions, narrative paragraphs |
| **Muted Text / Meta** | `#5a5a55` / `#888888` / `#666666` | Labels, dates, footnote metadata, subtitles |
| **Card / Canvas White**| `#FFFFFF` | Default surface background |
| **Off-White / Sand** | `#FAFAFA` / `#FBFBFB` | Page canvas, soft section alternating background |
| **Warm Light Gray** | `#F6F6F6` | Team grid and secondary section card backgrounds |
| **Border Neutral** | `#EAEAEA` / `#EDEDED` / `#e2e0d8` | Hairline dividers, card outlines |
| **Peach / Warm Radial**| `rgba(248, 178, 138, 0.40)` | Subtle atmospheric sunrise glows behind hero or cards |

---

## 3. Typography Hierarchy

### Font Families
1. **Headings & Display**: `"PP Mori", var(--font-geist-sans), sans-serif` (weight: 600 / Semibold).
2. **Body, Eyebrows & UI**: `"Inter", system-ui, sans-serif` (weight: 400 Regular, 500 Medium, 600 Semibold, 700 Bold).

### Type Scales & Line Heights
- **Eyebrow / Category Tag**:
  ```jsx
  <div className="flex items-center gap-1.5 sm:gap-2 mb-2">
    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FF5E14] inline-block rounded-[1px] shrink-0" />
    <span className="text-[#374151] font-semibold text-[12px] sm:text-[13px] md:text-[14px] tracking-[0.2em] uppercase select-none">
      OUR PERSPECTIVE
    </span>
  </div>
  ```
- **H1 Page Title** (Sentence case, exact clamp):
  ```css
  font-family: "PP Mori", sans-serif;
  font-weight: 600;
  font-size: clamp(28px, 3.8vw, 52px);
  line-height: clamp(36px, 4.4vw, 48px);
  letter-spacing: -0.8px;
  color: #141414; /* or #1E293B */
  ```
- **H2 Section Title**:
  ```css
  font-family: "PP Mori", sans-serif;
  font-weight: 600;
  font-size: clamp(30px, 4.6vw, 52px);
  line-height: 1.05;
  letter-spacing: -0.8px;
  color: #242424;
  ```
- **Body Paragraphs**:
  ```css
  font-family: "Inter", sans-serif;
  font-size: 15px; /* sm: 15.5px, md: 16px, lg: 16.5px */
  line-height: 1.55;
  font-weight: 400;
  color: #334155; /* or #242424 */
  ```
- **Subheadings / Highlight Quotes**:
  ```css
  font-family: "PP Mori", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #FF5E14;
  ```

---

## 4. Animation, Physics & Scroll Reveals

### Scroll Reveal Wrapper (`<Reveal />`)
Every section and card leverages the standardized `@/app/components/Common/Reveal` component:
- **Direction**: `up` (default), `down`, `left`, `right`, `scale`
- **Duration**: `650ms` – `800ms`
- **Distance**: `20px` – `36px`
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)`
- **Staggering**: Multi-item grids increment delays by `60ms` – `80ms` (e.g. `delay={index * 70}`).

### Interactive Hover Transitions
- **Cards**: `transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.07)] hover:border-[#FF5E14]/40`
- **Photos / Thumbnails**: `transition-transform duration-700 ease-out group-hover:scale-105`
- **Buttons**: `active:scale-[0.98] transition-all duration-200`

---

## 5. Signature Component Blueprints

### Blueprint A: Hero Section
- **Layout**: Left column text constrained to `max-w-[540px]`, right area reserved for thematic imagery/video or ambient sky wash.
- **Top Padding**: `pt-32 sm:pt-36 md:pt-40 lg:pt-36` to guarantee standard clearance below the fixed navbar.
- **Atmospheric Glow**: Radial gradient wash (`radial-gradient(ellipse at 72% 40%, rgba(248, 178, 138, 0.40) 0%, ...)`).

### Blueprint B: Full-Width Brand Orange Statement Card (`Purpose.jsx`)
The signature brand anchor of Celebratory Network:
- **Background**: Solid `#FF5E14` with **3 Concentric Blurred Circular Ripple Rings**:
  ```css
  /* Outer Ring */
  width: 1809px; height: 1809px; border-radius: 1809px;
  border: 1px solid #FFF; filter: blur(13px);
  animation: ripple 9s ease-in-out infinite;

  /* Middle Ring */
  width: 1262px; height: 1262px; border-radius: 1262px;
  border: 1px solid #FFF; filter: blur(8px);
  animation: ripple 8s ease-in-out 1s infinite;

  /* Inner Ring */
  width: 612px; height: 612px; border-radius: 612px;
  border: 1px solid #FFF; filter: blur(8px);
  animation: ripple 7s ease-in-out 2s infinite;
  ```
- **Text**: Centered, white, high-contrast, wrapped in typographic double quotes:
  ```html
  &ldquo;Culture is what enables teams to defy the odds and achieve the remarkable&rdquo;
  ```
- **Feathered Edges**: Minimal `h-3 sm:h-4 md:h-5` gradient overlay at top/bottom edges (`from-transparent to-[#FF5E14]` and `from-[#FF5E14] to-white`) for seamless section blending.

### Blueprint C: Philosophy / Pillar Cards (`DNA.jsx`)
- **Grid**: 2 columns (`min-[861px]:grid-cols-2 max-w-[1342px]`).
- **Aspect Ratio**: `aspect-[663/292]` with container queries (`[container-type:inline-size]`).
- **Card State**:
  - Desktop Default: Clean `#FFFFFF` card with bold numbered step (e.g. `01`, `02`), title, and description.
  - Hover / Mobile State: Smoothly reveals background photograph overlaid with `rgba(36, 36, 36, 0.55)` tint, flipping text to white.

### Blueprint D: Interactive Values / Pillar Carousel (`WeGrow.jsx`)
- **Tabs**: Horizontal navigation pill bar at top with animated active state.
- **Progress Indicator**: Auto-progressing progress bar per tab (`autoScrollInterval={4000}`).
- **Split Layout**: Left side displays active value title, detailed narrative, and anchor link; right side showcases dynamic thematic photo.
- **Pause on Interaction**: Automatically pauses auto-scroll on hover or touch.

### Blueprint E: Leadership & Advisory Grid (`Team.jsx`)
- **Background**: Soft warm gray `#F6F6F6` with generous vertical padding (`pt-[83px] pb-14`).
- **Grid Layout**: 3 columns on desktop (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1346px]`, `gap-x-[30px] gap-y-[52px]`).
- **Cards**:
  - Image height: `281px` with `rounded-[20px]`, background cover.
  - Name: `font-ppmori text-[22px] sm:text-[24px] font-semibold`.
  - Role: `font-inter text-[15px] sm:text-[16px] font-bold uppercase tracking-[-0.8px] text-[#FF5E14]`.

### Blueprint F: Timeline & Publications Rows (`Research.jsx`)
- **Layout**: Clean horizontal table-style rows separated by subtle borders (`border-t border-[#e2e0d8]`).
- **Columns**:
  1. Year / Category tag (`w-[120px] font-semibold text-[#FF5E14]`).
  2. Main topic title (`text-[22px] font-semibold`) + descriptive paragraph.
  3. Action link with animated 45-degree arrow icon (`group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5`).

### Blueprint G: Seamless Infinite Photo Marquee (`Gallery.jsx`)
- **Track**: Horizontal auto-scrolling track with duplicate items for seamless loop.
- **Photo Style**: Tilted polaroid/card aesthetic alternating between `-rotate-[6.167deg]` and `rotate-[4.139deg]`.
- **Card Size**: `w-[240px] sm:w-[280px] h-[300px] sm:h-[350px] rounded-[16px] overflow-hidden`.
- **Micro-interaction**: Pauses on hover, smooth ease transition on resume.

### Blueprint H: Pre-Footer CTA (`Common/CTA.jsx`)
- Reused across all pages directly above `<Footer />` or `<Gallery />`.
- Features primary call to action: *"Ready to build a resilient, high-performing organization?"* with orange *"Book a call"* button and background photography.

---

## 6. Checklist for Designing the Diversity & Inclusion Page

When implementing `app/diversity-inclusion/`:

1. [ ] **Route Directory**: Create `app/diversity-inclusion/page.jsx` and `app/diversity-inclusion/components/`.
2. [ ] **Asset Directory**: Place all images in `public/diversity-inclusion/` using flat lowercase names (`hero-image-1.webp`, `pillars-image-1.webp`, etc.).
3. [ ] **Navbar Clearance**: Ensure Hero section has `pt-32 sm:pt-36 md:pt-40 lg:pt-36`.
4. [ ] **Typography**: Use Sentence case for main headings; preserve `"PP Mori"` font for headings and `"Inter"` for body.
5. [ ] **Brand Consistency**: Use `#FF5E14` for accent pills, dots, active states, and buttons.
6. [ ] **Scroll Animations**: Wrap all major content blocks in `<Reveal />` with standard direction and delays.
7. [ ] **Performance**: Export Next.js `metadata` from `page.jsx` (Server Component) and use `"use client"` only where interactivity (hooks, state) is needed.
8. [ ] **Build Validation**: Always verify `npm run build` succeeds with 0 errors.
