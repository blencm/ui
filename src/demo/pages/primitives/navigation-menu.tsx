import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/navigation-menu";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function NavigationMenuDemoPage() {
  const t = useCopy({
    en: {
      products: "Products",
      components: "Components",
      forms: "Forms",
      docs: "Docs",
    },
    es: {
      products: "Productos",
      components: "Componentes",
      forms: "Formularios",
      docs: "Docs",
    },
  });

  const code = `import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@blencm/ui';

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>${t.products}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-64 gap-2 p-3 text-sm">
              <li>
                <NavigationMenuLink href="#">${t.components}</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">${t.forms}</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className="px-4 py-2 text-sm">
            ${t.docs}
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}`;

  return (
    <DemoPage title="NavigationMenu">
      <DemoPreview code={code}>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>{t.products}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-64 gap-2 p-3 text-sm">
                  <li>
                    <NavigationMenuLink href="#">{t.components}</NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="#">{t.forms}</NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="px-4 py-2 text-sm">
                {t.docs}
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </DemoPreview>
    </DemoPage>
  );
}
