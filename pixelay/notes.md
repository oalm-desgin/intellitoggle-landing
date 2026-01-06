# Pixelay Comparison Notes

## Desktop Overlay (1920px)

Visible differences observed:

1. **Header Navigation**: The desktop header shows navigation links (Home, About, Pricing) centered, but exact spacing may differ from Figma by 1-2px due to font rendering differences between browser and Figma.

2. **Hero Section**: The gradient background matches the Figma specification (#42389E to #0F1026), but the dashboard mockup image positioning may need fine-tuning for pixel-perfect alignment.

3. **Comparison Table Border**: The gradient border on the comparison table uses a CSS approach that approximates the Figma gradient. Exact color stops may need adjustment.

## Mobile Overlay (~397px)

Visible differences observed:

1. **Header Height**: Mobile header at 80px matches spec, but the logo/hamburger icon spacing may differ slightly due to flexbox gap calculations.

2. **Typography Scaling**: Some text sizes use responsive Tailwind classes (`text-3xl md:text-6xl`) which may not match exact Figma mobile font sizes pixel-for-pixel.

3. **Card Stacking**: On mobile, the Control & Power cards stack vertically. The gap between stacked cards may need adjustment to match mobile Figma spec.

## General Observations

1. **Font Rendering**: Inter font renders slightly differently in browsers vs Figma. Letter-spacing and line-height may have minor discrepancies (typically <1px).

2. **Border Radius**: Default 8px radius applied consistently, but some cards use 12px per Figma spec. Verified card-specific radii match.

3. **Shadow Values**: Using Tailwind's `shadow-soft` (0 10px 10px rgba(0,0,0,0.05)) - may need custom shadow values for exact Figma match.

4. **Background Images**: The circuit board background in DartCodeAI section is overlaid with gradient. Opacity (30%) may need adjustment based on Figma blend mode.

5. **Button Padding**: "Get Access" button uses exact Figma padding (px-[44px] py-[7px]) but text alignment within button may shift based on font metrics.
