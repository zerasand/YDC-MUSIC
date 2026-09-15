---
name: Cinematic Soundscape
colors:
  surface: '#121316'
  surface-dim: '#121316'
  surface-bright: '#38393d'
  surface-container-lowest: '#0d0e11'
  surface-container-low: '#1b1b1f'
  surface-container: '#1f1f23'
  surface-container-high: '#292a2d'
  surface-container-highest: '#343538'
  on-surface: '#e3e2e6'
  on-surface-variant: '#c9c4d7'
  inverse-surface: '#e3e2e6'
  inverse-on-surface: '#2f3034'
  outline: '#938ea1'
  outline-variant: '#484555'
  surface-tint: '#cabeff'
  primary: '#cabeff'
  on-primary: '#31009a'
  primary-container: '#947dff'
  on-primary-container: '#2b0088'
  inverse-primary: '#613ede'
  secondary: '#dcfdff'
  on-secondary: '#00373a'
  secondary-container: '#00f1fd'
  on-secondary-container: '#006a6f'
  tertiary: '#ffb955'
  on-tertiary: '#452b00'
  tertiary-container: '#c68200'
  on-tertiary-container: '#3c2500'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e6deff'
  primary-fixed-dim: '#cabeff'
  on-primary-fixed: '#1c0062'
  on-primary-fixed-variant: '#481ac7'
  secondary-fixed: '#6ff6ff'
  secondary-fixed-dim: '#00dce6'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f53'
  tertiary-fixed: '#ffddb4'
  tertiary-fixed-dim: '#ffb955'
  on-tertiary-fixed: '#291800'
  on-tertiary-fixed-variant: '#633f00'
  background: '#121316'
  on-background: '#e3e2e6'
  surface-variant: '#343538'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.08em
  mono-metric:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system sets the visual tone for an avant-garde cinematic audio atelier. It caters to creative directors, game developers, film producers, and discerning audiophiles looking for bespoke soundtracks and atmospheric scoring. The visual language balances high-tension sonic power with refined, quiet luxury. 

The aesthetic is grounded in a fusion of **Atmospheric Minimalism** and **Translucent Glassmorphism**, invoking the tactile experience of high-end modular synthesizers, mixing consoles, and dark acoustic scoring stages. Interfaces feel vast, deep, and focused—leveraging void-like blacks punctuated by precise, phosphorescent audio indicators and delicate glowing waveforms. 

The emotional response evoked is immersion, precision, cinematic suspense, and auditory gravitas.

## Colors

The palette establishes an infinite, dark-stage environment where sound takes physical form through light:

- **Neutral (Obsidian Void - `#08090C`):** Deep, pure-black canvas tone. Supports deep slate and midnight indigo sub-surfaces (`#0E1118`, `#151922`) to provide structure without losing spatial void depth.
- **Primary (Electric Violet - `#7B5CFA`):** Reflects sonic resonance, harmonic depth, and modern creative synthesis. Used for active listening states, master controls, and key system accents.
- **Secondary (Luminous Cyan - `#00F2FE`):** Represents high-frequency clarity, dynamic waveforms, playhead lasers, and instantaneous live feedback.
- **Tertiary (Acoustic Brass / Amber Glow - `#F5A623`):** Evokes orchestral warmth, horn sections, tube saturation, and premiere film licensing metadata. Used selectively for high-value highlights, stem status tags, and score markers.

Contrast must remain strict: muted slate text for passive technical readouts, crisp off-white (`#F0F3F8`) for high-legibility typographic scoring cues.

## Typography

The typographic hierarchy communicates editorial prestige alongside technical audio engineering:

- **Display & Headlines (Space Grotesk):** Delivers sculptural geometric rhythm, precision cuts, and cinematic authority. Tight tracking at large scales mirrors the tension of film score credits.
- **Body Text (Inter):** Ensures neutral, fatigue-free reading across project briefs, score descriptions, licensing terms, and instrumentation logs.
- **Labels & Timestamps (JetBrains Mono):** Introduces recording console metadata precision. Used for BPM readouts, audio timecodes, stem formats (e.g., 96kHz / 24-bit), and key signatures. All label caps should be styled in uppercase.

## Layout & Spacing

The layout is built on a 12-column fluid grid system engineered for cinematic ratios (16:9, 2.39:1 widescreen modules) and audio timeline timelines.

- **Breakpoints:**
  - **Desktop (1280px+):** 12 columns, 24px gutters (`1.5rem`), generous 32px (`2rem`) margins. Timeline and soundboard views expand to fluid multi-track widths.
  - **Tablet (768px - 1279px):** 8 columns, 20px gutters, 24px margins. Soundboard inspectors collapse into bottom docking sheets.
  - **Mobile (up to 767px):** 4 columns, 16px gutters, 16px margins. Waveform displays simplify to condensed spectral envelopes; metadata collapses into drawer layers.

Spacial rhythm emphasizes macro negative space around hero track reels to instill contemplation, paired with tight, high-density micro padding within transport bars, mixing toggles, and metadata matrix panels.

## Elevation & Depth

Visual hierarchy uses physical acoustics and illuminated stage lighting as metaphors rather than heavy drop shadows:

- **Tonal Substrates:** 
  - Canvas floor: `#08090C` (Absolute Void).
  - Primary modules: `#0E1118` with 70% opacity.
  - Interactive decks & elevated docks: `#151922` with 80% opacity.
- **Glassmorphism & Optical Diffusion:**
  - Transport bars, waveform backdrops, and hovering toolbars utilize `backdrop-filter: blur(16px)` paired with a hair-thin perimeter highlight: `1px solid rgba(255, 255, 255, 0.08)`.
- **Luminescent Audio Glows:**
  - Elevation is expressed along the Z-axis by color blooms rather than black shadows. Active playback nodes and selected cue markers cast soft outer glows: `box-shadow: 0 0 24px -4px rgba(123, 92, 250, 0.35)`.
  - Focused scrubbers and playheads emit cyan proximity glows: `box-shadow: 0 0 12px 0 rgba(0, 242, 254, 0.5)`.

## Shapes

The design system adopts a **Soft (Level 1)** structural curve profile. 

This restrained approach (`0.25rem` / `4px` standard border-radius, scaling to `0.5rem` / `8px` for larger cards and modals) ensures UI frames echo professional high-end studio hardware racks, film monitor bezels, and modular sound units. Completely round elements are restricted strictly to transport buttons (e.g., circular Play/Record triggers) and audio metering knobs.

## Components

### Buttons
- **Primary Action (Trigger/Audition):** Electric violet background (`#7B5CFA`), crisp white text, 4px border radius. On hover, escalates with a soft primary violet glow and subtle scale up.
- **Secondary Action (Stems/Specs):** Dark slate surface (`rgba(255, 255, 255, 0.05)`), hairline border (`rgba(255, 255, 255, 0.12)`), text in neutral off-white.
- **Transport Buttons:** Minimalist circular controls with illuminated SVG iconography (Play, Pause, Scrub, Loop). Active play states pulse with an inner luminous cyan tint.

### Chips & Badges
- Genre, instrumentation, and cue mood markers (e.g., `ORCHESTRAL HYBRID`, `ANALOG SYNTH`, `BPM: 134`, `KEY: D MINOR`).
- Rendered in uppercase `label-caps` font. Minimalist dark slate fill with a subtle 1px border. Amber orchestral glows highlight cue statuses like `EXCLUSIVE` or `SYNC READY`.

### Lists & Track Rows
- Alternating subtle row states using transparent-to-`#0E1118` backgrounds.
- Hover reveals an integrated miniature scrubbable audio waveform in luminous cyan, alongside inline quick-action triggers (Download Stems, Add to Cue Sheet, License).
- Fixed-width JetBrains Mono columns for timecodes, durations, and tempo.

### Checkboxes, Radio Buttons, & Toggles
- Custom squared inputs with slight 2px rounding. Unchecked: thin gunmetal stroke. Checked: Electric violet fill with sharp, high-contrast check indicators.
- Toggle switches mimic physical studio console flip-switches, transitioning between slate-gray passive and amber/cyan active illumination.

### Input Fields & Search Bars
- Recessed inputs with `rgba(8, 9, 12, 0.8)` background, encased in a hairline `rgba(255, 255, 255, 0.08)` border.
- On focus, border transitions smoothly to luminous cyan (`#00F2FE`) accompanied by a subtle ambient spread blur. Monospace helper text for search query tags (e.g., `search: "cinematic crescendo ambient strings"`).

### Cards & Project Showcases
- Frosted dark slate surfaces with 8px radius (`rounded-lg`). Artwork covers utilize subtle 16:9 cinematic aspect ratios with soft bottom-gradient overlays for typography legibility.
- Top edges feature an ultra-fine 1px light streak (`rgba(255, 255, 255, 0.12)`) simulating top-down theatrical rim lighting.

### Audio Waveform Player (Specialized Component)
- Interactive canvas rendering multi-band audio density. Base waveform renders in muted midnight indigo; the elapsed portion transforms into electric violet with a razor-thin luminous cyan playhead and ambient amber peak meters.