import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { site } from "@/content/content";

export function RecentActivity() {
  const activity = site.activities.find((item) => item.featured) ?? site.activities[0];

  if (!activity) return null;

  return (
    <article id={activity.slug} className="grid grid-cols-1 gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-14">
      <div className="relative pb-10 sm:pr-16">
        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-200">
          <Image
            src={activity.mainImage}
            alt={activity.mainImageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-0 right-0 hidden w-[38%] bg-[var(--paper)] p-2 shadow-[0_12px_40px_rgba(30,24,20,0.18)] sm:block">
          <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
            <Image
              src={activity.detailImage}
              alt={activity.detailImageAlt}
              fill
              sizes="22vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="lg:sticky lg:top-28">
        <div className="flex flex-wrap items-center gap-3">
          <p className="section-kicker !text-[var(--accent-strong)]">{activity.eyebrow}</p>
          <span className="archive-tag !border-[var(--accent)] !text-[var(--accent-strong)]">{activity.status}</span>
        </div>
        <h3 className="mt-6 break-keep text-4xl font-medium leading-[1.06] tracking-[-0.055em] text-[var(--ink)] sm:text-5xl">
          {activity.title}
        </h3>
        <p className="mt-4 text-xl font-medium tracking-[-0.03em] text-[var(--ink)]">{activity.role}</p>

        <dl className="mt-8 border-y border-black/12">
          <div className="grid grid-cols-[92px_1fr] gap-4 border-b border-black/10 py-4 text-sm">
            <dt className="text-[var(--muted-light)]">기간</dt>
            <dd className="font-medium text-[var(--ink)]">{activity.period}</dd>
          </div>
          <div className="grid grid-cols-[92px_1fr] gap-4 py-4 text-sm">
            <dt className="text-[var(--muted-light)]">장소</dt>
            <dd className="font-medium text-[var(--ink)]">{activity.venue}</dd>
          </div>
        </dl>

        <p className="mt-7 break-keep text-base leading-8 text-[var(--muted)]">{activity.summary}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {activity.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              {link.label}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
