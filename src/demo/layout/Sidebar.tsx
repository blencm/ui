import { ChevronRight } from "lucide-react";
import * as React from "react";
import { NavLink, useLocation } from "react-router";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/collapsible";
import { Input } from "@/components/input";
import { ScrollView } from "@/components/scroll-view";
import { Separator } from "@/components/separator";
import { cn } from "@/utils/utils";

import { useLocale } from "../i18n/locale";
import { DEMO_GROUPS, demos } from "../registry";

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const { locale, m } = useLocale();
  const { pathname } = useLocation();
  const [query, setQuery] = React.useState("");
  const normalized = query.trim().toLowerCase();
  const activeSlug = pathname.replace(/^\/+|\/+$/g, "");

  const grouped = DEMO_GROUPS.map((group) => ({
    group,
    items: demos
      .filter((demo) => {
        if (demo.group !== group) return false;
        if (!normalized) return true;
        return (
          demo.title.toLowerCase().includes(normalized) ||
          demo.slug.includes(normalized) ||
          demo.description.en.toLowerCase().includes(normalized) ||
          demo.description.es.toLowerCase().includes(normalized)
        );
      })
      .sort((a, b) => a.title.localeCompare(b.title)),
  })).filter((section) => section.items.length > 0);

  return (
    <div className="flex h-full flex-col">
      <div className="border-b px-4 py-4">
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={m.searchPlaceholder}
          aria-label={m.searchAria}
        />
      </div>

      <ScrollView fit="fill">
        <div className="px-3 py-4">
        <p className="text-muted-foreground px-2 pb-2 text-[11px] font-semibold tracking-[0.14em] uppercase">
          {m.gettingStarted}
        </p>
        <NavLink
          to="/"
          end
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              "mb-1 block rounded-md px-2 py-1.5 text-sm",
              isActive
                ? "bg-accent text-accent-foreground font-medium"
                : "text-foreground/80 hover:bg-accent/60 hover:text-foreground",
            )
          }
        >
          {m.home}
        </NavLink>

        <Separator className="my-4" />

        <p className="text-muted-foreground px-2 pb-2 text-[11px] font-semibold tracking-[0.14em] uppercase">
          {m.componentsNav}
        </p>

        <div className="space-y-1">
          {grouped.map((section) => (
            <SidebarGroup
              key={section.group}
              label={m.groups[section.group]}
              items={section.items}
              locale={locale}
              forceOpen={Boolean(normalized)}
              activeSlug={activeSlug}
              onNavigate={onNavigate}
            />
          ))}
        </div>

        {grouped.length === 0 ? (
          <p className="text-muted-foreground px-2 pt-2 text-sm">{m.noMatches}</p>
        ) : null}
        </div>
      </ScrollView>
    </div>
  );
}

function SidebarGroup({
  label,
  items,
  locale,
  forceOpen,
  activeSlug,
  onNavigate,
}: {
  label: string;
  items: typeof demos;
  locale: "en" | "es";
  forceOpen: boolean;
  activeSlug: string;
  onNavigate?: () => void;
}) {
  const containsActive = items.some((demo) => demo.slug === activeSlug);
  const [open, setOpen] = React.useState(containsActive);

  React.useEffect(() => {
    if (forceOpen || containsActive) setOpen(true);
  }, [forceOpen, containsActive]);

  return (
    <Collapsible open={forceOpen ? true : open} onOpenChange={setOpen}>
      <CollapsibleTrigger
        className={cn(
          "hover:bg-accent/50 flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm",
          "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none",
          containsActive ? "text-foreground font-medium" : "text-foreground/80",
        )}
      >
        <ChevronRight
          className={cn(
            "text-muted-foreground size-3.5 shrink-0 transition-transform",
            open || forceOpen ? "rotate-90" : "rotate-0",
          )}
        />
        <span className="min-w-0 flex-1 truncate">{label}</span>
        <span className="text-muted-foreground tabular-nums text-[11px]">
          {items.length}
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ul className="border-border/70 ml-3.5 space-y-0.5 border-l py-1 pl-2.5">
          {items.map((demo) => (
            <li key={demo.slug}>
              <NavLink
                to={`/${demo.slug}`}
                title={demo.description[locale]}
                onClick={onNavigate}
                className={({ isActive }) =>
                  cn(
                    "block rounded-md px-2 py-1 text-[13px]",
                    isActive
                      ? "bg-accent text-accent-foreground font-medium"
                      : "text-muted-foreground hover:bg-accent/60 hover:text-foreground",
                  )
                }
              >
                {demo.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}
