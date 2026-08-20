import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
  FieldError,
  FieldPath,
  FieldValues,
  RegisterOptions,
  useFormContext,
} from "react-hook-form";

import { Label } from "../Label/label";
import { cn } from "../../utils/utils";
import { SelectOption } from "../../utils/form-utils";

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue | null>(
  null,
);

type FieldRules<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = Omit<
  RegisterOptions<TFieldValues, TName>,
  "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled" | "size"
>;

function getErrorMessage(error?: FieldError): string | undefined {
  const message = error?.message;
  return typeof message === "string" ? message : undefined;
}

function normalizeSearchText(value: React.ReactNode) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}

function getDefaultOptionValue<TItem>(item: TItem): string {
  if (typeof item === "string") return item;

  if (item && typeof item === "object" && "value" in item) {
    return String((item as { value: unknown }).value ?? "");
  }

  return String(item ?? "");
}

function getDefaultOptionLabel<TItem>(item: TItem): React.ReactNode {
  if (item && typeof item === "object" && "label" in item) {
    return (item as { label: React.ReactNode }).label;
  }

  return getDefaultOptionValue(item);
}

function getNextEnabledIndex<TItem>(
  options: SelectOption<TItem>[],
  currentIndex: number,
  direction: 1 | -1,
) {
  if (!options.length) return -1;

  let nextIndex = currentIndex;

  for (let index = 0; index < options.length; index += 1) {
    nextIndex = (nextIndex + direction + options.length) % options.length;

    if (!options[nextIndex]?.disabled) {
      return nextIndex;
    }
  }

  return -1;
}

type FormItemContextValue = { id: string };

const FormItemContext = React.createContext<FormItemContextValue | null>(null);

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        ref={ref}
        className={cn("min-w-0 space-y-2 break-inside-avoid", className)}
        {...props}
      />
    </FormItemContext.Provider>
  );
});

FormItem.displayName = "FormItem";

const useFormField = () => {
  const generatedId = React.useId();
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const formContext = useFormContext();
  const id = itemContext?.id ?? generatedId;

  if (!fieldContext || !formContext) {
    return {
      id,
      formItemId: `${id}-form-item`,
      formDescriptionId: `${id}-form-item-description`,
      formMessageId: `${id}-form-item-message`,
      error: undefined,
    };
  }

  const fieldState = formContext.getFieldState(
    fieldContext.name,
    formContext.formState,
  );

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

const FormLabel = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});

FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<
  React.ComponentRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        error ? `${formDescriptionId} ${formMessageId}` : formDescriptionId
      }
      aria-invalid={Boolean(error)}
      {...props}
    />
  );
});

FormControl.displayName = "FormControl";

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? getErrorMessage(error as FieldError) : children;

  if (!body) return null;

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-[0.8rem] font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  );
});

FormMessage.displayName = "FormMessage";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-[0.8rem] text-muted-foreground", className)}
      {...props}
    />
  );
});

FormDescription.displayName = "FormDescription";

export {
  FormFieldContext,
  FormItemContext,
  FormItem,
  FormLabel,
  FormDescription,
  FormControl,
  FormMessage,
  type FieldRules,
  type FormFieldContextValue,
  getDefaultOptionValue,
  getDefaultOptionLabel,
  normalizeSearchText,
  getNextEnabledIndex,
  getErrorMessage,
  useFormField,
};
