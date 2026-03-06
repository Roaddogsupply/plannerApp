Frontend PRD — Spread Rendering Engine
Purpose Render planner pages with pixel-accurate layout matching the source PDFs.

Scope

Page sizes: Letter (8.5x11), Half-letter (5.5x8.5)
Orientation: Portrait, Landscape
Spread: manages page size, margins, bleed, printable area
Page: grid and field containers
Reusable blocks: headers, boxes, dividers
Layout

CSS variables
--page-width, --page-height
--margin, --bleed
--space-1..--space-8 (4px scale)
Grids: 4/6/12-column options per template
Lines/borders: 1px hairline, theme tokens
Zoom

50–200% zoom controls; maintain crisp alignment
Print

Print CSS per template
No cut content; controlled page-breaks
Acceptance

Day/Week/Month scaffolds render consistently at multiple zoom levels
Print preview matches expected page size and margins
