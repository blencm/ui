import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import * as React from "react";

import { cn } from "../../utils/utils";

const buttonVariants = cva(
  [
    "inline-flex min-w-max shrink-0 items-center justify-center whitespace-nowrap",
    "rounded-md text-sm font-medium",
    "transition-all duration-200 active:scale-95",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    "cursor-pointer select-none",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "bg-transparent hover:bg-accent hover:text-accent-foreground",
        link: "h-auto p-0 text-primary underline-offset-4 shadow-none hover:underline",

        success:
          "bg-emerald-600 text-white shadow-sm hover:bg-emerald-700 focus-visible:ring-emerald-500/40",
        warning:
          "bg-amber-500 text-white shadow-sm hover:bg-amber-600 focus-visible:ring-amber-500/40",
        info: "bg-sky-600 text-white shadow-sm hover:bg-sky-700 focus-visible:ring-sky-500/40",
        dark: "bg-zinc-950 text-white shadow-sm hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200",
        light:
          "border border-zinc-200 bg-white text-zinc-900 shadow-sm hover:bg-zinc-50",

        soft: "bg-primary/10 text-primary shadow-none hover:bg-primary/15",
        softDestructive:
          "bg-destructive/10 text-destructive shadow-none hover:bg-destructive/15",
        softSuccess:
          "bg-emerald-500/10 text-emerald-700 shadow-none hover:bg-emerald-500/15 dark:text-emerald-400",
        softWarning:
          "bg-amber-500/10 text-amber-700 shadow-none hover:bg-amber-500/15 dark:text-amber-400",
        softInfo: "bg-sky-500/10 text-sky-700 shadow-none hover:bg-sky-500/15",

        outlineDestructive:
          "border border-destructive/40 bg-background text-destructive shadow-sm hover:bg-destructive/10",
        outlineSuccess:
          "border border-emerald-500/40 bg-background text-emerald-700 shadow-sm hover:bg-emerald-500/10 dark:text-emerald-400",
        outlineWarning:
          "border border-amber-500/40 bg-background text-amber-700 shadow-sm hover:bg-amber-500/10 dark:text-amber-400",
        outlineInfo:
          "border border-sky-500/40 bg-background text-sky-700 shadow-sm hover:bg-sky-500/10",

        gradient:
          "bg-gradient-to-r from-primary via-primary/90 to-primary/70 text-primary-foreground shadow-md hover:brightness-105 hover:shadow-lg",
        gradientSuccess:
          "bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-md hover:brightness-105 hover:shadow-lg",
        gradientWarning:
          "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md hover:brightness-105 hover:shadow-lg",
        gradientDanger:
          "bg-gradient-to-r from-red-600 to-rose-500 text-white shadow-md hover:brightness-105 hover:shadow-lg",
        premium:
          "bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 text-white shadow-lg shadow-fuchsia-500/20 hover:brightness-110 hover:shadow-xl hover:shadow-fuchsia-500/30",

        glass:
          "border border-white/20 bg-white/10 text-foreground shadow-sm backdrop-blur-md hover:bg-white/20 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10",
        neon: "bg-zinc-950 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_24px_rgba(59,130,246,0.45)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_0_32px_rgba(59,130,246,0.65)]",

        dangerGhost: "bg-transparent text-destructive hover:bg-destructive/10",
        successGhost:
          "bg-transparent text-emerald-700 hover:bg-emerald-500/10 dark:text-emerald-400",
        warningGhost:
          "bg-transparent text-amber-700 hover:bg-amber-500/10 dark:text-amber-400",
        infoGhost: "bg-transparent text-sky-700 hover:bg-sky-500/10",
      },

      size: {
        default: "h-9 px-3.5 text-sm",

        "2xs": "h-7 px-2 text-xs",
        xs: "h-8 px-2.5 text-xs",
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-3.5 text-sm",
        lg: "h-11 px-4 text-base",
        xl: "h-12 px-4 text-base",
        "2xl": "h-14 px-5 text-lg",

        icon: "h-9 w-9",
        iconXs: "h-7 w-7",
        iconSm: "h-8 w-8",
        iconMd: "h-10 w-10",
        iconLg: "h-11 w-11",
        iconXl: "h-12 w-12",
        icon2xl: "h-14 w-14",
      },
      rounded: {
        default: "rounded-md",
        sm: "rounded-sm",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
export type ButtonVariant = ButtonVariantProps["variant"];
export type ButtonSize = ButtonVariantProps["size"];
export type ButtonRounded = ButtonVariantProps["rounded"];

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    loading?: boolean;
    loaderClassName?: string;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      rounded,
      asChild = false,
      loading = false,
      loaderClassName,
      children,
      disabled,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const classes = cn(
      buttonVariants({ variant, size, rounded }),
      loading && "relative",
      className,
    );

    const isDisabled = loading || disabled;
    const Comp = asChild ? Slot : "button";

    const content = (
      <span className="inline-flex min-w-max flex-row items-center justify-center gap-2 whitespace-nowrap leading-none">
        {loading ? (
          <Loader2
            className={cn("size-4 shrink-0 animate-spin", loaderClassName)}
            aria-hidden="true"
          />
        ) : null}

        {children}
      </span>
    );

    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : type}
        className={classes}
        disabled={asChild ? undefined : isDisabled}
        aria-disabled={asChild ? isDisabled : undefined}
        aria-busy={loading ? true : undefined}
        data-loading={loading ? "true" : undefined}
        {...props}
      >
        {asChild ? children : content}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
