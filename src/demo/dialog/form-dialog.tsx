import { Button } from "@/components/Button/button";
import { Form } from "@/components/Form/form";
import { FormCheckbox } from "@/components/Form/form-checkbox";
import { FormField } from "@/components/Form/form-field";
import { FormSelect } from "@/components/Form/form-select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { UiSelect } from "@/components/ui/select";
import { COUNTRY_ITEMS, STATUS_OPTIONS } from "../data";

const schema = z.object({
  name: z.string().min(2, "Minimum 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Minimum 8 characters"),
  role: z.enum(["owner", "editor", "viewer"]),
  accepted: z.boolean().refine(Boolean, "You must accept the terms"),
});

type FormValues = z.infer<typeof schema>;

export function FormDialog() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "viewer",
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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <FormField
          control={form.control}
          name="password"
          label="Password"
          type="password"
          placeholder="••••••••"
          requiredLabel
        />

        <UiSelect
          label="Role"
          placeholder="Select a role"
          items={COUNTRY_ITEMS}
        />

        <FormSelect
          control={form.control}
          name="role"
          label="Role"
          placeholder="Select a role"
          items={COUNTRY_ITEMS}
          searchPlaceholder="Search roles..."
          emptyText="No roles available"
        />
        <UiSelect
          items={STATUS_OPTIONS}
          value={"all"}
          className="h-9 w-20"
        />
      </div>
      <div className="flex w-full items-end justify-between gap-4">
        <div className="min-w-0 flex-1">
          <FormSelect
            control={form.control}
            name="role"
            label="Role"
            placeholder="Select a role"
            items={COUNTRY_ITEMS}
            searchPlaceholder="Search roles..."
            emptyText="No roles available"
          />
        </div>

        <UiSelect
          items={STATUS_OPTIONS}
          value="all"
          selectClassName="w-auto shrink-0"
          className="h-9 min-w-14"
        />
      </div>

      <FormSelect
        control={form.control}
        name="role"
        label="Role"
        placeholder="Select a role"
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
