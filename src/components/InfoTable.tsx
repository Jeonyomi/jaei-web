export function InfoTable({
  rows,
}: {
  rows: Array<[label: string, value: string]>;
}) {
  return (
    <div className="surface-card overflow-hidden">
      <dl className="divide-y divide-zinc-200/90">
        {rows.map(([label, value]) => (
          <div key={label} className="grid grid-cols-1 gap-2 px-4 py-4 sm:grid-cols-[180px_1fr] sm:px-5">
            <dt className="text-sm font-medium text-zinc-600">{label}</dt>
            <dd className="text-sm text-zinc-900">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
