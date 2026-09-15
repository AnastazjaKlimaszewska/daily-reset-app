# Daily Reset

Daily Reset is a lightweight self-care decision-support web application.

The application helps the user complete a short contextual check-in and receive a small set of realistic micro-actions based on their current state.

The project was developed using a Spec Driven Development approach.

## Live application

The application is deployed with Vercel.

Live URL:
https://daily-reset-app-ten.vercel.app/

## Project goal

The purpose of Daily Reset is to reduce decision overload.

Instead of presenting a large productivity or wellness system, the application focuses on one narrow flow:

check-in → classification → recommendations → completion → history → statistics.

## Current MVP

The current MVP includes:

- daily contextual check-in,
- state classification,
- adaptive micro-action recommendations,
- recommendation selection,
- completed action storage,
- IndexedDB persistence,
- history,
- statistics,
- local data clearing,
- automated tests.

## Daily check-in

The user provides:

- energy,
- mood,
- mental load,
- available time.

A complete check-in is required before recommendations are generated.

## State classification

The application classifies the current state as:

- recovery,
- balanced,
- active.

The classification is deterministic.

## Recommendations

The application generates exactly three micro-actions.

Recommendations depend on:

- classified state,
- available time.

Recommendation categories include:

- rest,
- movement,
- focus,
- environment.

## Completed actions

The user can select one recommendation and mark it as completed.

The completed action is linked to the check-in that generated it.

## Data persistence

The current MVP uses IndexedDB through Dexie.js.

Persistent entities:

### CheckIn

- id
- createdAt
- energy
- mood
- mentalLoad
- availableTime
- classifiedState

### CompletedAction

- id
- checkInId
- activity
- category
- completedAt

The application does not require a remote backend for the current MVP.

## History

Previous check-ins are displayed in reverse chronological order.

History entries include:

- date and time,
- classified state,
- energy,
- mood,
- mental load,
- available time,
- completed action if available.

## Statistics

The application displays:

- total check-ins,
- total completed actions,
- completion rate,
- most common classified state.

## Local data management

The user can clear all locally stored Daily Reset data.

Deletion requires explicit confirmation.

## Technology stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Dexie.js
- IndexedDB
- Vitest
- Testing Library
- jsdom
- Vercel

## Project structure

```text
app/
  page.tsx

lib/
  db.ts
  recommendations.ts
  storage.ts

tests/
  page.test.tsx
  recommendations.test.ts

docs/
  architecture/
  business/
  plans/
  roles/
  tech/

.kilocode/
  workflows/
    plan.md
    implement.md

implemented_features.md
implemented_plans.md
README.md