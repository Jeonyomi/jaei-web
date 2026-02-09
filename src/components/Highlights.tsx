import { site } from "@/content/content";

export function Highlights() {
  return (
    <div className="mx-auto w-full max-w-5xl px-5">
      <div className="grid grid-cols-1 gap-3 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {site.highlights.map((h) => (
          <div
            key={h.subtitle}
            className="rounded-xl border border-zinc-200 bg-white p-5"
          >
            <p className="text-xs font-medium tracking-wider text-zinc-500">
              {h.subtitle}
            </p>
            <p className="mt-2 text-base font-semibold text-zinc-950">{h.title}</p>
            <p className="mt-1 text-sm text-zinc-600">{h.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
