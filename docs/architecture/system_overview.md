# System Overview

## 1. Purpose

Daily Reset is a lightweight self-care decision-support web application.

Its purpose is to reduce decision overload by helping the user answer a short contextual check-in and receive a small set of realistic micro-actions.

The application is intentionally narrow in scope.

It focuses on one core flow:

check-in → state classification → recommendation → action completion → history → statistics.

## 2. Main user flow

The user:

1. selects current energy level,
2. selects current mood,
3. selects current mental load,
4. selects available time,
5. submits the check-in,
6. receives a classified state,
7. receives three context-aware recommendations,
8. selects one recommendation,
9. marks it as completed,
10. sees the completed action stored in history,
11. can review simple statistics,
12. can clear all local data.

## 3. Current architecture

The application uses a frontend-first architecture.

Main layers:

### Presentation layer

Implemented in:

- `app/page.tsx`

Responsibilities:

- collecting check-in input,
- displaying recommendations,
- handling recommendation selection,
- displaying completion state,
- displaying history,
- displaying statistics,
- exposing local data management controls.

### Domain logic layer

Implemented in:

- `lib/recommendations.ts`

Responsibilities:

- classifying user state,
- generating recommendations,
- adapting recommendations to available time.

### Persistence layer

Implemented in:

- `lib/db.ts`,
- `lib/storage.ts`.

Responsibilities:

- IndexedDB configuration,
- Dexie table definitions,
- saving check-ins,
- saving completed actions,
- loading history,
- clearing stored data.

## 4. Data model

The main entities are:

### CheckIn

Contains:

- id,
- createdAt,
- energy,
- mood,
- mentalLoad,
- availableTime,
- classifiedState.

### CompletedAction

Contains:

- id,
- checkInId,
- activity,
- category,
- completedAt.

A completed action is linked to the check-in that generated it through `checkInId`.

## 5. Persistence

Persistent application data is stored in IndexedDB.

Dexie.js is used to provide a structured interface over IndexedDB.

The application does not currently require a remote database.

## 6. Recommendation model

The recommendation system is deterministic.

The user is classified into one of three states:

- recovery,
- balanced,
- active.

The recommendation generator returns exactly three micro-actions based on:

- classified state,
- available time.

The current MVP does not use an external AI model for recommendation generation.

## 7. Testing

Automated tests cover:

- state classification,
- recommendation generation,
- check-in flow,
- completed action flow,
- history,
- statistics,
- local data deletion.

Testing uses:

- Vitest,
- Testing Library,
- jsdom.

## 8. Deployment

The application is deployed as a Next.js frontend application.

The current MVP intentionally does not implement:

- login,
- registration,
- payments,
- remote user accounts,
- external backend services.

## 9. Architectural goals

The current architecture prioritizes:

- low complexity,
- clear separation of responsibilities,
- local-first data ownership,
- testability,
- maintainability,
- consistency with the documented SDD process.

## 10. Future extension points

The architecture can later be extended with:

- remote synchronization,
- user accounts,
- richer analytics,
- more advanced recommendation logic,
- additional views.

These extensions are outside the current MVP scope.