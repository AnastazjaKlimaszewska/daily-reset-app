# Data Model

## Purpose

Daily Reset stores structured local data in IndexedDB using Dexie.

The application uses two main entities:

- CheckIn
- CompletedAction

## CheckIn

A CheckIn represents one completed Daily Reset check-in.

Fields:

- `id`: unique string identifier
- `createdAt`: creation timestamp
- `energy`: `low`, `medium` or `high`
- `mood`: `low`, `neutral` or `good`
- `mentalLoad`: `low`, `medium` or `high`
- `availableTime`: `5`, `10` or `20`
- `classifiedState`: `recovery`, `balanced` or `active`

## CompletedAction

A CompletedAction represents one recommendation completed by the user.

Fields:

- `id`: unique string identifier
- `checkInId`: identifier of the related CheckIn
- `activity`: completed activity name
- `category`: activity category
- `completedAt`: completion timestamp

## Relationship

`CompletedAction.checkInId` references `CheckIn.id`.

This relationship allows History and Insights to connect a completed action with the check-in that generated it.

## IndexedDB structure

The database is defined in `lib/db.ts`.

Dexie is used as the IndexedDB abstraction layer.

The database contains:

- `checkIns`
- `completedActions`

Storage operations are implemented in `lib/storage.ts`.

## Example CheckIn

Example values:

- id: `checkin-001`
- createdAt: `2026-09-15T18:30:00.000Z`
- energy: `low`
- mood: `neutral`
- mentalLoad: `high`
- availableTime: `10`
- classifiedState: `recovery`

## Example CompletedAction

Example values:

- id: `action-001`
- checkInId: `checkin-001`
- activity: `Take a short walk`
- category: `movement`
- completedAt: `2026-09-15T18:42:00.000Z`

## Data lifecycle

### Creating a reset

1. The user completes the check-in.
2. A CheckIn object is created.
3. The state is classified.
4. The CheckIn is stored in IndexedDB.
5. Recommendations are generated.

### Completing an action

1. The user selects one recommendation.
2. The user marks it as completed.
3. A CompletedAction object is created.
4. The object stores the related `checkInId`.
5. The CompletedAction is saved in IndexedDB.

## Reading data

Stored data is used by:

- Dashboard,
- History,
- Insights.

Dashboard uses the data for summary information.

History uses the relationship between CheckIn and CompletedAction to display previous resets.

Insights aggregates saved records to calculate descriptive statistics.

## Data deletion

Settings allows the user to clear all Daily Reset data.

The clear operation removes records from:

- `checkIns`
- `completedActions`

## Data boundaries

The current MVP does not store:

- login credentials,
- payment information,
- remote account data,
- cloud synchronization data.

All application records remain in the user's browser.

<!-- FINAL_DOC_OK -->
