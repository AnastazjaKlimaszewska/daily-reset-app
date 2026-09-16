# Application Shell and Navigation

## 1. Goal

Create a consistent visual application shell for Daily Reset with branding and navigation between the main product views.

The goal is to make the application feel like a complete product instead of a single prototype page.

## 2. Scope

The feature includes:

- Daily Reset branding,
- application logo mark,
- persistent navigation,
- navigation links for:
  - Dashboard,
  - Check-in,
  - History,
  - Insights,
  - Settings,
- consistent page width and spacing,
- responsive desktop and mobile navigation.

The feature does not include implementing the full content of every page.

## 3. Functional requirements

- The application must display the Daily Reset name.
- A simple visual logo mark must be visible.
- The user must be able to navigate between the main routes.
- The current page must be visually identifiable.
- Navigation must work without full page reloads.
- Navigation must remain usable on smaller screens.

## 4. Non-functional requirements

### UX

Navigation should be simple and predictable.

The visual hierarchy should clearly separate:

- application branding,
- navigation,
- page content.

### Visual design

The interface should use a consistent design system with:

- soft neutral background,
- one recognizable accent color,
- rounded cards,
- consistent typography,
- consistent spacing.

### Accessibility

Navigation links must use semantic links.

Active and interactive states should be visually distinguishable.

### Maintainability

The shared application shell should be reusable across all pages.

## 5. Technical context

The feature uses:

- Next.js App Router,
- React,
- TypeScript,
- Tailwind CSS,
- Next.js `Link`,
- Next.js `usePathname()` for active navigation state.

A shared navigation component should be placed in the `components` directory.

## 6. Implementation steps

1. Create a reusable application navigation component.
2. Add Daily Reset branding and logo mark.
3. Add links for Dashboard, Check-in, History, Insights and Settings.
4. Add active-route styling.
5. Create initial route files for each main view.
6. Apply a consistent application background and content container.
7. Verify responsive behavior.
8. Add or update automated tests.
9. Update project documentation.

## 7. Acceptance criteria

- Daily Reset branding is visible.
- Navigation contains all five main product sections.
- Every navigation item opens the correct route.
- The active page is visually highlighted.
- Navigation works on desktop and mobile widths.
- The existing application logic remains intact.
- Automated tests pass.
- Production build passes.

## 8. Tests

### Component tests

- navigation renders all required links,
- navigation links point to the correct routes,
- active route receives active styling.

### Manual tests

- open each route,
- verify branding remains visible,
- verify navigation works,
- verify layout remains usable on mobile width.