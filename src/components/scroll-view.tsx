import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import * as React from "react";

import { cn } from "../utils/utils";
import { ScrollBar } from "./scroll-area";

export type ScrollViewFit = "fill" | "viewport" | "content";
export type ScrollViewOrientation = "vertical" | "horizontal" | "both";

export type ScrollViewProps = React.ComponentPropsWithoutRef<
  typeof ScrollAreaPrimitive.Root
> & {
  /** How the view sizes itself inside the parent. */
  fit?: ScrollViewFit;
  /** Scroll axis. */
  orientation?: ScrollViewOrientation;
  maxHeight?: number | string;
  maxWidth?: number | string;
};

function toCssSize(value?: number | string) {
  if (value == null) return undefined;
  return typeof value === "number" ? `${value}px` : value;
}

const ScrollView = React.forwardRef<
  React.ComponentRef<typeof ScrollAreaPrimitive.Root>,
  ScrollViewProps
>(
  (
    {
      className,
      children,
      fit = "fill",
      orientation = "vertical",
      maxHeight,
      maxWidth,
      type = "hover",
      style,
      ...props
    },
    ref,
  ) => {
    const showVertical = orientation === "vertical" || orientation === "both";
    const showHorizontal =
      orientation === "horizontal" || orientation === "both";

    return (
      <ScrollAreaPrimitive.Root
        ref={ref}
        type={type}
        data-fit={fit}
        data-orientation={orientation}
        style={{
          ...style,
          maxHeight: toCssSize(maxHeight) ?? style?.maxHeight,
          maxWidth: toCssSize(maxWidth) ?? style?.maxWidth,
        }}
        className={cn(
          "relative min-h-0 min-w-0 overflow-hidden",
          fit === "fill" && "h-full min-h-0 flex-1",
          fit === "viewport" && "h-dvh max-h-dvh w-full",
          fit === "content" && "w-full max-h-[min(24rem,100%)]",
          className,
        )}
        {...props}
      >
        <ScrollAreaPrimitive.Viewport
          className={cn(
            "h-full w-full rounded-[inherit] overscroll-contain",
            "focus-visible:ring-ring/40 focus-visible:ring-2 focus-visible:outline-none",
            "[&>div]:min-h-0 [&>div]:min-w-0",
            orientation === "horizontal" && "[&>div]:block [&>div]:w-max",
          )}
        >
          {children}
        </ScrollAreaPrimitive.Viewport>
        {showVertical ? <ScrollBar orientation="vertical" /> : null}
        {showHorizontal ? <ScrollBar orientation="horizontal" /> : null}
        <ScrollAreaPrimitive.Corner />
      </ScrollAreaPrimitive.Root>
    );
  },
);
ScrollView.displayName = "ScrollView";

export { ScrollView };
