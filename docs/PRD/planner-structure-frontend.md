Frontend PRD — Planner Structure
Purpose Define the information architecture and templates that mirror the PDFs.

Scope

Page types: day, week, month, goals, notes, brain-dump, home-mgmt
Templates: named, versioned definitions for layout + fields
Date mapping: day ↔ week ↔ month relationships
Template model

id, name, version
pageSize: letter|half-letter
orientation: portrait|landscape
grid: columns, gutter, margins, bleed
fields: [{ id, type, label, rect{x,y,w,h}, opts }]
type: text|checkbox|radio|select|counter|habit-grid|note|calc
rect: CSS grid or absolute within page frame
opts: { options?, default?, min?, max?, mask?, formula? }
Pages

pageId: type+dateKey (e.g., day-YYYY-MM-DD)
templateId
meta: { dateKey, weekNumber, month, year }
Field conventions

ids are stable (snake/kebab)
labels match PDF captions
no business logic in labels
Acceptance

A template renders the same layout every time
Switching template version updates new pages, preserves old ones
All PDF sections have a template counterpart
