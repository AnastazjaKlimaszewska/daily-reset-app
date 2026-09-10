# System Model

## High-level model

User

↓

Daily Reset web interface

↓

React application state

↓

Activity recommendation logic

↓

Activity completion

↓

localStorage

↓

History displayed to the user

## Component relationships

The energy selection component updates the current energy state.

The recommendation logic reads the selected energy level and displays matching activities.

The activity completion function stores the selected activity.

The history function creates a history entry and saves it to localStorage.

The application reads localStorage when it starts and restores previous history.