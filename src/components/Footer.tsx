import { ArrowUpRight, Instagram } from "lucide-react";

import { site } from "@/content/content";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[var(--ink)] text-white">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1fr_auto] md:items-end lg:px-10">
        <div>
          <p className="text-2xl font-medium tracking-[-0.045em]">Jae-i on Stage</p>
          <p className="mt-4 max-w-2xl break-keep text-sm leading-7 text-white/55">{site.footer.disclaimer}</p>
          <p className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} {site.title}. All rights reserved.</p>
        </div>
        <a
          href={site.profile.instagram.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 border-b border-white/30 pb-2 text-sm text-white transition-colors hover:border-white"
        >
          <Instagram className="h-4 w-4" aria-hidden="true" />
          @j_on_stage
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
