# Activity Recommendations

## 1. Goal

Show the user a short list of self-care activities based on the selected energy level.

## 2. Scope

The application provides predefined activity suggestions for three energy levels:

- low,
- medium,
- high.

The functionality does not include AI-generated recommendations or external APIs.

## 3. Functional requirements

- The application waits for the user to select an energy level.
- After selection, the application displays three matching activities.
- Low energy should display simple and low-effort activities.
- Medium energy should display moderate-effort activities.
- High energy should display more active or productive activities.
- Changing the energy level should immediately update the suggestions.

## 4. Non-functional requirements

- Suggestions should appear immediately.
- The interface should remain simple and readable.
- No external service should be required.
- The functionality should work in the browser.

## 5. Technical context

Activity suggestions are stored in the frontend as predefined arrays.

The selected energy level is used as a key to choose the correct list of activities.

The feature is implemented using React state and conditional rendering.

## 6. Implementation steps

1. Create predefined activity lists for low, medium and high energy.
2. Read the currently selected energy level from the application state.
3. Display the matching list only after the user selects an energy level.
4. Render each activity as an interactive element.
5. Update the displayed activities when the energy selection changes.

## 7. Acceptance criteria

- No activity list is displayed before an energy level is selected.
- Selecting low displays low-energy activities.
- Selecting medium displays medium-energy activities.
- Selecting high displays high-energy activities.
- Changing the selected energy level changes the displayed suggestions.
- Exactly three activities are shown for each level.

## 8. Tests

### Unit / component tests

- verify that low returns the low-energy activity list,
- verify that medium returns the medium-energy activity list,
- verify that high returns the high-energy activity list,
- verify that changing the energy level updates the visible suggestions.

### Manual tests

- select each energy level and compare the displayed activities,
- switch between levels several times,
- verify that suggestions update immediately.