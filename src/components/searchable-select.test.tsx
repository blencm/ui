import "@testing-library/jest-dom";
import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { SearchableSelect } from "./searchable-select";
import { Form } from "./Form/form";
import { FormSelect } from "./Form/form-select";
import { useForm } from "react-hook-form";

const items = [
  { value: "a", label: "Alpha" },
  { value: "b", label: "Beta", disabled: true },
  { value: "c", label: "Gamma" },
];

test("forwards labels, descriptions, refs and blur to the input", () => {
  const ref = React.createRef<HTMLInputElement>();
  const onBlur = jest.fn();
  render(<>
    <label htmlFor="choice">Choice</label>
    <span id="help">Select one</span>
    <SearchableSelect id="choice" aria-describedby="help" ref={ref} onBlur={onBlur} items={items} />
  </>);
  const input = screen.getByRole("combobox", { name: "Choice" });
  expect(ref.current).toBe(input);
  expect(input).toHaveAccessibleDescription("Select one");
  fireEvent.focus(input);
  expect(input).toHaveAttribute("aria-expanded", "true");
  fireEvent.blur(input);
  expect(onBlur).toHaveBeenCalledTimes(1);
  expect(input).toHaveAttribute("aria-expanded", "false");
});

test("ArrowUp from an empty selection starts at the last enabled option", () => {
  const onValueChange = jest.fn();
  render(<SearchableSelect items={items} onValueChange={onValueChange} />);
  const input = screen.getByRole("combobox");
  fireEvent.keyDown(input, { key: "ArrowUp" });
  fireEvent.keyDown(input, { key: "Enter" });
  expect(onValueChange).toHaveBeenCalledWith("c", items[2]);
});

test("a searchable form select retains its label and receives focus on validation failure", async () => {
  function Example() {
    const methods = useForm({ defaultValues: { choice: "" } });
    return <Form methods={methods} onSubmit={jest.fn()}>
      <FormSelect name="choice" label="Choice" items={items} searchable rules={{ required: "Required" }} />
      <button type="submit">Submit</button>
    </Form>;
  }
  render(<Example />);
  const input = screen.getByRole("combobox", { name: "Choice" });
  fireEvent.click(screen.getByRole("button", { name: "Submit" }));
  expect(await screen.findByText("Required")).toBeInTheDocument();
  expect(input).toHaveFocus();
  expect(input).toHaveAttribute("aria-invalid", "true");
});
