# @blencm/ui

**Accessible React components on Radix UI and Tailwind CSS.**

Install the package, import a component, and start. No copy-paste into `src/components`.

View components [here](https://ui.blencm.com).

---

## Installation

```bash
pnpm add @blencm/ui
```

```bash
npm install @blencm/ui
```

```bash
yarn add @blencm/ui
```

React and React DOM are peer dependencies (`>=17`).

---

## Usage

Styles, theme tokens, and the CSS reset load with the package.

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

If your bundler does not follow CSS side-effect imports:

```tsx
import '@blencm/ui/style.css';
```

Dark mode follows a `dark` class on an ancestor:

```html
<html class="dark">
  <body><!-- app --></body>
</html>
```

Override CSS variables in your app:

```css
:root {
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --radius: 0.625rem;
}
```

---

## Sponsor

**[MultiBase Studio](https://multibasestudio.com/)** is a desktop client for SQL, NoSQL, and cloud databases. Connect PostgreSQL, MySQL, MongoDB, Redis, SQLite, and 40+ engines from one app — query with autocomplete, explore schemas, edit data, and run backups without switching tools.

Available on Windows, macOS, and Linux. The [free plan](https://multibasestudio.com/) does not expire and does not require a credit card.

---

## License

[MIT](./LICENSE) · [GitHub](https://github.com/blencm/ui)
