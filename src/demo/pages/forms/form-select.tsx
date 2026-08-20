import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/Button/button";
import { Form } from "@/components/Form/form";
import { FormSelect } from "@/components/Form/form-select";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const schema = z.object({
  role: z.enum(["owner", "editor", "viewer"]),
});

const ROLE_ITEMS = [
  { label: "Owner", value: "owner" },
  { label: "Editor", value: "editor" },
  { label: "Viewer", value: "viewer" },
];

const code = `import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button, Form, FormSelect } from '@blencm/ui';

const schema = z.object({
  role: z.enum(['owner', 'editor', 'viewer'])
});

const ROLE_ITEMS = [
  { label: 'Owner', value: 'owner' },
  { label: 'Editor', value: 'editor' },
  { label: 'Viewer', value: 'viewer' }
];

export function FormSelectDemo() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { role: 'viewer' as const }
  });

  return (
    <Form
      methods={form}
      onSubmit={(values) => console.log(values)}
      formProps={{ className: 'space-y-4' }}
    >
      <FormSelect
        control={form.control}
        name="role"
        label="Role"
        placeholder="Select a role"
        items={ROLE_ITEMS}
      />
      <Button type="submit">Enviar</Button>
    </Form>
  );
}`;

export default function FormSelectDemoPage() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { role: "viewer" as const },
  });

  return (
    <DemoPage
      title="FormSelect"
      description="Select ligado a React Hook Form, con modo searchable opcional."
    >
      <DemoPreview code={code} className="max-w-sm">
        <Form
          methods={form}
          onSubmit={(values) => console.log(values)}
          formProps={{ className: "space-y-4" }}
        >
          <FormSelect
            control={form.control}
            name="role"
            label="Role"
            placeholder="Select a role"
            items={ROLE_ITEMS}
          />
          <Button type="submit">Enviar</Button>
        </Form>
      </DemoPreview>
    </DemoPage>
  );
}
