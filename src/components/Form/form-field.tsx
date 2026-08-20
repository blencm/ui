import * as React from "react";
import { Asterisk } from "lucide-react";
import {
  Control,
  Controller,
  FieldError,
  FieldPath,
  FieldPathValue,
  FieldValues,
  RegisterOptions,
  useFormContext,
} from "react-hook-form";

import { Input, type InputProps } from "../input";
import { cn } from "../../utils/utils";
import {
  type CustomSize,
  type SizeProps,
  type VariantProps,
} from "../../utils/form-utils";
import {
  FormControl,
  FormFieldContext,
  FormFieldContextValue,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form-component";

type FieldRules<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = Omit<
  RegisterOptions<TFieldValues, TName>,
  "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled" | "size"
>;

export type CustomFormFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  name: TName;
  control?: Control<TFieldValues>;
  rules?: FieldRules<TFieldValues, TName>;
  shouldUnregister?: boolean;
  defaultValue?: FieldPathValue<TFieldValues, TName>;

  label?: React.ReactNode;
  requiredLabel?: boolean;
  placeholder?: string;

  size?: SizeProps;
  customSize?: CustomSize;
  variant?: VariantProps;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  invalid?: boolean;

  className?: string;
  classNameDefault?: boolean;
  itemClassName?: string;
  labelClassName?: string;
  messageClassName?: string;
  requiredLabelClassName?: string;

  onChange?: (value: string) => void;
} & Omit<InputProps, "name" | "defaultValue" | "size" | "value" | "onChange">;

function getErrorMessage(error?: FieldError): string | undefined {
  const message = error?.message;
  return typeof message === "string" ? message : undefined;
}

const FormField = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  name,
  control,
  label,
  placeholder,
  requiredLabel,
  className,
  classNameDefault,
  itemClassName,
  labelClassName,
  messageClassName,
  requiredLabelClassName,
  variant = "outline",
  size = "sm",
  customSize,
  rules,
  shouldUnregister,
  defaultValue,
  leading,
  trailing,
  invalid,
  onChange,
  ...inputProps
}: CustomFormFieldProps<TFieldValues, TName>) => {
  const form = useFormContext<TFieldValues>();
  const controllerControl = control ?? form?.control;

  return (
    <FormFieldContext.Provider value={{ name } as FormFieldContextValue}>
      <Controller
        control={controllerControl}
        name={name}
        rules={rules}
        shouldUnregister={shouldUnregister}
        defaultValue={defaultValue}
        render={({ field, fieldState }) => {
          const fieldError = getErrorMessage(fieldState.error);

          return (
            <FormItem className={itemClassName}>
              {label ? (
                <FormLabel
                  className={cn("flex items-center gap-0.5", labelClassName)}
                >
                  <span>{label}</span>

                  {requiredLabel ? (
                    <Asterisk
                      aria-hidden="true"
                      className={cn(
                        "h-3 w-3 shrink-0 text-red-500",
                        requiredLabelClassName,
                      )}
                    />
                  ) : null}
                </FormLabel>
              ) : null}

              <FormControl>
                <Input
                  {...field}
                  {...inputProps}
                  value={field.value ?? ""}
                  onChange={(event) => {
                    field.onChange(event);
                    onChange?.(event.target.value);
                  }}
                  onBlur={(event) => {
                    field.onBlur();
                    inputProps.onBlur?.(event);
                  }}
                  ref={field.ref}
                  leading={leading}
                  trailing={trailing}
                  invalid={invalid || Boolean(fieldError)}
                  variant={variant}
                  size={size}
                  customSize={customSize}
                  placeholder={placeholder}
                  className={cn(className)}
                  classNameDefault={classNameDefault}
                />
              </FormControl>

              {fieldError ? (
                <FormMessage className={messageClassName}>
                  {fieldError}
                </FormMessage>
              ) : null}
            </FormItem>
          );
        }}
      />
    </FormFieldContext.Provider>
  );
};

FormField.displayName = "FormField";

export { FormField };
