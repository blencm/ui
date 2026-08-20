import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function TableDemoPage() {
  const t = useCopy({
    en: {
      project: "Project",
      owner: "Owner",
      status: "Status",
      website: "Website",
      mobile: "Mobile app",
      active: "Active",
      paused: "Paused",
    },
    es: {
      project: "Proyecto",
      owner: "Responsable",
      status: "Estado",
      website: "Sitio web",
      mobile: "App móvil",
      active: "Activo",
      paused: "Pausado",
    },
  });

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
          <TableHead>${t.project}</TableHead>
          <TableHead>${t.owner}</TableHead>
          <TableHead>${t.status}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>${t.website}</TableCell>
          <TableCell>Jane</TableCell>
          <TableCell>${t.active}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>${t.mobile}</TableCell>
          <TableCell>Wade</TableCell>
          <TableCell>${t.paused}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`;

  return (
    <DemoPage title="Table">
      <DemoPreview code={code}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t.project}</TableHead>
              <TableHead>{t.owner}</TableHead>
              <TableHead>{t.status}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>{t.website}</TableCell>
              <TableCell>Jane</TableCell>
              <TableCell>{t.active}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t.mobile}</TableCell>
              <TableCell>Wade</TableCell>
              <TableCell>{t.paused}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DemoPreview>
    </DemoPage>
  );
}
