import { Check, Copy } from "lucide-react";
import * as React from "react";
import { useLocation } from "react-router";

import { Button } from "@/components/Button/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import { cn } from "@/utils/utils";

import { useLocale } from "../i18n/locale";
import { getDemoBySlug } from "../registry";

export function DemoPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const { locale, m } = useLocale();
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/+|\/+$/g, "");
  const demo = getDemoBySlug(slug);
  const resolvedDescription = demo?.description[locale] ?? demo?.description.en ?? "";

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground max-w-2xl text-sm leading-6 sm:text-base">
          {resolvedDescription} {m.demoPageHint}{" "}
          <code className="bg-muted rounded px-1 py-0.5 text-xs">
            @blencm/ui
          </code>
          .
        </p>
      </div>
      {children}
    </div>
  );
}

function CopyButton({ code }: { code: string }) {
  const { m } = useLocale();
  const [copied, setCopied] = React.useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className="shrink-0"
      onClick={onCopy}
      aria-label={copied ? m.copiedAria : m.copyAria}
    >
      {copied ? <Check /> : <Copy />}
      {copied ? m.copied : m.copy}
    </Button>
  );
}

export function DemoPreview({
  title,
  children,
  className,
  code,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
  code?: string;
}) {
  const { m } = useLocale();

  if (!code) {
    return (
      <Card>
        {title ? (
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-medium">{title}</CardTitle>
          </CardHeader>
        ) : null}
        <CardContent className={cn(title ? "pt-0" : "pt-6", className)}>
          {children}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <Tabs defaultValue="preview">
        <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-3 space-y-0 pb-3">
          <CardTitle className="text-base font-medium">
            {title ?? m.example}
          </CardTitle>
          <div className="flex items-center gap-2">
            <TabsList>
              <TabsTrigger value="preview">{m.preview}</TabsTrigger>
              <TabsTrigger value="code">{m.code}</TabsTrigger>
            </TabsList>
            <CopyButton code={code} />
          </div>
        </CardHeader>
        <TabsContent value="preview" className="mt-0">
          <CardContent className={cn("pt-0", className)}>{children}</CardContent>
        </TabsContent>
        <TabsContent value="code" className="mt-0">
          <div className="border-t">
            <pre className="bg-muted/40 max-h-[32rem] overflow-auto p-4 text-[13px] leading-6">
              <code className="font-mono whitespace-pre">{code}</code>
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
