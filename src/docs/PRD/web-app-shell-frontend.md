Frontend PRD — Web App Shell
Purpose Provide the application frame and navigation that hosts planner pages.

Scope

App frame: header, sidebar, content area
Routing: /month/:ym, /week/:yw, /day/:ymd
Today/Prev/Next navigation
Basic keyboard shortcuts: g t (today), [ and ] (prev/next)
Desktop-first; degrades gracefully on tablet
Requirements

Tech: React (Vite + TS)
Routes
/month/:ym (e.g., 2026-03)
/week/:yw (e.g., 2026-W10)
/day/:ymd (e.g., 2026-03-06)
Components
Header: title, Today, Prev, Next
Sidebar: sections (Daily, Weekly, Monthly, Goals, Notes, Moodboard, Brain Dump, Home Mgmt)
Content: renders active route
State
Current route reflects URL
Today button routes to current date
Performance: initial render < 150ms on a modern laptop
Acceptance

Switching links updates view without errors
Refresh preserves the active route
Today navigates correctly to current date route
