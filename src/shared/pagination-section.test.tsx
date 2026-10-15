import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { PaginationSection } from "./pagination-section";

test("zero page size produces no pages and does not allow navigation", () => {
  const setCurrentPage = jest.fn();
  render(<PaginationSection totalPosts={10} postsPerPage={0} currentPage={1} setCurrentPage={setCurrentPage} />);
  expect(screen.queryByText("1")).not.toBeInTheDocument();
  fireEvent.click(screen.getByText("Next"));
  expect(setCurrentPage).not.toHaveBeenCalled();
});

test("large totals render only neighboring pages", () => {
  render(<PaginationSection totalPosts={1_000_000_000} postsPerPage={1} currentPage={500} setCurrentPage={jest.fn()} />);
  expect(screen.getByText("499")).toBeInTheDocument();
  expect(screen.getByText("500")).toHaveAttribute("aria-current", "page");
  expect(screen.getByText("501")).toBeInTheDocument();
  expect(screen.queryByText("502")).not.toBeInTheDocument();
});
