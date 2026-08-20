import * as React from "react";

import { UiCheckbox } from "@/components/ui/ui-checkbox";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import * as React from 'react';
import { UiCheckbox } from '@blencm/ui';

export function UiCheckboxDemo() {
  const [accepted, setAccepted] = React.useState(false);

  return (
    <UiCheckbox
      htmlFormItemId="terms"
      checked={accepted}
      onCheckedChange={(value) => setAccepted(value === true)}
      label="I accept the terms and conditions"
      description="You can change this option later from your account settings."
      requiredLabel
      errorMessage={!accepted ? 'You must accept the terms.' : undefined}
    />
  );
}`;

export default function UiCheckboxDemoPage() {
  const [accepted, setAccepted] = React.useState(false);

  return (
    <DemoPage
      title="UiCheckbox"
      description="Checkbox con label, descripción y error, sin React Hook Form."
    >
      <DemoPreview code={code} className="max-w-md">
        <UiCheckbox
          htmlFormItemId="terms"
          checked={accepted}
          onCheckedChange={(value) => setAccepted(value === true)}
          label="I accept the terms and conditions"
          description="You can change this option later from your account settings."
          requiredLabel
          errorMessage={!accepted ? "You must accept the terms." : undefined}
        />
      </DemoPreview>
    </DemoPage>
  );
}
