# Implemented Plans

This file tracks implementation plans that have been completed in the Daily Reset project.

## Completed plans

- [x] PLAN_energy_selection.md
- [x] PLAN_activity_recommendations.md
- [x] PLAN_activity_completion.md
- [x] PLAN_history_storage.md
- [x] PLAN_indexeddb_storage.md
- [x] PLAN_daily_checkin.md
- [x] PLAN_state_classification_and_recommendations.md
- [x] PLAN_completed_action_storage.md
- [x] PLAN_history_view.md
- [x] PLAN_statistics.md
- [x] PLAN_local_data_management.md
- [x] PLAN_application_shell_and_navigation.md
- [x] PLAN_dashboard_overview.md

## Current implementation status

The current MVP includes:

- multi-page application structure,
- shared navigation,
- Dashboard,
- Daily Check-in,
- deterministic state classification,
- adaptive recommendations,
- completed action tracking,
- IndexedDB persistence with Dexie,
- History,
- Insights and statistics,
- local data management,
- automated tests,
- production-ready build.

## Spec Driven Development workflow

Each implemented functionality is connected to a documented implementation plan stored in:

`docs/plans/`

The project follows the following SDD process:

1. Define the requirement.
2. Create an implementation plan.
3. Review scope and acceptance criteria.
4. Implement the functionality.
5. Run automated tests.
6. Verify the production build where appropriate.
7. Update documentation.
8. Update implementation registries.
9. Commit the completed change.

The implementation plan acts as a contract between the documented requirement and the code.

## Repository source of truth

The repository is the source of truth for:

- requirements,
- plans,
- architecture,
- source code,
- tests,
- implementation status,
- project documentation.

## Historical plans

Some early plans describe smaller prototype stages of the product.

These plans remain in the repository as part of the development history.

The current expanded MVP is primarily represented by the newer plans covering:

- full Daily Check-in,
- deterministic state classification,
- recommendations,
- IndexedDB persistence,
- completed actions,
- History,
- Insights,
- local data management,
- application shell and navigation,
- Dashboard.