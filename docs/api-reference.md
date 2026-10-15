# Public API reference

Generated from `src/index.ts`. Run `pnpm docs:generate` to refresh.

Standard native DOM attributes are omitted from prop tables. Local defaults are extracted from destructuring and CVA defaults; a dash means none was declared locally. Dependency defaults can still apply. Requirements for union props depend on the selected mode.

## src/components/Accordion/accordion.tsx

<a id="accordion"></a>

### Accordion

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `type` | `typeof AccordionType.Single<br>\| typeof AccordionType.Multiple` | Yes | — |  |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `collapsible` | `boolean \| undefined` | No | — | Whether an accordion item can be collapsed after it has been opened. |
| `defaultValue` | `string \| undefined<br>\| string[] \| undefined` | No | — | The value of the item whose content is expanded when the accordion is initially rendered. Use<br>`defaultValue` if you do not need to control the state of an accordion. |
| `dir` | `("ltr" \| "rtl") \| undefined` | No | — | The language read direction. |
| `disabled` | `boolean \| undefined` | No | — | Whether or not an accordion is disabled from user interaction. |
| `onValueChange` | `{<br>        bivarianceHack(value: string): void;<br>    }['bivarianceHack'] \| undefined<br>\| {<br>        bivarianceHack(value: string[]): void;<br>    }['bivarianceHack'] \| undefined` | No | — | The callback that fires when the state of the accordion changes. |
| `orientation` | `("vertical" \| "horizontal") \| undefined` | No | — | The layout in which the Accordion operates. |
| `value` | `string \| undefined<br>\| string[] \| undefined` | No | — | The controlled stateful value of the accordion item whose content is expanded. |


```ts
Accordion: React.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & React.RefAttributes<HTMLDivElement>>
```

<a id="accordioncontent"></a>

### AccordionContent

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |


```ts
AccordionContent: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="accordionitem"></a>

### AccordionItem

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | Yes | — | A string value for the accordion item. All items within an accordion should use a unique value. |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `disabled` | `boolean \| undefined` | No | — | Whether or not an accordion item is disabled from user interaction. |


```ts
AccordionItem: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="accordiontrigger"></a>

### AccordionTrigger

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
AccordionTrigger: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>
```

## src/components/alert.tsx

<a id="alert"></a>

### Alert

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `variant` | `"default" \| "destructive" \| null \| undefined` | No | `'default'` | Visual style. The type lists supported variants for this component. |


```ts
Alert: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({ variant?: "default" | "destructive" | null | undefined; } & import("class-variance-authority/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLDivElement>>
```

<a id="alertdescription"></a>

### AlertDescription

component


```ts
AlertDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>
```

<a id="alerttitle"></a>

### AlertTitle

component


```ts
AlertTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLParagraphElement>>
```

## src/components/alert-dialog.tsx

<a id="alertdialog"></a>

### AlertDialog

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `children` | `React.ReactNode \| undefined` | No | — | Content or composed component parts. |
| `defaultOpen` | `boolean \| undefined` | No | — | Initial visibility when the component manages its own open state. |
| `onOpenChange` | `{<br>        bivarianceHack(open: boolean): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Called when visibility should change; update controlled state here. |
| `open` | `boolean \| undefined` | No | — | Controlled visibility state. Pair with onOpenChange. |


```ts
AlertDialog: React.FC<AlertDialogPrimitive.AlertDialogProps>
```

<a id="alertdialogaction"></a>

### AlertDialogAction

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
AlertDialogAction: React.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogActionProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>
```

<a id="alertdialogcancel"></a>

### AlertDialogCancel

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
AlertDialogCancel: React.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogCancelProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>
```

<a id="alertdialogcontent"></a>

### AlertDialogContent

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `deferPointerDownOutside` | `boolean \| undefined` | No | — | When `true`, a `'pointerdown'` event outside of the layered element will<br>wait for the interaction's click event before dispatching, allowing<br>third-party code to stop propagation of later events and cancel dismissal. |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |
| `onCloseAutoFocus` | `FocusScopeProps['onUnmountAutoFocus'] \| undefined` | No | — | Event handler called when auto-focusing on close.<br>Can be prevented. |
| `onEscapeKeyDown` | `{<br>        bivarianceHack(event: KeyboardEvent): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event handler called when the escape key is down.<br>Can be prevented. |
| `onFocusOutside` | `{<br>        bivarianceHack(event: FocusOutsideEvent): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event handler called when the focus moves outside of the `DismissableLayer`.<br>Can be prevented. |
| `onOpenAutoFocus` | `FocusScopeProps['onMountAutoFocus'] \| undefined` | No | — | Event handler called when auto-focusing on open.<br>Can be prevented. |


```ts
AlertDialogContent: React.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="alertdialogdescription"></a>

### AlertDialogDescription

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
AlertDialogDescription: React.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>
```

<a id="alertdialogfooter"></a>

### AlertDialogFooter

component


```ts
AlertDialogFooter: { ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element; displayName: string; }
```

<a id="alertdialogheader"></a>

### AlertDialogHeader

component


```ts
AlertDialogHeader: { ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element; displayName: string; }
```

<a id="alertdialogoverlay"></a>

### AlertDialogOverlay

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |


```ts
AlertDialogOverlay: React.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="alertdialogportal"></a>

### AlertDialogPortal

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `children` | `React.ReactNode \| undefined` | No | — | Content or composed component parts. |
| `container` | `PortalProps['container'] \| undefined` | No | — | Specify a container element to portal the content into. |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |


```ts
AlertDialogPortal: React.FC<AlertDialogPrimitive.AlertDialogPortalProps>
```

<a id="alertdialogtitle"></a>

### AlertDialogTitle

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
AlertDialogTitle: React.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>
```

<a id="alertdialogtrigger"></a>

### AlertDialogTrigger

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
AlertDialogTrigger: React.ForwardRefExoticComponent<AlertDialogPrimitive.AlertDialogTriggerProps & React.RefAttributes<HTMLButtonElement>>
```

## src/components/aspect-ratio.tsx

<a id="aspectratio"></a>

### AspectRatio

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `ratio` | `number \| undefined` | No | — |  |


```ts
AspectRatio: import("react").ForwardRefExoticComponent<AspectRatioPrimitive.AspectRatioProps & import("react").RefAttributes<HTMLDivElement>>
```

## src/components/avatar.tsx

<a id="avatar"></a>

### Avatar

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
Avatar: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>
```

<a id="avatarfallback"></a>

### AvatarFallback

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `delayMs` | `number \| undefined` | No | — |  |


```ts
AvatarFallback: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarFallbackProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>
```

<a id="avatarimage"></a>

### AvatarImage

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `onLoadingStatusChange` | `{<br>        bivarianceHack(status: ImageLoadingStatus): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |


```ts
AvatarImage: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & React.RefAttributes<HTMLImageElement>, "ref"> & React.RefAttributes<HTMLImageElement>>
```

## src/components/badge.tsx

<a id="badge"></a>

### Badge

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `variant` | `"default" \| "destructive" \| "secondary" \| "outline" \| null \| undefined` | No | `'default'` | Visual style. The type lists supported variants for this component. |


```ts
Badge: ({ className, variant, ...props }: BadgeProps) => React.JSX.Element
```

<a id="badgeprops"></a>

### BadgeProps

type


```ts
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}
```

<a id="badgevariants"></a>

### badgeVariants

function


```ts
badgeVariants: (props?: ({ variant?: "default" | "destructive" | "secondary" | "outline" | null | undefined; } & import("class-variance-authority/types").ClassProp) | undefined): string
```

## src/components/breadcrumb.tsx

<a id="breadcrumb"></a>

### Breadcrumb

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `separator` | `React.ReactNode` | No | — |  |


```ts
Breadcrumb: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & { separator?: React.ReactNode; } & React.RefAttributes<HTMLElement>>
```

<a id="breadcrumbellipsis"></a>

### BreadcrumbEllipsis

component


```ts
BreadcrumbEllipsis: { ({ className, ...props }: React.ComponentProps<"span">): React.JSX.Element; displayName: string; }
```

<a id="breadcrumbitem"></a>

### BreadcrumbItem

component


```ts
BreadcrumbItem: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React.RefAttributes<HTMLLIElement>>
```

<a id="breadcrumblink"></a>

### BreadcrumbLink

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
BreadcrumbLink: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & { asChild?: boolean; } & React.RefAttributes<HTMLAnchorElement>>
```

<a id="breadcrumblist"></a>

### BreadcrumbList

component


```ts
BreadcrumbList: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> & React.RefAttributes<HTMLOListElement>>
```

<a id="breadcrumbpage"></a>

### BreadcrumbPage

component


```ts
BreadcrumbPage: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>
```

<a id="breadcrumbseparator"></a>

### BreadcrumbSeparator

component


```ts
BreadcrumbSeparator: { ({ children, className, ...props }: React.ComponentProps<"li">): React.JSX.Element; displayName: string; }
```

## src/components/Button/button.tsx

<a id="button"></a>

### Button

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | `false` | Merge behavior and styles into one child element instead of rendering the default element. |
| `loaderClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `loading` | `boolean \| undefined` | No | `false` | Pending action state; disables native button actions where supported. |
| `rounded` | `"default" \| "sm" \| "lg" \| "xl" \| "full" \| null \| undefined` | No | `"default"` |  |
| `size` | `"default" \| "2xs" \| "xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "icon" \| "iconXs" \| "iconSm" \| "iconMd" \| "iconLg" \| "iconXl" \| "icon2xl" \| null \| undefined` | No | `"default"` | Control dimensions. The type lists supported size names for this component. |
| `variant` | `"link" \| "default" \| "destructive" \| "secondary" \| "outline" \| "ghost" \| "success" \| "warning" \| "info" \| "dark" \| "light" \| "soft" \| "softDestructive" \| "softSuccess" \| "softWarning" \| "softInfo" \| "outlineDestructive" \| "outlineSuccess" \| "outlineWarning" \| "outlineInfo" \| "gradient" \| "gradientSuccess" \| "gradientWarning" \| "gradientDanger" \| "premium" \| "glass" \| "neon" \| "dangerGhost" \| "successGhost" \| "warningGhost" \| "infoGhost" \| null \| undefined` | No | `"default"` | Visual style. The type lists supported variants for this component. |


```ts
Button: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<(props?: ({ variant?: "link" | "default" | "destructive" | "secondary" | "outline" | "ghost" | "success" | "warning" | "info" | "dark" | "light" | "soft" | "softDestructive" | "softSuccess" | "softWarning" | "softInfo" | "outlineDestructive" | "outlineSuccess" | "outlineWarning" | "outlineInfo" | "gradient" | "gradientSuccess" | "gradientWarning" | "gradientDanger" | "premium" | "glass" | "neon" | "dangerGhost" | "successGhost" | "warningGhost" | "infoGhost" | null | undefined; size?: "default" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "icon" | "iconXs" | "iconSm" | "iconMd" | "iconLg" | "iconXl" | "icon2xl" | null | undefined; rounded?: "default" | "sm" | "lg" | "xl" | "full" | null | undefined; } & import("class-variance-authority/types").ClassProp) | undefined) => string> & { asChild?: boolean; loading?: boolean; loaderClassName?: string; } & React.RefAttributes<HTMLButtonElement>>
```

<a id="buttonprops"></a>

### ButtonProps

type


```ts
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    loading?: boolean;
    loaderClassName?: string;
  };
```

<a id="buttonrounded"></a>

### ButtonRounded

type


```ts
export type ButtonRounded = ButtonVariantProps["rounded"];
```

<a id="buttonsize"></a>

### ButtonSize

type


```ts
export type ButtonSize = ButtonVariantProps["size"];
```

<a id="buttonvariant"></a>

### ButtonVariant

type


```ts
export type ButtonVariant = ButtonVariantProps["variant"];
```

<a id="buttonvariantprops"></a>

### ButtonVariantProps

type


```ts
export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
```

<a id="buttonvariants"></a>

### buttonVariants

function


```ts
buttonVariants: (props?: ({ variant?: "link" | "default" | "destructive" | "secondary" | "outline" | "ghost" | "success" | "warning" | "info" | "dark" | "light" | "soft" | "softDestructive" | "softSuccess" | "softWarning" | "softInfo" | "outlineDestructive" | "outlineSuccess" | "outlineWarning" | "outlineInfo" | "gradient" | "gradientSuccess" | "gradientWarning" | "gradientDanger" | "premium" | "glass" | "neon" | "dangerGhost" | "successGhost" | "warningGhost" | "infoGhost" | null | undefined; size?: "default" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "icon" | "iconXs" | "iconSm" | "iconMd" | "iconLg" | "iconXl" | "icon2xl" | null | undefined; rounded?: "default" | "sm" | "lg" | "xl" | "full" | null | undefined; } & import("class-variance-authority/types").ClassProp) | undefined): string
```

## src/components/Button/icon-button.tsx

<a id="iconbutton"></a>

### IconButton

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `aria-label` | `string` | Yes | — | Defines a string value that labels the current element. |
| `children` | `React.ReactNode` | Yes | — | Content or composed component parts. |
| `asChild` | `boolean \| undefined` | No | `false` | Merge behavior and styles into one child element instead of rendering the default element. |
| `loaderClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `loading` | `boolean \| undefined` | No | `false` | Pending action state; disables native button actions where supported. |
| `rounded` | `"default" \| "sm" \| "lg" \| "xl" \| "full" \| null \| undefined` | No | `'default'` |  |
| `size` | `"default" \| "xs" \| "sm" \| "lg" \| "xl" \| null \| undefined` | No | `'default'` | Control dimensions. The type lists supported size names for this component. |
| `variant` | `"default" \| "destructive" \| "secondary" \| "outline" \| "ghost" \| "success" \| "warning" \| "info" \| "soft" \| "softDestructive" \| "softSuccess" \| "softWarning" \| "softInfo" \| "glass" \| null \| undefined` | No | `'ghost'` | Visual style. The type lists supported variants for this component. |


```ts
IconButton: React.ForwardRefExoticComponent<Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> & VariantProps<(props?: ({ variant?: "default" | "destructive" | "secondary" | "outline" | "ghost" | "success" | "warning" | "info" | "soft" | "softDestructive" | "softSuccess" | "softWarning" | "softInfo" | "glass" | null | undefined; size?: "default" | "xs" | "sm" | "lg" | "xl" | null | undefined; rounded?: "default" | "sm" | "lg" | "xl" | "full" | null | undefined; } & import("class-variance-authority/types").ClassProp) | undefined) => string> & { asChild?: boolean; loading?: boolean; loaderClassName?: string; children: React.ReactNode; 'aria-label': string; } & React.RefAttributes<HTMLButtonElement>>
```

<a id="iconbuttonprops"></a>

### IconButtonProps

type


```ts
export type IconButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> &
  VariantProps<typeof iconButtonVariants> & {
    asChild?: boolean;
    loading?: boolean;
    loaderClassName?: string;
    children: React.ReactNode;
    'aria-label': string;
  };
```

<a id="iconbuttonvariants"></a>

### iconButtonVariants

function


```ts
iconButtonVariants: (props?: ({ variant?: "default" | "destructive" | "secondary" | "outline" | "ghost" | "success" | "warning" | "info" | "soft" | "softDestructive" | "softSuccess" | "softWarning" | "softInfo" | "glass" | null | undefined; size?: "default" | "xs" | "sm" | "lg" | "xl" | null | undefined; rounded?: "default" | "sm" | "lg" | "xl" | "full" | null | undefined; } & import("class-variance-authority/types").ClassProp) | undefined): string
```

## src/components/calendar.tsx

<a id="calendar"></a>

### Calendar

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `ISOWeek` | `boolean \| undefined` | No | — | Use ISO week dates instead of the locale setting. Setting this prop will<br>ignore `weekStartsOn` and `firstWeekContainsDate`. |
| `animate` | `boolean \| undefined` | No | — | Animate navigating between months. |
| `aria-label` | `string` | No | — | The aria-label attribute to add to the container element. |
| `aria-labelledby` | `string` | No | — | The aria-labelledby attribute to add to the container element. |
| `autoFocus` | `boolean \| undefined` | No | — | When a selection mode is set, DayPicker will focus the first selected day<br>(if set) or today's date (if not disabled).<br><br>Use this prop when you need to focus DayPicker after a user action, for<br>improved accessibility. |
| `broadcastCalendar` | `boolean \| undefined` | No | — | Display the weeks in the month following the broadcast calendar. Setting<br>this prop will ignore {@link weekStartsOn} (always Monday) and<br>{@link showOutsideDays} will default to true. |
| `captionLayout` | `"label" \| "dropdown" \| "dropdown-months" \| "dropdown-years" \| undefined` | No | — | Show dropdowns to navigate between months or years.<br><br>- `label`: Displays the month and year as a label. Default value.<br>- `dropdown`: Displays dropdowns for both month and year navigation.<br>- `dropdown-months`: Displays a dropdown only for the month navigation.<br>- `dropdown-years`: Displays a dropdown only for the year navigation.<br><br>**Note:** By default, showing the dropdown will set the {@link startMonth}<br>to 100 years ago and {@link endMonth} to the end of the current year. You<br>can override this behavior by explicitly setting `startMonth` and<br>`endMonth`. |
| `className` | `string` | No | — | Class name to add to the root element. |
| `classNames` | `Partial<ClassNames>` | No | — | Change the class names used by DayPicker.<br><br>Use this prop when you need to change the default class names — for<br>example, when importing the style via CSS modules or when using a CSS<br>framework. |
| `components` | `Partial<CustomComponents>` | No | — | Change the components used for rendering the calendar elements. |
| `dateLib` | `Partial<typeof DateLib.prototype> \| undefined` | No | — | Replace the default date library with a custom one. Experimental: not<br>guaranteed to be stable (may not respect semver). |
| `defaultMonth` | `Date` | No | — | The initial month to show in the calendar.<br><br>Use this prop to let DayPicker control the current month. If you need to<br>set the month programmatically, use {@link month} and {@link onMonthChange}. |
| `dir` | `HTMLDivElement["dir"]` | No | — | The text direction of the calendar. Use `ltr` for left-to-right (default)<br>or `rtl` for right-to-left. |
| `disableNavigation` | `boolean \| undefined` | No | — | Disable the navigation between months. This prop won't hide the navigation:<br>to hide the navigation, use {@link hideNavigation}. |
| `disabled` | `Matcher \| Matcher[] \| undefined` | No | — | Apply the `disabled` modifier to the matching days. Disabled days cannot be<br>selected when in a selection mode is set. |
| `endMonth` | `Date` | No | — | The latest month to end the month navigation. |
| `excludeDisabled` | `boolean \| undefined` | No | — | When `true`, the range will reset when including a disabled day. |
| `firstWeekContainsDate` | `1 \| 4 \| undefined` | No | — | The day of January that is always in the first week of the year. |
| `fixedWeeks` | `boolean \| undefined` | No | — | Display always 6 weeks per each month, regardless of the month’s number of<br>weeks. Weeks will be filled with the days from the next month. |
| `footer` | `React.ReactNode \| string` | No | — | Add a footer to the calendar, acting as a live region.<br><br>Use this prop to communicate the calendar's status to screen readers.<br>Prefer strings over complex UI elements. |
| `formatters` | `Partial<Formatters>` | No | — | Formatters used to format dates to strings. Use this prop to override the<br>default functions. |
| `hidden` | `Matcher \| Matcher[] \| undefined` | No | — | Apply the `hidden` modifier to the matching days. Will hide them from the<br>calendar. |
| `hideNavigation` | `boolean \| undefined` | No | — | Hide the navigation buttons. This prop won't disable the navigation: to<br>disable the navigation, use {@link disableNavigation}. |
| `hideWeekdays` | `boolean \| undefined` | No | — | Hide the row displaying the weekday row header. |
| `id` | `string` | No | — | A unique id to add to the root element. |
| `labels` | `Partial<Labels>` | No | — | Labels creators to override the defaults. Use this prop to customize the<br>aria-label attributes in DayPicker. |
| `lang` | `HTMLDivElement["lang"]` | No | — | Add the language tag to the container element.<br><br>When omitted, DayPicker uses the active locale code (`locale.code`). Set<br>this prop to override the language tag. |
| `locale` | `Partial<DayPickerLocale> \| undefined` | No | — | The locale object used to localize dates. Pass a locale from<br>`react-day-picker/locale/<code>` to localize the calendar. |
| `max` | `number` | No | — | The maximum number of selectable days. |
| `min` | `number` | No | — | The minimum number of selectable days. |
| `mode` | `Mode \| undefined` | No | — | Enable the selection of a single day, multiple days, or a range of days. |
| `modifiers` | `Record<string, Matcher \| Matcher[] \| undefined> \| undefined` | No | — | Add modifiers to the matching days. |
| `modifiersClassNames` | `ModifiersClassNames` | No | — | Change the class name for the day matching the `modifiers`. |
| `modifiersStyles` | `ModifiersStyles` | No | — | Change the class name for the day matching the {@link modifiers}. |
| `month` | `Date` | No | — | The month displayed in the calendar.<br><br>As opposed to `defaultMonth`, use this prop with `onMonthChange` to change<br>the month programmatically. |
| `navLayout` | `"around" \| "after" \| undefined` | No | — | Adjust the positioning of the navigation buttons.<br><br>- `around`: Displays the buttons on either side of the caption.<br>- `after`: Displays the buttons after the caption. This ensures the tab order<br>  matches the visual order.<br><br>If not set, DayPicker preserves its legacy layout, but the tab order may<br>not align with the visual order when using `captionLayout="dropdown"`. |
| `nonce` | `HTMLDivElement["nonce"]` | No | — | A cryptographic nonce ("number used once") which can be used by Content<br>Security Policy for the inline `style` attributes. |
| `noonSafe` | `boolean \| undefined` | No | — | Keep calendar math at noon in the configured {@link timeZone} to avoid<br>historical second-level offsets drifting dates across midnight.<br><br>This prop sets the time of the dates to noon (12:00). |
| `numberOfMonths` | `number` | No | — | The number of displayed months. |
| `numerals` | `import("react-day-picker").Numerals \| undefined` | No | — | The numeral system to use when formatting dates.<br><br>- `latn`: Latin (Western Arabic)<br>- `arab`: Arabic-Indic<br>- `arabext`: Eastern Arabic-Indic (Persian)<br>- `deva`: Devanagari<br>- `beng`: Bengali<br>- `guru`: Gurmukhi<br>- `gujr`: Gujarati<br>- `orya`: Oriya<br>- `tamldec`: Tamil<br>- `telu`: Telugu<br>- `knda`: Kannada<br>- `mlym`: Malayalam |
| `onDayBlur` | `DayEventHandler<React.FocusEvent>` | No | — | Event handler when a day is blurred. |
| `onDayClick` | `DayEventHandler<React.MouseEvent>` | No | — | Event handler when a day is clicked. |
| `onDayFocus` | `DayEventHandler<React.FocusEvent>` | No | — | Event handler when a day is focused. |
| `onDayKeyDown` | `DayEventHandler<React.KeyboardEvent>` | No | — | Event handler when a key is pressed on a day. |
| `onDayMouseEnter` | `DayEventHandler<React.MouseEvent>` | No | — | Event handler when the mouse enters a day. |
| `onDayMouseLeave` | `DayEventHandler<React.MouseEvent>` | No | — | Event handler when the mouse leaves a day. |
| `onMonthChange` | `MonthChangeEventHandler` | No | — | Event fired when the user navigates between months. |
| `onNextClick` | `MonthChangeEventHandler` | No | — | Event handler when the next month button is clicked. |
| `onPrevClick` | `MonthChangeEventHandler` | No | — | Event handler when the previous month button is clicked. |
| `onSelect` | `OnSelectHandler<Date \| undefined><br>\| OnSelectHandler<Date><br>\| OnSelectHandler<Date[] \| undefined><br>\| OnSelectHandler<Date[]><br>\| OnSelectHandler<DateRange \| undefined><br>\| OnSelectHandler<DateRange>` | No | — | Event handler when a day is selected. |
| `pagedNavigation` | `boolean \| undefined` | No | — | Paginate the month navigation displaying the `numberOfMonths` at a time. |
| `required` | `false \| undefined<br>\| boolean \| undefined` | No | — | Whether the selection is required. |
| `resetOnSelect` | `boolean \| undefined` | No | — | When `true`, clicking a day starts a new range if there is no current start<br>date or if a range is already complete. In those cases, the clicked day<br>becomes the start of the new range. When `required` is `false`, clicking<br>the same day of a single-day range clears the selection. |
| `reverseMonths` | `boolean \| undefined` | No | — | Render the months in reversed order (when {@link numberOfMonths} is set) to<br>display the most recent month first. |
| `reverseYears` | `boolean \| undefined` | No | — | Reverse the order of years in the dropdown when using<br>`captionLayout="dropdown"` or `captionLayout="dropdown-years"`. |
| `role` | `"dialog" \| "application" \| undefined` | No | — | The role attribute to add to the container element. |
| `selected` | `Date \| undefined<br>\| Date[] \| undefined<br>\| DateRange \| undefined` | No | — | The selected date. |
| `showOutsideDays` | `boolean \| undefined` | No | `true` | Show the outside days (days falling in the next or the previous month).<br><br>**Note:** when a {@link broadcastCalendar} is set, this prop defaults to<br>true. |
| `showWeekNumber` | `boolean \| undefined` | No | — | Show the week numbers column. Weeks are numbered according to the local<br>week index. |
| `startMonth` | `Date \| undefined` | No | — | The earliest month to start the month navigation. |
| `style` | `React.CSSProperties` | No | — | Style to apply to the root element. |
| `styles` | `Partial<Styles>` | No | — | Change the inline styles of the HTML elements. |
| `timeZone` | `string \| undefined` | No | — | The time zone (IANA or UTC offset) to use in the calendar (experimental).<br><br>See<br>[Wikipedia](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)<br>for the possible values. |
| `title` | `HTMLDivElement["title"]` | No | — | Add a `title` attribute to the container element. |
| `today` | `Date` | No | — | The today’s date. Default is the current date. This date will get the<br>`today` modifier to style the day. |
| `useAdditionalDayOfYearTokens` | `boolean \| undefined` | No | — | Enable `YY` and `YYYY` for day of year tokens when formatting or parsing<br>dates. |
| `useAdditionalWeekYearTokens` | `boolean \| undefined` | No | — | Enable `DD` and `DDDD` for week year tokens when formatting or parsing<br>dates. |
| `weekStartsOn` | `0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| undefined` | No | — | The index of the first day of the week (0 - Sunday). Overrides the locale's<br>default. |


```ts
Calendar: typeof Calendar
```

<a id="calendarprops"></a>

### CalendarProps

type


```ts
export type CalendarProps = React.ComponentProps<typeof DayPicker>;
```

## src/components/card.tsx

<a id="card"></a>

### Card

component


```ts
Card: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>
```

<a id="cardcontent"></a>

### CardContent

component


```ts
CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>
```

<a id="carddescription"></a>

### CardDescription

component


```ts
CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>
```

<a id="cardfooter"></a>

### CardFooter

component


```ts
CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>
```

<a id="cardheader"></a>

### CardHeader

component


```ts
CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>
```

<a id="cardtitle"></a>

### CardTitle

component


```ts
CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLParagraphElement>>
```

## src/components/carousel.tsx

<a id="carousel"></a>

### Carousel

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `opts` | `CarouselOptions` | No | — |  |
| `orientation` | `"vertical" \| "horizontal" \| undefined` | No | `'horizontal'` | Layout or scroll axis; see the type for supported values. |
| `plugins` | `CarouselPlugin` | No | — |  |
| `setApi` | `(api: CarouselApi) => void` | No | — |  |


```ts
Carousel: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & CarouselProps & React.RefAttributes<HTMLDivElement>>
```

<a id="carouselapi"></a>

### CarouselApi

type


```ts
type CarouselApi = UseEmblaCarouselType[1];
```

<a id="carouselcontent"></a>

### CarouselContent

component


```ts
CarouselContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>
```

<a id="carouselitem"></a>

### CarouselItem

component


```ts
CarouselItem: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>
```

<a id="carouselnext"></a>

### CarouselNext

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `loaderClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `loading` | `boolean \| undefined` | No | — | Pending action state; disables native button actions where supported. |
| `rounded` | `"default" \| "sm" \| "lg" \| "xl" \| "full" \| null \| undefined` | No | — |  |
| `size` | `"default" \| "2xs" \| "xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "icon" \| "iconXs" \| "iconSm" \| "iconMd" \| "iconLg" \| "iconXl" \| "icon2xl" \| null \| undefined` | No | `'icon'` | Control dimensions. The type lists supported size names for this component. |
| `variant` | `"link" \| "default" \| "destructive" \| "secondary" \| "outline" \| "ghost" \| "success" \| "warning" \| "info" \| "dark" \| "light" \| "soft" \| "softDestructive" \| "softSuccess" \| "softWarning" \| "softInfo" \| "outlineDestructive" \| "outlineSuccess" \| "outlineWarning" \| "outlineInfo" \| "gradient" \| "gradientSuccess" \| "gradientWarning" \| "gradientDanger" \| "premium" \| "glass" \| "neon" \| "dangerGhost" \| "successGhost" \| "warningGhost" \| "infoGhost" \| null \| undefined` | No | `'outline'` | Visual style. The type lists supported variants for this component. |


```ts
CarouselNext: React.ForwardRefExoticComponent<Omit<React.ButtonHTMLAttributes<HTMLButtonElement> & import("class-variance-authority").VariantProps<(props?: ({ variant?: "link" | "default" | "destructive" | "secondary" | "outline" | "ghost" | "success" | "warning" | "info" | "dark" | "light" | "soft" | "softDestructive" | "softSuccess" | "softWarning" | "softInfo" | "outlineDestructive" | "outlineSuccess" | "outlineWarning" | "outlineInfo" | "gradient" | "gradientSuccess" | "gradientWarning" | "gradientDanger" | "premium" | "glass" | "neon" | "dangerGhost" | "successGhost" | "warningGhost" | "infoGhost" | null | undefined; size?: "default" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "icon" | "iconXs" | "iconSm" | "iconMd" | "iconLg" | "iconXl" | "icon2xl" | null | undefined; rounded?: "default" | "sm" | "lg" | "xl" | "full" | null | undefined; } & import("class-variance-authority/types").ClassProp) | undefined) => string> & { asChild?: boolean; loading?: boolean; loaderClassName?: string; } & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>
```

<a id="carouselprevious"></a>

### CarouselPrevious

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `loaderClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `loading` | `boolean \| undefined` | No | — | Pending action state; disables native button actions where supported. |
| `rounded` | `"default" \| "sm" \| "lg" \| "xl" \| "full" \| null \| undefined` | No | — |  |
| `size` | `"default" \| "2xs" \| "xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "icon" \| "iconXs" \| "iconSm" \| "iconMd" \| "iconLg" \| "iconXl" \| "icon2xl" \| null \| undefined` | No | `'icon'` | Control dimensions. The type lists supported size names for this component. |
| `variant` | `"link" \| "default" \| "destructive" \| "secondary" \| "outline" \| "ghost" \| "success" \| "warning" \| "info" \| "dark" \| "light" \| "soft" \| "softDestructive" \| "softSuccess" \| "softWarning" \| "softInfo" \| "outlineDestructive" \| "outlineSuccess" \| "outlineWarning" \| "outlineInfo" \| "gradient" \| "gradientSuccess" \| "gradientWarning" \| "gradientDanger" \| "premium" \| "glass" \| "neon" \| "dangerGhost" \| "successGhost" \| "warningGhost" \| "infoGhost" \| null \| undefined` | No | `'outline'` | Visual style. The type lists supported variants for this component. |


```ts
CarouselPrevious: React.ForwardRefExoticComponent<Omit<React.ButtonHTMLAttributes<HTMLButtonElement> & import("class-variance-authority").VariantProps<(props?: ({ variant?: "link" | "default" | "destructive" | "secondary" | "outline" | "ghost" | "success" | "warning" | "info" | "dark" | "light" | "soft" | "softDestructive" | "softSuccess" | "softWarning" | "softInfo" | "outlineDestructive" | "outlineSuccess" | "outlineWarning" | "outlineInfo" | "gradient" | "gradientSuccess" | "gradientWarning" | "gradientDanger" | "premium" | "glass" | "neon" | "dangerGhost" | "successGhost" | "warningGhost" | "infoGhost" | null | undefined; size?: "default" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "icon" | "iconXs" | "iconSm" | "iconMd" | "iconLg" | "iconXl" | "icon2xl" | null | undefined; rounded?: "default" | "sm" | "lg" | "xl" | "full" | null | undefined; } & import("class-variance-authority/types").ClassProp) | undefined) => string> & { asChild?: boolean; loading?: boolean; loaderClassName?: string; } & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>
```

## src/components/checkbox.tsx

<a id="checkbox"></a>

### Checkbox

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `checked` | `CheckboxPrimitive.CheckedState \| undefined` | No | — | Controlled checked state; some primitives also support indeterminate. |
| `defaultChecked` | `CheckboxPrimitive.CheckedState \| undefined` | No | — | Initial checked state for uncontrolled use. |
| `iconClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `invalid` | `boolean \| undefined` | No | — | Apply error styling; supply a useful error message separately. |
| `onCheckedChange` | `{<br>        bivarianceHack(checked: CheckedState): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Receives the next checked state. |
| `required` | `boolean \| undefined` | No | — |  |
| `size` | `CheckboxSize \| undefined` | No | `"md"` | Control dimensions. The type lists supported size names for this component. |
| `variant` | `CheckboxVariant \| undefined` | No | `"default"` | Visual style. The type lists supported variants for this component. |


```ts
Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLButtonElement>>
```

<a id="checkboxprops"></a>

### CheckboxProps

type


```ts
interface CheckboxProps extends Omit<
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
  "size"
> {
  size?: CheckboxSize;
  variant?: CheckboxVariant;
  invalid?: boolean;
  iconClassName?: string;
}
```

<a id="checkboxsize"></a>

### CheckboxSize

type


```ts
type CheckboxSize = "sm" | "md" | "lg";
```

<a id="checkboxvariant"></a>

### CheckboxVariant

type


```ts
type CheckboxVariant =
  | "default"
  | "outline"
  | "soft"
  | "success"
  | "destructive";
```

## src/components/collapsible.tsx

<a id="collapsible"></a>

### Collapsible

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `defaultOpen` | `boolean \| undefined` | No | — | Initial visibility when the component manages its own open state. |
| `disabled` | `boolean \| undefined` | No | — | Disable interaction with this control. |
| `onOpenChange` | `{<br>        bivarianceHack(open: boolean): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Called when visibility should change; update controlled state here. |
| `open` | `boolean \| undefined` | No | — | Controlled visibility state. Pair with onOpenChange. |


```ts
Collapsible: import("react").ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleProps & import("react").RefAttributes<HTMLDivElement>>
```

<a id="collapsiblecontent"></a>

### CollapsibleContent

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |


```ts
CollapsibleContent: import("react").ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleContentProps & import("react").RefAttributes<HTMLDivElement>>
```

<a id="collapsibletrigger"></a>

### CollapsibleTrigger

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
CollapsibleTrigger: import("react").ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleTriggerProps & import("react").RefAttributes<HTMLButtonElement>>
```

## src/components/command.tsx

<a id="command"></a>

### Command

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `children` | `React.ReactNode` | No | — | Content or composed component parts. |
| `disablePointerSelection` | `boolean \| undefined` | No | — | Optionally set to `true` to disable selection via pointer events. |
| `filter` | `CommandFilter` | No | — | Custom filter function for whether each command menu item should matches the given search query.<br>It should return a number between 0 and 1, with 1 being the best match and 0 being hidden entirely.<br>By default, uses the `command-score` library. |
| `label` | `string` | No | — | Accessible label for this command menu. Not shown visibly. |
| `loop` | `boolean \| undefined` | No | — | Optionally set to `true` to turn on looping around when using the arrow keys. |
| `onValueChange` | `(value: string) => void` | No | — | Event handler called when the selected item of the menu changes. |
| `shouldFilter` | `boolean \| undefined` | No | — | Optionally set to `false` to turn off the automatic filtering and sorting.<br>If `false`, you must conditionally render valid items based on the search query yourself. |
| `value` | `string` | No | — | Optional controlled state of the selected command menu item. |
| `vimBindings` | `boolean \| undefined` | No | — | Set to `false` to disable ctrl+n/j/p/k shortcuts. Defaults to `true`. |


```ts
Command: React.ForwardRefExoticComponent<Omit<{ children?: React.ReactNode; } & Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & { ref?: React.Ref<HTMLDivElement>; } & { asChild?: boolean; }, "key" | keyof React.HTMLAttributes<HTMLDivElement> | "asChild"> & { label?: string; shouldFilter?: boolean; filter?: (value: string, search: string, keywords?: string[]) => number; defaultValue?: string; value?: string; onValueChange?: (value: string) => void; loop?: boolean; disablePointerSelection?: boolean; vimBindings?: boolean; } & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="commanddialog"></a>

### CommandDialog

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `children` | `React.ReactNode \| undefined` | No | — | Content or composed component parts. |
| `defaultOpen` | `boolean \| undefined` | No | — | Initial visibility when the component manages its own open state. |
| `modal` | `boolean \| undefined` | No | — |  |
| `onOpenChange` | `{<br>        bivarianceHack(open: boolean): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Called when visibility should change; update controlled state here. |
| `open` | `boolean \| undefined` | No | — | Controlled visibility state. Pair with onOpenChange. |


```ts
CommandDialog: ({ children, ...props }: CommandDialogProps) => React.JSX.Element
```

<a id="commandempty"></a>

### CommandEmpty

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `children` | `React.ReactNode` | No | — | Content or composed component parts. |


```ts
CommandEmpty: React.ForwardRefExoticComponent<Omit<{ children?: React.ReactNode; } & Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & { ref?: React.Ref<HTMLDivElement>; } & { asChild?: boolean; }, "key" | keyof React.HTMLAttributes<HTMLDivElement> | "asChild"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="commandgroup"></a>

### CommandGroup

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `children` | `React.ReactNode` | No | — | Content or composed component parts. |
| `forceMount` | `boolean \| undefined` | No | — | Whether this group is forcibly rendered regardless of filtering. |
| `heading` | `React.ReactNode` | No | — | Optional heading to render for this group. |
| `value` | `string` | No | — | If no heading is provided, you must provide a value that is unique for this group. |


```ts
CommandGroup: React.ForwardRefExoticComponent<Omit<{ children?: React.ReactNode; } & Omit<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & { ref?: React.Ref<HTMLDivElement>; } & { asChild?: boolean; }, "key" | keyof React.HTMLAttributes<HTMLDivElement> | "asChild">, "heading" | "value"> & { heading?: React.ReactNode; value?: string; forceMount?: boolean; } & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="commandinput"></a>

### CommandInput

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `onValueChange` | `(search: string) => void` | No | — | Event handler called when the search value changes. |
| `value` | `string` | No | — | Optional controlled state for the value of the search input. |


```ts
CommandInput: React.ForwardRefExoticComponent<Omit<Omit<Pick<Pick<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof React.InputHTMLAttributes<HTMLInputElement>> & { ref?: React.Ref<HTMLInputElement>; } & { asChild?: boolean; }, "key" | "asChild" | keyof React.InputHTMLAttributes<HTMLInputElement>>, "onChange" | "value" | "type"> & { value?: string; onValueChange?: (search: string) => void; } & React.RefAttributes<HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>
```

<a id="commanditem"></a>

### CommandItem

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `children` | `React.ReactNode` | No | — | Content or composed component parts. |
| `disabled` | `boolean \| undefined` | No | — | Whether this item is currently disabled. |
| `forceMount` | `boolean \| undefined` | No | — | Whether this item is forcibly rendered regardless of filtering. |
| `keywords` | `string[]` | No | — | Optional keywords to match against when filtering. |
| `onSelect` | `(value: string) => void` | No | — | Event handler for when this item is selected, either via click or keyboard selection. |
| `value` | `string` | No | — | A unique value for this item.<br>If no value is provided, it will be inferred from `children` or the rendered `textContent`. If your `textContent` changes between renders, you _must_ provide a stable, unique `value`. |


```ts
CommandItem: React.ForwardRefExoticComponent<Omit<{ children?: React.ReactNode; } & Omit<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & { ref?: React.Ref<HTMLDivElement>; } & { asChild?: boolean; }, "key" | keyof React.HTMLAttributes<HTMLDivElement> | "asChild">, "onSelect" | "disabled" | "value"> & { disabled?: boolean; onSelect?: (value: string) => void; value?: string; keywords?: string[]; forceMount?: boolean; } & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="commandlist"></a>

### CommandList

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `children` | `React.ReactNode` | No | — | Content or composed component parts. |
| `label` | `string` | No | — | Accessible label for this List of suggestions. Not shown visibly. |


```ts
CommandList: React.ForwardRefExoticComponent<Omit<{ children?: React.ReactNode; } & Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & { ref?: React.Ref<HTMLDivElement>; } & { asChild?: boolean; }, "key" | keyof React.HTMLAttributes<HTMLDivElement> | "asChild"> & { label?: string; } & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="commandseparator"></a>

### CommandSeparator

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `alwaysRender` | `boolean \| undefined` | No | — | Whether this separator should always be rendered. Useful if you disable automatic filtering. |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
CommandSeparator: React.ForwardRefExoticComponent<Omit<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & { ref?: React.Ref<HTMLDivElement>; } & { asChild?: boolean; }, "key" | keyof React.HTMLAttributes<HTMLDivElement> | "asChild"> & { alwaysRender?: boolean; } & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="commandshortcut"></a>

### CommandShortcut

component


```ts
CommandShortcut: { ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element; displayName: string; }
```

## src/components/context-menu.tsx

<a id="contextmenu"></a>

### ContextMenu

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `children` | `React.ReactNode \| undefined` | No | — | Content or composed component parts. |
| `dir` | `("ltr" \| "rtl") \| undefined` | No | — |  |
| `modal` | `boolean \| undefined` | No | — |  |
| `onOpenChange` | `{<br>        bivarianceHack(open: boolean): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Called when visibility should change; update controlled state here. |
| `open` | `boolean \| undefined` | No | — | Controlled visibility state. Pair with onOpenChange. |


```ts
ContextMenu: React.FC<ContextMenuPrimitive.ContextMenuProps>
```

<a id="contextmenucheckboxitem"></a>

### ContextMenuCheckboxItem

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `checked` | `(boolean \| "indeterminate") \| undefined` | No | — | Controlled checked state; some primitives also support indeterminate. |
| `disabled` | `boolean \| undefined` | No | — | Disable interaction with this control. |
| `onCheckedChange` | `{<br>        bivarianceHack(checked: boolean): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Receives the next checked state. |
| `onSelect` | `{<br>        bivarianceHack(event: Event): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `textValue` | `string \| undefined` | No | — |  |


```ts
ContextMenuCheckboxItem: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="contextmenucontent"></a>

### ContextMenuContent

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `align` | `"center" \| "start" \| "end" \| undefined` | No | — | Alignment of floating content relative to its trigger. |
| `alignOffset` | `number \| undefined` | No | — |  |
| `arrowPadding` | `number \| undefined` | No | — |  |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `avoidCollisions` | `boolean \| undefined` | No | — |  |
| `collisionBoundary` | `Boundary \| Boundary[] \| undefined` | No | — |  |
| `collisionPadding` | `number \| Partial<Record<Side, number>> \| undefined` | No | — |  |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |
| `hideWhenDetached` | `boolean \| undefined` | No | — |  |
| `loop` | `boolean \| undefined` | No | — | Whether keyboard navigation should loop around |
| `onCloseAutoFocus` | `FocusScopeProps['onUnmountAutoFocus'] \| undefined` | No | — | Event handler called when auto-focusing on close.<br>Can be prevented. |
| `onEscapeKeyDown` | `DismissableLayerProps['onEscapeKeyDown'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `onFocusOutside` | `DismissableLayerProps['onFocusOutside'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `onInteractOutside` | `DismissableLayerProps['onInteractOutside'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `onPointerDownOutside` | `DismissableLayerProps['onPointerDownOutside'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `side` | `"top" \| "right" \| "bottom" \| "left" \| undefined` | No | — | Preferred side of the trigger, or edge for SheetContent. |
| `sideOffset` | `number \| undefined` | No | — | Distance in pixels between trigger and floating content. |
| `sticky` | `("partial" \| "always") \| undefined` | No | — |  |
| `updatePositionStrategy` | `("always" \| "optimized") \| undefined` | No | — |  |


```ts
ContextMenuContent: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="contextmenugroup"></a>

### ContextMenuGroup

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
ContextMenuGroup: React.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuGroupProps & React.RefAttributes<HTMLDivElement>>
```

<a id="contextmenuitem"></a>

### ContextMenuItem

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `disabled` | `boolean \| undefined` | No | — | Disable interaction with this control. |
| `inset` | `boolean \| undefined` | No | — |  |
| `onSelect` | `{<br>        bivarianceHack(event: Event): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `textValue` | `string \| undefined` | No | — |  |


```ts
ContextMenuItem: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & { inset?: boolean; } & React.RefAttributes<HTMLDivElement>>
```

<a id="contextmenulabel"></a>

### ContextMenuLabel

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `inset` | `boolean \| undefined` | No | — |  |


```ts
ContextMenuLabel: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & { inset?: boolean; } & React.RefAttributes<HTMLDivElement>>
```

<a id="contextmenuportal"></a>

### ContextMenuPortal

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `children` | `React.ReactNode \| undefined` | No | — | Content or composed component parts. |
| `container` | `PortalProps['container'] \| undefined` | No | — | Specify a container element to portal the content into. |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |


```ts
ContextMenuPortal: React.FC<ContextMenuPrimitive.ContextMenuPortalProps>
```

<a id="contextmenuradiogroup"></a>

### ContextMenuRadioGroup

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `onValueChange` | `{<br>        bivarianceHack(value: string): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Receives the next value when the user changes the selection. |
| `value` | `string \| undefined` | No | — | Current controlled value. Update it from the corresponding change callback. |


```ts
ContextMenuRadioGroup: React.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>
```

<a id="contextmenuradioitem"></a>

### ContextMenuRadioItem

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | Yes | — | Current controlled value. Update it from the corresponding change callback. |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `disabled` | `boolean \| undefined` | No | — | Disable interaction with this control. |
| `onSelect` | `{<br>        bivarianceHack(event: Event): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `textValue` | `string \| undefined` | No | — |  |


```ts
ContextMenuRadioItem: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuRadioItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="contextmenuseparator"></a>

### ContextMenuSeparator

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
ContextMenuSeparator: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="contextmenushortcut"></a>

### ContextMenuShortcut

component


```ts
ContextMenuShortcut: { ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element; displayName: string; }
```

<a id="contextmenusub"></a>

### ContextMenuSub

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `children` | `React.ReactNode \| undefined` | No | — | Content or composed component parts. |
| `defaultOpen` | `boolean \| undefined` | No | — | Initial visibility when the component manages its own open state. |
| `onOpenChange` | `{<br>        bivarianceHack(open: boolean): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Called when visibility should change; update controlled state here. |
| `open` | `boolean \| undefined` | No | — | Controlled visibility state. Pair with onOpenChange. |


```ts
ContextMenuSub: React.FC<ContextMenuPrimitive.ContextMenuSubProps>
```

<a id="contextmenusubcontent"></a>

### ContextMenuSubContent

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `align` | `("start" \| "end") \| undefined` | No | — | Controls the direction the subcontent appears from its anchor menu item<br>Default: start |
| `alignOffset` | `number \| undefined` | No | — |  |
| `arrowPadding` | `number \| undefined` | No | — |  |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `avoidCollisions` | `boolean \| undefined` | No | — |  |
| `collisionBoundary` | `Boundary \| Boundary[] \| undefined` | No | — |  |
| `collisionPadding` | `number \| Partial<Record<Side, number>> \| undefined` | No | — |  |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |
| `hideWhenDetached` | `boolean \| undefined` | No | — |  |
| `loop` | `boolean \| undefined` | No | — | Whether keyboard navigation should loop around |
| `onEscapeKeyDown` | `DismissableLayerProps['onEscapeKeyDown'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `onFocusOutside` | `DismissableLayerProps['onFocusOutside'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `onInteractOutside` | `DismissableLayerProps['onInteractOutside'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `onPointerDownOutside` | `DismissableLayerProps['onPointerDownOutside'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `sideOffset` | `number \| undefined` | No | — | Distance in pixels between trigger and floating content. |
| `sticky` | `("partial" \| "always") \| undefined` | No | — |  |
| `updatePositionStrategy` | `("always" \| "optimized") \| undefined` | No | — |  |


```ts
ContextMenuSubContent: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSubContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="contextmenusubtrigger"></a>

### ContextMenuSubTrigger

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `disabled` | `boolean \| undefined` | No | — | Disable interaction with this control. |
| `inset` | `boolean \| undefined` | No | — |  |
| `textValue` | `string \| undefined` | No | — |  |


```ts
ContextMenuSubTrigger: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>, "ref"> & { inset?: boolean; } & React.RefAttributes<HTMLDivElement>>
```

<a id="contextmenutrigger"></a>

### ContextMenuTrigger

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `disabled` | `boolean \| undefined` | No | — | Disable interaction with this control. |


```ts
ContextMenuTrigger: React.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuTriggerProps & React.RefAttributes<HTMLSpanElement>>
```

## src/components/dialog.tsx

<a id="dialog"></a>

### Dialog

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `children` | `React.ReactNode \| undefined` | No | — | Content or composed component parts. |
| `defaultOpen` | `boolean \| undefined` | No | — | Initial visibility when the component manages its own open state. |
| `modal` | `boolean \| undefined` | No | — |  |
| `onOpenChange` | `{<br>        bivarianceHack(open: boolean): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Called when visibility should change; update controlled state here. |
| `open` | `boolean \| undefined` | No | — | Controlled visibility state. Pair with onOpenChange. |


```ts
Dialog: React.FC<DialogPrimitive.DialogProps>
```

<a id="dialogclose"></a>

### DialogClose

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
DialogClose: React.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>
```

<a id="dialogcontent"></a>

### DialogContent

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `deferPointerDownOutside` | `boolean \| undefined` | No | — | When `true`, a `'pointerdown'` event outside of the layered element will<br>wait for the interaction's click event before dispatching, allowing<br>third-party code to stop propagation of later events and cancel dismissal. |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |
| `onCloseAutoFocus` | `FocusScopeProps['onUnmountAutoFocus'] \| undefined` | No | — | Event handler called when auto-focusing on close.<br>Can be prevented. |
| `onEscapeKeyDown` | `{<br>        bivarianceHack(event: KeyboardEvent): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event handler called when the escape key is down.<br>Can be prevented. |
| `onFocusOutside` | `{<br>        bivarianceHack(event: FocusOutsideEvent): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event handler called when the focus moves outside of the `DismissableLayer`.<br>Can be prevented. |
| `onInteractOutside` | `{<br>        bivarianceHack(event: PointerDownOutsideEvent \| FocusOutsideEvent): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event handler called when an interaction happens outside the `DismissableLayer`.<br>Specifically, when a `pointerdown` event happens outside or focus moves outside of it.<br>Can be prevented. |
| `onOpenAutoFocus` | `FocusScopeProps['onMountAutoFocus'] \| undefined` | No | — | Event handler called when auto-focusing on open.<br>Can be prevented. |
| `onPointerDownOutside` | `{<br>        bivarianceHack(event: PointerDownOutsideEvent): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event handler called when the a `pointerdown` event happens outside of the `DismissableLayer`.<br>Can be prevented. |


```ts
DialogContent: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="dialogdescription"></a>

### DialogDescription

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
DialogDescription: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>
```

<a id="dialogfooter"></a>

### DialogFooter

component


```ts
DialogFooter: { ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element; displayName: string; }
```

<a id="dialogheader"></a>

### DialogHeader

component


```ts
DialogHeader: { ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element; displayName: string; }
```

<a id="dialogoverlay"></a>

### DialogOverlay

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |


```ts
DialogOverlay: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="dialogportal"></a>

### DialogPortal

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `children` | `React.ReactNode \| undefined` | No | — | Content or composed component parts. |
| `container` | `PortalProps['container'] \| undefined` | No | — | Specify a container element to portal the content into. |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |


```ts
DialogPortal: React.FC<DialogPrimitive.DialogPortalProps>
```

<a id="dialogtitle"></a>

### DialogTitle

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
DialogTitle: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>
```

<a id="dialogtrigger"></a>

### DialogTrigger

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
DialogTrigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>
```

## src/components/drawer.tsx

<a id="drawer"></a>

### Drawer

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `activeSnapPoint` | `number \| string \| null` | No | — |  |
| `autoFocus` | `boolean \| undefined` | No | — |  |
| `children` | `React.ReactNode` | No | — | Content or composed component parts. |
| `closeThreshold` | `number` | No | — | Number between 0 and 1 that determines when the drawer should be closed.<br>Example: threshold of 0.5 would close the drawer if the user swiped for 50% of the height of the drawer or more. |
| `container` | `HTMLElement \| null` | No | — |  |
| `defaultOpen` | `boolean \| undefined` | No | — | Opened by default, skips initial enter animation. Still reacts to `open` state changes |
| `direction` | `"top" \| "right" \| "bottom" \| "left" \| undefined` | No | — | Direction of the drawer. Can be `top` or `bottom`, `left`, `right`. |
| `disablePreventScroll` | `boolean \| undefined` | No | — | When set to `true` prevents scrolling on the document body on mount, and restores it on unmount. |
| `dismissible` | `boolean \| undefined` | No | — | When `false` dragging, clicking outside, pressing esc, etc. will not close the drawer.<br>Use this in comination with the `open` prop, otherwise you won't be able to open/close the drawer. |
| `fadeFromIndex` | `number<br>\| never` | No | — | Index of a `snapPoint` from which the overlay fade should be applied. Defaults to the last snap point. |
| `fixed` | `boolean \| undefined` | No | — | When `true`, don't move the drawer upwards if there's space, but rather only change it's height so it's fully scrollable when the keyboard is open |
| `handleOnly` | `boolean \| undefined` | No | — | When `true` only allows the drawer to be dragged by the `<Drawer.Handle />` component. |
| `modal` | `boolean \| undefined` | No | — | When `false` it allows to interact with elements outside of the drawer without closing it. |
| `nested` | `boolean \| undefined` | No | — |  |
| `noBodyStyles` | `boolean \| undefined` | No | — | When `true` the `body` doesn't get any styles assigned from Vaul |
| `onAnimationEnd` | `(open: boolean) => void` | No | — | Gets triggered after the open or close animation ends, it receives an `open` argument with the `open` state of the drawer by the time the function was triggered.<br>Useful to revert any state changes for example. |
| `onClose` | `() => void` | No | — | Request to close; update your application open state. |
| `onDrag` | `(event: React.PointerEvent<HTMLDivElement>, percentageDragged: number) => void` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `onOpenChange` | `(open: boolean) => void` | No | — | Called when visibility should change; update controlled state here. |
| `onRelease` | `(event: React.PointerEvent<HTMLDivElement>, open: boolean) => void` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `open` | `boolean \| undefined` | No | — | Controlled visibility state. Pair with onOpenChange. |
| `preventScrollRestoration` | `boolean \| undefined` | No | — |  |
| `repositionInputs` | `boolean \| undefined` | No | — | When `true` Vaul will reposition inputs rather than scroll then into view if the keyboard is in the way.<br>Setting it to `false` will fall back to the default browser behavior. |
| `scrollLockTimeout` | `number` | No | — | Duration for which the drawer is not draggable after scrolling content inside of the drawer. |
| `setActiveSnapPoint` | `(snapPoint: number \| string \| null) => void` | No | — |  |
| `setBackgroundColorOnScale` | `boolean \| undefined` | No | — | When `false` we don't change body's background color when the drawer is open. |
| `shouldScaleBackground` | `boolean \| undefined` | No | `true` |  |
| `snapPoints` | `(number \| string)[]` | No | — | Array of numbers from 0 to 100 that corresponds to % of the screen a given snap point should take up.<br>Should go from least visible. Example `[0.2, 0.5, 0.8]`.<br>You can also use px values, which doesn't take screen height into account. |
| `snapToSequentialPoint` | `boolean \| undefined` | No | — | Disabled velocity based swiping for snap points.<br>This means that a snap point won't be skipped even if the velocity is high enough.<br>Useful if each snap point in a drawer is equally important. |


```ts
Drawer: { ({ shouldScaleBackground, ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>): React.JSX.Element; displayName: string; }
```

<a id="drawerclose"></a>

### DrawerClose

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
DrawerClose: React.ForwardRefExoticComponent<import("@radix-ui/react-dialog").DialogCloseProps & React.RefAttributes<HTMLButtonElement>>
```

<a id="drawercontent"></a>

### DrawerContent

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `deferPointerDownOutside` | `boolean \| undefined` | No | — | When `true`, a `'pointerdown'` event outside of the layered element will<br>wait for the interaction's click event before dispatching, allowing<br>third-party code to stop propagation of later events and cancel dismissal. |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |
| `onCloseAutoFocus` | `FocusScopeProps['onUnmountAutoFocus'] \| undefined` | No | — | Event handler called when auto-focusing on close.<br>Can be prevented. |
| `onEscapeKeyDown` | `{<br>        bivarianceHack(event: KeyboardEvent): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event handler called when the escape key is down.<br>Can be prevented. |
| `onFocusOutside` | `{<br>        bivarianceHack(event: FocusOutsideEvent): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event handler called when the focus moves outside of the `DismissableLayer`.<br>Can be prevented. |
| `onInteractOutside` | `{<br>        bivarianceHack(event: PointerDownOutsideEvent \| FocusOutsideEvent): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event handler called when an interaction happens outside the `DismissableLayer`.<br>Specifically, when a `pointerdown` event happens outside or focus moves outside of it.<br>Can be prevented. |
| `onOpenAutoFocus` | `FocusScopeProps['onMountAutoFocus'] \| undefined` | No | — | Event handler called when auto-focusing on open.<br>Can be prevented. |
| `onPointerDownOutside` | `{<br>        bivarianceHack(event: PointerDownOutsideEvent): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event handler called when the a `pointerdown` event happens outside of the `DismissableLayer`.<br>Can be prevented. |


```ts
DrawerContent: React.ForwardRefExoticComponent<Omit<Omit<import("@radix-ui/react-dialog").DialogContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="drawerdescription"></a>

### DrawerDescription

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
DrawerDescription: React.ForwardRefExoticComponent<Omit<import("@radix-ui/react-dialog").DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>
```

<a id="drawerfooter"></a>

### DrawerFooter

component


```ts
DrawerFooter: { ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element; displayName: string; }
```

<a id="drawerheader"></a>

### DrawerHeader

component


```ts
DrawerHeader: { ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element; displayName: string; }
```

<a id="draweroverlay"></a>

### DrawerOverlay

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |


```ts
DrawerOverlay: React.ForwardRefExoticComponent<Omit<Omit<import("@radix-ui/react-dialog").DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="drawerportal"></a>

### DrawerPortal

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `children` | `React.ReactNode \| undefined` | No | — | Content or composed component parts. |
| `container` | `PortalProps['container'] \| undefined` | No | — | Specify a container element to portal the content into. |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |


```ts
DrawerPortal: (props: import("@radix-ui/react-dialog").DialogPortalProps) => React.JSX.Element
```

<a id="drawertitle"></a>

### DrawerTitle

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
DrawerTitle: React.ForwardRefExoticComponent<Omit<import("@radix-ui/react-dialog").DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>
```

<a id="drawertrigger"></a>

### DrawerTrigger

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
DrawerTrigger: React.ForwardRefExoticComponent<import("@radix-ui/react-dialog").DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>
```

## src/components/dropdown-menu.tsx

<a id="dropdownmenu"></a>

### DropdownMenu

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `children` | `React.ReactNode \| undefined` | No | — | Content or composed component parts. |
| `defaultOpen` | `boolean \| undefined` | No | — | Initial visibility when the component manages its own open state. |
| `dir` | `("ltr" \| "rtl") \| undefined` | No | — |  |
| `modal` | `boolean \| undefined` | No | — |  |
| `onOpenChange` | `{<br>        bivarianceHack(open: boolean): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Called when visibility should change; update controlled state here. |
| `open` | `boolean \| undefined` | No | — | Controlled visibility state. Pair with onOpenChange. |


```ts
DropdownMenu: React.FC<DropdownMenuPrimitive.DropdownMenuProps>
```

<a id="dropdownmenucheckboxitem"></a>

### DropdownMenuCheckboxItem

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `checked` | `(boolean \| "indeterminate") \| undefined` | No | — | Controlled checked state; some primitives also support indeterminate. |
| `disabled` | `boolean \| undefined` | No | — | Disable interaction with this control. |
| `onCheckedChange` | `{<br>        bivarianceHack(checked: boolean): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Receives the next checked state. |
| `onSelect` | `{<br>        bivarianceHack(event: Event): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `textValue` | `string \| undefined` | No | — |  |


```ts
DropdownMenuCheckboxItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="dropdownmenucontent"></a>

### DropdownMenuContent

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `align` | `"center" \| "start" \| "end" \| undefined` | No | — | Alignment of floating content relative to its trigger. |
| `alignOffset` | `number \| undefined` | No | — |  |
| `arrowPadding` | `number \| undefined` | No | — |  |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `avoidCollisions` | `boolean \| undefined` | No | — |  |
| `collisionBoundary` | `Boundary \| Boundary[] \| undefined` | No | — |  |
| `collisionPadding` | `number \| Partial<Record<Side, number>> \| undefined` | No | — |  |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |
| `hideWhenDetached` | `boolean \| undefined` | No | — |  |
| `loop` | `boolean \| undefined` | No | — | Whether keyboard navigation should loop around |
| `onCloseAutoFocus` | `FocusScopeProps['onUnmountAutoFocus'] \| undefined` | No | — | Event handler called when auto-focusing on close.<br>Can be prevented. |
| `onEscapeKeyDown` | `DismissableLayerProps['onEscapeKeyDown'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `onFocusOutside` | `DismissableLayerProps['onFocusOutside'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `onInteractOutside` | `DismissableLayerProps['onInteractOutside'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `onPointerDownOutside` | `DismissableLayerProps['onPointerDownOutside'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `side` | `"top" \| "right" \| "bottom" \| "left" \| undefined` | No | — | Preferred side of the trigger, or edge for SheetContent. |
| `sideOffset` | `number \| undefined` | No | `4` | Distance in pixels between trigger and floating content. |
| `sticky` | `("partial" \| "always") \| undefined` | No | — |  |
| `updatePositionStrategy` | `("always" \| "optimized") \| undefined` | No | — |  |


```ts
DropdownMenuContent: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="dropdownmenugroup"></a>

### DropdownMenuGroup

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
DropdownMenuGroup: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React.RefAttributes<HTMLDivElement>>
```

<a id="dropdownmenuitem"></a>

### DropdownMenuItem

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `disabled` | `boolean \| undefined` | No | — | Disable interaction with this control. |
| `inset` | `boolean \| undefined` | No | — |  |
| `onSelect` | `{<br>        bivarianceHack(event: Event): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `textValue` | `string \| undefined` | No | — |  |


```ts
DropdownMenuItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & { inset?: boolean; } & React.RefAttributes<HTMLDivElement>>
```

<a id="dropdownmenulabel"></a>

### DropdownMenuLabel

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `inset` | `boolean \| undefined` | No | — |  |


```ts
DropdownMenuLabel: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & { inset?: boolean; } & React.RefAttributes<HTMLDivElement>>
```

<a id="dropdownmenuportal"></a>

### DropdownMenuPortal

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `children` | `React.ReactNode \| undefined` | No | — | Content or composed component parts. |
| `container` | `PortalProps['container'] \| undefined` | No | — | Specify a container element to portal the content into. |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |


```ts
DropdownMenuPortal: React.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>
```

<a id="dropdownmenuradiogroup"></a>

### DropdownMenuRadioGroup

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `onValueChange` | `{<br>        bivarianceHack(value: string): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Receives the next value when the user changes the selection. |
| `value` | `string \| undefined` | No | — | Current controlled value. Update it from the corresponding change callback. |


```ts
DropdownMenuRadioGroup: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>
```

<a id="dropdownmenuradioitem"></a>

### DropdownMenuRadioItem

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | Yes | — | Current controlled value. Update it from the corresponding change callback. |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `disabled` | `boolean \| undefined` | No | — | Disable interaction with this control. |
| `onSelect` | `{<br>        bivarianceHack(event: Event): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `textValue` | `string \| undefined` | No | — |  |


```ts
DropdownMenuRadioItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="dropdownmenuseparator"></a>

### DropdownMenuSeparator

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
DropdownMenuSeparator: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="dropdownmenushortcut"></a>

### DropdownMenuShortcut

component


```ts
DropdownMenuShortcut: { ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element; displayName: string; }
```

<a id="dropdownmenusub"></a>

### DropdownMenuSub

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `children` | `React.ReactNode \| undefined` | No | — | Content or composed component parts. |
| `defaultOpen` | `boolean \| undefined` | No | — | Initial visibility when the component manages its own open state. |
| `onOpenChange` | `{<br>        bivarianceHack(open: boolean): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Called when visibility should change; update controlled state here. |
| `open` | `boolean \| undefined` | No | — | Controlled visibility state. Pair with onOpenChange. |


```ts
DropdownMenuSub: React.FC<DropdownMenuPrimitive.DropdownMenuSubProps>
```

<a id="dropdownmenusubcontent"></a>

### DropdownMenuSubContent

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `align` | `("start" \| "end") \| undefined` | No | — | Controls the direction the subcontent appears from its anchor menu item<br>Default: start |
| `alignOffset` | `number \| undefined` | No | — |  |
| `arrowPadding` | `number \| undefined` | No | — |  |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `avoidCollisions` | `boolean \| undefined` | No | — |  |
| `collisionBoundary` | `Boundary \| Boundary[] \| undefined` | No | — |  |
| `collisionPadding` | `number \| Partial<Record<Side, number>> \| undefined` | No | — |  |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |
| `hideWhenDetached` | `boolean \| undefined` | No | — |  |
| `loop` | `boolean \| undefined` | No | — | Whether keyboard navigation should loop around |
| `onEscapeKeyDown` | `DismissableLayerProps['onEscapeKeyDown'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `onFocusOutside` | `DismissableLayerProps['onFocusOutside'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `onInteractOutside` | `DismissableLayerProps['onInteractOutside'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `onPointerDownOutside` | `DismissableLayerProps['onPointerDownOutside'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `sideOffset` | `number \| undefined` | No | — | Distance in pixels between trigger and floating content. |
| `sticky` | `("partial" \| "always") \| undefined` | No | — |  |
| `updatePositionStrategy` | `("always" \| "optimized") \| undefined` | No | — |  |


```ts
DropdownMenuSubContent: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="dropdownmenusubtrigger"></a>

### DropdownMenuSubTrigger

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `disabled` | `boolean \| undefined` | No | — | Disable interaction with this control. |
| `inset` | `boolean \| undefined` | No | — |  |
| `textValue` | `string \| undefined` | No | — |  |


```ts
DropdownMenuSubTrigger: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>, "ref"> & { inset?: boolean; } & React.RefAttributes<HTMLDivElement>>
```

<a id="dropdownmenutrigger"></a>

### DropdownMenuTrigger

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
DropdownMenuTrigger: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React.RefAttributes<HTMLButtonElement>>
```

## src/components/Form/form-component.tsx

<a id="fieldrules"></a>

### FieldRules

type


```ts
type FieldRules<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = Omit<
  RegisterOptions<TFieldValues, TName>,
  "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled" | "size"
>;
```

<a id="formcontrol"></a>

### FormControl

component


```ts
FormControl: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode | undefined; } & React.RefAttributes<HTMLElement>, "ref"> & React.RefAttributes<HTMLElement>>
```

<a id="formdescription"></a>

### FormDescription

component


```ts
FormDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>
```

<a id="formfieldcontext"></a>

### FormFieldContext

value


```ts
FormFieldContext: (props: React.ProviderProps<FormFieldContextValue<FieldValues, string> | null>): React.ReactNode
```

<a id="formfieldcontextvalue"></a>

### FormFieldContextValue

type


```ts
type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};
```

<a id="formitem"></a>

### FormItem

component


```ts
FormItem: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>
```

<a id="formitemcontext"></a>

### FormItemContext

value


```ts
FormItemContext: (props: React.ProviderProps<FormItemContextValue | null>): React.ReactNode
```

<a id="formlabel"></a>

### FormLabel

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
FormLabel: React.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React.RefAttributes<HTMLLabelElement>, "ref"> & React.RefAttributes<HTMLLabelElement>>
```

<a id="formmessage"></a>

### FormMessage

component


```ts
FormMessage: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>
```

<a id="getdefaultoptionlabel"></a>

### getDefaultOptionLabel

function


```ts
getDefaultOptionLabel: <TItem>(item: TItem): React.ReactNode
```

<a id="getdefaultoptionvalue"></a>

### getDefaultOptionValue

function


```ts
getDefaultOptionValue: <TItem>(item: TItem): string
```

<a id="geterrormessage"></a>

### getErrorMessage

function


```ts
getErrorMessage: (error?: FieldError): string | undefined
```

<a id="getnextenabledindex"></a>

### getNextEnabledIndex

function


```ts
getNextEnabledIndex: <TItem>(options: SelectOption<TItem>[], currentIndex: number, direction: 1 | -1): number
```

<a id="normalizesearchtext"></a>

### normalizeSearchText

function


```ts
normalizeSearchText: (value: React.ReactNode): string
```

<a id="useformfield"></a>

### useFormField

function


```ts
useFormField: (): { id: string; formItemId: string; formDescriptionId: string; formMessageId: string; error: undefined; } | { invalid: boolean; isDirty: boolean; isTouched: boolean; isValidating: boolean; error?: FieldError | undefined; id: string; name: string; formItemId: string; formDescriptionId: string; formMessageId: string; }
```

## src/components/Form/form.tsx

<a id="form"></a>

### Form

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `children` | `React.ReactNode` | Yes | — | Content or composed component parts. |
| `methods` | `UseFormReturn<TFieldValues>` | Yes | — | Return value from React Hook Form useForm(). |
| `formProps` | `Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'>` | No | — | Attributes for the native form element, including className. |
| `onError` | `SubmitErrorHandler<TFieldValues>` | No | — | Receives form validation errors after an unsuccessful submission. |
| `onSubmit` | `SubmitHandler<TFieldValues>` | No | — | Receives valid form values after React Hook Form validation. |


```ts
Form: <TFieldValues extends FieldValues>({ children, methods, onSubmit, onError, formProps }: FormProps<TFieldValues>) => React.JSX.Element
```

<a id="formprops"></a>

### FormProps

type


```ts
type FormProps<TFieldValues extends FieldValues> = {
  children: React.ReactNode;
  methods: UseFormReturn<TFieldValues>;
  onSubmit?: SubmitHandler<TFieldValues>;
  onError?: SubmitErrorHandler<TFieldValues>;
  formProps?: Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'>;
};
```

## src/components/Form/form-checkbox.tsx

<a id="checkboxrules"></a>

### CheckboxRules

type


```ts
type CheckboxRules<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = Omit<
  RegisterOptions<TFieldValues, TName>,
  "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
>;
```

<a id="formcheckbox"></a>

### FormCheckbox

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `name` | `TName` | Yes | — | Field key in form state, or the native form field name for standalone controls. |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `checkboxClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `className` | `string` | No | — | Additional classes merged onto the component element. |
| `control` | `Control<TFieldValues>` | No | — | React Hook Form control. Can be omitted inside the library Form provider. |
| `defaultValue` | `FieldPathValue<TFieldValues, TName>` | No | — | Initial value for uncontrolled use. Later changes do not replace controlled state. |
| `description` | `React.ReactNode` | No | — | Supporting information shown with the component. |
| `descriptionClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `iconClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `invalid` | `boolean \| undefined` | No | — | Apply error styling; supply a useful error message separately. |
| `itemClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `label` | `React.ReactNode` | No | — | Visible label describing the field or action. |
| `labelClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `messageClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `onChange` | `(checked: boolean) => void` | No | — | Change callback. Check the type: standalone inputs emit events; wrappers may emit values or dates. |
| `required` | `boolean \| undefined` | No | — |  |
| `requiredLabel` | `boolean \| undefined` | No | — | Show a required marker. Enforce validation with a schema, rules or native required. |
| `requiredLabelClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `rules` | `CheckboxRules<TFieldValues, TName>` | No | — | React Hook Form validation rules for this field. |
| `shouldUnregister` | `boolean \| undefined` | No | — | Remove the field from form state when it unmounts. |
| `size` | `import("../checkbox").CheckboxSize \| undefined` | No | — | Control dimensions. The type lists supported size names for this component. |
| `variant` | `import("../checkbox").CheckboxVariant \| undefined` | No | — | Visual style. The type lists supported variants for this component. |


```ts
FormCheckbox: { <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({ name, control, rules, shouldUnregister, defaultValue, label, description, requiredLabel, className, itemClassName, checkboxClassName, labelClassName, descriptionClassName, messageClassName, requiredLabelClassName, onChange, ...checkboxProps }: FormCheckboxProps<TFieldValues, TName>): React.JSX.Element; displayName: string; }
```

<a id="formcheckboxprops"></a>

### FormCheckboxProps

type


```ts
type FormCheckboxProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  name: TName;
  control?: Control<TFieldValues>;
  rules?: CheckboxRules<TFieldValues, TName>;
  shouldUnregister?: boolean;
  defaultValue?: FieldPathValue<TFieldValues, TName>;

  label?: React.ReactNode;
  description?: React.ReactNode;
  requiredLabel?: boolean;

  className?: string;
  itemClassName?: string;
  checkboxClassName?: string;
  labelClassName?: string;
  descriptionClassName?: string;
  messageClassName?: string;
  requiredLabelClassName?: string;

  onChange?: (checked: boolean) => void;
} & Omit<CheckboxProps, "checked" | "defaultChecked" | "onCheckedChange">;
```

## src/components/Form/form-field.tsx

<a id="customformfieldprops"></a>

### CustomFormFieldProps

type


```ts
export type CustomFormFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  name: TName;
  control?: Control<TFieldValues>;
  rules?: FieldRules<TFieldValues, TName>;
  shouldUnregister?: boolean;
  defaultValue?: FieldPathValue<TFieldValues, TName>;

  label?: React.ReactNode;
  requiredLabel?: boolean;
  placeholder?: string;

  size?: SizeProps;
  customSize?: CustomSize;
  variant?: VariantProps;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  invalid?: boolean;

  className?: string;
  classNameDefault?: boolean;
  itemClassName?: string;
  labelClassName?: string;
  messageClassName?: string;
  requiredLabelClassName?: string;

  onChange?: (value: string) => void;
} & Omit<InputProps, "name" | "defaultValue" | "size" | "value" | "onChange">;
```

<a id="formfield"></a>

### FormField

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `name` | `TName` | Yes | — | Field key in form state, or the native form field name for standalone controls. |
| `className` | `string` | No | — | Additional classes merged onto the component element. |
| `classNameDefault` | `boolean \| undefined` | No | — | Enable the built-in class set. Set false when supplying your own control styles. |
| `control` | `Control<TFieldValues>` | No | — | React Hook Form control. Can be omitted inside the library Form provider. |
| `customSize` | `CustomSize` | No | — | Override individual shared size slots while keeping the remaining size defaults. |
| `defaultValue` | `FieldPathValue<TFieldValues, TName>` | No | — | Initial value for uncontrolled use. Later changes do not replace controlled state. |
| `invalid` | `boolean \| undefined` | No | — | Apply error styling; supply a useful error message separately. |
| `itemClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `label` | `React.ReactNode` | No | — | Visible label describing the field or action. |
| `labelClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `leading` | `React.ReactNode` | No | — | Content placed before the input, such as an icon. |
| `messageClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `onChange` | `(value: string) => void` | No | — | Change callback. Check the type: standalone inputs emit events; wrappers may emit values or dates. |
| `placeholder` | `string` | No | — | Hint displayed when there is no current value. |
| `requiredLabel` | `boolean \| undefined` | No | — | Show a required marker. Enforce validation with a schema, rules or native required. |
| `requiredLabelClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `rules` | `FieldRules<TFieldValues, TName>` | No | — | React Hook Form validation rules for this field. |
| `shouldUnregister` | `boolean \| undefined` | No | — | Remove the field from form state when it unmounts. |
| `size` | `SizeProps \| undefined` | No | `"sm"` | Control dimensions. The type lists supported size names for this component. |
| `trailing` | `React.ReactNode` | No | — | Content placed after the input, such as a unit or action. |
| `variant` | `import("../..").FormInputVariantProps \| undefined` | No | `"outline"` | Visual style. The type lists supported variants for this component. |


```ts
FormField: { <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({ name, control, label, placeholder, requiredLabel, className, classNameDefault, itemClassName, labelClassName, messageClassName, requiredLabelClassName, variant, size, customSize, rules, shouldUnregister, defaultValue, leading, trailing, invalid, onChange, ...inputProps }: CustomFormFieldProps<TFieldValues, TName>): React.JSX.Element; displayName: string; }
```

## src/components/Form/form-select.tsx

<a id="customformselectprops"></a>

### CustomFormSelectProps

type


```ts
type CustomFormSelectProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
  TItem = SelectOption,
> = {
  name: TName;
  control?: Control<TFieldValues>;
  rules?: FieldRules<TFieldValues, TName>;
  shouldUnregister?: boolean;
  defaultValue?: FieldPathValue<TFieldValues, TName>;

  label?: React.ReactNode;
  requiredLabel?: boolean;
  placeholder?: string;

  options?: SelectOption<TItem>[];
  items?: TItem[];
  getOptionValue?: (item: TItem) => string;
  getOptionLabel?: (item: TItem) => React.ReactNode;
  getOptionDisabled?: (item: TItem) => boolean;
  getOptionData?: (item: TItem) => unknown;

  onChange?: (value: string) => void;
  onChangeItem?: (item: TItem | null) => void;
  disabled?: boolean;

  size?: SizeProps;
  customSize?: CustomSize;
  variant?: VariantProps;
  invalid?: boolean;
  searchable?: boolean;
  searchPlaceholder?: string;
  emptyText?: React.ReactNode;
  classNameDefault?: boolean;

  className?: string;
  itemClassName?: string;
  contentClassName?: string;
  searchInputClassName?: string;
  labelClassName?: string;
  messageClassName?: string;
  requiredLabelClassName?: string;
};
```

<a id="formselect"></a>

### FormSelect

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `name` | `TName` | Yes | — | Field key in form state, or the native form field name for standalone controls. |
| `className` | `string` | No | — | Additional classes merged onto the component element. |
| `classNameDefault` | `boolean \| undefined` | No | `true` | Enable the built-in class set. Set false when supplying your own control styles. |
| `contentClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `control` | `Control<TFieldValues>` | No | — | React Hook Form control. Can be omitted inside the library Form provider. |
| `customSize` | `CustomSize` | No | — | Override individual shared size slots while keeping the remaining size defaults. |
| `defaultValue` | `FieldPathValue<TFieldValues, TName>` | No | — | Initial value for uncontrolled use. Later changes do not replace controlled state. |
| `disabled` | `boolean \| undefined` | No | — | Disable interaction with this control. |
| `emptyText` | `React.ReactNode` | No | `"No results"` | Content displayed when no options match the search. |
| `getOptionData` | `(item: TItem) => unknown` | No | — | Map the item payload passed to selection callbacks. |
| `getOptionDisabled` | `(item: TItem) => boolean` | No | — | Return true to prevent an item from being selected. |
| `getOptionLabel` | `(item: TItem) => React.ReactNode` | No | `getDefaultOptionLabel` | Return the display label for an item. |
| `getOptionValue` | `(item: TItem) => string` | No | `getDefaultOptionValue` | Return a unique string key for an item. |
| `invalid` | `boolean \| undefined` | No | — | Apply error styling; supply a useful error message separately. |
| `itemClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `items` | `TItem[]` | No | — | Options or records to display; see the element type for the required shape. |
| `label` | `React.ReactNode` | No | — | Visible label describing the field or action. |
| `labelClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `messageClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `onChange` | `(value: string) => void` | No | — | Change callback. Check the type: standalone inputs emit events; wrappers may emit values or dates. |
| `onChangeItem` | `(item: TItem \| null) => void` | No | — | Receives the selected item data, or null when none is available. |
| `options` | `SelectOption<TItem>[]` | No | — | Component-specific options; inspect the type and usage notes for its shape. |
| `placeholder` | `string` | No | `"Select an option"` | Hint displayed when there is no current value. |
| `requiredLabel` | `boolean \| undefined` | No | — | Show a required marker. Enforce validation with a schema, rules or native required. |
| `requiredLabelClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `rules` | `FieldRules<TFieldValues, TName>` | No | — | React Hook Form validation rules for this field. |
| `searchInputClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `searchPlaceholder` | `string` | No | `"Search…"` | Hint inside the option search input. |
| `searchable` | `boolean \| undefined` | No | `false` | Enable the searchable option picker instead of the standard select. |
| `shouldUnregister` | `boolean \| undefined` | No | — | Remove the field from form state when it unmounts. |
| `size` | `SizeProps \| undefined` | No | `"sm"` | Control dimensions. The type lists supported size names for this component. |
| `variant` | `import("../..").FormInputVariantProps \| undefined` | No | `"outline"` | Visual style. The type lists supported variants for this component. |


```ts
FormSelect: { <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>, TItem = SelectOption>({ name, control, rules, shouldUnregister, defaultValue, placeholder, label, requiredLabel, className, itemClassName, contentClassName, searchInputClassName, labelClassName, messageClassName, requiredLabelClassName, options, items, getOptionValue, getOptionLabel, getOptionDisabled, getOptionData, onChange, onChangeItem, disabled, size, customSize, variant, invalid, searchable, searchPlaceholder, emptyText, classNameDefault, }: CustomFormSelectProps<TFieldValues, TName, TItem>): React.JSX.Element; displayName: string; }
```

## src/components/Form/form-textarea.tsx

<a id="customformtextareaprops"></a>

### CustomFormTextareaProps

type


```ts
export type CustomFormTextareaProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  name: TName;
  control?: Control<TFieldValues>;
  rules?: FieldRules<TFieldValues, TName>;
  shouldUnregister?: boolean;
  defaultValue?: FieldPathValue<TFieldValues, TName>;

  label?: React.ReactNode;
  requiredLabel?: boolean;
  placeholder?: string;

  size?: SizeProps;
  customSize?: CustomSize;
  variant?: VariantProps;
  invalid?: boolean;

  className?: string;
  classNameDefault?: boolean;
  itemClassName?: string;
  labelClassName?: string;
  messageClassName?: string;
  requiredLabelClassName?: string;

  onChange?: (value: string) => void;
} & Omit<
  TextareaProps,
  "name" | "defaultValue" | "size" | "value" | "onChange"
>;
```

<a id="formtextarea"></a>

### FormTextarea

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `name` | `TName` | Yes | — | Field key in form state, or the native form field name for standalone controls. |
| `className` | `string` | No | — | Additional classes merged onto the component element. |
| `classNameDefault` | `boolean \| undefined` | No | — | Enable the built-in class set. Set false when supplying your own control styles. |
| `control` | `Control<TFieldValues>` | No | — | React Hook Form control. Can be omitted inside the library Form provider. |
| `customSize` | `CustomSize` | No | — | Override individual shared size slots while keeping the remaining size defaults. |
| `defaultValue` | `FieldPathValue<TFieldValues, TName>` | No | — | Initial value for uncontrolled use. Later changes do not replace controlled state. |
| `invalid` | `boolean \| undefined` | No | — | Apply error styling; supply a useful error message separately. |
| `itemClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `label` | `React.ReactNode` | No | — | Visible label describing the field or action. |
| `labelClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `messageClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `onChange` | `(value: string) => void` | No | — | Change callback. Check the type: standalone inputs emit events; wrappers may emit values or dates. |
| `placeholder` | `string` | No | — | Hint displayed when there is no current value. |
| `requiredLabel` | `boolean \| undefined` | No | — | Show a required marker. Enforce validation with a schema, rules or native required. |
| `requiredLabelClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `rules` | `FieldRules<TFieldValues, TName>` | No | — | React Hook Form validation rules for this field. |
| `shouldUnregister` | `boolean \| undefined` | No | — | Remove the field from form state when it unmounts. |
| `size` | `SizeProps \| undefined` | No | `"sm"` | Control dimensions. The type lists supported size names for this component. |
| `variant` | `import("../..").FormInputVariantProps \| undefined` | No | `"outline"` | Visual style. The type lists supported variants for this component. |


```ts
FormTextarea: { <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({ name, control, label, placeholder, requiredLabel, className, classNameDefault, itemClassName, labelClassName, messageClassName, requiredLabelClassName, variant, size, customSize, rules, shouldUnregister, defaultValue, invalid, onChange, ...textareaProps }: CustomFormTextareaProps<TFieldValues, TName>): React.JSX.Element; displayName: string; }
```

## src/components/Form/form-date.tsx

<a id="customformdateprops"></a>

### CustomFormDateProps

type


```ts
type CustomFormDateProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  name: TName;
  control?: Control<TFieldValues>;
  rules?: FieldRules<TFieldValues, TName>;
  shouldUnregister?: boolean;
  defaultValue?: FieldPathValue<TFieldValues, TName>;

  label?: React.ReactNode;
  requiredLabel?: boolean;
  placeholder?: string;

  disabled?: boolean;
  invalid?: boolean;

  /**
   * Rango permitido.
   * Si es null o undefined, queda libre.
   */
  start_date?: DateInputValue;
  end_date?: DateInputValue;

  /**
   * Alias opcional.
   */
  startDate?: DateInputValue;
  endDate?: DateInputValue;

  /**
   * date: stores a Date.
   * string: stores a string using valueFormat.
   */
  valueMode?: DateValueMode;

  dateFormat?: DateFormatValue;
  valueFormat?: DateFormatValue;

  formatPattern?: string;
  valueFormatPattern?: string;

  locale?: Locale | null;
  defaultMonth?: Date;

  onChange?: (date: Date | undefined) => void;
  onChangeValue?: (value: Date | string | null) => void;

  size?: SizeProps;
  customSize?: CustomSize;
  variant?: VariantProps;

  className?: string;
  itemClassName?: string;
  contentClassName?: string;
  labelClassName?: string;
  messageClassName?: string;
  requiredLabelClassName?: string;

  contentAlign?: "start" | "center" | "end";
  contentSideOffset?: number;
};
```

<a id="formdate"></a>

### FormDate

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `name` | `TName` | Yes | — | Field key in form state, or the native form field name for standalone controls. |
| `className` | `string` | No | — | Additional classes merged onto the component element. |
| `contentAlign` | `"center" \| "start" \| "end" \| undefined` | No | `"start"` | Align popup content with the start, center or end of the trigger. |
| `contentClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `contentSideOffset` | `number` | No | `6` | Distance in pixels between the trigger and popup. |
| `control` | `Control<TFieldValues>` | No | — | React Hook Form control. Can be omitted inside the library Form provider. |
| `customSize` | `CustomSize` | No | — | Override individual shared size slots while keeping the remaining size defaults. |
| `dateFormat` | `DateFormatValue` | No | `"demo"` | Display date format preset or date-fns pattern. |
| `defaultMonth` | `Date` | No | — |  |
| `defaultValue` | `FieldPathValue<TFieldValues, TName>` | No | — | Initial value for uncontrolled use. Later changes do not replace controlled state. |
| `disabled` | `boolean \| undefined` | No | — | Disable interaction with this control. |
| `endDate` | `DateInputValue` | No | — | Latest selectable date. Takes precedence over end_date. |
| `end_date` | `DateInputValue` | No | — | Supported alias for the latest selectable date. |
| `formatPattern` | `string` | No | — | Explicit display pattern; takes precedence over the display format preset. |
| `invalid` | `boolean \| undefined` | No | — | Apply error styling; supply a useful error message separately. |
| `itemClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `label` | `React.ReactNode` | No | — | Visible label describing the field or action. |
| `labelClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `locale` | `Locale \| null` | No | — | Locale object from date-fns for date/time text and parsing. |
| `messageClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `onChange` | `(date: Date \| undefined) => void` | No | — | Change callback. Check the type: standalone inputs emit events; wrappers may emit values or dates. |
| `onChangeValue` | `(value: Date \| string \| null) => void` | No | — | Receives the stored date/time representation selected by valueMode. |
| `placeholder` | `string` | No | `"Select a date"` | Hint displayed when there is no current value. |
| `requiredLabel` | `boolean \| undefined` | No | — | Show a required marker. Enforce validation with a schema, rules or native required. |
| `requiredLabelClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `rules` | `FieldRules<TFieldValues, TName>` | No | — | React Hook Form validation rules for this field. |
| `shouldUnregister` | `boolean \| undefined` | No | — | Remove the field from form state when it unmounts. |
| `size` | `SizeProps \| undefined` | No | `"sm"` | Control dimensions. The type lists supported size names for this component. |
| `startDate` | `DateInputValue` | No | — | Alias opcional. |
| `start_date` | `DateInputValue` | No | — | Rango permitido.<br>Si es null o undefined, queda libre. |
| `valueFormat` | `DateFormatValue` | No | `"iso"` | Pattern or preset used to parse incoming strings and format string-mode form values. |
| `valueFormatPattern` | `string` | No | — | Explicit value parsing/storage pattern; takes precedence over valueFormat. |
| `valueMode` | `DateValueMode \| undefined` | No | `"date"` | date: stores a Date.<br>string: stores a string using valueFormat. |
| `variant` | `import("../..").FormInputVariantProps \| undefined` | No | `"outline"` | Visual style. The type lists supported variants for this component. |


```ts
FormDate: { <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({ name, control, rules, shouldUnregister, defaultValue, label, requiredLabel, placeholder, disabled, invalid, start_date, end_date, startDate, endDate, valueMode, dateFormat, valueFormat, formatPattern, valueFormatPattern, locale, defaultMonth, onChange, onChangeValue, size, customSize, variant, className, itemClassName, contentClassName, labelClassName, messageClassName, requiredLabelClassName, contentAlign, contentSideOffset, }: CustomFormDateProps<TFieldValues, TName>): React.JSX.Element; displayName: string; }
```

## src/components/Form/form-time.tsx

<a id="customformtimeprops"></a>

### CustomFormTimeProps

type


```ts
type CustomFormTimeProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  name: TName;
  control?: Control<TFieldValues>;
  rules?: FieldRules<TFieldValues, TName>;
  shouldUnregister?: boolean;
  defaultValue?: FieldPathValue<TFieldValues, TName>;

  label?: React.ReactNode;
  requiredLabel?: boolean;
  placeholder?: string;

  disabled?: boolean;
  invalid?: boolean;

  /**
   * date: stores a Date.
   * string: stores a string using valueFormat.
   */
  valueMode?: TimeValueMode;

  timeFormat?: TimeFormatValue;
  valueFormat?: TimeFormatValue;

  formatPattern?: string;
  valueFormatPattern?: string;

  locale?: Locale;

  minuteStep?: number;
  minTime?: string;
  maxTime?: string;
  options?: UiTimeOption[];

  /**
   * "12" = hour, minute, and AM/PM selectors.
   * "24" = hour and minute selectors in 24-hour format.
   */
  hourCycle?: HourCycle;

  onChange?: (date: Date | undefined) => void;
  onChangeValue?: (value: Date | string | null) => void;

  size?: SizeProps;
  customSize?: CustomSize;
  variant?: VariantProps;

  className?: string;
  itemClassName?: string;
  contentClassName?: string;
  optionClassName?: string;
  labelClassName?: string;
  messageClassName?: string;
  requiredLabelClassName?: string;

  contentAlign?: "start" | "center" | "end";
  contentSideOffset?: number;
};
```

<a id="formtime"></a>

### FormTime

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `name` | `TName` | Yes | — | Field key in form state, or the native form field name for standalone controls. |
| `className` | `string` | No | — | Additional classes merged onto the component element. |
| `contentAlign` | `"center" \| "start" \| "end" \| undefined` | No | `"start"` | Align popup content with the start, center or end of the trigger. |
| `contentClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `contentSideOffset` | `number` | No | `6` | Distance in pixels between the trigger and popup. |
| `control` | `Control<TFieldValues>` | No | — | React Hook Form control. Can be omitted inside the library Form provider. |
| `customSize` | `CustomSize` | No | — | Override individual shared size slots while keeping the remaining size defaults. |
| `defaultValue` | `FieldPathValue<TFieldValues, TName>` | No | — | Initial value for uncontrolled use. Later changes do not replace controlled state. |
| `disabled` | `boolean \| undefined` | No | — | Disable interaction with this control. |
| `formatPattern` | `string` | No | — | Explicit display pattern; takes precedence over the display format preset. |
| `hourCycle` | `HourCycle \| undefined` | No | `"12"` | "12" = hour, minute, and AM/PM selectors.<br>"24" = hour and minute selectors in 24-hour format. |
| `invalid` | `boolean \| undefined` | No | — | Apply error styling; supply a useful error message separately. |
| `itemClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `label` | `React.ReactNode` | No | — | Visible label describing the field or action. |
| `labelClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `locale` | `Locale` | No | — | Locale object from date-fns for date/time text and parsing. |
| `maxTime` | `string` | No | — | Latest selectable local time. |
| `messageClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `minTime` | `string` | No | — | Earliest selectable local time. |
| `minuteStep` | `number` | No | `1` | Minute interval in the time picker. |
| `onChange` | `(date: Date \| undefined) => void` | No | — | Change callback. Check the type: standalone inputs emit events; wrappers may emit values or dates. |
| `onChangeValue` | `(value: Date \| string \| null) => void` | No | — | Receives the stored date/time representation selected by valueMode. |
| `optionClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `options` | `UiTimeOption[]` | No | — | Component-specific options; inspect the type and usage notes for its shape. |
| `placeholder` | `string` | No | `"Select time"` | Hint displayed when there is no current value. |
| `requiredLabel` | `boolean \| undefined` | No | — | Show a required marker. Enforce validation with a schema, rules or native required. |
| `requiredLabelClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `rules` | `FieldRules<TFieldValues, TName>` | No | — | React Hook Form validation rules for this field. |
| `shouldUnregister` | `boolean \| undefined` | No | — | Remove the field from form state when it unmounts. |
| `size` | `SizeProps \| undefined` | No | `"sm"` | Control dimensions. The type lists supported size names for this component. |
| `timeFormat` | `TimeFormatValue` | No | `"time12"` | Display time format preset or date-fns pattern. |
| `valueFormat` | `TimeFormatValue` | No | `"time24"` | Pattern or preset used to parse incoming strings and format string-mode form values. |
| `valueFormatPattern` | `string` | No | — | Explicit value parsing/storage pattern; takes precedence over valueFormat. |
| `valueMode` | `TimeValueMode \| undefined` | No | `"string"` | date: stores a Date.<br>string: stores a string using valueFormat. |
| `variant` | `import("../..").FormInputVariantProps \| undefined` | No | `"outline"` | Visual style. The type lists supported variants for this component. |


```ts
FormTime: { <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({ name, control, rules, shouldUnregister, defaultValue, label, requiredLabel, placeholder, disabled, invalid, valueMode, timeFormat, valueFormat, formatPattern, valueFormatPattern, locale, minuteStep, minTime, maxTime, options, hourCycle, onChange, onChangeValue, size, customSize, variant, className, itemClassName, contentClassName, optionClassName, labelClassName, messageClassName, requiredLabelClassName, contentAlign, contentSideOffset, }: CustomFormTimeProps<TFieldValues, TName>): React.JSX.Element; displayName: string; }
```

## src/utils/form-utils.ts

<a id="customsize"></a>

### CustomSize

type


```ts
export type CustomSize = Partial<SizeClasses>;
```

<a id="forminputvariantprops"></a>

### FormInputVariantProps

type


```ts
export type FormInputVariantProps =
  | "outline"
  | "soft"
  | "ghost"
  | "filled"
  | "flushed"
  | "unstyled"
  | "link";
```

<a id="formsizeprops"></a>

### FormSizeProps

type

Backward-compatible aliases.


```ts
export type FormSizeProps = SizeProps;
```

<a id="formvariantprops"></a>

### FormVariantProps

type


```ts
export type FormVariantProps = VariantProps;
```

<a id="inputvariant"></a>

### InputVariant

type


```ts
export type InputVariant = keyof typeof formInputVariants;
```

<a id="selectoption"></a>

### SelectOption

type


```ts
export type SelectOption<TData = unknown> = {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
  data?: TData;
};
```

<a id="sizeclasses"></a>

### SizeClasses

type


```ts
export type SizeClasses = {
  control: string;
  flushedControl: string;
  linkControl: string;
  selectItem: string;
  searchInput: string;
  checkbox: string;
  label: string;
  description: string;
  message: string;
};
```

<a id="sizeprops"></a>

### SizeProps

type


```ts
export type SizeProps = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
```

<a id="variantprops"></a>

### VariantProps

type


```ts
export type VariantProps = InputVariant;
```

<a id="formcompositecontrolbase"></a>

### formCompositeControlBase

value


```ts
formCompositeControlBase: "relative flex w-full items-center gap-2 text-foreground outline-none transition"
```

<a id="formcompositecontrolerrorclass"></a>

### formCompositeControlErrorClass

value


```ts
formCompositeControlErrorClass: "border-destructive focus-within:border-destructive focus-within:ring-destructive/20"
```

<a id="formcompositevariants"></a>

### formCompositeVariants

value

Equivalent variants for composite controls:
SearchableSelect, comboboxes, and wrappers with an internal input.
Use focus-within because the input receives focus inside the wrapper.


```ts
formCompositeVariants: Record<FormInputVariantProps, string>
```

<a id="formcontrolbase"></a>

### formControlBase

value


```ts
formControlBase: "relative inline-flex w-full items-center justify-between gap-2 text-foreground outline-none transition data-[placeholder]:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
```

<a id="formcontrolerrorclass"></a>

### formControlErrorClass

value


```ts
formControlErrorClass: "border-destructive focus:border-destructive focus:ring-destructive/20"
```

<a id="forminputvariants"></a>

### formInputVariants

value


```ts
formInputVariants: Record<FormInputVariantProps, string>
```

<a id="formsizevariants"></a>

### formSizeVariants

value


```ts
formSizeVariants: Record<SizeProps, SizeClasses>
```

<a id="getformcontrolsizeclass"></a>

### getFormControlSizeClass

function


```ts
getFormControlSizeClass: (variant: VariantProps, sizeClasses: SizeClasses): string
```

<a id="getformsizeclasses"></a>

### getFormSizeClasses

function


```ts
getFormSizeClasses: (size?: SizeProps, customSize?: CustomSize): SizeClasses
```

<a id="variants"></a>

### variants

value


```ts
variants: Record<FormInputVariantProps, string>
```

## src/components/hover-card.tsx

<a id="hovercard"></a>

### HoverCard

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `children` | `React.ReactNode \| undefined` | No | — | Content or composed component parts. |
| `closeDelay` | `number \| undefined` | No | — |  |
| `defaultOpen` | `boolean \| undefined` | No | — | Initial visibility when the component manages its own open state. |
| `onOpenChange` | `{<br>        bivarianceHack(open: boolean): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Called when visibility should change; update controlled state here. |
| `open` | `boolean \| undefined` | No | — | Controlled visibility state. Pair with onOpenChange. |
| `openDelay` | `number \| undefined` | No | — |  |


```ts
HoverCard: React.FC<HoverCardPrimitive.HoverCardProps>
```

<a id="hovercardcontent"></a>

### HoverCardContent

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `align` | `"center" \| "start" \| "end" \| undefined` | No | `'center'` | Alignment of floating content relative to its trigger. |
| `alignOffset` | `number \| undefined` | No | — |  |
| `arrowPadding` | `number \| undefined` | No | — |  |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `avoidCollisions` | `boolean \| undefined` | No | — |  |
| `collisionBoundary` | `Boundary \| Boundary[] \| undefined` | No | — |  |
| `collisionPadding` | `number \| Partial<Record<Side, number>> \| undefined` | No | — |  |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |
| `hideWhenDetached` | `boolean \| undefined` | No | — |  |
| `onEscapeKeyDown` | `DismissableLayerProps['onEscapeKeyDown'] \| undefined` | No | — | Event handler called when the escape key is down.<br>Can be prevented. |
| `onFocusOutside` | `DismissableLayerProps['onFocusOutside'] \| undefined` | No | — | Event handler called when the focus moves outside of the `HoverCard`.<br>Can be prevented. |
| `onInteractOutside` | `DismissableLayerProps['onInteractOutside'] \| undefined` | No | — | Event handler called when an interaction happens outside the `HoverCard`.<br>Specifically, when a `pointerdown` event happens outside or focus moves outside of it.<br>Can be prevented. |
| `onPointerDownOutside` | `DismissableLayerProps['onPointerDownOutside'] \| undefined` | No | — | Event handler called when the a `pointerdown` event happens outside of the `HoverCard`.<br>Can be prevented. |
| `side` | `"top" \| "right" \| "bottom" \| "left" \| undefined` | No | — | Preferred side of the trigger, or edge for SheetContent. |
| `sideOffset` | `number \| undefined` | No | `4` | Distance in pixels between trigger and floating content. |
| `sticky` | `("partial" \| "always") \| undefined` | No | — |  |
| `updatePositionStrategy` | `("always" \| "optimized") \| undefined` | No | — |  |


```ts
HoverCardContent: React.ForwardRefExoticComponent<Omit<HoverCardPrimitive.HoverCardContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="hovercardtrigger"></a>

### HoverCardTrigger

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
HoverCardTrigger: React.ForwardRefExoticComponent<HoverCardPrimitive.HoverCardTriggerProps & React.RefAttributes<HTMLAnchorElement>>
```

## src/components/icons.tsx

<a id="icons"></a>

### Icons

value


```ts
Icons: IconProps
```

## src/components/input.tsx

<a id="input"></a>

### Input

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | No | — | Additional classes merged onto the component element. |
| `classNameDefault` | `boolean \| undefined` | No | `true` | Enable the built-in class set. Set false when supplying your own control styles. |
| `customSize` | `CustomSize` | No | — | Override individual shared size slots while keeping the remaining size defaults. |
| `invalid` | `boolean \| undefined` | No | `false` | Apply error styling; supply a useful error message separately. |
| `leading` | `React.ReactNode` | No | — | Content placed before the input, such as an icon. |
| `placeholder` | `string` | No | — | Hint displayed when there is no current value. |
| `size` | `SizeProps \| undefined` | No | `"sm"` | Control dimensions. The type lists supported size names for this component. |
| `trailing` | `React.ReactNode` | No | — | Content placed after the input, such as a unit or action. |
| `variant` | `import("..").FormInputVariantProps \| undefined` | No | `"outline"` | Visual style. The type lists supported variants for this component. |


```ts
Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>
```

<a id="inputprops"></a>

### InputProps

type


```ts
export interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  size?: SizeProps;
  customSize?: CustomSize;
  variant?: VariantProps;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  invalid?: boolean;
  classNameDefault?: boolean;
  placeholder?: string;
  className?: string;
}
```

## src/components/input-otp.tsx

<a id="inputotp"></a>

### InputOTP

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `maxLength` | `number` | Yes | — |  |
| `containerClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `noScriptCSSFallback` | `string \| null` | No | — |  |
| `nonce` | `string` | No | — |  |
| `onChange` | `(newValue: string) => unknown` | No | — | Change callback. Check the type: standalone inputs emit events; wrappers may emit values or dates. |
| `onComplete` | `(...args: any[]) => unknown` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `pasteTransformer` | `(pasted: string) => string` | No | — |  |
| `pushPasswordManagerStrategy` | `"none" \| "increase-width" \| undefined` | No | — |  |
| `render` | `InputOTPRenderFn<br>\| never` | No | — |  |
| `textAlign` | `"center" \| "right" \| "left" \| undefined` | No | — |  |
| `value` | `string` | No | — | Current controlled value. Update it from the corresponding change callback. |


```ts
InputOTP: React.ForwardRefExoticComponent<(Omit<Omit<React.InputHTMLAttributes<HTMLInputElement>, "nonce" | "onChange" | "value" | "maxLength" | "textAlign" | "onComplete" | "pushPasswordManagerStrategy" | "pasteTransformer" | "containerClassName" | "noScriptCSSFallback"> & { value?: string; onChange?: (newValue: string) => unknown; maxLength: number; textAlign?: "left" | "center" | "right"; onComplete?: (...args: any[]) => unknown; pushPasswordManagerStrategy?: "increase-width" | "none"; pasteTransformer?: (pasted: string) => string; containerClassName?: string; noScriptCSSFallback?: string | null; nonce?: string; } & { render: (props: import("input-otp").RenderProps) => React.ReactNode; children?: never; } & React.RefAttributes<HTMLInputElement>, "ref"> | Omit<Omit<React.InputHTMLAttributes<HTMLInputElement>, "nonce" | "onChange" | "value" | "maxLength" | "textAlign" | "onComplete" | "pushPasswordManagerStrategy" | "pasteTransformer" | "containerClassName" | "noScriptCSSFallback"> & { value?: string; onChange?: (newValue: string) => unknown; maxLength: number; textAlign?: "left" | "center" | "right"; onComplete?: (...args: any[]) => unknown; pushPasswordManagerStrategy?: "increase-width" | "none"; pasteTransformer?: (pasted: string) => string; containerClassName?: string; noScriptCSSFallback?: string | null; nonce?: string; } & { render?: never; children: React.ReactNode; } & React.RefAttributes<HTMLInputElement>, "ref">) & React.RefAttributes<HTMLInputElement>>
```

<a id="inputotpgroup"></a>

### InputOTPGroup

component


```ts
InputOTPGroup: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="inputotpseparator"></a>

### InputOTPSeparator

component


```ts
InputOTPSeparator: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="inputotpslot"></a>

### InputOTPSlot

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `index` | `number` | Yes | — |  |


```ts
InputOTPSlot: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & { index: number; } & React.RefAttributes<HTMLDivElement>>
```

## src/components/Label/label.tsx

<a id="label"></a>

### Label

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
Label: React.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: import("class-variance-authority/types").ClassProp | undefined) => string> & React.RefAttributes<HTMLLabelElement>>
```

## src/components/menubar.tsx

<a id="menubar"></a>

### Menubar

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `defaultValue` | `string \| undefined` | No | — | Initial value for uncontrolled use. Later changes do not replace controlled state. |
| `dir` | `("ltr" \| "rtl") \| undefined` | No | — |  |
| `loop` | `boolean \| undefined` | No | — |  |
| `onValueChange` | `{<br>        bivarianceHack(value: string): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Receives the next value when the user changes the selection. |
| `value` | `string \| undefined` | No | — | Current controlled value. Update it from the corresponding change callback. |


```ts
Menubar: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="menubarcheckboxitem"></a>

### MenubarCheckboxItem

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `checked` | `(boolean \| "indeterminate") \| undefined` | No | — | Controlled checked state; some primitives also support indeterminate. |
| `disabled` | `boolean \| undefined` | No | — | Disable interaction with this control. |
| `onCheckedChange` | `{<br>        bivarianceHack(checked: boolean): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Receives the next checked state. |
| `onSelect` | `{<br>        bivarianceHack(event: Event): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `textValue` | `string \| undefined` | No | — |  |


```ts
MenubarCheckboxItem: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarCheckboxItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="menubarcontent"></a>

### MenubarContent

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `align` | `"center" \| "start" \| "end" \| undefined` | No | `'start'` | Alignment of floating content relative to its trigger. |
| `alignOffset` | `number \| undefined` | No | `-4` |  |
| `arrowPadding` | `number \| undefined` | No | — |  |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `avoidCollisions` | `boolean \| undefined` | No | — |  |
| `collisionBoundary` | `Boundary \| Boundary[] \| undefined` | No | — |  |
| `collisionPadding` | `number \| Partial<Record<Side, number>> \| undefined` | No | — |  |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |
| `hideWhenDetached` | `boolean \| undefined` | No | — |  |
| `loop` | `boolean \| undefined` | No | — | Whether keyboard navigation should loop around |
| `onCloseAutoFocus` | `FocusScopeProps['onUnmountAutoFocus'] \| undefined` | No | — | Event handler called when auto-focusing on close.<br>Can be prevented. |
| `onEscapeKeyDown` | `DismissableLayerProps['onEscapeKeyDown'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `onFocusOutside` | `DismissableLayerProps['onFocusOutside'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `onInteractOutside` | `DismissableLayerProps['onInteractOutside'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `onPointerDownOutside` | `DismissableLayerProps['onPointerDownOutside'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `side` | `"top" \| "right" \| "bottom" \| "left" \| undefined` | No | — | Preferred side of the trigger, or edge for SheetContent. |
| `sideOffset` | `number \| undefined` | No | `8` | Distance in pixels between trigger and floating content. |
| `sticky` | `("partial" \| "always") \| undefined` | No | — |  |
| `updatePositionStrategy` | `("always" \| "optimized") \| undefined` | No | — |  |


```ts
MenubarContent: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="menubargroup"></a>

### MenubarGroup

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
MenubarGroup: React.ForwardRefExoticComponent<MenubarPrimitive.MenubarGroupProps & React.RefAttributes<HTMLDivElement>>
```

<a id="menubaritem"></a>

### MenubarItem

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `disabled` | `boolean \| undefined` | No | — | Disable interaction with this control. |
| `inset` | `boolean \| undefined` | No | — |  |
| `onSelect` | `{<br>        bivarianceHack(event: Event): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `textValue` | `string \| undefined` | No | — |  |


```ts
MenubarItem: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & { inset?: boolean; } & React.RefAttributes<HTMLDivElement>>
```

<a id="menubarlabel"></a>

### MenubarLabel

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `inset` | `boolean \| undefined` | No | — |  |


```ts
MenubarLabel: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & { inset?: boolean; } & React.RefAttributes<HTMLDivElement>>
```

<a id="menubarmenu"></a>

### MenubarMenu

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `__scopeMenubar` | `Scope \| undefined` | No | — |  |
| `children` | `React.ReactNode \| undefined` | No | — | Content or composed component parts. |
| `value` | `string \| undefined` | No | — | Current controlled value. Update it from the corresponding change callback. |


```ts
MenubarMenu: (props: MenubarPrimitive.MenubarMenuProps & { __scopeMenubar?: import("@radix-ui/react-context").Scope | undefined; }) => React.JSX.Element
```

<a id="menubarportal"></a>

### MenubarPortal

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `children` | `React.ReactNode \| undefined` | No | — | Content or composed component parts. |
| `container` | `PortalProps['container'] \| undefined` | No | — | Specify a container element to portal the content into. |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |


```ts
MenubarPortal: React.FC<MenubarPrimitive.MenubarPortalProps>
```

<a id="menubarradiogroup"></a>

### MenubarRadioGroup

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `onValueChange` | `{<br>        bivarianceHack(value: string): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Receives the next value when the user changes the selection. |
| `value` | `string \| undefined` | No | — | Current controlled value. Update it from the corresponding change callback. |


```ts
MenubarRadioGroup: React.ForwardRefExoticComponent<MenubarPrimitive.MenubarRadioGroupProps & React.RefAttributes<HTMLDivElement>>
```

<a id="menubarradioitem"></a>

### MenubarRadioItem

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | Yes | — | Current controlled value. Update it from the corresponding change callback. |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `disabled` | `boolean \| undefined` | No | — | Disable interaction with this control. |
| `onSelect` | `{<br>        bivarianceHack(event: Event): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `textValue` | `string \| undefined` | No | — |  |


```ts
MenubarRadioItem: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarRadioItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="menubarseparator"></a>

### MenubarSeparator

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
MenubarSeparator: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="menubarshortcut"></a>

### MenubarShortcut

component


```ts
MenubarShortcut: { ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element; displayname: string; }
```

<a id="menubarsub"></a>

### MenubarSub

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `children` | `React.ReactNode \| undefined` | No | — | Content or composed component parts. |
| `defaultOpen` | `boolean \| undefined` | No | — | Initial visibility when the component manages its own open state. |
| `onOpenChange` | `{<br>        bivarianceHack(open: boolean): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Called when visibility should change; update controlled state here. |
| `open` | `boolean \| undefined` | No | — | Controlled visibility state. Pair with onOpenChange. |


```ts
MenubarSub: React.FC<MenubarPrimitive.MenubarSubProps>
```

<a id="menubarsubcontent"></a>

### MenubarSubContent

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `align` | `("start" \| "end") \| undefined` | No | — | Controls the direction the subcontent appears from its anchor menu item<br>Default: start |
| `alignOffset` | `number \| undefined` | No | — |  |
| `arrowPadding` | `number \| undefined` | No | — |  |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `avoidCollisions` | `boolean \| undefined` | No | — |  |
| `collisionBoundary` | `Boundary \| Boundary[] \| undefined` | No | — |  |
| `collisionPadding` | `number \| Partial<Record<Side, number>> \| undefined` | No | — |  |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |
| `hideWhenDetached` | `boolean \| undefined` | No | — |  |
| `loop` | `boolean \| undefined` | No | — | Whether keyboard navigation should loop around |
| `onEscapeKeyDown` | `DismissableLayerProps['onEscapeKeyDown'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `onFocusOutside` | `DismissableLayerProps['onFocusOutside'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `onInteractOutside` | `DismissableLayerProps['onInteractOutside'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `onPointerDownOutside` | `DismissableLayerProps['onPointerDownOutside'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `sideOffset` | `number \| undefined` | No | — | Distance in pixels between trigger and floating content. |
| `sticky` | `("partial" \| "always") \| undefined` | No | — |  |
| `updatePositionStrategy` | `("always" \| "optimized") \| undefined` | No | — |  |


```ts
MenubarSubContent: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSubContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="menubarsubtrigger"></a>

### MenubarSubTrigger

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `disabled` | `boolean \| undefined` | No | — | Disable interaction with this control. |
| `inset` | `boolean \| undefined` | No | — |  |
| `textValue` | `string \| undefined` | No | — |  |


```ts
MenubarSubTrigger: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSubTriggerProps & React.RefAttributes<HTMLDivElement>, "ref"> & { inset?: boolean; } & React.RefAttributes<HTMLDivElement>>
```

<a id="menubartrigger"></a>

### MenubarTrigger

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
MenubarTrigger: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>
```

## src/components/modal.tsx

<a id="modal"></a>

### Modal

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `isOpen` | `boolean` | Yes | — | Controlled visibility for the wrapper; update it in onClose/onConfirm handlers. |
| `onClose` | `() => void` | Yes | — | Request to close; update your application open state. |
| `children` | `React.ReactNode` | No | — | Content or composed component parts. |
| `className` | `string` | No | — | Additional classes merged onto the component element. |
| `description` | `string` | No | — | Supporting information shown with the component. |
| `title` | `string` | No | — | Title describing the component or page. |


```ts
Modal: React.FC<ModalProps>
```

## src/components/navigation-menu.tsx

<a id="navigationmenu"></a>

### NavigationMenu

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `activationMode` | `("manual" \| "automatic") \| undefined` | No | — | Whether an item is activated automatically or manually.<br>- `"automatic"`: hovering or focusing a trigger opens its item, and moving<br>  away closes it after a short delay.<br>- `"manual"`: clicking a trigger toggles the item; hover and focus are ignored |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `defaultValue` | `string \| undefined` | No | — | Initial value for uncontrolled use. Later changes do not replace controlled state. |
| `delayDuration` | `number \| undefined` | No | — | The duration from when the pointer enters the trigger until the tooltip<br>gets opened. When `activationMode` is `manual`, this prop is ignored. |
| `dir` | `("ltr" \| "rtl") \| undefined` | No | — |  |
| `onValueChange` | `{<br>        bivarianceHack(value: string): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Receives the next value when the user changes the selection. |
| `orientation` | `("vertical" \| "horizontal") \| undefined` | No | — | Layout or scroll axis; see the type for supported values. |
| `skipDelayDuration` | `number \| undefined` | No | — | How much time a user has to enter another trigger without incurring a delay<br>again. When `activationMode` is `manual`, this prop is ignored. |
| `value` | `string \| undefined` | No | — | Current controlled value. Update it from the corresponding change callback. |


```ts
NavigationMenu: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuProps & React.RefAttributes<HTMLElement>, "ref"> & React.RefAttributes<HTMLElement>>
```

<a id="navigationmenucontent"></a>

### NavigationMenuContent

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `deferPointerDownOutside` | `boolean \| undefined` | No | — | When `true`, a `'pointerdown'` event outside of the layered element will<br>wait for the interaction's click event before dispatching, allowing<br>third-party code to stop propagation of later events and cancel dismissal. |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |
| `onEscapeKeyDown` | `{<br>        bivarianceHack(event: KeyboardEvent): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event handler called when the escape key is down.<br>Can be prevented. |
| `onFocusOutside` | `{<br>        bivarianceHack(event: FocusOutsideEvent): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event handler called when the focus moves outside of the `DismissableLayer`.<br>Can be prevented. |
| `onInteractOutside` | `{<br>        bivarianceHack(event: PointerDownOutsideEvent \| FocusOutsideEvent): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event handler called when an interaction happens outside the `DismissableLayer`.<br>Specifically, when a `pointerdown` event happens outside or focus moves outside of it.<br>Can be prevented. |
| `onPointerDownOutside` | `{<br>        bivarianceHack(event: PointerDownOutsideEvent): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event handler called when the a `pointerdown` event happens outside of the `DismissableLayer`.<br>Can be prevented. |


```ts
NavigationMenuContent: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="navigationmenuindicator"></a>

### NavigationMenuIndicator

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |


```ts
NavigationMenuIndicator: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuIndicatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="navigationmenuitem"></a>

### NavigationMenuItem

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `value` | `string \| undefined` | No | — | Current controlled value. Update it from the corresponding change callback. |


```ts
NavigationMenuItem: React.ForwardRefExoticComponent<NavigationMenuPrimitive.NavigationMenuItemProps & React.RefAttributes<HTMLLIElement>>
```

<a id="navigationmenulink"></a>

### NavigationMenuLink

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `active` | `boolean \| undefined` | No | — |  |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `onSelect` | `{<br>        bivarianceHack(event: Event): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |


```ts
NavigationMenuLink: React.ForwardRefExoticComponent<NavigationMenuPrimitive.NavigationMenuLinkProps & React.RefAttributes<HTMLAnchorElement>>
```

<a id="navigationmenulist"></a>

### NavigationMenuList

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
NavigationMenuList: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuListProps & React.RefAttributes<HTMLUListElement>, "ref"> & React.RefAttributes<HTMLUListElement>>
```

<a id="navigationmenutrigger"></a>

### NavigationMenuTrigger

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
NavigationMenuTrigger: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>
```

<a id="navigationmenuviewport"></a>

### NavigationMenuViewport

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |


```ts
NavigationMenuViewport: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuViewportProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="navigationmenutriggerstyle"></a>

### navigationMenuTriggerStyle

function


```ts
navigationMenuTriggerStyle: (props?: import("class-variance-authority/types").ClassProp | undefined): string
```

## src/components/pagination.tsx

<a id="pagination"></a>

### Pagination

component


```ts
Pagination: { ({ className, ...props }: React.ComponentProps<"nav">): React.JSX.Element; displayName: string; }
```

<a id="paginationcontent"></a>

### PaginationContent

component


```ts
PaginationContent: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React.RefAttributes<HTMLUListElement>>
```

<a id="paginationellipsis"></a>

### PaginationEllipsis

component


```ts
PaginationEllipsis: { ({ className, ...props }: React.ComponentProps<"span">): React.JSX.Element; displayName: string; }
```

<a id="paginationitem"></a>

### PaginationItem

component


```ts
PaginationItem: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React.RefAttributes<HTMLLIElement>>
```

<a id="paginationlink"></a>

### PaginationLink

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `isActive` | `boolean \| undefined` | No | — |  |
| `size` | `"default" \| "2xs" \| "xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "icon" \| "iconXs" \| "iconSm" \| "iconMd" \| "iconLg" \| "iconXl" \| "icon2xl" \| null \| undefined` | No | `'icon'` | Control dimensions. The type lists supported size names for this component. |


```ts
PaginationLink: { ({ className, isActive, size, ...props }: PaginationLinkProps): React.JSX.Element; displayName: string; }
```

<a id="paginationnext"></a>

### PaginationNext

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `isActive` | `boolean \| undefined` | No | — |  |
| `size` | `"default" \| "2xs" \| "xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "icon" \| "iconXs" \| "iconSm" \| "iconMd" \| "iconLg" \| "iconXl" \| "icon2xl" \| null \| undefined` | No | — | Control dimensions. The type lists supported size names for this component. |


```ts
PaginationNext: { ({ className, ...props }: React.ComponentProps<typeof PaginationLink>): React.JSX.Element; displayName: string; }
```

<a id="paginationnextlast"></a>

### PaginationNextLast

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `isActive` | `boolean \| undefined` | No | — |  |
| `size` | `"default" \| "2xs" \| "xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "icon" \| "iconXs" \| "iconSm" \| "iconMd" \| "iconLg" \| "iconXl" \| "icon2xl" \| null \| undefined` | No | — | Control dimensions. The type lists supported size names for this component. |


```ts
PaginationNextLast: { ({ className, ...props }: React.ComponentProps<typeof PaginationLink>): React.JSX.Element; displayName: string; }
```

<a id="paginationprevious"></a>

### PaginationPrevious

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `isActive` | `boolean \| undefined` | No | — |  |
| `size` | `"default" \| "2xs" \| "xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "icon" \| "iconXs" \| "iconSm" \| "iconMd" \| "iconLg" \| "iconXl" \| "icon2xl" \| null \| undefined` | No | — | Control dimensions. The type lists supported size names for this component. |


```ts
PaginationPrevious: { ({ className, ...props }: React.ComponentProps<typeof PaginationLink>): React.JSX.Element; displayName: string; }
```

<a id="paginationpreviouslast"></a>

### PaginationPreviousLast

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `isActive` | `boolean \| undefined` | No | — |  |
| `size` | `"default" \| "2xs" \| "xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "icon" \| "iconXs" \| "iconSm" \| "iconMd" \| "iconLg" \| "iconXl" \| "icon2xl" \| null \| undefined` | No | — | Control dimensions. The type lists supported size names for this component. |


```ts
PaginationPreviousLast: { ({ className, ...props }: React.ComponentProps<typeof PaginationLink>): React.JSX.Element; displayName: string; }
```

## src/components/popover.tsx

<a id="popover"></a>

### Popover

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `children` | `React.ReactNode \| undefined` | No | — | Content or composed component parts. |
| `defaultOpen` | `boolean \| undefined` | No | — | Initial visibility when the component manages its own open state. |
| `modal` | `boolean \| undefined` | No | — |  |
| `onOpenChange` | `{<br>        bivarianceHack(open: boolean): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Called when visibility should change; update controlled state here. |
| `open` | `boolean \| undefined` | No | — | Controlled visibility state. Pair with onOpenChange. |


```ts
Popover: React.FC<PopoverPrimitive.PopoverProps>
```

<a id="popoveranchor"></a>

### PopoverAnchor

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `virtualRef` | `React.RefObject<Measurable \| null> \| undefined` | No | — |  |


```ts
PopoverAnchor: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverAnchorProps & React.RefAttributes<HTMLDivElement>>
```

<a id="popovercontent"></a>

### PopoverContent

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `align` | `"center" \| "start" \| "end" \| undefined` | No | `'center'` | Alignment of floating content relative to its trigger. |
| `alignOffset` | `number \| undefined` | No | — |  |
| `arrowPadding` | `number \| undefined` | No | — |  |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `avoidCollisions` | `boolean \| undefined` | No | — |  |
| `collisionBoundary` | `Boundary \| Boundary[] \| undefined` | No | — |  |
| `collisionPadding` | `number \| Partial<Record<Side, number>> \| undefined` | No | — |  |
| `deferPointerDownOutside` | `boolean \| undefined` | No | — | When `true`, a `'pointerdown'` event outside of the layered element will<br>wait for the interaction's click event before dispatching, allowing<br>third-party code to stop propagation of later events and cancel dismissal. |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |
| `hideWhenDetached` | `boolean \| undefined` | No | — |  |
| `onCloseAutoFocus` | `FocusScopeProps['onUnmountAutoFocus'] \| undefined` | No | — | Event handler called when auto-focusing on close.<br>Can be prevented. |
| `onEscapeKeyDown` | `{<br>        bivarianceHack(event: KeyboardEvent): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event handler called when the escape key is down.<br>Can be prevented. |
| `onFocusOutside` | `{<br>        bivarianceHack(event: FocusOutsideEvent): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event handler called when the focus moves outside of the `DismissableLayer`.<br>Can be prevented. |
| `onInteractOutside` | `{<br>        bivarianceHack(event: PointerDownOutsideEvent \| FocusOutsideEvent): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event handler called when an interaction happens outside the `DismissableLayer`.<br>Specifically, when a `pointerdown` event happens outside or focus moves outside of it.<br>Can be prevented. |
| `onOpenAutoFocus` | `FocusScopeProps['onMountAutoFocus'] \| undefined` | No | — | Event handler called when auto-focusing on open.<br>Can be prevented. |
| `onPointerDownOutside` | `{<br>        bivarianceHack(event: PointerDownOutsideEvent): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event handler called when the a `pointerdown` event happens outside of the `DismissableLayer`.<br>Can be prevented. |
| `side` | `"top" \| "right" \| "bottom" \| "left" \| undefined` | No | — | Preferred side of the trigger, or edge for SheetContent. |
| `sideOffset` | `number \| undefined` | No | `4` | Distance in pixels between trigger and floating content. |
| `sticky` | `("partial" \| "always") \| undefined` | No | — |  |
| `updatePositionStrategy` | `("always" \| "optimized") \| undefined` | No | — |  |


```ts
PopoverContent: React.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="popovertrigger"></a>

### PopoverTrigger

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
PopoverTrigger: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>
```

## src/components/progress.tsx

<a id="progress"></a>

### Progress

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `getValueLabel` | `{<br>        bivarianceHack(value: number, max: number): string;<br>    }['bivarianceHack'] \| undefined` | No | — | Text used for this label; customize it for your application language. |
| `max` | `number \| undefined` | No | — |  |
| `value` | `number \| null \| undefined` | No | — | Current controlled value. Update it from the corresponding change callback. |


```ts
Progress: React.ForwardRefExoticComponent<Omit<ProgressPrimitive.ProgressProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

## src/components/radio-group.tsx

<a id="radiogroup"></a>

### RadioGroup

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `defaultValue` | `string \| undefined` | No | — | Initial value for uncontrolled use. Later changes do not replace controlled state. |
| `dir` | `("ltr" \| "rtl") \| undefined` | No | — |  |
| `disabled` | `boolean \| undefined` | No | — | Disable interaction with this control. |
| `form` | `React.ComponentPropsWithoutRef<typeof Radio>['form'] \| undefined` | No | — |  |
| `loop` | `boolean \| undefined` | No | — |  |
| `name` | `RadioGroupContextValue['name'] \| undefined` | No | — | Field key in form state, or the native form field name for standalone controls. |
| `onValueChange` | `RadioGroupContextValue['onValueChange'] \| undefined` | No | — | Receives the next value when the user changes the selection. |
| `orientation` | `("vertical" \| "horizontal") \| undefined` | No | — | Layout or scroll axis; see the type for supported values. |
| `required` | `boolean \| undefined` | No | — |  |
| `value` | `string \| null \| undefined` | No | — | Current controlled value. Update it from the corresponding change callback. |


```ts
RadioGroup: React.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="radiogroupitem"></a>

### RadioGroupItem

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | Yes | — | Current controlled value. Update it from the corresponding change callback. |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `checked` | `boolean \| undefined` | No | — | Controlled checked state; some primitives also support indeterminate. |
| `required` | `boolean \| undefined` | No | — |  |


```ts
RadioGroupItem: React.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupItemProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>
```

## src/components/resizable.tsx

<a id="resizablehandle"></a>

### ResizableHandle

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `className` | `string \| undefined` | No | — | CSS class name.<br><br>ℹ️ Use the `data-separator` attribute for custom _hover_ and _active_ styles<br><br>⚠️ The following properties cannot be overridden: `flex-grow`, `flex-shrink` |
| `disableDoubleClick` | `boolean \| undefined` | No | — | When true, double-clicking this `Separator` will not reset its `Panel` to its default size. |
| `disabled` | `boolean \| undefined` | No | — | When disabled, the separator cannot be used to resize its neighboring panels.<br><br>ℹ️ The panels may still be resized indirectly (while other panels are being resized).<br>To prevent a panel from being resized at all, it needs to also be disabled. |
| `elementRef` | `Ref<HTMLDivElement> \| undefined` | No | — | Ref attached to the root `HTMLDivElement`. |
| `id` | `string \| number \| undefined` | No | — | Uniquely identifies the separator within the parent group.<br>Falls back to `useId` when not provided.<br><br>ℹ️ This value will also be assigned to the `id` and `data-testid` attributes; (an explicit `data-testid` prop will take precedence). |
| `preview` | `ReactNode` | No | — | Overrides the `Group` default preview for this `Separator` when `resizePreviewMode` is "separator". |
| `style` | `CSSProperties \| undefined` | No | — | CSS properties.<br><br>ℹ️ Use the `data-separator` attribute for custom _hover_ and _active_ styles<br><br>⚠️ The following properties cannot be overridden: `flex-grow`, `flex-shrink` |
| `withHandle` | `boolean \| undefined` | No | — |  |


```ts
ResizableHandle: ({ withHandle, className, ...props }: React.ComponentProps<typeof ResizablePrimitive.Separator> & { withHandle?: boolean; }) => React.JSX.Element
```

<a id="resizablepanel"></a>

### ResizablePanel

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `className` | `string \| undefined` | No | — | CSS class name.<br><br>⚠️ Class is applied to nested `HTMLDivElement` to avoid styles that interfere with Flex layout. |
| `collapsedSize` | `number \| string \| undefined` | No | — | Panel size when collapsed; defaults to 0%. |
| `collapsedThreshold` | `number \| string \| undefined` | No | — | Distance a collapsible panel must be resized past its `minSize` to collapse,<br>or past its `collapsedSize` to expand.<br>Defaults to half the distance between `collapsedSize` and `minSize`.<br><br>For example if a panel declares `collapsedSize="5%"`, `collapsedThreshold="5%"`, and `minSize="25%"`,<br>it will collapse when resized below 20% and expand when resized above 10%.<br><br>ℹ️ Interpretation rules:<br>- Numbers are interpreted as pixels (e.g. `minSize={200}` is 200 pixels)<br>- Strings without explicit units are interpreted as percentage (e.g. `minSize="50"` is 50 percent)<br>- Use explicit units (e.g. "px", "%", "em", "rem", "vh", or "vw") to change interpretation |
| `collapsible` | `boolean \| undefined` | No | — | This panel can be collapsed.<br><br>ℹ️ A collapsible panel will collapse when its size is less than the specified `minSize` |
| `defaultSize` | `number \| string \| undefined` | No | — | Default size of Panel within its parent group; default is auto-assigned based on the total number of Panels.<br><br>ℹ️ Interpretation rules:<br>- Numbers are interpreted as pixels (e.g. `defaultSize={200}` is 200 pixels)<br>- Strings without explicit units are interpreted as percentage (e.g. `defaultSize="50"` is 50 percent)<br>- Use explicit units (e.g. "px", "%", "em", "rem", "vh", or "vw") to change interpretation<br><br>⚠️ Percentage based sizes may cause slight layout shift when server-rendering.<br>For more information see the documentation. |
| `disabled` | `boolean \| undefined` | No | — | When disabled, a panel cannot be resized either directly or indirectly (by resizing another panel). |
| `elementRef` | `Ref<HTMLDivElement \| null> \| undefined` | No | — | Ref attached to the root `HTMLDivElement`. |
| `groupResizeBehavior` | `"preserve-relative-size" \| "preserve-pixel-size" \| undefined` | No | — | How should this Panel behave if the parent Group is resized?<br>Defaults to `preserve-relative-size`.<br><br>- `preserve-relative-size`: Retain the current relative size (as a percentage of the Group)<br>- `preserve-pixel-size`: Retain its current size (in pixels)<br><br>ℹ️ Panel min/max size constraints may impact this behavior.<br><br>⚠️ A Group must contain at least one Panel with `preserve-relative-size` resize behavior. |
| `id` | `string \| number \| undefined` | No | — | Uniquely identifies this panel within the parent group.<br>Falls back to `useId` when not provided.<br><br>ℹ️ This prop is used to associate persisted group layouts with the original panel.<br><br>ℹ️ This value will also be assigned to the `id` and `data-testid` attributes; (an explicit `data-testid` prop will take precedence). |
| `maxSize` | `number \| string \| undefined` | No | — | Maximum size of Panel within its parent group; defaults to `"100%"`.<br><br>ℹ️ Interpretation rules:<br>- Numbers are interpreted as pixels (e.g. `maxSize={200}` is 200 pixels)<br>- Strings without explicit units are interpreted as percentage (e.g. `maxSize="50"` is 50 percent)<br>- Use explicit units (e.g. "px", "%", "em", "rem", "vh", or "vw") to change interpretation |
| `minSize` | `number \| string \| undefined` | No | — | Minimum size of Panel within its parent group; defaults to 0%.<br><br>ℹ️ Interpretation rules:<br>- Numbers are interpreted as pixels (e.g. `minSize={200}` is 200 pixels)<br>- Strings without explicit units are interpreted as percentage (e.g. `minSize="50"` is 50 percent)<br>- Use explicit units (e.g. "px", "%", "em", "rem", "vh", or "vw") to change interpretation |
| `onResize` | `((panelSize: PanelSize, id: string \| number \| undefined, prevPanelSize: PanelSize \| undefined) => void) \| undefined` | No | — | Called when panel sizes change. |
| `panelRef` | `Ref<PanelImperativeHandle \| null> \| undefined` | No | — | Exposes the following imperative API:<br>- `collapse(): void`<br>- `expand(): void`<br>- `getSize(): PanelSize`<br>- `isCollapsed(): boolean`<br>- `resize(size: number \| string): void`<br><br>ℹ️ The `usePanelRef` and `usePanelCallbackRef` hooks are exported for convenience use in TypeScript projects. |
| `style` | `CSSProperties \| undefined` | No | — | CSS properties.<br><br>⚠️ The default inline styles cannot be overridden, except for [`overflow`](https://react-resizable-panels.vercel.app/examples/overflow). |


```ts
ResizablePanel: typeof ResizablePrimitive.Panel
```

<a id="resizablepanelgroup"></a>

### ResizablePanelGroup

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `defaultLayout` | `Layout \| undefined` | No | — | Default layout for the Group.<br><br>ℹ️ This value allows layouts to be remembered between page reloads.<br><br>⚠️ Slight layout shift may occur when server-rendering panels with percentage-based default sizes.<br>Refer to the documentation for suggestions on how to minimize the impact of this. |
| `disableCursor` | `boolean \| undefined` | No | — | This library sets custom mouse cursor styles to indicate drag state.<br>Use this prop to disable that behavior for Panels and Separators in this group. |
| `disabled` | `boolean \| undefined` | No | — | Disable resize functionality. |
| `elementRef` | `Ref<HTMLDivElement \| null> \| undefined` | No | — | Ref attached to the root `HTMLDivElement`. |
| `groupRef` | `Ref<GroupImperativeHandle \| null> \| undefined` | No | — | Exposes the following imperative API:<br>- `getLayout(): Layout`<br>- `setLayout(layout: Layout): Layout`<br><br>ℹ️ The `useGroupRef` and `useGroupCallbackRef` hooks are exported for convenience use in TypeScript projects. |
| `onLayoutChange` | `(layout: Layout) => void \| undefined` | No | — | Called when the Group's layout is changing.<br><br>⚠️ For layout changes caused by pointer events, this method is called each time the pointer is moved.<br>For most cases, it is recommended to use the `onLayoutChanged` callback instead. |
| `onLayoutChanged` | `(layout: Layout, meta: LayoutChangedMeta) => void` | No | — | Called after the Group's layout has been changed.<br><br>ℹ️ For layout changes caused by pointer events, this method is not called until the pointer has been released.<br>This method is recommended when saving layouts to some storage api.<br><br>ℹ️ The second argument contains meta information about the layout change.<br>The `isUserInteraction` attribute signals whether the resize was caused by direct user input.<br>It is true for resizes caused by pointer or keyboard input<br>and false for other triggers (e.g. imperative API calls, initial mount, etc.)<br>The `requestedLayout` attribute is the layout before constraints were applied for the current Group size;<br>prefer it when persisting layouts. |
| `orientation` | `"vertical" \| "horizontal" \| undefined` | No | — | Specifies the resizable orientation ("horizontal" or "vertical"); defaults to "horizontal" |
| `resizePreviewMode` | `("separator" \| "panel") \| undefined` | No | — | Controls whether pointer dragging updates `Panel` sizes immediately,<br>or renders overlay separator previews until the pointer is released.<br><br>Defaults to `"panel"` (immediate resizing); `"separator"` defers resizing until release.<br><br>Customize previews using the `SeparatorOverlay` component. |
| `resizeTargetMinimumSize` | `{<br>        coarse: number;<br>        fine: number;<br>    }` | No | — | Minimum size of the resizable hit target area (either `Separator` or `Panel` edge).<br>This threshold ensures targets are large enough to avoid mis-clicks.<br><br>- Coarse inputs (typically a finger on a touchscreen) have reduced accuracy;<br>to ensure accessibility and ease of use, hit targets should be larger to prevent mis-clicks.<br>- Fine inputs (typically a mouse) can be smaller<br><br>ℹ️ [Apple interface guidelines](https://developer.apple.com/design/human-interface-guidelines/accessibility) suggest `20pt` (`27px`) on desktops and `28pt` (`37px`) for touch devices.<br>In practice this seems to be much larger than many of their own applications use though. |


```ts
ResizablePanelGroup: ({ className, ...props }: React.ComponentProps<typeof ResizablePrimitive.Group>) => React.JSX.Element
```

## src/components/scroll-area.tsx

<a id="scrollarea"></a>

### ScrollArea

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `dir` | `("ltr" \| "rtl") \| undefined` | No | — |  |
| `scrollHideDelay` | `number \| undefined` | No | — |  |
| `type` | `("auto" \| "always" \| "scroll" \| "hover") \| undefined` | No | — |  |


```ts
ScrollArea: React.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="scrollbar"></a>

### ScrollBar

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `forceMount` | `true \| undefined` | No | — |  |
| `orientation` | `("vertical" \| "horizontal") \| undefined` | No | `'vertical'` | Layout or scroll axis; see the type for supported values. |


```ts
ScrollBar: React.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaScrollbarProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

## src/components/scroll-view.tsx

<a id="scrollview"></a>

### ScrollView

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `dir` | `("ltr" \| "rtl") \| undefined` | No | — |  |
| `fit` | `ScrollViewFit \| undefined` | No | `"fill"` | How the view sizes itself inside the parent. |
| `maxHeight` | `number \| string` | No | — | Maximum height; numeric values are pixels. |
| `maxWidth` | `number \| string` | No | — | Maximum width; numeric values are pixels. |
| `orientation` | `ScrollViewOrientation \| undefined` | No | `"vertical"` | Scroll axis. |
| `scrollHideDelay` | `number \| undefined` | No | — |  |
| `type` | `("auto" \| "always" \| "scroll" \| "hover") \| undefined` | No | `"hover"` |  |


```ts
ScrollView: React.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaProps & React.RefAttributes<HTMLDivElement>, "ref"> & { fit?: ScrollViewFit; orientation?: ScrollViewOrientation; maxHeight?: number | string; maxWidth?: number | string; } & React.RefAttributes<HTMLDivElement>>
```

<a id="scrollviewfit"></a>

### ScrollViewFit

type


```ts
export type ScrollViewFit = "fill" | "viewport" | "content";
```

<a id="scrollvieworientation"></a>

### ScrollViewOrientation

type


```ts
export type ScrollViewOrientation = "vertical" | "horizontal" | "both";
```

<a id="scrollviewprops"></a>

### ScrollViewProps

type


```ts
export type ScrollViewProps = React.ComponentPropsWithoutRef<
  typeof ScrollAreaPrimitive.Root
> & {
  /** How the view sizes itself inside the parent. */
  fit?: ScrollViewFit;
  /** Scroll axis. */
  orientation?: ScrollViewOrientation;
  maxHeight?: number | string;
  maxWidth?: number | string;
};
```

## src/components/search-input.tsx

<a id="searchinput"></a>

### SearchInput

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `onSearch` | `(searchTerm: string) => void` | Yes | — | Receives the search term after the configured debounce delay. |
| `className` | `string` | No | — | Additional classes merged onto the component element. |
| `classNameDefault` | `boolean \| undefined` | No | `true` | Enable the built-in class set. Set false when supplying your own control styles. |
| `customSize` | `CustomSize` | No | — | Override individual shared size slots while keeping the remaining size defaults. |
| `debounceTime` | `number` | No | `750` | Search debounce delay in milliseconds; values <= 0 emit immediately. |
| `invalid` | `boolean \| undefined` | No | — | Apply error styling; supply a useful error message separately. |
| `leading` | `React.ReactNode` | No | — | Content placed before the input, such as an icon. |
| `placeholder` | `string` | No | `"Search..."` | Hint displayed when there is no current value. |
| `size` | `import("..").SizeProps \| undefined` | No | — | Control dimensions. The type lists supported size names for this component. |
| `trailing` | `React.ReactNode` | No | — | Content placed after the input, such as a unit or action. |
| `value` | `string` | No | `""` | Current controlled value. Update it from the corresponding change callback. |
| `variant` | `import("..").FormInputVariantProps \| undefined` | No | — | Visual style. The type lists supported variants for this component. |


```ts
SearchInput: React.ForwardRefExoticComponent<SearchInputProps & React.RefAttributes<HTMLInputElement>>
```

<a id="searchinputprops"></a>

### SearchInputProps

type


```ts
interface SearchInputProps extends Omit<
  InputProps,
  "value" | "defaultValue" | "onChange" | "type"
> {
  value?: string;
  debounceTime?: number;
  onSearch: (searchTerm: string) => void;
}
```

## src/components/searchable-select.tsx

<a id="searchableselect"></a>

### SearchableSelect

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `items` | `SearchableSelectOption<TData>[]` | Yes | — | Options or records to display; see the element type for the required shape. |
| `classNameDefault` | `boolean \| undefined` | No | `true` | Enable the built-in class set. Set false when supplying your own control styles. |
| `contentClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `customSize` | `CustomSize` | No | — | Override individual shared size slots while keeping the remaining size defaults. |
| `defaultValue` | `string` | No | — | Initial value for uncontrolled use. Later changes do not replace controlled state. |
| `disabled` | `boolean \| undefined` | No | — | Disable interaction with this control. |
| `emptyText` | `React.ReactNode` | No | `"No results found"` | Content displayed when no options match the search. |
| `invalid` | `boolean \| undefined` | No | `false` | Apply error styling; supply a useful error message separately. |
| `itemClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `name` | `string` | No | — | Field key in form state, or the native form field name for standalone controls. |
| `onValueChange` | `(value: string, item?: SearchableSelectOption<TData>) => void` | No | — | Receives the next value when the user changes the selection. |
| `placeholder` | `string` | No | `"Select an option"` | Hint displayed when there is no current value. |
| `required` | `boolean \| undefined` | No | — |  |
| `searchInputClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `searchPlaceholder` | `string` | No | `"Search…"` | Hint inside the option search input. |
| `size` | `SizeProps \| undefined` | No | `"sm"` | Control dimensions. The type lists supported size names for this component. |
| `triggerClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `value` | `string` | No | — | Current controlled value. Update it from the corresponding change callback. |
| `variant` | `import("..").FormInputVariantProps \| undefined` | No | `"outline"` | Visual style. The type lists supported variants for this component. |


```ts
SearchableSelect: <TData = unknown>(props: SearchableSelectProps<TData> & React.RefAttributes<HTMLInputElement>) => React.ReactElement
```

<a id="searchableselectoption"></a>

### SearchableSelectOption

type


```ts
type SearchableSelectOption<TData = unknown> = {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
  keywords?: string;
  data?: TData;
};
```

<a id="searchableselectprops"></a>

### SearchableSelectProps

type


```ts
type SearchableSelectProps<TData = unknown> = Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  "id" | "aria-label" | "aria-labelledby" | "aria-describedby" | "onBlur"
> & {
  items: SearchableSelectOption<TData>[];

  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string, item?: SearchableSelectOption<TData>) => void;

  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: React.ReactNode;

  disabled?: boolean;
  name?: string;
  required?: boolean;
  invalid?: boolean;

  size?: SizeProps;
  customSize?: CustomSize;
  variant?: VariantProps;
  classNameDefault?: boolean;

  triggerClassName?: string;
  contentClassName?: string;
  itemClassName?: string;
  searchInputClassName?: string;
};
```

## src/components/select.tsx

<a id="select"></a>

### Select

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `children` | `React.ReactNode` | Yes | — | Content or composed component parts. |
| `customSize` | `CustomSize` | No | — | Override individual shared size slots while keeping the remaining size defaults. |
| `defaultOpen` | `boolean \| undefined` | No | `false` | Initial visibility when the component manages its own open state. |
| `defaultValue` | `string` | No | `""` | Initial value for uncontrolled use. Later changes do not replace controlled state. |
| `disabled` | `boolean \| undefined` | No | `false` | Disable interaction with this control. |
| `invalid` | `boolean \| undefined` | No | `false` | Apply error styling; supply a useful error message separately. |
| `name` | `string` | No | — | Field key in form state, or the native form field name for standalone controls. |
| `onOpenChange` | `(open: boolean) => void` | No | — | Called when visibility should change; update controlled state here. |
| `onValueChange` | `(value: string) => void` | No | — | Receives the next value when the user changes the selection. |
| `open` | `boolean \| undefined` | No | — | Controlled visibility state. Pair with onOpenChange. |
| `required` | `boolean \| undefined` | No | — |  |
| `size` | `SizeProps \| undefined` | No | `"sm"` | Control dimensions. The type lists supported size names for this component. |
| `value` | `string` | No | — | Current controlled value. Update it from the corresponding change callback. |
| `variant` | `import("..").FormInputVariantProps \| undefined` | No | `"outline"` | Visual style. The type lists supported variants for this component. |


```ts
Select: ({ value, defaultValue, onValueChange, open, defaultOpen, onOpenChange, disabled, name, required, variant, size, customSize, invalid, children, }: SelectProps) => React.JSX.Element
```

<a id="selectcontent"></a>

### SelectContent

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `align` | `SelectAlign \| undefined` | No | `"start"` | Alignment of floating content relative to its trigger. |
| `position` | `"popper" \| undefined` | No | — |  |
| `sideOffset` | `number` | No | `4` | Distance in pixels between trigger and floating content. |


```ts
SelectContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & { position?: "popper"; sideOffset?: number; align?: SelectAlign; } & React.RefAttributes<HTMLDivElement>>
```

<a id="selectcontentprops"></a>

### SelectContentProps

type


```ts
export type SelectContentProps = React.HTMLAttributes<HTMLDivElement> & {
  position?: "popper";
  sideOffset?: number;
  align?: SelectAlign;
};
```

<a id="selectgroup"></a>

### SelectGroup

component


```ts
SelectGroup: React.ForwardRefExoticComponent<SelectGroupProps & React.RefAttributes<HTMLDivElement>>
```

<a id="selectgroupprops"></a>

### SelectGroupProps

type


```ts
export type SelectGroupProps = React.HTMLAttributes<HTMLDivElement>;
```

<a id="selectitem"></a>

### SelectItem

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | Yes | — | Current controlled value. Update it from the corresponding change callback. |
| `customSize` | `CustomSize` | No | — | Override individual shared size slots while keeping the remaining size defaults. |
| `disabled` | `boolean \| undefined` | No | `false` | Disable interaction with this control. |
| `size` | `SizeProps \| undefined` | No | — | Control dimensions. The type lists supported size names for this component. |
| `textValue` | `string` | No | — |  |


```ts
SelectItem: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> & { value: string; disabled?: boolean; textValue?: string; size?: SizeProps; customSize?: CustomSize; } & React.RefAttributes<HTMLDivElement>>
```

<a id="selectitemprops"></a>

### SelectItemProps

type


```ts
export type SelectItemProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onSelect"
> & {
  value: string;
  disabled?: boolean;
  textValue?: string;
  size?: SizeProps;
  customSize?: CustomSize;
};
```

<a id="selectlabel"></a>

### SelectLabel

component


```ts
SelectLabel: React.ForwardRefExoticComponent<SelectLabelProps & React.RefAttributes<HTMLDivElement>>
```

<a id="selectlabelprops"></a>

### SelectLabelProps

type


```ts
export type SelectLabelProps = React.HTMLAttributes<HTMLDivElement>;
```

<a id="selectprops"></a>

### SelectProps

type


```ts
export type SelectProps = {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;

  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;

  disabled?: boolean;
  name?: string;
  required?: boolean;

  variant?: VariantProps;
  size?: SizeProps;
  customSize?: CustomSize;
  invalid?: boolean;

  children: React.ReactNode;
};
```

<a id="selectseparator"></a>

### SelectSeparator

component


```ts
SelectSeparator: React.ForwardRefExoticComponent<SelectSeparatorProps & React.RefAttributes<HTMLDivElement>>
```

<a id="selectseparatorprops"></a>

### SelectSeparatorProps

type


```ts
export type SelectSeparatorProps = React.HTMLAttributes<HTMLDivElement>;
```

<a id="selecttrigger"></a>

### SelectTrigger

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `customSize` | `CustomSize` | No | — | Override individual shared size slots while keeping the remaining size defaults. |
| `invalid` | `boolean \| undefined` | No | — | Apply error styling; supply a useful error message separately. |
| `size` | `SizeProps \| undefined` | No | — | Control dimensions. The type lists supported size names for this component. |
| `variant` | `import("..").FormInputVariantProps \| undefined` | No | — | Visual style. The type lists supported variants for this component. |


```ts
SelectTrigger: React.ForwardRefExoticComponent<Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size"> & { variant?: VariantProps; size?: SizeProps; customSize?: CustomSize; invalid?: boolean; } & React.RefAttributes<HTMLButtonElement>>
```

<a id="selecttriggerprops"></a>

### SelectTriggerProps

type


```ts
export type SelectTriggerProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "size"
> & {
  variant?: VariantProps;
  size?: SizeProps;
  customSize?: CustomSize;
  invalid?: boolean;
};
```

<a id="selectvalue"></a>

### SelectValue

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `placeholder` | `React.ReactNode` | No | `"Select an option"` | Hint displayed when there is no current value. |


```ts
SelectValue: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLSpanElement> & { placeholder?: React.ReactNode; } & React.RefAttributes<HTMLSpanElement>>
```

<a id="selectvalueprops"></a>

### SelectValueProps

type


```ts
export type SelectValueProps = React.HTMLAttributes<HTMLSpanElement> & {
  placeholder?: React.ReactNode;
};
```

## src/components/separator.tsx

<a id="separator"></a>

### Separator

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `decorative` | `boolean \| undefined` | No | `true` | Whether or not the component is purely decorative. When true, accessibility-related attributes<br>are updated so that the rendered element is removed from the accessibility tree. |
| `orientation` | `("vertical" \| "horizontal") \| undefined` | No | `'horizontal'` | Either `vertical` or `horizontal`. Defaults to `horizontal`. |


```ts
Separator: React.ForwardRefExoticComponent<Omit<SeparatorPrimitive.SeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

## src/components/sheet.tsx

<a id="sheet"></a>

### Sheet

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `children` | `React.ReactNode \| undefined` | No | — | Content or composed component parts. |
| `defaultOpen` | `boolean \| undefined` | No | — | Initial visibility when the component manages its own open state. |
| `modal` | `boolean \| undefined` | No | — |  |
| `onOpenChange` | `{<br>        bivarianceHack(open: boolean): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Called when visibility should change; update controlled state here. |
| `open` | `boolean \| undefined` | No | — | Controlled visibility state. Pair with onOpenChange. |


```ts
Sheet: React.FC<SheetPrimitive.DialogProps>
```

<a id="sheetclose"></a>

### SheetClose

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
SheetClose: React.ForwardRefExoticComponent<SheetPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>
```

<a id="sheetcontent"></a>

### SheetContent

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `deferPointerDownOutside` | `boolean \| undefined` | No | — | When `true`, a `'pointerdown'` event outside of the layered element will<br>wait for the interaction's click event before dispatching, allowing<br>third-party code to stop propagation of later events and cancel dismissal. |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |
| `onCloseAutoFocus` | `FocusScopeProps['onUnmountAutoFocus'] \| undefined` | No | — | Event handler called when auto-focusing on close.<br>Can be prevented. |
| `onEscapeKeyDown` | `{<br>        bivarianceHack(event: KeyboardEvent): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event handler called when the escape key is down.<br>Can be prevented. |
| `onFocusOutside` | `{<br>        bivarianceHack(event: FocusOutsideEvent): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event handler called when the focus moves outside of the `DismissableLayer`.<br>Can be prevented. |
| `onInteractOutside` | `{<br>        bivarianceHack(event: PointerDownOutsideEvent \| FocusOutsideEvent): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event handler called when an interaction happens outside the `DismissableLayer`.<br>Specifically, when a `pointerdown` event happens outside or focus moves outside of it.<br>Can be prevented. |
| `onOpenAutoFocus` | `FocusScopeProps['onMountAutoFocus'] \| undefined` | No | — | Event handler called when auto-focusing on open.<br>Can be prevented. |
| `onPointerDownOutside` | `{<br>        bivarianceHack(event: PointerDownOutsideEvent): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event handler called when the a `pointerdown` event happens outside of the `DismissableLayer`.<br>Can be prevented. |
| `side` | `"top" \| "right" \| "bottom" \| "left" \| null \| undefined` | No | `'right'` | Preferred side of the trigger, or edge for SheetContent. |


```ts
SheetContent: React.ForwardRefExoticComponent<SheetContentProps & React.RefAttributes<HTMLDivElement>>
```

<a id="sheetdescription"></a>

### SheetDescription

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
SheetDescription: React.ForwardRefExoticComponent<Omit<SheetPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>
```

<a id="sheetfooter"></a>

### SheetFooter

component


```ts
SheetFooter: { ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element; displayName: string; }
```

<a id="sheetheader"></a>

### SheetHeader

component


```ts
SheetHeader: { ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element; displayName: string; }
```

<a id="sheetoverlay"></a>

### SheetOverlay

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |


```ts
SheetOverlay: React.ForwardRefExoticComponent<Omit<SheetPrimitive.DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="sheetportal"></a>

### SheetPortal

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `children` | `React.ReactNode \| undefined` | No | — | Content or composed component parts. |
| `container` | `PortalProps['container'] \| undefined` | No | — | Specify a container element to portal the content into. |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |


```ts
SheetPortal: React.FC<SheetPrimitive.DialogPortalProps>
```

<a id="sheettitle"></a>

### SheetTitle

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
SheetTitle: React.ForwardRefExoticComponent<Omit<SheetPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>
```

<a id="sheettrigger"></a>

### SheetTrigger

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
SheetTrigger: React.ForwardRefExoticComponent<SheetPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>
```

## src/components/skeleton.tsx

<a id="skeleton"></a>

### Skeleton

component


```ts
Skeleton: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element
```

## src/components/slider.tsx

<a id="slider"></a>

### Slider

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `defaultValue` | `number[] \| undefined` | No | — | Initial value for uncontrolled use. Later changes do not replace controlled state. |
| `dir` | `("ltr" \| "rtl") \| undefined` | No | — |  |
| `disabled` | `boolean \| undefined` | No | — | Disable interaction with this control. |
| `form` | `string \| undefined` | No | — |  |
| `inverted` | `boolean \| undefined` | No | — |  |
| `max` | `number \| undefined` | No | — |  |
| `min` | `number \| undefined` | No | — |  |
| `minStepsBetweenThumbs` | `number \| undefined` | No | — |  |
| `name` | `string \| undefined` | No | — | Field key in form state, or the native form field name for standalone controls. |
| `onValueChange` | `{<br>        bivarianceHack(value: number[]): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Receives the next value when the user changes the selection. |
| `onValueCommit` | `{<br>        bivarianceHack(value: number[]): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `orientation` | `("vertical" \| "horizontal") \| undefined` | No | — | Layout or scroll axis; see the type for supported values. |
| `preserveThumbOrder` | `boolean \| undefined` | No | — | When `true`, thumbs keep their relative order and won't cross over one<br>another while dragging. Each thumb is constrained to the values of its<br>neighbors instead of swapping positions when dragged past them. |
| `step` | `number \| undefined` | No | — |  |
| `value` | `number[] \| undefined` | No | — | Current controlled value. Update it from the corresponding change callback. |


```ts
Slider: React.ForwardRefExoticComponent<Omit<SliderPrimitive.SliderProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>
```

## src/components/sonner.tsx

<a id="sonnertoaster"></a>

### SonnerToaster

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | No | — | Additional classes merged onto the component element. |
| `closeButton` | `boolean \| undefined` | No | — |  |
| `containerAriaLabel` | `string` | No | — | Text used for this label; customize it for your application language. |
| `customAriaLabel` | `string` | No | — | Text used for this label; customize it for your application language. |
| `dir` | `"auto" \| "ltr" \| "rtl" \| undefined` | No | — |  |
| `duration` | `number` | No | — |  |
| `expand` | `boolean \| undefined` | No | — |  |
| `gap` | `number` | No | — |  |
| `hotkey` | `string[]` | No | — |  |
| `icons` | `ToastIcons` | No | — |  |
| `id` | `string` | No | — |  |
| `invert` | `boolean \| undefined` | No | — |  |
| `mobileOffset` | `Offset` | No | — |  |
| `offset` | `Offset` | No | — |  |
| `position` | `("top-left" \| "top-right" \| "bottom-left" \| "bottom-right" \| "top-center" \| "bottom-center") \| undefined` | No | — |  |
| `richColors` | `boolean \| undefined` | No | — |  |
| `style` | `React.CSSProperties` | No | — |  |
| `swipeDirections` | `SwipeDirection[]` | No | — |  |
| `theme` | `"dark" \| "light" \| "system" \| undefined` | No | `'system'` |  |
| `toastOptions` | `ToastOptions` | No | — |  |
| `visibleToasts` | `number` | No | — |  |


```ts
SonnerToaster: ({ ...props }: SonnerToasterProps) => React.JSX.Element
```

<a id="sonnertoasterprops"></a>

### SonnerToasterProps

type


```ts
export type SonnerToasterProps = React.ComponentProps<typeof Sonner>;
```

<a id="toastersonner"></a>

### ToasterSonner

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | No | — | Additional classes merged onto the component element. |
| `closeButton` | `boolean \| undefined` | No | — |  |
| `containerAriaLabel` | `string` | No | — | Text used for this label; customize it for your application language. |
| `customAriaLabel` | `string` | No | — | Text used for this label; customize it for your application language. |
| `dir` | `"auto" \| "ltr" \| "rtl" \| undefined` | No | — |  |
| `duration` | `number` | No | — |  |
| `expand` | `boolean \| undefined` | No | — |  |
| `gap` | `number` | No | — |  |
| `hotkey` | `string[]` | No | — |  |
| `icons` | `ToastIcons` | No | — |  |
| `id` | `string` | No | — |  |
| `invert` | `boolean \| undefined` | No | — |  |
| `mobileOffset` | `Offset` | No | — |  |
| `offset` | `Offset` | No | — |  |
| `position` | `("top-left" \| "top-right" \| "bottom-left" \| "bottom-right" \| "top-center" \| "bottom-center") \| undefined` | No | — |  |
| `richColors` | `boolean \| undefined` | No | — |  |
| `style` | `React.CSSProperties` | No | — |  |
| `swipeDirections` | `SwipeDirection[]` | No | — |  |
| `theme` | `"dark" \| "light" \| "system" \| undefined` | No | `'system'` |  |
| `toastOptions` | `ToastOptions` | No | — |  |
| `visibleToasts` | `number` | No | — |  |


```ts
ToasterSonner: ({ ...props }: SonnerToasterProps) => React.JSX.Element
```

## src/components/switch.tsx

<a id="switch"></a>

### Switch

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `checked` | `boolean \| undefined` | No | — | Controlled checked state; some primitives also support indeterminate. |
| `defaultChecked` | `boolean \| undefined` | No | — | Initial checked state for uncontrolled use. |
| `onCheckedChange` | `{<br>        bivarianceHack(checked: boolean): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Receives the next checked state. |
| `required` | `boolean \| undefined` | No | — |  |


```ts
Switch: React.ForwardRefExoticComponent<Omit<SwitchPrimitives.SwitchProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>
```

## src/components/table.tsx

<a id="table"></a>

### Table

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `containerClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `internalScroll` | `boolean \| undefined` | No | `false` | Allow the wrapper to scroll. Disable to let the surrounding page scroll. |


```ts
Table: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableElement> & { containerClassName?: string; internalScroll?: boolean; } & React.RefAttributes<HTMLTableElement>>
```

<a id="tablebody"></a>

### TableBody

component


```ts
TableBody: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>
```

<a id="tablecaption"></a>

### TableCaption

component


```ts
TableCaption: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableCaptionElement> & React.RefAttributes<HTMLTableCaptionElement>>
```

<a id="tablecell"></a>

### TableCell

component


```ts
TableCell: React.ForwardRefExoticComponent<React.TdHTMLAttributes<HTMLTableCellElement> & React.RefAttributes<HTMLTableCellElement>>
```

<a id="tablefooter"></a>

### TableFooter

component


```ts
TableFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>
```

<a id="tablehead"></a>

### TableHead

component


```ts
TableHead: React.ForwardRefExoticComponent<React.ThHTMLAttributes<HTMLTableCellElement> & React.RefAttributes<HTMLTableCellElement>>
```

<a id="tableheader"></a>

### TableHeader

component


```ts
TableHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>
```

<a id="tableprops"></a>

### TableProps

type


```ts
export type TableProps = React.HTMLAttributes<HTMLTableElement> & {
  containerClassName?: string;
  /** Allow the wrapper to scroll. Disable to let the surrounding page scroll. */
  internalScroll?: boolean;
};
```

<a id="tablerow"></a>

### TableRow

component


```ts
TableRow: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableRowElement> & React.RefAttributes<HTMLTableRowElement>>
```

## src/components/tabs.tsx

<a id="tabs"></a>

### Tabs

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `activationMode` | `("manual" \| "automatic") \| undefined` | No | — | Whether a tab is activated automatically or manually. |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `defaultValue` | `string \| undefined` | No | — | The value of the tab to select by default, if uncontrolled |
| `dir` | `("ltr" \| "rtl") \| undefined` | No | — | The direction of navigation between toolbar items. |
| `onValueChange` | `{<br>        bivarianceHack(value: string): void;<br>    }['bivarianceHack'] \| undefined` | No | — | A function called when a new tab is selected |
| `orientation` | `("vertical" \| "horizontal") \| undefined` | No | — | The orientation the tabs are layed out.<br>Mainly so arrow navigation is done accordingly (left & right vs. up & down) |
| `value` | `string \| undefined` | No | — | The value for the selected tab, if controlled |


```ts
Tabs: React.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React.RefAttributes<HTMLDivElement>>
```

<a id="tabscontent"></a>

### TabsContent

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | Yes | — | Current controlled value. Update it from the corresponding change callback. |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |


```ts
TabsContent: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="tabslist"></a>

### TabsList

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `loop` | `boolean \| undefined` | No | — |  |


```ts
TabsList: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="tabstrigger"></a>

### TabsTrigger

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | Yes | — | Current controlled value. Update it from the corresponding change callback. |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
TabsTrigger: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>
```

## src/components/textarea.tsx

<a id="textarea"></a>

### Textarea

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | No | — | Additional classes merged onto the component element. |
| `classNameDefault` | `boolean \| undefined` | No | `true` | Enable the built-in class set. Set false when supplying your own control styles. |
| `customSize` | `CustomSize` | No | — | Override individual shared size slots while keeping the remaining size defaults. |
| `invalid` | `boolean \| undefined` | No | `false` | Apply error styling; supply a useful error message separately. |
| `placeholder` | `string` | No | — | Hint displayed when there is no current value. |
| `size` | `SizeProps \| undefined` | No | `"md"` | Control dimensions. The type lists supported size names for this component. |
| `variant` | `import("..").FormInputVariantProps \| undefined` | No | `"outline"` | Visual style. The type lists supported variants for this component. |


```ts
Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>
```

<a id="textareaprops"></a>

### TextareaProps

type


```ts
export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  size?: SizeProps;
  customSize?: CustomSize;
  variant?: VariantProps;
  invalid?: boolean;
  classNameDefault?: boolean;
  placeholder?: string;
  className?: string;
}
```

## src/components/toast.tsx

<a id="toast"></a>

### Toast

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `defaultOpen` | `boolean \| undefined` | No | — | Initial visibility when the component manages its own open state. |
| `duration` | `number \| undefined` | No | — | Time in milliseconds that toast should remain visible for. Overrides value<br>given to `ToastProvider`. |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |
| `onEscapeKeyDown` | `DismissableLayerProps['onEscapeKeyDown'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `onOpenChange` | `{<br>        bivarianceHack(open: boolean): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Called when visibility should change; update controlled state here. |
| `onPause` | `(() => void) \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `onResume` | `(() => void) \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `onSwipeCancel` | `{<br>        bivarianceHack(event: SwipeEvent): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `onSwipeEnd` | `{<br>        bivarianceHack(event: SwipeEvent): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `onSwipeMove` | `{<br>        bivarianceHack(event: SwipeEvent): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `onSwipeStart` | `{<br>        bivarianceHack(event: SwipeEvent): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `open` | `boolean \| undefined` | No | — | Controlled visibility state. Pair with onOpenChange. |
| `type` | `("foreground" \| "background") \| undefined` | No | — |  |
| `variant` | `"default" \| "destructive" \| null \| undefined` | No | `'default'` | Visual style. The type lists supported variants for this component. |


```ts
Toast: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastProps & React.RefAttributes<HTMLLIElement>, "ref"> & VariantProps<(props?: ({ variant?: "default" | "destructive" | null | undefined; } & import("class-variance-authority/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLLIElement>>
```

<a id="toastaction"></a>

### ToastAction

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `altText` | `string` | Yes | — | A short description for an alternate way to carry out the action. For screen reader users<br>who will not be able to navigate to the button easily/quickly. |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
ToastAction: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastActionProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>
```

<a id="toastactionelement"></a>

### ToastActionElement

type


```ts
type ToastActionElement = React.ReactElement<typeof ToastAction>;
```

<a id="toastclose"></a>

### ToastClose

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
ToastClose: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastCloseProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>
```

<a id="toastdescription"></a>

### ToastDescription

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
ToastDescription: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastDescriptionProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="toastprops"></a>

### ToastProps

type


```ts
type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;
```

<a id="toastprovider"></a>

### ToastProvider

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `announcerContainer` | `Element \| DocumentFragment \| undefined` | No | — | An optional container where the toast announcements should be appended.<br>This is useful when working with focus traps or modal dialogs that make<br>other elements inert. |
| `children` | `React.ReactNode \| undefined` | No | — | Content or composed component parts. |
| `duration` | `number \| undefined` | No | — | Time in milliseconds that each toast should remain visible for. |
| `label` | `string \| undefined` | No | — | An author-localized label for each toast. Used to help screen reader users<br>associate the interruption with a toast. |
| `swipeDirection` | `("right" \| "left" \| "up" \| "down") \| undefined` | No | — | Direction of pointer swipe that should close the toast. |
| `swipeThreshold` | `number \| undefined` | No | — | Distance in pixels that the swipe must pass before a close is triggered. |


```ts
ToastProvider: React.FC<ToastPrimitives.ToastProviderProps>
```

<a id="toasttitle"></a>

### ToastTitle

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
ToastTitle: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastTitleProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="toastviewport"></a>

### ToastViewport

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `hotkey` | `string[] \| undefined` | No | — | The keys to use as the keyboard shortcut that will move focus to the toast viewport. |
| `label` | `string \| undefined` | No | — | An author-localized label for the toast viewport to provide context for screen reader users<br>when navigating page landmarks. The available `{hotkey}` placeholder will be replaced for you. |


```ts
ToastViewport: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastViewportProps & React.RefAttributes<HTMLOListElement>, "ref"> & React.RefAttributes<HTMLOListElement>>
```

## src/components/toaster.tsx

<a id="toaster"></a>

### Toaster

component


```ts
Toaster: () => React.JSX.Element
```

## src/components/toggle.tsx

<a id="toggle"></a>

### Toggle

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `defaultPressed` | `boolean \| undefined` | No | — | The state of the toggle when initially rendered. Use `defaultPressed`<br>if you do not need to control the state of the toggle. |
| `onPressedChange` | `{<br>        bivarianceHack(pressed: boolean): void;<br>    }['bivarianceHack'] \| undefined` | No | — | The callback that fires when the state of the toggle changes. |
| `pressed` | `boolean \| undefined` | No | — | The controlled state of the toggle. |
| `size` | `"default" \| "sm" \| "lg" \| null \| undefined` | No | `'default'` | Control dimensions. The type lists supported size names for this component. |
| `variant` | `"default" \| "outline" \| null \| undefined` | No | `'default'` | Visual style. The type lists supported variants for this component. |


```ts
Toggle: React.ForwardRefExoticComponent<Omit<TogglePrimitive.ToggleProps & React.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({ variant?: "default" | "outline" | null | undefined; size?: "default" | "sm" | "lg" | null | undefined; } & import("class-variance-authority/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLButtonElement>>
```

<a id="togglevariants"></a>

### toggleVariants

function


```ts
toggleVariants: (props?: ({ variant?: "default" | "outline" | null | undefined; size?: "default" | "sm" | "lg" | null | undefined; } & import("class-variance-authority/types").ClassProp) | undefined): string
```

## src/components/toggle-group.tsx

<a id="togglegroup"></a>

### ToggleGroup

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `type` | `typeof ToggleGroupType.Single<br>\| typeof ToggleGroupType.Multiple` | Yes | — |  |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `defaultValue` | `string \| undefined<br>\| string[] \| undefined` | No | — | The value of the item that is pressed when initially rendered. Use<br>`defaultValue` if you do not need to control the state of a toggle group. |
| `dir` | `("ltr" \| "rtl") \| undefined` | No | — |  |
| `disabled` | `boolean \| undefined` | No | — | Whether the group is disabled from user interaction. |
| `loop` | `boolean \| undefined` | No | — |  |
| `onValueChange` | `{<br>        bivarianceHack(value: string): void;<br>    }['bivarianceHack'] \| undefined<br>\| {<br>        bivarianceHack(value: string[]): void;<br>    }['bivarianceHack'] \| undefined` | No | — | The callback that fires when the value of the toggle group changes. |
| `orientation` | `("vertical" \| "horizontal") \| undefined` | No | — | Layout or scroll axis; see the type for supported values. |
| `rovingFocus` | `boolean \| undefined` | No | — | Whether the group should maintain roving focus of its buttons. |
| `size` | `"default" \| "sm" \| "lg" \| null \| undefined` | No | — | Control dimensions. The type lists supported size names for this component. |
| `value` | `string \| undefined<br>\| string[] \| undefined` | No | — | The controlled stateful value of the item that is pressed. |
| `variant` | `"default" \| "outline" \| null \| undefined` | No | — | Visual style. The type lists supported variants for this component. |


```ts
ToggleGroup: React.ForwardRefExoticComponent<((Omit<ToggleGroupPrimitive.ToggleGroupSingleProps & React.RefAttributes<HTMLDivElement>, "ref"> | Omit<ToggleGroupPrimitive.ToggleGroupMultipleProps & React.RefAttributes<HTMLDivElement>, "ref">) & VariantProps<(props?: ({ variant?: "default" | "outline" | null | undefined; size?: "default" | "sm" | "lg" | null | undefined; } & import("class-variance-authority/types").ClassProp) | undefined) => string>) & React.RefAttributes<HTMLDivElement>>
```

<a id="togglegroupitem"></a>

### ToggleGroupItem

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | Yes | — | A string value for the toggle group item. All items within a toggle group should use a unique value. |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `size` | `"default" \| "sm" \| "lg" \| null \| undefined` | No | — | Control dimensions. The type lists supported size names for this component. |
| `variant` | `"default" \| "outline" \| null \| undefined` | No | — | Visual style. The type lists supported variants for this component. |


```ts
ToggleGroupItem: React.ForwardRefExoticComponent<Omit<ToggleGroupPrimitive.ToggleGroupItemProps & React.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({ variant?: "default" | "outline" | null | undefined; size?: "default" | "sm" | "lg" | null | undefined; } & import("class-variance-authority/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLButtonElement>>
```

## src/components/tooltip.tsx

<a id="tooltip"></a>

### Tooltip

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `children` | `React.ReactNode \| undefined` | No | — | Content or composed component parts. |
| `defaultOpen` | `boolean \| undefined` | No | — | Initial visibility when the component manages its own open state. |
| `delayDuration` | `number \| undefined` | No | — | The duration from when the pointer enters the trigger until the tooltip gets opened. This will<br>override the prop with the same name passed to Provider. |
| `disableHoverableContent` | `boolean \| undefined` | No | — | When `true`, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger. |
| `onOpenChange` | `{<br>        bivarianceHack(open: boolean): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Called when visibility should change; update controlled state here. |
| `open` | `boolean \| undefined` | No | — | Controlled visibility state. Pair with onOpenChange. |


```ts
Tooltip: React.FC<TooltipPrimitive.TooltipProps>
```

<a id="tooltipcontent"></a>

### TooltipContent

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `align` | `"center" \| "start" \| "end" \| undefined` | No | — | Alignment of floating content relative to its trigger. |
| `alignOffset` | `number \| undefined` | No | — |  |
| `aria-label` | `string \| undefined` | No | — | A more descriptive label for accessibility purpose |
| `arrowPadding` | `number \| undefined` | No | — |  |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `avoidCollisions` | `boolean \| undefined` | No | — |  |
| `collisionBoundary` | `Boundary \| Boundary[] \| undefined` | No | — |  |
| `collisionPadding` | `number \| Partial<Record<Side, number>> \| undefined` | No | — |  |
| `forceMount` | `true \| undefined` | No | — | Used to force mounting when more control is needed. Useful when<br>controlling animation with React animation libraries. |
| `hideWhenDetached` | `boolean \| undefined` | No | — |  |
| `onEscapeKeyDown` | `DismissableLayerProps['onEscapeKeyDown'] \| undefined` | No | — | Event handler called when the escape key is down.<br>Can be prevented. |
| `onPointerDownOutside` | `DismissableLayerProps['onPointerDownOutside'] \| undefined` | No | — | Event handler called when the a `pointerdown` event happens outside of the `Tooltip`.<br>Can be prevented. |
| `side` | `"top" \| "right" \| "bottom" \| "left" \| undefined` | No | — | Preferred side of the trigger, or edge for SheetContent. |
| `sideOffset` | `number \| undefined` | No | `4` | Distance in pixels between trigger and floating content. |
| `sticky` | `("partial" \| "always") \| undefined` | No | — |  |
| `updatePositionStrategy` | `("always" \| "optimized") \| undefined` | No | — |  |


```ts
TooltipContent: React.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>
```

<a id="tooltipprovider"></a>

### TooltipProvider

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `children` | `React.ReactNode` | Yes | — | Content or composed component parts. |
| `delayDuration` | `number \| undefined` | No | — | The duration from when the pointer enters the trigger until the tooltip gets opened. |
| `disableHoverableContent` | `boolean \| undefined` | No | — | When `true`, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger. |
| `skipDelayDuration` | `number \| undefined` | No | — | How much time a user has to enter another trigger without incurring a delay again. |


```ts
TooltipProvider: React.FC<TooltipPrimitive.TooltipProviderProps>
```

<a id="tooltiptrigger"></a>

### TooltipTrigger

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |


```ts
TooltipTrigger: React.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React.RefAttributes<HTMLButtonElement>>
```

## src/components/use-toast.ts

<a id="reducer"></a>

### reducer

function


```ts
reducer: (state: State, action: Action): State
```

<a id="toast"></a>

### toast

function


```ts
toast: ({ ...props }: Toast): { id: string; dismiss: () => void; update: (props: ToasterToast) => void; }
```

<a id="usetoast"></a>

### useToast

function


```ts
useToast: (): { toast: ({ ...props }: Toast) => { id: string; dismiss: () => void; update: (props: ToasterToast) => void; }; dismiss: (toastId?: string) => void; toasts: ToasterToast[]; }
```

## src/components/ui/input.tsx

<a id="uiinput"></a>

### UiInput

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | No | — | Additional classes merged onto the component element. |
| `classNameDefault` | `boolean \| undefined` | No | — | Enable the built-in class set. Set false when supplying your own control styles. |
| `containerClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `customSize` | `CustomSize` | No | — | Override individual shared size slots while keeping the remaining size defaults. |
| `errorMessage` | `string` | No | — | Visible validation feedback; also activates error styling where supported. |
| `htmlFormItemId` | `string` | No | — | Stable id used to connect the control to its label and messages. |
| `invalid` | `boolean \| undefined` | No | — | Apply error styling; supply a useful error message separately. |
| `label` | `React.ReactNode` | No | — | Visible label describing the field or action. |
| `labelClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `leading` | `React.ReactNode` | No | — | Content placed before the input, such as an icon. |
| `messageClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `placeholder` | `string` | No | — | Hint displayed when there is no current value. |
| `requiredLabel` | `boolean \| undefined` | No | — | Show a required marker. Enforce validation with a schema, rules or native required. |
| `requiredLabelClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `size` | `import("../..").SizeProps \| undefined` | No | — | Control dimensions. The type lists supported size names for this component. |
| `trailing` | `React.ReactNode` | No | — | Content placed after the input, such as a unit or action. |
| `variant` | `import("../..").FormInputVariantProps \| undefined` | No | — | Visual style. The type lists supported variants for this component. |


```ts
UiInput: React.ForwardRefExoticComponent<UiInputProps & React.RefAttributes<HTMLInputElement>>
```

<a id="uiinputprops"></a>

### UiInputProps

type


```ts
export interface UiInputProps extends Omit<InputProps, 'id'> {
  label?: React.ReactNode;
  errorMessage?: string;
  htmlFormItemId?: string;
  requiredLabel?: boolean;
  requiredLabelClassName?: string;
  containerClassName?: string;
  labelClassName?: string;
  messageClassName?: string;
}
```

## src/components/ui/select.tsx

<a id="uiselect"></a>

### UiSelect

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `children` | `React.ReactNode` | No | — | Content or composed component parts. |
| `className` | `string` | No | — | Additional classes merged onto the component element. |
| `classNameDefault` | `boolean \| undefined` | No | — | Enable the built-in class set. Set false when supplying your own control styles. |
| `contentAlign` | `"center" \| "start" \| "end" \| undefined` | No | `"center"` | Align popup content with the start, center or end of the trigger. |
| `contentClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `contentSideOffset` | `number` | No | `6` | Distance in pixels between the trigger and popup. |
| `customSize` | `CustomSize` | No | — | Override individual shared size slots while keeping the remaining size defaults. |
| `defaultValue` | `string` | No | — | Initial value for uncontrolled use. Later changes do not replace controlled state. |
| `disabled` | `boolean \| undefined` | No | — | Disable interaction with this control. |
| `errorMessage` | `string` | No | — | Visible validation feedback; also activates error styling where supported. |
| `htmlFormItemId` | `string` | No | — | Stable id used to connect the control to its label and messages. |
| `itemClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `items` | `UiSelectOption<TData>[]` | No | — | Options or records to display; see the element type for the required shape. |
| `label` | `React.ReactNode` | No | — | Visible label describing the field or action. |
| `labelClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `messageClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `onChange` | `(value: string) => void` | No | — | Change callback. Check the type: standalone inputs emit events; wrappers may emit values or dates. |
| `placeholder` | `string` | No | `"Select an option"` | Hint displayed when there is no current value. |
| `position` | `"popper" \| undefined` | No | `"popper"` |  |
| `requiredLabel` | `boolean \| undefined` | No | — | Show a required marker. Enforce validation with a schema, rules or native required. |
| `requiredLabelClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `selectClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `size` | `SizeProps \| undefined` | No | `"sm"` | Control dimensions. The type lists supported size names for this component. |
| `value` | `string` | No | — | Current controlled value. Update it from the corresponding change callback. |
| `variant` | `import("../..").FormInputVariantProps \| undefined` | No | `"outline"` | Visual style. The type lists supported variants for this component. |


```ts
UiSelect: <TData = unknown>({ label, placeholder, value, defaultValue, onChange, items, children, disabled, requiredLabel, className, selectClassName, labelClassName, contentClassName, itemClassName, messageClassName, requiredLabelClassName, size, customSize, variant, errorMessage, htmlFormItemId, position, contentAlign, contentSideOffset, }: UiSelectProps<TData>) => React.JSX.Element
```

<a id="uiselectoption"></a>

### UiSelectOption

type


```ts
export type UiSelectOption<TData = unknown> = {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
  data?: TData;
};
```

<a id="uiselectprops"></a>

### UiSelectProps

type


```ts
export interface UiSelectProps<TData = unknown> {
  label?: React.ReactNode;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  items?: UiSelectOption<TData>[];
  children?: React.ReactNode;
  disabled?: boolean;
  requiredLabel?: boolean;

  className?: string;
  selectClassName?: string;
  labelClassName?: string;
  contentClassName?: string;
  itemClassName?: string;
  messageClassName?: string;
  requiredLabelClassName?: string;

  size?: SizeProps;
  customSize?: CustomSize;
  variant?: VariantProps;
  classNameDefault?: boolean;

  errorMessage?: string;
  htmlFormItemId?: string;

  position?: "popper";
  contentAlign?: "start" | "center" | "end";
  contentSideOffset?: number;
}
```

## src/components/ui/ui-checkbox.tsx

<a id="uicheckbox"></a>

### UiCheckbox

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean \| undefined` | No | — | Merge behavior and styles into one child element instead of rendering the default element. |
| `checked` | `import("@radix-ui/react-checkbox").CheckedState \| undefined` | No | — | Controlled checked state; some primitives also support indeterminate. |
| `containerClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `contentClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `defaultChecked` | `import("@radix-ui/react-checkbox").CheckedState \| undefined` | No | — | Initial checked state for uncontrolled use. |
| `description` | `React.ReactNode` | No | — | Supporting information shown with the component. |
| `descriptionClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `errorClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `errorMessage` | `string` | No | — | Visible validation feedback; also activates error styling where supported. |
| `htmlFormItemId` | `string` | No | — | Stable id used to connect the control to its label and messages. |
| `iconClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `invalid` | `boolean \| undefined` | No | — | Apply error styling; supply a useful error message separately. |
| `label` | `React.ReactNode` | No | — | Visible label describing the field or action. |
| `labelClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `onCheckedChange` | `{<br>        bivarianceHack(checked: CheckedState): void;<br>    }['bivarianceHack'] \| undefined` | No | — | Receives the next checked state. |
| `required` | `boolean \| undefined` | No | — |  |
| `requiredLabel` | `boolean \| undefined` | No | — | Show a required marker. Enforce validation with a schema, rules or native required. |
| `requiredLabelClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `size` | `import("../checkbox").CheckboxSize \| undefined` | No | — | Control dimensions. The type lists supported size names for this component. |
| `variant` | `import("../checkbox").CheckboxVariant \| undefined` | No | — | Visual style. The type lists supported variants for this component. |


```ts
UiCheckbox: React.ForwardRefExoticComponent<UiCheckboxProps & React.RefAttributes<HTMLButtonElement>>
```

<a id="uicheckboxprops"></a>

### UiCheckboxProps

type


```ts
export interface UiCheckboxProps extends CheckboxProps {
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: string;

  containerClassName?: string;
  contentClassName?: string;
  labelClassName?: string;
  descriptionClassName?: string;
  errorClassName?: string;
  requiredLabelClassName?: string;

  requiredLabel?: boolean;
  htmlFormItemId?: string;
}
```

## src/components/ui/ui-date.tsx

<a id="uidate"></a>

### UiDate

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | No | — | Additional classes merged onto the component element. |
| `classNameDefault` | `boolean \| undefined` | No | `true` | Enable the built-in class set. Set false when supplying your own control styles. |
| `contentAlign` | `"center" \| "start" \| "end" \| undefined` | No | `"start"` | Align popup content with the start, center or end of the trigger. |
| `contentClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `contentSideOffset` | `number` | No | `6` | Distance in pixels between the trigger and popup. |
| `customSize` | `CustomSize` | No | — | Override individual shared size slots while keeping the remaining size defaults. |
| `dateClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `dateFormat` | `DateFormatValue` | No | `"demo"` | Display date format preset or date-fns pattern. |
| `defaultMonth` | `Date` | No | — |  |
| `disabled` | `boolean \| undefined` | No | — | Disable interaction with this control. |
| `endDate` | `DateInputValue` | No | — | Latest selectable date. Takes precedence over end_date. |
| `end_date` | `DateInputValue` | No | — | Supported alias for the latest selectable date. |
| `errorMessage` | `string` | No | — | Visible validation feedback; also activates error styling where supported. |
| `formatPattern` | `string` | No | — | Explicit display pattern; takes precedence over the display format preset. |
| `htmlFormItemId` | `string` | No | — | Stable id used to connect the control to its label and messages. |
| `invalid` | `boolean \| undefined` | No | — | Apply error styling; supply a useful error message separately. |
| `label` | `React.ReactNode` | No | — | Visible label describing the field or action. |
| `labelClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `locale` | `Locale \| null` | No | — | Locale object from date-fns for date/time text and parsing. |
| `messageClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `onBlur` | `() => void` | No | — | Called when the control loses focus; used by form validation. |
| `onChange` | `(date: Date \| undefined) => void` | No | — | Change callback. Check the type: standalone inputs emit events; wrappers may emit values or dates. |
| `placeholder` | `string` | No | `"Select a date"` | Hint displayed when there is no current value. |
| `requiredLabel` | `boolean \| undefined` | No | — | Show a required marker. Enforce validation with a schema, rules or native required. |
| `requiredLabelClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `size` | `SizeProps \| undefined` | No | `"sm"` | Control dimensions. The type lists supported size names for this component. |
| `startDate` | `DateInputValue` | No | — | Earliest selectable date. Takes precedence over start_date. |
| `start_date` | `DateInputValue` | No | — | Supported alias for the earliest selectable date. |
| `value` | `Date \| string \| null` | No | — | Current controlled value. Update it from the corresponding change callback. |
| `valueFormat` | `DateFormatValue` | No | `"iso"` | Pattern or preset used to parse incoming strings and format string-mode form values. |
| `valueFormatPattern` | `string` | No | — | Explicit value parsing/storage pattern; takes precedence over valueFormat. |
| `variant` | `import("../..").FormInputVariantProps \| undefined` | No | `"outline"` | Visual style. The type lists supported variants for this component. |


```ts
UiDate: typeof UiDate
```

<a id="uidateprops"></a>

### UiDateProps

type


```ts
export interface UiDateProps {
  label?: React.ReactNode;
  placeholder?: string;

  value?: Date | string | null;
  defaultMonth?: Date;
  onChange?: (date: Date | undefined) => void;
  onBlur?: () => void;

  disabled?: boolean;
  requiredLabel?: boolean;

  start_date?: DateInputValue;
  end_date?: DateInputValue;

  startDate?: DateInputValue;
  endDate?: DateInputValue;

  dateFormat?: DateFormatValue;
  valueFormat?: DateFormatValue;

  formatPattern?: string;
  valueFormatPattern?: string;

  locale?: Locale | null;

  className?: string;
  classNameDefault?: boolean;
  dateClassName?: string;
  labelClassName?: string;
  contentClassName?: string;
  messageClassName?: string;
  requiredLabelClassName?: string;

  size?: SizeProps;
  customSize?: CustomSize;
  variant?: VariantProps;
  errorMessage?: string;
  invalid?: boolean;

  htmlFormItemId?: string;

  contentAlign?: "start" | "center" | "end";
  contentSideOffset?: number;
}
```

## src/components/ui/ui-time.tsx

<a id="uitime"></a>

### UiTime

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | No | — | Additional classes merged onto the component element. |
| `classNameDefault` | `boolean \| undefined` | No | `true` | Enable the built-in class set. Set false when supplying your own control styles. |
| `contentAlign` | `"center" \| "start" \| "end" \| undefined` | No | `"start"` | Align popup content with the start, center or end of the trigger. |
| `contentClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `contentSideOffset` | `number` | No | `6` | Distance in pixels between the trigger and popup. |
| `customSize` | `CustomSize` | No | — | Override individual shared size slots while keeping the remaining size defaults. |
| `disabled` | `boolean \| undefined` | No | — | Disable interaction with this control. |
| `errorMessage` | `string` | No | — | Visible validation feedback; also activates error styling where supported. |
| `formatPattern` | `string` | No | — | Explicit display pattern; takes precedence over the display format preset. |
| `hourCycle` | `HourCycle \| undefined` | No | `"12"` | Display hours using a 12-hour or 24-hour cycle. |
| `htmlFormItemId` | `string` | No | — | Stable id used to connect the control to its label and messages. |
| `invalid` | `boolean \| undefined` | No | — | Apply error styling; supply a useful error message separately. |
| `label` | `React.ReactNode` | No | — | Visible label describing the field or action. |
| `labelClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `locale` | `Locale` | No | — | Locale object from date-fns for date/time text and parsing. |
| `maxTime` | `string` | No | — | Latest selectable local time. |
| `messageClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `minTime` | `string` | No | — | Earliest selectable local time. |
| `minuteStep` | `number` | No | `1` | 1 = one-minute intervals.<br>5, 10, 15, and 30-minute intervals are also supported. |
| `onBlur` | `() => void` | No | — | Called when the control loses focus; used by form validation. |
| `onChange` | `(date: Date \| undefined) => void` | No | — | Change callback. Check the type: standalone inputs emit events; wrappers may emit values or dates. |
| `optionClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `options` | `UiTimeOption[]` | No | — | Supply options to render a simple list.<br>Omit options to use the wheel picker. |
| `placeholder` | `string` | No | `"Select time"` | Hint displayed when there is no current value. |
| `requiredLabel` | `boolean \| undefined` | No | — | Show a required marker. Enforce validation with a schema, rules or native required. |
| `requiredLabelClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `size` | `SizeProps \| undefined` | No | `"sm"` | Control dimensions. The type lists supported size names for this component. |
| `timeClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `timeFormat` | `TimeFormatValue` | No | `"time12"` | Display time format preset or date-fns pattern. |
| `value` | `Date \| string \| null` | No | — | Current controlled value. Update it from the corresponding change callback. |
| `valueFormat` | `TimeFormatValue` | No | `"time24"` | Pattern or preset used to parse incoming strings and format string-mode form values. |
| `valueFormatPattern` | `string` | No | — | Explicit value parsing/storage pattern; takes precedence over valueFormat. |
| `variant` | `import("../..").FormInputVariantProps \| undefined` | No | `"outline"` | Visual style. The type lists supported variants for this component. |


```ts
UiTime: typeof UiTime
```

<a id="uitimeoption"></a>

### UiTimeOption

type


```ts
export type UiTimeOption = {
  value: string;
  label?: React.ReactNode;
  disabled?: boolean;
};
```

<a id="uitimeprops"></a>

### UiTimeProps

type


```ts
export interface UiTimeProps {
  label?: React.ReactNode;
  placeholder?: string;

  value?: Date | string | null;
  onChange?: (date: Date | undefined) => void;
  onBlur?: () => void;

  disabled?: boolean;
  requiredLabel?: boolean;

  timeFormat?: TimeFormatValue;
  valueFormat?: TimeFormatValue;

  formatPattern?: string;
  valueFormatPattern?: string;

  locale?: Locale;

  /**
   * 1 = one-minute intervals.
   * 5, 10, 15, and 30-minute intervals are also supported.
   */
  minuteStep?: number;

  minTime?: string;
  maxTime?: string;

  /**
   * Supply options to render a simple list.
   * Omit options to use the wheel picker.
   */
  options?: UiTimeOption[];

  hourCycle?: HourCycle;

  className?: string;
  classNameDefault?: boolean;
  timeClassName?: string;
  labelClassName?: string;
  contentClassName?: string;
  optionClassName?: string;
  messageClassName?: string;
  requiredLabelClassName?: string;

  size?: SizeProps;
  customSize?: CustomSize;
  variant?: VariantProps;
  errorMessage?: string;
  invalid?: boolean;

  htmlFormItemId?: string;

  contentAlign?: "start" | "center" | "end";
  contentSideOffset?: number;
}
```

## src/components/ui/ui-textarea.tsx

<a id="uitextarea"></a>

### UiTextarea

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | No | — | Additional classes merged onto the component element. |
| `classNameDefault` | `boolean \| undefined` | No | — | Enable the built-in class set. Set false when supplying your own control styles. |
| `containerClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `customSize` | `CustomSize` | No | — | Override individual shared size slots while keeping the remaining size defaults. |
| `errorMessage` | `string` | No | — | Visible validation feedback; also activates error styling where supported. |
| `htmlFormItemId` | `string` | No | — | Stable id used to connect the control to its label and messages. |
| `invalid` | `boolean \| undefined` | No | — | Apply error styling; supply a useful error message separately. |
| `label` | `React.ReactNode` | No | — | Visible label describing the field or action. |
| `labelClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `messageClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `placeholder` | `string` | No | — | Hint displayed when there is no current value. |
| `requiredLabel` | `boolean \| undefined` | No | — | Show a required marker. Enforce validation with a schema, rules or native required. |
| `requiredLabelClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `size` | `import("../..").SizeProps \| undefined` | No | — | Control dimensions. The type lists supported size names for this component. |
| `variant` | `import("../..").FormInputVariantProps \| undefined` | No | — | Visual style. The type lists supported variants for this component. |


```ts
UiTextarea: React.ForwardRefExoticComponent<UiTextareaProps & React.RefAttributes<HTMLTextAreaElement>>
```

<a id="uitextareaprops"></a>

### UiTextareaProps

type


```ts
export interface UiTextareaProps extends Omit<TextareaProps, "id"> {
  label?: React.ReactNode;
  errorMessage?: string;
  htmlFormItemId?: string;
  requiredLabel?: boolean;
  requiredLabelClassName?: string;
  containerClassName?: string;
  labelClassName?: string;
  messageClassName?: string;
}
```

## src/hooks/use-sidebar.tsx

<a id="sidebarprovider"></a>

### SidebarProvider

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `children` | `React.ReactNode` | Yes | — | Content or composed component parts. |


```ts
SidebarProvider: React.FC<{ children: React.ReactNode; }>
```

<a id="usesidebar"></a>

### useSidebar

function


```ts
useSidebar: (): { isMinimized: boolean; toggle: () => void; }
```

## src/shared/alert-modal.tsx

<a id="alertmodal"></a>

### AlertModal

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `isOpen` | `boolean` | Yes | — | Controlled visibility for the wrapper; update it in onClose/onConfirm handlers. |
| `loading` | `boolean` | Yes | — | Pending action state; disables native button actions where supported. |
| `onClose` | `() => void` | Yes | — | Request to close; update your application open state. |
| `onConfirm` | `() => void` | Yes | — | Confirmation action. Handle completion and close state in your application. |
| `cancelText` | `string` | No | `"Cancel"` |  |
| `children` | `React.ReactNode` | No | — | Content or composed component parts. |
| `className` | `string` | No | — | Additional classes merged onto the component element. |
| `confirmText` | `string` | No | `"Confirm"` |  |
| `description` | `string` | No | `"Are you sure you want to continue?"` | Supporting information shown with the component. |
| `title` | `string` | No | `"Are you sure?"` | Title describing the component or page. |


```ts
AlertModal: ({ isOpen, onClose, onConfirm, loading, title, description, cancelText, confirmText, className, children, }: TAlertModalProps) => React.JSX.Element
```

## src/shared/breadcrumbs.tsx

<a id="breadcrumbitemprops"></a>

### BreadcrumbItemProps

type


```ts
export type BreadcrumbItemProps = {
  title: string;
  link?: string;
  className?: string;
};
```

<a id="breadcrumbs"></a>

### Breadcrumbs

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `items` | `BreadcrumbItemProps[]` | Yes | — | Options or records to display; see the element type for the required shape. |
| `className` | `string` | No | — | Additional classes merged onto the component element. |
| `classNameList` | `string` | No | — |  |
| `separator` | `React.ReactNode` | No | `<Slash />` |  |


```ts
Breadcrumbs: ({ items, className, classNameList, separator }: BreadcrumbsProps) => React.JSX.Element
```

<a id="breadcrumbsprops"></a>

### BreadcrumbsProps

type


```ts
export type BreadcrumbsProps = {
  items: BreadcrumbItemProps[];
  className?: string;
  classNameList?: string;
  separator?: React.ReactNode;
};
```

## src/shared/data-table.tsx

<a id="data_table_templates"></a>

### DATA_TABLE_TEMPLATES

value

=========
TEMPLATES
=========
Built-in visual templates (neo, glass, compact, minimal, clean, elevated, grid, cards).
Each template is a partial set of slots. Slots are merged like:
`neo base` + `selected template` + `classNames overrides`.


```ts
DATA_TABLE_TEMPLATES: { readonly neo: { root: string; table: string; thead: string; theadSticky: string; trHead: string; th: string; tbody: string; tr: string; trClickable: string; td: string; footer: string; footerInner: string; metaWrap: string; controlsWrap: string; pageSizeLabel: string; pageSizeTrigger: string; pageLabel: string; navButton: string; }; readonly glass: { root: string; theadSticky: string; tbody: string; }; readonly compact: { th: string; td: string; pageSizeTrigger: string; }; readonly minimal: { root: string; theadSticky: string; footer: string; tbody: string; }; readonly clean: { root: string; theadSticky: string; tbody: string; tr: string; trClickable: string; }; readonly elevated: { root: string; theadSticky: string; tbody: string; th: string; td: string; }; readonly grid: { root: string; table: string; thead: string; tbody: string; tr: string; trClickable: string; }; readonly cards: { root: string; table: string; theadSticky: string; tr: string; trClickable: string; tbody: string; }; }
```

<a id="datatable"></a>

### DataTable

component

DataTable
----------
A styled, template-driven table for TanStack Table with:
- manual pagination (default) or client pagination over the full data array
- optional animated body transitions
- optional sticky header (works because we removed wrapper div around <table>)
- optional row click handler
- optional accent highlight system

Props:
- columns, data: TanStack Table definitions and rows
- page, perPage, pageCount: pagination inputs (1-based page)
- onPageChange(page): called with 1-based page
- onPageSizeChange(size): called when page size changes (also resets to page 1)
- template: built-in template key
- classNames: slot overrides (merge on top)
- accent / accentColor: accent control (off by default)
- stickyHeader: enables sticky header behavior (default true)
- headerScroll: if true, header stickiness is disabled (use when header must scroll away)
- heightClassName: sets the overall component height
- internalScroll: false removes the scroll viewport and ignores heightClassName
- showAllOption / allRowsLabel: offer all records using a numeric page size
- animate: animates tbody on page changes
- emptyData: custom empty state node
- totalRows: optional meta display
- isRowsSelected / rowsSelectedLabel: selection meta display
- rowPerPageLabel, pageLabel, ofLabel: i18n labels

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `columns` | `DataTableColumnDef<TData, TValue>[]` | Yes | — | Typed TanStack column definitions for each row. |
| `data` | `TData[]` | Yes | — | Current page in manual mode, or the full dataset in client mode. |
| `accent` | `DataTableAccent \| null \| undefined` | No | `null` | Named accent color preset; null disables the accent. |
| `accentColor` | `string \| null` | No | `null` | Custom CSS color, taking precedence over accent. |
| `allRowsLabel` | `string` | No | `"All"` | Text used for this label; customize it for your application language. |
| `animate` | `boolean \| undefined` | No | `true` | Animate table body transitions. |
| `classNames` | `DataTableSlots` | No | — | Per-slot class overrides; see the corresponding slots type for available keys. |
| `emptyData` | `React.ReactNode` | No | — | Custom content when no records are available. |
| `headerScroll` | `boolean \| undefined` | No | `false` | Allow the header to scroll away, overriding sticky header behavior. |
| `heightClassName` | `string` | No | `"h-[clamp(22rem,80vh,44rem)] supports-[height:100dvh]:h-[clamp(22rem,80dvh,44rem)]"` | Table viewport height classes; ignored when internalScroll is false. |
| `internalScroll` | `boolean \| undefined` | No | `true` | False removes the internal viewport and fixed height so all visible rows fit. |
| `isRowsSelected` | `boolean \| undefined` | No | `true` | Show the selected-row count summary; does not add selection controls. |
| `ofLabel` | `string` | No | `"of"` | Text used for this label; customize it for your application language. |
| `onClick` | `(row: TData) => void` | No | — | Event callback. The type specifies the event or value supplied to your handler. |
| `onPageChange` | `(page: number) => void` | No | — | Receives the requested 1-based page number. |
| `onPageSizeChange` | `(pageSize: number) => void` | No | — | Receives the next numeric page size; changing size also requests page 1. |
| `page` | `number` | No | — | Current page number, starting at 1. |
| `pageCount` | `number` | No | — | Total page count supplied by the application in manual pagination mode. |
| `pageLabel` | `string` | No | `"Page"` | Text used for this label; customize it for your application language. |
| `pageSizeOptions` | `number[]` | No | `[10, 20, 30, 40, 50]` | Positive page sizes available in the page-size picker. |
| `paginationMode` | `"manual" \| "client" \| undefined` | No | `"manual"` | Manual mode receives a page of data; client mode receives the entire dataset. |
| `perPage` | `number` | No | — | Positive row count. With showAllOption, a count >= totalRows selects All. |
| `rowPerPageLabel` | `string` | No | `"Rows per page"` | Text used for this label; customize it for your application language. |
| `rowsSelectedLabel` | `string` | No | `"row(s) selected"` | Text used for this label; customize it for your application language. |
| `showAllOption` | `boolean \| undefined` | No | `false` | In manual mode, totalRows is required to offer All across multiple pages. |
| `stickyHeader` | `boolean \| undefined` | No | `true` | Keep column headers visible within the scrolling area. |
| `template` | `"grid" \| "glass" \| "compact" \| "neo" \| "minimal" \| "clean" \| "elevated" \| "cards" \| undefined` | No | `"neo"` | Built-in table visual template. |
| `totalLabel` | `string` | No | `"records"` | Text used for this label; customize it for your application language. |
| `totalRows` | `number` | No | — | Total record count. Required to offer All across multiple manual pages. |


```ts
DataTable: <TData extends RowData, TValue = unknown>({ columns, data, pageCount, page: controlledPage, perPage: controlledPerPage, pageSizeOptions, paginationMode, showAllOption, allRowsLabel, rowPerPageLabel, ofLabel, pageLabel, isRowsSelected, totalRows, totalLabel, rowsSelectedLabel, template, classNames, accent, accentColor, emptyData, onPageChange, onClick, onPageSizeChange, animate, internalScroll, stickyHeader, headerScroll, heightClassName, }: DataTableProps<TData, TValue>) => React.JSX.Element
```

<a id="datatableaccent"></a>

### DataTableAccent

type

=========
ACCENTS
=========
Accent system for highlighting interactive/selected states.
- `accent`: choose a preset accent name
- `accentColor`: provide a custom CSS color (overrides `accent`)
If both are null/empty, accent styling is disabled.


```ts
export type DataTableAccent =
  | "primary"
  | "emerald"
  | "indigo"
  | "rose"
  | "amber"
  | "zinc";
```

<a id="datatablecolumndef"></a>

### DataTableColumnDef

type


```ts
export type DataTableColumnDef<TData extends RowData, TValue = unknown> = ColumnDef<
  DataTableFeatures,
  TData,
  TValue
>;
```

<a id="datatablefeatures"></a>

### DataTableFeatures

type


```ts
export type DataTableFeatures = typeof dataTableFeatures;
```

<a id="datatableprops"></a>

### DataTableProps

type


```ts
export interface DataTableProps<TData extends RowData, TValue = unknown> {
  classNames?: DataTableSlots;
  template?: BuiltInTemplate;
  accent?: DataTableAccent | null;
  accentColor?: string | null;

  page?: number;
  /** Positive row count. With showAllOption, a count >= totalRows selects All. */
  perPage?: number;
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  onClick?: (row: TData) => void;

  columns: DataTableColumnDef<TData, TValue>[];
  data: TData[];

  pageSizeOptions?: number[];
  /** Manual mode receives a page of data; client mode receives the entire dataset. */
  paginationMode?: "manual" | "client";
  pageCount?: number;
  totalRows?: number;
  /** In manual mode, totalRows is required to offer All across multiple pages. */
  showAllOption?: boolean;
  allRowsLabel?: string;

  isRowsSelected?: boolean;
  rowsSelectedLabel?: string;
  rowPerPageLabel?: string;
  pageLabel?: string;
  ofLabel?: string;

  totalLabel?: string;
  emptyData?: React.ReactNode;

  animate?: boolean;
  heightClassName?: string;
  /** False removes the internal viewport and fixed height so all visible rows fit. */
  internalScroll?: boolean;

  stickyHeader?: boolean;
  headerScroll?: boolean;
}
```

<a id="datatableslots"></a>

### DataTableSlots

type

=========
SLOTS
=========
Classname “slots” you can override to customize styles at specific points
(root, table, header, rows, cells, footer, etc.).


```ts
export type DataTableSlots = Partial<{
  root: string;
  table: string;
  thead: string;
  theadSticky: string;
  trHead: string;
  th: string;

  tbody: string;
  tr: string;
  trClickable: string;
  td: string;

  footer: string;
  footerInner: string;

  metaWrap: string;
  controlsWrap: string;

  pageSizeLabel: string;
  pageSizeTrigger: string;

  pageLabel: string;

  navButton: string;
}>;
```

<a id="datatablefeatures"></a>

### dataTableFeatures

value


```ts
dataTableFeatures: { columnVisibilityFeature: import("@tanstack/react-table").TableFeature; rowPaginationFeature: import("@tanstack/react-table").TableFeature; rowSelectionFeature: import("@tanstack/react-table").TableFeature; }
```

## src/shared/data-table-skeleton.tsx

<a id="datatableskeleton"></a>

### DataTableSkeleton

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `columnCount` | `number` | Yes | — | Number of placeholder table columns. |
| `filterableColumnCount` | `number` | No | `0` |  |
| `rowCount` | `number` | No | `10` | Number of placeholder table rows. |
| `searchableColumnCount` | `number` | No | `0` |  |
| `showViewOptions` | `boolean \| undefined` | No | `true` |  |


```ts
DataTableSkeleton: ({ columnCount, rowCount, searchableColumnCount, filterableColumnCount, showViewOptions, }: DataTableSkeletonProps) => React.JSX.Element
```

## src/shared/dropzone.tsx

<a id="dropzone"></a>

### Dropzone

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `accept` | `Accept` | No | — | Map accepted MIME types to file extensions. |
| `className` | `string` | No | — | Additional classes merged onto the component element. |
| `description` | `string` | No | `"Drag and drop some files here, or click to select files"` | Supporting information shown with the component. |
| `descriptionActive` | `string` | No | `"Drop the files here ..."` |  |
| `descriptionClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `dropzoneClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `label` | `string` | No | — | Visible label describing the field or action. |
| `labelClassName` | `string` | No | — | Additional classes for this named part of the component. |
| `onChange` | `(value: File[]) => void` | No | — | Change callback. Check the type: standalone inputs emit events; wrappers may emit values or dates. |
| `onDrop` | `(value: File[]) => void` | No | — | Receives accepted local files. Does not upload them. |
| `options` | `DropzoneOptions` | No | — | Component-specific options; inspect the type and usage notes for its shape. |
| `value` | `File[]` | No | — | Current controlled value. Update it from the corresponding change callback. |
| `valueClassName` | `string` | No | — | Additional classes for this named part of the component. |


```ts
Dropzone: ({ label, onChange, onDrop, value, className, description, descriptionActive, accept, options, descriptionClassName, dropzoneClassName, valueClassName, labelClassName, }: DropzoneProps) => React.JSX.Element
```

<a id="dropzoneprops"></a>

### DropzoneProps

type


```ts
export type DropzoneProps = {
  label?: string;
  description?: string;
  descriptionActive?: string;
  onChange?: (value: File[]) => void;
  onDrop?: (value: File[]) => void;
  value?: File[];
  className?: string;
  descriptionClassName?: string;
  dropzoneClassName?: string;
  valueClassName?: string;
  labelClassName?: string;
  accept?: Accept;
  options?: DropzoneOptions;
};
```

## src/shared/fileupload.tsx

<a id="fileupload"></a>

### FileUpload

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `onChange` | `(value: File[]) => void` | Yes | — | Change callback. Check the type: standalone inputs emit events; wrappers may emit values or dates. |
| `accept` | `Accept` | No | `{ 'image/*': [] }` | Map accepted MIME types to file extensions. |
| `className` | `string` | No | — | Additional classes merged onto the component element. |
| `classNameContent` | `string` | No | — |  |
| `label` | `string` | No | `'Add Image'` | Visible label describing the field or action. |
| `options` | `DropzoneOptions` | No | — | Component-specific options; inspect the type and usage notes for its shape. |
| `value` | `File[]` | No | `[]` | Current controlled value. Update it from the corresponding change callback. |


```ts
FileUpload: ({ onChange, value, label, className, classNameContent, accept, options }: FileUploadProps) => import("react").JSX.Element
```

<a id="fileuploadprops"></a>

### FileUploadProps

type


```ts
export type FileUploadProps = {
  label?: string;
  onChange: (value: File[]) => void;
  value?: File[];
  className?: string;
  classNameContent?: string;
  accept?: Accept;
  options?: DropzoneOptions;
};
```

<a id="imagepreview"></a>

### ImagePreview

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `file` | `File` | Yes | — | Local File object used for an image preview. |


```ts
ImagePreview: ({ file }: { file: File; }) => import("react").JSX.Element | null
```

## src/shared/heading.tsx

<a id="heading"></a>

### Heading

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `title` | `string` | Yes | — | Title describing the component or page. |
| `className` | `string` | No | — | Additional classes merged onto the component element. |
| `description` | `string` | No | — | Supporting information shown with the component. |


```ts
Heading: ({ title, description, className }: THeadingProps) => import("react").JSX.Element
```

## src/shared/page-head.tsx

<a id="pagehead"></a>

### PageHead

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `title` | `string` | No | `"@blencm/ui"` | Title describing the component or page. |


```ts
PageHead: ({ title }: PageHeadProps) => import("react").JSX.Element
```

<a id="pageheadprops"></a>

### PageHeadProps

type


```ts
export type PageHeadProps = {
  title?: string;
};
```

## src/shared/pagination-section.tsx

<a id="paginationsection"></a>

### PaginationSection

component

| Property | Type | Required | Local default | Description |
| --- | --- | --- | --- | --- |
| `currentPage` | `number` | Yes | — | Current page number, starting at 1. |
| `postsPerPage` | `number` | Yes | — | Number of results per page; use a positive value. |
| `setCurrentPage` | `(page: number) => void` | Yes | — | Receives the requested page; update displayed data separately. |
| `totalPosts` | `number` | Yes | — | Total result count used to calculate page controls. |


```ts
PaginationSection: ({ totalPosts, postsPerPage, currentPage, setCurrentPage, }: TPaginationSectionProps) => import("react").JSX.Element
```

## src/utils/utils.ts

<a id="cn"></a>

### cn

function


```ts
cn: (...inputs: ClassValue[]): string
```

