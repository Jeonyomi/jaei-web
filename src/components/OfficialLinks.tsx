import { officialLinks } from "@/content/officialLinks";

export function OfficialLinks() {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5">
      <p className="text-sm font-semibold text-zinc-950">공식 채널</p>
      <ul className="mt-3 space-y-2">
        {officialLinks.map((l) => (
          <li key={l.href} className="text-sm">
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-500"
            >
              {l.label}
            </a>
            {l.note ? (
              <span className="ml-2 text-xs text-zinc-500">({l.note})</span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
