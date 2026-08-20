import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/Button/button";
import { Form } from "@/components/Form/form";
import { FormSelect } from "@/components/Form/form-select";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const schema = z.object({
  role: z.enum(["owner", "editor", "viewer"]),
});

export default function FormSelectDemoPage() {
  const t = useCopy({
    en: {
      role: "Role",
      placeholder: "Select a role",
      owner: "Owner",
      editor: "Editor",
      viewer: "Viewer",
      submit: "Submit",
    },
    es: {
      role: "Rol",
      placeholder: "Selecciona un rol",
      owner: "Propietario",
      editor: "Editor",
      viewer: "Visor",
      submit: "Enviar",
    },
  });

  const roleItems = [
    { label: t.owner, value: "owner" },
    { label: t.editor, value: "editor" },
    { label: t.viewer, value: "viewer" },
  ];

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { role: "viewer" as const },
  });

  const code = `import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button, Form, FormSelect } from '@blencm/ui';

const schema = z.object({
  role: z.enum(['owner', 'editor', 'viewer'])
});

const ROLE_ITEMS = [
  { label: '${t.owner}', value: 'owner' },
  { label: '${t.editor}', value: 'editor' },
  { label: '${t.viewer}', value: 'viewer' }
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
        label="${t.role}"
        placeholder="${t.placeholder}"
        items={ROLE_ITEMS}
      />
      <Button type="submit">${t.submit}</Button>
    </Form>
  );
}`;

  return (
    <DemoPage title="FormSelect">
      <DemoPreview code={code} className="max-w-sm">
        <Form
          methods={form}
          onSubmit={(values) => console.log(values)}
          formProps={{ className: "space-y-4" }}
        >
          <FormSelect
            control={form.control}
            name="role"
            label={t.role}
            placeholder={t.placeholder}
            items={roleItems}
          />
          <Button type="submit">{t.submit}</Button>
        </Form>
      </DemoPreview>
    </DemoPage>
  );
}
