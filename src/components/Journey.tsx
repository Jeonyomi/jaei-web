import { site, type JourneyItem } from "@/content/content";

function groupByYear(items: JourneyItem[]) {
  return items.reduce<Record<string, JourneyItem[]>>((groups, item) => {
    groups[item.year] ??= [];
    groups[item.year].push(item);
    return groups;
  }, {});
}

export function Journey() {
  const groups = groupByYear(site.journey.items);

  return (
    <div>
      <p className="max-w-2xl break-keep text-base leading-8 text-[var(--muted)]">{site.journey.note}</p>
      <div className="mt-10 border-t border-black/15">
        {Object.entries(groups)
          .sort(([left], [right]) => Number(right) - Number(left))
          .map(([year, items]) => (
            <section key={year} className="grid grid-cols-1 border-b border-black/12 py-8 md:grid-cols-[150px_1fr] md:gap-8">
            <div>
              <h3 className="text-4xl font-medium tracking-[-0.055em] text-[var(--ink)]">{year}</h3>
              <p className="mt-2 text-[10px] font-medium tracking-[0.18em] text-[var(--muted-light)]">STAGE LOG</p>
            </div>
            <ol className="mt-6 divide-y divide-black/10 md:mt-0">
              {items.map((item) => (
                <li key={`${item.event}-${item.piece}`} className="grid grid-cols-1 gap-2 py-5 first:pt-0 last:pb-0 sm:grid-cols-[1fr_auto] sm:gap-8">
                  <div>
                    <p className="text-base font-medium tracking-[-0.02em] text-[var(--ink)]">{item.event}</p>
                    <p className="mt-1 break-keep text-sm leading-6 text-[var(--muted)]">{item.piece}</p>
                    <p className="mt-1 text-xs text-[var(--muted-light)]">{item.venue}</p>
                  </div>
                  <p className="text-sm font-medium text-[var(--accent-strong)] sm:text-right">{item.result}</p>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
