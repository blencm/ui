export function normalizeLineEndings(text) {
  return text.replace(/\r\n?/g, "\n");
}

export function compareNames(left, right) {
  // Do not depend on the host's language or ICU collation settings.
  return left < right ? -1 : left > right ? 1 : 0;
}

export function normalizeApiText(text) {
  return normalizeLineEndings(text).replace(/import\((["'])([^"']+)\1\)/g, (expression, quote, specifier) => {
    const portable = specifier.replaceAll("\\", "/");
    const marker = "/node_modules/";
    const dependency = portable.lastIndexOf(marker);
    if (dependency < 0) return expression;
    // TypeScript can print physical pnpm store paths, whose peer hashes and
    // shortened directory names vary between operating systems and installs.
    return `import(${quote}${portable.slice(dependency + marker.length)}${quote})`;
  });
}

export function normalizeApiData(value) {
  if (typeof value === "string") return normalizeApiText(value);
  if (Array.isArray(value)) return value.map(normalizeApiData);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, normalizeApiData(item)]));
  }
  return value;
}
