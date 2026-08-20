import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import * as React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@blencm/ui';

export function SelectDemo() {
  const [value, setValue] = React.useState('');

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger>
        <SelectValue placeholder="Elige un tema" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  );
}`;

export default function SelectDemoPage() {
  const [value, setValue] = React.useState("");

  return (
    <DemoPage title="Select" description="Selector de opciones de bajo nivel.">
      <DemoPreview code={code} className="max-w-xs">
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger>
            <SelectValue placeholder="Elige un tema" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </DemoPreview>
    </DemoPage>
  );
}
