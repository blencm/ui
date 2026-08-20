import * as React from "react";

import { FileUpload } from "@/shared/fileupload";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function FileUploadDemoPage() {
  const t = useCopy({
    en: {
      label: "Add Image",
    },
    es: {
      label: "Añadir imagen",
    },
  });

  const [files, setFiles] = React.useState<File[]>([]);

  const code = `import * as React from 'react';
import { FileUpload } from '@blencm/ui';

export function FileUploadDemo() {
  const [files, setFiles] = React.useState<File[]>([]);

  return <FileUpload value={files} onChange={setFiles} label="${t.label}" />;
}`;

  return (
    <DemoPage title="FileUpload">
      <DemoPreview code={code}>
        <FileUpload value={files} onChange={setFiles} label={t.label} />
      </DemoPreview>
    </DemoPage>
  );
}
