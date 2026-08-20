"use client";

import * as React from "react";
import { Asterisk } from "lucide-react";
import { format as formatDate, type Locale } from "date-fns";
import {
  Control,
  Controller,
  FieldPath,
  FieldPathValue,
  FieldValues,
  useFormContext,
} from "react-hook-form";

import { cn } from "../../utils/utils";

import {
  getFormSizeClasses,
  VariantProps,
  type CustomSize,
  type SizeProps,
} from "../../utils/form-utils";

import {
  FieldRules,
  FormControl,
  FormFieldContext,
  FormFieldContextValue,
  FormItem,
  FormLabel,
  FormMessage,
  getErrorMessage,
} from "./form-component";

import { UiTime, type UiTimeOption } from "../ui/ui-time";
import { type ButtonVariant } from "../Button/button";

import {
  resolveTimeFormat,
  type TimeFormatValue,
} from "../../utils/time-formats";

type TimeValueMode = "date" | "string";
type HourCycle = "12" | "24";

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
   * date: guarda un Date.
   * string: guarda usando valueFormat.
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
   * "12" = selector hora / minuto / AM-PM.
   * "24" = selector hora / minuto en formato 24H.
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

function toFormattedTimeString(
  date?: Date,
  valueFormat?: TimeFormatValue,
  valueFormatPattern?: string,
  locale?: Locale,
) {
  if (!date) return null;

  const pattern =
    valueFormatPattern ?? resolveTimeFormat(valueFormat, "time24");

  return formatDate(date, pattern, {
    locale,
  });
}

const FormTime = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  name,
  control,
  rules,
  shouldUnregister,
  defaultValue,
  label,
  requiredLabel,
  placeholder = "Seleccionar hora",
  disabled,
  invalid,
  valueMode = "string",

  timeFormat = "time12",
  valueFormat = "time24",
  formatPattern,
  valueFormatPattern,
  locale,

  minuteStep = 1,
  minTime,
  maxTime,
  options,
  hourCycle = "12",

  onChange,
  onChangeValue,
  size = "sm",
  customSize,
  variant = "outline",
  className,
  itemClassName,
  contentClassName,
  optionClassName,
  labelClassName,
  messageClassName,
  requiredLabelClassName,
  contentAlign = "start",
  contentSideOffset = 6,
}: CustomFormTimeProps<TFieldValues, TName>) => {
  const form = useFormContext<TFieldValues>();
  const controllerControl = control ?? form?.control;

  const sizeClasses = getFormSizeClasses(size, customSize);

  return (
    <FormFieldContext.Provider value={{ name } as FormFieldContextValue}>
      <Controller
        control={controllerControl}
        name={name}
        rules={rules}
        shouldUnregister={shouldUnregister}
        defaultValue={defaultValue}
        render={({ field, fieldState }) => {
          const fieldError = getErrorMessage(fieldState.error);
          const hasError = Boolean(invalid || fieldError);

          const handleChange = (date: Date | undefined) => {
            const nextValue =
              valueMode === "string"
                ? toFormattedTimeString(
                    date,
                    valueFormat,
                    valueFormatPattern,
                    locale,
                  )
                : (date ?? null);

            field.onChange(nextValue);
            onChange?.(date);
            onChangeValue?.(nextValue);
          };

          return (
            <FormItem className={itemClassName}>
              {label ? (
                <FormLabel
                  className={cn("flex items-center gap-0.5", labelClassName)}
                >
                  <span>{label}</span>

                  {requiredLabel ? (
                    <Asterisk
                      aria-hidden="true"
                      className={cn(
                        "h-3 w-3 shrink-0 text-red-500",
                        requiredLabelClassName,
                      )}
                    />
                  ) : null}
                </FormLabel>
              ) : null}

              <FormControl>
                <UiTime
                  value={field.value as Date | string | null}
                  onChange={handleChange}
                  onBlur={field.onBlur}
                  disabled={disabled}
                  invalid={hasError}
                  placeholder={placeholder}
                  timeFormat={timeFormat}
                  valueFormat={valueFormat}
                  formatPattern={formatPattern}
                  valueFormatPattern={valueFormatPattern}
                  locale={locale}
                  minuteStep={minuteStep}
                  minTime={minTime}
                  maxTime={maxTime}
                  options={options}
                  hourCycle={hourCycle}
                  size={size}
                  customSize={customSize}
                  variant={variant}
                  className={className}
                  contentClassName={contentClassName}
                  optionClassName={optionClassName}
                  contentAlign={contentAlign}
                  contentSideOffset={contentSideOffset}
                />
              </FormControl>

              {fieldError ? (
                <FormMessage
                  className={cn(sizeClasses.message, messageClassName)}
                >
                  {fieldError}
                </FormMessage>
              ) : null}
            </FormItem>
          );
        }}
      />
    </FormFieldContext.Provider>
  );
};

FormTime.displayName = "FormTime";

export { FormTime, type CustomFormTimeProps };
