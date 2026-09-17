# Test Strategy

## Purpose

Testing verifies that Daily Reset behaves consistently with documented requirements and implementation plans.

Testing focuses on:

- deterministic business logic,
- important user flows,
- page rendering,
- storage interactions,
- regression prevention.

## Tools

The automated test environment uses:

- Vitest,
- Testing Library,
- jsdom.

## Domain logic testing

Tests verify:

- state classification,
- recommendation generation,
- deterministic behavior,
- exactly three recommendations,
- adaptation to available time and classified state.

Primary file: `tests/recommendations.test.ts`.

## Dashboard testing

Tests verify:

- loading saved data,
- rendering summary statistics,
- latest state,
- latest completed action,
- primary navigation actions.

Primary file: `tests/page.test.tsx`.

## Daily Check-in testing

Tests verify:

- input selection,
- required field behavior,
- state classification result,
- generation of three recommendations,
- recommendation selection,
- action completion,
- storage calls.

Primary file: `tests/checkin.test.tsx`.

## History testing

Tests verify:

- loading saved check-ins,
- loading completed actions,
- matching actions to check-ins,
- rendering historical information.

Primary file: `tests/history.test.tsx`.

## Insights testing

Tests verify:

- total check-ins,
- total completed actions,
- completion rate,
- state distribution,
- most common state,
- completed action categories.

Primary file: `tests/insights.test.tsx`.

## Settings testing

Tests verify:

- local data information,
- confirmation before destructive deletion,
- data clearing,
- success feedback.

Primary file: `tests/settings.test.tsx`.

## Regression testing

Run the full automated suite after significant changes:

`npx.cmd vitest run`

## Build verification

Run:

`npm.cmd run build`

The build should complete without errors.

## Manual deployment verification

After deployment, verify:

1. Dashboard opens.
2. Check-in can be completed.
3. Exactly three recommendations appear.
4. An action can be completed.
5. History displays the saved reset.
6. Insights reflects saved data.
7. Settings opens correctly.
8. Navigation works between all routes.

## Test boundaries

The current MVP does not require tests for:

- authentication,
- registration,
- payments,
- cloud synchronization,
- remote backend,
- generative AI services.

## Quality goal

The testing strategy should provide confidence that the documented MVP user flow works consistently and that changes do not silently break core functionality.

<!-- FINAL_DOC_OK -->
