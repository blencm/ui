# @blencm/ui

**Accessible React components on Radix UI and Tailwind CSS.**

Install the package, import a component, and start. No copy-paste into `src/components`.

View components [here](https://ui.blencm.com).

## Documentation

The documentation includes **71 component pages, 10 integration guides and a
reference for all 346 public exports across 78 modules**. Component pages combine
interactive examples, copyable code, usage notes, accessibility guidance and API
tables with types, required properties and locally declared defaults.

| Start here | What you will learn |
| --- | --- |
| [Installation and setup](./docs/guides/installation.md) | Package imports, CSS, framework boundaries, providers and editor setup. |
| [Forms and validation](./docs/guides/forms.md) | Primitive, labeled and React Hook Form fields; Zod validation and asynchronous submission. |
| [Tables and pagination](./docs/guides/data-tables.md) | Typed columns, client/API pagination, All, templates, accents and slots. |
| [Search and selection](./docs/guides/search-selection.md) | Debounced search, option metadata and searchable form selects. |
| [Dates, times and localization](./docs/guides/dates-times.md) | Display/storage formats, every format preset, bounds and locale behavior. |
| [Theming and customization](./docs/guides/theming.md) | Semantic tokens, dark mode, variants, shared sizes and class helpers. |
| [Dialogs, notifications and files](./docs/guides/overlays-feedback.md) | Controlled confirmation, both toast systems, file restrictions and upload state. |
| [Accessibility and composition](./docs/guides/accessibility.md) | Labels, focus, keyboard interaction, `asChild` and native attributes. |
| [Hooks and utilities](./docs/guides/utilities.md) | Sidebar state, style functions, form helpers, icon registry and public types. |
| [Troubleshooting](./docs/guides/troubleshooting.md) | Common integration issues and documentation maintenance. |

Browse the [component usage guide](./docs/components.md) or the
[complete API reference](./docs/api-reference.md) for individual exports.
The Markdown guides are included in the published package and share their content
with the documentation website.

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

React and React DOM are peer dependencies (`^18.0.0 || ^19.0.0`).

Use a React application bundler that handles CSS imports. The package provides
ESM, CommonJS and TypeScript declarations. Import public components and types from
`@blencm/ui`; component source paths are not public package subpaths.

Declare integrations as direct application dependencies when importing them:

```bash
# Optional schema validation for forms
pnpm add react-hook-form zod @hookform/resolvers

# Optional theme switching and Sonner notifications
pnpm add next-themes sonner

# If your application imports date-fns formatting or locale objects
pnpm add date-fns
```

The library ships compiled CSS. Installing Tailwind in your application is only
necessary when you want to generate additional application utilities.

---

## Usage

Styles, theme tokens, and the CSS reset load with the package.
Load application theme overrides after the library stylesheet. The base reset
and body styles also affect the surrounding application.

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

Override `.dark` tokens as well when you need a custom dark palette. Color tokens
accept complete CSS colors such as `oklch(...)`, not bare HSL channels.

For Next.js, place stateful components and providers behind an application
`'use client'` boundary and load global CSS from the root layout. Test the specific
components you use with your framework's server rendering setup. The distributed
entry imports CSS, so a bare Node.js `require` needs a CSS-aware environment.

## Component catalog

| Area | Components |
| --- | --- |
| Actions | Button, IconButton, Toggle, ToggleGroup. |
| Controls | Input, Textarea, Label, Checkbox, RadioGroup, Select, Switch, Slider, Calendar, InputOTP. |
| Form integration | Form, FormField, FormSelect, FormCheckbox, FormDate, FormTime, FormTextarea. |
| Labeled fields | UiInput, UiSelect, UiCheckbox, UiDate, UiTime, UiTextarea. |
| Overlays | Dialog, AlertDialog, Modal, AlertModal, Sheet, Drawer, Popover, HoverCard, Tooltip. |
| Menus | DropdownMenu, ContextMenu, Command, Menubar, NavigationMenu. |
| Navigation | Breadcrumb, Breadcrumbs, Pagination, PaginationSection, Tabs. |
| Feedback | Alert, Progress, Skeleton, Toast, Toaster, ToasterSonner. |
| Data display | Table, DataTable, DataTableSkeleton, Avatar, Badge, Card, Carousel. |
| Layout | Accordion, Collapsible, AspectRatio, Separator, ScrollArea, ScrollView, ResizablePanelGroup. |
| Application helpers | SearchInput, SearchableSelect, Dropzone, FileUpload, ImagePreview, Heading, PageHead, SidebarProvider, useSidebar. |

Composed components also export their parts, such as `DialogTitle`, `TableCell`,
`SelectItem` and `CarouselNext`. The API reference lists every part and public type.

## Forms

Choose `Input`/`Select` primitives for custom composition, `Ui*` fields for
standalone labels and errors, or `Form*` fields for React Hook Form integration.
`FormField` is the library's ready-made input field, rather than the raw React Hook
Form Controller.

```tsx
import { useForm } from 'react-hook-form';
import { Button, Form, FormField, FormSelect } from '@blencm/ui';

type Values = { name: string; role: string };

export function ProjectForm() {
  const form = useForm<Values>({
    defaultValues: { name: '', role: 'viewer' },
  });

  return (
    <Form methods={form} onSubmit={values => console.log(values)}>
      <FormField control={form.control} name="name" label="Name"
        requiredLabel rules={{ required: 'Enter a name' }} />
      <FormSelect control={form.control} name="role" label="Role" searchable
        items={[
          { value: 'editor', label: 'Editor' },
          { value: 'viewer', label: 'Viewer' },
        ]} />
      <Button type="submit" loading={form.formState.isSubmitting}>Save</Button>
    </Form>
  );
}
```

`control` can be omitted inside `Form` context. Use a schema resolver or field
`rules` to enforce validation; `requiredLabel` only draws a marker. `Button`
defaults to `type="button"`, so submit buttons must declare `type="submit"`.
Native input values, including number inputs, arrive as strings unless you
explicitly transform them.

`FormDate` defaults to `valueMode="date"` (`Date | null`); `FormTime` defaults to
`valueMode="string"` with `valueFormat="time24"`. Use `dateFormat`/`timeFormat`
for display and `valueFormat` for parsing and string storage. Standalone `UiDate`
and `UiTime` emit `Date | undefined`. See the
[date/time guide](./docs/guides/dates-times.md) for complete presets and examples.

---

## Tables and pagination

Use `internalScroll={false}` on `Table` or `DataTable` to let the surrounding page
scroll. `DataTable` then grows to fit the rows on the selected page and ignores
`heightClassName`. Internal scrolling defaults to `true` for `DataTable` and
`false` for the primitive `Table`.

```tsx
<DataTable
  columns={columns}
  data={allRows}
  paginationMode="client"
  internalScroll={false}
  pageSizeOptions={[10, 20, 50]}
  showAllOption
  allRowsLabel="All"
/>
```

Client pagination receives the full dataset and handles page changes and page size
internally. You can also control it with `page`, `perPage`, `onPageChange`, and
`onPageSizeChange`. Selecting “All” uses the total row count as the numeric page
size and resets to page 1.

The default `paginationMode="manual"` keeps existing API pagination: pass the
current page as `data`, plus `pageCount` and `totalRows`. In this mode,
`onPageSizeChange(size)` must fetch that many records, including the full total
when “All” is selected. The component cannot retrieve records that have not
been supplied. Without `totalRows`, the “All” option is omitted for multiple
pages.

```tsx
<Table internalScroll={false}>{/* table sections and rows */}</Table>
```

Use `DataTableColumnDef<Row>` from the package for typed column definitions.
Built-in templates are `neo`, `glass`, `compact`, `minimal`, `clean`, `elevated`,
`grid` and `cards`. Customize `accent`, `accentColor` and the `DataTableSlots`
keys in `classNames`. Sorting/filtering and controlled row selection are not
exposed by the wrapper; handle filtering in your application. `isRowsSelected`
only controls the selection summary.

The [table guide](./docs/guides/data-tables.md) includes complete client and API
examples, loading/error states and every styling slot.

## Search, overlays and notifications

`SearchInput` emits `onSearch(term)` after 750 ms by default. Set `debounceTime`
to change the delay, and filter/fetch results in your application.
`SearchableSelect` searches supplied items locally, ignoring case and diacritics;
each item has a string `value`, `label`, optional `keywords`, `disabled` and `data`.
Its `onValueChange(value, item)` returns the selected key and metadata.

`Modal` and `AlertModal` are controlled by `isOpen` and `onClose`. `AlertModal`
also needs `onConfirm` and `loading`; confirmation does not close it automatically.
For composed overlays, provide a title, description and keyboard accessible actions.

| Notification system | Mount once | Notification function |
| --- | --- | --- |
| Built-in toast | `Toaster` from `@blencm/ui` | `toast` or `useToast` from `@blencm/ui`. |
| Sonner | `ToasterSonner` / `SonnerToaster` from `@blencm/ui` | `toast` from `sonner`. |

The notification functions use different renderers. See
[dialogs, notifications and files](./docs/guides/overlays-feedback.md) for complete
examples with pending and error states.

## Files and scroll layouts

`Dropzone` and `FileUpload` return local `File[]` values; your application uploads
them. Configure `accept` and `options` (`maxSize`, `maxFiles`, `multiple`,
`onDropRejected`) to validate selection. `options` is spread last, so
`options.onDrop` replaces the wrapper callbacks. `FileUpload` accepts images by
default and previews the first file.

`ScrollView` supports `fit="fill"`, `"viewport"` and `"content"`, plus vertical,
horizontal or both scroll axes. Fill mode needs a bounded parent and `min-h-0`
through flex ancestors. Use `maxHeight`/`maxWidth` with CSS strings or pixel numbers.

## Styling and accessibility

Most form controls share sizes `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl` and
variants `outline`, `soft`, `ghost`, `filled`, `flushed`, `unstyled`, `link`.
`customSize` overrides individual size slots. Buttons have their own complete
variant and size sets in the API reference.

Use `cn` to merge class names; `buttonVariants`, `iconButtonVariants`,
`getFormSizeClasses` and `getFormControlSizeClass` support custom compositions.
`SidebarProvider`/`useSidebar` expose shared `isMinimized` state and `toggle`;
they do not render a sidebar.

Keep visible labels, meaningful overlay titles and focus indicators. `IconButton`
requires `aria-label`. When using `asChild`, supply one child that forwards props
and refs. An anchor with `aria-disabled` still needs application logic to prevent
navigation. See the [accessibility guide](./docs/guides/accessibility.md).

## Editor tooling

```bash
pnpm exec blencm-ui init-vscode
# npx blencm-ui init-vscode
```

This merges Tailwind IntelliSense settings and extension recommendations into
`.vscode`. It does not copy or install component source files.

---

## Development

Use English for all UI text, descriptions, documentation, examples, comments,
and CLI messages.

```bash
pnpm install --frozen-lockfile
pnpm docs:generate
pnpm docs:check
pnpm lint
pnpm typecheck
pnpm test --runInBand
pnpm build
pnpm build:demo
```

Guides and usage notes live in `src/demo/docs/guides.ts` and
`src/demo/docs/component-notes.ts`. The generator reads the public barrel and
TypeScript props to create `api.generated.json` and the Markdown documentation.
`docs:check` typechecks 22 complete guide examples, detects stale generated files
and checks component coverage and cross-links. The deployment workflow runs it
before building. `build:demo` refreshes documentation before building the catalog.
Regenerate documentation whenever the public API or behavior changes.

TypeScript 7 runs the `tsc` commands. The `typescript` dependency aliases the
TypeScript 6 compatibility package so ESLint can use its compiler API, following
the [official side-by-side setup](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-6.0).

---

## Sponsor

**[MultiBase Studio](https://multibasestudio.com/)** is a desktop client for SQL, NoSQL, and cloud databases. Connect PostgreSQL, MySQL, MongoDB, Redis, SQLite, and 40+ engines from one app — query with autocomplete, explore schemas, edit data, and run backups without switching tools.

Available on Windows, macOS, and Linux. The [free plan](https://multibasestudio.com/) does not expire and does not require a credit card.

---

## License

[MIT](./LICENSE) · [GitHub](https://github.com/blencm/ui)
