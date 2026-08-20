import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function TabsDemoPage() {
  const t = useCopy({
    en: {
      overview: "Overview",
      settings: "Settings",
      overviewBody: "General information about the component.",
      settingsBody: "Preferences and settings.",
    },
    es: {
      overview: "Resumen",
      settings: "Ajustes",
      overviewBody: "Información general del componente.",
      settingsBody: "Preferencias y configuración.",
    },
  });

  const code = `import { Tabs, TabsContent, TabsList, TabsTrigger } from '@blencm/ui';

export function TabsDemo() {
  return (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">${t.overview}</TabsTrigger>
        <TabsTrigger value="settings">${t.settings}</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">${t.overviewBody}</TabsContent>
      <TabsContent value="settings">${t.settingsBody}</TabsContent>
    </Tabs>
  );
}`;

  return (
    <DemoPage title="Tabs">
      <DemoPreview code={code}>
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">{t.overview}</TabsTrigger>
            <TabsTrigger value="settings">{t.settings}</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">{t.overviewBody}</TabsContent>
          <TabsContent value="settings">{t.settingsBody}</TabsContent>
        </Tabs>
      </DemoPreview>
    </DemoPage>
  );
}
