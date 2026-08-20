import * as React from "react";
import { Asterisk } from "lucide-react";
import {
  Control,
  Controller,
  FieldPath,
  FieldPathValue,
  FieldValues,
  useFormContext,
} from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";

import { cn } from "../../utils/utils";

import {
  getFormControlSizeClass,
  getFormSizeClasses,
  type SelectOption,
  type CustomSize,
  type SizeProps,
  type VariantProps,
} from "../../utils/form-utils";

import { SearchableSelect } from "../searchable-select";

import {
  FieldRules,
  FormControl,
  FormFieldContext,
  FormFieldContextValue,
  FormItem,
  FormLabel,
  FormMessage,
  getDefaultOptionLabel,
  getDefaultOptionValue,
  getErrorMessage,
} from "./form-component";

type CustomFormSelectProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
  TItem = SelectOption,
> = {
  name: TName;
  control?: Control<TFieldValues>;
  rules?: FieldRules<TFieldValues, TName>;
  shouldUnregister?: boolean;
  defaultValue?: FieldPathValue<TFieldValues, TName>;

  label?: React.ReactNode;
  requiredLabel?: boolean;
  placeholder?: string;

  options?: SelectOption<TItem>[];
  items?: TItem[];
  getOptionValue?: (item: TItem) => string;
  getOptionLabel?: (item: TItem) => React.ReactNode;
  getOptionDisabled?: (item: TItem) => boolean;
  getOptionData?: (item: TItem) => unknown;

  onChange?: (value: string) => void;
  onChangeItem?: (item: TItem | null) => void;
  disabled?: boolean;

  size?: SizeProps;
  customSize?: CustomSize;
  variant?: VariantProps;
  invalid?: boolean;
  searchable?: boolean;
  searchPlaceholder?: string;
  emptyText?: React.ReactNode;
  classNameDefault?: boolean;

  className?: string;
  itemClassName?: string;
  contentClassName?: string;
  searchInputClassName?: string;
  labelClassName?: string;
  messageClassName?: string;
  requiredLabelClassName?: string;
};

const FormSelect = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
  TItem = SelectOption,
>({
  name,
  control,
  rules,
  shouldUnregister,
  defaultValue,
  placeholder = "Select an option",
  label,
  requiredLabel,
  className,
  itemClassName,
  contentClassName,
  searchInputClassName,
  labelClassName,
  messageClassName,
  requiredLabelClassName,
  options,
  items,
  getOptionValue = getDefaultOptionValue,
  getOptionLabel = getDefaultOptionLabel,
  getOptionDisabled,
  getOptionData,
  onChange,
  onChangeItem,
  disabled,
  size = "sm",
  customSize,
  variant = "outline",
  invalid,
  searchable = false,
  searchPlaceholder = "Search…",
  emptyText = "No results",
  classNameDefault = true,
}: CustomFormSelectProps<TFieldValues, TName, TItem>) => {
  const form = useFormContext<TFieldValues>();
  const controllerControl = control ?? form?.control;

  const sizeClasses = getFormSizeClasses(size, customSize);

  const normalizedOptions = React.useMemo<SelectOption<TItem>[]>(() => {
    if (options) return options;

    return (items ?? []).map((item) => ({
      value: getOptionValue(item),
      label: getOptionLabel(item),
      disabled: getOptionDisabled?.(item),
      data: (getOptionData?.(item) ?? item) as TItem,
    }));
  }, [
    getOptionData,
    getOptionDisabled,
    getOptionLabel,
    getOptionValue,
    items,
    options,
  ]);

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
          const hasError = Boolean(invalid || fieldError);

          const handleValueChange = (value: string) => {
            const nextOption = normalizedOptions.find(
              (option) => option.value === value,
            );

            field.onChange(value);
            onChange?.(value);
            onChangeItem?.((nextOption?.data as TItem | undefined) ?? null);
          };

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

              {searchable ? (
                <FormControl>
                  <SearchableSelect
                    items={normalizedOptions}
                    value={(field.value as string) ?? ""}
                    name={field.name}
                    placeholder={placeholder}
                    searchPlaceholder={searchPlaceholder}
                    emptyText={emptyText}
                    disabled={disabled}
                    invalid={hasError}
                    size={size}
                    customSize={customSize}
                    variant={variant}
                    classNameDefault={classNameDefault}
                    triggerClassName={className}
                    contentClassName={contentClassName}
                    itemClassName={itemClassName}
                    searchInputClassName={searchInputClassName}
                    onValueChange={(value, option) => {
                      field.onChange(value);
                      onChange?.(value);
                      onChangeItem?.(
                        (option?.data as TItem | undefined) ?? null,
                      );
                      field.onBlur();
                    }}
                  />
                </FormControl>
              ) : (
                <Select
                  value={(field.value as string) ?? ""}
                  onValueChange={handleValueChange}
                  onOpenChange={(nextOpen) => {
                    if (!nextOpen) field.onBlur();
                  }}
                  disabled={disabled}
                  size={size}
                  customSize={customSize}
                  variant={variant}
                  invalid={hasError}
                >
                  <FormControl>
                    <SelectTrigger className={className}>
                      <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent
                    position="popper"
                    sideOffset={6}
                    className={cn(
                      "z-50 overflow-hidden rounded-xl border border-border bg-popover text-popover-foreground shadow-xl outline-none",
                      contentClassName,
                    )}
                    onWheelCapture={(event) => event.stopPropagation()}
                    onTouchMoveCapture={(event) => event.stopPropagation()}
                  >
                    {normalizedOptions.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        disabled={option.disabled}
                        className={cn(sizeClasses.selectItem, itemClassName)}
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}

              {fieldError ? (
                <FormMessage
                  className={cn(sizeClasses.message, messageClassName)}
                >
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

FormSelect.displayName = "FormSelect";

export { FormSelect, type CustomFormSelectProps };
