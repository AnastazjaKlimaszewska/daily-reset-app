# Daily Check-In

## 1. Goal

Allow the user to describe their current situation using a short structured check-in.

The check-in provides the input required for state classification and adaptive recommendations.

## 2. Scope

The check-in includes four inputs:

- energy,
- mood,
- mental load,
- available time.

The user must complete all four inputs before submitting the check-in.

The functionality does not include free-text journaling, medical assessment or AI-generated questions.

## 3. Functional requirements

- The application displays an energy question.
- The user can select low, medium or high energy.
- The application displays a mood question.
- The user can select low, neutral or good mood.
- The application displays a mental-load question.
- The user can select low, medium or high mental load.
- The application displays an available-time question.
- The user can select 5, 10 or 20 minutes.
- Only one option can be active in each category.
- The check-in cannot be submitted until all four fields are completed.
- After submission, the application creates a CheckIn object.
- The check-in receives a unique identifier and creation timestamp.
- The application classifies the current state.
- The completed check-in is saved using the IndexedDB data layer.

## 4. Non-functional requirements

### UX

The check-in should be understandable without instructions.

The number of choices should remain small.

The selected options should be visually clear.

### Performance

Selection and submission should respond immediately.

### Privacy

No check-in data should be sent to an external server.

### Accessibility

All choices should use real buttons and remain keyboard accessible.

## 5. Technical context

The feature uses:

- React state,
- TypeScript,
- `classifyState()` from `/lib/recommendations.ts`,
- `saveCheckIn()` from `/lib/storage.ts`,
- the `CheckIn` type from `/lib/db.ts`.

The required fields are:

- energy,
- mood,
- mentalLoad,
- availableTime.

## 6. Implementation steps

1. Create React state for all four check-in values.
2. Build an interface for energy selection.
3. Build an interface for mood selection.
4. Build an interface for mental-load selection.
5. Build an interface for available-time selection.
6. Prevent submission while any field is missing.
7. Create a CheckIn object after submission.
8. Classify the state using the existing classification logic.
9. Save the CheckIn record using the IndexedDB storage layer.
10. Pass the completed check-in to the recommendation stage.
11. Add automated tests.
12. Update project registers and documentation.

## 7. Acceptance criteria

- All four questions are visible.
- The user can select one answer for each question.
- Selected answers are visually highlighted.
- The user cannot submit an incomplete check-in.
- A complete check-in can be submitted.
- The submitted data matches the selected values.
- The application assigns a classified state.
- The check-in is saved in IndexedDB.
- The next recommendation stage appears after submission.
- Automated tests pass.

## 8. Tests

### Component tests

- verify all four check-in sections are displayed,
- verify each option can be selected,
- verify only one option per category is selected,
- verify incomplete check-in cannot be submitted,
- verify complete check-in can be submitted.

### Integration tests

- complete all four fields,
- submit the check-in,
- verify state classification,
- verify the CheckIn record is passed to the persistence layer.

### Manual tests

- test every energy value,
- test every mood value,
- test every mental-load value,
- test all available-time values,
- verify the interface on desktop and mobile widths.