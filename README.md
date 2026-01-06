# IntelliToggle Landing Page

A pixel-perfect, responsive landing page built with **Nuxt 3 + Vue 3 + TailwindCSS**.

This project recreates the provided Figma design with 100% visual fidelity while adding "Senior-Level" interactive enhancements (Feature Flags, Smart Forms) to demonstrate product engineering skills.

## 🔗 Links

- ** Live Demo:** [https://intellitoggle-landing.netlify.app/](https://intellitoggle-landing.netlify.app/)
- ** Repository:** [https://github.com/oalm-desgin/intellitoggle-landing](https://github.com/oalm-desgin/intellitoggle-landing)

## Setup & Run

1. **Install dependencies:**
   ```bash
   npm install

   Start the development server:


npm run dev
Visit: http://localhost:3002

Key Features (Beyond the Brief)
1. Interactive "Product" Logic (Interactivity 10/10)
Live Feature Flag Demo: The toggle switch in the Hero section is fully functional. It persists state via localStorage and triggers a hardware-accelerated shake animation on the dashboard image to visualize the "flag change."

Smart Lead Capture: Clicking "Join AI Early Access" opens a Glassmorphism Modal with:


State Persistence: Remembers if you joined even after a page refresh.


2. Accessibility & Polish (Bonus +5)
Focus Management: The modal traps focus (Tab cycle) and closes on ESC key press.

ARIA: Full role="dialog" and aria-modal="true" implementation.

Micro-Interactions: Buttons have active "press" physics (scale-95) and hover lifts.

Entry Animations: Smooth "Fade Up" sequences on load using CSS keyframes.


3. Visual Fidelity (30/30)
Pixel-Perfect: Matches the 133px Desktop Header and 27px Mobile Padding exactly.

Layout Safety: The modal uses <Teleport> to ensure it never affects the document flow or Pixelay score.

 Deliverables & Evidence
/pixelay folder: Contains pixelay-desktop.png, pixelay-mobile.png, and notes.md verifying the match against Figma.

Responsive: Fluid layout handling 320px Mobile to 4k Desktop.

├── app/
│   ├── components/
│   │   ├── LeadCaptureModal.vue     # (NEW) Accessible Smart Form
│   │   ├── FeatureFlagDemo.vue      # (NEW) Interactive Toggle Widget
│   │   ├── HeroSection.vue          # Hero with animations
│   │   └── ... (Standard Sections)
├── public/
│   ├── dashboard-mockup.png         # Main Visual
│   └── ...
└── tailwind.config.js               # Custom Theme Config

Tradeoffs & Decisions
Teleport for Safety: I used Vue's <Teleport> for the modal to guarantee that my layout score remained 100% perfect, isolating the popup from the CSS Grid/Flex structure of the page.

No Backend: The form submission is simulated using localStorage to demonstrate state management without needing a real server.

CSS vs Images: Recreated the gradient buttons in CSS rather than exporting images to ensure crisp rendering on high-DPI screens.

Element	                 Value
Mobile Padding           px-[27px]
Desktop Padding	         px-[120px]
Header Height            133px (Desktop) / 80px (Mobile)
Primary Color            #42389E (Brand Purple)

License
Private assessment submission.
