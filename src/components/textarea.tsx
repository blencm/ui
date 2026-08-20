import * as React from "react";

import { cn } from "../utils/utils";
import {
  formInputVariants,
  getFormSizeClasses,
  type CustomSize,
  type SizeProps,
  type VariantProps,
} from "../utils/form-utils";

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

function getTextareaMinHeight(size?: SizeProps) {
  switch (size) {
    case "2xs":
      return "min-h-14";
    case "xs":
      return "min-h-16";
    case "sm":
      return "min-h-20";
    case "lg":
      return "min-h-28";
    case "xl":
      return "min-h-32";
    case "2xl":
      return "min-h-36";
    case "md":
    default:
      return "min-h-24";
  }
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      variant = "outline",
      size = "md",
      customSize,
      classNameDefault = true,
      invalid = false,
      disabled,
      ...props
    },
    ref,
  ) => {
    const sizeClasses = getFormSizeClasses(size, customSize);

    const base =
      "block w-full py-2 bg-transparent text-foreground placeholder:text-muted-foreground outline-none transition resize-y disabled:cursor-not-allowed disabled:opacity-50";

    const textareaSizeClass =
      variant === "flushed"
        ? sizeClasses.flushedControl
        : variant === "link"
          ? sizeClasses.linkControl
          : sizeClasses.control;

    const errorClass = invalid
      ? "border-destructive focus:border-destructive focus:ring-destructive/20"
      : "";

    return (
      <textarea
        ref={ref}
        aria-invalid={invalid || undefined}
        disabled={disabled}
        className={
          classNameDefault
            ? cn(
                base,
                formInputVariants[variant],
                textareaSizeClass,
                getTextareaMinHeight(size),
                errorClass,
                className,
              )
            : className
        }
        data-private
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";

export { Textarea };