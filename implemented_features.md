# Implemented Features

This file describes the current implementation status of Daily Reset.

## 1. Daily Check-In

Status: DONE

Plan:
`docs/plans/PLAN_daily_checkin.md`

Description:

The user provides four pieces of context:

- energy,
- mood,
- mental load,
- available time.

A complete check-in is required before recommendations can be generated.

## 2. State Classification

Status: DONE

Plan:
`docs/plans/PLAN_state_classification_and_recommendations.md`

Description:

The application classifies the user's current state as:

- recovery,
- balanced,
- active.

The classification is deterministic and based on the submitted check-in values.

## 3. Adaptive Recommendations

Status: DONE

Plan:
`docs/plans/PLAN_state_classification_and_recommendations.md`

Description:

The application generates exactly three micro-action recommendations based on:

- classified state,
- available time.

Recommendations are grouped into categories such as:

- rest,
- movement,
- focus,
- environment.

## 4. Completed Action Flow

Status: DONE

Plan:
`docs/plans/PLAN_completed_action_storage.md`

Description:

The user can:

- select one recommendation,
- mark it as completed,
- receive completion confirmation.

The completed action is linked to the check-in that generated it.

## 5. IndexedDB Persistence

Status: DONE

Plan:
`docs/plans/PLAN_indexeddb_storage.md`

Description:

The application uses IndexedDB through Dexie.js.

Stored data includes:

- check-ins,
- completed actions.

The storage layer is implemented in:

- `lib/db.ts`,
- `lib/storage.ts`.

## 6. History View

Status: DONE

Plan:
`docs/plans/PLAN_history_view.md`

Description:

The application loads previous check-ins from IndexedDB and displays them in reverse chronological order.

Each history entry includes:

- classified state,
- date and time,
- energy,
- mood,
- mental load,
- available time,
- completed action when available.

## 7. Statistics

Status: DONE

Plan:
`docs/plans/PLAN_statistics.md`

Description:

The application calculates and displays:

- total check-ins,
- total completed actions,
- completion rate,
- most common classified state.

Statistics are derived from the locally stored history.

## 8. Local Data Management

Status: DONE

Plan:
`docs/plans/PLAN_local_data_management.md`

Description:

The user can clear all locally stored Daily Reset data after explicit confirmation.

The action removes:

- all check-ins,
- all completed actions.

History and statistics reset immediately after deletion.

## 9. Automated Tests

Status: DONE

Description:

The project includes automated tests for:

- recommendation logic,
- check-in flow,
- recommendation generation,
- completed action storage,
- history rendering,
- statistics,
- local data clearing.

Tests are run with Vitest and Testing Library.

## 10. Production Build

Status: DONE

Description:

The application successfully passes the production build using Next.js.

## Prototype features

The repository also contains plans from the earlier prototype:

- energy selection,
- simple activity recommendations,
- basic activity completion,
- localStorage-based history.

These files are preserved as development history but have been superseded by the current MVP architecture.