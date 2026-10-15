import * as React from "react";

import { UiCheckbox } from "@/components/ui/ui-checkbox";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function UiCheckboxDemoPage() {
  const t = useCopy({
    en: {
      label: "I accept the terms and conditions",
      description:
        "You can change this option later from your account settings.",
      error: "You must accept the terms.",
    },
  });

  const [accepted, setAccepted] = React.useState(false);

  const code = `import * as React from 'react';
import { UiCheckbox } from '@blencm/ui';

export function UiCheckboxDemo() {
  const [accepted, setAccepted] = React.useState(false);

  return (
    <UiCheckbox
      htmlFormItemId="terms"
      checked={accepted}
      onCheckedChange={(value) => setAccepted(value === true)}
      label="${t.label}"
      description="${t.description}"
      requiredLabel
      errorMessage={!accepted ? '${t.error}' : undefined}
    />
  );
}`;

  return (
    <DemoPage title="UiCheckbox">
      <DemoPreview code={code} className="max-w-md">
        <UiCheckbox
          htmlFormItemId="terms"
          checked={accepted}
          onCheckedChange={(value) => setAccepted(value === true)}
          label={t.label}
          description={t.description}
          requiredLabel
          errorMessage={!accepted ? t.error : undefined}
        />
      </DemoPreview>
    </DemoPage>
  );
}
