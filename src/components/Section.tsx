import type { ReactNode } from "react";

export function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-black/6 py-14 sm:py-16">
      <div className="mx-auto w-full max-w-5xl px-5">
        <header className="mb-7 space-y-2">
          <p className="section-kicker">{eyebrow ?? id}</p>
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-[2rem]">{title}</h2>
        </header>
        {children}
      </div>
    </section>
  );
}
