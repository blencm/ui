import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./button";
import "@testing-library/jest-dom";

describe("Button component", () => {
  test("renders with default variant and size", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("h-9 px-4 py-2");
  });

  test("renders with secondary variant and small size", () => {
    render(
      <Button variant="secondary" size="sm">
        Small Button
      </Button>
    );
    const button = screen.getByRole("button", { name: /small button/i });
    expect(button).toHaveClass("bg-secondary text-secondary-foreground");
    expect(button).toHaveClass("h-8 rounded-md px-3 text-xs");
  });

  test("disables the button when loading", () => {
    render(<Button loading>Loading</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});
