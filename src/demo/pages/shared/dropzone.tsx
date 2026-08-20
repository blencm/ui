import * as React from "react";

import { Dropzone } from "@/shared/dropzone";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function DropzoneDemoPage() {
  const t = useCopy({
    en: {
      description: "Drag and drop some files here, or click to select files",
      descriptionActive: "Drop the files here ...",
    },
    es: {
      description: "Arrastra archivos aquí, o haz clic para seleccionarlos",
      descriptionActive: "Suelta los archivos aquí...",
    },
  });

  const [files, setFiles] = React.useState<File[]>([]);

  const code = `import * as React from 'react';
import { Dropzone } from '@blencm/ui';

export function DropzoneDemo() {
  const [files, setFiles] = React.useState<File[]>([]);

  return (
    <div className="space-y-3">
      <Dropzone
        onDrop={setFiles}
        description="${t.description}"
        descriptionActive="${t.descriptionActive}"
      />
      {files.length ? (
        <p className="text-sm text-muted-foreground">
          {files.map((file) => file.name).join(', ')}
        </p>
      ) : null}
    </div>
  );
}`;

  return (
    <DemoPage title="Dropzone">
      <DemoPreview code={code} className="space-y-3">
        <Dropzone
          onDrop={(nextFiles) => {
            setFiles(nextFiles);
          }}
          description={t.description}
          descriptionActive={t.descriptionActive}
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
