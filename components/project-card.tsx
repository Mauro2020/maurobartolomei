type ProjectCardProps = {
  title: string;
  category: string;
  summary: string;
};

export function ProjectCard({ title, category, summary }: ProjectCardProps) {
  return (
    <article className="surface-panel card-hover flex h-full flex-col rounded-[1.9rem] p-7">
      <p className="text-[11px] uppercase tracking-[0.32em] text-cyan">{category}</p>
      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-4 max-w-xl leading-8 text-white/70">{summary}</p>
    </article>
  );
}
