import { Button } from "@/components/Button/button";
import { Form } from "@/components/Form/form";
import { FormCheckbox } from "@/components/Form/form-checkbox";
import { FormField } from "@/components/Form/form-field";
import { FormSelect } from "@/components/Form/form-select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { COUNTRY_ITEMS } from "./data";
import { UiSelect } from "@/components/ui/select";
import { FormDate } from "@/components/Form/form-date";
import { FormTime } from "@/components/Form/form-time";
import { FormTextarea } from "@/components/Form/form-textarea";

const schema = z.object({
  name: z.string().min(2, "Minimum 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Minimum 8 characters"),
  description: z.string().min(10, "Minimum 10 characters"),
  role: z.enum(["owner", "editor", "viewer"]),
  country: z.string().optional(),
  start_date: z.string().optional(),
  start_time: z.string().optional(),
  accepted: z.boolean().refine(Boolean, "You must accept the terms"),
});

type FormValues = z.infer<typeof schema>;

export function FormDemo() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "viewer",
      description: "",
      accepted: false,
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <Form
      methods={form}
      onSubmit={onSubmit}
      formProps={{ className: "space-y-4" }}
    >
      <FormField
        control={form.control}
        name="name"
        label="Name"
        placeholder="Jane Doe"
        requiredLabel
      />

      <FormField
        control={form.control}
        name="email"
        label="Email"
        type="email"
        placeholder="jane@example.com"
        requiredLabel
      />

      <FormDate
        control={form.control}
        name="start_date"
        label="Fecha de inicio"
        placeholder="Seleccione una fecha"
        valueMode="string"
        formatPattern=""
      />

      <FormTime
        control={form.control}
        name="start_time"
        label="Start time"
        placeholder="Select time"
      />

      <FormTextarea
        control={form.control}
        name="description"
        label="Descripción"
        placeholder="Ingrese una descripción"
        requiredLabel
        rows={4}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          control={form.control}
          name="password"
          label="Password"
          type="password"
          placeholder="••••••••"
          requiredLabel
        />

        <FormSelect
          control={form.control}
          name="role"
          label="Role"
          placeholder="Select a role"
          items={["owner", "editor", "viewer"]}
        />
      </div>

      <FormSelect
        control={form.control}
        name="country"
        label="Country"
        placeholder="Select a country"
        searchable
        items={COUNTRY_ITEMS}
        searchPlaceholder="Search roles..."
        emptyText="No roles available"
      />

      <UiSelect items={COUNTRY_ITEMS} />

      <FormCheckbox
        control={form.control}
        name="accepted"
        label="I accept the terms"
        description="This field is required to continue."
      />

      <Button type="submit" className="w-full">
        Create account
      </Button>
    </Form>
  );
}
