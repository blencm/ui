"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { CaretSortIcon, CheckIcon, Cross2Icon } from "@radix-ui/react-icons";

import { cn } from "../utils/utils";
import {
  formCompositeControlBase,
  formCompositeControlErrorClass,
  formCompositeVariants,
  getFormControlSizeClass,
  getFormSizeClasses,
  type CustomSize,
  type SizeProps,
  type VariantProps,
} from "../utils/form-utils";

type SearchableSelectOption<TData = unknown> = {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
  keywords?: string;
  data?: TData;
};

type SearchableSelectProps<TData = unknown> = {
  items: SearchableSelectOption<TData>[];

  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string, item?: SearchableSelectOption<TData>) => void;

  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: React.ReactNode;

  disabled?: boolean;
  name?: string;
  required?: boolean;
  invalid?: boolean;

  size?: SizeProps;
  customSize?: CustomSize;
  variant?: VariantProps;
  classNameDefault?: boolean;

  triggerClassName?: string;
  contentClassName?: string;
  itemClassName?: string;
  searchInputClassName?: string;
};

function normalizeText(value: unknown) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();
}

function getLabelText(value: React.ReactNode): string {
  if (value === null || value === undefined || typeof value === "boolean") {
    return "";
  }

  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value.map(getLabelText).join("");
  }

  if (React.isValidElement<{ children?: React.ReactNode }>(value)) {
    return getLabelText(value.props.children);
  }

  return "";
}

function getOptionText<TData>(item?: SearchableSelectOption<TData>) {
  if (!item) return "";

  return getLabelText(item.label) || item.value;
}

function getNextEnabledIndex<TData>(
  items: SearchableSelectOption<TData>[],
  currentIndex: number,
  direction: 1 | -1,
) {
  if (!items.length) return -1;

  let nextIndex = currentIndex;

  for (let index = 0; index < items.length; index += 1) {
    nextIndex = (nextIndex + direction + items.length) % items.length;

    if (!items[nextIndex]?.disabled) {
      return nextIndex;
    }
  }

  return -1;
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

function SearchableSelectBase<TData = unknown>({
  items,
  value,
  defaultValue,
  onValueChange,
  placeholder = "Select an option",
  searchPlaceholder = "Search…",
  emptyText = "No results found",
  disabled,
  name,
  required,
  invalid = false,
  size = "md",
  customSize,
  variant = "outline",
  classNameDefault = true,
  triggerClassName,
  contentClassName,
  itemClassName,
  searchInputClassName,
}: SearchableSelectProps<TData>) {
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const rafRef = React.useRef<number | null>(null);

  const listboxId = React.useId();

  const sizeClasses = getFormSizeClasses(size, customSize);
  const triggerSizeClass = getFormControlSizeClass(variant, sizeClasses);

  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? "");
  const currentValue = isControlled ? (value ?? "") : internalValue;

  const selectedItem = React.useMemo(() => {
    return items.find((item) => item.value === currentValue);
  }, [currentValue, items]);

  const selectedText = React.useMemo(() => {
    return getOptionText(selectedItem);
  }, [selectedItem]);

  const [mounted, setMounted] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(selectedText);
  const [activeIndex, setActiveIndex] = React.useState(-1);
  const [contentStyle, setContentStyle] = React.useState<React.CSSProperties>();

  // FIX 1: useLayoutEffect en lugar de useEffect para que mounted se establezca
  // de forma síncrona antes del primer paint, eliminando el ciclo extra de render.
  React.useLayoutEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!open) {
      setInputValue(selectedText);
    }
  }, [open, selectedText]);

  const filteredItems = React.useMemo(() => {
    const query = normalizeText(inputValue);

    if (!query) return items;

    return items.filter((item) => {
      const haystack = normalizeText(
        `${getLabelText(item.label)} ${item.value} ${item.keywords ?? ""}`,
      );

      return haystack.includes(query);
    });
  }, [inputValue, items]);

  const updatePosition = React.useCallback(() => {
    const root = rootRef.current;

    if (!root) return;

    const rect = root.getBoundingClientRect();

    const viewportPadding = 8;
    const sideOffset = 6;
    const preferredMaxHeight = 288;
    const minUsefulHeight = 140;

    const availableBelow =
      window.innerHeight - rect.bottom - viewportPadding - sideOffset;

    const availableAbove = rect.top - viewportPadding - sideOffset;

    const shouldOpenBelow =
      availableBelow >= Math.min(preferredMaxHeight, minUsefulHeight) ||
      availableBelow >= availableAbove;

    const availableHeight = shouldOpenBelow ? availableBelow : availableAbove;

    const contentMaxHeight = Math.max(
      96,
      Math.min(preferredMaxHeight, availableHeight),
    );

    const left = Math.min(
      Math.max(viewportPadding, rect.left),
      Math.max(
        viewportPadding,
        window.innerWidth - viewportPadding - rect.width,
      ),
    );

    const nextStyle: React.CSSProperties = {
      position: "fixed",
      zIndex: 9999,
      left,
      width: "max-content",
      minWidth: rect.width,
      maxWidth: Math.max(
        rect.width,
        window.innerWidth - left - viewportPadding,
      ),
      maxHeight: contentMaxHeight,
    };

    if (shouldOpenBelow) {
      nextStyle.top = rect.bottom + sideOffset;
      nextStyle.bottom = undefined;
    } else {
      nextStyle.bottom = window.innerHeight - rect.top + sideOffset;
      nextStyle.top = undefined;
    }

    setContentStyle((previousStyle) =>
      areStylesEqual(previousStyle, nextStyle) ? previousStyle : nextStyle,
    );
  }, []);

  const scheduleUpdatePosition = React.useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      updatePosition();
    });
  }, [updatePosition]);

  const openDropdown = React.useCallback(() => {
    if (disabled) return;

    if (!open) {
      setInputValue("");
      setOpen(true);
    }

    requestAnimationFrame(() => {
      inputRef.current?.focus({ preventScroll: true });
    });
  }, [disabled, open]);

  // FIX 2: Resetear contentStyle cuando se cierra el dropdown.
  // Esto garantiza que al volver a abrir siempre se recalcule la posición
  // desde cero, evitando que se reutilice un valor stale de una apertura anterior.
  React.useLayoutEffect(() => {
    if (!open) {
      setContentStyle(undefined);
    }
  }, [open]);

  // FIX 3: Este useLayoutEffect corre DESPUÉS del reset de arriba (mismo dep: open).
  // React garantiza que los useLayoutEffect se ejecutan en orden de declaración,
  // por lo que primero se borra contentStyle y luego se recalcula.
  React.useLayoutEffect(() => {
    if (!open) return;

    updatePosition();
    scheduleUpdatePosition();

    const handleResizeOrScroll = () => {
      scheduleUpdatePosition();
    };

    window.addEventListener("resize", handleResizeOrScroll);
    window.addEventListener("scroll", handleResizeOrScroll, true);
    window.visualViewport?.addEventListener("resize", handleResizeOrScroll);
    window.visualViewport?.addEventListener("scroll", handleResizeOrScroll);

    return () => {
      window.removeEventListener("resize", handleResizeOrScroll);
      window.removeEventListener("scroll", handleResizeOrScroll, true);
      window.visualViewport?.removeEventListener(
        "resize",
        handleResizeOrScroll,
      );
      window.visualViewport?.removeEventListener(
        "scroll",
        handleResizeOrScroll,
      );

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [open, scheduleUpdatePosition, updatePosition]);

  React.useEffect(() => {
    if (!open) return;

    const firstEnabledIndex = filteredItems.findIndex((item) => !item.disabled);
    setActiveIndex((previousIndex) =>
      previousIndex === firstEnabledIndex ? previousIndex : firstEnabledIndex,
    );
  }, [filteredItems, open]);

  React.useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;

      if (
        target &&
        (rootRef.current?.contains(target) ||
          contentRef.current?.contains(target))
      ) {
        return;
      }

      setOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown, true);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown, true);
    };
  }, [open]);

  const selectItem = React.useCallback(
    (item: SearchableSelectOption<TData>) => {
      if (item.disabled) return;

      if (!isControlled) {
        setInternalValue(item.value);
      }

      setInputValue(getOptionText(item));
      setOpen(false);
      onValueChange?.(item.value, item);

      requestAnimationFrame(() => {
        inputRef.current?.blur();
      });
    },
    [isControlled, onValueChange],
  );

  const dropdown =
    open && mounted && contentStyle
      ? createPortal(
          <div
            ref={contentRef}
            data-searchable-select-content
            className={cn(
              "pointer-events-auto overflow-hidden rounded-xl border border-border bg-popover text-popover-foreground shadow-xl",
              contentClassName,
            )}
            style={{
              ...contentStyle,
              maxHeight: contentStyle.maxHeight,
            }}
          >
            <div
              id={listboxId}
              role="listbox"
              className="max-h-full overflow-x-hidden overflow-y-auto overscroll-contain p-1"
              style={{
                maxHeight: contentStyle.maxHeight,
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
              {filteredItems.length === 0 ? (
                <div
                  className={cn(
                    "px-3 py-6 text-center text-muted-foreground",
                    sizeClasses.message,
                  )}
                >
                  {emptyText}
                </div>
              ) : (
                filteredItems.map((item, index) => {
                  const isSelected = item.value === currentValue;
                  const isActive = index === activeIndex;

                  return (
                    <div
                      id={`${listboxId}-option-${index}`}
                      key={item.value}
                      role="option"
                      aria-selected={isSelected}
                      aria-disabled={item.disabled}
                      tabIndex={-1}
                      onMouseMove={() => {
                        if (!item.disabled) {
                          setActiveIndex(index);
                        }
                      }}
                      onPointerDown={(event) => {
                        event.preventDefault();
                        event.stopPropagation();

                        if (!item.disabled) {
                          selectItem(item);
                        }
                      }}
                      className={cn(
                        "relative flex w-full select-none items-center gap-2 rounded-lg px-3 text-left outline-none transition",
                        sizeClasses.selectItem,
                        item.disabled
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer",
                        isActive &&
                          !item.disabled &&
                          "bg-accent text-accent-foreground",
                        !isActive &&
                          !item.disabled &&
                          "hover:bg-accent/70 hover:text-accent-foreground",
                        isSelected && "font-medium",
                        itemClassName,
                      )}
                    >
                      <span className="min-w-0 flex-1 truncate">
                        {item.label}
                      </span>

                      {isSelected ? (
                        <CheckIcon
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-primary"
                        />
                      ) : null}
                    </div>
                  );
                })
              )}
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <div ref={rootRef} className="relative w-full">
      {name ? (
        <input
          type="hidden"
          name={name}
          value={currentValue}
          required={required}
          disabled={disabled}
        />
      ) : null}

      <div
        className={
          classNameDefault
            ? cn(
                formCompositeControlBase,
                formCompositeVariants[variant],
                triggerSizeClass,
                invalid && formCompositeControlErrorClass,
                disabled && "cursor-not-allowed opacity-50",
                triggerClassName,
              )
            : triggerClassName
        }
        onPointerDown={(event) => {
          if (disabled || event.button !== 0 || event.ctrlKey) return;

          event.preventDefault();
          openDropdown();
        }}
      >
        <input
          ref={inputRef}
          value={inputValue}
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={open}
          aria-controls={listboxId}
          aria-invalid={invalid || undefined}
          aria-activedescendant={
            activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined
          }
          placeholder={open ? searchPlaceholder : placeholder}
          autoComplete="off"
          spellCheck={false}
          disabled={disabled}
          onFocus={() => {
            openDropdown();
          }}
          onChange={(event) => {
            setInputValue(event.target.value);
            setOpen(true);
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();

              setOpen(true);
              setActiveIndex((currentIndex) =>
                getNextEnabledIndex(filteredItems, currentIndex, 1),
              );

              return;
            }

            if (event.key === "ArrowUp") {
              event.preventDefault();

              setOpen(true);
              setActiveIndex((currentIndex) =>
                getNextEnabledIndex(filteredItems, currentIndex, -1),
              );

              return;
            }

            if (event.key === "Enter") {
              if (!open) return;

              event.preventDefault();

              const activeItem = filteredItems[activeIndex];

              if (activeItem) {
                selectItem(activeItem);
              }

              return;
            }

            if (event.key === "Escape") {
              event.preventDefault();
              setOpen(false);
              setInputValue(selectedText);
              inputRef.current?.blur();
            }
          }}
          className={cn(
            "h-full min-w-0 flex-1 border-0 bg-transparent p-0 outline-none",
            "placeholder:text-muted-foreground disabled:cursor-not-allowed",
            searchInputClassName,
          )}
        />

        {inputValue && open ? (
          <button
            type="button"
            aria-label="Clear search"
            tabIndex={-1}
            onPointerDown={(event) => {
              event.preventDefault();
              event.stopPropagation();
            }}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();

              setInputValue("");

              requestAnimationFrame(() => {
                inputRef.current?.focus({ preventScroll: true });
              });
            }}
            className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <Cross2Icon aria-hidden="true" className="h-3.5 w-3.5" />
          </button>
        ) : null}

        <CaretSortIcon
          aria-hidden="true"
          className={cn(
            "h-4 w-4 shrink-0 opacity-50 transition-transform",
            open && "rotate-180",
          )}
        />
      </div>

      {dropdown}
    </div>
  );
}

const SearchableSelect = React.memo(
  SearchableSelectBase,
) as typeof SearchableSelectBase;

export {
  SearchableSelect,
  type SearchableSelectOption,
  type SearchableSelectProps,
};
