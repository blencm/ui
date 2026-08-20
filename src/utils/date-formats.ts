export const dateFormats = {
  // ---------------------------------------------------------------------------
  // Localized date formats
  // ---------------------------------------------------------------------------

  /**
   * Localized short date.
   * Example with en-US: 06/04/2026
   */
  short: "P",

  /**
   * Localized medium date.
   * Example with en-US: Jun 4, 2026
   */
  medium: "PP",

  /**
   * Localized long date.
   * Example with en-US: June 4th, 2026
   */
  long: "PPP",

  /**
   * Localized full date.
   * Example with en-US: Thursday, June 4th, 2026
   */
  full: "PPPP",

  /**
   * Alias for the localized long date format.
   * Example with en-US: June 4th, 2026
   */
  demo: "PPP",

  // ---------------------------------------------------------------------------
  // API / database formats
  // ---------------------------------------------------------------------------

  /**
   * ISO date format, recommended for APIs and databases.
   * Example: 2026-06-04
   */
  iso: "yyyy-MM-dd",

  /**
   * ISO-like date and time format without timezone.
   * Example: 2026-06-04T14:30:00
   */
  isoDateTime: "yyyy-MM-dd'T'HH:mm:ss",

  /**
   * ISO-like date and time format with timezone offset.
   * Example: 2026-06-04T14:30:00-05:00
   */
  isoDateTimeWithZone: "yyyy-MM-dd'T'HH:mm:ssXXX",

  /**
   * SQL-style date and time format.
   * Example: 2026-06-04 14:30:00
   */
  sqlDateTime: "yyyy-MM-dd HH:mm:ss",

  /**
   * Compact numeric date format.
   * Example: 20260604
   */
  compact: "yyyyMMdd",

  /**
   * Compact numeric date and time format.
   * Example: 20260604143000
   */
  compactDateTime: "yyyyMMddHHmmss",

  // ---------------------------------------------------------------------------
  // Numeric date formats
  // ---------------------------------------------------------------------------

  /**
   * Latin America date format.
   * Example: 04/06/2026
   */
  latam: "dd/MM/yyyy",

  /**
   * United States date format.
   * Example: 06/04/2026
   */
  us: "MM/dd/yyyy",

  /**
   * Year, month, and day with slashes.
   * Example: 2026/06/04
   */
  ymdSlash: "yyyy/MM/dd",

  /**
   * Day, month, and year with slashes.
   * Example: 04/06/2026
   */
  dmySlash: "dd/MM/yyyy",

  /**
   * Month, day, and year with slashes.
   * Example: 06/04/2026
   */
  mdySlash: "MM/dd/yyyy",

  /**
   * Year, month, and day with dashes.
   * Example: 2026-06-04
   */
  ymdDash: "yyyy-MM-dd",

  /**
   * Day, month, and year with dashes.
   * Example: 04-06-2026
   */
  dmyDash: "dd-MM-yyyy",

  /**
   * Month, day, and year with dashes.
   * Example: 06-04-2026
   */
  mdyDash: "MM-dd-yyyy",

  /**
   * Alias for day, month, and year with dashes.
   * Example: 04-06-2026
   */
  dash: "dd-MM-yyyy",

  /**
   * Year, month, and day with dots.
   * Example: 2026.06.04
   */
  ymdDot: "yyyy.MM.dd",

  /**
   * Day, month, and year with dots.
   * Example: 04.06.2026
   */
  dmyDot: "dd.MM.yyyy",

  /**
   * Month, day, and year with dots.
   * Example: 06.04.2026
   */
  mdyDot: "MM.dd.yyyy",

  /**
   * Alias for day, month, and year with dots.
   * Example: 04.06.2026
   */
  dot: "dd.MM.yyyy",

  /**
   * Short year with slashes.
   * Example: 04/06/26
   */
  shortYearSlash: "dd/MM/yy",

  /**
   * Short year with dashes.
   * Example: 04-06-26
   */
  shortYearDash: "dd-MM-yy",

  /**
   * Short year with dots.
   * Example: 04.06.26
   */
  shortYearDot: "dd.MM.yy",

  // ---------------------------------------------------------------------------
  // Month name formats
  // ---------------------------------------------------------------------------

  /**
   * Date with abbreviated month name.
   * Example: 04 Jun 2026
   */
  shortMonth: "dd MMM yyyy",

  /**
   * Date with full month name.
   * Example: 04 June 2026
   */
  longMonth: "dd MMMM yyyy",

  /**
   * Month name first with abbreviated month.
   * Example: Jun 04, 2026
   */
  shortMonthFirst: "MMM dd, yyyy",

  /**
   * Month name first with full month.
   * Example: June 04, 2026
   */
  longMonthFirst: "MMMM dd, yyyy",

  /**
   * Ordinal day with abbreviated month.
   * Example: 4th Jun 2026
   */
  ordinalShortMonth: "do MMM yyyy",

  /**
   * Ordinal day with full month.
   * Example: 4th June 2026
   */
  ordinalLongMonth: "do MMMM yyyy",

  /**
   * Month and year with abbreviated month.
   * Example: Jun 2026
   */
  shortMonthYear: "MMM yyyy",

  /**
   * Month and year with full month.
   * Example: June 2026
   */
  monthYear: "MMMM yyyy",

  /**
   * Numeric month and year.
   * Example: 06/2026
   */
  numericMonthYear: "MM/yyyy",

  /**
   * Year and numeric month.
   * Example: 2026-06
   */
  yearMonth: "yyyy-MM",

  /**
   * Full month only.
   * Example: June
   */
  month: "MMMM",

  /**
   * Abbreviated month only.
   * Example: Jun
   */
  monthShort: "MMM",

  /**
   * Numeric month only.
   * Example: 06
   */
  monthNumber: "MM",

  /**
   * Numeric month only without leading zero.
   * Example: 6
   */
  monthNumberPlain: "M",

  // ---------------------------------------------------------------------------
  // Weekday formats
  // ---------------------------------------------------------------------------

  /**
   * Date with abbreviated weekday and month names.
   * Example: Thu, 04 Jun 2026
   */
  weekdayShort: "EEE, dd MMM yyyy",

  /**
   * Date with full weekday and month names.
   * Example: Thursday, 04 June 2026
   */
  weekdayLong: "EEEE, dd MMMM yyyy",

  /**
   * Full weekday with localized long date.
   * Example: Thursday, June 4th, 2026
   */
  weekdayFullLocalized: "EEEE, PPP",

  /**
   * Abbreviated weekday only.
   * Example: Thu
   */
  weekdayNameShort: "EEE",

  /**
   * Full weekday only.
   * Example: Thursday
   */
  weekdayNameLong: "EEEE",

  /**
   * Numeric ISO day of week.
   * Example: 4
   */
  weekdayNumber: "i",

  // ---------------------------------------------------------------------------
  // Day formats
  // ---------------------------------------------------------------------------

  /**
   * Day of month with leading zero.
   * Example: 04
   */
  day: "dd",

  /**
   * Day of month without leading zero.
   * Example: 4
   */
  dayPlain: "d",

  /**
   * Ordinal day of month.
   * Example: 4th
   */
  dayOrdinal: "do",

  /**
   * Day of year.
   * Example: 155
   */
  dayOfYear: "D",

  // ---------------------------------------------------------------------------
  // Year formats
  // ---------------------------------------------------------------------------

  /**
   * Full year.
   * Example: 2026
   */
  year: "yyyy",

  /**
   * Short year.
   * Example: 26
   */
  yearShort: "yy",

  // ---------------------------------------------------------------------------
  // Time formats
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
   * Localized short time.
   * Example with en-US: 2:30 PM
   */
  timeLocalizedShort: "p",

  /**
   * Localized long time.
   * Example with en-US: 2:30:45 PM
   */
  timeLocalizedLong: "pp",

  // ---------------------------------------------------------------------------
  // Date and time formats
  // ---------------------------------------------------------------------------

  /**
   * Date and time using 24-hour format.
   * Example: 04/06/2026 14:30
   */
  dateTime24: "dd/MM/yyyy HH:mm",

  /**
   * Date and time using 24-hour format with seconds.
   * Example: 04/06/2026 14:30:45
   */
  dateTime24Seconds: "dd/MM/yyyy HH:mm:ss",

  /**
   * Date and time using 12-hour format.
   * Example: 04/06/2026 02:30 PM
   */
  dateTime12: "dd/MM/yyyy hh:mm a",

  /**
   * Date and time using 12-hour format with seconds.
   * Example: 04/06/2026 02:30:45 PM
   */
  dateTime12Seconds: "dd/MM/yyyy hh:mm:ss a",

  /**
   * Month name date and 24-hour time.
   * Example: 04 June 2026 14:30
   */
  longDateTime24: "dd MMMM yyyy HH:mm",

  /**
   * Month name date and 12-hour time.
   * Example: 04 June 2026 02:30 PM
   */
  longDateTime12: "dd MMMM yyyy hh:mm a",

  /**
   * Full weekday date and 24-hour time.
   * Example: Thursday, 04 June 2026 14:30
   */
  weekdayDateTime24: "EEEE, dd MMMM yyyy HH:mm",

  /**
   * Full weekday date and 12-hour time.
   * Example: Thursday, 04 June 2026 02:30 PM
   */
  weekdayDateTime12: "EEEE, dd MMMM yyyy hh:mm a",

  /**
   * Localized short date and time.
   * Example with en-US: 06/04/2026, 2:30 PM
   */
  localizedDateTimeShort: "Pp",

  /**
   * Localized medium date and time.
   * Example with en-US: Jun 4, 2026, 2:30 PM
   */
  localizedDateTimeMedium: "PPp",

  /**
   * Localized long date and time.
   * Example with en-US: June 4th, 2026 at 2:30 PM
   */
  localizedDateTimeLong: "PPPp",

  /**
   * Localized full date and time.
   * Example with en-US: Thursday, June 4th, 2026 at 2:30 PM
   */
  localizedDateTimeFull: "PPPPp",

  // ---------------------------------------------------------------------------
  // Quarter formats
  // ---------------------------------------------------------------------------

  /**
   * Numeric quarter.
   * Example: 2
   */
  quarter: "Q",

  /**
   * Ordinal quarter.
   * Example: 2nd quarter
   */
  quarterOrdinal: "Qo 'quarter'",

  /**
   * Quarter and year.
   * Example: Q2 2026
   */
  quarterYear: "'Q'Q yyyy",

  /**
   * Ordinal quarter and year.
   * Example: 2nd quarter 2026
   */
  quarterOrdinalYear: "Qo 'quarter' yyyy",
} as const;

export type DateFormatKey = keyof typeof dateFormats;

export type DateFormatValue = DateFormatKey | (string & {});

export type DateFormatItem = {
  value: DateFormatKey;
  label: string;
  description: string;
  pattern: string;
};

export const dateFormatItems: DateFormatItem[] = [
  {
    value: "short",
    label: "Short",
    description: "Localized short date format.",
    pattern: dateFormats.short,
  },
  {
    value: "medium",
    label: "Medium",
    description: "Localized medium date format.",
    pattern: dateFormats.medium,
  },
  {
    value: "long",
    label: "Long",
    description: "Localized long date format.",
    pattern: dateFormats.long,
  },
  {
    value: "full",
    label: "Full",
    description: "Localized full date format.",
    pattern: dateFormats.full,
  },
  {
    value: "demo",
    label: "Demo",
    description: "Localized long date format (same as `long`).",
    pattern: dateFormats.demo,
  },
  {
    value: "iso",
    label: "ISO",
    description: "Recommended date format for APIs and databases.",
    pattern: dateFormats.iso,
  },
  {
    value: "isoDateTime",
    label: "ISO date time",
    description: "ISO-like date and time format without timezone.",
    pattern: dateFormats.isoDateTime,
  },
  {
    value: "isoDateTimeWithZone",
    label: "ISO date time with zone",
    description: "ISO-like date and time format with timezone offset.",
    pattern: dateFormats.isoDateTimeWithZone,
  },
  {
    value: "sqlDateTime",
    label: "SQL date time",
    description: "SQL-style date and time format.",
    pattern: dateFormats.sqlDateTime,
  },
  {
    value: "compact",
    label: "Compact",
    description: "Compact numeric date format without separators.",
    pattern: dateFormats.compact,
  },
  {
    value: "compactDateTime",
    label: "Compact date time",
    description: "Compact numeric date and time format without separators.",
    pattern: dateFormats.compactDateTime,
  },
  {
    value: "latam",
    label: "Latin America",
    description: "Common Latin America day/month/year format.",
    pattern: dateFormats.latam,
  },
  {
    value: "us",
    label: "United States",
    description: "Common United States month/day/year format.",
    pattern: dateFormats.us,
  },
  {
    value: "ymdSlash",
    label: "YMD slash",
    description: "Year, month, and day separated by slashes.",
    pattern: dateFormats.ymdSlash,
  },
  {
    value: "dmySlash",
    label: "DMY slash",
    description: "Day, month, and year separated by slashes.",
    pattern: dateFormats.dmySlash,
  },
  {
    value: "mdySlash",
    label: "MDY slash",
    description: "Month, day, and year separated by slashes.",
    pattern: dateFormats.mdySlash,
  },
  {
    value: "ymdDash",
    label: "YMD dash",
    description: "Year, month, and day separated by dashes.",
    pattern: dateFormats.ymdDash,
  },
  {
    value: "dmyDash",
    label: "DMY dash",
    description: "Day, month, and year separated by dashes.",
    pattern: dateFormats.dmyDash,
  },
  {
    value: "mdyDash",
    label: "MDY dash",
    description: "Month, day, and year separated by dashes.",
    pattern: dateFormats.mdyDash,
  },
  {
    value: "dash",
    label: "Dashed",
    description: "Alias for day, month, and year separated by dashes.",
    pattern: dateFormats.dash,
  },
  {
    value: "ymdDot",
    label: "YMD dot",
    description: "Year, month, and day separated by dots.",
    pattern: dateFormats.ymdDot,
  },
  {
    value: "dmyDot",
    label: "DMY dot",
    description: "Day, month, and year separated by dots.",
    pattern: dateFormats.dmyDot,
  },
  {
    value: "mdyDot",
    label: "MDY dot",
    description: "Month, day, and year separated by dots.",
    pattern: dateFormats.mdyDot,
  },
  {
    value: "dot",
    label: "Dotted",
    description: "Alias for day, month, and year separated by dots.",
    pattern: dateFormats.dot,
  },
  {
    value: "shortYearSlash",
    label: "Short year slash",
    description: "Day, month, and short year separated by slashes.",
    pattern: dateFormats.shortYearSlash,
  },
  {
    value: "shortYearDash",
    label: "Short year dash",
    description: "Day, month, and short year separated by dashes.",
    pattern: dateFormats.shortYearDash,
  },
  {
    value: "shortYearDot",
    label: "Short year dot",
    description: "Day, month, and short year separated by dots.",
    pattern: dateFormats.shortYearDot,
  },
  {
    value: "shortMonth",
    label: "Short month",
    description: "Date with abbreviated month name.",
    pattern: dateFormats.shortMonth,
  },
  {
    value: "longMonth",
    label: "Long month",
    description: "Date with full month name.",
    pattern: dateFormats.longMonth,
  },
  {
    value: "shortMonthFirst",
    label: "Short month first",
    description: "Month-first date with abbreviated month name.",
    pattern: dateFormats.shortMonthFirst,
  },
  {
    value: "longMonthFirst",
    label: "Long month first",
    description: "Month-first date with full month name.",
    pattern: dateFormats.longMonthFirst,
  },
  {
    value: "ordinalShortMonth",
    label: "Ordinal short month",
    description: "Ordinal day with abbreviated month name.",
    pattern: dateFormats.ordinalShortMonth,
  },
  {
    value: "ordinalLongMonth",
    label: "Ordinal long month",
    description: "Ordinal day with full month name.",
    pattern: dateFormats.ordinalLongMonth,
  },
  {
    value: "shortMonthYear",
    label: "Short month and year",
    description: "Abbreviated month name with year.",
    pattern: dateFormats.shortMonthYear,
  },
  {
    value: "monthYear",
    label: "Month and year",
    description: "Full month name with year.",
    pattern: dateFormats.monthYear,
  },
  {
    value: "numericMonthYear",
    label: "Numeric month and year",
    description: "Numeric month and year separated by slash.",
    pattern: dateFormats.numericMonthYear,
  },
  {
    value: "yearMonth",
    label: "Year and month",
    description: "Year and numeric month separated by dash.",
    pattern: dateFormats.yearMonth,
  },
  {
    value: "month",
    label: "Month",
    description: "Full month name only.",
    pattern: dateFormats.month,
  },
  {
    value: "monthShort",
    label: "Short month only",
    description: "Abbreviated month name only.",
    pattern: dateFormats.monthShort,
  },
  {
    value: "monthNumber",
    label: "Month number",
    description: "Numeric month with leading zero.",
    pattern: dateFormats.monthNumber,
  },
  {
    value: "monthNumberPlain",
    label: "Month number plain",
    description: "Numeric month without leading zero.",
    pattern: dateFormats.monthNumberPlain,
  },
  {
    value: "weekdayShort",
    label: "Short weekday",
    description: "Date with abbreviated weekday and month names.",
    pattern: dateFormats.weekdayShort,
  },
  {
    value: "weekdayLong",
    label: "Long weekday",
    description: "Date with full weekday and month names.",
    pattern: dateFormats.weekdayLong,
  },
  {
    value: "weekdayFullLocalized",
    label: "Weekday full localized",
    description: "Full weekday with localized long date.",
    pattern: dateFormats.weekdayFullLocalized,
  },
  {
    value: "weekdayNameShort",
    label: "Short weekday name",
    description: "Abbreviated weekday name only.",
    pattern: dateFormats.weekdayNameShort,
  },
  {
    value: "weekdayNameLong",
    label: "Long weekday name",
    description: "Full weekday name only.",
    pattern: dateFormats.weekdayNameLong,
  },
  {
    value: "weekdayNumber",
    label: "Weekday number",
    description: "ISO numeric day of week.",
    pattern: dateFormats.weekdayNumber,
  },
  {
    value: "day",
    label: "Day",
    description: "Day of month with leading zero.",
    pattern: dateFormats.day,
  },
  {
    value: "dayPlain",
    label: "Day plain",
    description: "Day of month without leading zero.",
    pattern: dateFormats.dayPlain,
  },
  {
    value: "dayOrdinal",
    label: "Day ordinal",
    description: "Ordinal day of month.",
    pattern: dateFormats.dayOrdinal,
  },
  {
    value: "dayOfYear",
    label: "Day of year",
    description: "Day number within the year.",
    pattern: dateFormats.dayOfYear,
  },
  {
    value: "year",
    label: "Year",
    description: "Full year.",
    pattern: dateFormats.year,
  },
  {
    value: "yearShort",
    label: "Short year",
    description: "Two-digit year.",
    pattern: dateFormats.yearShort,
  },
  {
    value: "time24",
    label: "Time 24h",
    description: "Time using 24-hour format.",
    pattern: dateFormats.time24,
  },
  {
    value: "time24Seconds",
    label: "Time 24h with seconds",
    description: "Time using 24-hour format with seconds.",
    pattern: dateFormats.time24Seconds,
  },
  {
    value: "time12",
    label: "Time 12h",
    description: "Time using 12-hour format.",
    pattern: dateFormats.time12,
  },
  {
    value: "time12Seconds",
    label: "Time 12h with seconds",
    description: "Time using 12-hour format with seconds.",
    pattern: dateFormats.time12Seconds,
  },
  {
    value: "timeLocalizedShort",
    label: "Localized short time",
    description: "Localized short time format.",
    pattern: dateFormats.timeLocalizedShort,
  },
  {
    value: "timeLocalizedLong",
    label: "Localized long time",
    description: "Localized long time format.",
    pattern: dateFormats.timeLocalizedLong,
  },
  {
    value: "dateTime24",
    label: "Date and time 24h",
    description: "Date with time using 24-hour format.",
    pattern: dateFormats.dateTime24,
  },
  {
    value: "dateTime24Seconds",
    label: "Date and time 24h with seconds",
    description: "Date with time using 24-hour format and seconds.",
    pattern: dateFormats.dateTime24Seconds,
  },
  {
    value: "dateTime12",
    label: "Date and time 12h",
    description: "Date with time using 12-hour format.",
    pattern: dateFormats.dateTime12,
  },
  {
    value: "dateTime12Seconds",
    label: "Date and time 12h with seconds",
    description: "Date with time using 12-hour format and seconds.",
    pattern: dateFormats.dateTime12Seconds,
  },
  {
    value: "longDateTime24",
    label: "Long date and time 24h",
    description: "Full month date with time using 24-hour format.",
    pattern: dateFormats.longDateTime24,
  },
  {
    value: "longDateTime12",
    label: "Long date and time 12h",
    description: "Full month date with time using 12-hour format.",
    pattern: dateFormats.longDateTime12,
  },
  {
    value: "weekdayDateTime24",
    label: "Weekday date and time 24h",
    description: "Full weekday date with time using 24-hour format.",
    pattern: dateFormats.weekdayDateTime24,
  },
  {
    value: "weekdayDateTime12",
    label: "Weekday date and time 12h",
    description: "Full weekday date with time using 12-hour format.",
    pattern: dateFormats.weekdayDateTime12,
  },
  {
    value: "localizedDateTimeShort",
    label: "Localized date time short",
    description: "Localized short date and time format.",
    pattern: dateFormats.localizedDateTimeShort,
  },
  {
    value: "localizedDateTimeMedium",
    label: "Localized date time medium",
    description: "Localized medium date and time format.",
    pattern: dateFormats.localizedDateTimeMedium,
  },
  {
    value: "localizedDateTimeLong",
    label: "Localized date time long",
    description: "Localized long date and time format.",
    pattern: dateFormats.localizedDateTimeLong,
  },
  {
    value: "localizedDateTimeFull",
    label: "Localized date time full",
    description: "Localized full date and time format.",
    pattern: dateFormats.localizedDateTimeFull,
  },
  {
    value: "quarter",
    label: "Quarter",
    description: "Numeric quarter only.",
    pattern: dateFormats.quarter,
  },
  {
    value: "quarterOrdinal",
    label: "Ordinal quarter",
    description: "Ordinal quarter only.",
    pattern: dateFormats.quarterOrdinal,
  },
  {
    value: "quarterYear",
    label: "Quarter and year",
    description: "Quarter with year.",
    pattern: dateFormats.quarterYear,
  },
  {
    value: "quarterOrdinalYear",
    label: "Ordinal quarter and year",
    description: "Ordinal quarter with year.",
    pattern: dateFormats.quarterOrdinalYear,
  },
];

export function resolveDateFormat(
  value?: DateFormatValue | null,
  fallback: DateFormatKey = "demo",
) {
  if (!value) return dateFormats[fallback];

  return dateFormats[value as DateFormatKey] ?? value;
}
