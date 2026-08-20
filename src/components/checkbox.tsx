import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";

import { cn } from "../utils/utils";

type CheckboxSize = "sm" | "md" | "lg";

type CheckboxVariant =
  | "default"
  | "outline"
  | "soft"
  | "success"
  | "destructive";

interface CheckboxProps extends Omit<
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
  "size"
> {
  size?: CheckboxSize;
  variant?: CheckboxVariant;
  invalid?: boolean;
  iconClassName?: string;
}

const checkboxSizes: Record<CheckboxSize, string> = {
  sm: "h-4 w-4 rounded",
  md: "h-5 w-5 rounded-md",
  lg: "h-6 w-6 rounded-lg",
};

const checkboxIconSizes: Record<CheckboxSize, string> = {
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

const checkboxVariants: Record<CheckboxVariant, string> = {
  default:
    "border-input bg-background data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
  outline:
    "border-input bg-transparent data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
  soft: "border-transparent bg-muted data-[state=checked]:bg-primary/15 data-[state=checked]:text-primary",
  success:
    "border-input bg-background data-[state=checked]:border-emerald-500 data-[state=checked]:bg-emerald-500 data-[state=checked]:text-white",
  destructive:
    "border-input bg-background data-[state=checked]:border-destructive data-[state=checked]:bg-destructive data-[state=checked]:text-destructive-foreground",
};

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(
  (
    {
      className,
      size = "md",
      variant = "default",
      invalid,
      disabled,
      iconClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <CheckboxPrimitive.Root
        ref={ref}
        disabled={disabled}
        className={cn(
          "peer relative inline-flex shrink-0 items-center justify-center overflow-hidden border outline-none",
          "box-border align-middle transition-colors duration-200",
          "hover:border-primary/70",
          "focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "data-[state=unchecked]:bg-background",
          checkboxSizes[size],
          checkboxVariants[variant],
          invalid && "border-destructive focus-visible:outline-destructive/70",
          className,
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={cn(
            "flex items-center justify-center text-current",
            "transition-transform duration-150",
          )}
        >
          <CheckIcon
            className={cn(
              checkboxIconSizes[size],
              "stroke-[2.5]",
              iconClassName,
            )}
          />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );
  },
);

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export {
  Checkbox,
  type CheckboxProps,
  type CheckboxSize,
  type CheckboxVariant,
};
