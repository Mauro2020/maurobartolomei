type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-[52rem]">
      <p className="section-label">{eyebrow}</p>
      <h2 className="section-title mt-4 max-w-3xl">{title}</h2>
      <p className="section-copy mt-5 max-w-2xl">{description}</p>
    </div>
  );
}
