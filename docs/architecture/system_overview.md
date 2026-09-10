# System Overview

## 1. Purpose of the application

Daily Reset is a simple web application that helps users choose a small self-care activity based on their current energy level.

The user selects one of three energy levels: low, medium or high. The application then displays a short list of suggested activities that match the selected level. The user can mark one activity as completed, and the application stores this information in the browser history.

The goal of the application is to keep the interaction simple and fast. The user does not need to create an account or provide personal data.

## 2. Main system components

The application consists of one main frontend application built with Next.js and React.

The main components are:

- energy level selection,
- activity recommendation logic,
- activity completion,
- history of completed activities,
- browser local storage.

## 3. Data flow

The user first selects an energy level.

The selected value is stored in the current application state.

Based on the selected energy level, the application displays a predefined list of activities.

When the user marks an activity as completed, the application creates a history entry containing:

- date,
- selected energy level,
- completed activity.

The history entry is saved in localStorage in the user's browser.

When the page is opened again, the application reads previously saved history from localStorage.

## 4. Architecture

The application uses a simple client-side architecture.

There is no external backend, database or authentication system in the current MVP.

The frontend is responsible for:

- displaying the interface,
- handling user interactions,
- selecting recommended activities,
- saving and reading data from localStorage.

This architecture was selected because the project is intentionally small and focused on the core functionality.

## 5. Technology

The application uses:

- Next.js,
- React,
- TypeScript,
- Tailwind CSS,
- localStorage.

## 6. MVP scope

The MVP includes:

- selecting an energy level,
- showing suggested activities,
- marking an activity as completed,
- storing completed activities in history.

Features such as user accounts, cloud synchronization, notifications, artificial intelligence recommendations and external databases are outside the current scope.