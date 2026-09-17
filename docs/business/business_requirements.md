# Business Requirements

## 1. Product name

Daily Reset

## 2. Product purpose

Daily Reset helps users choose one realistic next action when they feel overloaded, tired, unfocused or unsure what to do next.

The application reduces decision effort by collecting a small amount of contextual information and generating a short set of suitable micro-actions.

## 3. User problem

When users have limited energy or high mental load, choosing what to do next can itself become difficult.

Large productivity systems may require too much setup or planning for these moments.

Daily Reset should provide a faster alternative.

## 4. Core value proposition

The user completes a short check-in and receives exactly three realistic recommendations adapted to their current situation.

The application should help the user move from:

uncertainty

to:

one manageable next action.

## 5. Core user inputs

The application must collect:

- energy,
- mood,
- mental load,
- available time.

Available time options:

- 5 minutes,
- 10 minutes,
- 20 minutes.

## 6. State classification

The system must classify a completed check-in as one of:

- recovery,
- balanced,
- active.

Classification must be deterministic.

## 7. Recommendations

The system must return exactly three recommendations after a valid check-in.

Recommendations must depend on:

- classified state,
- available time.

The recommendation process must not depend on an external generative AI service.

## 8. Action completion

The user must be able to:

- select one recommendation,
- mark the selected recommendation as completed.

A completed action should be connected to the check-in that generated it.

## 9. Data persistence

The application must preserve:

- check-ins,
- completed actions.

Persistence should work locally in the browser.

The current implementation uses IndexedDB through Dexie.

## 10. History

The user must be able to view previous resets.

History should display relevant information including:

- classified state,
- original check-in values,
- date,
- completed action when available.

## 11. Dashboard

The application should provide a Dashboard summarizing useful information such as:

- total check-ins,
- total completed actions,
- completion rate,
- latest classified state,
- latest completed action.

## 12. Insights

The application should provide simple descriptive insights based on local data.

These include:

- number of check-ins,
- number of completed actions,
- completion rate,
- state distribution,
- most common state,
- action categories.

## 13. Settings

The user should be informed that application data is stored locally.

The user must be able to clear all Daily Reset data.

Destructive deletion should require confirmation.

## 14. Usability requirements

The application should:

- require minimal setup,
- avoid long questionnaires,
- provide clear choices,
- work on common screen sizes,
- provide understandable feedback,
- keep the main flow short.

## 15. Privacy and infrastructure

The current MVP does not require personal accounts.

Core user data remains in the browser.

No remote user database is required.

## 16. MVP exclusions

The MVP intentionally excludes:

- login,
- registration,
- payments,
- cloud synchronization,
- social features,
- remote recommendation services,
- generative AI recommendations.

## 17. Business success criteria

The MVP is considered successful if a user can complete the full flow:

1. open Daily Reset,
2. complete the four-part check-in,
3. receive a state classification,
4. receive three recommendations,
5. select and complete one action,
6. return later and view the reset in History,
7. view basic patterns in Insights.

## 18. Product principle

Daily Reset should remain a small decision-support tool rather than becoming a complex productivity platform.

The product should reduce cognitive load rather than create additional planning work.