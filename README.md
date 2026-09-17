# Daily Reset

Daily Reset is a lightweight self-care web application that helps users choose one realistic next action based on their current state.

The project was developed as a Spec Driven Development exercise for the course **Tworzenie aplikacji internetowych**.

## Live application

https://daily-reset-app-ten.vercel.app/

## Product idea

Daily Reset is designed for moments when a user feels overloaded, unfocused or unsure what to do next.

Instead of asking the user to build a large routine or complete a long questionnaire, the application collects four short inputs:

- energy level,
- mood,
- mental load,
- available time.

Based on those inputs, the application classifies the user's current state as:

- recovery,
- balanced,
- active.

It then returns exactly three deterministic micro-actions adjusted to the user's current state and available time.

The user can select one action, mark it as completed and review previous resets later.

## Main user flow

The core flow is:

1. Open Daily Reset.
2. Complete a short check-in.
3. Submit energy, mood, mental load and available time.
4. Receive a classified state.
5. Receive three recommendations.
6. Select one recommendation.
7. Mark the action as completed.
8. Review the saved reset in History.
9. Review descriptive statistics in Insights.

## Application structure

The MVP uses a multi-page structure.

Available routes:

- `/` — Dashboard
- `/check-in` — Daily Check-in
- `/history` — Reset History
- `/insights` — Insights
- `/settings` — Settings

A shared responsive navigation component connects all views.

## Main features

### Dashboard

Provides a quick overview of local application data:

- total check-ins,
- completed actions,
- completion rate,
- latest classified state,
- latest completed action.

### Daily Check-in

Collects:

- energy,
- mood,
- mental load,
- available time.

Available time options are:

- 5 minutes,
- 10 minutes,
- 20 minutes.

### State classification

Each check-in is classified into one of three deterministic states:

- recovery,
- balanced,
- active.

### Adaptive recommendations

The system returns exactly three recommendations based on:

- classified state,
- available time.

### Completed action tracking

A selected recommendation can be marked as completed and linked to the check-in that generated it.

### History

The History page displays previously saved check-ins and related completed actions.

### Insights

The Insights page summarizes locally stored data, including:

- total check-ins,
- completed actions,
- completion rate,
- state distribution,
- most common state,
- completed action categories.

### Settings

The Settings page explains local data storage and allows the user to clear all application data stored in the browser.

## Technology stack

The project uses:

- Next.js
- React
- TypeScript
- Tailwind CSS
- IndexedDB
- Dexie
- Vitest
- Testing Library
- jsdom
- Vercel

## Local-first persistence

Daily Reset stores application data locally in the browser using IndexedDB.

Dexie is used as the IndexedDB abstraction layer.

The current database stores:

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

The current MVP does not require:

- authentication,
- registration,
- payments,
- cloud synchronization,
- remote database,
- external backend.

## Recommendation logic

Recommendation generation is deterministic.

The classification and recommendation logic is implemented in:

`lib/recommendations.ts`

The system does not use a generative AI model to create recommendations.

This keeps the core logic:

- predictable,
- transparent,
- testable,
- inexpensive to run.

## Spec Driven Development

The project follows a Spec Driven Development workflow.

Implementation plans are stored in:

`docs/plans/`

Each implementation plan defines:

- Goal
- Scope
- Functional requirements
- Non-functional requirements
- Technical context
- Implementation steps
- Acceptance criteria
- Tests

The development workflow is:

1. Define the requirement.
2. Create an implementation plan.
3. Review scope and acceptance criteria.
4. Implement one small functionality.
5. Run automated tests.
6. Update documentation.
7. Commit the completed change.

The repository is treated as the source of truth.

## Documentation structure

Project documentation is stored in:

`docs/`

### Architecture

`docs/architecture/`

Contains:

- system overview,
- architecture decision records,
- data model.

### Business

`docs/business/`

Contains:

- business requirements,
- product scope,
- competitor audit,
- ICP/persona,
- MVP scoping,
- user journey,
- GTM strategy,
- kill-the-idea summary.

### Technical documentation

`docs/tech/`

Contains:

- technology stack,
- technology stack audit,
- resource analysis.

### Implementation plans

`docs/plans/`

Contains feature-level implementation plans used during development.

### Project roles

`docs/roles/`

Contains documentation for:

- Product Owner,
- UX/UI,
- Architect,
- Developer,
- Tester.

## AI-assisted development workflow

Reusable AI development workflows are stored in:

`.kilocode/workflows/`

The project includes workflows for:

- planning,
- implementation.

Their purpose is to make an AI coding agent follow the documented SDD process instead of implementing features without a specification.

## Testing

Automated tests use:

- Vitest,
- Testing Library,
- jsdom.

The test suite covers:

- state classification,
- recommendation logic,
- Dashboard,
- Daily Check-in,
- completed action flow,
- History,
- Insights,
- Settings.

Run tests with:

```bash
npx vitest run