import { site } from "@/content/content";

export function Footer() {
  return (
    <footer className="border-t border-black/8 bg-white/92">
      <div className="mx-auto w-full max-w-5xl px-5 py-10">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold tracking-[-0.02em] text-zinc-950">{site.title}</p>
          <p className="max-w-3xl text-sm leading-6 text-zinc-600">{site.footer.disclaimer}</p>
          <p className="pt-4 text-xs text-zinc-500">© {new Date().getFullYear()} {site.title}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
