import Image from "next/image";
import { ArrowUpRight, Instagram } from "lucide-react";

import { site } from "@/content/content";

export function ProfileIntro() {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
      <div className="flex flex-col justify-between">
        <div>
          <p className="section-kicker">{site.profile.eyebrow}</p>
          <p className="mt-5 max-w-3xl break-keep text-3xl font-medium leading-[1.28] tracking-[-0.045em] text-[var(--ink)] sm:text-4xl sm:leading-[1.22]">
            {site.profile.lead}
          </p>
          <p className="mt-7 max-w-2xl break-keep text-base leading-8 text-[var(--muted)] sm:text-lg">
            {site.profile.body}
          </p>
        </div>

        <div className="mt-9 flex flex-wrap gap-2">
          {site.profile.focus.map((item) => (
            <span key={item} className="archive-tag">
              {item}
            </span>
          ))}
        </div>

        <a
          href={site.profile.instagram.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-[var(--ink)] underline decoration-black/25 underline-offset-4 transition-colors hover:text-[var(--accent-strong)]"
        >
          <Instagram className="h-4 w-4" aria-hidden="true" />
          {site.profile.instagram.label}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-200">
          <Image
            src={site.profile.image}
            alt={site.profile.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover object-top"
          />
        </div>
        <div className="next-stage-panel flex min-h-[220px] flex-col justify-between p-6 sm:p-7">
          <p className="text-[10px] font-medium tracking-[0.18em] text-white/55">{site.profile.nextStage.eyebrow}</p>
          <div className="mt-12">
            <h3 className="text-2xl font-medium tracking-[-0.04em] text-white">{site.profile.nextStage.title}</h3>
            <p className="mt-3 break-keep text-sm leading-7 text-white/65">{site.profile.nextStage.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
