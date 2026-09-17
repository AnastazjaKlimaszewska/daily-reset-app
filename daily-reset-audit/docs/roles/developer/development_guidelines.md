# Development Guidelines

## 1. Development approach

The project follows Spec Driven Development.

A feature should be described in a plan before implementation.

Each feature should remain small and clearly defined.

## 2. Source code

The main application is implemented using:

- Next.js,
- React,
- TypeScript,
- Tailwind CSS.

The current MVP keeps most of the application logic in the main page component because the project is intentionally small.

## 3. Coding conventions

The code should:

- use clear variable names,
- avoid unnecessary complexity,
- keep functions focused on one task,
- use TypeScript types where useful,
- keep UI logic easy to follow.

## 4. Feature workflow

For each functionality:

1. define the feature,
2. create a plan in `/docs/plans`,
3. review the plan,
4. implement only the planned scope,
5. test the functionality,
6. update project documentation,
7. update `implemented_plans.md`,
8. update `implemented_features.md`.

## 5. Scope control

The developer should not add features that are outside the approved plan.

If a new feature is needed, a new plan should be created first.

## 6. Data storage

The application uses localStorage for persistence.

The storage key used by the application is:

`dailyResetHistory`

## 7. Local development

The application can be started locally with:

`npm run dev`

If PowerShell blocks npm scripts on Windows, `npm.cmd run dev` can be used instead.

## 8. Version control

Git is used for version control.

GitHub is used as the remote repository.

Changes should be committed after meaningful development steps.