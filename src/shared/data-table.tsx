import React, { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../components/Button/button";
import { ScrollArea, ScrollBar } from "../components/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/table";
import { cn } from "../utils/utils";
import {
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import {
  type ColumnDef,
  type RowData,
  columnVisibilityFeature,
  flexRender,
  rowPaginationFeature,
  rowSelectionFeature,
  tableFeatures,
  useTable,
} from "@tanstack/react-table";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const dataTableFeatures = tableFeatures({
  columnVisibilityFeature,
  rowPaginationFeature,
  rowSelectionFeature,
});

export type DataTableFeatures = typeof dataTableFeatures;

export type DataTableColumnDef<TData extends RowData, TValue = unknown> = ColumnDef<
  DataTableFeatures,
  TData,
  TValue
>;

/** =========
 *  SLOTS
 *  =========
 *  Classname “slots” you can override to customize styles at specific points
 *  (root, table, header, rows, cells, footer, etc.).
 */

export type DataTableSlots = Partial<{
  root: string;
  table: string;
  thead: string;
  theadSticky: string;
  trHead: string;
  th: string;

  tbody: string;
  tr: string;
  trClickable: string;
  td: string;

  footer: string;
  footerInner: string;

  metaWrap: string;
  controlsWrap: string;

  pageSizeLabel: string;
  pageSizeTrigger: string;

  pageLabel: string;

  navButton: string;
}>;

/** =========
 *  ACCENTS
 *  =========
 *  Accent system for highlighting interactive/selected states.
 *  - `accent`: choose a preset accent name
 *  - `accentColor`: provide a custom CSS color (overrides `accent`)
 *  If both are null/empty, accent styling is disabled.
 */
export type DataTableAccent =
  | "primary"
  | "emerald"
  | "indigo"
  | "rose"
  | "amber"
  | "zinc";

const ACCENT_COLOR: Record<DataTableAccent, string> = {
  primary: "var(--primary)",
  emerald: "#10b981",
  indigo: "#6366f1",
  rose: "#f43f5e",
  amber: "#f59e0b",
  zinc: "#71717a",
};

function resolveAccent(
  accent?: DataTableAccent | null,
  accentColor?: string | null,
) {
  const custom = accentColor?.trim();
  if (custom) return custom;
  if (!accent) return undefined;
  return ACCENT_COLOR[accent] ?? ACCENT_COLOR.primary;
}

/** =========
 *  TEMPLATES
 *  =========
 *  Built-in visual templates (neo, glass, compact, minimal, clean, elevated, grid, cards).
 *  Each template is a partial set of slots. Slots are merged like:
 *  `neo base` + `selected template` + `classNames overrides`.
 */
const DATA_TABLE_TEMPLATES = {
  neo: {
    root: cn(
      "relative w-full overflow-hidden rounded-2xl border shadow-sm",
      "bg-background/70 supports-backdrop-filter:bg-background/45 backdrop-blur",
      "flex flex-col",
      "before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-transparent",
      "data-[accent=on]:before:bg-[color:var(--dt-accent)]",
    ),
    table: cn("w-full text-sm"),
    thead: "border-b",
    theadSticky:
      "sticky top-0 z-10 bg-background/85 supports-[backdrop-filter]:bg-background/60 backdrop-blur",
    trHead: "hover:bg-transparent",
    th: cn(
      "h-11 px-4 text-left align-middle whitespace-nowrap",
      "text-[11px] font-semibold uppercase tracking-wide text-muted-foreground",
    ),
    tbody: cn(
      "[&_tr:last-child]:border-0",
      "[&>tr:nth-child(even)]:bg-muted/20",
    ),
    tr: cn(
      "border-b transition-colors",
      "data-[state=selected]:bg-muted/35",
      "data-[accent=on]:data-[state=selected]:bg-[color:var(--dt-accent)]/10",
    ),
    trClickable: cn(
      "cursor-pointer",
      "hover:bg-muted/35 active:bg-muted/45",
      "data-[accent=on]:hover:bg-[color:var(--dt-accent)]/8",
      "data-[accent=on]:active:bg-[color:var(--dt-accent)]/12",
    ),
    td: "px-4 py-3 align-middle",
    footer: cn(
      "border-t",
      "bg-background/80 supports-backdrop-filter:bg-background/55 backdrop-blur",
    ),
    footerInner: "px-4 py-3",
    metaWrap:
      "flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground",
    controlsWrap:
      "flex flex-wrap items-center justify-between gap-3 sm:justify-end",
    pageSizeLabel: "text-sm font-medium whitespace-nowrap",
    pageSizeTrigger: cn(
      "h-8 w-20",
      "border-muted-foreground/20",
      "focus-visible:ring-2 focus-visible:ring-ring",
      "data-[accent=on]:focus-visible:ring-[color:var(--dt-accent)]/35",
    ),
    pageLabel:
      "hidden sm:flex min-w-[9.25rem] items-center justify-center text-sm font-medium",
    navButton: cn(
      "h-8 w-8 p-0 rounded-md",
      "border-muted-foreground/20",
      "hover:bg-muted/35 hover:border-muted-foreground/40",
      "focus-visible:ring-2 focus-visible:ring-ring",
      "data-[accent=on]:hover:border-[color:var(--dt-accent)]/45",
      "data-[accent=on]:hover:bg-[color:var(--dt-accent)]/10",
      "data-[accent=on]:focus-visible:ring-[color:var(--dt-accent)]/35",
    ),
  } satisfies DataTableSlots,

  glass: {
    root: cn(
      "relative w-full overflow-hidden rounded-2xl border shadow-md",
      "bg-background/55 supports-backdrop-filter:bg-background/25 backdrop-blur-xl",
      "flex flex-col",
      "before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-transparent",
      "data-[accent=on]:before:bg-[color:var(--dt-accent)]",
    ),
    theadSticky:
      "sticky top-0 z-10 bg-background/70 supports-[backdrop-filter]:bg-background/35 backdrop-blur-xl",
    tbody: cn(
      "[&_tr:last-child]:border-0",
      "[&>tr:nth-child(even)]:bg-background/20",
    ),
  } satisfies DataTableSlots,

  compact: {
    th: "h-10 px-3 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground whitespace-nowrap",
    td: "px-3 py-2 text-xs align-middle",
    pageSizeTrigger: "h-8 w-[4.5rem]",
  } satisfies DataTableSlots,

  minimal: {
    root: cn(
      "relative w-full overflow-hidden rounded-xl border-0 shadow-none bg-transparent flex flex-col",
    ),
    theadSticky: "sticky top-0 z-10 bg-background",
    footer: "border-t bg-transparent",
    tbody: "[&_tr:last-child]:border-0",
  } satisfies DataTableSlots,

  clean: {
    root: cn(
      "relative w-full overflow-hidden rounded-2xl border shadow-none",
      "bg-background flex flex-col",
      "before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-transparent",
      "data-[accent=on]:before:bg-[color:var(--dt-accent)]",
    ),
    theadSticky: "sticky top-0 z-10 bg-background",
    tbody: cn(
      "[&_tr:last-child]:border-0",
      "[&>tr:nth-child(even)]:bg-transparent",
    ),
    tr: cn(
      "border-b",
      "data-[state=selected]:bg-muted/35",
      "data-[accent=on]:data-[state=selected]:bg-[color:var(--dt-accent)]/10",
    ),
    trClickable: cn(
      "cursor-pointer",
      "hover:bg-muted/30 active:bg-muted/40",
      "data-[accent=on]:hover:bg-[color:var(--dt-accent)]/8",
      "data-[accent=on]:active:bg-[color:var(--dt-accent)]/12",
    ),
  } satisfies DataTableSlots,

  elevated: {
    root: cn(
      "relative w-full overflow-hidden rounded-3xl border shadow-lg",
      "bg-card flex flex-col",
      "before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-transparent",
      "data-[accent=on]:before:bg-[color:var(--dt-accent)]",
    ),
    theadSticky:
      "sticky top-0 z-10 bg-card/95 supports-[backdrop-filter]:bg-card/75 backdrop-blur",
    tbody: cn(
      "[&_tr:last-child]:border-0",
      "[&>tr:nth-child(even)]:bg-muted/10",
    ),
    th: cn(
      "h-12 px-5 text-left align-middle whitespace-nowrap",
      "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
    ),
    td: "px-5 py-3 align-middle",
  } satisfies DataTableSlots,

  grid: {
    root: cn(
      "relative w-full overflow-hidden rounded-2xl border shadow-sm bg-background flex flex-col",
    ),
    table: cn(
      "w-full text-sm border-separate border-spacing-0",
      "[&_th]:border-b [&_td]:border-b",
      "[&_th:not(:last-child)]:border-r [&_td:not(:last-child)]:border-r",
      "[&_th]:border-muted-foreground/15 [&_td]:border-muted-foreground/10",
    ),
    thead: "border-b-0",
    tbody: "[&_tr:last-child_td]:border-b-0",
    tr: cn(
      "transition-colors",
      "data-[state=selected]:bg-muted/35",
      "data-[accent=on]:data-[state=selected]:bg-[color:var(--dt-accent)]/10",
    ),
    trClickable: cn(
      "cursor-pointer",
      "hover:bg-muted/25 active:bg-muted/35",
      "data-[accent=on]:hover:bg-[color:var(--dt-accent)]/7",
      "data-[accent=on]:active:bg-[color:var(--dt-accent)]/10",
    ),
  } satisfies DataTableSlots,

  cards: {
    root: cn(
      "relative w-full overflow-hidden rounded-2xl border bg-transparent shadow-none flex flex-col",
    ),
    table: cn(
      "w-full text-sm border-separate border-spacing-y-2",
      "[&_tbody_tr_td]:bg-background",
      "[&_tbody_tr_td:first-child]:rounded-l-xl",
      "[&_tbody_tr_td:last-child]:rounded-r-xl",
      "[&_tbody_tr_td]:shadow-sm",
      "[&_thead_tr]:border-b",
    ),
    theadSticky: "sticky top-0 z-10 bg-background",
    tr: cn(
      "border-0",
      "data-[state=selected]:opacity-100",
      "data-[state=selected]:[&_td]:ring-1 data-[state=selected]:[&_td]:ring-muted-foreground/15",
      "data-[accent=on]:data-[state=selected]:[&_td]:ring-[color:var(--dt-accent)]/25",
    ),
    trClickable: cn(
      "cursor-pointer",
      "[&_td]:transition-colors",
      "hover:[&_td]:bg-muted/25 active:[&_td]:bg-muted/35",
      "data-[accent=on]:hover:[&_td]:bg-[color:var(--dt-accent)]/7",
      "data-[accent=on]:active:[&_td]:bg-[color:var(--dt-accent)]/10",
    ),
    tbody: "[&_tr:last-child]:border-0",
  } satisfies DataTableSlots,
} as const;

type BuiltInTemplate = keyof typeof DATA_TABLE_TEMPLATES;

/**
 * Merge slot classnames safely.
 * - Later parts append to earlier ones.
 * - Empty/undefined values are ignored.
 */
function mergeSlots(
  ...parts: Array<DataTableSlots | undefined>
): DataTableSlots {
  const out: DataTableSlots = {};
  for (const p of parts) {
    if (!p) continue;
    for (const k of Object.keys(p) as Array<keyof DataTableSlots>) {
      const v = p[k];
      if (!v) continue;
      out[k] = out[k] ? cn(out[k]!, v) : v;
    }
  }
  return out;
}

export interface DataTableProps<TData extends RowData, TValue = unknown> {
  classNames?: DataTableSlots;
  template?: BuiltInTemplate;
  accent?: DataTableAccent | null;
  accentColor?: string | null;

  page?: number;
  perPage?: number;
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  onClick?: (row: TData) => void;

  columns: DataTableColumnDef<TData, TValue>[];
  data: TData[];

  pageSizeOptions?: number[];
  pageCount: number;
  totalRows?: number;

  isRowsSelected?: boolean;
  rowsSelectedLabel?: string;
  rowPerPageLabel?: string;
  pageLabel?: string;
  ofLabel?: string;

  totalLabel?: string;
  emptyData?: React.ReactNode;

  animate?: boolean;
  heightClassName?: string;

  stickyHeader?: boolean;
  headerScroll?: boolean;
}

/**
 * DataTable
 * ----------
 * A styled, template-driven table for TanStack Table with:
 * - manual pagination + external page state
 * - optional animated body transitions
 * - optional sticky header (works because we removed wrapper div around <table>)
 * - optional row click handler
 * - optional accent highlight system
 *
 * Props:
 * - columns, data: TanStack Table definitions and rows
 * - page, perPage, pageCount: pagination inputs (1-based page)
 * - onPageChange(page): called with 1-based page
 * - onPageSizeChange(size): called when page size changes (also resets to page 1)
 * - template: built-in template key
 * - classNames: slot overrides (merge on top)
 * - accent / accentColor: accent control (off by default)
 * - stickyHeader: enables sticky header behavior (default true)
 * - headerScroll: if true, header stickiness is disabled (use when header must scroll away)
 * - heightClassName: sets the overall component height
 * - animate: animates tbody on page changes
 * - emptyData: custom empty state node
 * - totalRows: optional meta display
 * - isRowsSelected / rowsSelectedLabel: selection meta display
 * - rowPerPageLabel, pageLabel, ofLabel: i18n labels
 */
function DataTable<TData extends RowData, TValue = unknown>({
  columns,
  data,
  pageCount,
  page = 1,
  perPage = 10,
  pageSizeOptions = [10, 20, 30, 40, 50],
  rowPerPageLabel = "Rows per page",
  ofLabel = "of",
  pageLabel = "Page",
  isRowsSelected = true,
  totalRows,
  totalLabel = "records",
  rowsSelectedLabel = "row(s) selected",

  template = "neo",
  classNames,

  accent = null,
  accentColor = null,

  emptyData,

  onPageChange,
  onClick,
  onPageSizeChange,

  animate = true,
  stickyHeader = true,
  headerScroll = false,
  heightClassName = "h-[clamp(22rem,80vh,44rem)] supports-[height:100dvh]:h-[clamp(22rem,80dvh,44rem)]",
}: DataTableProps<TData, TValue>) {
  const safePageCount = Math.max(pageCount ?? 1, 1);
  const pageIndex = Math.min(Math.max(page - 1, 0), safePageCount - 1);
  const pageSize = Math.max(perPage, 1);

  const paginationState = useMemo(
    () => ({ pageIndex, pageSize }),
    [pageIndex, pageSize],
  );

  const table = useTable({
    features: dataTableFeatures,
    data,
    columns: columns as ColumnDef<DataTableFeatures, TData>[],
    pageCount: safePageCount,
    state: { pagination: paginationState },
    manualPagination: true,
    autoResetAll: false,
    autoResetPageIndex: false,
  });

  const clickable = !!onClick;

  const pageKey = useMemo(
    () => `${pageIndex}-${pageSize}-${data.length}`,
    [pageIndex, pageSize, data.length],
  );

  const goToPage = (nextPageIndex: number) => {
    const clamped = Math.min(Math.max(nextPageIndex, 0), safePageCount - 1);
    if (clamped === pageIndex) return;
    onPageChange?.(clamped + 1);
  };

  const changePageSize = (newSize: number) => {
    const size = Math.max(Number(newSize) || 1, 1);
    if (size === pageSize) return;
    onPageSizeChange?.(size);
    onPageChange?.(1);
  };

  const ui = useMemo(() => {
    const builtIn = DATA_TABLE_TEMPLATES[template] ?? DATA_TABLE_TEMPLATES.neo;
    return mergeSlots(DATA_TABLE_TEMPLATES.neo, builtIn, classNames);
  }, [template, classNames]);

  const dtAccent = resolveAccent(accent, accentColor);
  const accentOn = !!dtAccent;
  const dataAccent = accentOn ? "on" : "off";

  const headerIsSticky = stickyHeader && !headerScroll;

  return (
    <div
      data-accent={dataAccent}
      className={cn(ui.root, heightClassName)}
      style={
        accentOn
          ? ({ "--dt-accent": dtAccent } as React.CSSProperties)
          : undefined
      }
    >
      <div className="min-h-0 flex-1">
        <ScrollArea className="h-full">
          <div className="relative w-max min-w-full">
            <Table className={cn(ui.table)}>
              <TableHeader className={cn(ui.thead)}>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id} className={cn(ui.trHead)}>
                    {headerGroup.headers.map((header) => (
                      <TableHead
                        key={header.id}
                        className={cn(
                          headerIsSticky
                            ? cn(ui.theadSticky, "z-20")
                            : undefined,
                          ui.th,
                        )}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>

              {animate ? (
                <AnimatePresence mode="wait" initial={false}>
                  <motion.tbody
                    key={pageKey}
                    className={cn(ui.tbody)}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                  >
                    {table.getRowModel().rows.length
                      ? table.getRowModel().rows.map((row) => (
                          <TableRow
                            key={row.id}
                            data-accent={dataAccent}
                            data-state={
                              row.getIsSelected() ? "selected" : undefined
                            }
                            onClick={() => onClick?.(row.original)}
                            className={cn(
                              ui.tr,
                              clickable ? ui.trClickable : undefined,
                            )}
                          >
                            {row.getVisibleCells().map((cell) => (
                              <TableCell key={cell.id} className={cn(ui.td)}>
                                {flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext(),
                                )}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))
                      : emptyData || (
                          <TableRow data-accent={dataAccent}>
                            <TableCell
                              colSpan={columns.length}
                              className={cn(
                                ui.td,
                                "text-muted-foreground h-28 text-center",
                              )}
                            >
                              No results.
                            </TableCell>
                          </TableRow>
                        )}
                  </motion.tbody>
                </AnimatePresence>
              ) : (
                <TableBody className={cn(ui.tbody)}>
                  {table.getRowModel().rows.length
                    ? table.getRowModel().rows.map((row) => (
                        <TableRow
                          key={row.id}
                          data-accent={dataAccent}
                          data-state={
                            row.getIsSelected() ? "selected" : undefined
                          }
                          onClick={() => onClick?.(row.original)}
                          className={cn(
                            ui.tr,
                            clickable ? ui.trClickable : undefined,
                          )}
                        >
                          {row.getVisibleCells().map((cell) => (
                            <TableCell key={cell.id} className={cn(ui.td)}>
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext(),
                              )}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))
                    : emptyData || (
                        <TableRow data-accent={dataAccent}>
                          <TableCell
                            colSpan={columns.length}
                            className={cn(
                              ui.td,
                              "text-muted-foreground h-28 text-center",
                            )}
                          >
                            No results.
                          </TableCell>
                        </TableRow>
                      )}
                </TableBody>
              )}
            </Table>
          </div>

          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <div className={cn(ui.footer)}>
        <div className={cn(ui.footerInner)}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
            <div className={cn(ui.metaWrap)}>
              {isRowsSelected && (
                <div>
                  {table.getSelectedRowModel().rows.length} {ofLabel}{" "}
                  {table.getRowModel().rows.length} {rowsSelectedLabel}
                </div>
              )}
              {typeof totalRows === "number" && (
                <div>
                  Total: {totalRows} {totalLabel}
                </div>
              )}
            </div>

            <div className={cn(ui.controlsWrap)}>
              <div className="flex items-center gap-2">
                <p className={cn(ui.pageSizeLabel)}>{rowPerPageLabel}</p>
                <Select
                  value={`${pageSize}`}
                  onValueChange={(v) => changePageSize(Number(v))}
                >
                  <SelectTrigger
                    data-accent={dataAccent}
                    className={cn(ui.pageSizeTrigger)}
                  >
                    <SelectValue placeholder={`${pageSize}`} />
                  </SelectTrigger>
                  <SelectContent>
                    {pageSizeOptions.map((size) => (
                      <SelectItem key={size} value={`${size}`}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <div className={cn(ui.pageLabel)}>
                  {pageLabel} {pageIndex + 1} {ofLabel} {safePageCount}
                </div>

                <Button
                  data-accent={dataAccent}
                  aria-label="Go to first page"
                  variant="outline"
                  className={cn("hidden lg:flex", ui.navButton)}
                  onClick={() => goToPage(0)}
                  disabled={pageIndex === 0}
                >
                  <DoubleArrowLeftIcon className="h-4 w-4" />
                </Button>

                <Button
                  data-accent={dataAccent}
                  aria-label="Go to previous page"
                  variant="outline"
                  className={cn(ui.navButton)}
                  onClick={() => goToPage(pageIndex - 1)}
                  disabled={pageIndex === 0}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <Button
                  data-accent={dataAccent}
                  aria-label="Go to next page"
                  variant="outline"
                  className={cn(ui.navButton)}
                  onClick={() => goToPage(pageIndex + 1)}
                  disabled={pageIndex + 1 >= safePageCount}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>

                <Button
                  data-accent={dataAccent}
                  aria-label="Go to last page"
                  variant="outline"
                  className={cn("hidden lg:flex", ui.navButton)}
                  onClick={() => goToPage(safePageCount - 1)}
                  disabled={pageIndex + 1 >= safePageCount}
                >
                  <DoubleArrowRightIcon className="h-4 w-4" />
                </Button>
              </div>

              <div className="text-muted-foreground w-full text-center text-xs sm:hidden">
                {pageLabel} {pageIndex + 1} {ofLabel} {safePageCount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { DataTable, DATA_TABLE_TEMPLATES };
