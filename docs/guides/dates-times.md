# Dates, times & localization

Understand display formats, stored values, bounds and locale behavior.

## Value contracts

Display formatting and storage formatting are separate. Standalone pickers always emit Date or undefined. The React Hook Form wrappers can convert to a formatted string before updating form state.

| Component | Default storage | Callback |
| --- | --- | --- |
| UiDate / UiTime | Application controlled Date, string or null input | onChange(Date \| undefined) |
| FormDate | Date \| null (valueMode="date") | onChange receives Date; onChangeValue receives stored value |
| FormTime | string \| null, formatted as time24 | onChange receives Date; onChangeValue receives stored value |

## Store a date string and a time string

Choose the form schema and defaults to match valueMode. In string mode clearing stores null. The following form stores an ISO date and a 24-hour time while showing localized controls.


```tsx
import { useForm } from 'react-hook-form';
import { es } from 'date-fns/locale';
import { Button, Form, FormDate, FormTime } from '@blencm/ui';

type Booking = { date: string | null; time: string | null };
export function BookingForm() {
  const form = useForm<Booking>({ defaultValues: { date: null, time: null } });
  return <Form methods={form} onSubmit={values => console.log(values)}>
    <FormDate control={form.control} name="date" label="Appointment date"
      valueMode="string" valueFormat="iso" dateFormat="latam" locale={es}
      startDate={new Date(2026, 0, 1)} endDate={new Date(2026, 11, 31)} />
    <FormTime control={form.control} name="time" label="Appointment time"
      valueMode="string" valueFormat="time24" timeFormat="time12"
      hourCycle="12" minuteStep={15} minTime="09:00" maxTime="18:00" />
    <Button type="submit">Save appointment</Button>
  </Form>;
}
```

## Patterns and presets

dateFormat/timeFormat select a display preset or a date-fns pattern. valueFormat parses incoming strings and formats stored strings in form wrappers. formatPattern and valueFormatPattern take precedence over those presets.

The complete preset lists appear below. These names are accepted by props; the internal preset maps are not exported from the public package entry. Arbitrary date-fns patterns are also accepted.

| Use | Preset | Pattern |
| --- | --- | --- |
| API date | iso | yyyy-MM-dd |
| Latin America date | latam | dd/MM/yyyy |
| US date | us | MM/dd/yyyy |
| Localized date | short / medium / long / full | P / PP / PPP / PPPP |
| 24-hour time | time24 | HH:mm |
| 12-hour time | time12 | hh:mm a |
| Time with seconds | time24Seconds | HH:mm:ss |

## Bounds and picker modes

Dates support startDate/endDate and the aliases start_date/end_date. The camel case props take precedence. Use Date objects or strings matching the configured value format.

Time controls support minuteStep, minTime/maxTime and hourCycle. Passing options changes the wheel picker to a simple list with value, optional label and disabled entries.

Calendar is also available directly for single, multiple or range selection. Its selected/onSelect types depend on mode.

## Locales and time zones

Import a Locale object from date-fns/locale and pass it to date/time controls. Declare date-fns directly in your application when importing it. Localized text does not automatically translate your labels, placeholders, errors or table pagination labels.

Pickers work with JavaScript Date and local calendar/time values. They do not assign an application time zone. Decide whether your API expects a calendar date, local time or timestamp before serializing; converting a calendar date to UTC can change the day.

## Complete date presets

| Preset | Pattern | Description |
| --- | --- | --- |
| short | P | Localized short date.<br>Example with en-US: 06/04/2026 |
| medium | PP | Localized medium date.<br>Example with en-US: Jun 4, 2026 |
| long | PPP | Localized long date.<br>Example with en-US: June 4th, 2026 |
| full | PPPP | Localized full date.<br>Example with en-US: Thursday, June 4th, 2026 |
| demo | PPP | Alias for the localized long date format.<br>Example with en-US: June 4th, 2026 |
| iso | yyyy-MM-dd | ISO date format, recommended for APIs and databases.<br>Example: 2026-06-04 |
| isoDateTime | yyyy-MM-dd'T'HH:mm:ss | ISO-like date and time format without timezone.<br>Example: 2026-06-04T14:30:00 |
| isoDateTimeWithZone | yyyy-MM-dd'T'HH:mm:ssXXX | ISO-like date and time format with timezone offset.<br>Example: 2026-06-04T14:30:00-05:00 |
| sqlDateTime | yyyy-MM-dd HH:mm:ss | SQL-style date and time format.<br>Example: 2026-06-04 14:30:00 |
| compact | yyyyMMdd | Compact numeric date format.<br>Example: 20260604 |
| compactDateTime | yyyyMMddHHmmss | Compact numeric date and time format.<br>Example: 20260604143000 |
| latam | dd/MM/yyyy | Latin America date format.<br>Example: 04/06/2026 |
| us | MM/dd/yyyy | United States date format.<br>Example: 06/04/2026 |
| ymdSlash | yyyy/MM/dd | Year, month, and day with slashes.<br>Example: 2026/06/04 |
| dmySlash | dd/MM/yyyy | Day, month, and year with slashes.<br>Example: 04/06/2026 |
| mdySlash | MM/dd/yyyy | Month, day, and year with slashes.<br>Example: 06/04/2026 |
| ymdDash | yyyy-MM-dd | Year, month, and day with dashes.<br>Example: 2026-06-04 |
| dmyDash | dd-MM-yyyy | Day, month, and year with dashes.<br>Example: 04-06-2026 |
| mdyDash | MM-dd-yyyy | Month, day, and year with dashes.<br>Example: 06-04-2026 |
| dash | dd-MM-yyyy | Alias for day, month, and year with dashes.<br>Example: 04-06-2026 |
| ymdDot | yyyy.MM.dd | Year, month, and day with dots.<br>Example: 2026.06.04 |
| dmyDot | dd.MM.yyyy | Day, month, and year with dots.<br>Example: 04.06.2026 |
| mdyDot | MM.dd.yyyy | Month, day, and year with dots.<br>Example: 06.04.2026 |
| dot | dd.MM.yyyy | Alias for day, month, and year with dots.<br>Example: 04.06.2026 |
| shortYearSlash | dd/MM/yy | Short year with slashes.<br>Example: 04/06/26 |
| shortYearDash | dd-MM-yy | Short year with dashes.<br>Example: 04-06-26 |
| shortYearDot | dd.MM.yy | Short year with dots.<br>Example: 04.06.26 |
| shortMonth | dd MMM yyyy | Date with abbreviated month name.<br>Example: 04 Jun 2026 |
| longMonth | dd MMMM yyyy | Date with full month name.<br>Example: 04 June 2026 |
| shortMonthFirst | MMM dd, yyyy | Month name first with abbreviated month.<br>Example: Jun 04, 2026 |
| longMonthFirst | MMMM dd, yyyy | Month name first with full month.<br>Example: June 04, 2026 |
| ordinalShortMonth | do MMM yyyy | Ordinal day with abbreviated month.<br>Example: 4th Jun 2026 |
| ordinalLongMonth | do MMMM yyyy | Ordinal day with full month.<br>Example: 4th June 2026 |
| shortMonthYear | MMM yyyy | Month and year with abbreviated month.<br>Example: Jun 2026 |
| monthYear | MMMM yyyy | Month and year with full month.<br>Example: June 2026 |
| numericMonthYear | MM/yyyy | Numeric month and year.<br>Example: 06/2026 |
| yearMonth | yyyy-MM | Year and numeric month.<br>Example: 2026-06 |
| month | MMMM | Full month only.<br>Example: June |
| monthShort | MMM | Abbreviated month only.<br>Example: Jun |
| monthNumber | MM | Numeric month only.<br>Example: 06 |
| monthNumberPlain | M | Numeric month only without leading zero.<br>Example: 6 |
| weekdayShort | EEE, dd MMM yyyy | Date with abbreviated weekday and month names.<br>Example: Thu, 04 Jun 2026 |
| weekdayLong | EEEE, dd MMMM yyyy | Date with full weekday and month names.<br>Example: Thursday, 04 June 2026 |
| weekdayFullLocalized | EEEE, PPP | Full weekday with localized long date.<br>Example: Thursday, June 4th, 2026 |
| weekdayNameShort | EEE | Abbreviated weekday only.<br>Example: Thu |
| weekdayNameLong | EEEE | Full weekday only.<br>Example: Thursday |
| weekdayNumber | i | Numeric ISO day of week.<br>Example: 4 |
| day | dd | Day of month with leading zero.<br>Example: 04 |
| dayPlain | d | Day of month without leading zero.<br>Example: 4 |
| dayOrdinal | do | Ordinal day of month.<br>Example: 4th |
| dayOfYear | D | Day of year.<br>Example: 155 |
| year | yyyy | Full year.<br>Example: 2026 |
| yearShort | yy | Short year.<br>Example: 26 |
| time24 | HH:mm | Time using 24-hour format.<br>Example: 14:30 |
| time24Seconds | HH:mm:ss | Time using 24-hour format with seconds.<br>Example: 14:30:45 |
| time12 | hh:mm a | Time using 12-hour format.<br>Example: 02:30 PM |
| time12Seconds | hh:mm:ss a | Time using 12-hour format with seconds.<br>Example: 02:30:45 PM |
| timeLocalizedShort | p | Localized short time.<br>Example with en-US: 2:30 PM |
| timeLocalizedLong | pp | Localized long time.<br>Example with en-US: 2:30:45 PM |
| dateTime24 | dd/MM/yyyy HH:mm | Date and time using 24-hour format.<br>Example: 04/06/2026 14:30 |
| dateTime24Seconds | dd/MM/yyyy HH:mm:ss | Date and time using 24-hour format with seconds.<br>Example: 04/06/2026 14:30:45 |
| dateTime12 | dd/MM/yyyy hh:mm a | Date and time using 12-hour format.<br>Example: 04/06/2026 02:30 PM |
| dateTime12Seconds | dd/MM/yyyy hh:mm:ss a | Date and time using 12-hour format with seconds.<br>Example: 04/06/2026 02:30:45 PM |
| longDateTime24 | dd MMMM yyyy HH:mm | Month name date and 24-hour time.<br>Example: 04 June 2026 14:30 |
| longDateTime12 | dd MMMM yyyy hh:mm a | Month name date and 12-hour time.<br>Example: 04 June 2026 02:30 PM |
| weekdayDateTime24 | EEEE, dd MMMM yyyy HH:mm | Full weekday date and 24-hour time.<br>Example: Thursday, 04 June 2026 14:30 |
| weekdayDateTime12 | EEEE, dd MMMM yyyy hh:mm a | Full weekday date and 12-hour time.<br>Example: Thursday, 04 June 2026 02:30 PM |
| localizedDateTimeShort | Pp | Localized short date and time.<br>Example with en-US: 06/04/2026, 2:30 PM |
| localizedDateTimeMedium | PPp | Localized medium date and time.<br>Example with en-US: Jun 4, 2026, 2:30 PM |
| localizedDateTimeLong | PPPp | Localized long date and time.<br>Example with en-US: June 4th, 2026 at 2:30 PM |
| localizedDateTimeFull | PPPPp | Localized full date and time.<br>Example with en-US: Thursday, June 4th, 2026 at 2:30 PM |
| quarter | Q | Numeric quarter.<br>Example: 2 |
| quarterOrdinal | Qo 'quarter' | Ordinal quarter.<br>Example: 2nd quarter |
| quarterYear | 'Q'Q yyyy | Quarter and year.<br>Example: Q2 2026 |
| quarterOrdinalYear | Qo 'quarter' yyyy | Ordinal quarter and year.<br>Example: 2nd quarter 2026 |

## Complete time presets

| Preset | Pattern | Description |
| --- | --- | --- |
| short | p | Localized short time.<br>Example with en-US: 2:30 PM |
| medium | pp | Localized medium time.<br>Example with en-US: 2:30:45 PM |
| long | ppp | Localized long time.<br>Example with en-US: 2:30:45 PM GMT-5 |
| full | pppp | Localized full time.<br>Example with en-US: 2:30:45 PM GMT-05:00 |
| demo | HH:mm | Default time picker format.<br>Example: 14:30 |
| api | HH:mm | Recommended format for APIs when seconds are not required.<br>Example: 14:30 |
| database | HH:mm:ss | Recommended database time format.<br>Example: 14:30:00 |
| input | HH:mm | HTML time input compatible format.<br>Example: 14:30 |
| iso | HH:mm:ss | ISO-like time format without timezone.<br>Example: 14:30:00 |
| isoMilliseconds | HH:mm:ss.SSS | ISO-like time format with milliseconds.<br>Example: 14:30:00.000 |
| time24 | HH:mm | Time using 24-hour format.<br>Example: 14:30 |
| time24Seconds | HH:mm:ss | Time using 24-hour format with seconds.<br>Example: 14:30:45 |
| time24Milliseconds | HH:mm:ss.SSS | Time using 24-hour format with milliseconds.<br>Example: 14:30:45.123 |
| hour24 | HH | Hour only using 24-hour format with leading zero.<br>Example: 09 |
| hour24Plain | H | Hour only using 24-hour format without leading zero.<br>Example: 9 |
| hourMinute24 | HH:mm | Hour and minutes using 24-hour format.<br>Example: 14:30 |
| hourMinuteSecond24 | HH:mm:ss | Hour, minutes, and seconds using 24-hour format.<br>Example: 14:30:45 |
| time12 | hh:mm a | Time using 12-hour format.<br>Example: 02:30 PM |
| time12Seconds | hh:mm:ss a | Time using 12-hour format with seconds.<br>Example: 02:30:45 PM |
| time12Milliseconds | hh:mm:ss.SSS a | Time using 12-hour format with milliseconds.<br>Example: 02:30:45.123 PM |
| hour12 | hh a | Hour only using 12-hour format with leading zero.<br>Example: 02 PM |
| hour12Plain | h a | Hour only using 12-hour format without leading zero.<br>Example: 2 PM |
| hourMinute12 | hh:mm a | Hour and minutes using 12-hour format.<br>Example: 02:30 PM |
| hourMinuteSecond12 | hh:mm:ss a | Hour, minutes, and seconds using 12-hour format.<br>Example: 02:30:45 PM |
| compact | HHmm | Compact 24-hour time without separator.<br>Example: 1430 |
| compactSeconds | HHmmss | Compact 24-hour time with seconds.<br>Example: 143045 |
| minutes | mm | Minutes only.<br>Example: 30 |
| seconds | ss | Seconds only.<br>Example: 45 |
| period | a | AM/PM marker.<br>Example: PM |

## Related components

- [UiDate](https://ui.blencm.com/ui-date)
- [UiTime](https://ui.blencm.com/ui-time)
- [FormDate](https://ui.blencm.com/form-date)
- [FormTime](https://ui.blencm.com/form-time)
- [Calendar](https://ui.blencm.com/calendar)

