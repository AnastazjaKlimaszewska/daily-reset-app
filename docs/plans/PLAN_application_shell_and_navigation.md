# PLAN Application Shell and Navigation

## Goal

Create a shared application shell and navigation system for Daily Reset that connects all primary routes and provides a consistent product experience.

## Scope

This plan covers:

- shared navigation,
- application branding,
- route links,
- active route indication,
- responsive navigation behavior,
- consistent application shell.

Main routes:

- `/`
- `/check-in`
- `/history`
- `/insights`
- `/settings`

The detailed functionality of individual pages is covered by separate implementation plans.

## Functional requirements

The application shell must:

- display the Daily Reset brand,
- provide a link to Dashboard,
- provide a link to Check-in,
- provide a link to History,
- provide a link to Insights,
- provide a link to Settings,
- identify the currently active route,
- provide a clear entry point to start a reset,
- appear consistently across the application.

## Non-functional requirements

The navigation should:

- work on desktop and smaller screens,
- preserve readability,
- remain visually consistent,
- avoid blocking page content,
- use understandable text labels,
- keep the route structure clear.

## Visual direction

The application uses a dark product-oriented interface.

The visual language includes:

- dark background surfaces,
- high contrast,
- compact information modules,
- strong but restrained accent colors,
- consistent spacing,
- clear typography.

Accent colors may include green, purple and orange tones for functional differentiation.

The interface should avoid unnecessary decorative elements and generic wellness-style visual patterns.

## Technical context

Shared navigation component:

`components/AppNavigation.tsx`

Root layout:

`app/layout.tsx`

Routes:

- `app/page.tsx`
- `app/check-in/page.tsx`
- `app/history/page.tsx`
- `app/insights/page.tsx`
- `app/settings/page.tsx`

Framework:

- Next.js
- React
- TypeScript
- Tailwind CSS

## Implementation steps

1. Define the main route structure.
2. Create the shared navigation component.
3. Add Daily Reset branding.
4. Add navigation links.
5. Add active route styling.
6. Add a primary Start Reset action.
7. Add navigation to the root layout.
8. Implement responsive behavior.
9. Apply the current visual system.
10. Verify all routes.
11. Add automated tests where appropriate.

## Acceptance criteria

The feature is complete when:

- all five main routes are accessible,
- shared navigation is visible across pages,
- the active route is visually identifiable,
- Start Reset links to Daily Check-in,
- navigation works on smaller screens,
- the visual shell is consistent across routes,
- no route produces a navigation-related runtime error.

## Tests

Testing should verify:

- page navigation,
- presence of primary route links,
- Start Reset destination,
- rendering across main application pages,
- absence of route-related failures.