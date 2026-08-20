import { Link } from "react-router";

import { Badge } from "@/components/badge";
import { Separator } from "@/components/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";

import { useLocale } from "./i18n/locale";
import { CodeSnippet } from "./layout/CodeSnippet";
import { DEMO_GROUPS, demos } from "./registry";

const INSTALL = {
  pnpm: "pnpm add @blencm/ui",
  npm: "npm install @blencm/ui",
  yarn: "yarn add @blencm/ui",
} as const;

const PEERS = {
  pnpm: "pnpm add react react-dom",
  npm: "npm install react react-dom",
  yarn: "yarn add react react-dom",
} as const;

const USAGE_PREFIX = `import { Button } from '@blencm/ui';

export function Example() {
  return <Button>`;

const DARK_MODE = `<html class="dark">
  <body>
    <!-- app -->
  </body>
</html>`;

const OPTIONAL_CSS = `import '@blencm/ui/style.css';`;

export function HomePage() {
  const { locale, m } = useLocale();
  const usage = `${USAGE_PREFIX}${m.save}</Button>;
}`;

  return (
    <div className="mx-auto max-w-3xl space-y-14 pb-16">
      <section className="space-y-4">
        <Badge variant="secondary">{m.homeEyebrow}</Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {m.homeTitle}
        </h1>
        <p className="text-muted-foreground max-w-2xl text-sm leading-7 sm:text-base">
          {m.homeLead}
        </p>
      </section>

      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold tracking-tight">{m.installTitle}</h2>
          <p className="text-muted-foreground text-sm leading-6">{m.installBody}</p>
        </div>
        <Tabs defaultValue="pnpm">
          <TabsList>
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="yarn">yarn</TabsTrigger>
          </TabsList>
          {Object.entries(INSTALL).map(([manager, command]) => (
            <TabsContent key={manager} value={manager} className="mt-3">
              <CodeSnippet code={command} />
            </TabsContent>
          ))}
        </Tabs>
        <div className="space-y-2">
          <p className="text-sm font-medium">{m.peersTitle}</p>
          <Tabs defaultValue="pnpm">
            <TabsList>
              <TabsTrigger value="pnpm">pnpm</TabsTrigger>
              <TabsTrigger value="npm">npm</TabsTrigger>
              <TabsTrigger value="yarn">yarn</TabsTrigger>
            </TabsList>
            {Object.entries(PEERS).map(([manager, command]) => (
              <TabsContent key={manager} value={manager} className="mt-3">
                <CodeSnippet code={command} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold tracking-tight">{m.usageTitle}</h2>
          <p className="text-muted-foreground text-sm leading-6">{m.usageBody}</p>
        </div>
        <CodeSnippet code={usage} />
      </section>

      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold tracking-tight">{m.darkTitle}</h2>
          <p className="text-muted-foreground text-sm leading-6">{m.darkBody}</p>
        </div>
        <CodeSnippet code={DARK_MODE} />
      </section>

      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold tracking-tight">
            {m.optionalCssTitle}
          </h2>
          <p className="text-muted-foreground text-sm leading-6">
            {m.optionalCssBody}
          </p>
        </div>
        <CodeSnippet code={OPTIONAL_CSS} />
      </section>

      <Separator />

      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold tracking-tight">{m.exploreTitle}</h2>
          <p className="text-muted-foreground text-sm leading-6">{m.exploreBody}</p>
        </div>

        <div className="space-y-8">
          {DEMO_GROUPS.map((group) => {
            const items = demos
              .filter((demo) => demo.group === group)
              .sort((a, b) => a.title.localeCompare(b.title));

            return (
              <div key={group} className="space-y-3">
                <h3 className="text-sm font-semibold">{m.groups[group]}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((demo) => (
                    <Link
                      key={demo.slug}
                      to={`/${demo.slug}`}
                      title={demo.description[locale]}
                      className="bg-muted/50 hover:bg-accent hover:text-accent-foreground rounded-md border px-2.5 py-1 text-sm transition-colors"
                    >
                      {demo.title}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
