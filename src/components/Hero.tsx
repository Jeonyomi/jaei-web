import Image from "next/image";
import { site } from "@/content/content";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function Hero() {
  return (
    <section id="top" className="border-b border-zinc-200/70 bg-white">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 px-5 py-14 sm:py-20 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <div className="flex flex-wrap gap-2">
            {site.hero.badges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium tracking-wider text-zinc-700"
              >
                {b}
              </span>
            ))}
          </div>

          <h1 className="whitespace-pre-line text-4xl font-semibold leading-[1.15] tracking-tight text-zinc-950 sm:text-5xl">
            {site.hero.headline}
          </h1>
          <p className="text-lg leading-8 text-zinc-600">{site.hero.subheadline}</p>

          <div className="flex flex-col gap-3 sm:flex-row">
            {site.hero.ctas.map((c) => (
              <a
                key={c.href}
                href={c.href}
                className={cx(
                  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium",
                  c.variant === "primary"
                    ? "bg-zinc-950 text-white hover:bg-zinc-800"
                    : "border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50"
                )}
              >
                {c.label}
              </a>
            ))}
          </div>

          <p className="text-xs text-zinc-500">{site.hero.note}</p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
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
