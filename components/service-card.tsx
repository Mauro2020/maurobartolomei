import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <article className="surface-panel card-hover flex h-full flex-col rounded-[1.75rem] p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan/15 bg-cyan/10 text-cyan">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/70">{description}</p>
    </article>
  );
}
