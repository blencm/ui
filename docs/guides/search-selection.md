# Search & selection

Debounced search, custom option records and searchable form fields.

## SearchInput

SearchInput updates its visible text immediately and calls onSearch after 750 ms by default. debounceTime <= 0 emits immediately. Its external value synchronizes the displayed query.

SearchInput does not filter records or make requests. Reset pagination when the query changes; cancel or ignore stale responses when fetching remote results.


```tsx
import { useState } from 'react';
import { SearchInput } from '@blencm/ui';

export function ProjectSearch({ names }: { names: string[] }) {
  const [query, setQuery] = useState('');
  const results = names.filter(name => name.toLowerCase().includes(query.toLowerCase()));
  return <>
    <SearchInput aria-label="Search projects" debounceTime={300} onSearch={setQuery} />
    <p role="status">{results.length} results</p>
    <ul>{results.map(name => <li key={name}>{name}</li>)}</ul>
  </>;
}
```

## SearchableSelect with metadata

The combobox searches the supplied list using label, value and keywords. Matching ignores case and diacritics. Selection returns a string key and the matching option, so extra metadata can remain attached to the option.

Use unique string values. This is a local option picker: it has no built-in remote loading callback or list virtualization. For large datasets, prepare an appropriate option subset in your application.


```tsx
import { useState } from 'react';
import { SearchableSelect } from '@blencm/ui';

const items = [
  { value: 'pe', label: 'Perú', keywords: 'Lima Peru', data: { currency: 'PEN' } },
  { value: 'co', label: 'Colombia', keywords: 'Bogotá', data: { currency: 'COP' } },
  { value: 'ar', label: 'Argentina', disabled: true, data: { currency: 'ARS' } },
];
export function CountryPicker() {
  const [country, setCountry] = useState('');
  const [currency, setCurrency] = useState('');
  return <>
    <SearchableSelect aria-label="Country" items={items} value={country}
      placeholder="Choose a country" searchPlaceholder="Search countries"
      emptyText="No matching country"
      onValueChange={(value, item) => {
        setCountry(value);
        setCurrency(item?.data?.currency ?? '');
      }} />
    <p>Currency: {currency}</p>
  </>;
}
```

## Search arbitrary form records

FormSelect accepts either normalized options or arbitrary items with mapping functions. options takes precedence. For normalized options, put the original record in data if onChangeItem should return it.


```tsx
import { useForm } from 'react-hook-form';
import { Form, FormSelect } from '@blencm/ui';

type User = { id: number; name: string; inactive?: boolean };
export function Assignee({ users }: { users: User[] }) {
  const form = useForm<{ userId: string }>({ defaultValues: { userId: '' } });
  return <Form methods={form}>
    <FormSelect control={form.control} name="userId" label="Assignee" searchable
      items={users} getOptionValue={user => String(user.id)}
      getOptionLabel={user => user.name} getOptionDisabled={user => !!user.inactive}
      onChangeItem={user => console.log(user?.id)} />
  </Form>;
}
```

## Keyboard and focus

SearchableSelect supports arrow navigation through enabled options, Enter to select and Escape to close. Give it aria-label or aria-labelledby. Labels and help text remain important even when a placeholder is present.

Command is a separate composition for action palettes. Displaying a keyboard shortcut with CommandShortcut or MenubarShortcut does not register a global event handler; register and clean up shortcuts in your application.

## Related components

- [SearchInput](https://ui.blencm.com/search-input)
- [SearchableSelect](https://ui.blencm.com/searchable-select)
- [FormSelect](https://ui.blencm.com/form-select)
- [Command](https://ui.blencm.com/command)

