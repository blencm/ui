import { useState } from 'react';
import { Link } from 'react-router';

import { Input } from '@/components/input';
import { CodeSnippet } from '../layout/CodeSnippet';
import { describeProp } from './component-notes';
import apiJson from './api.generated.json?raw';

type ApiProp = {
  name: string;
  type: string;
  required: boolean;
  default?: string;
  description: string;
  inherited: boolean;
};
type ApiExport = {
  name: string;
  kind: string;
  description: string;
  signature: string;
  definition?: string;
  props: ApiProp[];
};
type ApiModule = { source: string; exports: ApiExport[] };
const api = JSON.parse(apiJson) as { modules: ApiModule[]; formats: Record<string, { name: string; pattern: string; description: string }[]> };

const aliases: Record<string, string> = { resizable: 'ResizablePanelGroup', sonner: 'ToasterSonner', 'input-otp': 'InputOTP' };

function exportForSlug(slug: string) {
  return aliases[slug] ?? slug.split('-').map(part => part[0].toUpperCase() + part.slice(1)).join('');
}

function PropsTable({ props }: { props: ApiProp[] }) {
  if (!props.length) return <p className="text-muted-foreground text-sm leading-6">This part adds no component-specific properties. Use the native attributes supported by its element; see its type signature below.</p>;
  return (
    <div className="overflow-x-auto rounded-lg border" tabIndex={0} role="region" aria-label="Component properties">
      <table className="w-full min-w-[620px] text-left text-sm">
        <caption className="sr-only">Properties, accepted types, local defaults and descriptions</caption>
        <thead className="bg-muted/50 border-b"><tr>
          <th scope="col" className="p-3 font-medium">Property</th>
          <th scope="col" className="p-3 font-medium">Type / behavior</th>
          <th scope="col" className="p-3 font-medium">Default</th>
        </tr></thead>
        <tbody className="divide-y">
          {props.map(prop => <tr key={prop.name}>
            <th scope="row" className="w-40 p-3 align-top font-normal">
              <code className="text-xs">{prop.name}</code>
              <span className="text-muted-foreground mt-1 block text-[11px]">{prop.required ? 'Required' : 'Optional'}{prop.inherited ? ' · inherited' : ''}</span>
            </th>
            <td className="p-3 align-top">
              <code className="block max-w-xl text-xs leading-5 whitespace-pre-wrap break-words">{prop.type}</code>
              {describeProp(prop.name, prop.description) && <p className="text-muted-foreground mt-1.5 max-w-xl text-xs leading-5">{describeProp(prop.name, prop.description)}</p>}
            </td>
            <td className="w-32 p-3 align-top"><code className="block max-w-48 text-xs whitespace-pre-wrap break-words">{prop.default ?? '—'}</code></td>
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}

function ExportReference({ entry, expanded = false }: { entry: ApiExport; expanded?: boolean }) {
  return <details open={expanded} id={`api-${entry.name}`} className="group rounded-xl border scroll-mt-6">
    <summary className="hover:bg-muted/40 cursor-pointer rounded-xl px-4 py-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2">
      <span className="ml-2 font-mono font-medium">{entry.name}</span>
      <span className="text-muted-foreground ml-3 text-xs">{entry.kind}{entry.props.length ? ` · ${entry.props.length} props` : ''}</span>
    </summary>
    <div className="space-y-4 border-t p-4">
      {entry.description && <p className="text-muted-foreground text-sm leading-6 whitespace-pre-line">{entry.description}</p>}
      {entry.kind === 'component' && <PropsTable props={entry.props} />}
      <details>
        <summary className="text-muted-foreground cursor-pointer text-xs font-medium">{entry.definition ? 'Type definition' : 'Type signature'}</summary>
        <pre className="bg-muted/40 mt-3 max-h-80 overflow-auto rounded-lg p-4 text-xs leading-6"><code>{entry.definition ?? `${entry.name}: ${entry.signature}`}</code></pre>
      </details>
    </div>
  </details>;
}

export function ComponentApi({ slug }: { slug: string }) {
  const name = exportForSlug(slug);
  const module = api.modules.find(module => module.exports.some(entry => entry.name === name));
  if (!module) return null;
  const components = module.exports.filter(entry => entry.kind === 'component');
  const others = module.exports.filter(entry => entry.kind !== 'component');
  return <section id="api" className="space-y-5 scroll-mt-6" aria-labelledby="api-heading">
    <div className="space-y-2">
      <p className="text-primary text-xs font-semibold tracking-widest uppercase">Reference</p>
      <h2 id="api-heading" className="text-2xl font-semibold tracking-tight">API reference</h2>
      <p className="text-muted-foreground text-sm leading-6">Component props and exported parts from this module. Standard native DOM attributes are omitted. Defaults are extracted from local code; a dash means none was declared locally. Union-specific requirements depend on the selected mode.</p>
      <Link to="/guides/api" className="text-primary text-sm underline underline-offset-4">Browse all public exports</Link>
    </div>
    <CodeSnippet code={`import { ${name} } from '@blencm/ui';`} />
    <nav aria-label="Module exports" className="flex flex-wrap gap-2">
      {module.exports.map(entry => <a key={entry.name} href={`#api-${entry.name}`} onClick={() => {
        const target = document.getElementById(`api-${entry.name}`);
        if (target instanceof HTMLDetailsElement) target.open = true;
      }} className="bg-muted/50 hover:bg-accent rounded-md border px-2 py-1 font-mono text-xs">{entry.name}</a>)}
    </nav>
    <div className="space-y-3">
      {components.map(entry => <ExportReference key={entry.name} entry={entry} expanded={entry.name === name} />)}
      {others.length > 0 && <div className="space-y-3 pt-3">
        <h3 className="text-sm font-semibold">Types, functions & constants</h3>
        {others.map(entry => <ExportReference key={entry.name} entry={entry} />)}
      </div>}
    </div>
  </section>;
}

export function ApiCatalog() {
  const [query, setQuery] = useState('');
  const [kind, setKind] = useState('all');
  const normalized = query.trim().toLowerCase();
  const modules = api.modules.map(module => ({ ...module, exports: module.exports.filter(entry =>
    (kind === 'all' || entry.kind === kind) && (!normalized || `${entry.name} ${module.source} ${entry.description} ${entry.props.map(prop => prop.name).join(' ')}`.toLowerCase().includes(normalized)),
  ) })).filter(module => module.exports.length);
  const count = modules.reduce((sum, module) => sum + module.exports.length, 0);

  return <section className="space-y-6">
    <div className="rounded-xl border bg-muted/30 p-4 text-sm leading-6">
      <p><strong>{api.modules.length} public modules · {api.modules.reduce((sum, module) => sum + module.exports.length, 0)} exports</strong></p>
      <p className="text-muted-foreground mt-1">Generated from the package entry. Search by export name, property or module. Native DOM attributes are omitted from prop tables; local defaults and dependency-specific props are included.</p>
    </div>
    <div className="flex flex-col gap-3 sm:flex-row">
      <Input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search exports or props…" aria-label="Search API reference" className="flex-1" />
      <select value={kind} onChange={event => setKind(event.target.value)} aria-label="Filter export kind" className="bg-background rounded-md border px-3 py-2 text-sm">
        <option value="all">All exports</option>
        {['component', 'function', 'type', 'value'].map(kind => <option key={kind} value={kind}>{kind[0].toUpperCase() + kind.slice(1)}s</option>)}
      </select>
    </div>
    <p role="status" className="text-muted-foreground text-sm">{count} matching exports in {modules.length} modules</p>
    <div className="space-y-4">
      {modules.map(module => <details key={`${module.source}-${normalized}-${kind}`} open={Boolean(normalized)} className="rounded-xl border">
        <summary className="hover:bg-muted/40 cursor-pointer px-4 py-3 text-sm">
          <span className="ml-2 break-all font-mono text-xs">{module.source.replace(/^src\//, '')}</span>
          <span className="text-muted-foreground ml-3 text-xs">{module.exports.length} exports</span>
        </summary>
        <div className="space-y-3 border-t p-4">{module.exports.map(entry => <ExportReference key={entry.name} entry={entry} />)}</div>
      </details>)}
      {!count && <p className="rounded-xl border border-dashed p-8 text-center text-sm">No exports match this search. Try a component name or a property such as valueMode.</p>}
    </div>
  </section>;
}

export function FormatReference() {
  return <section className="space-y-5" id="preset-reference">
    <h2 className="text-xl font-semibold tracking-tight">Complete format presets</h2>
    <p className="text-muted-foreground text-sm leading-6">Generated from the picker format maps. A preset selects a pattern; the picker still controls which date/time parts can be edited.</p>
    {Object.entries(api.formats).map(([kind, formats]) => <details key={kind} className="rounded-xl border">
      <summary className="cursor-pointer px-4 py-3 text-sm font-medium">{kind === 'date' ? 'Date' : 'Time'} presets · {formats.length}</summary>
      <div className="overflow-x-auto border-t"><table className="w-full min-w-[500px] text-left text-sm">
        <caption className="sr-only">{kind} format presets</caption>
        <thead className="bg-muted/40"><tr>{['Preset', 'Pattern', 'Description'].map(label => <th scope="col" key={label} className="p-3 font-medium">{label}</th>)}</tr></thead>
        <tbody className="divide-y">{formats.map(format => <tr key={format.name}>
          <th scope="row" className="p-3 text-xs font-normal"><code>{format.name}</code></th>
          <td className="p-3 text-xs"><code>{format.pattern}</code></td>
          <td className="text-muted-foreground p-3 text-xs leading-5 whitespace-pre-line">{format.description}</td>
        </tr>)}</tbody>
      </table></div>
    </details>)}
  </section>;
}
