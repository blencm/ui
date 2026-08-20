
import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/dialog";
import { cn } from "@/utils/utils";

type DialogMaxWidth =
  | 'content'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | number;

export type UiDialogProps = {
  children: React.ReactNode;
  actions?: React.ReactNode;
  title?: string;
  subTitle?: string;
  open: boolean;
  setOpen?: (v: boolean) => void;
  maxWidth?: DialogMaxWidth;
  fullWidth?: boolean;
  scroll?: 'body' | 'paper';
};

const maxWidthClasses: Record<Exclude<DialogMaxWidth, number>, string> = {
  content: 'w-[calc(100vw-1rem)] sm:w-fit sm:max-w-[calc(100vw-2rem)]',
  xs: 'w-[calc(100vw-1rem)] sm:max-w-xs',
  sm: 'w-[calc(100vw-1rem)] sm:max-w-sm',
  md: 'w-[calc(100vw-1rem)] sm:max-w-md',
  lg: 'w-[calc(100vw-1rem)] sm:max-w-lg',
  xl: 'w-[calc(100vw-1rem)] sm:max-w-xl',
  '2xl': 'w-[calc(100vw-1rem)] sm:max-w-2xl',
  '3xl': 'w-[calc(100vw-1rem)] sm:max-w-3xl'
};

const normalizeMaxWidth = (
  maxWidth?: unknown,
  fallback: Exclude<DialogMaxWidth, number> = '2xl'
): Exclude<DialogMaxWidth, number> => {
  if (
    maxWidth === 'content' ||
    maxWidth === 'xs' ||
    maxWidth === 'sm' ||
    maxWidth === 'md' ||
    maxWidth === 'lg' ||
    maxWidth === 'xl' ||
    maxWidth === '2xl' ||
    maxWidth === '3xl'
  ) {
    return maxWidth;
  }

  return fallback;
};

export const UiDialog = (props: UiDialogProps) => {
  const {
    children,
    title,
    subTitle,
    open,
    setOpen,
    maxWidth = '2xl',
    fullWidth,
    scroll,
    actions
  } = props;

  const dialogMaxWidth = normalizeMaxWidth(
    maxWidth,
    fullWidth ? '2xl' : 'content'
  );

  const handleOpenChange = React.useCallback(
    (nextOpen: boolean) => {
      setOpen?.(nextOpen);
    },
    [setOpen]
  );

  return (
    <Dialog open={open} onOpenChange={handleOpenChange} modal>
      <DialogContent
        className={cn(
          'max-h-[calc(100vh-2rem)] overflow-hidden rounded-xl p-0',
          maxWidthClasses[dialogMaxWidth]
        )}
      >
        <div className="flex max-h-[calc(100vh-2rem)] min-w-0 flex-col">
          {(title || subTitle || actions) && (
            <DialogHeader className="shrink-0 space-y-1 px-5 pt-5 text-start">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  {title ? (
                    <DialogTitle className="text-xl font-semibold">
                      {title}
                    </DialogTitle>
                  ) : null}

                  {subTitle ? (
                    <DialogDescription className="mt-1">
                      {subTitle}
                    </DialogDescription>
                  ) : null}
                </div>

                {actions ? <div className="shrink-0">{actions}</div> : null}
              </div>
            </DialogHeader>
          )}

          <div
            className={cn(
              'min-w-0 flex-1 px-5 py-5',
              scroll === 'paper' ? 'overflow-y-auto' : 'overflow-visible'
            )}
          >
            {children}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};