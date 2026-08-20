"use client";

import * as React from "react";
import {
  addMonths,
  endOfMonth,
  format as formatDate,
  isAfter,
  isBefore,
  isValid,
  parse,
  startOfDay,
  startOfMonth,
  type Locale,
} from "date-fns";
import {
  Asterisk,
  CalendarIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";

import { Calendar } from "../calendar";
import { Label } from "../Label/label";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { UiSelect, type UiSelectOption } from "./select";

import { cn } from "../../utils/utils";
import {
  formInputVariants,
  getFormSizeClasses,
  type CustomSize,
  type SizeProps,
  type VariantProps,
} from "../../utils/form-utils";

import { buttonVariants } from "../Button/button";

import {
  DateFormatKey,
  resolveDateFormat,
  type DateFormatValue,
} from "../../utils/date-formats";

type DateInputValue = Date | string | null | undefined;

export interface UiDateProps {
  label?: React.ReactNode;
  placeholder?: string;

  value?: Date | string | null;
  defaultMonth?: Date;
  onChange?: (date: Date | undefined) => void;
  onBlur?: () => void;

  disabled?: boolean;
  requiredLabel?: boolean;

  start_date?: DateInputValue;
  end_date?: DateInputValue;

  startDate?: DateInputValue;
  endDate?: DateInputValue;

  dateFormat?: DateFormatValue;
  valueFormat?: DateFormatValue;

  formatPattern?: string;
  valueFormatPattern?: string;

  locale?: Locale | null;

  className?: string;
  classNameDefault?: boolean;
  dateClassName?: string;
  labelClassName?: string;
  contentClassName?: string;
  messageClassName?: string;
  requiredLabelClassName?: string;

  size?: SizeProps;
  customSize?: CustomSize;
  variant?: VariantProps;
  errorMessage?: string;
  invalid?: boolean;

  htmlFormItemId?: string;

  contentAlign?: "start" | "center" | "end";
  contentSideOffset?: number;
}

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

function safeFormatDate(date: Date, pattern: string, locale?: Locale | null) {
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

function parseDateValue(
  value?: Date | string | null,
  valueFormat?: DateFormatValue,
  valueFormatPattern?: string,
  locale?: Locale | null,
) {
  if (!value) return undefined;

  if (value instanceof Date) {
    return isValid(value) ? value : undefined;
  }

  const trimmedValue = value.trim();
  if (!trimmedValue) return undefined;

  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmedValue)) {
    const [year, month, day] = trimmedValue.split("-").map(Number);
    const date = new Date(year, month - 1, day);

    return isValid(date) ? date : undefined;
  }

  const pattern = getSafePattern(valueFormatPattern, valueFormat, "iso");

  const parsedDate = parse(trimmedValue, pattern, new Date(), {
    locale: locale ?? undefined,
  });

  return isValid(parsedDate) ? parsedDate : undefined;
}

function normalizeDate(date?: Date) {
  if (!date || !isValid(date)) return undefined;
  return startOfDay(date);
}

function isDateOutsideRange(date: Date, start?: Date, end?: Date) {
  const currentDate = startOfDay(date);

  if (start && isBefore(currentDate, start)) return true;
  if (end && isAfter(currentDate, end)) return true;

  return false;
}

function isMonthOutsideRange(date: Date, start?: Date, end?: Date) {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);

  if (start && isBefore(monthEnd, start)) return true;
  if (end && isAfter(monthStart, end)) return true;

  return false;
}

function clampMonth(date: Date, start?: Date, end?: Date) {
  const monthDate = startOfMonth(date);

  if (start && isBefore(endOfMonth(monthDate), start)) {
    return startOfMonth(start);
  }

  if (end && isAfter(monthDate, end)) {
    return startOfMonth(end);
  }

  return monthDate;
}

function isSameVisibleMonth(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}

function capitalize(value: string) {
  if (!value) return value;
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function UiDate({
  label,
  placeholder = "Select a date",
  value,
  defaultMonth,
  onChange,
  onBlur,
  disabled,
  requiredLabel,

  start_date,
  end_date,
  startDate,
  endDate,

  dateFormat = "demo",
  valueFormat = "iso",
  formatPattern,
  valueFormatPattern,
  locale,

  className,
  classNameDefault = true,
  dateClassName,
  labelClassName,
  contentClassName,
  messageClassName,
  requiredLabelClassName,
  size = "sm",
  customSize,
  variant = "outline",
  errorMessage,
  invalid,
  htmlFormItemId,
  contentAlign = "start",
  contentSideOffset = 6,
}: UiDateProps) {
  const [open, setOpen] = React.useState(false);

  const generatedId = React.useId();
  const triggerId = htmlFormItemId ?? generatedId;
  const messageId = `${triggerId}-message`;

  const displayPattern = getSafePattern(formatPattern, dateFormat, "demo");

  const selectedDate = parseDateValue(
    value,
    valueFormat,
    valueFormatPattern,
    locale,
  );

  const minDate = normalizeDate(
    parseDateValue(
      startDate ?? start_date,
      valueFormat,
      valueFormatPattern,
      locale,
    ),
  );

  const maxDate = normalizeDate(
    parseDateValue(
      endDate ?? end_date,
      valueFormat,
      valueFormatPattern,
      locale,
    ),
  );

  const selectedDateTime = selectedDate?.getTime();
  const defaultMonthTime = defaultMonth?.getTime();
  const minDateTime = minDate?.getTime();
  const maxDateTime = maxDate?.getTime();

  const hasError = Boolean(invalid || errorMessage);
  const sizeClasses = getFormSizeClasses(size, customSize);

  const inputSizeClass =
    variant === "flushed"
      ? sizeClasses.flushedControl
      : variant === "link"
        ? sizeClasses.linkControl
        : sizeClasses.control;

  const errorClass = hasError
    ? "border-destructive focus:border-destructive focus:ring-destructive/20"
    : "";

  const currentYear = new Date().getFullYear();

  const fromYear = minDate?.getFullYear() ?? currentYear - 100;
  const toYear = maxDate?.getFullYear() ?? currentYear + 50;

  const safeFromYear = Math.min(fromYear, toYear);
  const safeToYear = Math.max(fromYear, toYear);

  const initialMonth = React.useMemo(
    () =>
      clampMonth(
        selectedDate ?? defaultMonth ?? minDate ?? maxDate ?? new Date(),
        minDate,
        maxDate,
      ),
    [selectedDateTime, defaultMonthTime, minDateTime, maxDateTime],
  );

  const [calendarMonth, setCalendarMonth] = React.useState(initialMonth);

  React.useEffect(() => {
    if (!open) return;

    setCalendarMonth((previousMonth) => {
      const nextMonth = clampMonth(
        selectedDate ?? defaultMonth ?? previousMonth,
        minDate,
        maxDate,
      );

      return isSameVisibleMonth(previousMonth, nextMonth)
        ? previousMonth
        : nextMonth;
    });
  }, [open, selectedDateTime, defaultMonthTime, minDateTime, maxDateTime]);

  const disabledDateMatchers = React.useMemo(() => {
    const matchers: Array<{ before: Date } | { after: Date }> = [];

    if (minDate) {
      matchers.push({ before: minDate });
    }

    if (maxDate) {
      matchers.push({ after: maxDate });
    }

    return matchers;
  }, [minDateTime, maxDateTime]);

  const calendarRangeProps = React.useMemo<Record<string, unknown>>(
    () => ({
      fromYear: safeFromYear,
      toYear: safeToYear,
      fromMonth: minDate,
      toMonth: maxDate,
      startMonth: minDate ?? new Date(safeFromYear, 0, 1),
      endMonth: maxDate ?? new Date(safeToYear, 11, 31),
    }),
    [safeFromYear, safeToYear, minDateTime, maxDateTime],
  );

  const monthOptions = React.useMemo<UiSelectOption[]>(
    () =>
      Array.from({ length: 12 }, (_, monthIndex) => {
        const monthDate = new Date(calendarMonth.getFullYear(), monthIndex, 1);

        return {
          value: String(monthIndex),
          label: capitalize(
            formatDate(monthDate, "LLLL", {
              locale: locale ?? undefined,
            }),
          ),
          disabled: isMonthOutsideRange(monthDate, minDate, maxDate),
        };
      }),
    [calendarMonth, locale, minDateTime, maxDateTime],
  );

  const yearOptions = React.useMemo<UiSelectOption[]>(
    () =>
      Array.from({ length: safeToYear - safeFromYear + 1 }, (_, index) => {
        const year = safeFromYear + index;

        return {
          value: String(year),
          label: String(year),
        };
      }),
    [safeFromYear, safeToYear],
  );

  const previousMonth = addMonths(calendarMonth, -1);
  const nextMonth = addMonths(calendarMonth, 1);

  const isPreviousDisabled =
    Boolean(disabled) || isMonthOutsideRange(previousMonth, minDate, maxDate);

  const isNextDisabled =
    Boolean(disabled) || isMonthOutsideRange(nextMonth, minDate, maxDate);

  const calendarClassNames = React.useMemo<Record<string, string>>(
    () => ({
      caption: "hidden",
      month_caption: "hidden",
      nav: "hidden",

      months: "flex w-full flex-col",
      month: "w-full space-y-1",

      table: "w-full border-collapse",
      month_grid: "w-full border-collapse",

      head_row: "grid grid-cols-7",
      weekdays: "grid grid-cols-7",

      head_cell:
        "flex h-7 items-center justify-center text-[11px] font-medium text-muted-foreground",
      weekday:
        "flex h-7 items-center justify-center text-[11px] font-medium text-muted-foreground",

      row: "grid grid-cols-7",
      week: "grid grid-cols-7",

      cell: "relative flex h-9 items-center justify-center p-0 text-center",
      day: "flex h-9 items-center justify-center p-0 text-sm font-normal",
      day_button:
        "flex h-8 w-8 items-center justify-center rounded-lg p-0 text-sm font-normal transition-colors hover:bg-accent hover:text-accent-foreground",

      selected:
        "[&>button]:bg-primary [&>button]:text-primary-foreground [&>button]:hover:bg-primary [&>button]:hover:text-primary-foreground",
      day_selected:
        "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",

      today: "[&>button]:bg-muted [&>button]:text-foreground",
      day_today: "bg-muted text-foreground",

      outside: "text-muted-foreground/35 opacity-50",
      day_outside: "text-muted-foreground/35 opacity-50",

      disabled: "text-muted-foreground/25 opacity-50",
      day_disabled: "text-muted-foreground/25 opacity-50",

      hidden: "invisible",
      day_hidden: "invisible",
    }),
    [],
  );

  const dateHeaderSelectTriggerClassName =
    "!h-8 !rounded-lg !border-transparent !bg-muted/60 !px-2 !text-xs !font-medium !shadow-none hover:!bg-muted focus-visible:!ring-1 focus-visible:!ring-ring";

  const dateHeaderSelectContentClassName =
    "rounded-xl border-border/70 bg-popover shadow-lg";

  const dateHeaderSelectItemClassName = "h-8 rounded-lg px-2 text-xs";

  const base =
    "block w-full bg-transparent text-foreground placeholder:text-muted-foreground outline-none transition disabled:cursor-not-allowed disabled:opacity-50";

  const handleSelect = (date: Date | undefined) => {
    if (date && isDateOutsideRange(date, minDate, maxDate)) {
      return;
    }

    onChange?.(date);
    setOpen(false);
    onBlur?.();
  };

  const handleMonthChange = (monthValue: string) => {
    const nextMonthIndex = Number(monthValue);

    if (!Number.isFinite(nextMonthIndex)) return;

    setCalendarMonth((currentMonth) =>
      clampMonth(
        new Date(currentMonth.getFullYear(), nextMonthIndex, 1),
        minDate,
        maxDate,
      ),
    );
  };

  const handleYearChange = (yearValue: string) => {
    const nextYear = Number(yearValue);

    if (!Number.isFinite(nextYear)) return;

    setCalendarMonth((currentMonth) =>
      clampMonth(
        new Date(nextYear, currentMonth.getMonth(), 1),
        minDate,
        maxDate,
      ),
    );
  };

  return (
    <div className={cn("w-full min-w-0 space-y-0.5 break-inside-avoid", dateClassName)}>
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

      <Popover
        open={open}
        onOpenChange={(nextOpen) => {
          setOpen(nextOpen);
          if (!nextOpen) onBlur?.();
        }}
      >
        <PopoverTrigger asChild>
          <button
            id={triggerId}
            type="button"
            disabled={Boolean(disabled)}
            data-empty={!selectedDate}
            aria-invalid={hasError || undefined}
            aria-describedby={errorMessage ? messageId : undefined}
            className={
              classNameDefault
                ? cn(
                    base,
                    formInputVariants[variant],
                    inputSizeClass,
                    "inline-flex w-full min-w-0 max-w-full shrink items-center justify-between gap-2 text-left font-normal",
                    "data-[empty=true]:text-muted-foreground",
                    errorClass,
                    className,
                  )
                : className
            }
          >
            <span className="flex min-w-0 flex-1 items-center gap-2 overflow-hidden">
              <CalendarIcon className="h-4 w-4 shrink-0 opacity-70" />

              <span className="min-w-0 flex-1 truncate text-left">
                {selectedDate
                  ? safeFormatDate(selectedDate, displayPattern, locale)
                  : placeholder}
              </span>
            </span>

            <ChevronDownIcon className="h-4 w-4 shrink-0 opacity-70" />
          </button>
        </PopoverTrigger>

        <PopoverContent
          align={contentAlign}
          sideOffset={contentSideOffset}
          className={cn(
            "z-50 w-79 max-w-[calc(100vw-1.5rem)] overflow-hidden rounded-2xl border border-border/70 bg-popover p-0 text-popover-foreground shadow-xl outline-none",
            contentClassName,
          )}
          onWheelCapture={(event) => event.stopPropagation()}
          onTouchMoveCapture={(event) => event.stopPropagation()}
        >
          <div className="flex items-center gap-1.5 border-b border-border/60 px-2 py-2">
            <button
              type="button"
              disabled={isPreviousDisabled}
              onClick={() => {
                setCalendarMonth((currentMonth) =>
                  clampMonth(addMonths(currentMonth, -1), minDate, maxDate),
                );
              }}
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "icon",
                  rounded: "default",
                }),
                "h-8 w-8 shrink-0 rounded-lg text-muted-foreground hover:text-foreground disabled:opacity-30",
              )}
              aria-label="Previous month"
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </button>

            <div className="grid min-w-0 flex-1 grid-cols-[minmax(0,1fr)_82px] gap-1.5">
              <UiSelect
                value={String(calendarMonth.getMonth())}
                onChange={handleMonthChange}
                items={monthOptions}
                disabled={Boolean(disabled)}
                size="sm"
                placeholder="Month"
                selectClassName="space-y-0"
                className={dateHeaderSelectTriggerClassName}
                contentClassName={dateHeaderSelectContentClassName}
                itemClassName={dateHeaderSelectItemClassName}
                contentAlign="start"
                contentSideOffset={4}
              />

              <UiSelect
                value={String(calendarMonth.getFullYear())}
                onChange={handleYearChange}
                items={yearOptions}
                disabled={Boolean(disabled)}
                size="sm"
                placeholder="Year"
                selectClassName="space-y-0"
                className={dateHeaderSelectTriggerClassName}
                contentClassName={dateHeaderSelectContentClassName}
                itemClassName={dateHeaderSelectItemClassName}
                contentAlign="start"
                contentSideOffset={4}
              />
            </div>

            <button
              type="button"
              disabled={isNextDisabled}
              onClick={() => {
                setCalendarMonth((currentMonth) =>
                  clampMonth(addMonths(currentMonth, 1), minDate, maxDate),
                );
              }}
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "icon",
                  rounded: "default",
                }),
                "h-8 w-8 shrink-0 rounded-lg text-muted-foreground hover:text-foreground disabled:opacity-30",
              )}
              aria-label="Next month"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </div>

          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleSelect}
            month={calendarMonth}
            onMonthChange={(nextVisibleMonth) => {
              setCalendarMonth(clampMonth(nextVisibleMonth, minDate, maxDate));
            }}
            locale={locale ?? undefined}
            disabled={
              disabledDateMatchers.length > 0 ? disabledDateMatchers : undefined
            }
            className="rounded-none px-2 pb-2 pt-2"
            classNames={calendarClassNames as any}
            {...calendarRangeProps}
          />
        </PopoverContent>
      </Popover>

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

UiDate.displayName = "UiDate";

export { UiDate };
