import { site } from "@/content/content";

export function TicketPanel() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {site.tickets.cards.map((card) => (
        <div key={card.title} className="surface-card p-5">
          <p className="section-kicker">Ticket Notice</p>
          <h3 className="mt-2 text-base font-semibold tracking-[-0.02em] text-zinc-950">{card.title}</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">{card.desc}</p>
          <a
            className="button-primary mt-4"
            href={card.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {card.ctaLabel}
          </a>
        </div>
      ))}

      <div className="surface-card p-5 md:col-span-2">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="section-kicker">Discount</p>
            <p className="mt-2 text-sm font-semibold text-zinc-950">할인 안내</p>
            <ul className="mt-2 flex flex-col gap-1 text-sm text-zinc-600">
              {site.tickets.discounts.map((d) => (
                <li key={d.label}>
                  {d.label}: <span className="font-medium text-zinc-900">{d.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-tint p-4 text-sm text-zinc-700 md:max-w-sm">
            <p className="font-medium text-zinc-950">유의사항</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
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
