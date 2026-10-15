# Accessibility & composition

Preserve accessible behavior when composing and customizing the library.

## Labels and semantics

Radix primitives supply interaction semantics, but the application must provide names, descriptions and meaningful content. Connect Label htmlFor to the control id, keep labels visible and describe errors near their fields.

- IconButton requires aria-label. A tooltip does not replace an accessible button name.
- Include DialogTitle/SheetTitle/DrawerTitle and a useful description in overlays.
- Heading and CardTitle are styled text elements; choose semantic headings in the surrounding document.
- Table headings should describe each column. Provide buttons or links for row actions instead of relying only on row clicks.
- Use status text in addition to color, and check text/focus contrast after theme overrides.

## Compose with asChild

asChild merges primitive behavior into one child. The child must render an appropriate element and forward the props and ref it receives. Avoid nested interactive elements such as a button inside a button.

When Button or IconButton renders an anchor through asChild, aria-disabled communicates state but does not stop navigation. Prevent or remove the action while disabled in your application.


```tsx
import { Button, Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@blencm/ui';

export function ProjectDetails() {
  return <Dialog>
    <DialogTrigger asChild><Button variant="outline">Project details</Button></DialogTrigger>
    <DialogContent>
      <DialogTitle>Project details</DialogTitle>
      <DialogDescription>Review the current project information.</DialogDescription>
      <p>All changes are up to date.</p>
    </DialogContent>
  </Dialog>;
}
```

## Keyboard and focus

Keep primitive triggers, items and content together so their focus relationships remain intact. Check Tab/Shift+Tab, Enter/Space, Escape, arrow navigation and focus return after closing an overlay.

Do not make hover cards, right-click menus or drag gestures the only path to essential actions. Scroll regions need bounded sizes and keyboard reachable content.

## Loading, failures and motion

Use loading on buttons during asynchronous actions. Mark updating result regions aria-busy and announce useful completion or result counts through role="status". Keep blocking errors visible near the task.

For DataTable, animate={false} disables its row transitions. Review other application animations against the user reduced-motion preference.

## Native attributes and API tables

Components that extend React HTML attributes retain their corresponding id, className, style, data-*, aria-* and event props. The component reference omits the repeated standard DOM attribute list and shows library/dependency-specific props.

A dash in the default column means no local default was extracted. A dependency may supply its own default. Required markers describe the type contract; union-mode requirements, such as Calendar selection modes, must be read with their mode-specific types.

## Related components

- [Label](https://ui.blencm.com/label)
- [IconButton](https://ui.blencm.com/icon-button)
- [Dialog](https://ui.blencm.com/dialog)
- [Tooltip](https://ui.blencm.com/tooltip)
- [Table](https://ui.blencm.com/table)

