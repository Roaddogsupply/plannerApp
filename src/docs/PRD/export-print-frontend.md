Frontend PRD — Export & Print (UI)
Purpose Produce print-ready pages and trigger PDF export with correct sizes.

Print CSS

Page sizes: Letter (8.5x11), Half-letter (5.5x8.5)
Orientation: portrait/landscape
Margins and bleed controlled via CSS variables
Hide non-print UI (header, sidebar, controls)
Avoid cut content; add page-break-before/inside rules per template
UI

Button: Print / Export PDF
Options modal:
Page type(s): day/week/month
Date range or single page
Size + orientation
Scale (fit to page, 100%; default fit)
Behavior

When printing a single page: open print preview for that page
For ranges: render sequential pages with page-breaks
Use window.print() for PDF via browser, with tested presets
Acceptance

Printed output matches template dimensions and margins
No scrollbars or clipped content on any page size
Page breaks occur only where specified