import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/navigation-menu";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

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
          <NavigationMenuTrigger>Productos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-64 gap-2 p-3 text-sm">
              <li>
                <NavigationMenuLink href="#">Componentes</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">Formularios</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className="px-4 py-2 text-sm">
            Docs
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}`;

export default function NavigationMenuDemoPage() {
  return (
    <DemoPage
      title="NavigationMenu"
      description="Menú de navegación con panel desplegable."
    >
      <DemoPreview code={code}>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Productos</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-64 gap-2 p-3 text-sm">
                  <li>
                    <NavigationMenuLink href="#">Componentes</NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="#">Formularios</NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="px-4 py-2 text-sm">
                Docs
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </DemoPreview>
    </DemoPage>
  );
}
