import * as React from "react";

import { FileUpload } from "@/shared/fileupload";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import * as React from 'react';
import { FileUpload } from '@blencm/ui';

export function FileUploadDemo() {
  const [files, setFiles] = React.useState<File[]>([]);

  return <FileUpload value={files} onChange={setFiles} />;
}`;

export default function FileUploadDemoPage() {
  const [files, setFiles] = React.useState<File[]>([]);

  return (
    <DemoPage
      title="FileUpload"
      description="Subida de imagen circular con dropzone."
    >
      <DemoPreview code={code}>
        <FileUpload value={files} onChange={setFiles} />
      </DemoPreview>
    </DemoPage>
  );
}
