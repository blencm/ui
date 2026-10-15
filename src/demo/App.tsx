import { Menu } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router";
import * as React from "react";

import { Button } from "@/components/Button/button";
import { ScrollView } from "@/components/scroll-view";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/sheet";
import { Toaster } from "@/components/toaster";
import { ToasterSonner } from "@/components/sonner";
import { TooltipProvider } from "@/components/tooltip";

import { useLocale } from "./i18n/locale";
import { Sidebar } from "./layout/Sidebar";
import { ThemeToggle } from "./layout/ThemeToggle";

export function App() {
  const { m } = useLocale();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const contentRef = React.useRef<React.ComponentRef<typeof ScrollView>>(null);
  const { pathname, hash } = useLocation();
  React.useEffect(() => {
    if (!hash) contentRef.current?.querySelector('[data-radix-scroll-area-viewport]')?.scrollTo({ top: 0, left: 0 });
  }, [pathname, hash]);

  return (
    <TooltipProvider>
      <div className="bg-background flex h-dvh flex-col overflow-hidden">
        <header className="bg-background/80 supports-backdrop-filter:bg-background/60 sticky top-0 z-40 shrink-0 border-b backdrop-blur">
          <div className="flex h-14 items-center gap-3 px-3 md:px-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label={m.openMenu}
              onClick={() => setMobileOpen(true)}
            >
              <Menu />
            </Button>

            <Link to="/" className="min-w-0 flex-1">
              <span className="block truncate text-sm font-semibold tracking-tight sm:text-base">
                @blencm/ui
              </span>
              <span className="text-muted-foreground hidden text-xs sm:block">
                {m.catalogSubtitle}
              </span>
            </Link>

            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeToggle />
            </div>
          </div>
        </header>

        <div className="flex min-h-0 flex-1">
          <aside className="hidden h-full w-72 shrink-0 overflow-hidden border-r md:flex md:flex-col">
            <Sidebar />
          </aside>

          <ScrollView ref={contentRef} fit="fill" className="min-w-0 flex-1">
            <main className="p-4 sm:p-6 lg:p-10">
              <Outlet />
            </main>
          </ScrollView>
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetContent
            side="left"
            className="flex h-full min-h-0 w-80 flex-col gap-0 p-0"
          >
            <SheetHeader className="sr-only">
              <SheetTitle>{m.navigation}</SheetTitle>
            </SheetHeader>
            <Sidebar onNavigate={() => setMobileOpen(false)} />
          </SheetContent>
        </Sheet>

        <Toaster />
        <ToasterSonner />
      </div>
    </TooltipProvider>
  );
}
