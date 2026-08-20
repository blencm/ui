"use client";

import * as React from "react";
import { Asterisk } from "lucide-react";

import { Textarea, type TextareaProps } from "../textarea";
import { Label } from "../Label/label";
import { cn } from "../../utils/utils";

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

const UiTextarea = React.forwardRef<HTMLTextAreaElement, UiTextareaProps>(
  (
    {
      label,
      errorMessage,
      htmlFormItemId,
      requiredLabel,
      requiredLabelClassName,
      containerClassName,
      labelClassName,
      messageClassName,
      invalid,
      className,
      ...textareaProps
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const textareaId = htmlFormItemId ?? generatedId;
    const messageId = `${textareaId}-message`;
    const hasError = Boolean(errorMessage || invalid);

    return (
      <div className={cn("w-full min-w-0 space-y-1.5 break-inside-avoid", containerClassName)}>
        {label ? (
          <Label
            className={cn(
              "inline-flex items-start gap-0.5 text-sm font-medium",
              hasError && "text-destructive",
              labelClassName,
            )}
            htmlFor={textareaId}
          >
            <span>{label}</span>

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

        <Textarea
          {...textareaProps}
          ref={ref}
          id={textareaId}
          invalid={hasError}
          aria-invalid={hasError || undefined}
          aria-describedby={errorMessage ? messageId : undefined}
          className={className}
        />

        {errorMessage ? (
          <p
            id={messageId}
            className={cn(
              "text-sm font-medium text-destructive",
              messageClassName,
            )}
          >
            {errorMessage}
          </p>
        ) : null}
      </div>
    );
  },
);

UiTextarea.displayName = "UiTextarea";

export { UiTextarea };
