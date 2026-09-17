# ADR 002: Use Next.js with React and TypeScript

## Status

Accepted.

## Context

Daily Reset requires a modern frontend architecture that supports:

- interactive user input,
- multiple application routes,
- reusable UI components,
- local application state,
- local persistence,
- automated testing,
- production deployment,
- future extensibility.

The application does not currently require a separate backend.

## Decision

Use:

- Next.js,
- React,
- TypeScript.

Next.js provides:

- application routing,
- application structure,
- production build tooling,
- deployment compatibility.

React provides:

- component-based UI development,
- interactive state management,
- reusable interface patterns.

TypeScript provides static typing for:

- check-in values,
- classified states,
- recommendation objects,
- persistence entities,
- component data.

## Current usage

The application uses the Next.js App Router.

Main routes are implemented in:

- `app/page.tsx`
- `app/check-in/page.tsx`
- `app/history/page.tsx`
- `app/insights/page.tsx`
- `app/settings/page.tsx`

Shared navigation is implemented in:

`components/AppNavigation.tsx`

Domain and persistence logic are separated into:

- `lib/recommendations.ts`
- `lib/db.ts`
- `lib/storage.ts`

The interface uses Tailwind CSS for styling.

## Consequences

### Advantages

- clear project structure,
- strong TypeScript support,
- reusable React components,
- built-in routing,
- simple production build,
- compatibility with automated testing,
- straightforward Vercel deployment,
- good support for future extension.

### Trade-offs

- Next.js provides more functionality than the current MVP strictly requires,
- the project must avoid unnecessary server-side complexity,
- interactive pages require client-side behavior where appropriate.

## Decision rationale

The selected stack provides enough technical capability for the Daily Reset MVP while remaining manageable for a small student project.

It supports the current multi-page application, local-first persistence, automated tests and production deployment without requiring a separate backend.