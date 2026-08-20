import { Check, Copy } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/Button/button";
import { cn } from "@/utils/utils";

import { useLocale } from "../i18n/locale";

export function CodeSnippet({
  code,
  className,
}: {
  code: string;
  className?: string;
}) {
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
    <div
      className={cn(
        "bg-muted/40 relative overflow-hidden rounded-lg border",
        className,
      )}
    >
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="absolute top-2 right-2 z-10"
        onClick={onCopy}
        aria-label={copied ? m.copiedAria : m.copyAria}
      >
        {copied ? <Check /> : <Copy />}
        <span className="hidden sm:inline">{copied ? m.copied : m.copy}</span>
      </Button>
      <pre className="overflow-x-auto p-4 pr-24 text-[13px] leading-6">
        <code className="font-mono whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}
