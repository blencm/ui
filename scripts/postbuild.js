import { access, readFile, unlink, writeFile } from "node:fs/promises";
import autoprefixer from "autoprefixer";
import postcss from "postcss";
import tailwindcss from "@tailwindcss/postcss";

const CSS_FROM = "src/index.css";
const CSS_TO = "dist/style.css";
const ESM_FILE = "dist/index.js";
const CJS_FILE = "dist/index.cjs";

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function compileCss() {
  const css = await readFile(CSS_FROM, "utf8");
  const result = await postcss([tailwindcss(), autoprefixer()]).process(css, {
    from: CSS_FROM,
    to: CSS_TO,
  });
  await writeFile(CSS_TO, result.css);
  console.log(`✅ Compiled ${CSS_FROM} → ${CSS_TO}`);
}

async function injectEsmImport() {
  const source = await readFile(ESM_FILE, "utf8");
  if (source.includes('"./style.css"') || source.includes("'./style.css'")) {
    return;
  }
  await writeFile(ESM_FILE, `import "./style.css";\n${source}`);
  console.log(`✅ Injected CSS import in ${ESM_FILE}`);
}

async function injectCjsRequire() {
  const source = await readFile(CJS_FILE, "utf8");
  if (source.includes('require("./style.css")')) {
    return;
  }
  const next = source.replace(
    /^(['"]use strict['"];\r?\n)/,
    `$1require("./style.css");\n`,
  );
  await writeFile(
    CJS_FILE,
    next === source ? `require("./style.css");\n${source}` : next,
  );
  console.log(`✅ Injected CSS require in ${CJS_FILE}`);
}

async function removeTsupCss() {
  if (await fileExists("dist/index.css")) {
    await unlink("dist/index.css");
  }
}

async function main() {
  await compileCss();
  await injectEsmImport();
  if (await fileExists(CJS_FILE)) {
    await injectCjsRequire();
  }
  await removeTsupCss();
}

main().catch((error) => {
  console.error("❌ postbuild failed:", error);
  process.exit(1);
});
