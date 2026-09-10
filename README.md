# Daily Reset

Daily Reset is a simple self-care web application that helps users choose a small activity based on their current energy level.

The project was created using a Spec Driven Development approach. Each functionality is described in a separate plan before implementation, and the repository contains documentation for product, UX/UI, architecture, development and testing.

## Live application

Deployment link:

To be added after deployment.

## Main features

- energy level selection,
- activity recommendations,
- activity completion,
- local history storage,
- persistence after page refresh.

## How it works

The user selects one of three energy levels:

- Low
- Medium
- High

The application then displays three activities matched to the selected energy level.

The user can select one activity and mark it as completed.

Completed activities are stored in browser localStorage and displayed in recent history.

## Technology stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- localStorage
- Git
- GitHub

## Project structure

The project follows the required Spec Driven Development documentation structure.

Documentation is available in:

`/docs/architecture`

`/docs/business`

`/docs/tech`

`/docs/plans`

`/docs/roles`

The repository also contains:

`implemented_plans.md`

`implemented_features.md`

## Implemented plans

- PLAN_energy_selection.md
- PLAN_activity_recommendations.md
- PLAN_activity_completion.md
- PLAN_history_storage.md

## Local development

Install dependencies:

```bash
npm install