"use client";

import * as React from "react";
import { Asterisk } from "lucide-react";

import { Label } from "../Label/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";
import { cn } from "../../utils/utils";
import {
  getFormSizeClasses,
  type CustomSize,
  type SizeProps,
  type VariantProps,
} from "../../utils/form-utils";

export type UiSelectOption<TData = unknown> = {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
  data?: TData;
};

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

function UiSelect<TData = unknown>({
  label,
  placeholder = "Select an option",
  value,
  defaultValue,
  onChange,
  items,
  children,
  disabled,
  requiredLabel,
  className,
  selectClassName,
  labelClassName,
  contentClassName,
  itemClassName,
  messageClassName,
  requiredLabelClassName,
  size = "sm",
  customSize,
  variant = "outline",
  errorMessage,
  htmlFormItemId,
  position = "popper",
  contentAlign = "center",
  contentSideOffset = 6,
}: UiSelectProps<TData>) {
  const generatedId = React.useId();
  const triggerId = htmlFormItemId ?? generatedId;
  const messageId = `${triggerId}-message`;
  const hasError = Boolean(errorMessage);

  const sizeClasses = getFormSizeClasses(size, customSize);

  return (
    <div className={cn("w-full min-w-0 space-y-0.5 break-inside-avoid", selectClassName)}>
      {label ? (
        <Label
          htmlFor={triggerId}
          className={cn(
            "flex items-center gap-0.5 text-sm font-medium",
            hasError && "text-destructive",
            labelClassName,
          )}
        >
          <span className="min-w-0 truncate">{label}</span>

          {requiredLabel ? (
            <Asterisk
              aria-hidden="true"
              className={cn(
                "h-3 w-3 shrink-0 text-red-500",
                requiredLabelClassName,
              )}
            />
          ) : null}
        </Label>
      ) : null}

      <Select
        value={value}
        defaultValue={defaultValue}
        onValueChange={onChange}
        disabled={disabled}
        size={size}
        customSize={customSize}
        variant={variant}
        invalid={hasError}
      >
        <SelectTrigger
          id={triggerId}
          aria-invalid={hasError || undefined}
          aria-describedby={errorMessage ? messageId : undefined}
          className={cn("min-w-0", className)}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent
          position={position}
          align={contentAlign}
          sideOffset={contentSideOffset}
          className={cn(
            "z-50 overflow-hidden rounded-xl border border-border bg-popover text-popover-foreground shadow-xl outline-none",
            contentClassName,
          )}
          onWheelCapture={(event) => event.stopPropagation()}
          onTouchMoveCapture={(event) => event.stopPropagation()}
        >
          {children ??
            items?.map((item) => (
              <SelectItem
                key={item.value}
                value={item.value}
                disabled={item.disabled}
                className={cn(sizeClasses.selectItem, itemClassName)}
              >
                {item.label}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>

      {errorMessage ? (
        <p
          id={messageId}
          className={cn(
            "font-medium text-destructive",
            sizeClasses.message,
            messageClassName,
          )}
        >
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}

export { UiSelect };