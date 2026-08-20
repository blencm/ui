import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(rootDir, "src"),
      "@types": path.resolve(rootDir, "src/types"),
      "@utils": path.resolve(rootDir, "src/utils"),
      "@components": path.resolve(rootDir, "src/components"),
      "@shared": path.resolve(rootDir, "src/shared"),
      "@hooks": path.resolve(rootDir, "src/hooks"),
    },
  },
  build: {
    outDir: "demo-dist",
    emptyOutDir: true,
  },
});
