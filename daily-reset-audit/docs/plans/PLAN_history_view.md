# History View

## 1. Goal

Allow the user to view previous Daily Reset check-ins together with their completed actions.

## 2. Scope

The feature includes:

- loading previous check-ins from IndexedDB,
- loading completed actions from IndexedDB,
- matching completed actions to their check-ins,
- displaying recent entries in reverse chronological order,
- showing an empty state when no history exists.

The feature does not include:

- editing history entries,
- deleting individual entries,
- filtering by date,
- cloud synchronization,
- pagination.

## 3. Functional requirements

- The application must load stored check-ins from IndexedDB.
- The application must load stored completed actions from IndexedDB.
- History entries must be displayed newest first.
- Each history entry must show:
  - date and time,
  - energy,
  - mood,
  - mental load,
  - available time,
  - classified state.
- If a completed action exists for the check-in, the activity must also be displayed.
- If no completed action exists, the interface should show that no action was completed.
- The history should refresh after a new check-in or completed action is saved.
- If no history exists, an empty-state message must be displayed.

## 4. Non-functional requirements

### UX

History should be easy to scan.

The most recent entries should appear first.

### Performance

History should load without noticeable delay for a normal number of local records.

### Privacy

All history remains stored locally in the browser.

### Maintainability

The UI must use the existing storage functions instead of directly accessing Dexie tables.

## 5. Technical context

The feature uses:

- `getAllCheckIns()` from `/lib/storage.ts`,
- `getAllCompletedActions()` from `/lib/storage.ts`,
- `CheckIn` and `CompletedAction` from `/lib/db.ts`,
- React state in `/app/page.tsx`.

## 6. Implementation steps

1. Add React state for stored check-ins.
2. Add React state for stored completed actions.
3. Create a function that loads both collections from IndexedDB.
4. Load history when the page starts.
5. Reload history after a new check-in is saved.
6. Reload history after an action is completed.
7. Match completed actions to their related check-ins using `checkInId`.
8. Render history entries below the current flow.
9. Add an empty state.
10. Add automated tests.
11. Update project registers and documentation.

## 7. Acceptance criteria

- Previous check-ins are loaded from IndexedDB.
- Completed actions are loaded from IndexedDB.
- History is displayed newest first.
- Each entry shows the stored check-in values.
- Completed actions are matched using `checkInId`.
- Entries without completed actions are handled correctly.
- History updates after new activity.
- Empty history shows a clear message.
- Automated tests pass.
- Production build passes.

## 8. Tests

### Component tests

- verify empty history state,
- verify stored history entries are displayed,
- verify completed activity is displayed with the correct check-in.

### Integration tests

- load stored check-ins and actions,
- verify matching by `checkInId`,
- verify history refresh after completion.

### Manual tests

- create multiple check-ins,
- complete different actions,
- refresh the browser,
- verify that previous data remains visible,
- verify newest entries appear first.