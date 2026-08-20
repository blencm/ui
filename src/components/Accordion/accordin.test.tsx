import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

describe("Accordion", () => {
  it("renders Accordion with items and toggles content", () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Section 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    // Ensure content is initially absent
    expect(screen.queryByText("Content 1")).not.toBeInTheDocument();

    // Click to open
    fireEvent.click(screen.getByText("Section 1"));
    expect(screen.getByText("Content 1")).toBeInTheDocument();

    // Click to close
    fireEvent.click(screen.getByText("Section 1"));
    expect(screen.queryByText("Content 1")).not.toBeInTheDocument();
  });
});
