import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/Button/button";
import { Form } from "@/components/Form/form";
import { FormCheckbox } from "@/components/Form/form-checkbox";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const schema = z.object({
  accepted: z.boolean().refine(Boolean, "Debes aceptar los términos"),
});

const code = `import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button, Form, FormCheckbox } from '@blencm/ui';

const schema = z.object({
  accepted: z.boolean().refine(Boolean, 'Debes aceptar los términos')
});

export function FormCheckboxDemo() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { accepted: false }
  });

  return (
    <Form
      methods={form}
      onSubmit={(values) => console.log(values)}
      formProps={{ className: 'space-y-4' }}
    >
      <FormCheckbox
        control={form.control}
        name="accepted"
        label="Acepto los términos"
        description="Este campo es obligatorio para continuar."
      />
      <Button type="submit">Enviar</Button>
    </Form>
  );
}`;

export default function FormCheckboxDemoPage() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { accepted: false },
  });

  return (
    <DemoPage
      title="FormCheckbox"
      description="Checkbox ligado a React Hook Form."
    >
      <DemoPreview code={code} className="max-w-sm">
        <Form
          methods={form}
          onSubmit={(values) => console.log(values)}
          formProps={{ className: "space-y-4" }}
        >
          <FormCheckbox
            control={form.control}
            name="accepted"
            label="Acepto los términos"
            description="Este campo es obligatorio para continuar."
          />
          <Button type="submit">Enviar</Button>
        </Form>
      </DemoPreview>
    </DemoPage>
  );
}
