## Setup

Make sure to install dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

### Blocks
- **Purpose**: Block components are responsible for static layout and presentation. They are typically used to encapsulate HTML structure without requiring props or interaction with the state.
- **Characteristics**: 
  - Contain purely visual elements (e.g., static text, images, sections).
  - Do not accept props and do not have interactivity.
  - Used for structural or presentational parts of the UI.
- **Example**: 
  - `Block/Header.vue`: A static header block.
  - `Block/Footer.vue`: A static footer block.
  - `Block/Section.vue`: A reusable section layout.

### Widgets
- **Purpose**: Widget components are more dynamic and interactive. They often accept props, manage state, and perform specific actions (e.g., handling events, fetching data).
- **Characteristics**: 
  - Accept props to make them configurable and reusable.
  - Have some level of interactivity or business logic (e.g., buttons, forms, toggles).
  - Typically designed to encapsulate functionality or features.
- **Example**: 
  - `Widget/SearchWidget.vue`: A search bar that accepts search query input and performs an action.
  - `Widget/NotificationWidget.vue`: A notification widget that displays dynamic alerts or messages.
  - `Widget/DatePickerWidget.vue`: A date picker component for selecting dates.

