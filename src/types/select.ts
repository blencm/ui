export type SelectVariantProps =
  | 'outline'
  | 'soft'
  | 'ghost'
  | 'filled'
  | 'flushed'
  | 'unstyled'
  | 'link';

export const selectVariants: Record<SelectVariantProps, string> = {
  outline:
    'rounded-md border border-input bg-input backdrop-blur-sm shadow-sm hover:border-primary/60 focus:border-primary focus:ring-2 focus:ring-primary/20',
  soft: 'rounded-md border border-transparent bg-muted/60 shadow-sm hover:bg-muted focus:bg-input/80 focus:ring-2 focus:ring-primary/20',
  ghost:
    'rounded-md border border-transparent bg-transparent hover:bg-muted/50 focus:ring-2 focus:ring-ring',
  filled:
    'rounded-md border border-input bg-muted/70 shadow-inner hover:bg-muted focus:bg-input/70 focus:ring-2 focus:ring-primary/20',
  flushed:
    'rounded-none border-0 border-b border-input px-0 shadow-none focus:border-b-2 focus:border-primary focus:ring-0',
  unstyled: 'border-0 shadow-none focus:ring-0',
  link: 'h-auto border-0 bg-transparent p-0 text-primary shadow-none underline-offset-4 focus:underline focus:ring-0'
} as const;

export type SelectVariant = keyof typeof selectVariants;
export const variants: Record<SelectVariant, string> = selectVariants;
