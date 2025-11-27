# Comprehensive Build Prompt for Savio Landing Page

You are an expert full-stack developer tasked with building a modern, high-performance landing page for **Savio** — an AI-powered money management SaaS platform. The project must use the latest frontend technologies and follow best practices for SEO, performance, and user experience.

## Project Overview

- **Product**: Savio - AI-powered financial growth management platform
- **Purpose**: Attract users to save money without lifestyle changes
- **Design Reference**: Professional dark theme with warm orange/coral accents and gradient backgrounds
- **Goal**: Convert visitors through compelling messaging and smooth interactions

---

## Tech Stack Requirements

✅ **Next.js 15+** (App Router with TypeScript)
- Server-side rendering (SSR) for SEO
- Static generation (SSG) for performance
- API routes for future backend integration
- Image optimization with `next/image`

✅ **TypeScript** - Full type safety
- Strict mode enabled
- Type-safe props and components
- Proper typing for animations and interactions

✅ **Tailwind CSS 4+**
- Custom color theme (see below)
- Responsive design (mobile-first approach)
- No hard-coded colors — use Tailwind utilities exclusively
- Dark mode support

✅ **shadcn/ui** - Component library
- Pre-built, unstyled components
- Dropdown menus, buttons, modals
- Form components for CTAs and newsletter signup
- Dialog/modal for demo video player

✅ **Motion.dev** (or Framer Motion)
- Smooth scroll animations
- Fade-in effects for sections
- Parallax on hero background
- Icon animations on hover
- Button transition effects
- Staggered animations for feature lists

✅ **Additional Libraries**
- `clsx` for conditional className binding
- `next-seo` or `next/head` for SEO optimization
- `react-hook-form` for forms
- `zod` for form validation
- `lucide-react` for icons

---

## Color Theme

Extract from design reference and apply consistently:

| Element | Color | Tailwind Usage |
|---------|-------|---|
| **Primary Accent** | `#FF6B4A` / `#E86E4A` | Buttons, hover states, "Start Saving Today" |
| **Secondary Accent** | `#FF8B6F` / `#FFA07A` | Links, secondary actions |
| **Background Primary** | `#0A0A0A` / `#121212` | Main background |
| **Background Secondary** | `#1A1A1A` | Card backgrounds, sections |
| **Text Primary** | `#FFFFFF` | Headlines, main text |
| **Text Secondary** | `#A0A0A0` | Subtext, muted copy |
| **Gradient Hero** | Orange → Dark (vertical) | Hero section background |
| **Accent Shapes** | Coral/Pink gradient triangle, star icon | Decorative elements |

Use Tailwind v4's CSS variables for these colors:

```css
@theme {
  colors {
    savio-orange: #FF6B4A;
    savio-orange-light: #FF8B6F;
    savio-dark: #0A0A0A;
    savio-dark-light: #1A1A1A;
    savio-text: #FFFFFF;
    savio-text-muted: #A0A0A0;
  }
}
```

---

## Page Structure & Sections

Build all sections below with smooth scroll transitions and consistent spacing:

### 1. Navigation Bar (Sticky)

- Logo (Savio asterisk icon in orange)
- Menu items: Home, Pricing, Features, About (with hover effects)
- "Get Started" CTA button (orange, rounded pill)
- Mobile hamburger menu (responsive)
- Smooth scroll spy highlighting current section

### 2. Hero Section

- Headline: "Take Control Of Your Financial **Growth** ✨"
  - Mix regular + italic text
  - Inline star icon (animated pulse)
- Subheading: "AI-powered money management that helps you grow savings without changing your lifestyle."
- Two CTAs:
  - "Start Saving Today" (primary orange button)
  - "Watch Demo" (secondary white/outline button)
- Background: Vertical orange-to-dark gradient with subtle chart visualization bars
- Decorative elements:
  - Gradient triangle (top-left, animated fade-in)
  - Coral star (bottom-right, animated float)
- "✨ We are launching soon. Stay Tuned" badge (top center)

### 3. Features Section

Create 3-6 feature cards showcasing:
- Icon (lucide-react)
- Title & description
- Hover effects (scale, shadow lift)
- Examples:
  - "Smart Savings" - Automated savings analysis
  - "AI Recommendations" - Personalized growth plans
  - "Real-time Tracking" - Monitor progress instantly
  - "No Lifestyle Changes" - Save without sacrifice
  - "Secure & Private" - Bank-level encryption
  - "Multi-account Support" - Manage multiple accounts

### 4. Pricing Section

- Section title with subtitle
- 3 pricing tiers in cards:
  - **Starter** - Free / Monthly
  - **Growth** - $29/month / Annual discount
  - **Pro** - $79/month / Enterprise features
- Features list per tier (use checkmarks from lucide-react)
- "Get Started" CTA per tier
- Hover animations on cards

### 5. About Section

- Company mission statement
- Why Savio exists
- Core values (3-4 points with icons)
- Team highlights or trust indicators
- Clean typography with accent elements

### 6. Wishlist/Newsletter Signup

- Replace "Resources" section
- Headline: "Join Our Waitlist" or "Early Access Waitlist"
- Subtitle: "Be first to experience AI-powered financial growth"
- Email input form with validation
- "Notify Me" CTA button
- Success state: Toast notification on submission
- Subtle background animation

### 7. Footer

- Company info & logo
- Links: Privacy, Terms, Contact
- Social media icons (Twitter, LinkedIn, GitHub optional)
- Copyright notice
- Newsletter signup link

---

## Technical Requirements

✅ **SEO Optimization**
- Meta tags for each page (title, description, og:image)
- Structured data (JSON-LD for Organization/Product)
- XML sitemap generation
- robots.txt configuration
- Open Graph tags for social sharing

✅ **Performance**
- Image optimization (WebP, lazy loading)
- Code splitting for smooth animations
- Minimal JavaScript bundle
- Lighthouse score target: 90+
- Mobile performance optimized

✅ **Animations (Motion.dev)**
- Page load: Fade-in stagger sequence
- Scroll triggers: Sections fade in on view
- Hero: Parallax gradient background
- Buttons: Smooth hover scale + color transition
- Cards: Lift on hover with shadow
- Icons: Pulse/rotate animations
- Forms: Input focus animations
- CTA: Bounce or glow effect on hover

✅ **Responsiveness**
- Mobile: Hamburger menu, stacked layout, large touch targets
- Tablet: Adjusted spacing and typography
- Desktop: Full navigation, 2-3 column grids
- Test on common breakpoints (320px, 768px, 1024px, 1280px)

✅ **Accessibility**
- ARIA labels on interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Focus indicators visible
- Color contrast compliance (WCAG AA)
- Alt text on all images

✅ **Code Quality**
- Component-based architecture
- Reusable UI components (Button, Card, Section wrapper)
- Utility hooks for animations and scroll triggers
- Environment variables for API endpoints
- Proper error handling and fallbacks

---

## Deliverables

By completion, provide:

1. ✅ Full working landing page with all 6+ sections
2. ✅ Mobile-responsive design (all breakpoints tested)
3. ✅ Smooth animations throughout (Motion.dev)
4. ✅ Form validation and submission (Zod + React Hook Form)
5. ✅ SEO-optimized metadata and structured data
6. ✅ Clean, maintainable TypeScript code
7. ✅ Custom Savio color theme applied throughout
8. ✅ shadcn/ui components integrated
9. ✅ Performance optimizations (images, code splitting)
10. ✅ README with setup and deployment instructions

---

## Design Notes

- **Typography**: Modern sans-serif (system font stack or custom if provided)
- **Spacing**: Consistent 16px base unit, 4px/8px/16px/32px increments
- **Gradients**: Apply orange-to-dark gradients to hero, section dividers
- **Decorative Elements**: Animate geometric shapes (triangle, star) subtly
- **CTA Consistency**: All "Start Saving Today" / "Get Started" buttons use primary orange
- **Card Style**: Subtle borders, slight transparency, hover lift effect
- **Dark Theme**: True dark background, not pure black — improves readability

---

## Success Criteria

✅ Pixel-perfect match to design reference
✅ All sections functional and animated
✅ Mobile-first, responsive on all devices
✅ Form submissions work (integrate later with backend)
✅ Performance: Lighthouse 90+
✅ Zero TypeScript errors
✅ SEO-ready for deployment
✅ Accessibility compliant

---

This prompt is now ready to hand off to your development agent. It provides enough detail for consistent implementation while allowing creative flexibility in component structure and micro-interactions. 🚀
