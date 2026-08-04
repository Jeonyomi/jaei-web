import { site } from "@/content/content";

export function Highlights() {
  return (
    <section className="border-b border-black/10 bg-[var(--ink)] text-white" aria-label="재이 활동 요약">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 px-5 sm:px-8 md:grid-cols-[1.1fr_repeat(3,1fr)] lg:px-10">
        <div className="flex items-center border-white/15 py-7 md:border-r md:pr-7">
          <p className="max-w-xs text-sm leading-6 text-white/65">
            한 번의 데뷔가 아니라,
            <br />계속 이어질 성장의 기록.
          </p>
        </div>
        {site.highlights.map((item) => (
          <div key={item.label} className="border-t border-white/15 py-7 md:border-l md:border-t-0 md:px-7">
            <p className="text-[10px] font-medium tracking-[0.18em] text-white/50">{item.label}</p>
            <p className="mt-3 text-lg font-medium tracking-[-0.03em] text-white">{item.value}</p>
            <p className="mt-1 text-xs leading-5 text-white/55">{item.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
