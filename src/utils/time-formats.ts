export const timeFormats = {
  // ---------------------------------------------------------------------------
  // Localized time formats
  // ---------------------------------------------------------------------------

  /**
   * Localized short time.
   * Example with en-US: 2:30 PM
   */
  short: "p",

  /**
   * Localized medium time.
   * Example with en-US: 2:30:45 PM
   */
  medium: "pp",

  /**
   * Localized long time.
   * Example with en-US: 2:30:45 PM GMT-5
   */
  long: "ppp",

  /**
   * Localized full time.
   * Example with en-US: 2:30:45 PM GMT-05:00
   */
  full: "pppp",

  /**
   * Default time picker format.
   * Example: 14:30
   */
  demo: "HH:mm",

  // ---------------------------------------------------------------------------
  // API / database formats
  // ---------------------------------------------------------------------------

  /**
   * Recommended format for APIs when seconds are not required.
   * Example: 14:30
   */
  api: "HH:mm",

  /**
   * Recommended database time format.
   * Example: 14:30:00
   */
  database: "HH:mm:ss",

  /**
   * HTML time input compatible format.
   * Example: 14:30
   */
  input: "HH:mm",

  /**
   * ISO-like time format without timezone.
   * Example: 14:30:00
   */
  iso: "HH:mm:ss",

  /**
   * ISO-like time format with milliseconds.
   * Example: 14:30:00.000
   */
  isoMilliseconds: "HH:mm:ss.SSS",

  // ---------------------------------------------------------------------------
  // 24-hour formats
  // ---------------------------------------------------------------------------

  /**
   * Time using 24-hour format.
   * Example: 14:30
   */
  time24: "HH:mm",

  /**
   * Time using 24-hour format with seconds.
   * Example: 14:30:45
   */
  time24Seconds: "HH:mm:ss",

  /**
   * Time using 24-hour format with milliseconds.
   * Example: 14:30:45.123
   */
  time24Milliseconds: "HH:mm:ss.SSS",

  /**
   * Hour only using 24-hour format with leading zero.
   * Example: 09
   */
  hour24: "HH",

  /**
   * Hour only using 24-hour format without leading zero.
   * Example: 9
   */
  hour24Plain: "H",

  /**
   * Hour and minutes using 24-hour format.
   * Example: 14:30
   */
  hourMinute24: "HH:mm",

  /**
   * Hour, minutes, and seconds using 24-hour format.
   * Example: 14:30:45
   */
  hourMinuteSecond24: "HH:mm:ss",

  // ---------------------------------------------------------------------------
  // 12-hour formats
  // ---------------------------------------------------------------------------

  /**
   * Time using 12-hour format.
   * Example: 02:30 PM
   */
  time12: "hh:mm a",

  /**
   * Time using 12-hour format with seconds.
   * Example: 02:30:45 PM
   */
  time12Seconds: "hh:mm:ss a",

  /**
   * Time using 12-hour format with milliseconds.
   * Example: 02:30:45.123 PM
   */
  time12Milliseconds: "hh:mm:ss.SSS a",

  /**
   * Hour only using 12-hour format with leading zero.
   * Example: 02 PM
   */
  hour12: "hh a",

  /**
   * Hour only using 12-hour format without leading zero.
   * Example: 2 PM
   */
  hour12Plain: "h a",

  /**
   * Hour and minutes using 12-hour format.
   * Example: 02:30 PM
   */
  hourMinute12: "hh:mm a",

  /**
   * Hour, minutes, and seconds using 12-hour format.
   * Example: 02:30:45 PM
   */
  hourMinuteSecond12: "hh:mm:ss a",

  // ---------------------------------------------------------------------------
  // Compact formats
  // ---------------------------------------------------------------------------

  /**
   * Compact 24-hour time without separator.
   * Example: 1430
   */
  compact: "HHmm",

  /**
   * Compact 24-hour time with seconds.
   * Example: 143045
   */
  compactSeconds: "HHmmss",

  // ---------------------------------------------------------------------------
  // Individual parts
  // ---------------------------------------------------------------------------

  /**
   * Minutes only.
   * Example: 30
   */
  minutes: "mm",

  /**
   * Seconds only.
   * Example: 45
   */
  seconds: "ss",

  /**
   * AM/PM marker.
   * Example: PM
   */
  period: "a",
} as const;

export type TimeFormatKey = keyof typeof timeFormats;

export type TimeFormatValue = TimeFormatKey | (string & {});

export type TimeFormatItem = {
  value: TimeFormatKey;
  label: string;
  description: string;
  pattern: string;
};

const timeFormatMetadata: Record<
  TimeFormatKey,
  {
    label: string;
    description: string;
  }
> = {
  short: {
    label: "Short",
    description: "Localized short time format.",
  },
  medium: {
    label: "Medium",
    description: "Localized medium time format.",
  },
  long: {
    label: "Long",
    description: "Localized long time format.",
  },
  full: {
    label: "Full",
    description: "Localized full time format.",
  },
  demo: {
    label: "Demo",
    description: "Default time picker display format.",
  },
  api: {
    label: "API",
    description: "Recommended format for APIs when seconds are not required.",
  },
  database: {
    label: "Database",
    description: "Recommended database time format.",
  },
  input: {
    label: "Input",
    description: "HTML time input compatible format.",
  },
  iso: {
    label: "ISO",
    description: "ISO-like time format without timezone.",
  },
  isoMilliseconds: {
    label: "ISO milliseconds",
    description: "ISO-like time format with milliseconds.",
  },
  time24: {
    label: "Time 24h",
    description: "Time using 24-hour format.",
  },
  time24Seconds: {
    label: "Time 24h with seconds",
    description: "Time using 24-hour format with seconds.",
  },
  time24Milliseconds: {
    label: "Time 24h with milliseconds",
    description: "Time using 24-hour format with milliseconds.",
  },
  hour24: {
    label: "Hour 24h",
    description: "Hour only using 24-hour format with leading zero.",
  },
  hour24Plain: {
    label: "Hour 24h plain",
    description: "Hour only using 24-hour format without leading zero.",
  },
  hourMinute24: {
    label: "Hour and minute 24h",
    description: "Hour and minutes using 24-hour format.",
  },
  hourMinuteSecond24: {
    label: "Hour minute second 24h",
    description: "Hour, minutes, and seconds using 24-hour format.",
  },
  time12: {
    label: "Time 12h",
    description: "Time using 12-hour format.",
  },
  time12Seconds: {
    label: "Time 12h with seconds",
    description: "Time using 12-hour format with seconds.",
  },
  time12Milliseconds: {
    label: "Time 12h with milliseconds",
    description: "Time using 12-hour format with milliseconds.",
  },
  hour12: {
    label: "Hour 12h",
    description: "Hour only using 12-hour format with leading zero.",
  },
  hour12Plain: {
    label: "Hour 12h plain",
    description: "Hour only using 12-hour format without leading zero.",
  },
  hourMinute12: {
    label: "Hour and minute 12h",
    description: "Hour and minutes using 12-hour format.",
  },
  hourMinuteSecond12: {
    label: "Hour minute second 12h",
    description: "Hour, minutes, and seconds using 12-hour format.",
  },
  compact: {
    label: "Compact",
    description: "Compact 24-hour time without separator.",
  },
  compactSeconds: {
    label: "Compact with seconds",
    description: "Compact 24-hour time with seconds.",
  },
  minutes: {
    label: "Minutes",
    description: "Minutes only.",
  },
  seconds: {
    label: "Seconds",
    description: "Seconds only.",
  },
  period: {
    label: "Period",
    description: "AM/PM marker.",
  },
};

export const timeFormatItems: TimeFormatItem[] = (
  Object.keys(timeFormats) as TimeFormatKey[]
).map((value) => ({
  value,
  label: timeFormatMetadata[value].label,
  description: timeFormatMetadata[value].description,
  pattern: timeFormats[value],
}));

export function resolveTimeFormat(
  value?: TimeFormatValue | null,
  fallback: TimeFormatKey = "demo",
) {
  if (!value) return timeFormats[fallback];

  return timeFormats[value as TimeFormatKey] ?? value;
}
