import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/Button/button";
import { Form } from "@/components/Form/form";
import { FormTime } from "@/components/Form/form-time";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const schema = z.object({
  start_time: z.string().optional(),
});

const code = `import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button, Form, FormTime } from '@blencm/ui';

const schema = z.object({
  start_time: z.string().optional()
});

export function FormTimeDemo() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { start_time: '' }
  });

  return (
    <Form
      methods={form}
      onSubmit={(values) => console.log(values)}
      formProps={{ className: 'space-y-4' }}
    >
      <FormTime
        control={form.control}
        name="start_time"
        label="Start time"
        placeholder="Select time"
      />
      <Button type="submit">Enviar</Button>
    </Form>
  );
}`;

export default function FormTimeDemoPage() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { start_time: "" },
  });

  return (
    <DemoPage
      title="FormTime"
      description="Selector de hora ligado a React Hook Form."
    >
      <DemoPreview code={code} className="max-w-sm">
        <Form
          methods={form}
          onSubmit={(values) => console.log(values)}
          formProps={{ className: "space-y-4" }}
        >
          <FormTime
            control={form.control}
            name="start_time"
            label="Start time"
            placeholder="Select time"
          />
          <Button type="submit">Enviar</Button>
        </Form>
      </DemoPreview>
    </DemoPage>
  );
}
