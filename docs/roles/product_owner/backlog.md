# Product Backlog

## High priority — completed MVP

### Application shell and navigation

Status: DONE

The application provides a shared navigation structure connecting:

- Dashboard,
- Check-in,
- History,
- Insights,
- Settings.

### Daily Check-in

Status: DONE

The user can provide:

- energy level,
- mood,
- mental load,
- available time.

### State classification

Status: DONE

Each completed check-in is classified into one of three states:

- recovery,
- balanced,
- active.

Classification uses deterministic rules.

### Adaptive recommendations

Status: DONE

The application returns exactly three recommendations based on:

- classified state,
- available time.

### Action selection and completion

Status: DONE

The user can select one recommendation and mark it as completed.

The completed action is linked to the check-in that generated it.

### IndexedDB persistence

Status: DONE

Check-ins and completed actions are stored locally using IndexedDB through Dexie.

### History

Status: DONE

The user can review previous check-ins and related completed actions.

### Dashboard

Status: DONE

The Dashboard displays:

- total check-ins,
- total completed actions,
- completion rate,
- latest classified state,
- latest completed action.

### Insights

Status: DONE

The application provides descriptive statistics including:

- total check-ins,
- total completed actions,
- completion rate,
- state distribution,
- most common state,
- completed action categories.

### Local data management

Status: DONE

The user can clear all Daily Reset data stored in the browser.

## Testing and quality

### Automated tests

Status: DONE

Automated tests cover:

- classification logic,
- recommendation logic,
- Dashboard,
- Daily Check-in,
- History,
- Insights,
- Settings.

### Production build

Status: DONE

The application can be built successfully for production.

### Deployment

Status: DONE

The application is deployed using Vercel.

## Low priority / future ideas

### Custom recommendations

Status: NOT PLANNED FOR MVP

Allow the user to create or configure custom recommendation options.

### User account

Status: NOT PLANNED FOR MVP

Allow the user to create an account and optionally synchronize data between devices.

### Notifications

Status: NOT PLANNED FOR MVP

Allow users to receive reminders.

### Cloud synchronization

Status: NOT PLANNED FOR MVP

Synchronize data between multiple devices.

### Advanced analytics

Status: NOT PLANNED FOR MVP

Provide longer-term patterns, comparisons and more detailed visualizations.

### Personalization

Status: NOT PLANNED FOR MVP

Allow recommendation rules to adapt to user preferences over time.