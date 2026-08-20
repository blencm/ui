import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button, Form, FormField } from "../../src/index";

const formSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

type UserFormValue = z.infer<typeof formSchema>;

export default function UserAuthForm() {
  const [loading, setLoading] = useState(false);
  const defaultValues = {
    email: "demo@domain.com",
  };
  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: UserFormValue) => {
    setLoading(true);
  };

  return (
    <Form
      methods={form}
      onSubmit={onSubmit}
      formProps={{
        className: "space-y-4",
      }}
    >
      <FormField
        control={form.control}
        name="email"
        placeholder="Enter your email"
      />
      <FormField
        control={form.control}
        name="password"
        type="password"
        placeholder="Enter your password"
      />
      <Button className="ml-auto w-full" type="submit" loading={loading}>
        Log In
      </Button>
    </Form>
  );
}
