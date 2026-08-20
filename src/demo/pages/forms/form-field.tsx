import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/Button/button";
import { Form } from "@/components/Form/form";
import { FormField } from "@/components/Form/form-field";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const schema = z.object({
  name: z.string().min(2, "Mínimo 2 caracteres"),
});

const code = `import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button, Form, FormField } from '@blencm/ui';

const schema = z.object({
  name: z.string().min(2, 'Mínimo 2 caracteres')
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
        label="Name"
        placeholder="Jane Doe"
        requiredLabel
      />
      <Button type="submit">Enviar</Button>
    </Form>
  );
}`;

export default function FormFieldDemoPage() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { name: "" },
  });

  return (
    <DemoPage
      title="FormField"
      description="Input controlado por React Hook Form, con label, required y mensaje de error."
    >
      <DemoPreview code={code} className="max-w-sm">
        <Form
          methods={form}
          onSubmit={(values) => console.log(values)}
          formProps={{ className: "space-y-4" }}
        >
          <FormField
            control={form.control}
            name="name"
            label="Name"
            placeholder="Jane Doe"
            requiredLabel
          />
          <Button type="submit">Enviar</Button>
        </Form>
      </DemoPreview>
    </DemoPage>
  );
}
