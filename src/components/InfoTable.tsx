export function InfoTable({
  rows,
}: {
  rows: Array<[label: string, value: string]>;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
      <dl className="divide-y divide-zinc-200">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="grid grid-cols-1 gap-2 px-4 py-4 sm:grid-cols-[180px_1fr]"
          >
            <dt className="text-sm font-medium text-zinc-700">{label}</dt>
            <dd className="text-sm text-zinc-900">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
