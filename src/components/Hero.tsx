import Image from "next/image";
import { ArrowDownRight, Instagram } from "lucide-react";

import { site } from "@/content/content";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function Hero() {
  return (
    <section id="top" className="stage-hero overflow-hidden border-b border-black/10">
      <div className="mx-auto grid min-h-[760px] w-full max-w-6xl grid-cols-1 lg:grid-cols-[1.04fr_0.96fr]">
        <div className="flex min-w-0 flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--accent)]" aria-hidden="true" />
            <p className="section-kicker !text-[var(--accent-strong)]">{site.hero.eyebrow}</p>
          </div>

          <h1 className="mt-8 whitespace-pre-line text-[clamp(3.25rem,7vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.07em] text-[var(--ink)]">
            {site.hero.headline}
          </h1>

          <p className="mt-8 max-w-xl break-keep text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">
            {site.hero.subheadline}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {site.hero.ctas.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                className={cx(cta.variant === "primary" ? "button-primary" : "button-secondary")}
              >
                {cta.label}
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
            <a
              href={site.profile.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="button-text"
              aria-label="전재이 인스타그램 @j_on_stage 새 창에서 열기"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              @j_on_stage
            </a>
          </div>

          <p className="mt-8 max-w-xl text-xs leading-5 text-[var(--muted-light)]">{site.hero.note}</p>
        </div>

        <div className="relative min-h-[560px] border-t border-black/10 bg-zinc-200 lg:min-h-full lg:border-l lg:border-t-0">
          <Image
            src={site.hero.image}
            alt={site.hero.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/65 via-black/15 to-transparent px-5 pb-5 pt-24 text-white sm:px-7 sm:pb-7">
            <div>
              <p className="text-xs font-medium tracking-[0.16em]">PORTRAIT / 2026</p>
              <p className="mt-2 text-sm text-white/75">Growing through every stage.</p>
            </div>
            <span className="font-mono text-4xl font-light tracking-[-0.08em] text-white/85">01</span>
          </div>
        </div>
      </div>
    </section>
  );
}
