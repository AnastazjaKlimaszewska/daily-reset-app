# Statistics

## 1. Goal

Provide the user with a simple summary of their Daily Reset history.

The statistics should help the user quickly understand how often they use the app, which state appears most often and how many recommended actions they complete.

## 2. Scope

The feature includes:

- total number of check-ins,
- total number of completed actions,
- completion rate,
- most common classified state,
- simple statistics displayed in the interface.

The feature does not include:

- charts,
- date filtering,
- weekly or monthly reports,
- prediction,
- AI-generated insights,
- cloud analytics.

## 3. Functional requirements

- The application must calculate the total number of stored check-ins.
- The application must calculate the total number of completed actions.
- The application must calculate completion rate as:

  completed actions / check-ins × 100

- If there are no check-ins, completion rate must be 0%.
- The application must identify the most common classified state:
  - recovery,
  - balanced,
  - active.
- If there is no history, the most common state should not be displayed as a real result.
- Statistics must update when a new check-in is saved.
- Statistics must update when an action is completed.
- Statistics must be calculated from the already loaded local history.

## 4. Non-functional requirements

### UX

Statistics should be easy to understand without explanation.

The interface should show only a few meaningful values.

### Performance

Statistics should be calculated locally without additional database queries beyond the existing history loading.

### Privacy

No statistics data should leave the browser.

### Maintainability

Statistics calculations should be deterministic and easy to test.

## 5. Technical context

The feature uses:

- `historyCheckIns` from `/app/page.tsx`,
- `historyActions` from `/app/page.tsx`,
- `classifiedState` values from the `CheckIn` model.

The statistics are derived from data already loaded from IndexedDB.

## 6. Implementation steps

1. Calculate total check-ins.
2. Calculate total completed actions.
3. Calculate completion rate.
4. Count occurrences of each classified state.
5. Determine the most common state.
6. Add a Statistics section to the interface.
7. Handle empty history.
8. Ensure statistics refresh automatically when history changes.
9. Add automated tests.
10. Update project registers and documentation.

## 7. Acceptance criteria

- Total check-ins are displayed correctly.
- Total completed actions are displayed correctly.
- Completion rate is displayed correctly.
- Completion rate is 0% when there are no check-ins.
- Most common classified state is calculated correctly.
- Empty history does not show a misleading most common state.
- Statistics update after new check-ins and completed actions.
- Automated tests pass.
- Production build passes.

## 8. Tests

### Unit or component tests

- verify statistics for empty history,
- verify total check-ins,
- verify total completed actions,
- verify completion rate,
- verify most common state.

### Manual tests

- create several check-ins,
- complete some but not all actions,
- verify the displayed totals,
- verify the calculated completion rate,
- verify the most common classified state.