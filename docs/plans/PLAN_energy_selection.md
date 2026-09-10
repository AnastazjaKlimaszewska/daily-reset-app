# Energy Level Selection

## 1. Goal

Allow the user to select their current energy level before receiving activity suggestions.

## 2. Scope

The user can select one of three levels:

- low,
- medium,
- high.

Only one energy level can be active at a time.

The functionality does not include automatic mood detection or health assessment.

## 3. Functional requirements

- The application displays three energy level options.
- The user can select one option.
- The selected option is visually highlighted.
- Changing the selected energy level updates the application state.
- Selecting another energy level replaces the previous selection.

## 4. Non-functional requirements

- The interaction should be immediate.
- The options should be easy to understand.
- The interface should work on desktop and mobile screens.
- The feature should not require external services.

## 5. Technical context

The functionality is implemented in the main React component.

React state is used to store the selected energy level.

The selected value can be:

- low,
- medium,
- high.

## 6. Implementation steps

1. Create a state variable for the selected energy level.
2. Display three buttons representing the available levels.
3. Add click handlers to each button.
4. Update the state after the user selects a level.
5. Apply different styling to the currently selected option.
6. Reset the selected activity when the energy level changes.

## 7. Acceptance criteria

- The user can select low energy.
- The user can select medium energy.
- The user can select high energy.
- Only one level is selected at a time.
- The selected option is visually different from the others.
- The user can change their selection.

## 8. Tests

### Unit / component tests

- verify that selecting low updates the state to low,
- verify that selecting medium updates the state to medium,
- verify that selecting high updates the state to high,
- verify that changing the selection replaces the previous value.

### Manual tests

- click each energy level and verify the visual state,
- change between energy levels several times,
- check the interface on different screen sizes.