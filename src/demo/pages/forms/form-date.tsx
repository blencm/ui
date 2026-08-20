import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/Button/button";
import { Form } from "@/components/Form/form";
import { FormDate } from "@/components/Form/form-date";
import { useCopy } from "../../i18n/copy";
import { useDateFnsLocale } from "../../i18n/date-locale";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function FormDateDemoPage() {
  const dateLocale = useDateFnsLocale();
  const t = useCopy({
    en: {
      requiredDate: "Select a date",
      startDate: "Start date",
      placeholder: "Select a date",
      submit: "Submit",
    },
    es: {
      requiredDate: "Selecciona una fecha",
      startDate: "Fecha de inicio",
      placeholder: "Seleccione una fecha",
      submit: "Enviar",
    },
  });

  const schema = z.object({
    start_date: z.string().min(1, t.requiredDate),
  });

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { start_date: "" },
  });

  const code = `import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button, Form, FormDate } from '@blencm/ui';

const schema = z.object({
  start_date: z.string().min(1, '${t.requiredDate}')
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
        label="${t.startDate}"
        placeholder="${t.placeholder}"
        valueMode="string"
        requiredLabel
      />
      <Button type="submit">${t.submit}</Button>
    </Form>
  );
}`;

  return (
    <DemoPage title="FormDate">
      <DemoPreview code={code} className="max-w-sm">
        <Form
          methods={form}
          onSubmit={(values) => console.log(values)}
          formProps={{ className: "space-y-4" }}
        >
          <FormDate
            control={form.control}
            name="start_date"
            label={t.startDate}
            placeholder={t.placeholder}
            locale={dateLocale}
            valueMode="string"
            requiredLabel
          />
          <Button type="submit">{t.submit}</Button>
        </Form>
      </DemoPreview>
    </DemoPage>
  );
}
