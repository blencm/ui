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

function copy(en: string, es: string): LocalizedText {
  return { en, es };
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
    copy("Button with variants, sizes, and loading state.", "Botón con variantes, tamaños y estado de carga."),
    () => import("./pages/primitives/button"),
  ),
  demo(
    "icon-button",
    "IconButton",
    "buttons",
    copy("Icon-only button.", "Botón solo icono."),
    () => import("./pages/primitives/icon-button"),
  ),
  demo(
    "toggle",
    "Toggle",
    "buttons",
    copy("Pressed / unpressed toggle button.", "Botón de estado pulsado / no pulsado."),
    () => import("./pages/primitives/toggle"),
  ),
  demo(
    "toggle-group",
    "ToggleGroup",
    "buttons",
    copy("Group of toggles that share a value.", "Grupo de toggles con un valor compartido."),
    () => import("./pages/primitives/toggle-group"),
  ),

  demo(
    "input",
    "Input",
    "form-controls",
    copy("Text field with form-system variants and sizes.", "Campo de texto con variantes y tamaños del sistema de formularios."),
    () => import("./pages/primitives/input"),
  ),
  demo(
    "textarea",
    "Textarea",
    "form-controls",
    copy("Multiline text field.", "Campo de texto multilínea."),
    () => import("./pages/primitives/textarea"),
  ),
  demo(
    "label",
    "Label",
    "form-controls",
    copy("Accessible label for form controls.", "Etiqueta accesible para controles de formulario."),
    () => import("./pages/primitives/label"),
  ),
  demo(
    "checkbox",
    "Checkbox",
    "form-controls",
    copy("Checkbox with sizes and variants.", "Casilla de verificación con tamaños y variantes."),
    () => import("./pages/primitives/checkbox"),
  ),
  demo(
    "radio-group",
    "RadioGroup",
    "form-controls",
    copy("Mutually exclusive options.", "Grupo de opciones mutuamente excluyentes."),
    () => import("./pages/primitives/radio-group"),
  ),
  demo(
    "select",
    "Select",
    "form-controls",
    copy("Low-level option selector.", "Selector de opciones de bajo nivel."),
    () => import("./pages/primitives/select"),
  ),
  demo(
    "switch",
    "Switch",
    "form-controls",
    copy("On/off switch.", "Interruptor on/off."),
    () => import("./pages/primitives/switch"),
  ),
  demo(
    "slider",
    "Slider",
    "form-controls",
    copy("Value slider.", "Control deslizante de valor."),
    () => import("./pages/primitives/slider"),
  ),
  demo(
    "calendar",
    "Calendar",
    "form-controls",
    copy("Date calendar styled by the library.", "Calendario de fechas con estilos de la librería."),
    () => import("./pages/primitives/calendar"),
  ),
  demo(
    "input-otp",
    "InputOTP",
    "form-controls",
    copy("One-time code input.", "Entrada de código de un solo uso."),
    () => import("./pages/primitives/input-otp"),
  ),

  demo(
    "dialog",
    "Dialog",
    "overlays",
    copy("Accessible modal based on Radix Dialog.", "Modal accesible basado en Radix Dialog."),
    () => import("./pages/primitives/dialog"),
  ),
  demo(
    "alert-dialog",
    "AlertDialog",
    "overlays",
    copy("Modal confirmation.", "Confirmación modal."),
    () => import("./pages/primitives/alert-dialog"),
  ),
  demo(
    "modal",
    "Modal",
    "overlays",
    copy("Controlled dialog.", "Dialog controlado."),
    () => import("./pages/primitives/modal"),
  ),
  demo(
    "sheet",
    "Sheet",
    "overlays",
    copy("Side panel over the content.", "Panel lateral sobre el contenido."),
    () => import("./pages/primitives/sheet"),
  ),
  demo(
    "drawer",
    "Drawer",
    "overlays",
    copy("Bottom panel built on Vaul.", "Panel inferior basado en Vaul."),
    () => import("./pages/primitives/drawer"),
  ),
  demo(
    "popover",
    "Popover",
    "overlays",
    copy("Floating panel anchored to a trigger.", "Panel flotante anclado a un botón."),
    () => import("./pages/primitives/popover"),
  ),
  demo(
    "hover-card",
    "HoverCard",
    "overlays",
    copy("Card that appears on hover.", "Tarjeta que aparece al pasar el cursor."),
    () => import("./pages/primitives/hover-card"),
  ),
  demo(
    "tooltip",
    "Tooltip",
    "overlays",
    copy("Help text on hover.", "Texto de ayuda al pasar el cursor."),
    () => import("./pages/primitives/tooltip"),
  ),
  demo(
    "dropdown-menu",
    "DropdownMenu",
    "overlays",
    copy("Dropdown menu anchored to a trigger.", "Menú desplegable anclado a un trigger."),
    () => import("./pages/primitives/dropdown-menu"),
  ),
  demo(
    "context-menu",
    "ContextMenu",
    "overlays",
    copy("Right-click menu.", "Menú clic derecho."),
    () => import("./pages/primitives/context-menu"),
  ),
  demo(
    "command",
    "Command",
    "overlays",
    copy("Command palette with search.", "Paleta de comandos con búsqueda."),
    () => import("./pages/primitives/command"),
  ),

  demo(
    "breadcrumb",
    "Breadcrumb",
    "navigation",
    copy("Navigation path.", "Ruta de navegación."),
    () => import("./pages/primitives/breadcrumb"),
  ),
  demo(
    "navigation-menu",
    "NavigationMenu",
    "navigation",
    copy("Navigation with a panel.", "Navegación con panel."),
    () => import("./pages/primitives/navigation-menu"),
  ),
  demo(
    "menubar",
    "Menubar",
    "navigation",
    copy("Application menu bar.", "Barra de menús de aplicación."),
    () => import("./pages/primitives/menubar"),
  ),
  demo(
    "pagination",
    "Pagination",
    "navigation",
    copy("Low-level pagination controls.", "Controles de paginación de bajo nivel."),
    () => import("./pages/primitives/pagination"),
  ),
  demo(
    "tabs",
    "Tabs",
    "navigation",
    copy("Tabs to switch views.", "Pestañas para cambiar de vista."),
    () => import("./pages/primitives/tabs"),
  ),

  demo(
    "alert",
    "Alert",
    "feedback",
    copy("Inline messages.", "Mensajes inline."),
    () => import("./pages/primitives/alert"),
  ),
  demo(
    "progress",
    "Progress",
    "feedback",
    copy("Determinate progress bar.", "Barra de progreso determinada."),
    () => import("./pages/primitives/progress"),
  ),
  demo(
    "skeleton",
    "Skeleton",
    "feedback",
    copy("Loading placeholder.", "Placeholder de carga."),
    () => import("./pages/primitives/skeleton"),
  ),
  demo(
    "toast",
    "Toast",
    "feedback",
    copy("useToast notifications.", "Notificaciones useToast."),
    () => import("./pages/primitives/toast"),
  ),
  demo(
    "sonner",
    "Sonner",
    "feedback",
    copy("Sonner toasts.", "Toasts de sonner."),
    () => import("./pages/primitives/sonner"),
  ),

  demo(
    "table",
    "Table",
    "data-display",
    copy("Styled HTML table.", "Tabla HTML estilizada."),
    () => import("./pages/primitives/table"),
  ),
  demo(
    "avatar",
    "Avatar",
    "data-display",
    copy("Profile photo with initials fallback.", "Foto de perfil con fallback de iniciales."),
    () => import("./pages/primitives/avatar"),
  ),
  demo(
    "badge",
    "Badge",
    "data-display",
    copy("Compact labels for status or category.", "Etiquetas compactas para estado o categoría."),
    () => import("./pages/primitives/badge"),
  ),
  demo(
    "card",
    "Card",
    "data-display",
    copy("Container with header, content, and footer.", "Contenedor con encabezado, contenido y pie."),
    () => import("./pages/primitives/card"),
  ),
  demo(
    "carousel",
    "Carousel",
    "data-display",
    copy("Horizontal carousel with controls.", "Carrusel horizontal con controles."),
    () => import("./pages/primitives/carousel"),
  ),

  demo(
    "accordion",
    "Accordion",
    "layout",
    copy("Expandable sections.", "Secciones expandibles."),
    () => import("./pages/primitives/accordion"),
  ),
  demo(
    "collapsible",
    "Collapsible",
    "layout",
    copy("Show or hide a content block.", "Muestra u oculta un bloque de contenido."),
    () => import("./pages/primitives/collapsible"),
  ),
  demo(
    "aspect-ratio",
    "AspectRatio",
    "layout",
    copy("Fixed aspect ratio.", "Proporción fija."),
    () => import("./pages/primitives/aspect-ratio"),
  ),
  demo(
    "separator",
    "Separator",
    "layout",
    copy("Horizontal or vertical divider.", "Línea divisoria horizontal o vertical."),
    () => import("./pages/primitives/separator"),
  ),
  demo(
    "scroll-area",
    "ScrollArea",
    "layout",
    copy("Styled scroll area.", "Área con scroll estilizado."),
    () => import("./pages/primitives/scroll-area"),
  ),
  demo(
    "scroll-view",
    "ScrollView",
    "layout",
    copy(
      "Adaptive scroll that fills remaining space, the viewport, or a max height.",
      "Scroll adaptable que llena el espacio restante, el viewport o una altura máxima.",
    ),
    () => import("./pages/primitives/scroll-view"),
  ),
  demo(
    "resizable",
    "Resizable",
    "layout",
    copy("Resizable panels.", "Paneles redimensionables."),
    () => import("./pages/primitives/resizable"),
  ),

  demo(
    "form",
    "Form",
    "forms",
    copy("Form with React Hook Form and Zod.", "Formulario con React Hook Form y Zod."),
    () => import("./pages/forms/form"),
  ),
  demo(
    "form-field",
    "FormField",
    "forms",
    copy("Input wired to React Hook Form.", "Input con React Hook Form."),
    () => import("./pages/forms/form-field"),
  ),
  demo(
    "form-select",
    "FormSelect",
    "forms",
    copy("Select wired to React Hook Form.", "Select con React Hook Form."),
    () => import("./pages/forms/form-select"),
  ),
  demo(
    "form-checkbox",
    "FormCheckbox",
    "forms",
    copy("Checkbox wired to React Hook Form.", "Checkbox con React Hook Form."),
    () => import("./pages/forms/form-checkbox"),
  ),
  demo(
    "form-date",
    "FormDate",
    "forms",
    copy("Date field wired to React Hook Form.", "Fecha con React Hook Form."),
    () => import("./pages/forms/form-date"),
  ),
  demo(
    "form-time",
    "FormTime",
    "forms",
    copy("Time field wired to React Hook Form.", "Hora con React Hook Form."),
    () => import("./pages/forms/form-time"),
  ),
  demo(
    "form-textarea",
    "FormTextarea",
    "forms",
    copy("Textarea wired to React Hook Form.", "Textarea con React Hook Form."),
    () => import("./pages/forms/form-textarea"),
  ),
  demo(
    "ui-input",
    "UiInput",
    "forms",
    copy("Input with label.", "Input con label."),
    () => import("./pages/forms/ui-input"),
  ),
  demo(
    "ui-select",
    "UiSelect",
    "forms",
    copy("Select with label.", "Select con label."),
    () => import("./pages/forms/ui-select"),
  ),
  demo(
    "ui-checkbox",
    "UiCheckbox",
    "forms",
    copy("Checkbox with label.", "Checkbox con label."),
    () => import("./pages/forms/ui-checkbox"),
  ),
  demo(
    "ui-date",
    "UiDate",
    "forms",
    copy("Standalone date field.", "Fecha standalone."),
    () => import("./pages/forms/ui-date"),
  ),
  demo(
    "ui-time",
    "UiTime",
    "forms",
    copy("Standalone time field.", "Hora standalone."),
    () => import("./pages/forms/ui-time"),
  ),
  demo(
    "ui-textarea",
    "UiTextarea",
    "forms",
    copy("Textarea with label.", "Textarea con label."),
    () => import("./pages/forms/ui-textarea"),
  ),

  demo(
    "alert-modal",
    "AlertModal",
    "composites",
    copy("Ready-made confirmation dialog.", "Confirmación lista para usar."),
    () => import("./pages/shared/alert-modal"),
  ),
  demo(
    "breadcrumbs",
    "Breadcrumbs",
    "composites",
    copy("Path built from items.", "Ruta construida desde items."),
    () => import("./pages/shared/breadcrumbs"),
  ),
  demo(
    "data-table",
    "DataTable",
    "composites",
    copy("Table with pagination, templates, and accents on TanStack Table.", "Tabla con paginación, templates y acentos sobre TanStack Table."),
    () => import("./pages/shared/data-table"),
  ),
  demo(
    "data-table-skeleton",
    "DataTableSkeleton",
    "composites",
    copy("Table loading skeleton.", "Skeleton de tabla."),
      () => import("./pages/shared/data-table-skeleton"),
    ),
  demo(
    "dropzone",
    "Dropzone",
    "composites",
    copy("Drag and drop files.", "Arrastrar archivos."),
    () => import("./pages/shared/dropzone"),
  ),
  demo(
    "file-upload",
    "FileUpload",
    "composites",
    copy("Image upload.", "Subida de imagen."),
    () => import("./pages/shared/file-upload"),
  ),
  demo(
    "heading",
    "Heading",
    "composites",
    copy("Page title.", "Título de página."),
    () => import("./pages/shared/heading"),
  ),
  demo(
    "page-head",
    "PageHead",
    "composites",
    copy("Document title.", "Título del documento."),
    () => import("./pages/shared/page-head"),
  ),
  demo(
    "pagination-section",
    "PaginationSection",
    "composites",
    copy("List pagination.", "Paginación de listas."),
    () => import("./pages/shared/pagination-section"),
  ),
  demo(
    "search-input",
    "SearchInput",
    "composites",
    copy("Search with debounce.", "Búsqueda con debounce."),
    () => import("./pages/shared/search-input"),
  ),
  demo(
    "searchable-select",
    "SearchableSelect",
    "composites",
    copy("Select with a search field.", "Select con buscador."),
    () => import("./pages/shared/searchable-select"),
  ),
];

export function getDemoBySlug(slug: string) {
  return demos.find((entry) => entry.slug === slug);
}
