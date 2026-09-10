# History Storage

## 1. Goal

Store completed activities so that the user can see recent activity history even after refreshing the page.

## 2. Scope

The application stores completed activity entries in the browser using localStorage.

Each history entry contains:

- date,
- selected energy level,
- completed activity.

The current MVP stores data only on the user's device.

The functionality does not include cloud synchronization, user accounts or an external database.

## 3. Functional requirements

- A history entry is created after an activity is completed.
- Each entry contains the completion date.
- Each entry contains the selected energy level.
- Each entry contains the completed activity.
- The newest entries appear first.
- The application displays recent history.
- The history remains available after the page is refreshed.
- The application loads saved history when the page starts.

## 4. Non-functional requirements

- Saving data should not noticeably slow down the interface.
- The history should be readable and simple.
- No external service should be required.
- Data should remain local to the browser.

## 5. Technical context

Browser localStorage is used for persistence.

The history is stored as JSON under the key:

`dailyResetHistory`

React state stores the history while the application is running.

When the application loads, saved data is read from localStorage and converted back into JavaScript objects.

## 6. Implementation steps

1. Define the structure of a history entry.
2. Create React state for history.
3. Read existing history from localStorage after the application loads.
4. Create a new history entry after an activity is completed.
5. Add the new entry to the beginning of the history array.
6. Save the updated array to localStorage.
7. Display recent entries in the interface.

## 7. Acceptance criteria

- Completing an activity creates a history entry.
- The entry contains the activity name.
- The entry contains the selected energy level.
- The entry contains the date.
- The newest entry appears first.
- The history is visible in the application.
- The history remains after refreshing the page.

## 8. Tests

### Unit / component tests

- verify that a new history entry contains the required fields,
- verify that new entries are added before older entries,
- verify that saved JSON can be read from localStorage,
- verify that saved history is restored after application initialization.

### Manual tests

- complete an activity,
- check that it appears in history,
- complete another activity and verify that it appears first,
- refresh the page,
- verify that the history is still visible.