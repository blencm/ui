import { Link, useParams } from 'react-router';

import { CodeSnippet } from '../layout/CodeSnippet';
import { demos } from '../registry';
import { ApiCatalog, FormatReference } from './ApiReference';
import { guides } from './guides';

export default function GuidePage() {
  const { guideSlug } = useParams();
  const guide = guides.find(guide => guide.slug === guideSlug);
  const isApi = guideSlug === 'api';
  if (!guide && !isApi) return <div className="mx-auto max-w-4xl space-y-4"><h1 className="text-3xl font-bold">Guide not found</h1><Link to="/" className="text-primary underline">Return to documentation</Link></div>;
  const index = guides.findIndex(guide => guide.slug === guideSlug);
  const previous = guides[index - 1];
  const next = guides[index + 1];
  return <article key={guideSlug} className="mx-auto max-w-4xl space-y-10 pb-12">
    <header className="space-y-3">
      <p className="text-primary text-xs font-semibold tracking-widest uppercase">{isApi ? 'Package reference' : 'Developer guide'}</p>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{isApi ? 'Public API reference' : guide!.title}</h1>
      <p className="text-muted-foreground max-w-2xl text-base leading-7">{isApi ? 'Every exported component, hook, function, type and constant in @blencm/ui.' : guide!.description}</p>
    </header>
    {isApi ? <ApiCatalog /> : <>
      <nav aria-label="On this page" className="bg-muted/30 rounded-xl border p-5">
        <h2 className="text-sm font-semibold">On this page</h2>
        <ol className="mt-3 grid gap-2 sm:grid-cols-2">{guide!.sections.map(section => <li key={section.id}><a href={`#${section.id}`} className="text-muted-foreground hover:text-foreground text-sm underline-offset-4 hover:underline">{section.title}</a></li>)}</ol>
      </nav>
      {guide!.sections.map(section => <section id={section.id} key={section.id} className="space-y-4 scroll-mt-6">
        <h2 className="text-xl font-semibold tracking-tight">{section.title}</h2>
        {section.paragraphs.map(paragraph => <p key={paragraph} className="text-muted-foreground text-sm leading-7">{paragraph}</p>)}
        {section.bullets && <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-7">{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}
        {section.table && <div className="overflow-x-auto rounded-xl border" role="region" tabIndex={0} aria-label={section.title}>
          <table className="w-full min-w-[500px] text-left text-sm">
            <caption className="sr-only">{section.title}</caption>
            <thead className="bg-muted/50 border-b"><tr>{section.table.headings.map(label => <th scope="col" key={label} className="px-4 py-3 font-medium">{label}</th>)}</tr></thead>
            <tbody className="divide-y">{section.table.rows.map((row, index) => <tr key={index}>{row.map((cell, index) => index === 0
              ? <th scope="row" key={index} className="px-4 py-3 align-top text-xs leading-6 font-medium">{cell}</th>
              : <td key={index} className="text-muted-foreground px-4 py-3 align-top text-xs leading-6">{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>}
        {section.code && <div className="space-y-2"><p className="text-muted-foreground font-mono text-[11px] uppercase">{section.language ?? 'tsx'}</p><CodeSnippet code={section.code} /></div>}
      </section>)}
      {guideSlug === 'dates-times' && <FormatReference />}
      <section className="space-y-3 border-t pt-6">
        <h2 className="text-lg font-semibold">Explore the components</h2>
        <div className="flex flex-wrap gap-2">{guide!.related.map(slug => <Link key={slug} to={`/${slug}`} className="hover:bg-accent rounded-lg border px-3 py-2 text-sm">{demos.find(demo => demo.slug === slug)?.title ?? slug}</Link>)}</div>
      </section>
      <nav aria-label="Guide navigation" className="grid gap-4 border-t pt-6 sm:grid-cols-2">
        {previous ? <Link to={`/guides/${previous.slug}`} className="hover:bg-muted/40 rounded-xl border p-4"><span className="text-muted-foreground block text-xs">Previous guide</span><span className="mt-1 block text-sm font-medium">{previous.title}</span></Link> : <div />}
        {next && <Link to={`/guides/${next.slug}`} className="hover:bg-muted/40 rounded-xl border p-4 sm:text-right"><span className="text-muted-foreground block text-xs">Next guide</span><span className="mt-1 block text-sm font-medium">{next.title}</span></Link>}
      </nav>
    </>}
  </article>;
}
