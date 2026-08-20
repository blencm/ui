import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function AvatarDemoPage() {
  const code = `import { Avatar, AvatarFallback, AvatarImage } from '@blencm/ui';

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/blencm.png" alt="blencm" />
      <AvatarFallback>BL</AvatarFallback>
    </Avatar>
  );
}`;

  return (
    <DemoPage title="Avatar">
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
