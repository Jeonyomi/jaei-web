"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Instagram, Menu, X } from "lucide-react";

import { site } from "@/content/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const nav = useMemo(() => site.nav, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[color:rgba(247,244,237,0.9)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link href="#top" className="flex items-baseline gap-2" aria-label={`${site.title} 홈으로`} onClick={() => setOpen(false)}>
          <span className="text-base font-semibold tracking-[-0.035em] text-[var(--ink)]">Jae-i</span>
          <span className="text-[10px] font-medium tracking-[0.18em] text-[var(--muted-light)]">ON STAGE</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="메인 메뉴">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent-strong)]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.profile.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-11 w-11 items-center justify-center border border-black/12 text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-strong)] sm:inline-flex"
            aria-label="Instagram @j_on_stage 새 창에서 열기"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-black/12 text-[var(--ink)] lg:hidden"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-black/10 bg-[var(--paper)] px-5 py-4 lg:hidden" aria-label="모바일 메뉴">
          <ul className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-px bg-black/10">
            {nav.map((item) => (
              <li key={item.href} className="bg-[var(--paper)]">
                <a href={item.href} className="block min-h-12 px-4 py-3 text-sm text-[var(--ink)]" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
