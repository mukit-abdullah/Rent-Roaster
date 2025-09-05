# Rent Roster

A React Native (Expo) app to help housemates track and share recurring household expenses. Multiple people can contribute expenses regularly, view history, and visualize spending with simple charts and reports.

This project is currently a working prototype with core screens and navigation in place. With a small amount of refinement, it can be made ready for day-to-day use.

---

## Table of Contents

- Overview
- Features
- Tech Stack
- Project Status and Known Gaps
- Getting Started
- Running the App
- Project Structure
- Troubleshooting
- Roadmap (Next Steps)
- Contributing
- License
- Contact

---

## Overview

Rent Roster is designed for shared households where several people contribute to common expenses (rent, utilities, groceries, etc.). The app lets you:

- Add expenses with title, amount, and date
- Browse and manage expenses
- See a simple spending chart
- Generate a basic report (prototype)
- Chat within a group (prototype/local-only)

---

## Features

- Authentication (placeholder)
  - `screens/LoginScreen.js`, `screens/SignInScreen.js` navigate to the app without real backend auth.
- Group onboarding
  - `screens/JoinOrCreateGroupScreen.js` (join/create flow placeholder).
- Dashboard
  - `screens/DashboardScreen.js` shows quick navigation tiles and displays `groupName` and `groupKey` passed via navigation params.
- Expense management
  - `screens/AddExpenseScreen.js` adds expenses with validation and a date picker (`@react-native-community/datetimepicker`).
  - `screens/ViewExpensesScreen.js` lists expenses from the global context, with Update/Delete actions.
  - `screens/UpdateExpenseScreen.js` updates an existing expense (via route params).
  - `screens/DeleteExpenseScreen.js` demonstrates a simple delete flow (ID-based, see gaps below).
  - Global in-memory store in `context/ExpenseContext.js` (no persistence yet).
- Charts
  - `screens/ChartScreen.js` renders a bar chart using `react-native-chart-kit` from context data.
- Reports
  - `screens/ReportsScreen.js` shows a simple list report and a prototype “Download” button.
- Group chat (prototype)
  - `screens/GroupChatScreen.js` demonstrates a local-only chat experience (no backend).

---

## Tech Stack

- React Native (Expo SDK 51)
- React 18
- React Navigation (Stack)
- Date/time: `@react-native-community/datetimepicker`, `date-fns`
- Charts: `react-native-chart-kit` (uses `react-native-svg` under the hood)
- Expo packages: `expo`, `expo-status-bar`, `expo-file-system`, `expo-print`

See `package.json` for the full set of dependencies.

---

## Project Status and Known Gaps

This is a prototype. Notable gaps and areas to refine before production use:

- Data persistence
  - Expenses are kept in-memory only (`context/ExpenseContext.js`). App restarts clear data. Consider `@react-native-async-storage/async-storage` or a backend.
- Expense identity and consistency
  - Some screens use array index for update/delete; `DeleteExpenseScreen` expects an ID string. Introduce consistent IDs (e.g., `uuid`) and unify update/delete flows through context.
  - `ExpenseScreen.js` keeps its own local state instead of using the global context; prefer using the context everywhere.
- Input validation and formatting
  - Improve amount parsing/formatting (currency), and date handling.
- Auth and group management
  - Login/Sign-in are placeholders; group chat and group join/create are prototypes without backend. Consider Firebase/Supabase/Socket.io, etc.
- Reports & export
  - Report “Download” is a stub. Hook up `expo-print`/`expo-file-system` for PDF/CSV.
- UI/UX
  - Theme, accessibility, error states, and empty states can be further refined.
- Tooling
  - Consider adding unit tests, linting, and CI.

---

## Getting Started

Prerequisites:

- Node.js 18+ (recommended for Expo SDK 51 and React Native 0.74)
- npm 9+ or yarn
- Expo Go app on your iOS/Android device (optional but recommended)

Install dependencies:

```
npm install
```

If you encounter Node version warnings, upgrade Node to the latest LTS (18+) and reinstall.

---

## Running the App

Start the Expo development server:

```
# Preferred (does not depend on scripts)
npx expo start

# Or, if your npm start script is configured to run Expo
npm start
```

Then follow the Expo CLI instructions:

- Press “w” to open the web build in your browser
- Press “a” for Android emulator, “i” for iOS simulator (on macOS)
- Or scan the QR code with Expo Go on your device

Note: If you use `npm start`, ensure that your `package.json` maps `start` to `expo start` so it launches Expo correctly.

---

## Project Structure

```
.
├─ App.js                      # Wraps Navigation with ExpenseProvider
├─ app.json                    # Expo app config (name: "Rent Roster")
├─ context/
│  └─ ExpenseContext.js        # In-memory expense store and actions
├─ navigation/
│  └─ AppNavigator.js          # React Navigation (Stack)
├─ screens/
│  ├─ LoginScreen.js           # Placeholder login
│  ├─ SignInScreen.js          # Placeholder sign-in
│  ├─ JoinOrCreateGroupScreen.js
│  ├─ DashboardScreen.js       # Main hub (shows groupName/groupKey)
│  ├─ AddExpenseScreen.js      # Add expense with date picker
│  ├─ ViewExpensesScreen.js    # List, update, delete from context
│  ├─ UpdateExpenseScreen.js   # Edit expense via params
│  ├─ DeleteExpenseScreen.js   # Demo delete (ID-based)
│  ├─ ChartScreen.js           # Bar chart via react-native-chart-kit
│  ├─ ReportsScreen.js         # Simple report list and stub download
│  └─ GroupChatScreen.js       # Local-only group chat prototype
├─ assets/                     # App icons, splash, logo
└─ package.json                # Scripts and dependencies
```

---

## Troubleshooting

- Node version errors/warnings
  - Ensure Node 18+ (`node -v`). If needed, install Node 18 LTS and reinstall deps.
- Expo/Metro bundler issues
  - Clear cache: `npx expo start -c`
- Emulator/device connection
  - Ensure Android Studio/iOS simulators are configured; for devices, both device and dev machine should be on the same network.

---

## Roadmap (Next Steps)

- Persist expenses (AsyncStorage or backend)
- Replace index-based updates with stable IDs (use `uuid`) across all screens
- Centralize all expense CRUD in context (remove local duplicates in `ExpenseScreen.js`)
- Improve validation, currency formatting, and date handling
- Implement real auth and group management; make chat real-time (Firebase/Supabase/Socket.io)
- Implement export (PDF/CSV) via `expo-print`/`expo-file-system`
- Add tests (unit/e2e) and CI; add ESLint/Prettier
- Polish UI/UX and accessibility

---

## Contributing

Pull requests and issues are welcome. Please open an issue to discuss significant changes.

---

## License

Licensed under the MIT License. You may copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, subject to the terms of the MIT License.

For clarity, include a full `LICENSE` file in the repository (this project already includes one).

---

## Contact

Primary contacts:

- Sadman Hossain — sadmanhossainwork@gmail.com — https://www.linkedin.com/in/sadmanhossain-in/ — https://www.fiverr.com/s/yv157kV
- Arnab Banik — official.arnab.b@gmail.com
- Abdullah Al Mukit — dymmukit5824@gmail.com — https://www.linkedin.com/in/abdullah-al-mukit-01b865353/

For issues: please open a GitHub Issue in this repository.

