# Forms & validation

Choose the right field layer, validate typed values and handle submission states.

## Choose a field layer

The library offers three levels of form composition. Use the level that matches how your application owns values and errors.

| Layer | Components | State and validation |
| --- | --- | --- |
| Primitives | Input, Textarea, Checkbox, Select | You compose labels, state and validation. |
| Labeled fields | UiInput, UiTextarea, UiCheckbox, UiSelect, UiDate, UiTime | Standalone fields with labels and errors. You own state. |
| Form fields | FormField, FormTextarea, FormCheckbox, FormSelect, FormDate, FormTime | React Hook Form registration, typed names, touched state and errors. |

## Validation dependencies

If you import these packages in your application, declare them as direct dependencies. Zod and its resolver are optional integrations, not required for basic controls.


```bash
pnpm add react-hook-form zod @hookform/resolvers
```

## A complete typed form

Form wraps FormProvider and a native form. Its onSubmit runs through methods.handleSubmit. Supply a resolver or field rules; requiredLabel only draws a marker.

This example accepts a save function from your application, awaits it, prevents duplicate submits and shows server failures.


```tsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, Form, FormField, FormSelect, FormCheckbox } from '@blencm/ui';

const schema = z.object({
  name: z.string().min(2, 'Enter at least two characters'),
  email: z.email('Enter a valid email'),
  role: z.enum(['editor', 'viewer']),
  accepted: z.boolean().refine(value => value, 'Accept the terms to continue'),
});
type Values = z.infer<typeof schema>;

export function AccountForm({ save }: { save: (values: Values) => Promise<void> }) {
  const [error, setError] = useState('');
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', role: 'viewer', accepted: false },
  });

  return (
    <Form methods={form} formProps={{ className: 'space-y-4' }}
      onSubmit={async values => {
        setError('');
        try {
          await save(values);
          form.reset();
        } catch {
          setError('Could not save. Please try again.');
        }
      }}>
      <FormField name="name" label="Name" requiredLabel />
      <FormField name="email" type="email" label="Email" requiredLabel />
      <FormSelect name="role" label="Role" items={[
        { value: 'editor', label: 'Editor' },
        { value: 'viewer', label: 'Viewer' },
      ]} />
      <FormCheckbox name="accepted" label="I accept the terms" />
      {error && <p role="alert">{error}</p>}
      <Button type="submit" loading={form.formState.isSubmitting}>Create account</Button>
    </Form>
  );
}
```

## Field contracts

Pass control explicitly when fields live outside the Form provider. The field name is a React Hook Form path, so nested values such as address.city are supported.

- Initialize text/select values to empty strings and checkbox values to booleans. Keep default values consistent with the schema.
- FormField onChange receives a string; FormCheckbox onChange receives a boolean. FormSelect onChange receives a key, and onChangeItem receives the original data when available.
- Use form.setError for server validation, form.reset for new default values, and shouldUnregister when conditional fields must be removed from state.
- For numbers, convert non-empty strings explicitly in schema preprocessing or your application. Do not assume type="number" changes form state to a number.
- FormItem, FormLabel, FormControl, FormDescription and FormMessage support custom field layouts. useFormField reads the surrounding field and item context.

## Standalone controlled fields

Ui fields can be used without React Hook Form. Native input wrappers emit DOM events; UiSelect emits a string, and UiDate/UiTime emit Date or undefined.


```tsx
import { useState } from 'react';
import { UiInput, UiSelect } from '@blencm/ui';

export function Filters() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('active');
  return <>
    <UiInput label="Project name" value={query}
      onChange={event => setQuery(event.target.value)} />
    <UiSelect label="Status" value={status} onChange={setStatus}
      items={[{ value: 'active', label: 'Active' }, { value: 'paused', label: 'Paused' }]} />
  </>;
}
```

## Related components

- [Form](https://ui.blencm.com/form)
- [FormField](https://ui.blencm.com/form-field)
- [FormSelect](https://ui.blencm.com/form-select)
- [FormDate](https://ui.blencm.com/form-date)
- [FormTime](https://ui.blencm.com/form-time)

