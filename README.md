# Daily Reset

Daily Reset is a small self-care web application that helps users choose one realistic next action based on their current state.

The project was developed as a Spec Driven Development exercise for the course "Tworzenie aplikacji internetowych".

## Live application

https://daily-reset-app-ten.vercel.app/

## Product idea

Daily Reset asks the user for four short inputs:

- energy level,
- mood,
- mental load,
- available time.

Based on those inputs, the application classifies the current state as:

- recovery,
- balanced,
- active.

It then returns exactly three deterministic recommendations adjusted to the user's state and available time.

The user can choose one action, mark it as completed, and review previous resets later.

## Application structure

The current MVP uses a multi-page structure:

- `/` — Dashboard
- `/check-in` — Daily Check-in
- `/history` — Reset History
- `/insights` — Insights
- `/settings` — Settings

A shared responsive navigation component connects all application views.

## Main features

- Daily check-in
- Deterministic state classification
- Adaptive recommendations
- Completed action tracking
- IndexedDB persistence
- Reset history
- Statistics and insights
- Local data management
- Responsive multi-page interface
- Automated tests

## Technology stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- IndexedDB
- Dexie
- Vitest
- Testing Library
- Vercel

## Local data

The current MVP stores data locally in the browser using IndexedDB and Dexie.

Stored data includes:

- check-ins,
- classified states,
- completed actions,
- timestamps.

The application does not currently require:

- authentication,
- registration,
- payments,
- remote backend,
- cloud synchronization.

## Recommendation logic

Recommendation generation is deterministic.

The logic uses:

- energy,
- mood,
- mental load,
- available time.

The system does not use generative AI to create recommendations.

This keeps the MVP:

- predictable,
- testable,
- transparent,
- inexpensive to run.

## Spec Driven Development

The project follows a Spec Driven Development workflow.

Implementation plans are stored in:

`docs/plans/`

Each plan defines:

- goal,
- scope,
- functional requirements,
- non-functional requirements,
- technical context,
- implementation steps,
- acceptance criteria,
- tests.

The implementation workflow is:

1. Define the requirement.
2. Create a plan.
3. Review the plan.
4. Implement one small feature.
5. Run tests.
6. Update documentation.
7. Commit the completed change.

## Documentation

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
- technical constraints,
- resource analysis,
- technology stack audit.

### Plans

`docs/plans/`

Contains implementation plans for individual features.

### Roles

`docs/roles/`

Contains documentation for:

- Product Owner,
- UX/UI,
- Architect,
- Developer,
- Tester.

## AI-assisted development workflow

The repository also contains reusable AI workflows in:

`.kilocode/workflows/`

Available workflows include:

- planning,
- implementation.

The purpose of these workflows is to help an AI coding agent follow the project's SDD process instead of implementing features without a documented plan.

## Testing

Run all automated tests with:

```bash
npx vitest run