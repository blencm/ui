import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/command";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function CommandDemoPage() {
  const t = useCopy({
    en: {
      placeholder: "Search command...",
      empty: "No results.",
      suggestions: "Suggestions",
    },
    es: {
      placeholder: "Buscar comando...",
      empty: "Sin resultados.",
      suggestions: "Sugerencias",
    },
  });
  const code = `import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@blencm/ui';

export function CommandDemo() {
  return (
    <Command className="rounded-lg border">
      <CommandInput placeholder="${t.placeholder}" />
      <CommandList>
        <CommandEmpty>${t.empty}</CommandEmpty>
        <CommandGroup heading="${t.suggestions}">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}`;

  return (
    <DemoPage title="Command">
      <DemoPreview code={code}>
        <Command className="rounded-lg border">
          <CommandInput placeholder={t.placeholder} />
          <CommandList>
            <CommandEmpty>{t.empty}</CommandEmpty>
            <CommandGroup heading={t.suggestions}>
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DemoPreview>
    </DemoPage>
  );
}
