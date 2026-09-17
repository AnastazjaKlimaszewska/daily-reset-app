# Technology Stack

## Frontend

The application is built with:

- Next.js,
- React,
- TypeScript,
- Tailwind CSS.

Next.js provides the application structure and production build process.

React is used for the user interface and local component state.

TypeScript provides static typing for application data and logic.

Tailwind CSS is used for styling and responsive layout.

## Data persistence

The application uses IndexedDB for local browser persistence.

Dexie.js is used as a wrapper around IndexedDB to simplify:

- database configuration,
- table definitions,
- storing records,
- reading records,
- clearing local data.

The current persistent entities are:

- CheckIn,
- CompletedAction.

The data layer is implemented in:

- `lib/db.ts`,
- `lib/storage.ts`.

The current MVP does not use localStorage for persistent application history.

## Recommendation logic

Recommendation logic is implemented in:

`lib/recommendations.ts`

It contains:

- deterministic state classification,
- recommendation generation,
- time-aware recommendation selection.

The application currently does not use an external AI service.

## Testing

Automated tests use:

- Vitest,
- Testing Library,
- jsdom.

Tests cover:

- recommendation logic,
- daily check-in,
- completed action flow,
- history,
- statistics,
- local data management.

## Deployment

The application is deployed as a frontend application.

The current MVP does not require:

- a custom backend,
- authentication,
- registration,
- payments,
- remote database infrastructure.

## Architectural rationale

A frontend-first architecture with IndexedDB was selected because the current project scope is intentionally narrow.

This approach allows the project to demonstrate:

- structured data persistence,
- application state,
- domain logic,
- testing,
- documentation,
- deployment,

without introducing unnecessary backend complexity.

The architecture can later be extended with a remote backend if the product scope changes.