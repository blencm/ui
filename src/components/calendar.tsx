import * as React from "react";
import { DayPicker } from "react-day-picker";

import { cn } from "../utils/utils";
import { buttonVariants } from "./Button/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col gap-4 sm:flex-row sm:gap-x-4 sm:gap-y-0",

        month: "space-y-4",

        month_caption: "relative flex items-center justify-center pt-1",

        caption_label: "text-sm font-medium",

        nav: "flex items-center gap-1",

        button_previous: cn(
          buttonVariants({ variant: "outline" }),
          "absolute left-1 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),

        button_next: cn(
          buttonVariants({ variant: "outline" }),
          "absolute right-1 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),

        month_grid: "w-full border-collapse space-y-1",

        weekdays: "flex",

        weekday:
          "w-8 rounded-md text-[0.8rem] font-normal text-muted-foreground",

        weeks: "space-y-1",

        week: "mt-2 flex w-full",

        day: cn(
          "relative h-8 w-8 p-0 text-center text-sm focus-within:relative focus-within:z-20",
          props.mode === "range"
            ? "first:rounded-l-md last:rounded-r-md"
            : "rounded-md",
        ),

        day_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal",
        ),

        selected:
          "[&>button]:bg-primary [&>button]:text-primary-foreground [&>button:hover]:bg-primary [&>button:hover]:text-primary-foreground [&>button:focus]:bg-primary [&>button:focus]:text-primary-foreground",

        today: "[&>button]:bg-accent [&>button]:text-accent-foreground",

        outside:
          "text-muted-foreground opacity-50 [&>button]:text-muted-foreground",

        disabled:
          "text-muted-foreground opacity-50 [&>button]:cursor-not-allowed",

        range_start:
          "rounded-l-md [&>button]:rounded-l-md [&>button]:bg-primary [&>button]:text-primary-foreground",

        range_middle:
          "[&>button]:bg-accent [&>button]:text-accent-foreground [&>button]:rounded-none",

        range_end:
          "rounded-r-md [&>button]:rounded-r-md [&>button]:bg-primary [&>button]:text-primary-foreground",

        hidden: "invisible",

        ...classNames,
      }}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
