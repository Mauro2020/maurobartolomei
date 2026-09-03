type FeatureListProps = {
  items: string[];
};

export function FeatureList({ items }: FeatureListProps) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
