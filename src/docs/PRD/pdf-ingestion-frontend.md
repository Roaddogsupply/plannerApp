Frontend PRD — PDF Ingestion (Upload & Mapping)
Purpose Bring user-provided PDFs into the app context and map their structure to templates/fields.

Scope

Upload UI (dropzone/button) for source PDFs
Parse summary display (pages, detected text blocks, checkboxes)
Manual mapping tools to align PDF regions → template fields
Save mappings as versioned templates
Upload UX

Accept: .pdf
Multiple files allowed; list with filename, pages, size
Store file metadata locally (settings/templates table or a small files table with blob/url)
Preview & Guide

Render a static preview image per page (use pdfjs-dist to rasterize at low DPI)
Overlay grid guides and rulers
Toggle: show/hide detected regions (if available from backend parsing)
Manual mapping tools

Draw rectangle → assign field type + id + label
Field types: text, checkbox, radio, select, counter, habit-grid, calc (display)
Snap to grid (4px)
Copy/paste/duplicate fields across pages
Alignment tools: left/center/right, distribute
Template save

template = { id, name, version, pageSize, orientation, grid: { cols, gutter, margins, bleed }, fields: [{ id, type, label, rect: { x,y,w,h }, opts }] }
Version bump when structure changes; existing pages keep their version.
Validation

Unique field ids per template
Required labels cannot be empty
Warn if overlapping rects or fields outside page bounds
Acceptance

User can upload a PDF, draw fields matching the PDF’s layout, and save a reusable template.
Rendering engine can use the saved template to produce an on-screen spread that visually matches the PDF page.
Export/print of the mapped page preserves placements and sizes.