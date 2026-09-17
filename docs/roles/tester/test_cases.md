# Test Cases

## TC-01 — Dashboard loads

Steps:

1. Open `/`.
2. Wait for locally stored data to load.

Expected result:

Dashboard renders successfully and displays summary sections.

## TC-02 — Complete Daily Check-in

Steps:

1. Open `/check-in`.
2. Select energy.
3. Select mood.
4. Select mental load.
5. Select available time.
6. Submit the check-in.

Expected result:

- the check-in is accepted,
- the state is classified,
- exactly three recommendations are displayed.

## TC-03 — Incomplete check-in

Steps:

1. Open `/check-in`.
2. Leave at least one required input unselected.
3. Attempt to continue.

Expected result:

The incomplete check-in is not processed as a complete reset.

## TC-04 — Recovery classification

Example input:

- energy: low

Expected result:

State is `recovery` according to deterministic classification rules.

## TC-05 — Active classification

Example input:

- energy: high
- mood: good
- mental load not forcing recovery

Expected result:

State is `active` according to implemented rules.

## TC-06 — Balanced classification

Use values that do not satisfy recovery or active rules.

Expected result:

State is `balanced`.

## TC-07 — Recommendation count

Steps:

1. Complete a valid check-in.
2. View recommendations.

Expected result:

Exactly three recommendations are displayed.

## TC-08 — Recommendation selection

Steps:

1. Generate recommendations.
2. Select one recommendation.

Expected result:

The selected recommendation becomes visually identifiable.

## TC-09 — Complete selected action

Steps:

1. Generate recommendations.
2. Select one recommendation.
3. Mark it as completed.

Expected result:

The completed action is saved and linked to its source check-in.

## TC-10 — History displays saved reset

Precondition:

At least one check-in exists.

Steps:

1. Open `/history`.

Expected result:

Saved check-in information is displayed together with its completed action when available.

## TC-11 — History ordering

Precondition:

Multiple check-ins exist.

Expected result:

Newer records are presented before older records.

## TC-12 — Dashboard statistics

Precondition:

Local data exists.

Expected result:

Dashboard correctly displays:

- check-in count,
- completed action count,
- completion rate,
- latest state,
- latest completed action.

## TC-13 — Insights state distribution

Precondition:

Several check-ins exist with different classified states.

Expected result:

State distribution reflects saved check-in data.

## TC-14 — Insights most common state

Precondition:

One classified state occurs more often than the others.

Expected result:

The displayed most common state matches stored data.

## TC-15 — Insights action categories

Precondition:

Completed actions exist.

Expected result:

Completed action categories are summarized correctly.

## TC-16 — Clear local data

Precondition:

Stored data exists.

Steps:

1. Open `/settings`.
2. Choose the clear-data action.
3. Confirm the operation.

Expected result:

Daily Reset local data is removed and success feedback is displayed.

## TC-17 — Cancel clear-data operation

Steps:

1. Open `/settings`.
2. Choose the clear-data action.
3. Cancel the confirmation dialog.

Expected result:

Stored data is not deleted.

## TC-18 — Navigation

Navigate between:

- Dashboard,
- Check-in,
- History,
- Insights,
- Settings.

Expected result:

Each route loads successfully and shared navigation remains available.

## TC-19 — Automated regression suite

Run:

`npx.cmd vitest run`

Expected result:

All automated tests pass.

## TC-20 — Production build

Run:

`npm.cmd run build`

Expected result:

The production build completes without errors.

<!-- FINAL_DOC_OK -->
