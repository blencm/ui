# Troubleshooting

Resolve integration problems using the actual component contracts.

## Common integration issues

| Symptom | Check |
| --- | --- |
| Components have no styles | Verify CSS side-effect imports are retained; explicitly import @blencm/ui/style.css in your application entry. |
| Theme overrides do not apply | Load overrides after the library stylesheet and override .dark values as well as :root. Use complete CSS color values. |
| Custom utility classes do nothing | Generate those utilities in your application. The library stylesheet cannot anticipate arbitrary classes supplied by consumers. |
| Form does not submit | Use Button type="submit", supply Form onSubmit and inspect schema/rules errors or onError. Button defaults to type="button". |
| Required marker does not validate | requiredLabel is visual. Add a schema/rules check or native required where appropriate. Form uses noValidate. |
| Number field returns a string | FormField follows native string input values. Convert with explicit schema preprocessing or application logic. |
| Date/time schema rejects values | Match schema/defaults to valueMode and allow null on clearing. UiDate/UiTime callbacks emit Date or undefined. |
| Selected option data is missing | Use unique string keys and supply data on normalized options, or use items with mapping callbacks. |
| Table shows only the current API page | Manual mode renders the supplied page. To paginate a full local array, set paginationMode="client". |
| All does not load every record | The application must fetch the numeric total size in manual mode. Provide totalRows and check API limits. |
| Table height ignores my setting | heightClassName is intentionally ignored when internalScroll={false}. |
| ScrollView does not scroll | Bound the parent height and use min-h-0 through flex ancestors, or set fit="content" with maxHeight. |
| Toast is not visible | Match @blencm/ui toast with Toaster, or sonner toast with ToasterSonner. Mount the corresponding renderer. |
| Files are selected but never uploaded | Dropzone/FileUpload return local File objects. Call your upload API from your application. |
| Dropzone onChange stops firing | options.onDrop overrides the top-level wrapper callback because options is spread last. |
| Resizable sizes look unexpected | Use explicit percentage strings when you want percentage sizing; consult the installed panel API types. |
| A prop is not accepted | Import components/types from the public entry and inspect the exact installed version. Similar wrappers have different change callbacks. |

## Maintain the reference

The API reference is generated from the public barrel and compiler-resolved props. It includes local destructuring/CVA defaults and dependency-specific props, while omitting repeated native DOM attributes.

Run docs:generate after changing public components, and docs:check to detect stale output. Usage notes and recipes are curated separately and should be reviewed when behavior changes.


```bash
pnpm docs:generate
pnpm docs:check
pnpm typecheck
pnpm lint
pnpm build:demo
```

## Related components

- [Form](https://ui.blencm.com/form)
- [DataTable](https://ui.blencm.com/data-table)
- [ScrollView](https://ui.blencm.com/scroll-view)
- [Dropzone](https://ui.blencm.com/dropzone)

