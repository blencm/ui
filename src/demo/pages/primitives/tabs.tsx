import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import { Tabs, TabsContent, TabsList, TabsTrigger } from '@blencm/ui';

export function TabsDemo() {
  return (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Información general del componente.</TabsContent>
      <TabsContent value="settings">Preferencias y configuración.</TabsContent>
    </Tabs>
  );
}`;

export default function TabsDemoPage() {
  return (
    <DemoPage title="Tabs" description="Pestañas para cambiar de vista.">
      <DemoPreview code={code}>
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            Información general del componente.
          </TabsContent>
          <TabsContent value="settings">
            Preferencias y configuración.
          </TabsContent>
        </Tabs>
      </DemoPreview>
    </DemoPage>
  );
}
