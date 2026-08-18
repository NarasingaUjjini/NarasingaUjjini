---
name: Silicon Lab & Precision Workshop
colors:
  surface: '#111317'
  surface-dim: '#111317'
  surface-bright: '#37393d'
  surface-container-lowest: '#0c0e11'
  surface-container-low: '#1a1c1f'
  surface-container: '#1e2023'
  surface-container-high: '#282a2d'
  surface-container-highest: '#333538'
  on-surface: '#e2e2e6'
  on-surface-variant: '#d9c2b4'
  inverse-surface: '#e2e2e6'
  inverse-on-surface: '#2f3034'
  outline: '#a18d80'
  outline-variant: '#534439'
  surface-tint: '#ffb782'
  primary: '#ffb782'
  on-primary: '#4f2500'
  primary-container: '#cc7e40'
  on-primary-container: '#452000'
  inverse-primary: '#8f4d11'
  secondary: '#70d8ca'
  on-secondary: '#003732'
  secondary-container: '#32a094'
  on-secondary-container: '#00302b'
  tertiary: '#7bd0ff'
  on-tertiary: '#00354a'
  tertiary-container: '#009bd1'
  on-tertiary-container: '#002d40'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdcc5'
  primary-fixed-dim: '#ffb782'
  on-primary-fixed: '#301400'
  on-primary-fixed-variant: '#703800'
  secondary-fixed: '#8df4e6'
  secondary-fixed-dim: '#70d8ca'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#111317'
  on-background: '#e2e2e6'
  surface-variant: '#333538'
  surface-slate: '#14181F'
  surface-high: '#1B222B'
  silicon-white: '#E6ECF2'
  anodized-slate: '#9BA7B7'
  trace-gray: '#5E6C80'
  copper-hairline: rgba(196, 120, 58, 0.18)
  soldermask-dim: rgba(42, 155, 143, 0.12)
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
  body-editorial:
    fontFamily: Source Serif 4
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  ui-bold:
    fontFamily: IBM Plex Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 22px
    letterSpacing: 0.01em
  ui-base:
    fontFamily: IBM Plex Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: '0'
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
  max-width-editorial: 672px
  max-width-standard: 1152px
---

## Brand & Style

The visual identity is modeled after high-fidelity engineering environments: silicon cleanrooms, RF measurement benches, and CNC machining floors. It balances the extreme rigor of microelectronics (ASIC synthesis, FPGA routing) with the tactile, heavy-duty nature of physical fabrication (Haas 4-axis milling, structural woodworking).

The design follows a **Modern Industrial** aesthetic with **Brutalist** structural undertones. It utilizes a dark-first canvas to reduce glare—simulating a developer's IDE or an oscilloscope screen—and emphasizes "conductive" pathways using hairline copper borders that mimic PCB traces. Every element must feel "toleranced" and deliberate, eschewing generic soft-UI trends for a crisp, high-density layout that prioritizes information fidelity and technical authority.

## Colors

The palette is rooted in functional materials:
- **Primary (Bare Copper):** Represents connectivity and high-value interaction. Used for CTAs and structural section indicators.
- **Secondary (Soldermask Green):** Evokes the epoxy coating of high-end PCBs. Used for technical success states, firmware metadata, and hardware tags.
- **Tertiary (Logic Cyan):** Reflects oscilloscope traces and digital signal waveforms. Used for telemetry data and telemetry highlights.
- **Neutral (Graphite & Slate):** The background is a matte, non-reflective black (`#0B0D10`), with surfaces built from varying depths of "Silicon Slate" to create hierarchy through tonal layering rather than shadows.

Text uses **Silicon White** for high-contrast headlines and **Anodized Slate** for body copy to ensure legibility during deep technical reading.

## Typography

Four distinct typefaces define the system’s utility:
- **Space Grotesk (Headlines):** Used for structural hierarchy. It provides a geometric, engineered feel for titles and hero sections.
- **Source Serif 4 (Prose):** Reserved for technical narratives and essays. It provides a human, scholarly contrast to the digital surroundings, constrained to a max reading width of 672px.
- **IBM Plex Sans (Interface):** The workhorse for buttons, inputs, and standard UI controls. It is neutral and highly legible.
- **IBM Plex Mono (Telemetry):** Used for metadata, pinouts, G-code, and code blocks. It reinforces the "lab bench" aesthetic and ensures alignment of technical specifications.

**Implementation Note:** Use `tabular-nums` for all monospaced data to maintain vertical alignment in telemetry tables.

## Layout & Spacing

The layout philosophy is a **Fixed Grid** model using an asymmetrical editorial rhythm (e.g., 7/5 or 8/4 column splits) to mimic technical journal schematics.

- **Grid:** A 12-column grid with 24px gutters.
- **Rhythm:** All vertical and horizontal spacing must be multiples of 4px.
- **Breakpoints:** 
    - **Desktop (>1024px):** Asymmetrical splits for side-by-side technical diagrams and prose.
    - **Tablet (768px - 1023px):** 2-column balanced grid with tabbed metadata.
    - **Mobile (<767px):** Single-column stack with persistent telemetry indicators.
- **Margins:** Large 80px - 112px vertical buffers between major sections to maintain an "exhibition" pace, while internal component padding remains high-density (12px - 16px).

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Low-Contrast Outlines** rather than traditional drop shadows.

- **Base Layer:** `#0B0D10` (Graphite Black).
- **Surface Layer:** `#14181F` (Silicon Slate). Components "rest" on this layer.
- **Interactive Layer:** `#1B222B`. Elevated for hovers and modals.
- **Outlines:** Hairline copper borders (`rgba(196,120,58,0.18)`) act as the primary structural boundary. This "conductive trace" style is the hallmark of the system.
- **Recessed Areas:** Code blocks and terminal windows use `#080A0D` to appear "milled" into the surface.
- **Shadows:** Only used on primary buttons to provide a "glow" effect, simulating an illuminated instrument panel.

## Shapes

The shape language is strictly **Soft (0.25rem / 4px)**. This reflects industrial precision—corners are "broken" to remove sharpness but are not rounded in a way that suggests consumer softness.

Avoid pill-shaped buttons entirely. Interactive elements should be rectilinear or slightly chamfered. Navigation items use a 2px copper underline for the active state rather than rounded backgrounds.

## Components

- **Buttons:** 
    - **Primary:** Solid Bare Copper background with Graphite Black text. High-contrast and impactful.
    - **Secondary:** Outlined Soldermask Green. Transparent center, 1px green border.
- **Cards (Silicon Modules):** Use the Silicon Slate background with Hairline Copper borders. Include "Fiducial Marks"—small L-shaped hairline ticks in the corners—to mimic PCB alignment markers.
- **Metadata Chips:** High-density monospaced badges (IBM Plex Mono) with a leading icon or status LED. Backgrounds should be a dark tint of the accent color (e.g., Soldermask Container).
- **Input Fields:** Recessed dark backgrounds (`#0E1218`) with `meta-mono` text. On focus, the border shifts to Solid Bare Copper with a subtle 3px copper outer glow.
- **Code Blocks:** Header bars should include simulated "screw heads" at the corners and monospaced filenames.
- **Dividers:** Replace standard horizontal rules with "PCB Traces"—1px copper lines that feature 45-degree angled chamfer bends to transition across the page.