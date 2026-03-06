Backend PRD — Export Pipeline
Purpose Ensure deterministic, high-fidelity PDF exports from rendered pages.

Scope

Prepare a headless export path (progressive plan)
Phase 1: Browser print (window.print) with hardened CSS
Phase 2 (optional): Headless renderer (Playwright/Puppeteer) for batch PDFs
Requirements

Deterministic rendering: use CSS print styles; avoid animations
Assets inlined or cache-stable to prevent missing fonts/icons
Page metadata embedded (templateId, dateKey) in data attributes for audit
Batch export (Phase 2)

Input: { type: day|week|month, range: [start,end], size, orientation }
Process: open hidden route, set print CSS, render pages, save PDF
Output: single merged PDF or per-page PDFs
Acceptance

Phase 1: Browser export yields visually identical results to on-screen spread at 100%
Phase 2: Headless export produces the same layout as browser print (within 1px tolerance)
All target pages in range are present and ordered correctly