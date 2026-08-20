type THeadingProps = {
  title: string;
  description?: string;
  className?: string;
};

function Heading({ title, description, className }: THeadingProps) {
  return (
    <div className={className}>
      <div className="text-lg font-bold tracking-tight text-primary sm:text-3xl">
        {title}
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export { Heading };
