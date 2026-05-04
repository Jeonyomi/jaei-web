"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { site } from "@/content/content";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function Header() {
  const [open, setOpen] = useState(false);
  const nav = useMemo(() => site.nav, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-5 py-3">
        <Link
          href="#top"
          className="text-sm font-semibold tracking-[-0.02em] text-zinc-950"
          aria-label={`${site.title} 홈으로`}
          onClick={() => setOpen(false)}
        >
          {site.title}
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="메인 메뉴">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-zinc-600 transition-colors hover:text-zinc-950">
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="button-secondary !px-3 !py-2 md:hidden"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          메뉴
        </button>
      </div>

      <div className={cx("md:hidden", open && "border-t border-black/8")}>
        {open ? (
          <nav className="mx-auto w-full max-w-5xl px-5 py-3" aria-label="모바일 메뉴">
            <ul className="surface-card flex flex-col gap-1 p-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm text-zinc-700 transition-colors hover:bg-zinc-50"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
