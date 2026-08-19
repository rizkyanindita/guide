# Design prompt — "Soft Warm Clay" coloring & motion system

Apply this exact color and motion language with vanilla HTML/CSS/JS. Do not introduce blue/purple/neon tones — this is a warm, muted, dusty earth-tone palette, softer and lower-contrast than a typical dark UI.

## Colors (muted, dusty — never saturated/neon)
- Background: `#241d19` (soft warm charcoal-taupe, not near-black)
- Text: `#f1e8dd` (warm ivory), body copy at 65–78% opacity
- Primary accent — muted clay: `#c9876f`
- Secondary accent — muted sand/ochre: `#d9a86c`
- Light tint (icons, gradient starts): `#dba690`
- Pale tint (tag/callout text): `#f0ddc9`
- Terminal text tint: `#f3e2d4`
- Glass surfaces: `rgba(241,232,221,0.04–0.1)` fills, `rgba(241,232,221,0.1–0.18)` neutral borders
- Accent borders/rings: `rgba(201,135,111,0.22–0.38)` (clay) or `rgba(217,168,108,0.3–0.38)` (sand)
- Terminal/code block background: `#1a1410`
- Shadows: warm and soft — `rgba(120,70,40,0.12–0.15)`, never black or cool-toned

Reference: 2026 "soft terracotta / dusty clay" earth-tone trend — clay pink, warm cream, muted sienna; nothing reads bright-orange or neon.

## Gradients
- Headline / gradient text: `linear-gradient(100deg, #dba690, #d9a86c 45%, #c9876f)`
- Highlight chips / buttons: `linear-gradient(90deg, #d9a86c, #c9876f)`
- Keep gradients subtle — two warm neighbors, never more than ~25° apart in hue.

## Aesthetic ambient background
3 large, heavily blurred (90–110px) radial-gradient orbs in clay/sand/blush tones, opacity 0.22–0.32, positioned off-canvas at the edges, each drifting slowly (15–19s ease-in-out infinite loop of small translate + scale). Keeps the page feeling alive without calling attention to itself.

## Motion (idle/continuous, all soft — no hard snaps)
- `floatIcon` — key icon gently floats + rotates ±3°, 4.5s ease-in-out infinite
- `pulseGlow` — icon drop-shadow breathes between clay and sand at low opacity (0.4 max), 3s
- `pulseDot` — status dots emit a soft expanding ring, 2s
- `blink` — terminal cursor `▌`, 1s step-end
- `bounceChevron` — small nudge on expandable rows, 1.8s
- `fadeUp` entrance — stagger each section in on load, animating **transform only** (translateY 14px→0, never opacity), delays 0/.05/.1/.15s… so content is never invisible if the animation is paused (backgrounded tab, screenshot tools, slow focus)
- Hover states: border brightens to the accent + a soft glow `box-shadow` (`rgba(201,135,111,0.2–0.25)`), transition 150–200ms

## Typography pairing
- Headings: Sora 600/700/800
- Body: Inter 400/500/600
- Keep weight restrained — 800 only on the hero title; everything else 600 or lighter.

## Rule of thumb
Every color, glow, and animation should feel like late-afternoon light on clay and linen — warm, soft-edged, unhurried. If something looks neon, saturated, or sharp-edged, mute it.
