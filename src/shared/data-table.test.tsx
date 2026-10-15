import "@testing-library/jest-dom";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { DataTable, type DataTableColumnDef } from "./data-table";
import { Table, TableBody, TableCell, TableRow } from "../components/table";

type Item = { name: string };
const data = Array.from({ length: 25 }, (_, index) => ({ name: `Record ${index + 1}` }));
const columns: DataTableColumnDef<Item>[] = [{ accessorKey: "name", header: "Name" }];

function bodyRows() {
  return within(screen.getByRole("table")).getAllByRole("row").slice(1);
}

function choosePageSize(label: string) {
  fireEvent.click(screen.getByRole("button", { name: "Rows per page" }));
  fireEvent.click(screen.getByRole("option", { name: new RegExp(`^${label}$`) }));
}

test("client pagination lists the selected page size and resets after resizing", () => {
  render(<DataTable columns={columns} data={data} paginationMode="client" internalScroll={false} animate={false} />);
  expect(bodyRows()).toHaveLength(10);
  fireEvent.click(screen.getByRole("button", { name: "Go to next page" }));
  expect(bodyRows()[0]).toHaveTextContent("Record 11");
  choosePageSize("20");
  expect(bodyRows()).toHaveLength(20);
  expect(bodyRows()[0]).toHaveTextContent("Record 1");
});

test("All displays the entire client dataset and normal pagination can be restored", () => {
  render(<DataTable columns={columns} data={data} paginationMode="client" showAllOption allRowsLabel="All records" animate={false} />);
  choosePageSize("All records");
  expect(bodyRows()).toHaveLength(25);
  expect(screen.getByRole("button", { name: "Go to next page" })).toBeDisabled();
  choosePageSize("10");
  expect(bodyRows()).toHaveLength(10);
  expect(screen.getByRole("button", { name: "Go to next page" })).toBeEnabled();
});

test("manual pagination keeps supplied rows and requests the full total through numeric callbacks", () => {
  const onPageSizeChange = jest.fn();
  const onPageChange = jest.fn();
  render(<DataTable columns={columns} data={data.slice(10, 20)} page={2} perPage={10} pageCount={3} totalRows={25} showAllOption onPageSizeChange={onPageSizeChange} onPageChange={onPageChange} animate={false} />);
  expect(bodyRows()).toHaveLength(10);
  expect(bodyRows()[0]).toHaveTextContent("Record 11");
  choosePageSize("All");
  expect(onPageSizeChange).toHaveBeenCalledWith(25);
  expect(onPageChange).toHaveBeenCalledWith(1);
});

test("manual pagination omits All when the total is unknown across multiple pages", () => {
  render(<DataTable columns={columns} data={data.slice(0, 10)} pageCount={3} showAllOption animate={false} />);
  fireEvent.click(screen.getByRole("button", { name: "Rows per page" }));
  expect(screen.queryByRole("option", { name: "All" })).not.toBeInTheDocument();
});

test("disabling internal scroll removes the viewport and fixed height, including the empty state", () => {
  const { container, rerender } = render(<DataTable columns={columns} data={data} internalScroll={false} heightClassName="h-20" animate={false} />);
  expect(container.querySelector("[data-radix-scroll-area-viewport]")).toBeNull();
  expect(container.firstElementChild).toHaveClass("h-auto", "overflow-visible");
  expect(container.firstElementChild).not.toHaveClass("h-20");
  rerender(<DataTable columns={columns} data={[]} internalScroll={false} emptyData="Empty table" animate={false} />);
  expect(screen.getByText("Empty table").parentElement).not.toHaveClass("absolute");
});

test("the default scroll viewport is preserved", () => {
  const { container } = render(<DataTable columns={columns} data={data} heightClassName="h-20" animate={false} />);
  expect(container.querySelector("[data-radix-scroll-area-viewport]")).not.toBeNull();
  expect(container.firstElementChild).toHaveClass("h-20");
});

test("Table controls wrapper scrolling without forwarding its option to the HTML table", () => {
  const { rerender } = render(<Table internalScroll containerClassName="max-h-32"><TableBody><TableRow><TableCell>Item</TableCell></TableRow></TableBody></Table>);
  expect(screen.getByRole("table").parentElement).toHaveClass("overflow-auto");
  rerender(<Table internalScroll={false} containerClassName="overflow-auto"><TableBody><TableRow><TableCell>Item</TableCell></TableRow></TableBody></Table>);
  expect(screen.getByRole("table").parentElement).toHaveClass("overflow-visible");
  expect(screen.getByRole("table").parentElement).not.toHaveClass("overflow-auto");
  expect(screen.getByRole("table")).not.toHaveAttribute("internalScroll");
});

