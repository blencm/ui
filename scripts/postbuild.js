import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { access, readdir, readFile, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import autoprefixer from "autoprefixer";
import postcss from "postcss";
import tailwindcss from "@tailwindcss/postcss";

const require = createRequire(import.meta.url);

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

const HAS_EXTENSION = /\.(?:js|mjs|cjs|json|css)$/i;

function addJsExtensionToRelativeSpecifiers(source) {
  return source.replace(
    /((?:from\s+|import\s*\(\s*))(['"])(\.\.?\/[^'"]+)\2/g,
    (full, prefix, quote, spec) => {
      if (HAS_EXTENSION.test(spec)) return full;
      return `${prefix}${quote}${spec}.js${quote}`;
    },
  );
}

async function walkDeclarationFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkDeclarationFiles(fullPath)));
    } else if (entry.name.endsWith(".d.ts")) {
      files.push(fullPath);
    }
  }
  return files;
}

async function rewriteDeclarationSpecifiers() {
  const files = await walkDeclarationFiles("dist");
  if (files.length === 0) {
    throw new Error("No .d.ts files found in dist. Library types were not emitted.");
  }
  let rewritten = 0;
  for (const filePath of files) {
    const source = await readFile(filePath, "utf8");
    const next = addJsExtensionToRelativeSpecifiers(source);
    if (next !== source) {
      await writeFile(filePath, next);
      rewritten += 1;
    }
  }
  console.log(`✅ Rewrote relative specifiers in ${rewritten} declaration file(s)`);
}

async function assertPublicTypes() {
  const indexDts = await readFile("dist/index.d.ts", "utf8");
  if (!indexDts.includes('./components/dropdown-menu.js"')) {
    throw new Error(
      'dist/index.d.ts is missing "./components/dropdown-menu.js". NodeNext consumers will see TS2305.',
    );
  }
}

function checkNodeNextConsumer() {
  const tsc = path.join(path.dirname(require.resolve("typescript/package.json")), "lib/tsc.js");
  const result = spawnSync(process.execPath, [tsc, "-p", "typecheck/nodenext/tsconfig.json", "--pretty", "false"], {
    stdio: "inherit",
  });
  if (result.status !== 0) {
    throw new Error("NodeNext consumer typecheck failed. Named exports are not visible to TypeScript.");
  }
  console.log("✅ NodeNext consumer typecheck passed");
}

async function main() {
  await compileCss();
  await injectEsmImport();
  if (await fileExists(CJS_FILE)) {
    await injectCjsRequire();
  }
  await removeTsupCss();
  await rewriteDeclarationSpecifiers();
  await assertPublicTypes();
  checkNodeNextConsumer();
}

main().catch((error) => {
  console.error("❌ postbuild failed:", error);
  process.exit(1);
});
