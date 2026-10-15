import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

// Resolve the public barrel with the same compiler options as the library.
const configPath = ts.findConfigFile(".", ts.sys.fileExists, "tsconfig.json");
const config = ts.readConfigFile(configPath, ts.sys.readFile);
const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, ".");
const host = ts.createCompilerHost(parsed.options);
// The non-native resolver also handles Windows dependency junctions in restricted environments.
host.realpath = file => {
  try { return fs.realpathSync(file).replaceAll("\\", "/"); }
  catch { return file; }
};
const program = ts.createProgram(["src/index.ts"], parsed.options, host);
const checker = program.getTypeChecker();
const entry = program.getSourceFile("src/index.ts");
const format = ts.TypeFormatFlags.NoTruncation;
const stringify = (type, node) => checker.typeToString(type, node, format);
const comment = (symbol) => ts.displayPartsToString(symbol.getDocumentationComment(checker));
const modules = [];

function propertyType(prop, declaration, propDeclaration) {
  const type = checker.getTypeOfSymbolAtLocation(prop, declaration);
  const literals = ts.TypeFlags.StringLiteral | ts.TypeFlags.NumberLiteral | ts.TypeFlags.BooleanLiteral | ts.TypeFlags.Null | ts.TypeFlags.Undefined;
  if (type.isUnion() && type.types.every(member => member.flags & literals)) {
    return checker.typeToString(type, declaration, format | ts.TypeFormatFlags.InTypeAlias);
  }
  return propDeclaration?.type?.getText() ?? stringify(type, declaration);
}

function defaultsIn(node) {
  const values = {};
  function visit(child) {
    if (ts.isBindingElement(child) && child.initializer && ts.isIdentifier(child.name)) {
      values[child.propertyName?.getText() ?? child.name.text] = child.initializer.getText();
    }
    if (ts.isCallExpression(child)) {
      for (const argument of child.arguments) {
        if (!ts.isIdentifier(argument)) continue;
        const target = checker.getSymbolAtLocation(argument)?.valueDeclaration;
        if (target && target !== node && target.getSourceFile() === node.getSourceFile() && ts.isFunctionDeclaration(target)) {
          Object.assign(values, defaultsIn(target));
        }
      }
    }
    ts.forEachChild(child, visit);
  }
  visit(node);
  return values;
}

for (const statement of entry.statements) {
  if (!ts.isExportDeclaration(statement) || !statement.moduleSpecifier) continue;
  const moduleSymbol = checker.getSymbolAtLocation(statement.moduleSpecifier);
  if (!moduleSymbol) throw new Error(`Cannot resolve ${statement.moduleSpecifier.text}`);
  const source = moduleSymbol.declarations[0];
  const sourcePath = path.relative(process.cwd(), source.fileName).replaceAll("\\", "/");
  const exports = checker.getExportsOfModule(moduleSymbol).map((exported) => {
    const symbol = exported.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(exported) : exported;
    const declaration = symbol.valueDeclaration ?? symbol.declarations?.[0];
    const name = exported.name;
    const isType = !(symbol.flags & ts.SymbolFlags.Value);
    const type = isType ? checker.getDeclaredTypeOfSymbol(symbol) : checker.getTypeOfSymbolAtLocation(symbol, declaration);
    const signatures = type.getCallSignatures();
    const component = /^[A-Z]/.test(name) && signatures.length > 0 && !name.endsWith("Context");
    const firstParameter = signatures[0]?.parameters[0];
    const propsType = component && firstParameter
      ? checker.getTypeOfSymbolAtLocation(firstParameter, declaration)
      : undefined;
    const defaults = declaration ? defaultsIn(declaration) : {};
    // CVA defaults are declared alongside the component, rather than in its arguments.
    if (component) {
      const variantName = name[0].toLowerCase() + name.slice(1) + "Variants";
      const variantSymbol = source.locals?.get(variantName);
      const variantDeclaration = variantSymbol?.valueDeclaration;
      if (variantDeclaration) {
        const visit = (node) => {
          if (ts.isPropertyAssignment(node) && node.name.getText() === "defaultVariants" && ts.isObjectLiteralExpression(node.initializer)) {
            for (const prop of node.initializer.properties) {
              if (ts.isPropertyAssignment(prop)) defaults[prop.name.getText()] = prop.initializer.getText();
            }
          }
          ts.forEachChild(node, visit);
        };
        visit(variantDeclaration);
      }
    }
    const branches = propsType?.isUnion() ? propsType.types : propsType ? [propsType] : [];
    const properties = branches.flatMap((branch) => checker.getPropertiesOfType(branch));
    const props = properties.flatMap((prop) => {
      const propDeclaration = prop.valueDeclaration ?? prop.declarations?.[0];
      const file = propDeclaration?.getSourceFile().fileName.replaceAll("\\", "/") ?? "";
      // Native DOM attributes are shared by all controls; document these once in the guide.
      if (file.includes("/@types/react/") || file.includes("/typescript/lib/lib.dom")) return [];
      if (prop.name === "ref" || prop.name === "key") return [];
      return [{
        name: prop.name,
        type: propertyType(prop, declaration, propDeclaration),
        required: !(prop.flags & ts.SymbolFlags.Optional),
        ...(defaults[prop.name] !== undefined ? { default: defaults[prop.name] } : {}),
        description: comment(prop),
        inherited: file.includes("/node_modules/"),
      }];
    });
    const merged = new Map();
    for (const prop of props) {
      const previous = merged.get(prop.name);
      if (previous && !previous.type.split("\n| ").includes(prop.type)) previous.type += `\n| ${prop.type}`;
      else if (!previous) merged.set(prop.name, prop);
    }
    for (const prop of merged.values()) {
      prop.required = branches.every((branch) => {
        const member = checker.getPropertyOfType(branch, prop.name);
        return member && !(member.flags & ts.SymbolFlags.Optional);
      });
    }
    return {
      name,
      kind: isType ? "type" : component ? "component" : signatures.length && !name.endsWith("Context") ? "function" : "value",
      description: comment(symbol),
      signature: signatures.length && !component
        ? signatures.map((signature) => checker.signatureToString(signature, declaration, format)).join("\n")
        : stringify(type, declaration),
      ...(isType && declaration && (ts.isTypeAliasDeclaration(declaration) || ts.isInterfaceDeclaration(declaration))
        ? { definition: declaration.getText() } : {}),
      props: [...merged.values()].sort((a, b) => Number(b.required) - Number(a.required) || a.name.localeCompare(b.name)),
    };
  }).sort((a, b) => a.name.localeCompare(b.name));
  modules.push({ source: sourcePath, exports });
}

const formats = {};
for (const kind of ["date", "time"]) {
  const source = program.getSourceFile(`src/utils/${kind}-formats.ts`);
  const declaration = source.statements.flatMap(statement => ts.isVariableStatement(statement) ? [...statement.declarationList.declarations] : [])
    .find(declaration => declaration.name.getText() === `${kind}Formats`);
  const initializer = declaration.initializer.expression ?? declaration.initializer;
  formats[kind] = initializer.properties.map(prop => ({
    name: prop.name.getText(),
    pattern: prop.initializer.text,
    description: comment(checker.getSymbolAtLocation(prop.name)),
  }));
}
// Keep the lazily loaded reference small; readable tables are emitted to Markdown below.
const output = `${JSON.stringify({ modules, formats })}\n`;
const outputs = new Map([["src/demo/docs/api.generated.json", output]]);

async function loadContent(file) {
  const result = ts.transpileModule(fs.readFileSync(file, "utf8"), { compilerOptions: { module: ts.ModuleKind.ESNext } });
  return import(`data:text/javascript;base64,${Buffer.from(result.outputText).toString("base64")}`);
}
const { guides } = await loadContent("src/demo/docs/guides.ts");
const { componentNotes, describeProp } = await loadContent("src/demo/docs/component-notes.ts");
if (process.argv.includes("--check")) {
  const examples = new Map(guides.flatMap(guide => guide.sections
    .filter(section => section.code && (!section.language || section.language === "tsx"))
    .map(section => [path.resolve(`src/demo/docs/__examples__/${guide.slug}-${section.id}.tsx`).replaceAll("\\", "/"), section.code])));
  const options = { ...parsed.options, paths: { ...parsed.options.paths, "@blencm/ui": ["./src/index.ts"] } };
  const exampleHost = ts.createCompilerHost(options);
  const readFile = exampleHost.readFile.bind(exampleHost);
  const fileExists = exampleHost.fileExists.bind(exampleHost);
  const getSourceFile = exampleHost.getSourceFile.bind(exampleHost);
  exampleHost.realpath = host.realpath;
  exampleHost.readFile = file => examples.get(file.replaceAll("\\", "/")) ?? readFile(file);
  exampleHost.fileExists = file => examples.has(file.replaceAll("\\", "/")) || fileExists(file);
  exampleHost.getSourceFile = (file, version, onError, shouldCreate) => examples.has(file.replaceAll("\\", "/"))
    ? ts.createSourceFile(file, examples.get(file.replaceAll("\\", "/")), version, true, ts.ScriptKind.TSX)
    : getSourceFile(file, version, onError, shouldCreate);
  const exampleProgram = ts.createProgram(["src/index.ts", ...examples.keys()], options, exampleHost);
  const diagnostics = [...examples.keys()].flatMap(file => {
    const source = exampleProgram.getSourceFile(file);
    return [...exampleProgram.getSyntacticDiagnostics(source), ...exampleProgram.getSemanticDiagnostics(source)];
  });
  if (diagnostics.length) {
    console.error(ts.formatDiagnosticsWithColorAndContext(diagnostics, {
      getCanonicalFileName: file => file, getCurrentDirectory: () => process.cwd(), getNewLine: () => "\n",
    }));
    process.exit(1);
  }
  console.log(`Typechecked ${examples.size} complete guide examples.`);
}
const registry = program.getSourceFile("src/demo/registry.ts") ?? ts.createSourceFile("registry.ts", fs.readFileSync("src/demo/registry.ts", "utf8"), ts.ScriptTarget.Latest);
const demos = [];
function visitDemo(node) {
  if (ts.isCallExpression(node) && node.expression.getText(registry) === "demo" && ts.isStringLiteral(node.arguments[0])) {
    demos.push({ slug: node.arguments[0].text, title: node.arguments[1].text });
  }
  ts.forEachChild(node, visitDemo);
}
visitDemo(registry);
const slugs = new Set(demos.map(demo => demo.slug));
const aliases = { resizable: "ResizablePanelGroup", sonner: "ToasterSonner" };
for (const demo of demos) {
  if (!componentNotes[demo.slug]) throw new Error(`Missing usage documentation: ${demo.slug}`);
  const name = aliases[demo.slug] ?? demo.title;
  if (!modules.some(module => module.exports.some(entry => entry.name === name))) throw new Error(`Missing API: ${name}`);
}
for (const document of [...Object.values(componentNotes), ...guides]) {
  for (const slug of document.related) if (!slugs.has(slug)) throw new Error(`Invalid component link: ${slug}`);
}

const cell = (value) => String(value).replaceAll("|", "\\|").replace(/\r?\n/g, "<br>");
const table = (headings, rows) => `| ${headings.map(cell).join(" | ")} |\n| ${headings.map(() => "---").join(" | ")} |\n${rows.map(row => `| ${row.map(cell).join(" | ")} |`).join("\n")}\n`;
const code = (value, language = "tsx") => `\n\`\`\`${language}\n${value}\n\`\`\`\n`;
const reference = ["# Public API reference\n", "Generated from `src/index.ts`. Run `pnpm docs:generate` to refresh.\n", "Standard native DOM attributes are omitted from prop tables. Local defaults are extracted from destructuring and CVA defaults; a dash means none was declared locally. Dependency defaults can still apply. Requirements for union props depend on the selected mode.\n"];
for (const module of modules) {
  reference.push(`## ${module.source}\n`);
  for (const entry of module.exports) {
    reference.push(`<a id="${entry.name.toLowerCase()}"></a>\n\n### ${entry.name}\n\n${entry.kind}\n`);
    if (entry.description) reference.push(`${entry.description}\n`);
    if (entry.props.length) reference.push(table(["Property", "Type", "Required", "Local default", "Description"], entry.props.map(prop => [
      `\`${prop.name}\``, `\`${prop.type}\``, prop.required ? "Yes" : "No", prop.default === undefined ? "—" : `\`${prop.default}\``, describeProp(prop.name, prop.description),
    ])));
    reference.push(code(entry.definition ?? `${entry.name}: ${entry.signature}`, "ts"));
  }
}
outputs.set("docs/api-reference.md", `${reference.join("\n")}\n`);
const components = ["# Component usage guide\n", "Usage, accessibility and related components for every catalog page. Generated from the same content as the documentation site.\n"];
for (const demo of demos) {
  const notes = componentNotes[demo.slug];
  const name = aliases[demo.slug] ?? demo.title;
  components.push(`## ${demo.title}\n\n[Interactive examples](https://ui.blencm.com/${demo.slug}) · [API](./api-reference.md#${name.toLowerCase()})\n\n${notes.usage.map(item => `- ${item}`).join("\n")}\n\n**Accessibility:** ${notes.accessibility}\n`);
}
outputs.set("docs/components.md", `${components.join("\n")}\n`);
for (const guide of guides) {
  const content = [`# ${guide.title}\n\n${guide.description}\n`];
  for (const section of guide.sections) {
    content.push(`## ${section.title}\n`, ...section.paragraphs.map(paragraph => `${paragraph}\n`));
    if (section.bullets) content.push(`${section.bullets.map(item => `- ${item}`).join("\n")}\n`);
    if (section.table) content.push(table(section.table.headings, section.table.rows));
    if (section.code) content.push(code(section.code, section.language));
  }
  if (guide.slug === "dates-times") {
    for (const [kind, entries] of Object.entries(formats)) content.push(`## Complete ${kind} presets\n`, table(["Preset", "Pattern", "Description"], entries.map(entry => [entry.name, entry.pattern, entry.description])));
  }
  content.push(`## Related components\n\n${guide.related.map(slug => `- [${demos.find(demo => demo.slug === slug).title}](https://ui.blencm.com/${slug})`).join("\n")}\n`);
  outputs.set(`docs/guides/${guide.slug}.md`, `${content.join("\n")}\n`);
}
outputs.set("docs/README.md", `# Documentation\n\n[Component usage](./components.md) · [Complete API reference](./api-reference.md)\n\n${guides.map(guide => `- [${guide.title}](./guides/${guide.slug}.md) — ${guide.description}`).join("\n")}\n\nThe website and these Markdown references share the same guide content. To update documentation, edit src/demo/docs/guides.ts or component-notes.ts, then run pnpm docs:generate. API metadata comes from the public source exports.\n`);
const stale = [];
for (const [destination, content] of outputs) {
  if (process.argv.includes("--check")) {
    if (!fs.existsSync(destination) || fs.readFileSync(destination, "utf8") !== content) stale.push(destination);
  } else {
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.writeFileSync(destination, content);
  }
}
if (stale.length) {
  console.error(`Documentation is stale. Run pnpm docs:generate.\n${stale.join("\n")}`);
  process.exit(1);
}
console.log(`Documentation: ${guides.length} guides, ${demos.length} component pages, ${modules.length} modules, ${modules.reduce((sum, module) => sum + module.exports.length, 0)} exports.`);
