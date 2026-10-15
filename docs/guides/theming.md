# Theming & customization

Use theme tokens, dark mode, shared form variants and component slots.

## Override semantic tokens

Load these overrides after the library stylesheet. Tokens contain complete CSS color values, such as oklch(...), rather than bare color channels. Override both the light and dark palettes where needed.

| Token family | Purpose |
| --- | --- |
| --background, --foreground | Application surface and text. |
| --card / --card-foreground, --popover / --popover-foreground | Elevated surfaces and their text. |
| --primary, --secondary, --muted, --accent + matching -foreground | Semantic interaction and contrast pairs. |
| --destructive, --destructive-foreground | Destructive action and error colors. |
| --border, --input, --ring, --radius | Borders, control surface, focus ring and corner radius. |
| --chart-1 through --chart-5 | Chart palette tokens; these are not chart components. |
| --sidebar, --sidebar-foreground, --sidebar-primary, --sidebar-primary-foreground, --sidebar-accent, --sidebar-accent-foreground, --sidebar-border, --sidebar-ring | Sidebar palette tokens. |


```css
:root {
  --primary: oklch(0.51 0.2 265);
  --primary-foreground: oklch(0.99 0 0);
  --ring: oklch(0.6 0.18 265);
  --radius: 0.75rem;
}
.dark {
  --primary: oklch(0.78 0.12 265);
  --primary-foreground: oklch(0.18 0.04 265);
}
```

## Dark mode

A dark class on an ancestor, typically html, activates the dark palette and dark utility variants. ThemeProvider from next-themes is an optional way to manage that class. Declare next-themes directly if your application imports it.


```tsx
import type { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

export function Theme({ children }: { children: ReactNode }) {
  return <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    {children}
  </ThemeProvider>;
}
```

## Shared form styles

Input, select, checkbox and related wrappers share the form style system. Button has its own variant and size sets; consult its API for the complete list.

| Setting | Values |
| --- | --- |
| size | 2xs, xs, sm, md, lg, xl, 2xl; default sm for most form controls. |
| variant | outline, soft, ghost, filled, flushed, unstyled, link. |
| customSize slots | control, flushedControl, linkControl, selectItem, searchInput, checkbox, label, description, message. |


```tsx
import { UiInput } from '@blencm/ui';

export function LargeInput() {
  return <UiInput label="Project name" size="lg" variant="soft"
    customSize={{ control: 'h-12 px-4 text-base', label: 'text-base' }} />;
}
```

## Classes, slots and style helpers

cn(...inputs) combines clsx values and merges conflicting Tailwind classes. Use className for the main element, named class props for parts and DataTable classNames for table slots.

getFormSizeClasses(size, customSize) returns a merged SizeClasses object. getFormControlSizeClass(variant, sizeClasses) picks the standard, flushed or link control classes. formInputVariants and formCompositeVariants provide focus/focus-within variants for custom controls.

classNameDefault={false} disables standard styling on components that expose it. It does not mean that every library wrapper is unstyled.


```tsx
import { cn, buttonVariants, getFormSizeClasses } from '@blencm/ui';

const actionClass = cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'w-full');
const sizes = getFormSizeClasses('md', { message: 'text-sm' });
console.log(actionClass, sizes.message);
```

## Related components

- [Button](https://ui.blencm.com/button)
- [Input](https://ui.blencm.com/input)
- [DataTable](https://ui.blencm.com/data-table)
- [ScrollView](https://ui.blencm.com/scroll-view)

