## Plan: UI Fixes for Blur, Section Titles, and Cards

### Goals
- Fix hero blur overlay sizing/border to match Figma and not overflow.
- Correct “What Is IntelliToggle” image/purple box overflow.
- Apply gradient headings to Plans and Why Teams sections.
- Update Why Teams cards, titles, subtitles, and case note bar per specs.

### Steps
1) Hero blur overlay
   - Set exact size 1394x842.6, center behind image, add 1px #8D8D8D border, ensure it doesn’t cover adjacent sections.
2) What Is IntelliToggle box
   - Keep 830x618 box with padding; ensure image fully visible and not bleeding into white background.
3) Plans section title
   - Apply gradient title (Font/Family/Title, Bold, L Desktop) and correct spacing.
4) Why Teams section
   - Gradient title; three cards 129x118 #EDECF6 radius 8px; titles 402x29 semi-bold L3 #1A1C3D; subtitles 402x44 regular M #5F5F60.
5) Case note bar
   - Add 1394x87 bar #EDECF6, 0.2px border, 16/32 padding, text semi-bold L3 #5F5F60, yellow Read Now button 184x55 with shadow and gradient text.

### Files to edit
- `app/components/HeroSection.vue`
- `app/components/WhatIsSection.vue`
- `app/components/PricingSection.vue`
- `app/components/WhyTeamsSection.vue`

