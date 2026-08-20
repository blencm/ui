"use client";

import * as React from "react";
import { format as formatDate, isValid, parse, type Locale } from "date-fns";
import {
  Asterisk,
  ChevronDownIcon,
  ChevronUpIcon,
  ClockIcon,
} from "lucide-react";

import { Label } from "../Label/label";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";

import { cn } from "../../utils/utils";
import {
  formInputVariants,
  getFormSizeClasses,
  type CustomSize,
  type SizeProps,
  type VariantProps,
} from "../../utils/form-utils";

import {
  resolveTimeFormat,
  type TimeFormatValue,
} from "../../utils/time-formats";
import { isSameHourMinute } from "../../helper/time";

export type UiTimeOption = {
  value: string;
  label?: React.ReactNode;
  disabled?: boolean;
};

type HourCycle = "12" | "24";
type Period = "AM" | "PM";

export interface UiTimeProps {
  label?: React.ReactNode;
  placeholder?: string;

  value?: Date | string | null;
  onChange?: (date: Date | undefined) => void;
  onBlur?: () => void;

  disabled?: boolean;
  requiredLabel?: boolean;

  timeFormat?: TimeFormatValue;
  valueFormat?: TimeFormatValue;

  formatPattern?: string;
  valueFormatPattern?: string;

  locale?: Locale;

  /**
   * 1 = selector minuto por minuto.
   * 5, 10, 15, 30 también funcionan.
   */
  minuteStep?: number;

  minTime?: string;
  maxTime?: string;

  /**
   * Si envías options, se renderiza como lista simple.
   * Para el picker tipo imagen, no mandes options.
   */
  options?: UiTimeOption[];

  hourCycle?: HourCycle;

  className?: string;
  classNameDefault?: boolean;
  timeClassName?: string;
  labelClassName?: string;
  contentClassName?: string;
  optionClassName?: string;
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

function pad2(value: number) {
  return `${value}`.padStart(2, "0");
}

function createTimeDate(hours: number, minutes: number, seconds = 0) {
  const date = new Date();
  date.setHours(hours, minutes, seconds, 0);
  return date;
}

function getTimeMinutes(date?: Date) {
  if (!date || !isValid(date)) return null;
  return date.getHours() * 60 + date.getMinutes();
}

function parseTimeStringToDate(value: string) {
  const trimmedValue = value.trim();

  const time24Match = trimmedValue.match(/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/);

  if (time24Match) {
    const hours = Number(time24Match[1]);
    const minutes = Number(time24Match[2]);
    const seconds = Number(time24Match[3] ?? 0);

    if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59) {
      return createTimeDate(hours, minutes, seconds);
    }
  }

  const time12Match = trimmedValue.match(
    /^(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(AM|PM)$/i,
  );

  if (time12Match) {
    let hours = Number(time12Match[1]);
    const minutes = Number(time12Match[2]);
    const seconds = Number(time12Match[3] ?? 0);
    const period = time12Match[4].toUpperCase();

    if (hours >= 1 && hours <= 12 && minutes >= 0 && minutes <= 59) {
      if (period === "PM" && hours < 12) hours += 12;
      if (period === "AM" && hours === 12) hours = 0;

      return createTimeDate(hours, minutes, seconds);
    }
  }

  return undefined;
}

function parseTimeValue(
  value?: Date | string | null,
  valueFormat?: TimeFormatValue,
  valueFormatPattern?: string,
  locale?: Locale,
) {
  if (!value) return undefined;

  if (value instanceof Date) {
    return isValid(value) ? value : undefined;
  }

  const trimmedValue = value.trim();
  if (!trimmedValue) return undefined;

  const simpleParsedDate = parseTimeStringToDate(trimmedValue);
  if (simpleParsedDate) return simpleParsedDate;

  const patterns = [
    valueFormatPattern,
    resolveTimeFormat(valueFormat, "time24"),
    "HH:mm",
    "HH:mm:ss",
    "HH:mm:ss.SSS",
    "hh:mm a",
    "hh:mm:ss a",
    "hh:mm:ss.SSS a",
    "p",
    "pp",
  ].filter(Boolean) as string[];

  for (const pattern of patterns) {
    const parsedDate = parse(trimmedValue, pattern, new Date(), {
      locale,
    });

    if (isValid(parsedDate)) return parsedDate;
  }

  return undefined;
}

function parseTimeToMinutes(value?: string) {
  const date = parseTimeStringToDate(value ?? "");
  return getTimeMinutes(date);
}

function clampTime(date: Date, minTime?: string, maxTime?: string) {
  const current = getTimeMinutes(date);
  const min = parseTimeToMinutes(minTime);
  const max = parseTimeToMinutes(maxTime);

  if (current === null) return date;

  if (min !== null && current < min) {
    return createTimeDate(Math.floor(min / 60), min % 60);
  }

  if (max !== null && current > max) {
    return createTimeDate(Math.floor(max / 60), max % 60);
  }

  return date;
}

function roundToStep(date: Date, minuteStep: number) {
  const safeStep = Math.max(1, Math.min(60, minuteStep || 1));
  const next = new Date(date);
  const minutes = next.getMinutes();
  const rounded = Math.round(minutes / safeStep) * safeStep;

  if (rounded >= 60) {
    next.setHours(next.getHours() + 1, 0, 0, 0);
  } else {
    next.setMinutes(rounded, 0, 0);
  }

  return next;
}

function get12Hour(date: Date) {
  const hour = date.getHours();
  const hour12 = hour % 12;
  return hour12 === 0 ? 12 : hour12;
}

function getPeriod(date: Date): Period {
  return date.getHours() >= 12 ? "PM" : "AM";
}

function to24Hour(hour: number, period: Period) {
  if (period === "AM") return hour === 12 ? 0 : hour;
  return hour === 12 ? 12 : hour + 12;
}

function buildMinuteOptions(minuteStep: number) {
  const safeStep = Math.max(1, Math.min(60, minuteStep || 1));
  const values: number[] = [];

  for (let minute = 0; minute < 60; minute += safeStep) {
    values.push(minute);
  }

  return values;
}

function buildListOptions({
  minuteStep,
  minTime,
  maxTime,
}: {
  minuteStep: number;
  minTime?: string;
  maxTime?: string;
}): UiTimeOption[] {
  const safeMinuteStep = Math.max(1, Math.min(60, minuteStep || 1));

  const minMinutes = parseTimeToMinutes(minTime) ?? 0;
  const maxMinutes = parseTimeToMinutes(maxTime) ?? 23 * 60 + 59;

  const options: UiTimeOption[] = [];

  for (let minutes = 0; minutes < 24 * 60; minutes += safeMinuteStep) {
    if (minutes < minMinutes || minutes > maxMinutes) continue;

    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    options.push({
      value: `${pad2(hours)}:${pad2(mins)}`,
    });
  }

  return options;
}

type WheelColumnProps<T extends string | number> = {
  values: T[];
  value: T;
  renderValue: (value: T) => React.ReactNode;
  onChange: (value: T) => void;
  className?: string;
};

function WheelColumn<T extends string | number>({
  values,
  value,
  renderValue,
  onChange,
  className,
}: WheelColumnProps<T>) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const selectedButton =
      containerRef.current?.querySelector<HTMLButtonElement>(
        '[data-selected="true"]',
      );

    selectedButton?.scrollIntoView({
      block: "center",
      behavior: "auto",
    });
  }, [value]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "h-32 min-w-0 flex-1 overflow-y-auto overscroll-contain px-1 py-10",
        "scrollbar-thin scrollbar-track-transparent",
        className,
      )}
      onWheel={(event) => event.stopPropagation()}
      onTouchMove={(event) => event.stopPropagation()}
    >
      <div className="space-y-1">
        {values.map((item) => {
          const selected = item === value;

          return (
            <button
              key={String(item)}
              type="button"
              data-selected={selected}
              className={cn(
                "flex h-9 w-full items-center justify-center rounded-lg px-2 text-sm transition-colors",
                "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                "data-[selected=true]:text-base data-[selected=true]:font-semibold data-[selected=true]:text-foreground",
              )}
              onClick={() => onChange(item)}
            >
              {renderValue(item)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function WheelArrowIndicator() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-3 top-1/2 z-20 flex h-24 -translate-y-1/2 flex-col items-center justify-between"
    >
      <ChevronUpIcon className="h-4 w-4 text-muted-foreground/70" />
      <ChevronDownIcon className="h-4 w-4 text-muted-foreground/70" />
    </div>
  );
}

function UiTime({
  label,
  placeholder = "Seleccionar hora",
  value,
  onChange,
  onBlur,
  disabled,
  requiredLabel,

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

  className,
  classNameDefault = true,
  timeClassName,
  labelClassName,
  contentClassName,
  optionClassName,
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
}: UiTimeProps) {
  const [open, setOpen] = React.useState(false);

  const generatedId = React.useId();
  const triggerId = htmlFormItemId ?? generatedId;
  const messageId = `${triggerId}-message`;

  const displayPattern =
    formatPattern ?? resolveTimeFormat(timeFormat, "time12");

  const base =
    "block w-full bg-transparent text-foreground placeholder:text-muted-foreground outline-none transition disabled:cursor-not-allowed disabled:opacity-50";

  const selectedTime = React.useMemo(
    () => parseTimeValue(value, valueFormat, valueFormatPattern, locale),
    [value, valueFormat, valueFormatPattern, locale],
  );

  const selectedTimeKey = selectedTime
    ? `${selectedTime.getHours()}:${selectedTime.getMinutes()}`
    : "empty";

  const [draftTime, setDraftTime] = React.useState<Date>(() =>
    clampTime(
      roundToStep(selectedTime ?? new Date(), minuteStep),
      minTime,
      maxTime,
    ),
  );

  React.useEffect(() => {
    if (!open) return;

    const nextTime = clampTime(
      roundToStep(selectedTime ?? new Date(), minuteStep),
      minTime,
      maxTime,
    );

    setDraftTime((currentTime) =>
      isSameHourMinute(currentTime, nextTime) ? currentTime : nextTime,
    );
  }, [open, selectedTimeKey, minuteStep, minTime, maxTime]);

  const selectedMinutes = getTimeMinutes(selectedTime);

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

  const listOptions = React.useMemo(
    () =>
      options?.length
        ? options
        : buildListOptions({
            minuteStep,
            minTime,
            maxTime,
          }),
    [maxTime, minTime, minuteStep, options],
  );

  const hours12 = React.useMemo(
    () => Array.from({ length: 12 }, (_, index) => index + 1),
    [],
  );

  const hours24 = React.useMemo(
    () => Array.from({ length: 24 }, (_, index) => index),
    [],
  );

  const minutes = React.useMemo(
    () => buildMinuteOptions(minuteStep),
    [minuteStep],
  );

  const periodOptions = React.useMemo<Period[]>(() => ["AM", "PM"], []);

  const emitChange = (nextDate: Date) => {
    const clamped = clampTime(nextDate, minTime, maxTime);

    setDraftTime((currentTime) =>
      isSameHourMinute(currentTime, clamped) ? currentTime : clamped,
    );

    onChange?.(clamped);
  };

  const handleChangeHour12 = (hour: number) => {
    const next = new Date(draftTime);
    next.setHours(to24Hour(hour, getPeriod(draftTime)));
    emitChange(next);
  };

  const handleChangeHour24 = (hour: number) => {
    const next = new Date(draftTime);
    next.setHours(hour);
    emitChange(next);
  };

  const handleChangeMinute = (minute: number) => {
    const next = new Date(draftTime);
    next.setMinutes(minute, 0, 0);
    emitChange(next);
  };

  const handleChangePeriod = (period: Period) => {
    const next = new Date(draftTime);
    next.setHours(to24Hour(get12Hour(draftTime), period));
    emitChange(next);
  };

  const handleSelectListOption = (optionValue: string) => {
    const date = parseTimeValue(optionValue, "time24", undefined, locale);

    onChange?.(date);
    setOpen(false);
    onBlur?.();
  };

  const renderCustomOptions = Boolean(options?.length);

  return (
    <div className={cn("w-full min-w-0 space-y-0.5 break-inside-avoid", timeClassName)}>
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
            disabled={disabled}
            data-empty={!selectedTime}
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
              <ClockIcon className="h-4 w-4 shrink-0 opacity-70" />

              <span className="min-w-0 flex-1 truncate text-left">
                {selectedTime
                  ? formatDate(selectedTime, displayPattern, { locale })
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
            "z-50 w-75 overflow-hidden rounded-2xl border border-border bg-popover p-2 text-popover-foreground shadow-xl outline-none",
            contentClassName,
          )}
          onWheelCapture={(event) => event.stopPropagation()}
          onTouchMoveCapture={(event) => event.stopPropagation()}
        >
          {renderCustomOptions ? (
            <div className="max-h-64 overflow-y-auto pr-1">
              {listOptions.map((option) => {
                const optionDate = parseTimeValue(
                  option.value,
                  "time24",
                  undefined,
                  locale,
                );

                const optionMinutes = getTimeMinutes(optionDate);
                const isSelected =
                  selectedMinutes !== null && optionMinutes === selectedMinutes;

                return (
                  <button
                    key={option.value}
                    type="button"
                    disabled={option.disabled}
                    data-selected={isSelected}
                    className={cn(
                      "flex w-full items-center justify-between rounded-md px-2.5 py-2 text-left text-sm outline-none transition-colors",
                      "hover:bg-accent hover:text-accent-foreground",
                      "disabled:pointer-events-none disabled:opacity-50",
                      "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground",
                      optionClassName,
                    )}
                    onClick={() => handleSelectListOption(option.value)}
                  >
                    <span className="min-w-0 truncate">
                      {option.label ??
                        (optionDate
                          ? formatDate(optionDate, displayPattern, { locale })
                          : option.value)}
                    </span>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="relative px-2 py-1">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-2 top-1/2 z-0 h-10 -translate-y-1/2 rounded-xl bg-muted/80"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-2 top-0 z-10 h-8 bg-linear-to-b from-popover to-transparent"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-2 bottom-0 z-10 h-8 bg-linear-to-t from-popover to-transparent"
              />

              <WheelArrowIndicator />

              <div className="relative z-10 grid grid-cols-3 gap-3 pr-8">
                {hourCycle === "12" ? (
                  <WheelColumn
                    values={hours12}
                    value={get12Hour(draftTime)}
                    renderValue={(item) => pad2(item)}
                    onChange={handleChangeHour12}
                  />
                ) : (
                  <WheelColumn
                    values={hours24}
                    value={draftTime.getHours()}
                    renderValue={(item) => pad2(item)}
                    onChange={handleChangeHour24}
                  />
                )}

                <WheelColumn
                  values={minutes}
                  value={draftTime.getMinutes()}
                  renderValue={(item) => pad2(item)}
                  onChange={handleChangeMinute}
                />

                {hourCycle === "12" ? (
                  <WheelColumn
                    values={periodOptions}
                    value={getPeriod(draftTime)}
                    renderValue={(item) => item}
                    onChange={handleChangePeriod}
                  />
                ) : (
                  <div className="flex h-32 items-center justify-center text-xs font-medium text-muted-foreground">
                    24H
                  </div>
                )}
              </div>
            </div>
          )}
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

UiTime.displayName = "UiTime";

export { UiTime };
