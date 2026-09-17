# PLAN Dashboard Overview

## Goal

Implement a Dashboard that gives the user a concise overview of their locally stored Daily Reset activity and provides a clear entry point to the main application flows.

## Scope

This plan covers the Dashboard route:

`/`

The Dashboard summarizes existing local data and does not introduce new persistence rules.

## Functional requirements

The Dashboard must:

- load all saved check-ins,
- load all saved completed actions,
- display total number of check-ins,
- display total number of completed actions,
- calculate and display completion rate,
- display the latest classified state,
- display the latest completed action,
- provide a clear action leading to Daily Check-in,
- provide navigation to other main application sections.

If no data exists, the Dashboard should still render correctly.

## Non-functional requirements

The Dashboard should:

- load without a remote backend,
- use the existing storage layer,
- remain responsive,
- use the shared application visual language,
- avoid duplicating persistence logic,
- remain understandable on desktop and mobile.

## Technical context

Main implementation file:

`app/page.tsx`

Shared navigation:

`components/AppNavigation.tsx`

Data access:

`lib/storage.ts`

Relevant entities:

- CheckIn
- CompletedAction

Persistence:

IndexedDB through Dexie.

## Implementation steps

1. Load saved check-ins through the storage layer.
2. Load saved completed actions.
3. Store loaded records in React state.
4. Calculate total check-ins.
5. Calculate total completed actions.
6. Calculate completion rate.
7. Determine the latest classified state.
8. Determine the latest completed action.
9. Render summary panels.
10. Add an entry point to a new Daily Check-in.
11. Add or preserve navigation links.
12. Add automated tests.

## Acceptance criteria

The feature is complete when:

- Dashboard loads successfully,
- saved check-ins are reflected in the total,
- saved completed actions are reflected in the total,
- completion rate is calculated correctly,
- latest state is displayed when available,
- latest completed action is displayed when available,
- empty local data does not break the page,
- the user can navigate to Check-in,
- automated Dashboard tests pass.

## Tests

Automated tests should verify:

- Dashboard rendering,
- loading saved data,
- total check-in display,
- completed action display,
- completion rate,
- latest state,
- latest completed action,
- primary navigation actions.

Primary test file:

`tests/page.test.tsx`