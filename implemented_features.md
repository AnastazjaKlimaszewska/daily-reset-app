# Implemented Features

This file summarizes the functionality currently implemented in the Daily Reset MVP.

## 1. Application Shell and Navigation

Status: IMPLEMENTED

The application uses a multi-page structure with shared navigation.

Available routes:

- `/` — Dashboard
- `/check-in` — Daily Check-in
- `/history` — History
- `/insights` — Insights
- `/settings` — Settings

Shared navigation is implemented in `components/AppNavigation.tsx`.

## 2. Dashboard

Status: IMPLEMENTED

The Dashboard provides a summary of locally stored activity.

It includes:

- total check-ins,
- total completed actions,
- completion rate,
- latest classified state,
- latest completed action,
- entry point to a new Daily Reset.

Main implementation: `app/page.tsx`.

## 3. Daily Check-in

Status: IMPLEMENTED

The Daily Check-in collects:

- energy,
- mood,
- mental load,
- available time.

Available time options:

- 5 minutes,
- 10 minutes,
- 20 minutes.

Main implementation: `app/check-in/page.tsx`.

## 4. State Classification

Status: IMPLEMENTED

A completed check-in is classified into:

- recovery,
- balanced,
- active.

Classification is deterministic.

Main implementation: `lib/recommendations.ts`.

## 5. Adaptive Recommendations

Status: IMPLEMENTED

The system generates exactly three recommendations based on:

- classified state,
- available time.

The application does not use generative AI for recommendation generation.

Main implementation: `lib/recommendations.ts`.

## 6. Completed Action Tracking

Status: IMPLEMENTED

The user can select one recommendation and mark it as completed.

Completed actions are connected to the check-in that generated them.

## 7. IndexedDB Persistence

Status: IMPLEMENTED

Application data is stored locally using IndexedDB through Dexie.

The database stores:

- CheckIn records,
- CompletedAction records.

Database configuration: `lib/db.ts`.

Storage operations: `lib/storage.ts`.

## 8. History

Status: IMPLEMENTED

History displays:

- classified state,
- original check-in values,
- date and time,
- completed action where available.

Main implementation: `app/history/page.tsx`.

## 9. Insights

Status: IMPLEMENTED

Insights provides:

- total check-ins,
- completed actions,
- completion rate,
- state distribution,
- most common state,
- completed action categories.

Main implementation: `app/insights/page.tsx`.

## 10. Local Data Management

Status: IMPLEMENTED

Settings provides information about local storage and allows the user to clear all Daily Reset data after confirmation.

Main implementation: `app/settings/page.tsx`.

## 11. Automated Tests

Status: IMPLEMENTED

The project includes automated tests for:

- classification logic,
- recommendation logic,
- Dashboard,
- Daily Check-in,
- History,
- Insights,
- Settings.

Test files are stored in `tests/`.

Run tests with:

`npx.cmd vitest run`

## 12. Production Build

Status: IMPLEMENTED

Run the production build with:

`npm.cmd run build`

## 13. Deployment

Status: IMPLEMENTED

The application is deployed using Vercel.

Production URL:

https://daily-reset-app-ten.vercel.app/

## MVP boundaries

The current MVP intentionally does not include:

- login,
- registration,
- payments,
- cloud synchronization,
- remote database,
- external recommendation APIs,
- generative AI recommendations.

<!-- FINAL_DOC_OK -->
