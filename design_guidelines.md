# Personal Portfolio Design Guidelines
*Inspired by Elbow Grease Aesthetic*

## Design Approach
**Reference-Based Approach**: Drawing inspiration from the Elbow Grease website's bold minimalist aesthetic combined with professional portfolio best practices seen in platforms like Linear and Notion. The design emphasizes strong typography, generous whitespace, and clean visual hierarchy to create a memorable professional presence.

## Core Design Principles
1. **Bold Simplicity**: Large typography and minimal color palette create immediate impact
2. **Structured Narrative**: Numbered sections guide visitors through your professional journey
3. **Visual Credibility**: Professional imagery and clean layouts build trust
4. **Breathing Room**: Generous spacing between elements prevents visual clutter

## Color Palette

**Dark Mode (Primary)**
- Background: 8 8% 8% (very dark gray, almost black)
- Surface: 0 0% 12% (slightly lighter for cards/sections)
- Text Primary: 0 0% 95% (off-white for main content)
- Text Secondary: 0 0% 65% (muted gray for supporting text)
- Accent: 142 70% 45% (professional teal/green - inspired by the original logo color)
- Accent Hover: 142 70% 55%

**Light Mode**
- Background: 0 0% 98% (warm off-white)
- Surface: 0 0% 100% (pure white for cards)
- Text Primary: 0 0% 15% (near-black)
- Text Secondary: 0 0% 40% (medium gray)
- Accent: 142 60% 40% (slightly darker teal)
- Accent Hover: 142 60% 50%

## Typography

**Font Stack**: Use Inter from Google Fonts for its clean, professional appearance
- Primary Font: Inter (weights: 400, 500, 600, 700)
- Headings: Bold, large scale for impact
- Body: Regular weight, comfortable line height (1.6-1.7)

**Scale**:
- Hero Name: text-6xl md:text-7xl lg:text-8xl (72-96px), font-bold
- Section Numbers: text-7xl md:text-8xl lg:text-9xl (96-128px), font-bold, opacity-10 (decorative)
- Section Headings: text-4xl md:text-5xl lg:text-6xl (48-60px), font-bold
- Subsection Headings: text-2xl md:text-3xl (30-36px), font-semibold
- Card Titles: text-xl md:text-2xl (24-30px), font-semibold
- Body Text: text-base md:text-lg (16-18px), font-normal
- Supporting Text: text-sm md:text-base (14-16px), text-secondary

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 20, 24, 32
- Section padding: py-20 md:py-32 (vertical breathing room)
- Card padding: p-6 md:p-8
- Content gaps: gap-8 md:gap-12 lg:gap-16
- Element spacing: space-y-4 or space-y-6 for stacked content

**Container Widths**:
- Full sections: max-w-7xl mx-auto px-6 md:px-8
- Content areas: max-w-6xl
- Text-heavy sections: max-w-4xl

**Grid Patterns**:
- Employment/Project cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Skills categories: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Featured items: Single column on mobile, 2-column on desktop

## Component Library

### Navigation
Fixed top navigation with blur backdrop (backdrop-blur-lg bg-background/80)
- Logo/Name on left
- Navigation links centered or right-aligned
- Smooth scroll behavior to sections
- Minimal, clean design with subtle hover states

### Hero Section
Full viewport height (min-h-screen) with centered content
- Large name typography (text-7xl+)
- Professional tagline (text-xl-2xl, text-secondary)
- Professional headshot or abstract professional image
- Scroll indicator at bottom
- Background: subtle gradient or solid with minimal decoration

### Employment Cards
Grid layout with hover elevation effect
- Company logo (grayscale by default, color on hover)
- Role title (text-xl, font-semibold)
- Company name and dates (text-sm, text-secondary)
- Brief description (2-3 lines, text-base)
- Technologies/skills as tags (rounded-full, text-xs, border style)
- Card background slightly elevated from page background

### Project Showcase
Larger cards with more visual prominence
- Project thumbnail/screenshot (aspect-ratio-16/9)
- Project title (text-2xl, font-bold)
- Description (text-base, 3-4 lines max)
- Technology stack as badges
- Links to live demo/GitHub (subtle icons)
- Alternating layout: image-left, image-right for variety

### Skills Section
Category-based organization with visual icons
- Skill category headings (text-xl, font-semibold)
- Individual skills as pills/badges with subtle backgrounds
- Group by: Technical Skills, Tools & Frameworks, Soft Skills
- Optional: proficiency indicators (dots or bars)

### Section Headers
Numbered sections matching Elbow Grease style
- Large decorative number (text-9xl, opacity-10, absolute positioned)
- Section title overlapping number (text-5xl-6xl, font-bold)
- Optional subtitle/description (text-lg, text-secondary)

### About Section
Two-column layout on desktop
- Professional photo (rounded or circular)
- Bio text (comfortable reading width, text-lg, leading-relaxed)
- Contact information and social links
- Download resume CTA button

### Footer
Minimal, clean design
- Social media links (icon-only, subtle hover states)
- Copyright/credits (text-sm, text-secondary)
- Optional: Email contact link

## Images

**Required Images**:

1. **Hero Image**: Professional headshot or environmental portrait
   - Placement: Right side of hero section on desktop, above text on mobile
   - Style: High-quality, professional, well-lit
   - Treatment: Subtle border-radius (rounded-2xl), subtle shadow
   - Aspect ratio: Portrait or square (1:1 or 3:4)

2. **Company Logos**: For employment history cards
   - Placement: Top-left of each employment card
   - Style: Grayscale by default, full color on card hover
   - Size: h-12 to h-16 consistent across all cards
   - Format: SVG preferred, PNG with transparent background

3. **Project Screenshots**: For project showcase
   - Placement: Featured prominently in project cards
   - Style: Clean screenshots or mockups, with device frames optional
   - Treatment: Subtle shadow, rounded corners (rounded-lg)
   - Aspect ratio: 16:9 or 4:3 depending on project type

4. **About Section Photo**: Secondary professional photo (optional but recommended)
   - Placement: Left side of about section
   - Style: Casual professional or candid
   - Treatment: Circular crop (rounded-full) or rounded square
   - Size: Larger than hero (w-64 to w-80)

**Image Treatment Guidelines**:
- All images: subtle drop shadow (shadow-lg)
- Hover states: slight scale (hover:scale-105) with transition
- Loading: blur placeholder effect
- Lazy loading for below-fold images

## Animations & Interactions

**Minimal, Purpose-Driven Motion**:
- Smooth scroll behavior for navigation
- Fade-in on scroll for section content (stagger by 100ms)
- Card hover: subtle elevation increase (shadow-md to shadow-xl)
- Button interactions: standard hover states, no custom animations
- Link underlines: subtle slide-in animation from left
- Section transitions: fade-in as they enter viewport

**Interaction Principles**:
- Duration: 200-300ms for most transitions
- Easing: ease-in-out for natural feel
- Subtlety: movements should enhance, not distract
- Performance: use transform and opacity for smooth 60fps

## Accessibility & Responsiveness

- All text meets WCAA AA contrast standards
- Focus states visible for keyboard navigation
- Images have descriptive alt text
- Semantic HTML structure (header, nav, main, section, footer)
- Mobile-first responsive breakpoints (sm, md, lg, xl)
- Touch targets minimum 44x44px on mobile
- Reduced motion support for animations

## Additional Design Notes

- Maintain consistent dark mode throughout (including form inputs if any)
- Use subtle dividers between major sections (border-t border-white/10)
- Ensure generous whitespace - resist temptation to fill every pixel
- Professional over flashy - credibility is key
- Typography should do the heavy lifting for visual hierarchy
- Cards and sections should feel grounded, not floating