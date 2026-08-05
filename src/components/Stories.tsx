import { ArrowUpRight } from "lucide-react";

import { site } from "@/content/content";

export function Stories() {
  const featured = site.stories.items.find((item) => item.featured);

  if (!featured) return null;

  const rest = site.stories.items.filter((item) => item !== featured);

  return (
    <div>
      <p className="max-w-2xl break-keep text-base leading-8 text-[var(--muted)]">{site.stories.note}</p>
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
        <a
          href={featured.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-h-[360px] flex-col justify-between bg-[var(--ink)] p-7 text-white transition-transform duration-300 hover:-translate-y-1 sm:p-9"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs text-white/50">주요 소식</p>
            <ArrowUpRight className="h-5 w-5 text-white/60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </div>
          <div className="mt-16">
            <p className="text-xs tracking-[0.08em] text-white/50">{featured.date} · {featured.source}</p>
            <h3 className="mt-4 break-keep text-3xl font-medium leading-tight tracking-[-0.045em]">{featured.title}</h3>
            <p className="mt-4 break-keep text-sm leading-7 text-white/65">{featured.summary}</p>
          </div>
        </a>

        <div className="border-t border-black/15">
          {rest.map((item) => (
            <a
              key={`${item.date}-${item.title}`}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-[88px_1fr_auto] gap-4 border-b border-black/12 py-5 transition-colors hover:text-[var(--accent-strong)] sm:grid-cols-[116px_1fr_auto]"
            >
              <p className="text-xs leading-6 text-[var(--muted-light)]">{item.date}</p>
              <div>
                <p className="text-xs text-[var(--muted-light)]">{item.source}</p>
                <h3 className="mt-1 break-keep text-base font-medium leading-6 tracking-[-0.02em] text-[var(--ink)] group-hover:text-[var(--accent-strong)]">
                  {item.title}
                </h3>
              </div>
              <ArrowUpRight className="mt-1 h-4 w-4 text-[var(--muted-light)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
