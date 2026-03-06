Frontend PRD — Navigation
Purpose Let users jump between Day/Week/Month with correct dates and deep links.

Routes

/day/:ymd (YYYY-MM-DD)
/week/:yw (YYYY-Www) e.g., 2026-W10
/month/:ym (YYYY-MM)
UI

Header: Prev, Today, Next
Quick links: Day, Week, Month
Date picker (optional): jump to date
Behavior

Prev/Next changes route based on current view:
Day: ±1 day
Week: ±1 ISO week (Monday-based numbering)
Month: ±1 month (clamp to valid days)
Today goes to current day route (and corresponding week/month)
Deep link: browser refresh preserves current route
Helpers

parseDay('YYYY-MM-DD'), toDayString(Date)
parseWeek('YYYY-Www'), toWeekString(Date)
parseMonth('YYYY-MM'), toMonthString(Date)
startOfWeek(date), endOfWeek(date), addDays(date,n), addWeeks(date,n), addMonths(date,n)
Acceptance

All three views navigate correctly with Prev/Next/Today
Address bar reflects active view; refresh stays on same view
Invalid routes redirect to current month