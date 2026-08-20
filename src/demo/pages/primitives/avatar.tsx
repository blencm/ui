import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import { Avatar, AvatarFallback, AvatarImage } from '@blencm/ui';

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/blencm.png" alt="blencm" />
      <AvatarFallback>BL</AvatarFallback>
    </Avatar>
  );
}`;

export default function AvatarDemoPage() {
  return (
    <DemoPage title="Avatar" description="Foto de perfil con fallback de iniciales.">
      <DemoPreview code={code} className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/blencm.png" alt="blencm" />
          <AvatarFallback>BL</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>BL</AvatarFallback>
        </Avatar>
      </DemoPreview>
    </DemoPage>
  );
}
