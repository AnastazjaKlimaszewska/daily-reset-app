# Product Vision

## Product

Daily Reset is a lightweight self-care and decision-support web application that helps users choose one realistic next action based on their current state.

The application is designed for moments when a user feels tired, overwhelmed, unfocused or unsure what to do next.

## Problem

People often know that they should do something useful for themselves, but choosing what to do can create additional mental effort.

This problem becomes stronger when the user has:

- low energy,
- low mood,
- high mental load,
- limited available time.

Daily Reset reduces decision effort by collecting a small amount of contextual information and returning a small set of suitable micro-actions.

## Target user

The target user is a person who wants quick support in choosing a small next action without:

- creating an account,
- configuring a complex productivity system,
- planning a full routine,
- using a long questionnaire.

The application should be useful during short moments of indecision or overload.

## Product value

The main value of Daily Reset is reducing unnecessary decision-making.

The user only needs to:

1. describe their current state,
2. select available time,
3. receive three recommendations,
4. choose one realistic action,
5. mark it as completed.

The product prioritizes clarity and immediate usefulness over large numbers of features.

## Core inputs

The Daily Check-in collects:

- energy level,
- mood,
- mental load,
- available time.

Available time is limited to:

- 5 minutes,
- 10 minutes,
- 20 minutes.

## State model

The application classifies each check-in into one of three states:

- recovery,
- balanced,
- active.

Classification is deterministic.

## Recommendation model

After classification, the application returns exactly three recommendations.

Recommendations depend on:

- classified state,
- available time.

The application does not use generative AI to create recommendations.

## Current MVP priorities

The current MVP focuses on a complete user journey:

check-in → classification → recommendations → action completion → history → insights.

The main priorities are:

- short check-in,
- understandable state classification,
- limited number of recommendations,
- simple action completion,
- local data persistence,
- understandable history,
- basic descriptive insights.

## Current MVP features

The MVP includes:

- Dashboard,
- Daily Check-in,
- deterministic state classification,
- adaptive recommendations,
- action completion tracking,
- IndexedDB persistence,
- History,
- Insights,
- Settings,
- local data deletion.

## Product boundaries

The current MVP intentionally excludes:

- login,
- registration,
- payments,
- cloud synchronization,
- remote database,
- social features,
- notifications,
- generative AI recommendations.

These boundaries prevent the MVP from becoming unnecessarily complex.

## Future possibilities

Possible future development may include:

- optional user accounts,
- synchronization between devices,
- reminders,
- configurable recommendation libraries,
- richer statistics,
- personalization,
- additional check-in dimensions.

These features are outside the current MVP scope.