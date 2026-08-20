import fs from "node:fs";
import path from "node:path";

const dir = path.resolve("demo-dist");
const index = path.join(dir, "index.html");
const fallback = path.join(dir, "404.html");

if (!fs.existsSync(index)) {
  console.error("demo-dist/index.html not found. Run the Vite demo build first.");
  process.exit(1);
}

fs.copyFileSync(index, fallback);
console.log("Copied demo-dist/index.html to demo-dist/404.html");
