# Daily Reset - Product Scope

## 1. Product idea

Daily Reset is a lightweight self-care SaaS concept focused on one specific problem:

helping users choose an appropriate small action when they feel mentally overloaded, tired or unsure what to do next.

The product does not attempt to be a complete mental health platform, productivity system or habit tracker.

Its purpose is to support a short daily check-in and recommend a small action based on the user's current state.

## 2. Why the scope was reduced

The original self-care concept was broader and included too many possible directions and features.

After evaluation, the scope was reduced to one core workflow:

check-in → state classification → recommendation → completion → history.

The product keeps the architecture and development process of a real SaaS project, while limiting the business problem to one narrow use case.

## 3. Core user problem

Users can experience decision overload when they are tired, stressed or low on energy.

Even simple self-care decisions can become difficult when too many options are available.

Daily Reset reduces the number of decisions by asking a short set of questions and presenting a small number of relevant actions.

## 4. Target user

The initial target user is an adult who:

- experiences occasional decision overload,
- wants a simple self-care tool,
- does not want to configure a complex productivity system,
- prefers short actions that can be completed immediately,
- wants to see simple history and patterns over time.

## 5. Core MVP flow

The MVP flow is:

1. The user starts a daily check-in.
2. The user provides information about current energy, mood, available time and mental load.
3. The application classifies the current state.
4. The application shows a small number of recommended micro-actions.
5. The user selects one action.
6. The user marks the action as completed.
7. The check-in and completed action are saved locally.
8. The user can view previous check-ins and simple statistics.

## 6. MVP features

The MVP contains:

- daily check-in,
- state classification,
- adaptive micro-action recommendations,
- activity completion,
- local persistence using IndexedDB,
- history view,
- simple statistics,
- local data management.

## 7. Out of scope

The following features are intentionally excluded from the current implementation:

- authentication,
- registration,
- payments,
- social features,
- chat,
- therapist integration,
- medical diagnosis,
- AI-generated medical advice,
- cloud synchronization.

Authentication, registration and payments are excluded because they are not part of the student implementation scope.

## 8. Technical direction

The frontend will continue to use Next.js, React and TypeScript.

Local persistence will be moved from localStorage to IndexedDB using Dexie.js to simulate a backend-like data layer in the browser.

The application should be component-based and testable.

## 9. Product success criteria

The MVP is considered successful when:

- the full check-in flow works,
- recommendations change based on user input,
- completed actions are stored,
- data remains available after refresh,
- history can be viewed,
- simple statistics are calculated from stored data,
- the application builds successfully,
- automated tests pass,
- the application is deployed publicly.