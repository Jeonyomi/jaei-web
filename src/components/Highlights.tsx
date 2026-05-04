import { site } from "@/content/content";

export function Highlights() {
  return (
    <div className="mx-auto w-full max-w-5xl px-5">
      <div className="grid grid-cols-1 gap-3 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {site.highlights.map((h) => (
          <div key={h.subtitle} className="surface-card p-5">
            <p className="section-kicker">{h.subtitle}</p>
            <p className="mt-3 text-base font-semibold tracking-[-0.02em] text-zinc-950">{h.title}</p>
            <p className="mt-1 text-sm text-zinc-600">{h.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
