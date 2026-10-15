import { lazy, Suspense } from 'react';
import { Link } from 'react-router';

import { demos } from '../registry';
import { componentNotes } from './component-notes';

const ComponentApi = lazy(() => import('./ApiReference').then(module => ({ default: module.ComponentApi })));

export default function ComponentDocumentation({ slug }: { slug: string }) {
  const notes = componentNotes[slug];
  if (!notes) return null;
  return <div className="space-y-10 border-t pt-8">
    <section id="usage" className="space-y-4 scroll-mt-6" aria-labelledby="usage-heading">
      <div className="space-y-2">
        <p className="text-primary text-xs font-semibold tracking-widest uppercase">Implementation</p>
        <h2 id="usage-heading" className="text-2xl font-semibold tracking-tight">Usage & behavior</h2>
      </div>
      <ul className="text-muted-foreground list-disc space-y-3 pl-5 text-sm leading-7">{notes.usage.map(item => <li key={item}>{item}</li>)}</ul>
      <div className="bg-muted/30 rounded-xl border p-4">
        <h3 className="text-sm font-semibold">Accessibility</h3>
        <p className="text-muted-foreground mt-1.5 text-sm leading-6">{notes.accessibility}</p>
        <Link to="/guides/accessibility" className="text-primary mt-2 inline-block text-sm underline underline-offset-4">Composition and accessibility guide</Link>
      </div>
    </section>
    <Suspense fallback={<p role="status" className="text-muted-foreground text-sm">Loading API reference…</p>}>
      <ComponentApi key={slug} slug={slug} />
    </Suspense>
    <section className="space-y-3" aria-labelledby="related-heading">
      <h2 id="related-heading" className="text-lg font-semibold">Related components</h2>
      <div className="flex flex-wrap gap-2">{notes.related.map(slug => <Link key={slug} to={`/${slug}`} className="hover:bg-accent rounded-lg border px-3 py-2 text-sm">{demos.find(demo => demo.slug === slug)?.title ?? slug}</Link>)}</div>
    </section>
  </div>;
}
