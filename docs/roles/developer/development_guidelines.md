# Development Guidelines

## Development approach

Daily Reset is developed using Spec Driven Development.

Implementation should follow documented requirements and plans instead of introducing undocumented functionality.

The repository is the source of truth.

## General principles

Development should prioritize:

- small implementation steps,
- clear responsibilities,
- predictable behavior,
- testability,
- simple architecture,
- consistency with documented plans.

## Technology stack

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

## Application structure

Main routes:

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

Automated tests are stored in `tests/`.

## Separation of concerns

Pages and components are responsible for rendering UI, collecting input, displaying state and invoking domain or storage functions.

`lib/recommendations.ts` is responsible for deterministic classification and recommendation generation.

`lib/db.ts` defines the database, entity types and IndexedDB schema.

`lib/storage.ts` defines save, read and clear operations.

## Persistence rules

The MVP uses IndexedDB through Dexie.

Do not introduce `localStorage` as a second persistence mechanism for application records.

Persisted entities:

- CheckIn
- CompletedAction

A completed action references its source check-in through `checkInId`.

## Recommendation rules

The system must classify a complete check-in as:

- recovery,
- balanced,
- active.

Recommendation generation must:

- use classified state,
- use available time,
- return exactly three recommendations.

Core behavior must remain testable without external APIs.

## UI development

The current visual direction uses:

- dark surfaces,
- strong contrast,
- compact panels,
- consistent spacing,
- restrained accent colors,
- responsive layouts.

Shared navigation should remain consistent across all routes.

## Testing expectations

Changes to core behavior should include or update tests.

Run tests with:

`npx.cmd vitest run`

## Build verification

Before considering a major implementation complete, run:

`npm.cmd run build`

The build should complete without errors.

## SDD workflow

For each new feature:

1. Confirm the requirement.
2. Create or update an implementation plan.
3. Define acceptance criteria.
4. Implement the smallest useful change.
5. Run tests.
6. Update documentation.
7. Update implementation registries.
8. Commit the completed change.

## Scope control

Do not add the following without an explicit new plan:

- authentication,
- registration,
- payments,
- remote backend,
- cloud synchronization,
- generative AI recommendations,
- external recommendation services.

## Documentation

When implementation changes system behavior, update the relevant documentation.

Implementation and documentation should describe the same system.

<!-- FINAL_DOC_OK -->
