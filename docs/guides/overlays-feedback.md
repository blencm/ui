# Dialogs, notifications & files

Compose application interactions with explicit state and useful feedback.

## Asynchronous confirmation

AlertModal is controlled: onConfirm does not close it automatically. Pass loading while saving, show any failure and close only after success. Custom children replace its default action buttons.


```tsx
import { useState } from 'react';
import { AlertModal, Button } from '@blencm/ui';

export function DeleteProject({ remove }: { remove: () => Promise<void> }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  async function confirm() {
    setLoading(true);
    setError('');
    try { await remove(); setOpen(false); }
    catch { setError('Deletion failed. Try again.'); }
    finally { setLoading(false); }
  }
  return <>
    <Button variant="destructive" onClick={() => { setError(''); setOpen(true); }}>Delete project</Button>
    <AlertModal isOpen={open} onClose={() => { if (!loading) setOpen(false); }}
      onConfirm={confirm} loading={loading} title="Delete project?"
      description={error || 'This permanently removes the project.'}
      confirmText="Delete project" />
  </>;
}
```

## Choose a notification system

The built-in toast API uses Toaster and toast/useToast from @blencm/ui. The returned toast handle provides update and dismiss. Mount its renderer once near the root.


```tsx
import { Button, Toaster, useToast } from '@blencm/ui';

export function ToastExample() {
  const { toast } = useToast();
  return <>
    <Button onClick={() => toast({ title: 'Saved', description: 'Your settings were updated.' })}>Notify</Button>
    <Toaster />
  </>;
}
```

## Sonner integration

Sonner uses ToasterSonner (alias SonnerToaster) from @blencm/ui and toast from sonner. The toast exported by @blencm/ui belongs to the built-in system. Declare sonner as a direct dependency when importing it in your application.


```tsx
import { Button, ToasterSonner } from '@blencm/ui';
import { toast } from 'sonner';

export function SonnerExample() {
  return <>
    <Button onClick={() => toast.success('Changes saved')}>Notify</Button>
    <ToasterSonner position="top-right" richColors />
  </>;
}
```

## File selection and upload

Dropzone and FileUpload select local File objects. Your application performs the network upload. FileUpload defaults to images and previews the first file; Dropzone can select arbitrary accepted formats.

options is spread after the wrapper callbacks and accept configuration. options.onDrop therefore replaces onChange/onDrop wiring; use the top-level callbacks unless you intend to override it.


```tsx
import { useState } from 'react';
import { Button, Dropzone } from '@blencm/ui';

export function Attachments({ upload }: { upload: (files: File[]) => Promise<void> }) {
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  return <>
    <Dropzone label="Attachments" value={files} onChange={setFiles}
      accept={{ 'application/pdf': ['.pdf'], 'image/png': ['.png'] }}
      description="Choose up to 3 PDF or PNG files, 5 MB each."
      options={{ maxFiles: 3, maxSize: 5 * 1024 * 1024,
        onDropRejected: () => setError('Check the file format, count and size.') }} />
    {error && <p role="alert">{error}</p>}
    <Button disabled={!files.length} loading={busy} onClick={async () => {
      setBusy(true);
      setError('');
      try { await upload(files); setFiles([]); }
      catch { setError('Upload failed. Please try again.'); }
      finally { setBusy(false); }
    }}>Upload files</Button>
  </>;
}
```

## Related components

- [AlertModal](https://ui.blencm.com/alert-modal)
- [Dialog](https://ui.blencm.com/dialog)
- [Toast](https://ui.blencm.com/toast)
- [Sonner](https://ui.blencm.com/sonner)
- [Dropzone](https://ui.blencm.com/dropzone)
- [FileUpload](https://ui.blencm.com/file-upload)

