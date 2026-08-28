# @blencm/ui

**Accessible, reusable React components built with Radix UI and Tailwind CSS.**

Install the package, import the components you need, and start building.
No copying components into `src/components`, no manual setup, and no duplicated UI code across projects.

## Documentation & Live Components

**Explore all components, live examples, and copy the demo code:**

View components [here](https://ui.blencm.com).

---

## Installation

Install the package with your preferred package manager:

```bash
pnpm add @blencm/ui
```

React and React DOM are peer dependencies:

```text
react >=17
react-dom >=17
```

---

## Quick Start

Import components directly from the package:

```tsx
import { Button } from '@blencm/ui';

export function Example() {
  return (
    <div className="flex gap-3">
      <Button>Save</Button>
      <Button variant="outline">Cancel</Button>
    </div>
  );
}
```

That's it. Components, theme tokens, base styles, and the CSS reset are included with the package.

---

## Styles

In most setups, styles are loaded automatically.

If your bundler does not process CSS side-effect imports, import the stylesheet manually:

```tsx
import '@blencm/ui/style.css';
```

### Dark Mode

Dark mode is controlled by adding the `dark` class to an ancestor element, typically `<html>`:

```html
<html class="dark">
```

### Theme Customization

Customize the design system by overriding CSS variables in your application.

For example:

```css
:root {
  --primary: 160 84% 39%;
  --radius: 0.5rem;
}
```

This allows you to adapt colors, border radius, and other theme tokens without modifying the library itself.

---

## Why @blencm/ui?

`@blencm/ui` is designed for teams and developers who want a consistent component system without maintaining a local copy of every UI component.

* **Accessible by default** — built on top of Radix UI primitives.
* **Reusable** — install once and use across multiple React projects.
* **Tailwind CSS friendly** — designed to work naturally with utility-first styling.
* **Themeable** — customize the appearance through CSS variables.
* **Dark mode ready** — supports class-based dark mode.
* **TypeScript friendly** — designed for modern React and TypeScript applications.
* **No copy-paste workflow** — components are imported directly from the package.

---

## Sponsor

### MultiBase Studio

**[MultiBase Studio](https://multibasestudio.com/)** is a cross-platform desktop database client for **SQL, NoSQL, and cloud databases**.

Connect to PostgreSQL, MySQL, MongoDB, Redis, SQLite, and **40+ database engines** from a single application.

With MultiBase Studio you can:

* Write queries with autocomplete
* Explore databases, tables, collections, and schemas
* Browse and edit data
* Manage multiple database connections
* Run backups
* Work across different database engines without switching tools

Available for **Windows, macOS, and Linux**.

The **[free plan](https://multibasestudio.com/)** does not expire and does not require a credit card.

---

## License

Licensed under the [MIT License](./LICENSE).
