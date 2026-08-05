import Image from "next/image";
import { ArrowUpRight, Instagram } from "lucide-react";

import { site } from "@/content/content";

export function ProfileIntro() {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
      <div className="flex flex-col justify-between">
        <div>
          <p className="max-w-3xl break-keep text-3xl font-medium leading-[1.28] tracking-[-0.045em] text-[var(--ink)] sm:text-4xl sm:leading-[1.22]">
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

      <div className="relative min-h-[460px] overflow-hidden bg-zinc-200 lg:min-h-[620px]">
          <Image
            src={site.profile.image}
            alt={site.profile.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover object-top"
          />
      </div>
    </div>
  );
}
