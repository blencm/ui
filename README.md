# @blencm/ui

**Accessible React components on Radix UI and Tailwind CSS.**

Install the package, import a component, and start. No copy-paste into `src/components`.

[**Components**](https://ui.blencm.com) · [npm](https://www.npmjs.com/package/@blencm/ui) · [GitHub](https://github.com/blencm/blencm-ui)

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

React and React DOM are peer dependencies >=17.

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

---

## Dark mode

The theme follows a `dark` class on an ancestor, usually `<html>`.

```html
<html class="dark">
  <body><!-- app --></body>
</html>
```

With `next-themes`, set `attribute="class"`.

---

## Theming

Override CSS variables in your app:

```css
:root {
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --destructive: oklch(64.12% 0.209 16.22);
  --radius: 0.75rem;
}
```

---

## Forms

React Hook Form and Zod work out of the box.

```tsx
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button, Form, FormCheckbox, FormField, FormSelect } from '@blencm/ui';

const schema = z.object({
  name: z.string().min(2, 'Minimum 2 characters'),
  role: z.enum(['owner', 'editor', 'viewer']),
  accepted: z.boolean().refine(Boolean, 'You must accept the terms'),
});

export function CreateAccountForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { name: '', role: 'viewer', accepted: false },
  });

  return (
    <Form methods={form} onSubmit={console.log} formProps={{ className: 'space-y-4' }}>
      <FormField control={form.control} name="name" label="Name" requiredLabel />
      <FormSelect
        control={form.control}
        name="role"
        label="Role"
        items={[
          { label: 'Owner', value: 'owner' },
          { label: 'Editor', value: 'editor' },
          { label: 'Viewer', value: 'viewer' },
        ]}
      />
      <FormCheckbox control={form.control} name="accepted" label="I accept the terms" />
      <Button type="submit" className="w-full">
        Create account
      </Button>
    </Form>
  );
}
```

---

## Components

Browse live previews and source at **[ui.blencm.com](https://ui.blencm.com)**.

**Primitives**  
`Accordion` · `Alert` · `AlertDialog` · `AspectRatio` · `Avatar` · `Badge` · `Breadcrumb` · `Button` · `Calendar` · `Card` · `Carousel` · `Checkbox` · `Collapsible` · `Command` · `ContextMenu` · `Dialog` · `Drawer` · `DropdownMenu` · `HoverCard` · `IconButton` · `Input` · `InputOtp` · `Label` · `Menubar` · `Modal` · `NavigationMenu` · `Pagination` · `Popover` · `Progress` · `RadioGroup` · `Resizable` · `ScrollArea` · `ScrollView` · `Select` · `Separator` · `Sheet` · `Skeleton` · `Slider` · `Sonner` · `Switch` · `Table` · `Tabs` · `Textarea` · `Toast` · `Toaster` · `Toggle` · `ToggleGroup` · `Tooltip`

**Forms**  
`Form` · `FormField` · `FormSelect` · `FormCheckbox` · `FormTextarea` · `FormDate` · `FormTime` · `FormItem` · `FormControl` · `FormLabel` · `FormDescription` · `FormMessage` · `UiInput` · `UiSelect` · `UiCheckbox` · `UiDate` · `UiTime` · `UiTextarea`

**Composites**  
`AlertModal` · `Breadcrumbs` · `DataTable` · `DataTableSkeleton` · `Dropzone` · `FileUpload` · `Heading` · `PageHead` · `PaginationSection` · `SearchInput` · `SearchableSelect`

**Utilities**  
`cn` · `toast` · `useToast` · `Icons` · `useSidebar`

---

## Sponsors

**[MultiBase Studio](https://multibasestudio.com/)** is a desktop client for SQL, NoSQL, and cloud databases. Connect PostgreSQL, MySQL, MongoDB, Redis, SQLite, and 40+ engines from one app — query with autocomplete, explore schemas, edit data, and run backups without switching tools.

---

## License

[MIT](./LICENSE)
