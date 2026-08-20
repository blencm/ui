import * as React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "next-themes";
import { BrowserRouter, Route, Routes } from "react-router";

import "../index.css";
import { App } from "./App";
import { HomePage } from "./HomePage";
import { LocaleProvider, useLocale } from "./i18n/locale";
import { demos } from "./registry";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

function DemoFallback() {
  const { m } = useLocale();
  return (
    <div className="text-muted-foreground mx-auto max-w-4xl text-sm">
      {m.loadingDemo}
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LocaleProvider>
        <BrowserRouter basename={basename}>
          <Routes>
            <Route element={<App />}>
              <Route index element={<HomePage />} />
              {demos.map((demo) => {
                const Page = demo.component;
                return (
                  <Route
                    key={demo.slug}
                    path={demo.slug}
                    element={
                      <React.Suspense fallback={<DemoFallback />}>
                        <Page />
                      </React.Suspense>
                    }
                  />
                );
              })}
            </Route>
          </Routes>
        </BrowserRouter>
      </LocaleProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
