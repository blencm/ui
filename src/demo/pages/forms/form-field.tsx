import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/Button/button";
import { Form } from "@/components/Form/form";
import { FormField } from "@/components/Form/form-field";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function FormFieldDemoPage() {
  const t = useCopy({
    en: {
      min2: "Minimum 2 characters",
      name: "Name",
      placeholder: "Jane Doe",
      submit: "Submit",
    },
    es: {
      min2: "Mínimo 2 caracteres",
      name: "Nombre",
      placeholder: "Jane Doe",
      submit: "Enviar",
    },
  });

  const schema = z.object({
    name: z.string().min(2, t.min2),
  });

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { name: "" },
  });

  const code = `import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button, Form, FormField } from '@blencm/ui';

const schema = z.object({
  name: z.string().min(2, '${t.min2}')
});

export function FormFieldDemo() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { name: '' }
  });

  return (
    <Form
      methods={form}
      onSubmit={(values) => console.log(values)}
      formProps={{ className: 'space-y-4' }}
    >
      <FormField
        control={form.control}
        name="name"
        label="${t.name}"
        placeholder="${t.placeholder}"
        requiredLabel
      />
      <Button type="submit">${t.submit}</Button>
    </Form>
  );
}`;

  return (
    <DemoPage title="FormField">
      <DemoPreview code={code} className="max-w-sm">
        <Form
          methods={form}
          onSubmit={(values) => console.log(values)}
          formProps={{ className: "space-y-4" }}
        >
          <FormField
            control={form.control}
            name="name"
            label={t.name}
            placeholder={t.placeholder}
            requiredLabel
          />
          <Button type="submit">{t.submit}</Button>
        </Form>
      </DemoPreview>
    </DemoPage>
  );
}
