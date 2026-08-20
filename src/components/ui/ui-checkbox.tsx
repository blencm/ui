// src/components/ui/ui-checkbox.tsx

"use client";

import * as React from "react";
import { Asterisk } from "lucide-react";

import { Checkbox, type CheckboxProps } from "../checkbox";
import { Label } from "../Label/label";
import { cn } from "../../utils/utils";

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

const UiCheckbox = React.forwardRef<
  React.ComponentRef<typeof Checkbox>,
  UiCheckboxProps
>(
  (
    {
      label,
      description,
      errorMessage,
      containerClassName,
      contentClassName,
      labelClassName,
      descriptionClassName,
      errorClassName,
      requiredLabelClassName,
      requiredLabel,
      htmlFormItemId,
      invalid,
      className,
      ...checkboxProps
    },
    ref,
  ) => {
    const hasError = Boolean(errorMessage || invalid);

    return (
      <div className={cn("w-full min-w-0 break-inside-avoid", containerClassName)}>
        <div
          className={cn(
            "flex min-w-0 items-start gap-2.5 transition-colors",
            hasError &&
              "rounded-md border border-destructive/20 bg-destructive/5 px-2 py-1.5",
            contentClassName,
          )}
        >
          <Checkbox
            ref={ref}
            id={htmlFormItemId}
            invalid={hasError}
            className={cn("mt-0.5 shrink-0 self-start", className)}
            {...checkboxProps}
          />

          <div className="min-w-0 flex-1">
            {label ? (
              <Label
                htmlFor={htmlFormItemId}
                className={cn(
                  "inline-flex cursor-pointer items-start gap-1 text-sm font-medium leading-5 text-foreground",
                  checkboxProps.disabled &&
                    "cursor-not-allowed text-muted-foreground",
                  hasError && "text-destructive",
                  labelClassName,
                )}
              >
                <span className="min-w-0">{label}</span>

                {requiredLabel ? (
                  <Asterisk
                    aria-hidden="true"
                    className={cn(
                      "mt-0.5 h-3 w-3 shrink-0 text-red-500",
                      requiredLabelClassName,
                    )}
                  />
                ) : null}
              </Label>
            ) : null}

            {description ? (
              <p
                className={cn(
                  "mt-0.5 text-sm leading-5 text-muted-foreground",
                  descriptionClassName,
                )}
              >
                {description}
              </p>
            ) : null}

            {errorMessage ? (
              <p
                className={cn(
                  "mt-0.5 text-sm font-medium leading-5 text-destructive",
                  errorClassName,
                )}
              >
                {errorMessage}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    );
  },
);

UiCheckbox.displayName = "UiCheckbox";

export { UiCheckbox };
