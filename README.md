# Bsa Addons Components Documentation

## 🚀 Overview

Bsa Addons is a collection of reusable Vue 3 components designed for building modern web interfaces. Components are organized by feature type and include avatars, calendars, charts, forms, notifications, tables, menus, and timelines. Each component includes a dedicated `index.ts` for centralized exports.

## 📦 Installation

```bash
npm install @bsa/addons
# or
yarn add @bsa/addons
# or
pnpm add @bsa/addons
```

---

## 🧑‍💻 Components

### 👤 Avatars

Handles user photos or icons.

- **BsaAvatar.vue** – Displays user avatars with optional initials fallback.
- **index.ts** – Exports all avatar components.

---

### 📅 Calendar

Event calendar.

- **BsaCalendar.vue** – Interactive calendar for displaying events, date selection, and navigation.
- **index.ts** – Exports calendar components.

---

### 📊 Charts

Various chart types for data visualization.

- **BsaChartBar.vue** – Bar chart.
- **BsaChartLine.vue** – Line chart.
- **BsaChartPie.vue** – Pie chart.
- **BsaGauge.vue** – Gauge chart.
- **BsaSparkline.vue** – Sparkline chart for compact trend visualization.
- **index.ts** – Exports all chart components.

---

### 🗂️ Empty

Displays empty states.

- **BsaEmptyState.vue** – Screen for showing empty or placeholder content.
- **index.ts** – Exports empty state components.

---

### 📝 Form

Form-related utilities including file uploads and rich text editing.

- **BsaFileUpload.vue** – File upload input component.
- **BsaRichText.vue** – Rich text editor.
- **index.ts** – Exports all form components.

---

### 📂 Menus

User and navigation menus.

- **BsaUserMenu.vue** – Dropdown menu for user actions.
- **index.ts** – Exports menu components.

---

### 🔔 Notifications

Toast messages, alerts, and modals.

- **BsaAlert.vue** – Simple alert component.
- **BsaNotificationBadge.vue** – Badge for notification count.
- **BsaNotificationModal.vue** – Modal for notifications.
- **BsaSnackbar.vue** – Snack-style notifications.
- **BsaToast.vue** – Toast notification component.
- **index.ts** – Exports all notification components.

---

### 📋 Tables

Dynamic table components.

- **BsaPivotTable.vue** – Basic pivot or dynamic table.
- **index.ts** – Exports table components.

---

### ⏱️ Timeline

Activity logs and history.

- **BsaTimeline.vue** – Timeline for displaying chronological events.
- **index.ts** – Exports timeline components.

---

### 🏗️ Root Export

- **index.ts** – Consolidates all component exports for easy import.

## 🎨 Customization

All components use TailwindCSS classes and can be easily customized through Tailwind configuration or by overriding component classes.

## 🙏 Credits

Built with:

- [Vue 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [PrimeVue](https://primevue.org/)
- [Vite](https://vitejs.dev/)

## 📝 Documentation

For more information, see the files in the docs folder.
