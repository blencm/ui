import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/Button/button";
import { Form } from "@/components/Form/form";
import { FormTextarea } from "@/components/Form/form-textarea";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function FormTextareaDemoPage() {
  const t = useCopy({
    en: {
      min10: "Minimum 10 characters",
      description: "Description",
      placeholder: "Enter a description",
      submit: "Submit",
    },
    es: {
      min10: "Mínimo 10 caracteres",
      description: "Descripción",
      placeholder: "Ingrese una descripción",
      submit: "Enviar",
    },
  });

  const schema = z.object({
    description: z.string().min(10, t.min10),
  });

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { description: "" },
  });

  const code = `import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button, Form, FormTextarea } from '@blencm/ui';

const schema = z.object({
  description: z.string().min(10, '${t.min10}')
});

export function FormTextareaDemo() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { description: '' }
  });

  return (
    <Form
      methods={form}
      onSubmit={(values) => console.log(values)}
      formProps={{ className: 'space-y-4' }}
    >
      <FormTextarea
        control={form.control}
        name="description"
        label="${t.description}"
        placeholder="${t.placeholder}"
        requiredLabel
        rows={4}
      />
      <Button type="submit">${t.submit}</Button>
    </Form>
  );
}`;

  return (
    <DemoPage title="FormTextarea">
      <DemoPreview code={code} className="max-w-md">
        <Form
          methods={form}
          onSubmit={(values) => console.log(values)}
          formProps={{ className: "space-y-4" }}
        >
          <FormTextarea
            control={form.control}
            name="description"
            label={t.description}
            placeholder={t.placeholder}
            requiredLabel
            rows={4}
          />
          <Button type="submit">{t.submit}</Button>
        </Form>
      </DemoPreview>
    </DemoPage>
  );
}
