import Image from "next/image";
import { site } from "@/content/content";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function Hero() {
  return (
    <section id="top" className="border-b border-black/8 bg-white/92">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 px-5 py-16 sm:py-20 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {site.hero.badges.map((b) => (
              <span key={b} className="pill-badge">
                {b}
              </span>
            ))}
          </div>

          <div className="space-y-4">
            <p className="section-kicker">Jae-i on Stage</p>
            <h1 className="whitespace-pre-line text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-zinc-950 sm:text-5xl md:text-6xl">
              {site.hero.headline}
            </h1>
            <p className="max-w-xl text-lg leading-8 text-zinc-600">{site.hero.subheadline}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            {site.hero.ctas.map((c) => (
              <a
                key={c.href}
                href={c.href}
                className={cx(c.variant === "primary" ? "button-primary" : "button-secondary")}
              >
                {c.label}
              </a>
            ))}
          </div>

          <p className="max-w-xl text-xs text-zinc-500">{site.hero.note}</p>
        </div>

        <div className="surface-card-strong p-3">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[14px] bg-zinc-100">
            <Image
              src="/gallery/2.jpg"
              alt="재이 프로필"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
