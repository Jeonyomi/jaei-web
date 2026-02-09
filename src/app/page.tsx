import { site } from "@/content/content";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Guestbook } from "@/components/Guestbook";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { InfoTable } from "@/components/InfoTable";
import { Section } from "@/components/Section";
import { TicketPanel } from "@/components/TicketPanel";
import { VenuePanel } from "@/components/VenuePanel";

export default function Home() {
  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-950">
      <Header />
      <Hero />
      <Highlights />

      <main>
        <Section id="performance" title={site.performance.title}>
          <InfoTable rows={site.performance.rows} />
          <p className="mt-4 text-xs text-zinc-500">
            출처: 신시컴퍼니 공지(프리뷰/1차 티켓 오픈 안내)
          </p>
        </Section>

        <Section id="about" title={site.about.title}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-700">
                {site.about.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <p className="text-sm font-semibold text-zinc-950">크레딧(요약)</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                {site.about.credits.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-zinc-500">
                ※ 위 내용은 제작사 소개 문구를 바탕으로 요약했습니다.
              </p>
            </div>
          </div>
        </Section>

        <Section id="tickets" title={site.tickets.title}>
          <TicketPanel />
        </Section>

        <Section id="venue" title={site.venue.title}>
          <VenuePanel />
        </Section>

        <Section id="gallery" title={site.gallery.title}>
          <Gallery />
        </Section>

        <Section id="guestbook" title={site.guestbook.title}>
          <Guestbook />
        </Section>
      </main>

      <Footer />
    </div>
  );
}
