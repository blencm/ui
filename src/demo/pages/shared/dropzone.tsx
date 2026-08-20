import * as React from "react";

import { Dropzone } from "@/shared/dropzone";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import * as React from 'react';
import { Dropzone } from '@blencm/ui';

export function DropzoneDemo() {
  const [files, setFiles] = React.useState<File[]>([]);

  return (
    <div className="space-y-3">
      <Dropzone onDrop={setFiles} />
      {files.length ? (
        <p className="text-sm text-muted-foreground">
          {files.map((file) => file.name).join(', ')}
        </p>
      ) : null}
    </div>
  );
}`;

export default function DropzoneDemoPage() {
  const [files, setFiles] = React.useState<File[]>([]);

  return (
    <DemoPage
      title="Dropzone"
      description="Zona de arrastrar y soltar archivos."
    >
      <DemoPreview code={code} className="space-y-3">
        <Dropzone
          onDrop={(nextFiles) => {
            setFiles(nextFiles);
          }}
        />
        {files.length ? (
          <p className="text-muted-foreground text-sm">
            {files.map((file) => file.name).join(", ")}
          </p>
        ) : null}
      </DemoPreview>
    </DemoPage>
  );
}
