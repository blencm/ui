#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cmd = process.argv[2];

const uniq = (arr) => {
  const seen = new Set();
  const out = [];
  for (const item of arr) {
    const key = JSON.stringify(item);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }
  return out;
};

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function readJson(p) {
  if (!fs.existsSync(p)) return null;
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch (e) {
    console.error(`❌ No pude leer JSON: ${p}`);
    console.error(e?.message ?? e);
    process.exit(1);
  }
}

function writeJson(p, obj) {
  fs.writeFileSync(p, JSON.stringify(obj, null, 2) + "\n", "utf8");
}

function initVscode() {
  const tplPath = path.join(__dirname, "..", "templates", "vscode-settings.json");
  const tpl = readJson(tplPath) ?? {};

  const vscodeDir = path.join(process.cwd(), ".vscode");
  const settingsPath = path.join(vscodeDir, "settings.json");

  ensureDir(vscodeDir);

  const current = readJson(settingsPath) ?? {};
  const next = { ...current };

  // classRegex (merge + dedupe)
  const curRegex = current["tailwindCSS.experimental.classRegex"] ?? [];
  const tplRegex = tpl["tailwindCSS.experimental.classRegex"] ?? [];
  next["tailwindCSS.experimental.classRegex"] = uniq([
    ...(Array.isArray(curRegex) ? curRegex : []),
    ...(Array.isArray(tplRegex) ? tplRegex : [])
  ]);

  // includeLanguages (merge)
  const curLang = current["tailwindCSS.includeLanguages"] ?? {};
  const tplLang = tpl["tailwindCSS.includeLanguages"] ?? {};
  next["tailwindCSS.includeLanguages"] = { ...(curLang || {}), ...(tplLang || {}) };

  writeJson(settingsPath, next);
  console.log("✅ Listo: actualizado .vscode/settings.json (Tailwind IntelliSense).");
}

function initExtensions() {
  const vscodeDir = path.join(process.cwd(), ".vscode");
  const extPath = path.join(vscodeDir, "extensions.json");
  ensureDir(vscodeDir);

  const current = readJson(extPath) ?? {};
  const recs = Array.isArray(current.recommendations) ? current.recommendations : [];
  const add = "bradlc.vscode-tailwindcss";

  const next = {
    ...current,
    recommendations: Array.from(new Set([...recs, add]))
  };

  writeJson(extPath, next);
  console.log("✅ Listo: actualizado .vscode/extensions.json (recomendación Tailwind CSS).");
}

switch (cmd) {
  case "init-vscode":
    initVscode();
    initExtensions();
    break;
  default:
    console.log(`Uso:
  npx blencm-ui init-vscode
`);
    process.exit(cmd ? 1 : 0);
}
