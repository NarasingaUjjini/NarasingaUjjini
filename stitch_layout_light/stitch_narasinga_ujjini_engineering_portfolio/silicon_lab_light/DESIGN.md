---
name: Silicon Lab Light
colors:
  surface: '#faf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#faf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4f0'
  surface-container: '#efeeea'
  surface-container-high: '#e9e8e4'
  surface-container-highest: '#e3e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#534439'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ed'
  outline: '#867368'
  outline-variant: '#d9c2b4'
  surface-tint: '#8f4d11'
  primary: '#8c4b0f'
  on-primary: '#ffffff'
  primary-container: '#aa6327'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb782'
  secondary: '#006a61'
  on-secondary: '#ffffff'
  secondary-container: '#8df4e6'
  on-secondary-container: '#007167'
  tertiary: '#5a5c5f'
  on-tertiary: '#ffffff'
  tertiary-container: '#737478'
  on-tertiary-container: '#fdfcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc5'
  primary-fixed-dim: '#ffb782'
  on-primary-fixed: '#301400'
  on-primary-fixed-variant: '#703800'
  secondary-fixed: '#8df4e6'
  secondary-fixed-dim: '#70d8ca'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#e2e2e6'
  tertiary-fixed-dim: '#c6c6ca'
  on-tertiary-fixed: '#1a1c1f'
  on-tertiary-fixed-variant: '#45474a'
  background: '#faf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2df'
  surface-raised: '#EAE9E4'
  text-primary: '#1A1C1F'
  text-muted: '#5A5E66'
  copper-trace: rgba(196, 120, 58, 0.25)
  soldermask-tint: rgba(42, 155, 143, 0.15)
typography:
  display-2xl:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 60px
    letterSpacing: -0.04em
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 46px
    letterSpacing: -0.035em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  body-base:
    fontFamily: IBM Plex Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  body-bold:
    fontFamily: IBM Plex Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0.01em
  meta-mono:
    fontFamily: IBM Plex Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.02em
  meta-mono-sm:
    fontFamily: IBM Plex Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  max-width-ui: 1152px
---

## Brand & Style

This design system is a light-first evolution of the original laboratory aesthetic, shifting from a "dark mode IDE" feel to the clarity of a high-end technical workshop or a precision engineering schematic. It evokes the feeling of a well-lit cleanroom, utilizing a "blueprint" philosophy where clarity and technical rigor are paramount.

The design style is **Modern Industrial** with a focus on **Minimalism**. It emphasizes structural integrity through hairline borders and high-density layouts. By utilizing warm off-whites and subtle grays, the interface avoids the sterile coldness of standard software, instead feeling like a physical, high-fidelity instrument or a meticulously drafted technical document.

## Colors

The color palette transitions from "conductive" dark tones to a "substrate" light theme:
- **Primary (Bare Copper):** Retained as the signature accent. In this light mode, it is used for high-value interactions and structural "trace" lines.
- **Secondary (Soldermask Green):** Used for status indicators, technical success states, and secondary callouts.
- **Background (Workshop White):** A warm off-white (`#F5F4F0`) that reduces eye strain and mimics the surface of a technical blueprint.
- **Typography:** Contrast is prioritized using Deep Graphite (`#1A1C1F`) for headlines and Slate Gray (`#5A5E66`) for body text, ensuring absolute legibility of technical data.
- **Hairline Borders:** The "Copper Identity" is maintained via low-opacity strokes (`copper-trace`), creating structural definition without visual clutter.

## Typography

The system uses a tri-font hierarchy to communicate different classes of information:
- **Space Grotesk:** Headlines and display elements. Its geometric nature signals engineering precision.
- **IBM Plex Sans:** The primary interface font. It is utilitarian, balanced, and highly legible for functional UI.
- **IBM Plex Mono:** Reserved for telemetry, code blocks, and metadata. It reinforces the "lab bench" aesthetic and ensures vertical alignment of technical specs.

Always enable `font-variant-numeric: tabular-nums` for any elements using IBM Plex Mono to maintain grid alignment in data tables.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy, mirroring technical schematics and industrial drawings. 

- **Grid:** 12-column system with 24px gutters.
- **Rhythm:** All spacing is based on a 4px baseline unit. Internal component padding should remain tight and high-density (12px or 16px).
- **Responsive Behavior:** 
  - **Desktop:** Large horizontal margins (48px) and a max-width of 1152px for the core content area. 
  - **Tablet:** Maintains the 12-column grid but reduces margins.
  - **Mobile:** Shifts to a single-column stack with 16px margins; display typography should scale down to mobile-specific tokens.

## Elevation & Depth

Hierarchy in this light-first system is achieved through **Tonal Layers** and **Low-Contrast Outlines** rather than shadows.

- **Base Surface:** `#F5F4F0` (Technical Paper).
- **Elevated Surface:** `#EAE9E4` (Raised Modules). Used for cards and secondary navigation areas.
- **Structural Boundaries:** Elements are defined by 1px hairline borders using `copper-trace` (rgba(196, 120, 58, 0.25)).
- **Milled Surfaces:** Input fields and code containers should use a slightly darker, recessed gray to appear "etched" into the base substrate.
- **Shadows:** Avoid drop shadows globally. If depth is required for a floating element (like a modal), use a very fine, 1px solid border in a neutral gray rather than a blur.

## Shapes

The shape language is **Soft (0.25rem / 4px)**. This mimics the "broken edges" of machined aluminum or high-grade plastic casings.

- Avoid pill shapes or large radii; the aesthetic should remain rectilinear and professional.
- Use 90-degree corners for large structural containers like page sections.
- Apply the `rounded-sm` (2px) to small indicators or checkboxes for a high-precision feel.

## Components

- **Buttons:**
  - **Primary:** Solid Bare Copper (`#C4783A`) with white text.
  - **Secondary:** Outlined with `copper-trace`, using `text-primary`.
- **Inputs:** Use a recessed background (`#EDECE8`) with a `meta-mono` font. On focus, the border hardens to 1px solid Bare Copper.
- **Cards:** Use a background of `#EAE9E4` with `copper-trace` borders. Include "Fiducial Marks" (small 4px L-shaped ticks) in the corners to evoke PCB aesthetics.
- **Status LEDs:** Use small circular pips (4px) with `secondary` (Green) for success and a muted red for errors.
- **Dividers:** Instead of gray lines, use 1px `copper-trace` lines. For a "workshop" feel, incorporate 45-degree angled chamfers at the ends of dividers when they meet container edges.
- **Metadata Chips:** Rectangular with `rounded-sm`, using `meta-mono` text and a light gray or `soldermask-tint` background.