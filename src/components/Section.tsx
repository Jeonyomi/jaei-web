import type { ReactNode } from "react";

export function Section({
  id,
  title,
  eyebrow,
  children,
  tone = "paper",
}: {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  tone?: "paper" | "soft";
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-t border-black/10 py-16 sm:py-20 lg:py-24 ${tone === "soft" ? "bg-[var(--paper-soft)]" : "bg-[var(--paper)]"}`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        <header className="mb-10 grid grid-cols-1 gap-3 sm:mb-14 md:grid-cols-[160px_1fr] md:items-end">
          <p className="section-kicker">{eyebrow ?? id}</p>
          <h2 className="text-4xl font-medium leading-none tracking-[-0.055em] text-[var(--ink)] sm:text-5xl">{title}</h2>
        </header>
        {children}
      </div>
    </section>
  );
}
