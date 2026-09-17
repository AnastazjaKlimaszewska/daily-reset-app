# Plan Workflow

## Purpose

Create a complete Spec Driven Development plan for one small feature before implementation.

## Input

A short description of one feature.

## Instructions

1. Read the existing project documentation in `/docs`.
2. Check whether the requested feature is already covered by an existing plan.
3. Keep the feature small and focused.
4. Do not include unrelated functionality.
5. Create a new file in `/docs/plans` using the format:

`PLAN_<feature_name>.md`

6. The plan must contain the following sections:

# Feature name

## 1. Goal

Describe the business purpose of the feature.

## 2. Scope

Describe what is included and what is excluded.

## 3. Functional requirements

List the expected behaviour.

## 4. Non-functional requirements

Describe UX, performance, security or technical constraints.

## 5. Technical context

Describe relevant components, data and application state.

## 6. Implementation steps

Provide clear implementation steps.

## 7. Acceptance criteria

Define conditions that must be true for the feature to be accepted.

## 8. Tests

Describe unit, component or manual tests.

7. Do not implement the feature during the plan workflow.
8. Do not modify unrelated files.

## Output

A complete `/docs/plans/PLAN_<feature_name>.md` file ready for review.