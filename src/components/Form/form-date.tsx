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

import { UiDate } from "../ui/ui-date";
import { type ButtonVariant } from "../Button/button";

import {
  DateFormatKey,
  resolveDateFormat,
  type DateFormatValue,
} from "../../utils/date-formats";

type DateValueMode = "date" | "string";
type DateInputValue = Date | string | null | undefined;

type CustomFormDateProps<
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
   * Rango permitido.
   * Si es null o undefined, queda libre.
   */
  start_date?: DateInputValue;
  end_date?: DateInputValue;

  /**
   * Alias opcional.
   */
  startDate?: DateInputValue;
  endDate?: DateInputValue;

  /**
   * date: guarda Date.
   * string: guarda usando valueFormat.
   */
  valueMode?: DateValueMode;

  dateFormat?: DateFormatValue;
  valueFormat?: DateFormatValue;

  formatPattern?: string;
  valueFormatPattern?: string;

  locale?: Locale | null;
  defaultMonth?: Date;

  onChange?: (date: Date | undefined) => void;
  onChangeValue?: (value: Date | string | null) => void;

  size?: SizeProps;
  customSize?: CustomSize;
  variant?: VariantProps;

  className?: string;
  itemClassName?: string;
  contentClassName?: string;
  labelClassName?: string;
  messageClassName?: string;
  requiredLabelClassName?: string;

  contentAlign?: "start" | "center" | "end";
  contentSideOffset?: number;
};

function getSafePattern(
  pattern: string | undefined,
  format: DateFormatValue | undefined,
  fallback: DateFormatKey = "demo",
) {
  const resolved = pattern ?? resolveDateFormat(format, fallback);

  if (typeof resolved === "string" && resolved.trim()) {
    return resolved;
  }

  const fallbackPattern = resolveDateFormat(undefined, fallback);

  return typeof fallbackPattern === "string" && fallbackPattern.trim()
    ? fallbackPattern
    : "yyyy-MM-dd";
}

function toFormattedDateString(
  date?: Date,
  valueFormat?: DateFormatValue,
  valueFormatPattern?: string,
  locale?: Locale | null,
) {
  if (!date) return null;

  const pattern = getSafePattern(valueFormatPattern, valueFormat, "iso");

  try {
    return formatDate(date, pattern, {
      locale: locale ?? undefined,
    });
  } catch {
    return formatDate(date, "yyyy-MM-dd", {
      locale: locale ?? undefined,
    });
  }
}

const FormDate = <
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
  placeholder = "Seleccione una fecha",
  disabled,
  invalid,

  start_date,
  end_date,
  startDate,
  endDate,

  valueMode = "date",

  dateFormat = "demo",
  valueFormat = "iso",
  formatPattern,
  valueFormatPattern,

  locale,
  defaultMonth,
  onChange,
  onChangeValue,
  size = "sm",
  customSize,
  variant = "outline",
  className,
  itemClassName,
  contentClassName,
  labelClassName,
  messageClassName,
  requiredLabelClassName,
  contentAlign = "start",
  contentSideOffset = 6,
}: CustomFormDateProps<TFieldValues, TName>) => {
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
                ? toFormattedDateString(
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
                <UiDate
                  value={field.value as Date | string | null}
                  onChange={handleChange}
                  onBlur={field.onBlur}
                  disabled={Boolean(disabled)}
                  invalid={hasError}
                  placeholder={placeholder}
                  start_date={startDate ?? start_date}
                  end_date={endDate ?? end_date}
                  dateFormat={dateFormat}
                  valueFormat={valueFormat}
                  formatPattern={formatPattern}
                  valueFormatPattern={valueFormatPattern}
                  locale={locale}
                  defaultMonth={defaultMonth}
                  size={size}
                  customSize={customSize}
                  variant={variant}
                  className={className}
                  contentClassName={contentClassName}
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

FormDate.displayName = "FormDate";

export { FormDate, type CustomFormDateProps };
