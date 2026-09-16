# Implemented Features

This document summarizes functionality currently implemented in the Daily Reset MVP.

## 1. Application Shell and Navigation

The application uses a multi-page structure with shared navigation.

Available routes:

- `/` — Dashboard
- `/check-in` — Daily Check-in
- `/history` — Reset History
- `/insights` — Insights
- `/settings` — Settings

The navigation is responsive and highlights the active section.

## 2. Dashboard

The dashboard provides an overview of the user's local Daily Reset data.

It displays:

- total number of check-ins,
- total number of completed actions,
- completion rate,
- latest classified state,
- latest completed action,
- links to the main application features.

## 3. Daily Check-in

Users can describe their current situation using four inputs:

- energy level,
- mood,
- mental load,
- available time.

Available time options:

- 5 minutes,
- 10 minutes,
- 20 minutes.

The check-in is stored locally after submission.

## 4. State Classification

The application classifies each check-in into one of three states:

- recovery,
- balanced,
- active.

Classification is deterministic and rule-based.

No generative AI model is required to classify user input.

## 5. Adaptive Recommendations

After a completed check-in, the application generates exactly three recommendations.

Recommendations depend on:

- classified state,
- available time.

The user can select one recommended action.

## 6. Completed Action Tracking

A selected recommendation can be marked as completed.

The application stores:

- completed activity,
- category,
- related check-in,
- completion timestamp.

## 7. IndexedDB Persistence

Daily Reset uses IndexedDB through Dexie.

The local database stores:

- check-ins,
- completed actions.

The current MVP does not require a remote backend.

## 8. History

The History page displays previous check-ins.

Each history entry includes:

- date and time,
- classified state,
- energy,
- mood,
- mental load,
- available time,
- completed action when available.

## 9. Insights

The Insights page summarizes locally stored data.

It includes:

- total check-ins,
- completed actions,
- completion rate,
- distribution of recovery, balanced and active states,
- most common state,
- completed action categories.

Insights are calculated from saved user data and do not use predictive AI.

## 10. Local Data Management

The Settings page explains how application data is stored.

Users can clear all Daily Reset data from the current browser.

Clearing local data removes:

- check-ins,
- completed actions.

## 11. Automated Tests

The project includes automated tests using Vitest and Testing Library.

Tests cover:

- recommendation logic,
- dashboard,
- check-in flow,
- history,
- insights,
- settings,
- local data operations and user interactions.

The complete test suite passes successfully.

## 12. Production Build

The application successfully passes the Next.js production build.

The project is deployable through Vercel.

## MVP Boundaries

The current MVP intentionally does not implement:

- authentication,
- registration,
- payments,
- cloud synchronization,
- generative AI recommendations.

These exclusions keep the product aligned with the defined MVP scope and course requirements.