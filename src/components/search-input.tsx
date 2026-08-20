import * as React from "react";
import { useDebouncedCallback } from "use-debounce";

import { Input, type InputProps } from "./input";
import { cn } from "../utils/utils";

interface SearchInputProps extends Omit<
  InputProps,
  "value" | "defaultValue" | "onChange" | "type"
> {
  value?: string;
  debounceTime?: number;
  onSearch: (searchTerm: string) => void;
}

function setForwardedRef<T>(ref: React.ForwardedRef<T>, value: T | null) {
  if (typeof ref === "function") {
    ref(value);
    return;
  }

  if (ref) {
    ref.current = value;
  }
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      value = "",
      placeholder = "Search...",
      className,
      classNameDefault = true,
      debounceTime = 750,
      onSearch,
      onKeyDown,
      onPointerDown,
      onMouseDown,
      onClick,
      onFocus,
      ...props
    },
    ref,
  ) => {
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const [searchTerm, setSearchTerm] = React.useState(value ?? "");

    const focusInput = React.useCallback(() => {
      const input = inputRef.current;

      if (!input || typeof document === "undefined") return;

      input.focus({ preventScroll: true });
    }, []);

    const composedRef = React.useCallback(
      (node: HTMLInputElement | null) => {
        inputRef.current = node;
        setForwardedRef(ref, node);
      },
      [ref],
    );

    const debouncedSearch = useDebouncedCallback((nextValue: string) => {
      onSearch(nextValue);

      requestAnimationFrame(() => {
        focusInput();
      });
    }, debounceTime);

    React.useEffect(() => {
      setSearchTerm(value ?? "");
    }, [value]);

    React.useEffect(() => {
      return () => {
        debouncedSearch.cancel();
      };
    }, [debouncedSearch]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const nextValue = event.target.value;

      setSearchTerm(nextValue);

      if (debounceTime <= 0) {
        debouncedSearch.cancel();
        onSearch(nextValue);

        requestAnimationFrame(() => {
          focusInput();
        });

        return;
      }

      debouncedSearch(nextValue);

      requestAnimationFrame(() => {
        focusInput();
      });
    };

    return (
      <Input
        ref={composedRef}
        type="search"
        value={searchTerm}
        placeholder={placeholder}
        onChange={handleChange}
        className={cn("w-full", className)}
        classNameDefault={classNameDefault}
        autoComplete="off"
        onKeyDown={(event) => {
          if (event.key !== "Escape") {
            event.stopPropagation();
          }

          onKeyDown?.(event);
        }}
        onPointerDown={(event) => {
          event.stopPropagation();
          onPointerDown?.(event);
        }}
        onMouseDown={(event) => {
          event.stopPropagation();
          onMouseDown?.(event);
        }}
        onClick={(event) => {
          event.stopPropagation();

          requestAnimationFrame(() => {
            focusInput();
          });

          onClick?.(event);
        }}
        onFocus={(event) => {
          event.stopPropagation();
          onFocus?.(event);
        }}
        {...props}
      />
    );
  },
);

SearchInput.displayName = "SearchInput";

export { SearchInput, type SearchInputProps };
