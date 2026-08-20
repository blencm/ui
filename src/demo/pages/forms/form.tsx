import { FormDemo } from "../../form-demo";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

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
  name: z.string().min(2, 'Minimum 2 characters'),
  email: z.string().email('Invalid email address'),
  role: z.enum(['owner', 'editor', 'viewer']),
  accepted: z.boolean().refine(Boolean, 'You must accept the terms')
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
        label="Name"
        placeholder="Jane Doe"
        requiredLabel
      />
      <FormField
        control={form.control}
        name="email"
        label="Email"
        type="email"
        placeholder="jane@example.com"
        requiredLabel
      />
      <FormSelect
        control={form.control}
        name="role"
        label="Role"
        placeholder="Select a role"
        items={[
          { label: 'Owner', value: 'owner' },
          { label: 'Editor', value: 'editor' },
          { label: 'Viewer', value: 'viewer' }
        ]}
      />
      <FormCheckbox
        control={form.control}
        name="accepted"
        label="I accept the terms"
        description="This field is required to continue."
      />
      <Button type="submit">Create account</Button>
    </Form>
  );
}`;

export default function FormDemoPage() {
  return (
    <DemoPage
      title="Form"
      description="Formulario con React Hook Form, Zod y los helpers FormField, FormSelect, FormDate y FormTime."
    >
      <DemoPreview code={code} className="max-w-xl">
        <FormDemo />
      </DemoPreview>
    </DemoPage>
  );
}
