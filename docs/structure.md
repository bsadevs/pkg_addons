# Bsa Addons Components Documentation

## 📋 Package Structure

```
src
|-- components
|   |-- avatars  → user photos or icons
|   |   |-- BsaAvatar.vue
|   |   +-- index.ts
|   |-- calendar  → event calendar
|   |   |-- BsaCalendar.vue
|   |   +-- index.ts
|   |-- charts  → charts (bar, line, pie, sparkline, gauge)
|   |   |-- BsaChartBar.vue
|   |   |-- BsaChartLine.vue
|   |   |-- BsaChartPie.vue
|   |   |-- BsaGauge.vue
|   |   |-- BsaSparkline.vue
|   |   +-- index.ts
|   |-- empty  → empty state screen
|   |   |-- BsaEmptyState.vue
|   |   +-- index.ts
|   |-- form  → file upload / text editor
|   |   |-- BsaFileUpload.vue
|   |   |-- BsaRichText.vue
|   |   +-- index.ts
|   |-- index.ts
|   |-- menus
|   |   |-- BsaUserMenu.vue
|   |   +-- index.ts
|   |-- notifications  → toast messages / simple alerts
|   |   |-- BsaAlert.vue
|   |   |-- BsaNotificationBadge.vue
|   |   |-- BsaNotificationModal.vue
|   |   |-- BsaSnackbar.vue
|   |   |-- BsaToast.vue
|   |   +-- index.ts
|   |-- tables  → basic dynamic table
|   |   |-- BsaPivotTable.vue
|   |   +-- index.ts
|   +-- timeline  → activity log or history
|       |-- BsaTimeline.vue
|       +-- index.ts
|-- composables
|   |-- notifications  → toast messages / simple alerts
|   |   |-- useNotifications.ts
|   |   +-- useToast.ts
|   |-- useChartData.ts
|   |-- useFileUpload.ts
|   |-- useNotifications.ts
|   +-- useSidebar.ts
|-- index.ts
|-- styles
|   |-- addons.css
|   +-- tailwind.css
|-- types
+-- utils
```
