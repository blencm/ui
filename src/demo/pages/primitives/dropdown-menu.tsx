import { Button } from "@/components/Button/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function DropdownMenuDemoPage() {
  const t = useCopy({
    en: {
      open: "Open menu",
      account: "My account",
      profile: "Profile",
      settings: "Settings",
      logout: "Log out",
    },
    es: {
      open: "Abrir menú",
      account: "Mi cuenta",
      profile: "Perfil",
      settings: "Ajustes",
      logout: "Cerrar sesión",
    },
  });
  const code = `import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@blencm/ui';

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">${t.open}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>${t.account}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>${t.profile}</DropdownMenuItem>
        <DropdownMenuItem>${t.settings}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`;

  return (
    <DemoPage title="DropdownMenu">
      <DemoPreview code={code}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">{t.open}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{t.account}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>{t.profile}</DropdownMenuItem>
            <DropdownMenuItem>{t.settings}</DropdownMenuItem>
            <DropdownMenuItem>{t.logout}</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </DemoPreview>
    </DemoPage>
  );
}
