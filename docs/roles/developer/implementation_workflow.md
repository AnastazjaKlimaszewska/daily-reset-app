# Implementation Workflow

## Purpose

This file defines the Daily Reset implementation process using Spec Driven Development.

The repository is the source of truth for requirements, plans, implementation, tests and documentation.

## Process

Each substantial feature should follow these stages:

1. Requirement definition.
2. Implementation plan.
3. Scope review.
4. Implementation.
5. Automated tests.
6. Production build verification where appropriate.
7. Documentation update.
8. Implementation registry update.
9. Git commit.

## Requirement definition

Before implementation, define:

- user need,
- expected behavior,
- scope,
- exclusions.

## Implementation plan

Create a plan in `docs/plans/`.

The plan should include:

- Goal
- Scope
- Functional requirements
- Non-functional requirements
- Technical context
- Implementation steps
- Acceptance criteria
- Tests

The plan acts as the implementation contract.

## Review

Before coding, verify that:

- the requirement is understandable,
- the feature is small enough,
- dependencies are known,
- acceptance criteria are testable,
- the feature fits the MVP scope.

## Implementation

Implement the feature in the smallest reasonable step.

Use the existing architecture and conventions.

Do not introduce unrelated functionality.

## Automated testing

Run the full suite with:

`npx.cmd vitest run`

If tests fail, the feature should not be considered complete.

## Production build

For significant changes, run:

`npm.cmd run build`

The build should complete without errors.

## Documentation update

Update documentation when behavior, architecture or scope changes.

Relevant locations may include:

- `docs/architecture/`
- `docs/business/`
- `docs/tech/`
- `docs/roles/`
- `README.md`

## Implementation registry

When a feature or plan is completed, update:

- `implemented_features.md`
- `implemented_plans.md`

## Version control

Commit the completed change to Git.

The commit message should clearly describe the change.

## Implementation rule

No substantial feature should be implemented without a corresponding documented plan.

## Current Daily Reset flow

Requirement

↓

Plan

↓

Implementation

↓

Automated tests

↓

Production build

↓

Documentation update

↓

Implementation registry update

↓

Git commit

## Current MVP scope

The current MVP includes:

- Dashboard,
- Daily Check-in,
- state classification,
- recommendations,
- completed action tracking,
- IndexedDB,
- History,
- Insights,
- Settings.

Outside current scope:

- login,
- registration,
- payments,
- remote backend,
- cloud synchronization,
- generative AI.

<!-- FINAL_DOC_OK -->
