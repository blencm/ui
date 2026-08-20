import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/Button/button";
import { Form } from "@/components/Form/form";
import { FormTextarea } from "@/components/Form/form-textarea";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const schema = z.object({
  description: z.string().min(10, "Mínimo 10 caracteres"),
});

const code = `import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button, Form, FormTextarea } from '@blencm/ui';

const schema = z.object({
  description: z.string().min(10, 'Mínimo 10 caracteres')
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
        label="Descripción"
        placeholder="Ingrese una descripción"
        requiredLabel
        rows={4}
      />
      <Button type="submit">Enviar</Button>
    </Form>
  );
}`;

export default function FormTextareaDemoPage() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { description: "" },
  });

  return (
    <DemoPage
      title="FormTextarea"
      description="Textarea ligado a React Hook Form."
    >
      <DemoPreview code={code} className="max-w-md">
        <Form
          methods={form}
          onSubmit={(values) => console.log(values)}
          formProps={{ className: "space-y-4" }}
        >
          <FormTextarea
            control={form.control}
            name="description"
            label="Descripción"
            placeholder="Ingrese una descripción"
            requiredLabel
            rows={4}
          />
          <Button type="submit">Enviar</Button>
        </Form>
      </DemoPreview>
    </DemoPage>
  );
}
