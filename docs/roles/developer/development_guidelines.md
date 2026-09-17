# Development Guidelines

## 1. Development approach

Daily Reset is developed using a Spec Driven Development process.

Implementation should follow documented requirements and plans instead of introducing undocumented functionality.

The repository is the source of truth.

## 2. General principles

Development should prioritize:

- small implementation steps,
- clear responsibilities,
- predictable behavior,
- testability,
- simple architecture,
- consistency with documented plans.

Avoid unnecessary abstraction unless it clearly improves maintainability.

## 3. Technology stack

The current implementation uses:

- Next.js,
- React,
- TypeScript,
- Tailwind CSS,
- Dexie,
- IndexedDB,
- Vitest,
- Testing Library,
- jsdom.

## 4. Application structure

Main application routes:

- `app/page.tsx` — Dashboard
- `app/check-in/page.tsx` — Daily Check-in
- `app/history/page.tsx` — History
- `app/insights/page.tsx` — Insights
- `app/settings/page.tsx` — Settings

Shared UI:

- `components/AppNavigation.tsx`

Domain and persistence logic:

- `lib/recommendations.ts`
- `lib/db.ts`
- `lib/storage.ts`

Automated tests are stored in:

- `tests/`

## 5. Separation of concerns

### Presentation

Pages and components are responsible for:

- rendering UI,
- collecting user input,
- displaying application state,
- invoking domain or storage functions.

### Domain logic

`lib/recommendations.ts` is responsible for:

- deterministic state classification,
- recommendation generation.

UI components should not duplicate this logic.

### Persistence

`lib/db.ts` defines:

- database,
- entity types,
- IndexedDB schema.

`lib/storage.ts` defines:

- save operations,
- read operations,
- clear operations.

Pages should use storage functions instead of directly manipulating IndexedDB.

## 6. Persistence rules

The current MVP uses IndexedDB through Dexie.

Do not introduce `localStorage` as a second persistence mechanism for application records.

The persisted domain entities are:

- CheckIn,
- CompletedAction.

A completed action must reference its source check-in through:

`checkInId`

## 7. Recommendation rules

State classification must remain deterministic.

The system must classify a complete check-in as one of:

- recovery,
- balanced,
- active.

Recommendation generation must:

- use classified state,
- use available time,
- return exactly three recommendations.

Core recommendation behavior should remain testable without external APIs.

## 8. UI development

New UI should remain consistent with the existing application shell.

The current visual direction uses:

- dark surfaces,
- strong contrast,
- compact panels,
- consistent spacing,
- restrained accent colors,
- responsive layouts.

Shared navigation should remain consistent across all routes.

## 9. Testing expectations

Changes to core behavior should include or update tests.

Tests should verify:

- business logic,
- user-visible behavior,
- important storage calls,
- edge states where appropriate.

The current suite uses:

- Vitest,
- Testing Library,
- jsdom.

Run tests with:

```bash
npx vitest run