import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import * as React from 'react';

import { cn } from '../../utils/utils';

const iconButtonVariants = cva(
  [
    'inline-flex shrink-0 items-center justify-center whitespace-nowrap',
    'font-medium transition-all duration-200 active:scale-95',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'cursor-pointer select-none',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0'
  ].join(' '),
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-primary bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost:
          'bg-transparent text-foreground shadow-none hover:bg-accent hover:text-accent-foreground',
        soft: 'bg-primary/10 text-primary shadow-none hover:bg-primary/15',
        softDestructive:
          'bg-destructive/10 text-destructive shadow-none hover:bg-destructive/15',
        success:
          'bg-emerald-600 text-white shadow-sm hover:bg-emerald-700 focus-visible:ring-emerald-500/40',
        softSuccess:
          'bg-emerald-500/10 text-emerald-700 shadow-none hover:bg-emerald-500/15 dark:text-emerald-400',
        warning:
          'bg-amber-500 text-white shadow-sm hover:bg-amber-600 focus-visible:ring-amber-500/40',
        softWarning:
          'bg-amber-500/10 text-amber-700 shadow-none hover:bg-amber-500/15 dark:text-amber-400',
        info: 'bg-sky-600 text-white shadow-sm hover:bg-sky-700 focus-visible:ring-sky-500/40',
        softInfo:
          'bg-sky-500/10 text-sky-700 shadow-none hover:bg-sky-500/15 dark:text-sky-400',
        glass:
          'border border-white/20 bg-white/10 text-foreground shadow-sm backdrop-blur-md hover:bg-white/20 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10'
      },
      size: {
        xs: 'h-7 w-7 [&_svg]:size-3.5',
        sm: 'h-8 w-8 [&_svg]:size-4',
        default: 'h-9 w-9 [&_svg]:size-4',
        lg: 'h-10 w-10 [&_svg]:size-5',
        xl: 'h-12 w-12 [&_svg]:size-5'
      },
      rounded: {
        default: 'rounded-md',
        sm: 'rounded-sm',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full'
      }
    },
    defaultVariants: {
      variant: 'ghost',
      size: 'default',
      rounded: 'default'
    }
  }
);

export type IconButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> &
  VariantProps<typeof iconButtonVariants> & {
    asChild?: boolean;
    loading?: boolean;
    loaderClassName?: string;
    children: React.ReactNode;
    'aria-label': string;
  };

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
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
      type = 'button',
      ...props
    },
    ref
  ) => {
    const classes = cn(
      iconButtonVariants({ variant, size, rounded }),
      loading && 'relative',
      className
    );
    const isDisabled = loading || disabled;

    if (asChild) {
      return (
        <Slot
          ref={ref}
          className={classes}
          aria-disabled={isDisabled}
          data-loading={loading ? 'true' : undefined}
          {...(props as React.ComponentPropsWithoutRef<typeof Slot>)}
        >
          {children}
        </Slot>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        className={classes}
        disabled={isDisabled}
        data-loading={loading ? 'true' : undefined}
        {...props}
      >
        {loading ? (
          <Loader2
            className={cn('animate-spin', loaderClassName)}
            aria-hidden="true"
          />
        ) : (
          children
        )}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

export { IconButton, iconButtonVariants };
