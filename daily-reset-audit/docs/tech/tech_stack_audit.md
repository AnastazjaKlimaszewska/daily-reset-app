# Tech Stack Audit

## 1. Purpose

The purpose of this audit is to verify whether the selected technology stack is appropriate for the Daily Reset MVP.

The stack should support:

- fast frontend development,
- component-based UI,
- local data persistence,
- automated testing,
- simple deployment,
- future extension if the project grows.

## 2. Frontend framework

### Selected technology

Next.js with React.

### Reason

The project already uses Next.js and React successfully.

This stack provides:

- component-based architecture,
- routing,
- good TypeScript support,
- simple deployment to Vercel,
- a structure that can be extended later.

### Decision

Keep Next.js and React.

Migrating to another frontend framework would add unnecessary work without providing clear value.

## 3. Programming language

### Selected technology

TypeScript.

### Reason

TypeScript improves code reliability by adding static typing.

It is especially useful when the project begins to use structured data models such as:

- CheckIn,
- CompletedAction,
- recommendation rules.

### Decision

Keep TypeScript.

## 4. Styling and UI components

### Selected technologies

Tailwind CSS and component-based UI patterns.

Shadcn UI may be used for reusable interface components.

### Reason

Tailwind is already configured.

Shadcn can provide reusable components such as:

- buttons,
- cards,
- dialogs,
- sliders,
- tabs.

This can improve consistency without requiring a large custom design system.

### Decision

Keep Tailwind CSS and use Shadcn selectively where it improves the interface.

## 5. Data persistence

### Previous solution

localStorage.

### Problem

localStorage is suitable for very small key-value data but becomes less convenient when the application needs multiple structured entities and queries.

The expanded MVP needs to store:

- check-ins,
- completed actions,
- relationships between records,
- historical data.

### Selected technology

IndexedDB using Dexie.js.

### Reason

Dexie provides a simpler API for IndexedDB and allows the frontend to behave more like an application with a local database.

This follows the recommended course approach for mocking backend persistence.

### Decision

Migrate persistence from localStorage to Dexie.js and IndexedDB.

## 6. Backend

### Student MVP decision

No real backend will be implemented.

### Reason

Authentication, registration and payments are outside the student implementation scope.

IndexedDB is sufficient to simulate persistence for the MVP.

### Future option

A real backend could later replace the local data layer.

Possible future technologies include:

- Supabase,
- PostgreSQL,
- REST API,
- server-side Next.js functionality.

## 7. Testing

### Selected technologies

Vitest and Testing Library.

### Reason

The project already uses these tools successfully.

They support:

- component tests,
- user interaction tests,
- logic tests.

Additional tests will be added for:

- state classification,
- recommendation logic,
- IndexedDB data operations,
- full user flow.

### Decision

Keep Vitest and Testing Library.

## 8. Version control

### Selected technology

Git and GitHub.

### Reason

GitHub provides:

- version history,
- commits,
- repository hosting,
- compatibility with Vercel,
- traceability of implementation steps.

### Decision

Keep GitHub as the repository source of truth.

## 9. Deployment

### Selected technology

Vercel.

### Reason

Vercel integrates directly with GitHub and Next.js.

The project already deploys successfully using Vercel.

### Decision

Keep Vercel.

## 10. Monorepo evaluation

NX monorepo was considered because it can organize frontend, backend and documentation in one workspace.

For the current MVP, the application does not include a separate backend or multiple applications.

Migrating the existing project to NX would add complexity without solving a current problem.

### Decision

Do not migrate to NX for the current MVP.

The repository will remain a single Next.js project with structured documentation and modular source code.

## 11. Final stack

The approved stack is:

- Next.js,
- React,
- TypeScript,
- Tailwind CSS,
- Shadcn UI where useful,
- Dexie.js,
- IndexedDB,
- Vitest,
- Testing Library,
- Git,
- GitHub,
- Vercel.

## 12. Constraints

The project should avoid unnecessary technologies.

A new dependency should only be introduced when it solves a clear problem in the approved MVP scope.