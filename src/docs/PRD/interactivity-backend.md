Backend PRD — Interactivity Logic
Purpose Define deterministic rules and formulas for calculated values and rollups.

Formula engine

Expression grammar: numbers, + - * / ( ), functions
Variables:
same-page: field:
cross-period: sumDay('fieldId', 'YYYY‑MM‑DD'..), sumWeek('fieldId','YYYY‑Wnn'), sumMonth('fieldId','YYYY‑MM')
Functions: sum, avg, min, max, count, countTrue, round, floor, ceil
Rollups

Day → Week: aggregate daily fields into weekly totals
Week → Month: aggregate weekly fields into monthly totals
Config per template: [{ targetFieldId, formula }]
Evaluation

Trigger on dependency change
Topological order to avoid cycles; cycle detection with error flag
Precision: decimal fixed(2) for totals unless specified
Persistence

Store formulas with template version
Store lastComputed and dependency hash for quick re‑calc
Acceptance

Given inputs, formulas produce stable, identical results across reloads
Changing a source field re‑computes all dependents within 200ms
No infinite loops; cycles reported in a non‑blocking warning