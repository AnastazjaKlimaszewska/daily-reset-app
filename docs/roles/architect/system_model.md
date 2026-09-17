# System Model

## High-level model

User

↓

Daily Reset web interface

↓

Daily Check-in

↓

Deterministic state classification

↓

Recommendation engine

↓

Three recommendations

↓

Selected action

↓

Action completion

↓

IndexedDB through Dexie

↓

Dashboard / History / Insights

## Main components

### Application shell

Provides:

- shared navigation,
- page layout,
- route access.

Main routes:

- Dashboard,
- Check-in,
- History,
- Insights,
- Settings.

### Check-in component

Collects:

- energy,
- mood,
- mental load,
- available time.

A complete check-in is required before classification.

### Classification logic

Reads the four check-in values.

Returns one of:

- recovery,
- balanced,
- active.

Classification logic is deterministic.

### Recommendation logic

Reads:

- classified state,
- available time.

Returns exactly three recommendations.

### Action completion

The user selects one recommendation.

When the user completes the action, a CompletedAction record is created.

### Persistence layer

The application uses IndexedDB through Dexie.

The persistence layer stores:

- CheckIn records,
- CompletedAction records.

### Dashboard

Reads saved records and displays summary information.

### History

Reads saved records and connects completed actions to their associated check-ins.

### Insights

Reads saved records and calculates descriptive statistics.

### Settings

Provides local data information and supports clearing the local database.

## Data flow

### Creating a reset

User input

↓

Check-in object

↓

State classification

↓

Check-in saved in IndexedDB

↓

Recommendation generation

↓

User selects recommendation

↓

User completes action

↓

Completed action saved in IndexedDB

## Read flow

IndexedDB

↓

Storage functions

↓

Application page

↓

React state

↓

Rendered user interface

## Data relationship

A completed action references the check-in that generated it.

Relationship:

`CheckIn.id`

↓

`CompletedAction.checkInId`

## Persistence model

The browser database contains two collections:

### checkIns

Stores check-in data and classified state.

### completedActions

Stores completed recommendation data.

## Architectural boundary

The system does not require communication with an external backend during the main user flow.

All core MVP data remains in the user's browser.

## Testing model

Automated tests verify:

- classification,
- recommendations,
- Dashboard rendering,
- Check-in behavior,
- History,
- Insights,
- Settings.

## Deployment model

Source code

↓

GitHub repository

↓

Vercel deployment

↓

Daily Reset web application