Frontend PRD — Interactivity (UI)
Purpose Match PDF inputs and behaviors in the web app.

Field types

text: single/multi-line, character limit, placeholder
checkbox: true/false with visual parity (checked style)
radio: single select from small set
select: dropdown (optional)
date/time: native pickers with 12‑hour time
counter/number: min/max/step
habit-grid: grid of checkboxes (7×n)
note: long text
calc (display): computed value from formula
Behaviors

Debounced autosave (≤ 500ms)
Required flags: red outline + hint
Masks (optional): e.g., MM/DD/YYYY
Keyboard: Tab/Shift+Tab to move, Enter in multi-line inserts newline
Focus persistence: return to last field after refresh (optional)
Validation

Soft validation on blur; never blocks typing
Error hint beneath field
Formulas (read-only in UI)

Supported ops: +, -, *, /, sum(), avg(), countTrue()
Variables reference fields by id (same page) or rollups (week/month)
Accessibility

Labels linked via for/id
Focus outline visible
Sufficient color contrast
Acceptance

Each field reflects its PDF equivalent and saves locally
Invalid input shows hint but still saves
Calculated fields update within 200ms after dependencies change