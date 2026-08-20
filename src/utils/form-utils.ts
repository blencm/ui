import * as React from "react";

export type SelectOption<TData = unknown> = {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
  data?: TData;
};

export type FormInputVariantProps =
  | "outline"
  | "soft"
  | "ghost"
  | "filled"
  | "flushed"
  | "unstyled"
  | "link";

export const formInputVariants: Record<FormInputVariantProps, string> = {
  outline:
    "rounded-md border border-input bg-input backdrop-blur-sm shadow-sm hover:border-primary/60 focus:border-primary focus:ring-2 focus:ring-primary/20",
  soft: "rounded-md border border-transparent bg-muted/60 shadow-sm hover:bg-muted focus:bg-input/80 focus:ring-2 focus:ring-primary/20",
  ghost:
    "rounded-md border border-transparent bg-transparent hover:bg-muted/50 focus:ring-2 focus:ring-ring",
  filled:
    "rounded-md border border-input bg-muted/70 shadow-inner hover:bg-muted focus:bg-input/70 focus:ring-2 focus:ring-primary/20",
  flushed:
    "rounded-none border-0 border-b border-input px-0 shadow-none focus:border-b-2 focus:border-primary focus:ring-0",
  unstyled: "border-0 shadow-none focus:ring-0",
  link: "h-auto border-0 bg-transparent p-0 text-primary shadow-none underline-offset-4 focus:underline focus:ring-0",
};

export type InputVariant = keyof typeof formInputVariants;

/**
 * Variantes equivalentes para controles compuestos:
 * SearchableSelect, combobox, wrappers con input interno, etc.
 * Usan focus-within porque el foco real vive dentro del wrapper.
 */
export const formCompositeVariants: Record<InputVariant, string> = {
  outline:
    "rounded-md border border-input bg-input backdrop-blur-sm shadow-sm hover:border-primary/60 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20",
  soft: "rounded-md border border-transparent bg-muted/60 shadow-sm hover:bg-muted focus-within:bg-input/80 focus-within:ring-2 focus-within:ring-primary/20",
  ghost:
    "rounded-md border border-transparent bg-transparent hover:bg-muted/50 focus-within:ring-2 focus-within:ring-ring",
  filled:
    "rounded-md border border-input bg-muted/70 shadow-inner hover:bg-muted focus-within:bg-input/70 focus-within:ring-2 focus-within:ring-primary/20",
  flushed:
    "rounded-none border-0 border-b border-input px-0 shadow-none focus-within:border-b-2 focus-within:border-primary focus-within:ring-0",
  unstyled: "border-0 shadow-none focus-within:ring-0",
  link: "h-auto border-0 bg-transparent p-0 text-primary shadow-none underline-offset-4 focus-within:underline focus-within:ring-0",
};

export const variants: Record<InputVariant, string> = formInputVariants;

export type SizeProps = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export type VariantProps = InputVariant;

/**
 * Backward-compatible aliases.
 */
export type FormSizeProps = SizeProps;
export type FormVariantProps = VariantProps;

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

export type CustomSize = Partial<SizeClasses>;

export const formSizeVariants: Record<SizeProps, SizeClasses> = {
  "2xs": {
    control: "h-7 px-2 text-xs",
    flushedControl: "h-7 text-xs",
    linkControl: "text-xs",
    selectItem: "h-7 text-xs",
    searchInput: "h-7 px-2 text-xs",
    checkbox: "size-3",
    label: "text-xs",
    description: "text-xs",
    message: "text-xs",
  },
  xs: {
    control: "h-8 px-2.5 text-xs",
    flushedControl: "h-8 text-xs",
    linkControl: "text-xs",
    selectItem: "h-8 text-xs",
    searchInput: "h-8 px-2.5 text-xs",
    checkbox: "size-3.5",
    label: "text-xs",
    description: "text-xs",
    message: "text-xs",
  },
  sm: {
    control: "h-9 px-3 text-sm",
    flushedControl: "h-9 text-sm",
    linkControl: "text-sm",
    selectItem: "h-8 text-sm",
    searchInput: "h-9 px-3 text-sm",
    checkbox: "size-4",
    label: "text-sm",
    description: "text-sm",
    message: "text-sm",
  },
  md: {
    control: "h-10 px-3.5 text-sm",
    flushedControl: "h-10 text-sm",
    linkControl: "text-sm",
    selectItem: "h-9 text-sm",
    searchInput: "h-10 px-3.5 text-sm",
    checkbox: "size-4",
    label: "text-sm",
    description: "text-sm",
    message: "text-sm",
  },
  lg: {
    control: "h-11 px-4 text-base",
    flushedControl: "h-11 text-base",
    linkControl: "text-base",
    selectItem: "h-10 text-base",
    searchInput: "h-11 px-4 text-base",
    checkbox: "size-5",
    label: "text-base",
    description: "text-sm",
    message: "text-sm",
  },
  xl: {
    control: "h-12 px-4 text-base",
    flushedControl: "h-12 text-base",
    linkControl: "text-base",
    selectItem: "h-11 text-base",
    searchInput: "h-12 px-4 text-base",
    checkbox: "size-6",
    label: "text-base",
    description: "text-sm",
    message: "text-sm",
  },
  "2xl": {
    control: "h-14 px-5 text-lg",
    flushedControl: "h-14 text-lg",
    linkControl: "text-lg",
    selectItem: "h-12 text-lg",
    searchInput: "h-14 px-5 text-lg",
    checkbox: "size-7",
    label: "text-lg",
    description: "text-base",
    message: "text-base",
  },
};

export const formControlBase =
  "relative inline-flex w-full items-center justify-between gap-2 text-foreground outline-none transition data-[placeholder]:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50";

export const formCompositeControlBase =
  "relative flex w-full items-center gap-2 text-foreground outline-none transition";

export const formControlErrorClass =
  "border-destructive focus:border-destructive focus:ring-destructive/20";

export const formCompositeControlErrorClass =
  "border-destructive focus-within:border-destructive focus-within:ring-destructive/20";

export function getFormSizeClasses(
  size: SizeProps = "sm",
  customSize?: CustomSize,
): SizeClasses {
  return {
    ...formSizeVariants[size],
    ...customSize,
  };
}

export function getFormControlSizeClass(
  variant: VariantProps,
  sizeClasses: SizeClasses,
): string {
  if (variant === "flushed") return sizeClasses.flushedControl;
  if (variant === "link") return sizeClasses.linkControl;
  return sizeClasses.control;
}