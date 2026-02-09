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
    <section id={id} className="scroll-mt-24 py-14 sm:py-16">
      <div className="mx-auto w-full max-w-5xl px-5">
        <header className="mb-6">
          {eyebrow ? (
            <p className="text-xs font-medium tracking-wider text-zinc-500">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
            {title}
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
}
