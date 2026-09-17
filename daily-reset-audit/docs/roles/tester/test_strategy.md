# Test Strategy

## 1. Testing goal

The goal of testing is to verify that the main Daily Reset user flow works correctly and remains consistent with the approved feature plans.

## 2. Main areas to test

The following functionalities should be tested:

- energy level selection,
- activity recommendations,
- activity completion,
- history storage.

## 3. Test approach

The MVP uses mainly manual testing.

The application should be checked after each implemented feature.

The tests should focus on expected user behaviour and simple edge cases.

## 4. Functional test scenarios

### Energy selection

The tester should verify that:

- low energy can be selected,
- medium energy can be selected,
- high energy can be selected,
- only one energy level is active at a time,
- changing the level updates the interface.

### Activity recommendations

The tester should verify that:

- no suggestions are shown before energy selection,
- low energy shows low-effort activities,
- medium energy shows medium-effort activities,
- high energy shows higher-effort activities,
- changing energy changes the suggestions.

### Activity completion

The tester should verify that:

- an activity can be marked as completed,
- the selected activity is visually highlighted,
- the confirmation state is visible,
- selecting another activity changes the completed activity,
- changing the energy level resets the current completion state.

### History

The tester should verify that:

- completing an activity creates a history entry,
- the entry includes date, energy level and activity,
- the newest activity appears first,
- history remains visible after page refresh.

## 5. Edge cases

The tester should also check:

- changing energy level before completing an activity,
- switching energy levels several times,
- completing several activities one after another,
- refreshing the page with saved history,
- opening the application with no saved history.

## 6. Acceptance

The MVP can be considered ready when all main user flows work without errors and the implemented behaviour matches the approved plans.