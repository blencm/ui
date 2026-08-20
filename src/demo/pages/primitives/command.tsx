import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/command";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

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
      <CommandInput placeholder="Buscar comando..." />
      <CommandList>
        <CommandEmpty>Sin resultados.</CommandEmpty>
        <CommandGroup heading="Sugerencias">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}`;

export default function CommandDemoPage() {
  return (
    <DemoPage title="Command" description="Paleta de comandos con búsqueda.">
      <DemoPreview code={code}>
        <Command className="rounded-lg border">
          <CommandInput placeholder="Buscar comando..." />
          <CommandList>
            <CommandEmpty>Sin resultados.</CommandEmpty>
            <CommandGroup heading="Sugerencias">
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
