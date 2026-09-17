# Architecture Notes

## 1. Architecture goal

The architecture should remain simple, testable and appropriate for a small MVP.

The application does not require:

- a remote backend,
- authentication,
- payments,
- external database infrastructure.

The system follows a local-first approach.

## 2. Main architecture

Daily Reset is built with Next.js, React and TypeScript.

The application is primarily client-side for interactive functionality and browser persistence.

The architecture contains four main areas:

- presentation layer,
- domain logic,
- persistence layer,
- automated testing.

## 3. Presentation layer

The application uses multiple routes:

- `/` — Dashboard
- `/check-in` — Daily Check-in
- `/history` — History
- `/insights` — Insights
- `/settings` — Settings

Shared navigation is implemented in:

`components/AppNavigation.tsx`

The root layout is implemented in:

`app/layout.tsx`

## 4. Domain logic

State classification and recommendation generation are implemented in:

`lib/recommendations.ts`

The logic is deterministic.

The system classifies the user into:

- recovery,
- balanced,
- active.

Recommendation generation depends on:

- classified state,
- available time.

The engine returns exactly three recommendations.

## 5. Persistence

Data persistence uses browser IndexedDB through Dexie.

Database configuration and entity types are defined in:

`lib/db.ts`

Storage operations are defined in:

`lib/storage.ts`

The persistence layer supports:

- saving check-ins,
- saving completed actions,
- retrieving check-ins,
- retrieving completed actions,
- retrieving actions for a specific check-in,
- clearing all local application data.

## 6. Data model

The system uses two main entities.

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

The relationship between the two entities is based on:

`CompletedAction.checkInId`

## 7. Insights

Insights are calculated from locally stored data.

No separate analytics backend is required.

Current calculations include:

- total check-ins,
- completed actions,
- completion rate,
- state distribution,
- most common state,
- action category distribution.

## 8. External integrations

The current MVP does not use external integrations for core functionality.

There are no required:

- external APIs,
- authentication providers,
- payment providers,
- cloud databases,
- AI APIs,
- notification services.

## 9. Architecture decisions

Important architecture decisions are documented in:

- `docs/architecture/adr_001.md`
- `docs/architecture/adr_002.md`
- `docs/architecture/adr_003.md`

Additional architecture details are documented in:

- `docs/architecture/system_overview.md`
- `docs/architecture/data_model.md`

## 10. Testing

Automated tests use:

- Vitest,
- Testing Library,
- jsdom.

The test suite verifies both:

- domain logic,
- user-facing application behavior.

## 11. Deployment

The application is deployed using Vercel.

The production application uses the same frontend architecture as the local development version.

## 12. Architecture boundaries

The current MVP intentionally excludes:

- authentication,
- user accounts,
- payments,
- server-side user data storage,
- cloud synchronization,
- generative AI recommendations.

## 13. Future extension

If the application grows, possible architectural extensions include:

- remote API,
- cloud database,
- optional user authentication,
- synchronization between devices,
- richer analytics,
- configurable recommendation rules.

These extensions are outside the current MVP.