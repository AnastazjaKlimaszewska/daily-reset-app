# Completed Action Storage

## 1. Goal

Allow the user to select one recommended micro-action, mark it as completed and store the completed action in IndexedDB.

The completed action must remain linked to the check-in that generated the recommendation.

## 2. Scope

The feature includes:

- selecting one recommendation,
- visually highlighting the selected recommendation,
- marking the selected recommendation as completed,
- creating a CompletedAction record,
- storing the record in IndexedDB,
- linking the action to the current CheckIn using checkInId,
- showing confirmation after successful completion.

The feature does not include:

- multiple completed actions for one check-in,
- editing completed actions,
- deleting individual actions,
- cloud synchronization,
- social sharing.

## 3. Functional requirements

- The user must see the generated recommendations after completing a check-in.
- The user can select one recommendation.
- Only one recommendation can be selected at a time.
- The selected recommendation must be visually highlighted.
- A completion button must remain disabled until a recommendation is selected.
- After completion, a CompletedAction record must be created.
- The record must contain:
  - id,
  - checkInId,
  - activity,
  - category,
  - completedAt.
- The CompletedAction must be saved using the existing Dexie storage layer.
- The record must remain linked to the current CheckIn.
- The interface must display confirmation after successful storage.

## 4. Non-functional requirements

### UX

The user should clearly understand which recommendation is selected.

Completion should require one explicit action.

The success state should be visible immediately.

### Performance

Saving a completed action should not noticeably delay the interface.

### Privacy

The completed action must remain in local browser storage.

### Maintainability

Persistence logic must use the existing storage module instead of direct database calls from the UI.

## 5. Technical context

The feature uses:

- `CompletedAction` from `/lib/db.ts`,
- `saveCompletedAction()` from `/lib/storage.ts`,
- recommendation data from `/lib/recommendations.ts`,
- the current CheckIn identifier created during the daily check-in flow.

The UI is implemented in `/app/page.tsx`.

## 6. Implementation steps

1. Store the submitted CheckIn object in React state.
2. Add state for the selected recommendation.
3. Make recommendations selectable.
4. Visually highlight the selected recommendation.
5. Add a completion button.
6. Disable completion until a recommendation is selected.
7. Create a CompletedAction object after completion.
8. Use the current CheckIn id as checkInId.
9. Save the CompletedAction using `saveCompletedAction()`.
10. Show completion confirmation.
11. Prevent accidental duplicate completion for the same session.
12. Add automated tests.
13. Update project registers and documentation.

## 7. Acceptance criteria

- The user can select one recommendation.
- Only one recommendation is selected at a time.
- The selected recommendation is visually highlighted.
- The completion button is disabled before selection.
- The completion button becomes available after selection.
- Completing the action creates a CompletedAction record.
- The record contains the correct checkInId.
- The record contains activity, category and completedAt.
- The record is stored in IndexedDB.
- The interface confirms successful completion.
- Duplicate completion is prevented during the same session.
- Automated tests pass.
- The application builds successfully.

## 8. Tests

### Component tests

- verify recommendation selection,
- verify only one recommendation can be selected,
- verify completion button state,
- verify confirmation appears after completion.

### Integration tests

- submit a complete check-in,
- select a recommendation,
- complete the action,
- verify that saveCompletedAction receives the correct data,
- verify that the action contains the current checkInId.

### Manual tests

- complete the full check-in flow,
- select each recommendation,
- complete one action,
- confirm that completion feedback appears,
- refresh the application and verify the stored record remains available.