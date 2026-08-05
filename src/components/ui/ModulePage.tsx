type ModulePageProps = {
  title: string;
  description: string;
  moduleName: string;
};

export function ModulePage({
  title,
  description,
  moduleName,
}: ModulePageProps) {
  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
        {moduleName}
      </p>
      <h1 className="mt-3 text-3xl font-semibold text-zinc-950">{title}</h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
        {description}
      </p>
    </section>
  );
}
