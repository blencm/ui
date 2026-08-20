import { Helmet, HelmetProvider } from "react-helmet-next";

export type PageHeadProps = {
  title?: string;
};

function PageHead({ title = "@blencm/ui" }: PageHeadProps) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </HelmetProvider>
  );
}

export { PageHead };
