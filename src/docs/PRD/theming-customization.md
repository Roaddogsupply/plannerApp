Frontend PRD — Theming & Customization
Purpose Match the PDFs’ look (fonts, colors, spacing) and allow light customization without breaking layout.

Scope

Typography: families, weights, sizes, line-height, letter-spacing
Color tokens: text, accents, lines, backgrounds, states
Spacing scale and border radius
Checkbox/radio icon style parity
Optional user overrides (non-destructive)
Design tokens (CSS variables) :root { /* Fonts */ --font-sans: "Inter", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;

/* Typography scale */ --fs-xs: 11px; --fs-sm: 13px; --fs-md: 15px; --fs-lg: 18px; --fs-xl: 22px; --lh-tight: 1.2; --lh-normal: 1.45; --lh-loose: 1.7;

/* Colors / --c-fg: #111; --c-muted: #555; --c-bg: #fff; --c-line: #1a1a1a; / hairline for boxes/rules */ --c-accent: #2563eb; --c-accent-weak: #93c5fd; --c-danger: #dc2626; --c-warn: #d97706; --c-ok: #16a34a;

/* Spacing (4px scale) */ --s-1: 4px; --s-2: 8px; --s-3: 12px; --s-4: 16px; --s-5: 24px; --s-6: 32px;

/* Borders */ --radius: 6px; --border: 1px solid var(--c-line); }

Typography

Map each PDF text element to:
family: var(--font-sans)
size: from --fs-*
weight: 400/600 as needed
line-height: --lh-normal unless tighter is specified
Provide a typography.ts map that pairs “PDF role” → token set (e.g., header, label, small-note).
Checkbox/Radio parity

Use CSS to render boxes/circles with 1px hairline and filled accent when checked.
Visual states: default, hover (slight bg), focus (outline), disabled (reduced opacity).
Customization (non-destructive)

Optional settings UI:
Font size scale: 90%–110%
Accent color pick (limited palette)
Changes write to settings table; render reads tokens from settings overrides.
Never reflow fixed template rects; scale fonts within bounds to avoid overflow.
Acceptance

Visual comparison at 100% zoom matches PDFs (font, weight, spacing, line thickness).
Adjusting accent color updates headers, lines, and controls consistently.
Print output uses the same tokens (no color/weight drift).