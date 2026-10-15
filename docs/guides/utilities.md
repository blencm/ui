# Hooks & utilities

Discover public hooks, contexts, style functions and helper types.

## SidebarProvider and useSidebar

SidebarProvider owns the isMinimized boolean and a toggle function. It supplies state only; build your sidebar markup and responsive behavior in your application. Use the hook inside its provider to share state.


```tsx
import { Button, SidebarProvider, useSidebar } from '@blencm/ui';

function SidebarContent() {
  const { isMinimized, toggle } = useSidebar();
  return <aside>
    <Button aria-expanded={!isMinimized} onClick={toggle}>Toggle sidebar</Button>
    {!isMinimized && <nav aria-label="Workspace"><a href="/projects">Projects</a></nav>}
  </aside>;
}
export function WorkspaceSidebar() {
  return <SidebarProvider><SidebarContent /></SidebarProvider>;
}
```

## Style functions and types

buttonVariants, iconButtonVariants, badgeVariants, toggleVariants and navigationMenuTriggerStyle return component class strings. cn combines conditional classes and resolves Tailwind conflicts.

The shared form system exports getFormSizeClasses, getFormControlSizeClass, formSizeVariants, formInputVariants, formCompositeVariants, base/error class constants and the SizeProps, VariantProps, SizeClasses, CustomSize and SelectOption types.

FormSizeProps and FormVariantProps are compatibility aliases. Inspect the API reference for the exact signatures and all exported constants.

## Form composition helpers

useFormField reads generated ids and field error state from the form contexts. FormFieldContext and FormItemContext connect custom controls to FormLabel, FormControl, FormDescription and FormMessage.

getDefaultOptionValue reads a string item or its value property. getDefaultOptionLabel reads label or falls back to the value. getErrorMessage returns a string field error message when available.

normalizeSearchText removes diacritics and lowercases text. getNextEnabledIndex navigates enabled SelectOption items using a direction of 1 or -1. SearchableSelect has its own internal filtering logic.

## Icons, preview and table types

Icons is a public icon registry. Its keys include dashboard, login, close, profile, spinner, chevronLeft, chevronRight, trash, settings, check, sun, moon and others listed by its type.

ImagePreview accepts a local File, creates an object URL and releases it on cleanup. It is exported separately from FileUpload.

DataTableColumnDef, DataTableProps, DataTableSlots, DataTableAccent and DataTableFeatures describe table integration. DATA_TABLE_TEMPLATES exposes the built-in slot sets and dataTableFeatures is the configured feature value.

The API reference includes every export from src/index.ts, including lower-level toast helpers and contexts. Prefer the documented components and hooks for normal application work.

## Related components

- [Form](https://ui.blencm.com/form)
- [FileUpload](https://ui.blencm.com/file-upload)
- [DataTable](https://ui.blencm.com/data-table)
- [Toast](https://ui.blencm.com/toast)

