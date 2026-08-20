import { Button } from "@/components/Button/button";
import { Form } from "@/components/Form/form";
import { FormCheckbox } from "@/components/Form/form-checkbox";
import { FormField } from "@/components/Form/form-field";
import { FormSelect } from "@/components/Form/form-select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { getCountryItems } from "./data";
import { UiSelect } from "@/components/ui/select";
import { FormDate } from "@/components/Form/form-date";
import { FormTime } from "@/components/Form/form-time";
import { FormTextarea } from "@/components/Form/form-textarea";
import { useCopy } from "./i18n/copy";
import { useDateFnsLocale } from "./i18n/date-locale";
import { useLocale } from "./i18n/locale";

type FormValues = {
  name: string;
  email: string;
  password: string;
  description: string;
  role: "owner" | "editor" | "viewer";
  country?: string;
  start_date?: string;
  start_time?: string;
  accepted: boolean;
};

export function FormDemo() {
  const { locale } = useLocale();
  const dateLocale = useDateFnsLocale();
  const countries = getCountryItems(locale);
  const t = useCopy({
    en: {
      min2: "Minimum 2 characters",
      invalidEmail: "Invalid email address",
      min8: "Minimum 8 characters",
      min10: "Minimum 10 characters",
      mustAccept: "You must accept the terms",
      name: "Name",
      namePlaceholder: "Jane Doe",
      email: "Email",
      emailPlaceholder: "jane@example.com",
      startDate: "Start date",
      startDatePlaceholder: "Select a date",
      startTime: "Start time",
      startTimePlaceholder: "Select time",
      description: "Description",
      descriptionPlaceholder: "Enter a description",
      password: "Password",
      role: "Role",
      rolePlaceholder: "Select a role",
      owner: "Owner",
      editor: "Editor",
      viewer: "Viewer",
      country: "Country",
      countryPlaceholder: "Select a country",
      searchCountries: "Search countries...",
      noCountries: "No countries available",
      accept: "I accept the terms",
      acceptDescription: "This field is required to continue.",
      submit: "Create account",
    },
    es: {
      min2: "Mínimo 2 caracteres",
      invalidEmail: "Correo no válido",
      min8: "Mínimo 8 caracteres",
      min10: "Mínimo 10 caracteres",
      mustAccept: "Debes aceptar los términos",
      name: "Nombre",
      namePlaceholder: "Jane Doe",
      email: "Correo",
      emailPlaceholder: "jane@example.com",
      startDate: "Fecha de inicio",
      startDatePlaceholder: "Seleccione una fecha",
      startTime: "Hora de inicio",
      startTimePlaceholder: "Seleccione una hora",
      description: "Descripción",
      descriptionPlaceholder: "Ingrese una descripción",
      password: "Contraseña",
      role: "Rol",
      rolePlaceholder: "Selecciona un rol",
      owner: "Propietario",
      editor: "Editor",
      viewer: "Visor",
      country: "País",
      countryPlaceholder: "Selecciona un país",
      searchCountries: "Buscar países...",
      noCountries: "No hay países",
      accept: "Acepto los términos",
      acceptDescription: "Este campo es obligatorio para continuar.",
      submit: "Crear cuenta",
    },
  });

  const schema = z.object({
    name: z.string().min(2, t.min2),
    email: z.string().email(t.invalidEmail),
    password: z.string().min(8, t.min8),
    description: z.string().min(10, t.min10),
    role: z.enum(["owner", "editor", "viewer"]),
    country: z.string().optional(),
    start_date: z.string().optional(),
    start_time: z.string().optional(),
    accepted: z.boolean().refine(Boolean, t.mustAccept),
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "viewer",
      description: "",
      accepted: false,
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  const roleItems = [
    { label: t.owner, value: "owner" },
    { label: t.editor, value: "editor" },
    { label: t.viewer, value: "viewer" },
  ];

  return (
    <Form
      methods={form}
      onSubmit={onSubmit}
      formProps={{ className: "space-y-4" }}
    >
      <FormField
        control={form.control}
        name="name"
        label={t.name}
        placeholder={t.namePlaceholder}
        requiredLabel
      />

      <FormField
        control={form.control}
        name="email"
        label={t.email}
        type="email"
        placeholder={t.emailPlaceholder}
        requiredLabel
      />

      <FormDate
        control={form.control}
        name="start_date"
        label={t.startDate}
        placeholder={t.startDatePlaceholder}
        locale={dateLocale}
        valueMode="string"
        formatPattern=""
      />

      <FormTime
        control={form.control}
        name="start_time"
        label={t.startTime}
        placeholder={t.startTimePlaceholder}
      />

      <FormTextarea
        control={form.control}
        name="description"
        label={t.description}
        placeholder={t.descriptionPlaceholder}
        requiredLabel
        rows={4}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          control={form.control}
          name="password"
          label={t.password}
          type="password"
          placeholder="••••••••"
          requiredLabel
        />

        <FormSelect
          control={form.control}
          name="role"
          label={t.role}
          placeholder={t.rolePlaceholder}
          items={roleItems}
        />
      </div>

      <FormSelect
        control={form.control}
        name="country"
        label={t.country}
        placeholder={t.countryPlaceholder}
        searchable
        items={countries}
        searchPlaceholder={t.searchCountries}
        emptyText={t.noCountries}
      />

      <UiSelect
        items={countries}
        placeholder={t.countryPlaceholder}
      />

      <FormCheckbox
        control={form.control}
        name="accepted"
        label={t.accept}
        description={t.acceptDescription}
      />

      <Button type="submit" className="w-full">
        {t.submit}
      </Button>
    </Form>
  );
}
