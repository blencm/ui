import * as React from "react";

import { DEMO_GROUPS, type DemoGroup } from "./groups";
import type { Locale } from "./i18n/types";

export { DEMO_GROUPS, type DemoGroup };

export type LocalizedText = Record<Locale, string>;

export type DemoEntry = {
  slug: string;
  title: string;
  description: LocalizedText;
  group: DemoGroup;
  component: React.LazyExoticComponent<React.ComponentType>;
};

function copy(en: string): LocalizedText {
  return { en };
}

function demo(
  slug: string,
  title: string,
  group: DemoGroup,
  description: LocalizedText,
  loader: () => Promise<{ default: React.ComponentType }>,
): DemoEntry {
  return {
    slug,
    title,
    group,
    description,
    component: React.lazy(loader),
  };
}

export const demos: DemoEntry[] = [
  demo(
    "button",
    "Button",
    "buttons",
    copy("Button with variants, sizes, and loading state."),
    () => import("./pages/primitives/button"),
  ),
  demo(
    "icon-button",
    "IconButton",
    "buttons",
    copy("Icon-only button."),
    () => import("./pages/primitives/icon-button"),
  ),
  demo(
    "toggle",
    "Toggle",
    "buttons",
    copy("Pressed / unpressed toggle button."),
    () => import("./pages/primitives/toggle"),
  ),
  demo(
    "toggle-group",
    "ToggleGroup",
    "buttons",
    copy("Group of toggles that share a value."),
    () => import("./pages/primitives/toggle-group"),
  ),

  demo(
    "input",
    "Input",
    "form-controls",
    copy("Text field with form-system variants and sizes."),
    () => import("./pages/primitives/input"),
  ),
  demo(
    "textarea",
    "Textarea",
    "form-controls",
    copy("Multiline text field."),
    () => import("./pages/primitives/textarea"),
  ),
  demo(
    "label",
    "Label",
    "form-controls",
    copy("Accessible label for form controls."),
    () => import("./pages/primitives/label"),
  ),
  demo(
    "checkbox",
    "Checkbox",
    "form-controls",
    copy("Checkbox with sizes and variants."),
    () => import("./pages/primitives/checkbox"),
  ),
  demo(
    "radio-group",
    "RadioGroup",
    "form-controls",
    copy("Mutually exclusive options."),
    () => import("./pages/primitives/radio-group"),
  ),
  demo(
    "select",
    "Select",
    "form-controls",
    copy("Low-level option selector."),
    () => import("./pages/primitives/select"),
  ),
  demo(
    "switch",
    "Switch",
    "form-controls",
    copy("On/off switch."),
    () => import("./pages/primitives/switch"),
  ),
  demo(
    "slider",
    "Slider",
    "form-controls",
    copy("Value slider."),
    () => import("./pages/primitives/slider"),
  ),
  demo(
    "calendar",
    "Calendar",
    "form-controls",
    copy("Date calendar styled by the library."),
    () => import("./pages/primitives/calendar"),
  ),
  demo(
    "input-otp",
    "InputOTP",
    "form-controls",
    copy("One-time code input."),
    () => import("./pages/primitives/input-otp"),
  ),

  demo(
    "dialog",
    "Dialog",
    "overlays",
    copy("Accessible modal based on Radix Dialog."),
    () => import("./pages/primitives/dialog"),
  ),
  demo(
    "alert-dialog",
    "AlertDialog",
    "overlays",
    copy("Modal confirmation."),
    () => import("./pages/primitives/alert-dialog"),
  ),
  demo(
    "modal",
    "Modal",
    "overlays",
    copy("Controlled dialog."),
    () => import("./pages/primitives/modal"),
  ),
  demo(
    "sheet",
    "Sheet",
    "overlays",
    copy("Side panel over the content."),
    () => import("./pages/primitives/sheet"),
  ),
  demo(
    "drawer",
    "Drawer",
    "overlays",
    copy("Bottom panel built on Vaul."),
    () => import("./pages/primitives/drawer"),
  ),
  demo(
    "popover",
    "Popover",
    "overlays",
    copy("Floating panel anchored to a trigger."),
    () => import("./pages/primitives/popover"),
  ),
  demo(
    "hover-card",
    "HoverCard",
    "overlays",
    copy("Card that appears on hover."),
    () => import("./pages/primitives/hover-card"),
  ),
  demo(
    "tooltip",
    "Tooltip",
    "overlays",
    copy("Help text on hover."),
    () => import("./pages/primitives/tooltip"),
  ),
  demo(
    "dropdown-menu",
    "DropdownMenu",
    "overlays",
    copy("Dropdown menu anchored to a trigger."),
    () => import("./pages/primitives/dropdown-menu"),
  ),
  demo(
    "context-menu",
    "ContextMenu",
    "overlays",
    copy("Right-click menu."),
    () => import("./pages/primitives/context-menu"),
  ),
  demo(
    "command",
    "Command",
    "overlays",
    copy("Command palette with search."),
    () => import("./pages/primitives/command"),
  ),

  demo(
    "breadcrumb",
    "Breadcrumb",
    "navigation",
    copy("Navigation path."),
    () => import("./pages/primitives/breadcrumb"),
  ),
  demo(
    "navigation-menu",
    "NavigationMenu",
    "navigation",
    copy("Navigation with a panel."),
    () => import("./pages/primitives/navigation-menu"),
  ),
  demo(
    "menubar",
    "Menubar",
    "navigation",
    copy("Application menu bar."),
    () => import("./pages/primitives/menubar"),
  ),
  demo(
    "pagination",
    "Pagination",
    "navigation",
    copy("Low-level pagination controls."),
    () => import("./pages/primitives/pagination"),
  ),
  demo(
    "tabs",
    "Tabs",
    "navigation",
    copy("Tabs to switch views."),
    () => import("./pages/primitives/tabs"),
  ),

  demo(
    "alert",
    "Alert",
    "feedback",
    copy("Inline messages."),
    () => import("./pages/primitives/alert"),
  ),
  demo(
    "progress",
    "Progress",
    "feedback",
    copy("Determinate progress bar."),
    () => import("./pages/primitives/progress"),
  ),
  demo(
    "skeleton",
    "Skeleton",
    "feedback",
    copy("Loading placeholder."),
    () => import("./pages/primitives/skeleton"),
  ),
  demo(
    "toast",
    "Toast",
    "feedback",
    copy("useToast notifications."),
    () => import("./pages/primitives/toast"),
  ),
  demo(
    "sonner",
    "Sonner",
    "feedback",
    copy("Sonner toasts."),
    () => import("./pages/primitives/sonner"),
  ),

  demo(
    "table",
    "Table",
    "data-display",
    copy("Styled HTML table."),
    () => import("./pages/primitives/table"),
  ),
  demo(
    "avatar",
    "Avatar",
    "data-display",
    copy("Profile photo with initials fallback."),
    () => import("./pages/primitives/avatar"),
  ),
  demo(
    "badge",
    "Badge",
    "data-display",
    copy("Compact labels for status or category."),
    () => import("./pages/primitives/badge"),
  ),
  demo(
    "card",
    "Card",
    "data-display",
    copy("Container with header, content, and footer."),
    () => import("./pages/primitives/card"),
  ),
  demo(
    "carousel",
    "Carousel",
    "data-display",
    copy("Horizontal carousel with controls."),
    () => import("./pages/primitives/carousel"),
  ),

  demo(
    "accordion",
    "Accordion",
    "layout",
    copy("Expandable sections."),
    () => import("./pages/primitives/accordion"),
  ),
  demo(
    "collapsible",
    "Collapsible",
    "layout",
    copy("Show or hide a content block."),
    () => import("./pages/primitives/collapsible"),
  ),
  demo(
    "aspect-ratio",
    "AspectRatio",
    "layout",
    copy("Fixed aspect ratio."),
    () => import("./pages/primitives/aspect-ratio"),
  ),
  demo(
    "separator",
    "Separator",
    "layout",
    copy("Horizontal or vertical divider."),
    () => import("./pages/primitives/separator"),
  ),
  demo(
    "scroll-area",
    "ScrollArea",
    "layout",
    copy("Styled scroll area."),
    () => import("./pages/primitives/scroll-area"),
  ),
  demo(
    "scroll-view",
    "ScrollView",
    "layout",
    copy(
      "Adaptive scroll that fills remaining space, the viewport, or a max height.",
    ),
    () => import("./pages/primitives/scroll-view"),
  ),
  demo(
    "resizable",
    "Resizable",
    "layout",
    copy("Resizable panels."),
    () => import("./pages/primitives/resizable"),
  ),

  demo(
    "form",
    "Form",
    "forms",
    copy("Form with React Hook Form and Zod."),
    () => import("./pages/forms/form"),
  ),
  demo(
    "form-field",
    "FormField",
    "forms",
    copy("Input wired to React Hook Form."),
    () => import("./pages/forms/form-field"),
  ),
  demo(
    "form-select",
    "FormSelect",
    "forms",
    copy("Select wired to React Hook Form."),
    () => import("./pages/forms/form-select"),
  ),
  demo(
    "form-checkbox",
    "FormCheckbox",
    "forms",
    copy("Checkbox wired to React Hook Form."),
    () => import("./pages/forms/form-checkbox"),
  ),
  demo(
    "form-date",
    "FormDate",
    "forms",
    copy("Date field wired to React Hook Form."),
    () => import("./pages/forms/form-date"),
  ),
  demo(
    "form-time",
    "FormTime",
    "forms",
    copy("Time field wired to React Hook Form."),
    () => import("./pages/forms/form-time"),
  ),
  demo(
    "form-textarea",
    "FormTextarea",
    "forms",
    copy("Textarea wired to React Hook Form."),
    () => import("./pages/forms/form-textarea"),
  ),
  demo(
    "ui-input",
    "UiInput",
    "forms",
    copy("Input with label."),
    () => import("./pages/forms/ui-input"),
  ),
  demo(
    "ui-select",
    "UiSelect",
    "forms",
    copy("Select with label."),
    () => import("./pages/forms/ui-select"),
  ),
  demo(
    "ui-checkbox",
    "UiCheckbox",
    "forms",
    copy("Checkbox with label."),
    () => import("./pages/forms/ui-checkbox"),
  ),
  demo(
    "ui-date",
    "UiDate",
    "forms",
    copy("Standalone date field."),
    () => import("./pages/forms/ui-date"),
  ),
  demo(
    "ui-time",
    "UiTime",
    "forms",
    copy("Standalone time field."),
    () => import("./pages/forms/ui-time"),
  ),
  demo(
    "ui-textarea",
    "UiTextarea",
    "forms",
    copy("Textarea with label."),
    () => import("./pages/forms/ui-textarea"),
  ),

  demo(
    "alert-modal",
    "AlertModal",
    "composites",
    copy("Ready-made confirmation dialog."),
    () => import("./pages/shared/alert-modal"),
  ),
  demo(
    "breadcrumbs",
    "Breadcrumbs",
    "composites",
    copy("Path built from items."),
    () => import("./pages/shared/breadcrumbs"),
  ),
  demo(
    "data-table",
    "DataTable",
    "composites",
    copy("Table with pagination, templates, and accents on TanStack Table."),
    () => import("./pages/shared/data-table"),
  ),
  demo(
    "data-table-skeleton",
    "DataTableSkeleton",
    "composites",
    copy("Table loading skeleton."),
      () => import("./pages/shared/data-table-skeleton"),
    ),
  demo(
    "dropzone",
    "Dropzone",
    "composites",
    copy("Drag and drop files."),
    () => import("./pages/shared/dropzone"),
  ),
  demo(
    "file-upload",
    "FileUpload",
    "composites",
    copy("Image upload."),
    () => import("./pages/shared/file-upload"),
  ),
  demo(
    "heading",
    "Heading",
    "composites",
    copy("Page title."),
    () => import("./pages/shared/heading"),
  ),
  demo(
    "page-head",
    "PageHead",
    "composites",
    copy("Document title."),
    () => import("./pages/shared/page-head"),
  ),
  demo(
    "pagination-section",
    "PaginationSection",
    "composites",
    copy("List pagination."),
    () => import("./pages/shared/pagination-section"),
  ),
  demo(
    "search-input",
    "SearchInput",
    "composites",
    copy("Search with debounce."),
    () => import("./pages/shared/search-input"),
  ),
  demo(
    "searchable-select",
    "SearchableSelect",
    "composites",
    copy("Select with a search field."),
    () => import("./pages/shared/searchable-select"),
  ),
];

export function getDemoBySlug(slug: string) {
  return demos.find((entry) => entry.slug === slug);
}
