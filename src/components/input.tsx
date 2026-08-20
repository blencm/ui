import * as React from "react";

import { cn } from "../utils/utils";
import {
  formInputVariants,
  getFormSizeClasses,
  type CustomSize,
  type SizeProps,
  type VariantProps,
} from "../utils/form-utils";

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

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant = "outline",
      size = "sm",
      customSize,
      leading,
      trailing,
      classNameDefault = true,
      invalid = false,
      disabled,
      ...props
    },
    ref,
  ) => {
    const sizeClasses = getFormSizeClasses(size, customSize);

    const base =
      "block w-full bg-transparent text-foreground placeholder:text-muted-foreground outline-none transition disabled:cursor-not-allowed disabled:opacity-50";

    const inputSizeClass =
      variant === "flushed"
        ? sizeClasses.flushedControl
        : variant === "link"
          ? sizeClasses.linkControl
          : sizeClasses.control;

    const errorClass = invalid
      ? "border-destructive focus:border-destructive focus:ring-destructive/20"
      : "";

    const hasIconPadding = variant !== "flushed" && variant !== "link";

    const iconPaddingLeft =
      leading && hasIconPadding
        ? size === "xl" || size === "2xl"
          ? "pl-14"
          : size === "lg"
            ? "pl-12"
            : size === "2xs" || size === "xs"
              ? "pl-8"
              : "pl-10"
        : "";

    const iconPaddingRight =
      trailing && hasIconPadding
        ? size === "xl" || size === "2xl"
          ? "pr-14"
          : size === "lg"
            ? "pr-12"
            : size === "2xs" || size === "xs"
              ? "pr-8"
              : "pr-10"
        : "";

    const iconSizeClass =
      size === "2xl"
        ? "text-[1.3rem]"
        : size === "xl"
          ? "text-[1.2rem]"
          : size === "lg"
            ? "text-[1.15rem]"
            : size === "2xs" || size === "xs"
              ? "text-[0.85rem]"
              : "text-[1rem]";

    const iconPositionClass =
      size === "2xs" || size === "xs"
        ? "left-2"
        : size === "xl" || size === "2xl"
          ? "left-4"
          : "left-3";

    const trailingIconPositionClass =
      size === "2xs" || size === "xs"
        ? "right-2"
        : size === "xl" || size === "2xl"
          ? "right-4"
          : "right-3";

    return (
      <div className={cn("relative", disabled && "opacity-80")}>
        {leading ? (
          <span
            className={cn(
              "pointer-events-none absolute top-1/2 -translate-y-1/2 opacity-60",
              iconPositionClass,
              iconSizeClass,
              !hasIconPadding && "hidden",
            )}
          >
            {leading}
          </span>
        ) : null}

        <input
          ref={ref}
          aria-invalid={invalid || undefined}
          disabled={disabled}
          className={
            classNameDefault
              ? cn(
                  base,
                  formInputVariants[variant],
                  inputSizeClass,
                  errorClass,
                  iconPaddingLeft,
                  iconPaddingRight,
                  className,
                )
              : className
          }
          data-private
          {...props}
        />

        {trailing ? (
          <span
            className={cn(
              "absolute top-1/2 -translate-y-1/2 opacity-70",
              trailingIconPositionClass,
              iconSizeClass,
              !hasIconPadding && "hidden",
            )}
          >
            {trailing}
          </span>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
