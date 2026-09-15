# User Journey

## 1. Entry point

The user opens Daily Reset in a web browser.

The interface immediately presents a short explanation of the purpose of the application and a button to begin the daily check-in.

The user does not need to create an account or configure the application before using it.

## 2. Daily check-in

The user answers a short set of questions about the current situation.

The initial check-in includes:

- energy level,
- mood,
- mental load,
- available time.

The questions should be quick to answer and should not require long text input.

## 3. State classification

After the check-in is completed, the application classifies the current state using deterministic rules.

The classification is based on the submitted values.

The user should receive a simple explanation of the result rather than a medical or psychological diagnosis.

## 4. Recommendation stage

The application displays a small number of micro-actions matched to the current state.

Each recommendation should be:

- short,
- achievable,
- appropriate for the available time,
- appropriate for the current energy level.

The number of recommendations should remain limited to reduce decision effort.

## 5. Action selection

The user selects one recommended action.

The selected action becomes the current activity for the session.

The interface should clearly indicate which action was selected.

## 6. Completion

After completing the activity, the user marks it as done.

The application stores the completion together with the related check-in.

The user receives immediate visual confirmation.

## 7. History

The user can open the history view.

The history displays previous check-ins and completed actions.

The newest entries should appear first.

Each history item should provide enough context to understand:

- when the check-in happened,
- what the user's state was,
- what action was completed.

## 8. Statistics

The user can view a simple statistics section based on locally stored data.

The statistics may include:

- total number of completed actions,
- number of recent check-ins,
- most common energy level,
- completion activity count.

The statistics should remain simple and understandable.

## 9. Returning user journey

When the user returns later, previously saved data is loaded from IndexedDB.

The user can immediately:

- start a new check-in,
- review history,
- review statistics.

No account login is required in the student MVP.

## 10. Empty-state journey

If the user has no saved data:

- history displays an empty-state message,
- statistics explain that data will appear after the first completed check-in,
- the application directs the user toward starting a new check-in.

## 11. Data management journey

The user can choose to clear locally stored application data.

Before deletion, the application should display a clear confirmation.

After deletion:

- history is empty,
- statistics reset,
- the application returns to its initial state.

## 12. Main journey summary

Open application

↓

Start check-in

↓

Select energy, mood, mental load and available time

↓

Submit check-in

↓

State classification

↓

View recommended micro-actions

↓

Select one action

↓

Complete action

↓

Save check-in and completion to IndexedDB

↓

View history and statistics