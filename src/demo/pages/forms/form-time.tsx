import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/Button/button";
import { Form } from "@/components/Form/form";
import { FormTime } from "@/components/Form/form-time";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const schema = z.object({
  start_time: z.string().optional(),
});

export default function FormTimeDemoPage() {
  const t = useCopy({
    en: {
      startTime: "Start time",
      placeholder: "Select time",
      submit: "Submit",
    },
    es: {
      startTime: "Hora de inicio",
      placeholder: "Seleccione una hora",
      submit: "Enviar",
    },
  });

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { start_time: "" },
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
        label="${t.startTime}"
        placeholder="${t.placeholder}"
      />
      <Button type="submit">${t.submit}</Button>
    </Form>
  );
}`;

  return (
    <DemoPage title="FormTime">
      <DemoPreview code={code} className="max-w-sm">
        <Form
          methods={form}
          onSubmit={(values) => console.log(values)}
          formProps={{ className: "space-y-4" }}
        >
          <FormTime
            control={form.control}
            name="start_time"
            label={t.startTime}
            placeholder={t.placeholder}
          />
          <Button type="submit">{t.submit}</Button>
        </Form>
      </DemoPreview>
    </DemoPage>
  );
}
