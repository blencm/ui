'use client';

import * as React from 'react';
import { Asterisk } from 'lucide-react';

import { Input, type InputProps } from '../input';
import { Label } from '../Label/label';
import { cn } from '../../utils/utils';

export interface UiInputProps extends Omit<InputProps, 'id'> {
  label?: React.ReactNode;
  errorMessage?: string;
  htmlFormItemId?: string;
  requiredLabel?: boolean;
  requiredLabelClassName?: string;
  containerClassName?: string;
  labelClassName?: string;
  messageClassName?: string;
}

const UiInput = React.forwardRef<HTMLInputElement, UiInputProps>(
  (
    {
      label,
      errorMessage,
      htmlFormItemId,
      requiredLabel,
      requiredLabelClassName,
      containerClassName,
      labelClassName,
      messageClassName,
      invalid,
      className,
      ...inputProps
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = htmlFormItemId ?? generatedId;
    const messageId = `${inputId}-message`;
    const hasError = Boolean(errorMessage || invalid);

    return (
      <div className={cn('w-full min-w-0 space-y-1.5 break-inside-avoid', containerClassName)}>
        {label ? (
          <Label
            className={cn(
              'inline-flex items-start gap-0.5 text-sm font-medium',
              hasError && 'text-destructive',
              labelClassName
            )}
            htmlFor={inputId}
          >
            <span>{label}</span>
            {requiredLabel ? (
              <Asterisk
                aria-hidden="true"
                className={cn(
                  'mt-0.5 h-3 w-3 shrink-0 text-red-500',
                  requiredLabelClassName
                )}
              />
            ) : null}
          </Label>
        ) : null}

        <Input
          {...inputProps}
          ref={ref}
          id={inputId}
          invalid={hasError}
          aria-invalid={hasError || undefined}
          aria-describedby={errorMessage ? messageId : undefined}
          className={className}
        />

        {errorMessage ? (
          <p
            id={messageId}
            className={cn('text-sm font-medium text-destructive', messageClassName)}
          >
            {errorMessage}
          </p>
        ) : null}
      </div>
    );
  }
);

UiInput.displayName = 'UiInput';

export { UiInput };
