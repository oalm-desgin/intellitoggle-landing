# IntelliToggle Landing Page

A pixel-perfect, responsive landing page built with Nuxt 3 + Vue 3 + TailwindCSS, matching the Figma design specifications.

## Setup

Make sure to install dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Deployment

This project can be deployed to various hosting platforms:

- **Netlify**: Connect your GitHub repository for automatic deployments
- **Vercel**: Import your repository for seamless deployment
- **GitHub Pages**: Use the `generate` command to create a static site

Example deployment command:
```bash
npm run generate
```

## Hosted URL

_Add your hosted URL here after deployment_

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── SiteHeader.vue           # Sticky header with mobile menu toggle
│   │   ├── HeroSection.vue          # Hero section with gradient background
│   │   ├── TrustedSection.vue       # "Trusted by" company logos
│   │   ├── WhatIsSection.vue        # What Is IntelliToggle section
│   │   ├── OpenFeatureSection.vue   # OpenFeature integration section
│   │   ├── ControlPowerSection.vue  # Connect/Create Flags/Ship & Control cards
│   │   ├── ComparisonTable.vue      # Dart-Powered Feature Flag comparison table
│   │   ├── DartCodeAISection.vue    # DartCodeAI AI features with circuit background
│   │   ├── PricingSection.vue       # Pricing card and 7-day trial CTA
│   │   ├── WhyTeamsSection.vue      # Why Teams Use IntelliToggle benefits
│   │   ├── LaunchCTA.vue            # Launch Features final CTA
│   │   └── SiteFooter.vue           # Footer with links and newsletter
│   └── pages/
│       └── index.vue                # Home page composing all sections
├── public/
│   ├── dashboard-mockup.png.png     # Dashboard screenshot image
│   ├── open feature logo.png        # OpenFeature logo
│   └── purple dart code ai.jpg      # Circuit board background for AI section
├── tailwind.config.js               # Tailwind configuration with custom theme
└── nuxt.config.ts                   # Nuxt configuration
```

## Features

- ✅ Pixel-perfect design matching Figma specifications
- ✅ Fully responsive (mobile: ~397px, desktop: 1920px)
- ✅ Interactive mobile menu with fullscreen overlay and close button
- ✅ Semantic HTML structure (`<header>`, `<main>`, `<section>`, `<footer>`)
- ✅ Accessibility features (ARIA labels on interactive elements)
- ✅ Custom Tailwind theme with exact Figma color values
- ✅ Inter font integration via Google Fonts
- ✅ Smooth hover transitions on buttons and links
- ✅ All sections implemented:
  - Hero with gradient background and "Dart-Native" highlight
  - Trusted by engineering teams logos
  - What Is IntelliToggle with benefits
  - OpenFeature integration
  - Control & Power-focused cards (Connect, Create Flags, Ship & Control)
  - Dart-Powered Feature Flag comparison table
  - DartCodeAI with AI feature cards and email signup
  - Pricing section with $10/month card
  - 7-Day Free Sandbox CTA
  - Why Teams Use IntelliToggle benefits
  - Launch Features final CTA
  - Footer with Resources, Company links, and newsletter

## Design Specifications

### Colors (from Figma)
| Name | Hex | Usage |
|------|-----|-------|
| `brand-dark` | #111111 | Page Background |
| `brand-purple` | #42389E | Hero gradient top, buttons |
| `brand-purple-deep` | #0F1026 | Hero gradient bottom |
| `brand-gold` | #F9A71E | Primary CTAs |
| `brand-gold-hover` | #D97706 | Button hover states |
| `brand-green` | #84CC16 | Start Sandbox button |
| `brand-navy` | #1A1C3D | Card backgrounds |
| `brand-lavender` | #EDECF6 | Light section backgrounds |
| `brand-footer` | #ECEBF5 | Footer background |
| `brand-text-dark` | #323338 | Footer text |

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### Spacing (from Figma)
- **Mobile padding**: 27px horizontal
- **Desktop padding**: 120px horizontal
- **Header height**: 80px (mobile), 133px (desktop)
- **Default border radius**: 8px
- **Card border radius**: 12px

### Component Dimensions (from Figma)
- **Control Power Cards**: 497px × 363px, gap: 95px
- **AI Feature Cards**: 660px × 196px, radius: 12px
- **Pricing Card**: 370px × 154px
- **Comparison Table**: 1440px width, 298px height
- **DartCodeAI Section**: 1920px × 1095px

## Tradeoffs & Shortcuts

1. **Images**: Using exact filenames from exports (e.g., `dashboard-mockup.png.png`). In production, would rename to cleaner paths.

2. **Comparison Table**: Implemented using CSS grid rather than an actual HTML `<table>` for better styling control. Semantically, a `<table>` might be more appropriate.

3. **Icons**: Using inline SVG icons for simplicity. In production, would use an icon library like Heroicons or Phosphor Icons.

4. **Background Image**: The DartCodeAI section uses the circuit board image as a background with opacity. The exact gradient overlay from Figma may need fine-tuning.

5. **Button Actions**: All buttons are styled without actual functionality. Would need to connect to forms, modals, or navigation in production.

## Improvements with More Time

1. **Image Optimization**: Use Nuxt Image component for automatic WebP conversion, lazy loading, and responsive srcset

2. **Scroll Animations**: Add intersection observer animations for section reveals (e.g., fade-in-up on scroll)

3. **Form Validation**: Add proper email validation and submission handling for newsletter signups

4. **SEO**: Implement proper meta tags, Open Graph images, and structured data

5. **Performance**: Code splitting for large components, font subsetting, critical CSS

6. **Accessibility**: Enhanced focus states, skip links, improved screen reader announcements

7. **E2E Tests**: Add Playwright tests for critical user flows (mobile menu, form submissions)

8. **CMS Integration**: Connect to Sanity/Contentful for content management

## License

Private project for coding assessment.
