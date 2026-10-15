# Component usage guide

Usage, accessibility and related components for every catalog page. Generated from the same content as the documentation site.

## Button

[Interactive examples](https://ui.blencm.com/button) · [API](./api-reference.md#button)

- Choose a semantic variant, a size and a rounded shape independently. The API lists every available variant, including soft, outline, gradient and status colors.
- loading disables a native button and sets aria-busy. Button defaults to type="button"; use type="submit" inside a form.
- asChild passes styling to one child, such as a router link. When that child is a link, aria-disabled does not prevent navigation: handle that behavior in your application.
- buttonVariants({ variant, size, rounded }) returns the same styles for other elements.

**Accessibility:** Keep an accessible text label. Use IconButton for actions represented only by an icon.

## IconButton

[Interactive examples](https://ui.blencm.com/icon-button) · [API](./api-reference.md#iconbutton)

- Provide one icon as children and a descriptive aria-label, which is required by the component type.
- loading replaces the icon with a spinner and disables the native button. asChild forwards styles to one child; its disabled behavior belongs to the application.

**Accessibility:** Describe the action, for example "Delete project", rather than the icon shape.

## Toggle

[Interactive examples](https://ui.blencm.com/toggle) · [API](./api-reference.md#toggle)

- Use pressed and onPressedChange for controlled state, or defaultPressed for local state.
- Variants and sizes style a persistent on/off action. Use Switch when changing a setting instead.

**Accessibility:** Give icon toggles an aria-label; the primitive exposes the pressed state.

## ToggleGroup

[Interactive examples](https://ui.blencm.com/toggle-group) · [API](./api-reference.md#togglegroup)

- Set type="single" for one string value or type="multiple" for a string array.
- Give every ToggleGroupItem a stable value. Use value/onValueChange together when controlling the group.

**Accessibility:** Label the group and each item. Keyboard focus moves between the items.

## Input

[Interactive examples](https://ui.blencm.com/input) · [API](./api-reference.md#input)

- Supports native input attributes plus shared form variants and sizes. leading and trailing add content around the input.
- invalid applies error styling. classNameDefault={false} removes the standard input styling so you can supply your own.
- Use UiInput for a label and error message, or FormField for React Hook Form integration.

**Accessibility:** Connect a Label with htmlFor and id; placeholders are supplementary hints.

## Textarea

[Interactive examples](https://ui.blencm.com/textarea) · [API](./api-reference.md#textarea)

- Supports native textarea attributes such as rows, maxLength, value and onChange.
- Use UiTextarea for labels and error messages or FormTextarea for form state and validation.

**Accessibility:** Provide a visible label and connect supporting text with aria-describedby.

## Label

[Interactive examples](https://ui.blencm.com/label) · [API](./api-reference.md#label)

- Set htmlFor to the id of the input, checkbox or other native control.
- A label does not make its associated field required; configure required or validation rules on the control.

**Accessibility:** Keep labels visible and specific. Clicking a label should focus or activate its control.

## Checkbox

[Interactive examples](https://ui.blencm.com/checkbox) · [API](./api-reference.md#checkbox)

- Use checked/onCheckedChange or defaultChecked. The Radix state can be true, false or "indeterminate".
- Supports the shared size, variant and invalid styling system. Use checked === true when storing only a boolean.

**Accessibility:** Associate a label with id/htmlFor. An indeterminate state represents a partial selection.

## RadioGroup

[Interactive examples](https://ui.blencm.com/radio-group) · [API](./api-reference.md#radiogroup)

- Use a shared value/onValueChange or defaultValue on RadioGroup.
- Give each RadioGroupItem a unique value and associate a Label with its id.

**Accessibility:** Name the group using aria-label or aria-labelledby. Arrow keys move between choices.

## Select

[Interactive examples](https://ui.blencm.com/select) · [API](./api-reference.md#select)

- Compose Select, SelectTrigger, SelectValue, SelectContent and SelectItem. Item values must be non-empty unique strings.
- Use value/onValueChange for controlled selection. Put placeholder text on SelectValue, and apply shared sizing and variants on Select.
- Use UiSelect for item arrays or FormSelect with searchable for searchable form options.

**Accessibility:** Associate the trigger with a label; preserve keyboard focus and the primitive item structure.

## Switch

[Interactive examples](https://ui.blencm.com/switch) · [API](./api-reference.md#switch)

- Use checked/onCheckedChange or defaultChecked for a boolean preference.
- Use name and value when participating in native form submission.

**Accessibility:** Attach a stable label to the control and describe what the enabled state means.

## Slider

[Interactive examples](https://ui.blencm.com/slider) · [API](./api-reference.md#slider)

- value and defaultValue are arrays of numbers, even for a single thumb.
- Set min, max and step. Use onValueChange for immediate updates and onValueCommit for work after interaction.

**Accessibility:** Provide an accessible name and a readable value or aria-valuetext when units matter.

## Calendar

[Interactive examples](https://ui.blencm.com/calendar) · [API](./api-reference.md#calendar)

- Set mode="single", "multiple" or "range"; selected and onSelect must match that mode.
- Use month/onMonthChange for controlled navigation or defaultMonth for the initial view. disabled restricts selectable days.
- locale customizes the calendar language; classNames overrides individual calendar slots. showOutsideDays defaults to true.

**Accessibility:** Keep day names and keyboard navigation available. Explain date restrictions near the control.

## InputOTP

[Interactive examples](https://ui.blencm.com/input-otp) · [API](./api-reference.md#inputotp)

- Set maxLength and compose InputOTPGroup with indexed InputOTPSlot elements.
- Use value/onChange for controlled codes; pattern can restrict accepted characters and onComplete can react to a full code.

**Accessibility:** Give the input a descriptive accessible name and explain code length and delivery method.

## Dialog

[Interactive examples](https://ui.blencm.com/dialog) · [API](./api-reference.md#dialog)

- Compose DialogTrigger, DialogContent, DialogHeader, DialogTitle and DialogDescription under Dialog.
- Use open/onOpenChange to coordinate dialogs with application state. Trigger and Close support asChild for your own buttons.

**Accessibility:** Include a meaningful DialogTitle and description. Focus moves into the dialog and returns to the trigger when it closes.

## AlertDialog

[Interactive examples](https://ui.blencm.com/alert-dialog) · [API](./api-reference.md#alertdialog)

- Use for a decision that requires an explicit confirm or cancel action.
- Compose AlertDialogTitle, AlertDialogDescription, AlertDialogCancel and AlertDialogAction inside AlertDialogContent.
- For an asynchronous action, manage open state and close after success; expose pending and failure states.

**Accessibility:** Explain the consequence and label the action precisely. Keep a visible cancel action.

## Modal

[Interactive examples](https://ui.blencm.com/modal) · [API](./api-reference.md#modal)

- A compact controlled wrapper around Dialog. Supply isOpen and onClose; closing requests do not update your state automatically.
- Supply title and description, and render body or action buttons as children. className styles DialogContent.

**Accessibility:** Always provide a meaningful title and description for assistive technology.

## Sheet

[Interactive examples](https://ui.blencm.com/sheet) · [API](./api-reference.md#sheet)

- Use SheetContent side="left", "right", "top" or "bottom" to position a panel.
- Compose with SheetTrigger, SheetHeader, SheetTitle, SheetDescription and SheetClose. Control state through open/onOpenChange.

**Accessibility:** Give the panel a title, a description and a clear close action.

## Drawer

[Interactive examples](https://ui.blencm.com/drawer) · [API](./api-reference.md#drawer)

- Compose DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription and DrawerFooter.
- The root uses Vaul and supports controlled open state and its gesture configuration. shouldScaleBackground defaults to true in this wrapper.

**Accessibility:** Provide a visible title and a keyboard accessible close action in addition to drag gestures.

## Popover

[Interactive examples](https://ui.blencm.com/popover) · [API](./api-reference.md#popover)

- Compose PopoverTrigger and PopoverContent under Popover. asChild accepts a custom trigger.
- Content alignment, side and sideOffset control placement. Use open/onOpenChange when the application owns its state.

**Accessibility:** Name the trigger and ensure the panel content can be used with the keyboard.

## HoverCard

[Interactive examples](https://ui.blencm.com/hover-card) · [API](./api-reference.md#hovercard)

- Compose HoverCardTrigger and HoverCardContent to show supplementary information about a link or person.
- Configure openDelay/closeDelay on the root and align/sideOffset on the content.

**Accessibility:** Keep essential information and interactive tasks available outside hover-only content.

## Tooltip

[Interactive examples](https://ui.blencm.com/tooltip) · [API](./api-reference.md#tooltip)

- Mount TooltipProvider around the relevant subtree, then compose TooltipTrigger and TooltipContent.
- Use delayDuration on the provider or root to tune the delay. asChild preserves your button as the trigger.

**Accessibility:** Tooltips supplement labels. Icon-only controls still need aria-label.

## DropdownMenu

[Interactive examples](https://ui.blencm.com/dropdown-menu) · [API](./api-reference.md#dropdownmenu)

- Compose Trigger and Content under DropdownMenu, with Item, Separator, Label and Group as needed.
- CheckboxItem uses checked/onCheckedChange; RadioGroup uses value/onValueChange. Sub, SubTrigger and SubContent create submenus.
- Use onSelect for menu actions; keep controlled open state when an asynchronous action needs to manage dismissal.

**Accessibility:** Use clear action names and preserve the menu item components for keyboard navigation.

## ContextMenu

[Interactive examples](https://ui.blencm.com/context-menu) · [API](./api-reference.md#contextmenu)

- Wrap the target in ContextMenuTrigger and place ContextMenuItem elements in ContextMenuContent.
- Supports checkbox items, radio groups, labels, separators and nested submenus.

**Accessibility:** Offer important actions through a visible button or menu as well as right-click.

## Command

[Interactive examples](https://ui.blencm.com/command) · [API](./api-reference.md#command)

- Compose CommandInput, CommandList, CommandEmpty, CommandGroup and CommandItem under Command.
- Use CommandDialog for an overlay palette. Manage open state and register any global keyboard shortcut in your application.
- Item values and keywords drive filtering. onSelect receives a value; disabled prevents selection.

**Accessibility:** Name the search field and provide meaningful empty results text.

## Breadcrumb

[Interactive examples](https://ui.blencm.com/breadcrumb) · [API](./api-reference.md#breadcrumb)

- Compose BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator and a final BreadcrumbPage.
- Use BreadcrumbLink asChild with your router link. BreadcrumbEllipsis represents collapsed intermediate items.

**Accessibility:** Identify the current page and give collapsed items a usable navigation action.

## NavigationMenu

[Interactive examples](https://ui.blencm.com/navigation-menu) · [API](./api-reference.md#navigationmenu)

- Compose NavigationMenuList, Item, Trigger, Content and Link for site navigation.
- Use Link asChild for router links and navigationMenuTriggerStyle() to match standalone navigation links.

**Accessibility:** Use real link destinations and distinguish the current page.

## Menubar

[Interactive examples](https://ui.blencm.com/menubar) · [API](./api-reference.md#menubar)

- Compose MenubarMenu, Trigger, Content and Item inside Menubar.
- Supports checkbox and radio items, separators, shortcuts and submenus. MenubarShortcut displays text; register actual keyboard shortcuts separately.

**Accessibility:** Use for application commands and preserve arrow key navigation across menus.

## Pagination

[Interactive examples](https://ui.blencm.com/pagination) · [API](./api-reference.md#pagination)

- Compose PaginationContent and PaginationItem with links, previous/next controls and ellipses.
- The primitive renders controls; supply href or click handlers and isActive yourself. It does not slice data.
- PreviousLast and NextLast expose first/last page controls. Use PaginationSection for calculated page ranges.

**Accessibility:** Provide usable link targets and mark unavailable navigation appropriately in your application.

## Tabs

[Interactive examples](https://ui.blencm.com/tabs) · [API](./api-reference.md#tabs)

- Use defaultValue for local state or value/onValueChange for controlled tabs.
- Match each TabsTrigger value to a TabsContent value. orientation and activationMode configure navigation behavior.

**Accessibility:** Use descriptive tab labels and preserve the trigger/content relationships.

## Alert

[Interactive examples](https://ui.blencm.com/alert) · [API](./api-reference.md#alert)

- Compose AlertTitle and AlertDescription inside Alert for an inline message.
- Use variant="destructive" for errors. The wrapper has role="alert", so avoid unnecessarily noisy updates.

**Accessibility:** Explain the issue and the next action in text, not only through color or an icon.

## Progress

[Interactive examples](https://ui.blencm.com/progress) · [API](./api-reference.md#progress)

- Pass a numeric value from 0 to 100 to show completion.
- Compute the percentage from your task state; the component does not perform or track the task.

**Accessibility:** Give the progress bar an accessible name and communicate task failures separately.

## Skeleton

[Interactive examples](https://ui.blencm.com/skeleton) · [API](./api-reference.md#skeleton)

- Use className to set the shape, width and height of loading placeholders.
- Match the eventual content structure to reduce layout shifts.

**Accessibility:** Mark the surrounding content region aria-busy while loading; do not present skeleton shapes as real content.

## Toast

[Interactive examples](https://ui.blencm.com/toast) · [API](./api-reference.md#toast)

- Mount Toaster once in the application shell. Call toast(...) directly or obtain it from useToast().
- toast returns id, update and dismiss. The hook also exposes the current toasts and dismiss(id).
- This API is separate from Sonner; mount the renderer that corresponds to the notification function you call.

**Accessibility:** Keep essential errors visible near the task and give action buttons descriptive labels.

## Sonner

[Interactive examples](https://ui.blencm.com/sonner) · [API](./api-reference.md#toastersonner)

- Mount ToasterSonner (also exported as SonnerToaster) once. Call toast from the sonner package.
- Use toast.success, toast.error or toast.promise from Sonner. The toaster accepts position, richColors and other Sonner options.
- The wrapper reads next-themes; ThemeProvider with attribute="class" keeps toast colors aligned with the application.

**Accessibility:** Do not make a disappearing toast the only way to discover a blocking error.

## Table

[Interactive examples](https://ui.blencm.com/table) · [API](./api-reference.md#table)

- Compose TableHeader, TableBody, TableRow, TableHead and TableCell; TableCaption supplies a caption.
- internalScroll defaults to false. Enable it for an overflow wrapper, or let the page scroll. containerClassName styles that wrapper.
- Use DataTable when you need pagination and column definitions rather than manually composed rows.

**Accessibility:** Use column headers and a descriptive caption; keep tabular data in semantic table elements.

## Avatar

[Interactive examples](https://ui.blencm.com/avatar) · [API](./api-reference.md#avatar)

- Compose AvatarImage and AvatarFallback inside Avatar.
- Provide image src/alt and a short fallback such as initials. delayMs on AvatarFallback can delay its appearance.

**Accessibility:** Use descriptive alt text when the image conveys identity, or empty alt when adjacent text already identifies the person.

## Badge

[Interactive examples](https://ui.blencm.com/badge) · [API](./api-reference.md#badge)

- Use variant for status styling and className for local adjustments.
- badgeVariants(...) provides the same style calculation for custom markup.

**Accessibility:** Include a text status; color alone should not communicate meaning.

## Card

[Interactive examples](https://ui.blencm.com/card) · [API](./api-reference.md#card)

- Compose CardHeader, CardTitle, CardDescription, CardContent and CardFooter inside Card.
- All parts accept native attributes for their underlying element and className.

**Accessibility:** Use a semantic heading where document structure requires one; CardTitle is styled text.

## Carousel

[Interactive examples](https://ui.blencm.com/carousel) · [API](./api-reference.md#carousel)

- Compose CarouselContent and CarouselItem, with CarouselPrevious and CarouselNext controls.
- orientation selects the axis; opts and plugins configure Embla. setApi provides the carousel API for application controls.
- Vertical carousels need an explicit content height.

**Accessibility:** Describe the carousel and its slides, and keep previous/next controls reachable by keyboard.

## Accordion

[Interactive examples](https://ui.blencm.com/accordion) · [API](./api-reference.md#accordion)

- Use type="single" with a string value or type="multiple" with a string array.
- Compose AccordionItem with a unique value, AccordionTrigger and AccordionContent. collapsible permits a single open item to close.

**Accessibility:** Use descriptive triggers and retain the built-in keyboard navigation and expanded states.

## Collapsible

[Interactive examples](https://ui.blencm.com/collapsible) · [API](./api-reference.md#collapsible)

- Compose CollapsibleTrigger and CollapsibleContent under Collapsible.
- Use open/onOpenChange or defaultOpen. asChild allows a custom button trigger.

**Accessibility:** The trigger must remain keyboard operable and describe the content it expands.

## AspectRatio

[Interactive examples](https://ui.blencm.com/aspect-ratio) · [API](./api-reference.md#aspectratio)

- Set ratio to width divided by height, for example 16 / 9.
- Give the parent a width and use object-cover on images when cropping is appropriate.

**Accessibility:** Keep informative image alt text; a fixed ratio is only a visual container.

## Separator

[Interactive examples](https://ui.blencm.com/separator) · [API](./api-reference.md#separator)

- orientation="horizontal" is the usual divider; vertical separators need a parent height.
- Use decorative when the divider has no structural meaning.

**Accessibility:** Avoid announcing purely visual separators to assistive technology.

## ScrollArea

[Interactive examples](https://ui.blencm.com/scroll-area) · [API](./api-reference.md#scrollarea)

- Give ScrollArea a bounded height or width so overflow can occur.
- ScrollBar controls orientation; add a horizontal scrollbar when content is wider than the viewport.

**Accessibility:** Keep content reachable by keyboard and avoid trapping page scroll unnecessarily.

## ScrollView

[Interactive examples](https://ui.blencm.com/scroll-view) · [API](./api-reference.md#scrollview)

- fit="fill" fills a bounded flex parent; ensure ancestors have a height and min-h-0.
- fit="viewport" uses the dynamic viewport height. fit="content" caps the content area; maxHeight and maxWidth accept CSS strings or pixel numbers.
- orientation="vertical", "horizontal" or "both" selects the scrollbars.

**Accessibility:** Keep the viewport focusable through normal content navigation and test nested scrolling with a keyboard.

## Resizable

[Interactive examples](https://ui.blencm.com/resizable) · [API](./api-reference.md#resizablepanelgroup)

- Compose ResizablePanelGroup, ResizablePanel and ResizableHandle. Use orientation="horizontal" or "vertical" on the group.
- Panel size values follow react-resizable-panels: explicit percent strings avoid confusing percentages with pixel numbers.
- withHandle adds a visible grip. Give the group a bounded size and configure minSize/maxSize when needed.

**Accessibility:** Provide accessible labels for panel separators and keep keyboard resizing available.

## Form

[Interactive examples](https://ui.blencm.com/form) · [API](./api-reference.md#form)

- Create methods with useForm and pass them to Form. onSubmit receives validated values; onError receives validation errors.
- formProps configures the native form. The wrapper provides FormProvider and renders a form with noValidate.
- Use a resolver such as zodResolver, or rules on individual fields. Avoid nesting Form components.

**Accessibility:** Provide visible labels, clear field errors and a meaningful submit action.

## FormField

[Interactive examples](https://ui.blencm.com/form-field) · [API](./api-reference.md#formfield)

- Provide a typed name and either control or an enclosing Form context.
- onChange receives the string value. A type="number" input still needs explicit numeric conversion in your schema or application.
- requiredLabel displays an asterisk; use rules or a schema to enforce required values.

**Accessibility:** Use label and supply validation messages; the form components connect errors and descriptions to the field.

## FormSelect

[Interactive examples](https://ui.blencm.com/form-select) · [API](./api-reference.md#formselect)

- Supply normalized options or arbitrary items with getOptionValue/getOptionLabel. options takes precedence over items.
- searchable switches to SearchableSelect. onChange receives the string key; onChangeItem receives the option data or null.
- Use unique string values and store the selected key in form state. Supply data on normalized options when onChangeItem must return the original item.

**Accessibility:** Give the field a label and provide useful placeholder and emptyText messages.

## FormCheckbox

[Interactive examples](https://ui.blencm.com/form-checkbox) · [API](./api-reference.md#formcheckbox)

- Connect a named boolean field through control or Form context.
- Use description for supporting text and validation rules or a schema for required acceptance.

**Accessibility:** Make the label describe the choice; an asterisk is not a validation rule.

## FormDate

[Interactive examples](https://ui.blencm.com/form-date) · [API](./api-reference.md#formdate)

- valueMode defaults to "date" and stores Date or null. Use valueMode="string" for formatted values.
- dateFormat controls presentation; valueFormat controls string storage and parsing, defaulting to "iso". formatPattern/valueFormatPattern override the respective patterns.
- startDate/endDate constrain dates; start_date/end_date are supported aliases. onChange receives a Date; onChangeValue receives the stored representation.

**Accessibility:** Label the date and explain allowed ranges and expected formats.

## FormTime

[Interactive examples](https://ui.blencm.com/form-time) · [API](./api-reference.md#formtime)

- valueMode defaults to "string", with valueFormat="time24". Use valueMode="date" to store Date or null.
- timeFormat="time12" and hourCycle="12" are the defaults. minuteStep configures minute intervals, while minTime/maxTime constrain selectable times.
- Supply options for a list instead of the wheel picker. onChange receives a Date; onChangeValue receives the stored representation.

**Accessibility:** Explain time format and limits. Handle time zone meaning in the application.

## FormTextarea

[Interactive examples](https://ui.blencm.com/form-textarea) · [API](./api-reference.md#formtextarea)

- Connect a string field by name and control or Form context.
- Use native rows/maxLength and shared size/variant styling. Validation rules or a resolver determine errors.

**Accessibility:** Use a visible label and explain length limits before submission.

## UiInput

[Interactive examples](https://ui.blencm.com/ui-input) · [API](./api-reference.md#uiinput)

- A standalone Input with label, required marker and error message; it does not register with React Hook Form.
- Use normal value/onChange native input events. htmlFormItemId overrides the generated id.
- containerClassName styles the outer wrapper; className styles the control.

**Accessibility:** Provide label and errorMessage; use required or validation logic to enforce required values.

## UiSelect

[Interactive examples](https://ui.blencm.com/ui-select) · [API](./api-reference.md#uiselect)

- Supply items with value/label or compose children. Use value/onChange or defaultValue.
- onChange receives the selected string, not a native DOM event. It is independent of React Hook Form.
- Configure popover placement with contentAlign/contentSideOffset and style the control with selectClassName.

**Accessibility:** Provide label and errorMessage; item keys must be unique and non-empty.

## UiCheckbox

[Interactive examples](https://ui.blencm.com/ui-checkbox) · [API](./api-reference.md#uicheckbox)

- A standalone checkbox with label, description and errorMessage.
- Use checked/onCheckedChange as on the primitive; requiredLabel only controls the marker.
- Set htmlFormItemId to a stable id when associating the label.

**Accessibility:** Keep supporting text descriptive and label the checked action clearly.

## UiDate

[Interactive examples](https://ui.blencm.com/ui-date) · [API](./api-reference.md#uidate)

- A standalone controlled date picker. Accepts Date, formatted string or null; onChange emits Date or undefined.
- dateFormat affects the display; valueFormat parses incoming strings. They do not change the callback type.
- startDate/endDate (or their snake case aliases) restrict selection; locale is a date-fns Locale object.

**Accessibility:** Provide a label, a clear placeholder and readable errorMessage for invalid dates.

## UiTime

[Interactive examples](https://ui.blencm.com/ui-time) · [API](./api-reference.md#uitime)

- A standalone controlled time picker. Accepts Date, time string or null and emits Date or undefined.
- minuteStep, minTime/maxTime and hourCycle configure the wheel picker. options switches to a list of value/label entries.
- timeFormat affects display and valueFormat parses incoming strings. Format the callback value explicitly for API storage.

**Accessibility:** Label the field and explain time limits and time zone assumptions.

## UiTextarea

[Interactive examples](https://ui.blencm.com/ui-textarea) · [API](./api-reference.md#uitextarea)

- A standalone textarea with label, required marker and errorMessage.
- Use native value/onChange events; htmlFormItemId provides a stable field id.

**Accessibility:** Keep the label visible and connect errors through the component message.

## AlertModal

[Interactive examples](https://ui.blencm.com/alert-modal) · [API](./api-reference.md#alertmodal)

- Supply isOpen, onClose, onConfirm and loading. The confirm callback does not close the modal automatically.
- loading disables the default action buttons. Supply title, description, cancelText and confirmText for your workflow.
- Providing children replaces the default footer entirely; render and manage your own action buttons in that case.

**Accessibility:** Explain the consequence and keep a clear cancel option. Manage pending/error states for asynchronous work.

## Breadcrumbs

[Interactive examples](https://ui.blencm.com/breadcrumbs) · [API](./api-reference.md#breadcrumbs)

- Supply items with title and optional link. The final item is rendered as the current page.
- separator customizes the divider; classNameList styles the list. Links are standard anchors.
- Use the Breadcrumb primitives with asChild when client-side router link composition is needed.

**Accessibility:** Use short, descriptive labels for each navigation level.

## DataTable

[Interactive examples](https://ui.blencm.com/data-table) · [API](./api-reference.md#datatable)

- Define columns with DataTableColumnDef<T> and pass data with the same row type. page is 1-based.
- paginationMode="client" receives the full dataset. The default "manual" mode receives only the current page plus pageCount and totalRows.
- Control page/perPage with their callbacks or let the component manage them. showAllOption emits a numeric total size; it never fetches missing records.
- Templates: neo, glass, compact, minimal, clean, elevated, grid and cards. Customize accent/accentColor and the slots in classNames.
- internalScroll defaults to true; false removes the viewport and ignores heightClassName. headerScroll disables sticky header behavior.
- The wrapper has no public sorting/filtering state or selection callback. Perform filtering in your application and use the column definitions for cells; isRowsSelected only controls the selection summary.

**Accessibility:** Use meaningful column headings. If rows have click actions, provide a keyboard accessible button or link in a cell.

## DataTableSkeleton

[Interactive examples](https://ui.blencm.com/data-table-skeleton) · [API](./api-reference.md#datatableskeleton)

- Set columnCount to match the upcoming table; rowCount defaults to 10.
- searchableColumnCount, filterableColumnCount and showViewOptions adjust toolbar placeholders.

**Accessibility:** Set aria-busy on the data region and expose request failures separately.

## Dropzone

[Interactive examples](https://ui.blencm.com/dropzone) · [API](./api-reference.md#dropzone)

- Use value/onChange to display selected files. onDrop is an additional accepted-files callback.
- accept maps MIME types to extensions. options supports maxFiles, maxSize, multiple and onDropRejected.
- options is spread last and can override accept and onDrop. Providing options.onDrop replaces the wrapper callbacks.
- This control selects files locally. Upload them with your application API and handle progress and errors there.

**Accessibility:** Keep a visible click-to-select instruction and explain file restrictions.

## FileUpload

[Interactive examples](https://ui.blencm.com/file-upload) · [API](./api-reference.md#fileupload)

- A circular image selection control with a preview of value[0]. It accepts images by default.
- Use value/onChange and configure limits through options. options is spread last, including any onDrop override.
- ImagePreview creates and revokes its object URL. File selection does not send data to a server.

**Accessibility:** Supply a clear label and report rejected or failed uploads in visible text.

## Heading

[Interactive examples](https://ui.blencm.com/heading) · [API](./api-reference.md#heading)

- Supply title, optional description and className.
- The title is rendered as a styled div. Add a semantic page heading where the document structure requires h1 or h2.

**Accessibility:** Maintain a logical heading hierarchy in the surrounding page.

## PageHead

[Interactive examples](https://ui.blencm.com/page-head) · [API](./api-reference.md#pagehead)

- Supply title to update the document title using react-helmet-next.
- The default title is @blencm/ui. Prefer your framework metadata mechanism where it owns document head management.

**Accessibility:** Use a distinct page title that explains the current screen.

## PaginationSection

[Interactive examples](https://ui.blencm.com/pagination-section) · [API](./api-reference.md#paginationsection)

- Supply totalPosts, postsPerPage, currentPage and setCurrentPage. Page numbers are 1-based.
- The component calculates navigation controls; you must fetch or slice the displayed records in your application.
- Invalid totals and page sizes produce an empty page range rather than invalid arithmetic.

**Accessibility:** Keep result counts visible and ensure a page change is reflected in the displayed results.

## SearchInput

[Interactive examples](https://ui.blencm.com/search-input) · [API](./api-reference.md#searchinput)

- onSearch receives text after debounceTime, which defaults to 750 ms. Zero or a negative value emits immediately.
- The input updates locally while typing and synchronizes when the external value changes.
- Filter your data or fetch results in onSearch. Cancel outdated network requests in your application.

**Accessibility:** Provide aria-label or a visible label; announce loading and empty results near the result list.

## SearchableSelect

[Interactive examples](https://ui.blencm.com/searchable-select) · [API](./api-reference.md#searchableselect)

- Supply items with unique string value, label, optional disabled, keywords and data.
- Supports value/onValueChange or defaultValue. onValueChange receives both the key and matched item.
- Filtering ignores case and diacritics and checks label, value and keywords. It filters the supplied list locally.
- The menu uses a portal and positions itself against the input. Use the individual trigger/content/item/search class props for styling.

**Accessibility:** Provide aria-label or aria-labelledby. Arrow keys navigate enabled items, Enter selects and Escape closes the list.

