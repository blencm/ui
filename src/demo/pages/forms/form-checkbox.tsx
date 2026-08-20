import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/Button/button";
import { Form } from "@/components/Form/form";
import { FormCheckbox } from "@/components/Form/form-checkbox";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function FormCheckboxDemoPage() {
  const t = useCopy({
    en: {
      mustAccept: "You must accept the terms",
      accept: "I accept the terms",
      acceptDescription: "This field is required to continue.",
      submit: "Submit",
    },
    es: {
      mustAccept: "Debes aceptar los términos",
      accept: "Acepto los términos",
      acceptDescription: "Este campo es obligatorio para continuar.",
      submit: "Enviar",
    },
  });

  const schema = z.object({
    accepted: z.boolean().refine(Boolean, t.mustAccept),
  });

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { accepted: false },
  });

  const code = `import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button, Form, FormCheckbox } from '@blencm/ui';

const schema = z.object({
  accepted: z.boolean().refine(Boolean, '${t.mustAccept}')
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
        label="${t.accept}"
        description="${t.acceptDescription}"
      />
      <Button type="submit">${t.submit}</Button>
    </Form>
  );
}`;

  return (
    <DemoPage title="FormCheckbox">
      <DemoPreview code={code} className="max-w-sm">
        <Form
          methods={form}
          onSubmit={(values) => console.log(values)}
          formProps={{ className: "space-y-4" }}
        >
          <FormCheckbox
            control={form.control}
            name="accepted"
            label={t.accept}
            description={t.acceptDescription}
          />
          <Button type="submit">{t.submit}</Button>
        </Form>
      </DemoPreview>
    </DemoPage>
  );
}
