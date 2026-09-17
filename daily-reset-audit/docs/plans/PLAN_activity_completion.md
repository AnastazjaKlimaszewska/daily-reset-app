# Activity Completion

## 1. Goal

Allow the user to mark one suggested activity as completed.

## 2. Scope

The user can select one activity from the currently displayed suggestions and mark it as completed.

Only one activity is treated as completed at a time in the current session.

The functionality does not include multiple simultaneous completions, streaks or scoring.

## 3. Functional requirements

- The user can click one suggested activity.
- The selected activity is marked as completed.
- The completed activity is visually highlighted.
- A confirmation message is displayed.
- Selecting another activity changes the completed selection.
- Changing the energy level resets the current completed activity.

## 4. Non-functional requirements

- The interaction should be immediate.
- The completed state should be clearly visible.
- The interface should remain simple and readable.
- The feature should not require an external service.

## 5. Technical context

React state is used to store the currently completed activity.

The state contains either the activity name or a null value when no activity is selected.

The completion action is triggered by clicking an activity button.

## 6. Implementation steps

1. Create a state variable for the completed activity.
2. Add a click handler to each activity.
3. Save the selected activity in the state.
4. Apply different styling to the completed activity.
5. Display a confirmation message.
6. Reset the completed activity when the energy level changes.

## 7. Acceptance criteria

- The user can mark an activity as completed.
- The completed activity is visually highlighted.
- The application displays a completion confirmation.
- Only one activity is highlighted at a time.
- Selecting another activity changes the completed activity.
- Changing the energy level clears the current completion state.

## 8. Tests

### Unit / component tests

- verify that clicking an activity stores it as completed,
- verify that selecting another activity replaces the previous selection,
- verify that changing the energy level resets the completed activity,
- verify that the confirmation message appears after completion.

### Manual tests

- select an energy level,
- click one activity,
- check the visual completed state,
- click another activity,
- change the energy level and verify that the completed state is reset.