import * as React from "react";

import { UiInput } from "@/components/ui/input";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import * as React from 'react';
import { UiInput } from '@blencm/ui';

export function UiInputDemo() {
  const [name, setName] = React.useState('');

  return (
    <UiInput
      htmlFormItemId="name"
      label="Name"
      requiredLabel
      placeholder="Enter your name"
      value={name}
      onChange={(event) => setName(event.target.value)}
      errorMessage={
        name.length > 0 && name.trim().length < 2
          ? 'Minimum 2 characters'
          : undefined
      }
    />
  );
}`;

export default function UiInputDemoPage() {
  const [name, setName] = React.useState("");

  return (
    <DemoPage
      title="UiInput"
      description="Input con label, required y mensaje de error, sin React Hook Form."
    >
      <DemoPreview code={code} className="max-w-sm">
        <UiInput
          htmlFormItemId="name"
          label="Name"
          requiredLabel
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          errorMessage={
            name.length > 0 && name.trim().length < 2
              ? "Minimum 2 characters"
              : undefined
          }
        />
      </DemoPreview>
    </DemoPage>
  );
}
