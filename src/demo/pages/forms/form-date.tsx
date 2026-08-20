import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/Button/button";
import { Form } from "@/components/Form/form";
import { FormDate } from "@/components/Form/form-date";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const schema = z.object({
  start_date: z.string().min(1, "Selecciona una fecha"),
});

const code = `import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button, Form, FormDate } from '@blencm/ui';

const schema = z.object({
  start_date: z.string().min(1, 'Selecciona una fecha')
});

export function FormDateDemo() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { start_date: '' }
  });

  return (
    <Form
      methods={form}
      onSubmit={(values) => console.log(values)}
      formProps={{ className: 'space-y-4' }}
    >
      <FormDate
        control={form.control}
        name="start_date"
        label="Fecha de inicio"
        placeholder="Seleccione una fecha"
        valueMode="string"
        requiredLabel
      />
      <Button type="submit">Enviar</Button>
    </Form>
  );
}`;

export default function FormDateDemoPage() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { start_date: "" },
  });

  return (
    <DemoPage
      title="FormDate"
      description="Selector de fecha ligado a React Hook Form."
    >
      <DemoPreview code={code} className="max-w-sm">
        <Form
          methods={form}
          onSubmit={(values) => console.log(values)}
          formProps={{ className: "space-y-4" }}
        >
          <FormDate
            control={form.control}
            name="start_date"
            label="Fecha de inicio"
            placeholder="Seleccione una fecha"
            valueMode="string"
            requiredLabel
          />
          <Button type="submit">Enviar</Button>
        </Form>
      </DemoPreview>
    </DemoPage>
  );
}
