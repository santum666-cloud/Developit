# Developit Design Guidelines

## Design Approach
**Reference-Based:** Drawing inspiration from modern education platforms (Coursera, Udemy) combined with innovative startup aesthetics (Linear, Notion) to create a fresh, trustworthy learning environment that balances professionalism with approachability.

## Typography System
- **Primary Font:** Inter or Manrope (Google Fonts) - clean, modern sans-serif for UI
- **Display Font:** Space Grotesk or Outfit - bold headlines with personality
- **Hierarchy:**
  - Hero headlines: text-5xl to text-7xl, font-bold
  - Section titles: text-3xl to text-4xl, font-semibold  
  - Card titles: text-xl, font-semibold
  - Body text: text-base to text-lg, font-normal
  - Small text: text-sm, font-medium

## Layout System
**Spacing primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 md:py-24 lg:py-32
- Component gaps: gap-6 to gap-12
- Container: max-w-7xl with px-4 md:px-6 lg:px-8

## Component Library

### Hero Section
- Full-width impactful hero (min-h-[600px] md:min-h-[700px])
- Large background image showcasing modern learning/collaboration
- Centered content with headline, subheadline, dual CTAs
- Buttons with backdrop-blur-md bg-white/10 treatment
- Trust indicator: "Join 5,000+ innovative learners" badge

### Navigation
- Sticky header with glassmorphism effect (backdrop-blur-lg)
- Logo left, nav links center, CTA button right
- Mobile: Hamburger menu with slide-out drawer
- Icons: Heroicons via CDN

### Course Catalog Section
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Course cards with:
  - Course thumbnail image (aspect-ratio-video)
  - Category badge, title, brief description
  - Instructor avatar + name
  - Duration, level indicators
  - CTA button
- Hover: Subtle lift (transform scale-105) and shadow increase

### Course Detail Pages
- Hero with course image + key info sidebar
- Tabbed content: Overview, Curriculum, Instructor, Reviews
- Sticky enrollment sidebar on desktop
- Curriculum accordion with expandable modules
- Student testimonials: 2-column grid with photos

### Contact/Lead Form
- 2-column layout: Form left, info/benefits right
- Form fields: Name, Email, Phone, Interest dropdown, Message
- Visual feedback on validation
- Success state with confirmation message

### About Section  
- Mission statement with large typography
- Team grid: 3-4 columns with photos, names, roles
- Stats counter: 4-column grid (Students, Courses, Satisfaction, etc.)

### Footer
- 4-column layout: Brand + About, Quick Links, Courses, Contact
- Newsletter signup with inline form
- Social media icons
- Trust badges/certifications

## Images Strategy
- **Hero:** Large, high-quality image of diverse students collaborating/learning with technology
- **Course thumbnails:** Professional, vibrant images representing each course topic
- **Instructor photos:** Professional headshots with consistent styling
- **About section:** Authentic team photos, workspace images

## Animations
Use sparingly for polish:
- Fade-in on scroll for sections (subtle)
- Card hover transforms
- Navigation transitions
- Form field focus states
- NO distracting scroll-triggered or continuous animations

## Accessibility
- Minimum contrast ratios maintained
- Focus states clearly visible (ring-2 ring-offset-2)
- Form labels properly associated
- Alt text for all images
- Keyboard navigation fully supported