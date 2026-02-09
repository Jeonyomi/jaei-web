import { site } from "@/content/content";

export function TicketPanel() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {site.tickets.cards.map((card) => (
        <div
          key={card.title}
          className="rounded-xl border border-zinc-200 bg-white p-5"
        >
          <h3 className="text-base font-semibold text-zinc-950">{card.title}</h3>
          <p className="mt-2 text-sm text-zinc-600">{card.desc}</p>
          <a
            className="mt-4 inline-flex items-center justify-center rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            href={card.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {card.ctaLabel}
          </a>
        </div>
      ))}

      <div className="rounded-xl border border-zinc-200 bg-white p-5 md:col-span-2">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-zinc-950">할인 안내</p>
            <ul className="mt-2 flex flex-col gap-1 text-sm text-zinc-600">
              {site.tickets.discounts.map((d) => (
                <li key={d.label}>
                  {d.label}: <span className="font-medium">{d.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-zinc-50 p-4 text-sm text-zinc-700">
            <p className="font-medium text-zinc-950">유의사항</p>
            <ul className="mt-2 list-disc pl-5">
              {site.tickets.notes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
