"use client";

import * as React from "react";
import { Asterisk } from "lucide-react";
import {
  Control,
  Controller,
  FieldPath,
  FieldPathValue,
  FieldValues,
  RegisterOptions,
  useFormContext,
} from "react-hook-form";

import { Checkbox, type CheckboxProps } from "../checkbox";
import { Label } from "../Label/label";
import { cn } from "../../utils/utils";
import { FormItem } from "./form-component";

type CheckboxRules<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = Omit<
  RegisterOptions<TFieldValues, TName>,
  "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
>;

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

const FormCheckbox = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  name,
  control,
  rules,
  shouldUnregister,
  defaultValue,
  label,
  description,
  requiredLabel,
  className,
  itemClassName,
  checkboxClassName,
  labelClassName,
  descriptionClassName,
  messageClassName,
  requiredLabelClassName,
  onChange,
  ...checkboxProps
}: FormCheckboxProps<TFieldValues, TName>) => {
  const generatedId = React.useId();
  const form = useFormContext<TFieldValues>();
  const controllerControl = control ?? form?.control;
  const checkboxId = checkboxProps.id ?? `${generatedId}-checkbox`;
  const descriptionId = `${generatedId}-description`;
  const messageId = `${generatedId}-message`;

  return (
    <Controller
      control={controllerControl}
      name={name}
      rules={rules}
      shouldUnregister={shouldUnregister}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => {
        const checked = Boolean(field.value);
        const fieldError = fieldState.error?.message;
        const hasError = Boolean(fieldError);

        return (
          <FormItem className={cn("min-w-0", itemClassName)}>
            <div
              className={cn(
                "flex min-w-0 items-start gap-2.5 transition-colors",
                hasError &&
                  "rounded-md border border-destructive/20 bg-destructive/5 px-2 py-1.5",
                className,
              )}
            >
              <Checkbox
                {...checkboxProps}
                ref={field.ref}
                id={checkboxId}
                checked={checked}
                invalid={hasError || checkboxProps.invalid}
                aria-invalid={hasError || checkboxProps.invalid || undefined}
                aria-describedby={
                  [
                    description ? descriptionId : undefined,
                    hasError ? messageId : undefined,
                  ]
                    .filter(Boolean)
                    .join(" ") || undefined
                }
                className={cn("mt-0.5 shrink-0 self-start", checkboxClassName)}
                onBlur={field.onBlur}
                onCheckedChange={(value) => {
                  const nextValue = value === true;

                  field.onChange(nextValue);
                  onChange?.(nextValue);
                }}
              />

              <div className="min-w-0 flex-1">
                {label ? (
                  <Label
                    htmlFor={checkboxId}
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
                    id={descriptionId}
                    className={cn(
                      "mt-0.5 text-sm leading-5 text-muted-foreground",
                      descriptionClassName,
                    )}
                  >
                    {description}
                  </p>
                ) : null}

                {fieldError ? (
                  <p
                    id={messageId}
                    className={cn(
                      "mt-0.5 text-sm font-medium leading-5 text-destructive",
                      messageClassName,
                    )}
                  >
                    {fieldError}
                  </p>
                ) : null}
              </div>
            </div>
          </FormItem>
        );
      }}
    />
  );
};

FormCheckbox.displayName = "FormCheckbox";

export { FormCheckbox, type FormCheckboxProps, type CheckboxRules };
