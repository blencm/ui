"use client";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { createPortal } from "react-dom";

import {
  type CustomSize,
  type SizeProps,
  type VariantProps,
  formControlBase,
  formControlErrorClass,
  formInputVariants,
  getFormControlSizeClass,
  getFormSizeClasses,
} from "../utils/form-utils";
import { cn } from "../utils/utils";

type SelectAlign = "start" | "center" | "end";
type SelectSide = "top" | "bottom";

type RegisteredItem = {
  id: string;
  value: string;
  label: React.ReactNode;
  textValue: string;
  disabled: boolean;
  ref: HTMLElement | null;
};

type SelectContextValue = {
  value: string;
  open: boolean;
  disabled: boolean;
  invalid: boolean;
  variant: VariantProps;
  size: SizeProps;
  customSize?: CustomSize;
  selectedItem?: RegisteredItem;
  activeValue?: string;
  items: RegisteredItem[];
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  contentRef: React.RefObject<HTMLDivElement | null>;
  setOpen: (open: boolean) => void;
  setValue: (value: string) => void;
  setActiveValue: (value?: string) => void;
  registerItem: (item: RegisteredItem) => void;
  unregisterItem: (value: string, id: string) => void;
  updateItemRef: (value: string, id: string, node: HTMLElement | null) => void;
};

const SelectContext = React.createContext<SelectContextValue | null>(null);

function useSelectContext(componentName: string) {
  const context = React.useContext(SelectContext);

  if (!context) {
    throw new Error(
      `${componentName} must be used within <Select />. ` +
        `Asegúrate de importar Select, SelectTrigger, SelectContent, SelectValue y SelectItem desde el mismo archivo "../select", sin mezclar Radix ni otra versión del componente.`,
    );
  }

  return context;
}

function useControllableState<T>({
  value,
  defaultValue,
  onChange,
}: {
  value?: T;
  defaultValue: T;
  onChange?: (value: T) => void;
}) {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const setValue = React.useCallback(
    (nextValue: T) => {
      if (!isControlled) {
        setInternalValue((previousValue) =>
          Object.is(previousValue, nextValue) ? previousValue : nextValue,
        );
      }

      if (!Object.is(currentValue, nextValue)) {
        onChange?.(nextValue);
      }
    },
    [currentValue, isControlled, onChange],
  );

  return [currentValue, setValue] as const;
}

function composeRefs<T>(
  ...refs: Array<React.Ref<T> | undefined>
): React.RefCallback<T> {
  return (node) => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === "function") {
        ref(node);
        return;
      }

      (ref as React.MutableRefObject<T | null>).current = node;
    });
  };
}

function getNodeText(node: React.ReactNode): string {
  if (node === null || node === undefined || typeof node === "boolean") {
    return "";
  }

  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(getNodeText).join("");
  }

  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    return getNodeText(node.props.children);
  }

  return "";
}

function getEnabledItems(items: RegisteredItem[]) {
  return items.filter((item) => !item.disabled);
}

function getNextItemValue(
  items: RegisteredItem[],
  currentValue: string | undefined,
  direction: "next" | "previous",
) {
  const enabledItems = getEnabledItems(items);

  if (!enabledItems.length) return undefined;

  const currentIndex = enabledItems.findIndex(
    (item) => item.value === currentValue,
  );

  if (currentIndex === -1) {
    return direction === "next"
      ? enabledItems[0]?.value
      : enabledItems[enabledItems.length - 1]?.value;
  }

  const nextIndex =
    direction === "next"
      ? (currentIndex + 1) % enabledItems.length
      : (currentIndex - 1 + enabledItems.length) % enabledItems.length;

  return enabledItems[nextIndex]?.value;
}

function areRegisteredItemsEqual(
  previous: RegisteredItem | undefined,
  next: RegisteredItem,
) {
  return Boolean(
    previous &&
    previous.id === next.id &&
    previous.value === next.value &&
    previous.textValue === next.textValue &&
    previous.disabled === next.disabled &&
    previous.label === next.label,
  );
}

function areStylesEqual(
  previous: React.CSSProperties | undefined,
  next: React.CSSProperties,
) {
  if (!previous) return false;

  return (
    previous.position === next.position &&
    previous.zIndex === next.zIndex &&
    previous.width === next.width &&
    previous.minWidth === next.minWidth &&
    previous.maxWidth === next.maxWidth &&
    previous.maxHeight === next.maxHeight &&
    previous.left === next.left &&
    previous.right === next.right &&
    previous.top === next.top &&
    previous.bottom === next.bottom &&
    previous.transform === next.transform
  );
}

function scrollItemIntoView(
  container: HTMLElement | null,
  item: HTMLElement | null | undefined,
) {
  if (!container || !item) return;

  const containerRect = container.getBoundingClientRect();
  const itemRect = item.getBoundingClientRect();

  const itemTop = itemRect.top - containerRect.top + container.scrollTop;
  const itemBottom = itemTop + itemRect.height;
  const visibleTop = container.scrollTop;
  const visibleBottom = visibleTop + container.clientHeight;

  if (itemTop < visibleTop) {
    container.scrollTop = itemTop;
    return;
  }

  if (itemBottom > visibleBottom) {
    container.scrollTop = itemBottom - container.clientHeight;
  }
}

export type SelectProps = {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;

  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;

  disabled?: boolean;
  name?: string;
  required?: boolean;

  variant?: VariantProps;
  size?: SizeProps;
  customSize?: CustomSize;
  invalid?: boolean;

  children: React.ReactNode;
};

function Select({
  value,
  defaultValue = "",
  onValueChange,
  open,
  defaultOpen = false,
  onOpenChange,
  disabled = false,
  name,
  required,
  variant = "outline",
  size = "sm",
  customSize,
  invalid = false,
  children,
}: SelectProps) {
  const triggerRef = React.useRef<HTMLButtonElement | null>(null);
  const contentRef = React.useRef<HTMLDivElement | null>(null);

  const [currentValue, setCurrentValue] = useControllableState({
    value,
    defaultValue,
    onChange: onValueChange,
  });

  const [isOpen, setIsOpen] = useControllableState({
    value: open,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });

  const itemsRef = React.useRef<Map<string, RegisteredItem>>(new Map());

  const [itemsVersion, forceItemsUpdate] = React.useReducer(
    (version: number) => version + 1,
    0,
  );

  const [activeValue, setActiveValue] = React.useState<string | undefined>();

  const items = React.useMemo(
    () => Array.from(itemsRef.current.values()),
    [itemsVersion],
  );

  const selectedItem = React.useMemo(
    () => items.find((item) => item.value === currentValue),
    [currentValue, items],
  );

  const registerItem = React.useCallback((item: RegisteredItem) => {
    const previousItem = itemsRef.current.get(item.value);

    if (previousItem && previousItem.id === item.id) {
      previousItem.label = item.label;
      previousItem.textValue = item.textValue;
      previousItem.disabled = item.disabled;

      if (!areRegisteredItemsEqual(previousItem, item)) {
        forceItemsUpdate();
      }

      return;
    }

    itemsRef.current.set(item.value, item);
    forceItemsUpdate();
  }, []);

  const unregisterItem = React.useCallback((value: string, id: string) => {
    const currentItem = itemsRef.current.get(value);

    if (!currentItem || currentItem.id !== id) return;

    itemsRef.current.delete(value);
    forceItemsUpdate();
  }, []);

  const updateItemRef = React.useCallback(
    (value: string, id: string, node: HTMLElement | null) => {
      const currentItem = itemsRef.current.get(value);

      if (!currentItem || currentItem.id !== id) return;
      if (currentItem.ref === node) return;

      // Importante:
      // Mutamos la referencia existente en vez de reemplazar el objeto.
      // Así evitamos renders infinitos y también evitamos que context.items
      // conserve una ref vieja del item oculto.
      currentItem.ref = node;
    },
    [],
  );

  const handleOpenChange = React.useCallback(
    (nextOpen: boolean) => {
      if (disabled) return;
      setIsOpen(nextOpen);
    },
    [disabled, setIsOpen],
  );

  const handleValueChange = React.useCallback(
    (nextValue: string) => {
      if (disabled) return;

      setCurrentValue(nextValue);
      setIsOpen(false);

      requestAnimationFrame(() => {
        triggerRef.current?.focus({ preventScroll: true });
      });
    },
    [disabled, setCurrentValue, setIsOpen],
  );

  React.useEffect(() => {
    if (!isOpen) return;

    const selectedEnabledItem = items.find(
      (item) => item.value === currentValue && !item.disabled,
    );

    const firstEnabledItem = getEnabledItems(items)[0];
    const nextActiveValue =
      selectedEnabledItem?.value ?? firstEnabledItem?.value;

    setActiveValue((previousValue) =>
      previousValue === nextActiveValue ? previousValue : nextActiveValue,
    );
  }, [currentValue, isOpen, items]);

  React.useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;

      if (
        target &&
        (triggerRef.current?.contains(target) ||
          contentRef.current?.contains(target))
      ) {
        return;
      }

      setIsOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown, true);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown, true);
    };
  }, [isOpen, setIsOpen]);

  const contextValue = React.useMemo<SelectContextValue>(
    () => ({
      value: currentValue,
      open: isOpen,
      disabled,
      invalid,
      variant,
      size,
      customSize,
      selectedItem,
      activeValue,
      items,
      triggerRef,
      contentRef,
      setOpen: handleOpenChange,
      setValue: handleValueChange,
      setActiveValue,
      registerItem,
      unregisterItem,
      updateItemRef,
    }),
    [
      currentValue,
      isOpen,
      disabled,
      invalid,
      variant,
      size,
      customSize,
      selectedItem,
      activeValue,
      items,
      handleOpenChange,
      handleValueChange,
      registerItem,
      unregisterItem,
      updateItemRef,
    ],
  );

  return (
    <SelectContext.Provider value={contextValue}>
      {children}

      {name ? (
        <input
          type="hidden"
          name={name}
          value={currentValue}
          required={required}
          disabled={disabled}
        />
      ) : null}
    </SelectContext.Provider>
  );
}

export type SelectTriggerProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "size"
> & {
  variant?: VariantProps;
  size?: SizeProps;
  customSize?: CustomSize;
  invalid?: boolean;
};

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  (
    {
      className,
      children,
      variant,
      size,
      customSize,
      invalid,
      disabled,
      onClick,
      onKeyDown,
      onPointerDown,
      ...props
    },
    ref,
  ) => {
    const context = useSelectContext("SelectTrigger");

    const resolvedVariant = variant ?? context.variant;
    const resolvedSize = size ?? context.size;
    const resolvedCustomSize = customSize ?? context.customSize;
    const resolvedInvalid = invalid ?? context.invalid;
    const resolvedDisabled = disabled ?? context.disabled;

    const sizeClasses = getFormSizeClasses(resolvedSize, resolvedCustomSize);
    const controlSizeClass = getFormControlSizeClass(
      resolvedVariant,
      sizeClasses,
    );

    const typeaheadRef = React.useRef("");
    const typeaheadTimeoutRef = React.useRef<number | null>(null);

    const moveActiveItem = React.useCallback(
      (direction: "next" | "previous") => {
        const nextValue = getNextItemValue(
          context.items,
          context.activeValue ?? context.value,
          direction,
        );

        if (nextValue) {
          context.setActiveValue(nextValue);
        }
      },
      [context],
    );

    const handleTypeahead = React.useCallback(
      (key: string) => {
        typeaheadRef.current += key.toLowerCase();

        if (typeaheadTimeoutRef.current) {
          window.clearTimeout(typeaheadTimeoutRef.current);
        }

        typeaheadTimeoutRef.current = window.setTimeout(() => {
          typeaheadRef.current = "";
        }, 500);

        const enabledItems = getEnabledItems(context.items);
        const match = enabledItems.find((item) =>
          item.textValue.toLowerCase().startsWith(typeaheadRef.current),
        );

        if (!match) return;

        if (!context.open) {
          context.setOpen(true);
        }

        context.setActiveValue(match.value);
      },
      [context],
    );

    React.useEffect(() => {
      return () => {
        if (typeaheadTimeoutRef.current) {
          window.clearTimeout(typeaheadTimeoutRef.current);
        }
      };
    }, []);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      onKeyDown?.(event);

      if (event.defaultPrevented || resolvedDisabled) return;

      if (event.key === "ArrowDown") {
        event.preventDefault();

        if (!context.open) {
          context.setOpen(true);
          return;
        }

        moveActiveItem("next");
        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();

        if (!context.open) {
          context.setOpen(true);
          return;
        }

        moveActiveItem("previous");
        return;
      }

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();

        if (!context.open) {
          context.setOpen(true);
          return;
        }

        if (context.activeValue) {
          context.setValue(context.activeValue);
        }

        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();
        context.setOpen(false);
        return;
      }

      if (event.key === "Home") {
        event.preventDefault();

        const firstEnabledItem = getEnabledItems(context.items)[0];

        if (firstEnabledItem) {
          context.setActiveValue(firstEnabledItem.value);
        }

        return;
      }

      if (event.key === "End") {
        event.preventDefault();

        const enabledItems = getEnabledItems(context.items);
        const lastEnabledItem = enabledItems[enabledItems.length - 1];

        if (lastEnabledItem) {
          context.setActiveValue(lastEnabledItem.value);
        }

        return;
      }

      if (
        event.key.length === 1 &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey
      ) {
        handleTypeahead(event.key);
      }
    };

    return (
      <button
        ref={composeRefs(ref, context.triggerRef)}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={context.open}
        data-placeholder={!context.value ? "" : undefined}
        disabled={resolvedDisabled}
        className={cn(
          formControlBase,
          "relative flex w-full items-center justify-between gap-2 overflow-hidden whitespace-nowrap ring-offset-background",
          formInputVariants[resolvedVariant],
          controlSizeClass,
          resolvedInvalid && formControlErrorClass,
          className,
        )}
        onPointerDown={(event) => {
          onPointerDown?.(event);

          if (
            event.defaultPrevented ||
            resolvedDisabled ||
            event.button !== 0 ||
            event.ctrlKey
          ) {
            return;
          }

          event.preventDefault();
        }}
        onClick={(event) => {
          onClick?.(event);

          if (!event.defaultPrevented && !resolvedDisabled) {
            context.setOpen(!context.open);

            requestAnimationFrame(() => {
              context.triggerRef.current?.focus({ preventScroll: true });
            });
          }
        }}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {children}

        <CaretSortIcon className="h-4 w-4 shrink-0 opacity-50" />
      </button>
    );
  },
);

SelectTrigger.displayName = "SelectTrigger";

export type SelectValueProps = React.HTMLAttributes<HTMLSpanElement> & {
  placeholder?: React.ReactNode;
};

const SelectValue = React.forwardRef<HTMLSpanElement, SelectValueProps>(
  (
    { className, placeholder = "Select an option", children, ...props },
    ref,
  ) => {
    const context = useSelectContext("SelectValue");

    const hasValue = Boolean(context.selectedItem) || children !== undefined;

    return (
      <span
        ref={ref}
        className={cn(
          "min-w-0 flex-1 truncate text-left",
          !hasValue && "text-muted-foreground",
          className,
        )}
        {...props}
      >
        {hasValue ? (children ?? context.selectedItem?.label) : placeholder}
      </span>
    );
  },
);

export type SelectContentProps = React.HTMLAttributes<HTMLDivElement> & {
  position?: "popper";
  sideOffset?: number;
  align?: SelectAlign;
};

const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
  (
    {
      className,
      children,
      sideOffset = 4,
      align = "start",
      position: _position,
      style,
      ...props
    },
    ref,
  ) => {
    const context = useSelectContext("SelectContent");

    const scrollRef = React.useRef<HTMLDivElement | null>(null);
    const rafRef = React.useRef<number | null>(null);
    const lockedSideRef = React.useRef<SelectSide | null>(null);

    const [mounted, setMounted] = React.useState(false);
    const [side, setSide] = React.useState<SelectSide>("bottom");
    const [contentStyle, setContentStyle] =
      React.useState<React.CSSProperties>();

    React.useLayoutEffect(() => {
      setMounted(true);
    }, []);

    React.useLayoutEffect(() => {
      if (!context.open) {
        lockedSideRef.current = null;
        setContentStyle(undefined);
      }
    }, [context.open]);

    function clampNumber(value: number, min: number, max: number) {
      return Math.min(Math.max(value, min), max);
    }

    const updatePosition = React.useCallback(() => {
      const trigger = context.triggerRef.current;

      if (!trigger) return;

      const rect = trigger.getBoundingClientRect();

      const viewportPadding = 8;
      const viewportWidth = window.innerWidth;
      const preferredMaxHeight = 288;
      const minUsefulHeight = 140;

      const availableBelow =
        window.innerHeight - rect.bottom - viewportPadding - sideOffset;

      const availableAbove = rect.top - viewportPadding - sideOffset;

      const calculatedSide: SelectSide =
        availableBelow >= Math.min(preferredMaxHeight, minUsefulHeight) ||
        availableBelow >= availableAbove
          ? "bottom"
          : "top";

      if (!lockedSideRef.current) {
        lockedSideRef.current = calculatedSide;
      }

      const nextSide = lockedSideRef.current;
      const availableHeight =
        nextSide === "bottom" ? availableBelow : availableAbove;

      const contentMaxHeight = Math.max(
        80,
        Math.min(preferredMaxHeight, availableHeight),
      );

      const baseStyle: React.CSSProperties = {
        position: "fixed",
        zIndex: 9999,
        width: "max-content",
        minWidth: rect.width,
        maxHeight: contentMaxHeight,
      };

      if (align === "start") {
        const left = clampNumber(
          rect.left,
          viewportPadding,
          Math.max(
            viewportPadding,
            viewportWidth - viewportPadding - rect.width,
          ),
        );

        baseStyle.left = left;
        baseStyle.right = undefined;
        baseStyle.transform = undefined;
        baseStyle.maxWidth = Math.max(
          rect.width,
          viewportWidth - left - viewportPadding,
        );
      }

      if (align === "center") {
        const center = clampNumber(
          rect.left + rect.width / 2,
          viewportPadding + rect.width / 2,
          viewportWidth - viewportPadding - rect.width / 2,
        );

        baseStyle.left = center;
        baseStyle.right = undefined;
        baseStyle.transform = "translateX(-50%)";
        baseStyle.maxWidth = viewportWidth - viewportPadding * 2;
      }

      if (align === "end") {
        const right = Math.max(viewportPadding, viewportWidth - rect.right);

        baseStyle.left = undefined;
        baseStyle.right = right;
        baseStyle.transform = undefined;
        baseStyle.maxWidth = Math.max(
          rect.width,
          viewportWidth - right - viewportPadding,
        );
      }

      if (nextSide === "bottom") {
        baseStyle.top = rect.bottom + sideOffset;
        baseStyle.bottom = undefined;
      } else {
        baseStyle.bottom = window.innerHeight - rect.top + sideOffset;
        baseStyle.top = undefined;
      }

      setSide((previousSide) =>
        previousSide === nextSide ? previousSide : nextSide,
      );

      setContentStyle((previousStyle) =>
        areStylesEqual(previousStyle, baseStyle) ? previousStyle : baseStyle,
      );
    }, [align, context.triggerRef, sideOffset]);

    const scheduleUpdatePosition = React.useCallback(() => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        updatePosition();
      });
    }, [updatePosition]);

    React.useLayoutEffect(() => {
      if (!context.open) return;

      updatePosition();
      scheduleUpdatePosition();

      const handleResize = () => {
        scheduleUpdatePosition();
      };

      const handlePageScroll = (event: Event) => {
        const target = event.target as Node | null;

        if (target && scrollRef.current?.contains(target)) {
          return;
        }

        scheduleUpdatePosition();
      };

      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handlePageScroll, true);

      window.visualViewport?.addEventListener("resize", handleResize);
      window.visualViewport?.addEventListener("scroll", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", handlePageScroll, true);

        window.visualViewport?.removeEventListener("resize", handleResize);
        window.visualViewport?.removeEventListener("scroll", handleResize);

        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
      };
    }, [context.open, scheduleUpdatePosition, updatePosition]);

    React.useLayoutEffect(() => {
      if (!context.open) return;

      const frame = requestAnimationFrame(() => {
        const activeItem = context.items.find(
          (item) => item.value === context.activeValue,
        );

        scrollItemIntoView(scrollRef.current, activeItem?.ref);
      });

      return () => {
        cancelAnimationFrame(frame);
      };
    }, [context.activeValue, context.items, context.open]);

    if (!mounted) return null;

    const isVisible = context.open && Boolean(contentStyle);

    return createPortal(
      <div
        {...props}
        ref={composeRefs(ref, context.contentRef)}
        role="listbox"
        aria-hidden={!isVisible}
        data-side={side}
        data-select-content
        className={cn(
          "pointer-events-auto overflow-hidden rounded-xl border border-border bg-popover text-popover-foreground shadow-xl",
          className,
        )}
        style={{
          ...(contentStyle ?? {
            position: "fixed",
            zIndex: 9999,
          }),
          ...style,
          display: isVisible ? undefined : "none",
        }}
      >
        <div
          ref={scrollRef}
          data-select-scroll-content
          className="max-h-full overflow-x-hidden overflow-y-auto overscroll-contain px-1 py-1"
          style={{
            maxHeight: contentStyle?.maxHeight,
            overflowX: "hidden",
            overflowY: "auto",
            overscrollBehavior: "contain",
            WebkitOverflowScrolling: "touch",
          }}
          onWheel={(event) => {
            event.stopPropagation();
          }}
          onTouchMove={(event) => {
            event.stopPropagation();
          }}
        >
          {children}
        </div>
      </div>,
      document.body,
    );
  },
);

SelectContent.displayName = "SelectContent";

export type SelectGroupProps = React.HTMLAttributes<HTMLDivElement>;

const SelectGroup = React.forwardRef<HTMLDivElement, SelectGroupProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} role="group" className={className} {...props} />
  ),
);

SelectGroup.displayName = "SelectGroup";

export type SelectLabelProps = React.HTMLAttributes<HTMLDivElement>;

const SelectLabel = React.forwardRef<HTMLDivElement, SelectLabelProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("px-2 py-1.5 text-sm font-semibold", className)}
      {...props}
    />
  ),
);

SelectLabel.displayName = "SelectLabel";

export type SelectItemProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onSelect"
> & {
  value: string;
  disabled?: boolean;
  textValue?: string;
  size?: SizeProps;
  customSize?: CustomSize;
};

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  (
    {
      className,
      children,
      value,
      disabled = false,
      textValue,
      size,
      customSize,
      onClick,
      onMouseMove,
      onMouseDown,
      ...props
    },
    ref,
  ) => {
    const context = useSelectContext("SelectItem");

    const {
      registerItem,
      unregisterItem,
      updateItemRef,
      setActiveValue,
      setValue,
      value: selectedValue,
      activeValue,
      size: contextSize,
      customSize: contextCustomSize,
    } = context;

    const itemId = React.useId();
    const localRef = React.useRef<HTMLDivElement | null>(null);

    const resolvedSize = size ?? contextSize;
    const resolvedCustomSize = customSize ?? contextCustomSize;
    const sizeClasses = getFormSizeClasses(resolvedSize, resolvedCustomSize);

    const labelText = textValue ?? getNodeText(children);
    const isSelected = selectedValue === value;
    const isActive = activeValue === value;

    React.useLayoutEffect(() => {
      registerItem({
        id: itemId,
        value,
        label: children,
        textValue: labelText,
        disabled,
        ref: localRef.current,
      });

      return () => {
        unregisterItem(value, itemId);
      };
    }, [
      registerItem,
      unregisterItem,
      itemId,
      value,
      labelText,
      disabled,
      children,
    ]);

    const handleItemRef = React.useCallback(
      (node: HTMLDivElement | null) => {
        localRef.current = node;
        updateItemRef(value, itemId, node);
      },
      [updateItemRef, value, itemId],
    );

    const setRefs = React.useMemo(
      () => composeRefs<HTMLDivElement>(ref, handleItemRef),
      [ref, handleItemRef],
    );

    return (
      <div
        ref={setRefs}
        id={itemId}
        role="option"
        aria-selected={isSelected}
        aria-disabled={disabled}
        data-highlighted={isActive ? "" : undefined}
        data-disabled={disabled ? "" : undefined}
        className={cn(
          "relative flex w-full min-w-0 cursor-default select-none items-center rounded-lg py-1.5 pl-2 pr-8 text-left outline-none transition-colors",
          sizeClasses.selectItem,
          !disabled &&
            "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
          disabled && "pointer-events-none opacity-50",
          className,
        )}
        onMouseDown={(event) => {
          event.preventDefault();
          onMouseDown?.(event);
        }}
        onMouseMove={(event) => {
          onMouseMove?.(event);

          if (!disabled) {
            setActiveValue(value);
          }
        }}
        onClick={(event) => {
          onClick?.(event);

          if (!event.defaultPrevented && !disabled) {
            setValue(value);
          }
        }}
        {...props}
      >
        <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
          {isSelected ? <CheckIcon className="h-4 w-4" /> : null}
        </span>

        <span className="min-w-0 flex-1 truncate whitespace-nowrap">
          {children}
        </span>
      </div>
    );
  },
);

SelectItem.displayName = "SelectItem";

export type SelectSeparatorProps = React.HTMLAttributes<HTMLDivElement>;

const SelectSeparator = React.forwardRef<HTMLDivElement, SelectSeparatorProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="separator"
      className={cn("-mx-1 my-1 h-px bg-muted", className)}
      {...props}
    />
  ),
);

SelectSeparator.displayName = "SelectSeparator";

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
