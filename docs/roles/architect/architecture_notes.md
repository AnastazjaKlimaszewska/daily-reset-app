# Architecture Notes

## 1. Architecture goal

The architecture should remain simple and appropriate for a small MVP.

The application does not require a backend, authentication system or external database.

## 2. Main architecture

Daily Reset uses a client-side architecture.

The main application is built with Next.js and React.

User interactions are handled directly in the frontend.

Data persistence is handled by browser localStorage.

## 3. Main components

The system contains the following logical components:

- energy selection,
- activity recommendation logic,
- activity completion,
- history storage,
- user interface.

## 4. Data model

Each history entry contains:

- date,
- energy level,
- completed activity.

The data is stored as JSON in localStorage.

## 5. Integration decisions

The current MVP does not use external integrations.

There are no:

- external APIs,
- cloud databases,
- authentication providers,
- notification services.

## 6. Architecture decisions

The most important architecture decisions are documented in:

- `docs/architecture/adr_001.md`
- `docs/architecture/adr_002.md`

## 7. Future extension

If the application grows, the architecture may later include:

- backend API,
- external database,
- user authentication,
- synchronization between devices.

These elements are intentionally excluded from the current MVP.