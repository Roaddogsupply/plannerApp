Database PRD — Local-First Data Persistence
Purpose Store user entries and settings locally with fast writes and reliable reads.

Tech

IndexedDB via Dexie (browser)
Tables (v1)

entries: id (auto), pageId, fieldId, value, updatedAt
settings: key (pk), value
templates: id, name, version, layout (optional for future)
Helpers

saveEntry(pageId, fieldId, value)
loadEntry(pageId, fieldId)
exportJSON(): dump entries + settings (+ templates if used)
importJSON(data): replace/merge then reload
Migrations (v2+)

Add pages table if needed for faster lookups
Add indexes for dateKey-based queries
Acceptance

Edits persist across refresh
Export → delete local data → Import restores values exactly