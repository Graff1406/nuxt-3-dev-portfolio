# 🚀 Project Name: Product-Driven Web Developer

## 🛠️ Setup

Make sure to install dependencies before running the project:

```bash
# Install dependencies
npm install
```

## 🌍 Development Server

Start the development server at `http://localhost:3000`:

```bash
npm run dev
```

## 🚀 Production

To build the application for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

For deploying to a server, check your deployment configuration.

## 🔄 Managing Dependencies

To update dependencies to the latest versions:

```bash
npm update
```

## 🏗️ Component Structure

### 🔹 Blocks

- **Purpose**: Blocks are **static layout components** responsible for structure and presentation.  
- **Characteristics**:  
  - Contain only **visual elements** (static text, images, etc.).  
  - Do **not** accept props or interact with state.  
  - Used for **layout and structural parts** of the UI.  
- **Examples**:  
  - `Block/Header.vue` → Static page header.  
  - `Block/Footer.vue` → Static footer section.  
  - `Block/Section.vue` → Reusable section layout.  

### 🔹 Widgets

- **Purpose**: Widgets are **dynamic and interactive components** with logic.  
- **Characteristics**:  
  - Accept **props** to be reusable.  
  - Have **some level of interactivity** (e.g., handling user input, fetching data).  
  - Encapsulate **specific functionality**.  
- **Examples**:  
  - `Widget/SearchWidget.vue` → Search bar component.  
  - `Widget/NotificationWidget.vue` → Displays alerts or messages.  
  - `Widget/DatePickerWidget.vue` → Date selection component.  

## 📝 Commit Message Guidelines  

Maintaining a structured commit message format helps keep the Git history clear.  

### 🔹 Commit Prefixes  

- **`feat:`** → Add a new feature.  
- **`fix:`** → Fix a bug.  
- **`update:`** → Update non-functional aspects (e.g., docs, dependencies).  
- **`refactor:`** → Improve code structure without changing behavior.  
- **`style:`** → Adjust formatting (e.g., spaces, indentation).  
- **`perf:`** → Improve performance.  
- **`chore:`** → Maintenance tasks (e.g., CI/CD, build scripts).  
- **`test:`** → Add or update tests.  

### 🔹 Example Commit Messages  

```bash
git commit -m "feat: add dark mode toggle"
git commit -m "fix: resolve login form validation issue"
git commit -m "update: improve accessibility with ARIA attributes"
git commit -m "refactor: simplify API response handling"
git commit -m "style: fix indentation and remove extra spaces"
git commit -m "perf: optimize image loading for faster page speed"
git commit -m "chore: update dependencies and configure ESLint"
git commit -m "test: add unit tests for authentication service"
```

---

💡 **Tip**: Keep commit messages **short** but **descriptive**. A good rule of thumb is:  
✅ `"fix: resolve login form validation issue"`  
❌ `"fixed a bug that was happening sometimes when a user entered invalid credentials"`

---

### 🔗 Additional Notes  

- **Ensure your commits follow a logical order** (e.g., refactor before adding new features).  
- **Keep PRs small and focused** for better reviewability.  
- **Use branches** (`feature/branch-name`, `fix/branch-name`) for cleaner workflows.  

