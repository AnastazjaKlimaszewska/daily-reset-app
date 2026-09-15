# IndexedDB Storage

## 1. Goal

Replace the current localStorage persistence with a structured IndexedDB database using Dexie.js.

The new storage layer should support the expanded Daily Reset MVP and store structured check-in and completed-action data.

## 2. Scope

The implementation includes:

- installing Dexie.js,
- creating the local IndexedDB database,
- defining `checkIns` and `completedActions` tables,
- creating TypeScript types for stored records,
- adding functions for saving and reading records,
- replacing the current localStorage history persistence.

The implementation does not include:

- authentication,
- cloud database,
- synchronization between devices,
- external backend,
- user accounts.

## 3. Functional requirements

- The application must create a local IndexedDB database.
- The database must contain a `checkIns` table.
- The database must contain a `completedActions` table.
- A check-in record must be stored after the user completes the check-in.
- A completed action must be connected to its check-in using `checkInId`.
- Stored data must remain available after page refresh.
- The application must be able to read saved check-ins.
- The application must be able to read saved completed actions.
- The user must be able to clear all Daily Reset local data.

## 4. Non-functional requirements

### Performance

Database operations should not noticeably block the user interface.

### Security and privacy

Data remains stored locally in the user's browser.

No check-in information is sent to an external server.

### UX

Storage operations should happen automatically without requiring technical interaction from the user.

### Maintainability

Database access should be separated from UI components.

The implementation should avoid direct IndexedDB operations inside presentation components.

## 5. Technical context

Technology:

- Dexie.js,
- IndexedDB,
- TypeScript,
- React,
- Next.js.

The data model is documented in:

`/docs/architecture/data_model.md`

The architectural decision is documented in:

`/docs/architecture/adr_003.md`

Required entities:

### CheckIn

- id
- createdAt
- energy
- mood
- mentalLoad
- availableTime
- classifiedState

### CompletedAction

- id
- checkInId
- activity
- category
- completedAt

## 6. Implementation steps

1. Install the Dexie package.
2. Create a dedicated database module.
3. Define TypeScript types for `CheckIn` and `CompletedAction`.
4. Create the Dexie database.
5. Define the `checkIns` and `completedActions` schema.
6. Add a function for saving a check-in.
7. Add a function for saving a completed action.
8. Add functions for reading check-ins and completed actions.
9. Add a function for clearing all Daily Reset data.
10. Replace localStorage persistence with the new data layer.
11. Verify that data remains after page refresh.
12. Add automated tests for the data layer.
13. Update `implemented_plans.md`.
14. Update `implemented_features.md`.

## 7. Acceptance criteria

- Dexie.js is installed.
- The application creates the Daily Reset IndexedDB database.
- The database contains both required tables.
- A check-in can be saved.
- A completed action can be saved.
- The relationship between a check-in and completed action is preserved.
- Stored records can be retrieved.
- Data remains after refreshing the application.
- All locally stored application data can be cleared.
- No localStorage persistence is used for the final history implementation.
- Automated storage tests pass.
- The application builds successfully.

## 8. Tests

### Unit tests

- verify creation of a CheckIn record,
- verify creation of a CompletedAction record,
- verify the `checkInId` relationship,
- verify records can be retrieved,
- verify the clear-data function removes stored records.

### Integration tests

- complete a check-in,
- save a recommended action,
- reload the data layer,
- verify that stored data is available.

### Manual tests

- create data in the application,
- refresh the browser,
- confirm that history remains visible,
- clear application data,
- confirm that history becomes empty.