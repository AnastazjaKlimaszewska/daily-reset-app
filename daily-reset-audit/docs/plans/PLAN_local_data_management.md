# Local Data Management

## 1. Goal

Allow the user to clear all locally stored Daily Reset data from the browser.

## 2. Scope

The feature includes:

- clearing all stored check-ins,
- clearing all stored completed actions,
- requiring explicit confirmation before deleting data,
- refreshing the interface after deletion,
- resetting history and statistics after deletion.

The feature does not include:

- deleting individual history entries,
- exporting data,
- restoring deleted data,
- cloud synchronization.

## 3. Functional requirements

- The interface must provide a clear option to delete all local data.
- The user must explicitly confirm the destructive action.
- If the user cancels, no data must be deleted.
- If the user confirms, all check-ins must be removed from IndexedDB.
- All completed actions must also be removed.
- History must immediately become empty.
- Statistics must immediately reset.
- The current recommendation flow should remain usable after clearing data.

## 4. Non-functional requirements

### UX

The action must clearly communicate that deletion is permanent.

The destructive action should not be triggered accidentally.

### Privacy

All deletion happens locally in the browser.

### Maintainability

The UI must use the existing `clearDailyResetData()` storage function.

## 5. Technical context

The feature uses:

- `clearDailyResetData()` from `/lib/storage.ts`,
- `loadHistory()` from `/app/page.tsx`,
- existing history and statistics state.

## 6. Implementation steps

1. Import `clearDailyResetData()` into the page component.
2. Add a clear-data handler.
3. Require browser confirmation before deletion.
4. Clear IndexedDB after confirmation.
5. Reload history.
6. Ensure statistics reset automatically.
7. Add a destructive data-management section to the interface.
8. Add automated tests.
9. Update project registers and documentation.

## 7. Acceptance criteria

- A clear-data button is visible.
- Clicking it requires confirmation.
- Canceling confirmation preserves data.
- Confirming removes all stored check-ins.
- Confirming removes all completed actions.
- History becomes empty.
- Statistics reset to zero.
- The application still works after clearing data.
- Automated tests pass.
- Production build passes.

## 8. Tests

### Component tests

- verify the clear-data button is visible,
- verify cancel does not call the storage function,
- verify confirmation calls `clearDailyResetData()`,
- verify history is reloaded after deletion.

### Manual tests

- create multiple check-ins,
- complete at least one action,
- clear all local data,
- verify history disappears,
- verify statistics reset,
- create a new check-in after clearing data.