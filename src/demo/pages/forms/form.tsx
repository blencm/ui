import { FormDemo } from "../../form-demo";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function FormDemoPage() {
  const t = useCopy({
    en: {
      min2: "Minimum 2 characters",
      invalidEmail: "Invalid email address",
      mustAccept: "You must accept the terms",
      name: "Name",
      namePlaceholder: "Jane Doe",
      email: "Email",
      emailPlaceholder: "jane@example.com",
      role: "Role",
      rolePlaceholder: "Select a role",
      owner: "Owner",
      editor: "Editor",
      viewer: "Viewer",
      accept: "I accept the terms",
      acceptDescription: "This field is required to continue.",
      submit: "Create account",
    },
    es: {
      min2: "Mínimo 2 caracteres",
      invalidEmail: "Correo no válido",
      mustAccept: "Debes aceptar los términos",
      name: "Nombre",
      namePlaceholder: "Jane Doe",
      email: "Correo",
      emailPlaceholder: "jane@example.com",
      role: "Rol",
      rolePlaceholder: "Selecciona un rol",
      owner: "Propietario",
      editor: "Editor",
      viewer: "Visor",
      accept: "Acepto los términos",
      acceptDescription: "Este campo es obligatorio para continuar.",
      submit: "Crear cuenta",
    },
  });

  const code = `import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Button,
  Form,
  FormCheckbox,
  FormField,
  FormSelect
} from '@blencm/ui';

const schema = z.object({
  name: z.string().min(2, '${t.min2}'),
  email: z.string().email('${t.invalidEmail}'),
  role: z.enum(['owner', 'editor', 'viewer']),
  accepted: z.boolean().refine(Boolean, '${t.mustAccept}')
});

type FormValues = z.infer<typeof schema>;

export function FormDemo() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      role: 'viewer',
      accepted: false
    }
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
        placeholder="${t.namePlaceholder}"
        requiredLabel
      />
      <FormField
        control={form.control}
        name="email"
        label="${t.email}"
        type="email"
        placeholder="${t.emailPlaceholder}"
        requiredLabel
      />
      <FormSelect
        control={form.control}
        name="role"
        label="${t.role}"
        placeholder="${t.rolePlaceholder}"
        items={[
          { label: '${t.owner}', value: 'owner' },
          { label: '${t.editor}', value: 'editor' },
          { label: '${t.viewer}', value: 'viewer' }
        ]}
      />
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
    <DemoPage title="Form">
      <DemoPreview code={code} className="max-w-xl">
        <FormDemo />
      </DemoPreview>
    </DemoPage>
  );
}
