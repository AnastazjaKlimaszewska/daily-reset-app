# MVP Scoping

## 1. MVP objective

The MVP should validate whether a short context-based check-in can reduce decision effort and help the user choose one realistic self-care action.

The MVP should remain technically complete enough to demonstrate a real product flow, data persistence, testing and future scalability.

## 2. Core workflow

The complete MVP flow is:

check-in → state classification → recommendation → action selection → completion → persistence → history → statistics

## 3. Must-have features

The MVP must include:

### Daily check-in

The user provides a small amount of context about the current situation.

Initial inputs:

- energy level,
- mood,
- mental load,
- available time.

### State classification

The application interprets the check-in and assigns the user to a simple state category.

The classification should be deterministic and explainable.

### Adaptive recommendations

The application displays a small number of micro-actions matched to the current state.

### Activity completion

The user can select and complete one recommended action.

### Persistent local storage

Check-ins and completed actions are stored in IndexedDB using Dexie.js.

### History

The user can view previous check-ins and completed actions.

### Simple statistics

The application calculates basic information from stored data, for example:

- number of completed actions,
- most common energy level,
- recent check-in count.

### Local data management

The user can clear locally stored data.

## 4. Should-have features

The following features may be included if time allows:

- category labels for actions,
- filtering history,
- small trend indicators,
- improved empty states,
- improved responsive layout.

## 5. Could-have features

The following features are possible future extensions:

- custom user-created actions,
- more advanced recommendation rules,
- reminders,
- cloud synchronization,
- user accounts,
- cross-device history,
- AI-assisted recommendations.

## 6. Won't-have features in the student implementation

The following features are explicitly excluded:

- authentication,
- registration,
- payments,
- therapist communication,
- medical diagnosis,
- social feed,
- chat,
- AI therapy,
- complex habit tracking,
- wearable integrations.

## 7. Technical scope

The MVP will use:

- Next.js,
- React,
- TypeScript,
- Tailwind CSS,
- Dexie.js,
- IndexedDB,
- Vitest,
- Testing Library,
- GitHub,
- Vercel.

The application remains frontend-first and does not require a real backend for the student implementation.

## 8. Data model scope

The MVP needs at least two logical data entities.

### CheckIn

A check-in stores:

- id,
- createdAt,
- energy,
- mood,
- mentalLoad,
- availableTime,
- classifiedState.

### CompletedAction

A completed action stores:

- id,
- checkInId,
- activity,
- category,
- completedAt.

## 9. Acceptance of the MVP

The MVP is considered complete when:

- the user can complete the full check-in flow,
- the application generates recommendations based on the check-in,
- the user can complete an action,
- the data is stored in IndexedDB,
- the data survives page refresh,
- history is visible,
- basic statistics are calculated,
- automated tests pass,
- the project builds successfully,
- the application is publicly deployed.

## 10. Scope control

Any new functionality outside this document requires a separate plan before implementation.

The project should not expand into a general wellness platform.