import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@blencm/ui';

export function TableDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Proyecto</TableHead>
          <TableHead>Owner</TableHead>
          <TableHead>Estado</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Website</TableCell>
          <TableCell>Jane</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mobile app</TableCell>
          <TableCell>Wade</TableCell>
          <TableCell>Paused</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`;

export default function TableDemoPage() {
  return (
    <DemoPage title="Table" description="Tabla HTML estilizada.">
      <DemoPreview code={code}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Proyecto</TableHead>
              <TableHead>Owner</TableHead>
              <TableHead>Estado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Website</TableCell>
              <TableCell>Jane</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mobile app</TableCell>
              <TableCell>Wade</TableCell>
              <TableCell>Paused</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DemoPreview>
    </DemoPage>
  );
}
