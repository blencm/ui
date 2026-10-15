import assert from "node:assert/strict";
import { test } from "node:test";
import ts from "typescript";

import { compareNames, normalizeApiData, normalizeApiText, normalizeLineEndings } from "./docs-normalization.mjs";

test("source declarations and documentation serialize identically with LF and CRLF", () => {
  const source = "/** Field description.\n * Second line.\n */\nexport interface Props {\n  value?: string;\n}\n";
  const metadata = text => {
    const file = ts.createSourceFile("field.ts", text, ts.ScriptTarget.Latest, true);
    return normalizeApiData({
      modules: [{ source: "src/field.ts", exports: [{
        definition: file.statements[0].getText(file),
        description: text.slice(0, text.indexOf("export")),
      }] }],
      optional: true,
      count: 1,
      empty: null,
    });
  };
  const linux = metadata(source);
  const windows = metadata(source.replaceAll("\n", "\r\n"));
  assert.equal(JSON.stringify(windows), JSON.stringify(linux));
  assert.equal(windows.modules[0].exports[0].definition, "export interface Props {\n  value?: string;\n}");
});

test("type imports use public package paths regardless of pnpm store layout", () => {
  const stores = [
    ".pnpm/@radix-ui+react-context@1.3_f5e7faa335a2377b2de19422090f7bda/node_modules/@radix-ui/react-context",
    "../../node_modules/.pnpm/@radix-ui+react-context@1.3.0_react@19.3.1/node_modules/@radix-ui/react-context",
    "/home/runner/work/ui/ui/node_modules/.pnpm/@radix-ui+react-context@1.3.0/node_modules/@radix-ui/react-context",
    "F:\\ui\\node_modules\\.pnpm\\@radix-ui+react-context@hash\\node_modules\\@radix-ui\\react-context",
  ];
  for (const store of stores) {
    assert.equal(normalizeApiText(`import("${store}").Scope | undefined`), 'import("@radix-ui/react-context").Scope | undefined');
  }
  assert.equal(normalizeApiText('import(".pnpm/embla-carousel@8.6.0/node_modules/embla-carousel").EmblaCarouselType'), 'import("embla-carousel").EmblaCarouselType');
  assert.equal(normalizeApiText("import('/workspace/node_modules/package/dist/types').Options"), "import('package/dist/types').Options");
});

test("public imports, relative imports and prose remain intact", () => {
  const text = 'import("react").ReactNode | import("../checkbox").CheckboxProps\nSee https://example.com/node_modules/reference.';
  assert.equal(normalizeApiText(text), text);
  const data = { props: [{ type: 'import("react").ReactNode', description: "First\r\nSecond\rThird" }] };
  const normalized = normalizeApiData(data);
  assert.equal(normalized.props[0].description, "First\nSecond\nThird");
  assert.equal(data.props[0].description, "First\r\nSecond\rThird");
  assert.deepEqual(normalizeApiData(normalized), normalized);
});

test("name ordering and checkout line endings do not depend on the host", () => {
  assert.deepEqual(["value", "_scope", "onChange", "Value", "asChild"].sort(compareNames), ["Value", "_scope", "asChild", "onChange", "value"]);
  assert.equal(compareNames("same", "same"), 0);
  assert.equal(normalizeLineEndings("# API\r\n\r\nBody\r\n"), "# API\n\nBody\n");
});
