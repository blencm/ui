import { FormField } from "./form-field";
import { zodResolver } from "@hookform/resolvers/zod";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "./form";

const userFormSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(1, { message: "Name should be at least 1 character" }),
});

type UserFormSchemaType = z.infer<typeof userFormSchema>;

describe("Form Components", () => {
  it("renders FormField with label, control, description, and message", () => {
    const Wrapper = () => {
      const form = useForm<UserFormSchemaType>({
        resolver: zodResolver(userFormSchema),
        defaultValues: { name: "" },
      });

      const onSubmit = (data?: UserFormSchemaType) => {
        console.log(data);
      };

      return (
        <Form
          methods={form}
          onSubmit={onSubmit}
          formProps={{
            autoComplete: "off",
          }}
        >
          <FormField
            control={form.control}
            name="name"
            label="Name"
            defaultValue="Name"
            placeholder="Enter your name"
            required={true}
          />
        </Form>
      );
    };

    render(<Wrapper />);

    // Verify presence of label, input, description, and message
    expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
  });

  it("displays error message when validation fails", async () => {
    const Wrapper = () => {
      const form = useForm<UserFormSchemaType>({
        resolver: zodResolver(userFormSchema),
        defaultValues: {},
      });

      const onSubmit = (data?: UserFormSchemaType) => {
        console.log(data);
      };

      return (
        <Form
          methods={form}
          onSubmit={onSubmit}
          formProps={{
            autoComplete: "off",
          }}
        >
          <FormField
            control={form.control}
            name="name"
            placeholder="Enter your name"
          />
          <button type="submit">Submit</button>
        </Form>
      );
    };

    render(<Wrapper />);

    // Simulate user leaving the field empty and clicking Submit
    fireEvent.change(screen.getByPlaceholderText("Enter your name"), {
      target: { value: "" },
    });
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    // Verify that the error message appears
    expect(
      await screen.findByText("Name is required", { exact: false })
    ).toBeInTheDocument();
  });
});
