import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { UiDate } from "./ui-date";
import { UiTime } from "./ui-time";

describe("Date and time value validation", () => {
  test.each(["2026-02-30", "2026-13-01", "2026-00-10"])(
    "rejects impossible date %s",
    (value) => {
      render(<UiDate value={value} placeholder="Choose date" />);
      expect(screen.getByRole("button")).toHaveAttribute("data-empty", "true");
      expect(screen.getByText("Choose date")).toBeInTheDocument();
    },
  );

  test("accepts a leap day", () => {
    render(<UiDate value="2024-02-29" />);
    expect(screen.getByRole("button")).toHaveAttribute("data-empty", "false");
  });

  test("handles an invalid custom date pattern", () => {
    render(<UiDate value="invalid" valueFormatPattern="invalid pattern" placeholder="Choose date" />);
    expect(screen.getByText("Choose date")).toBeInTheDocument();
  });

  test.each(["12:30:99", "12:30:99 PM"])("rejects invalid seconds in %s", (value) => {
    render(<UiTime value={value} placeholder="Choose time" />);
    expect(screen.getByText("Choose time")).toBeInTheDocument();
  });

  test("handles an invalid custom time pattern", () => {
    render(<UiTime value="invalid" valueFormatPattern="invalid pattern" placeholder="Choose time" />);
    expect(screen.getByText("Choose time")).toBeInTheDocument();
  });
});
