import { site } from "@/content/content";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Guestbook } from "@/components/Guestbook";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { InfoTable } from "@/components/InfoTable";
import { OfficialLinks } from "@/components/OfficialLinks";
import { Section } from "@/components/Section";
import { BgmPlayer } from "@/components/BgmPlayer";
import { TicketPanel } from "@/components/TicketPanel";
import { VenuePanel } from "@/components/VenuePanel";

export default function Home() {
  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-950">
      <BgmPlayer />
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
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="md:col-span-2">
              <TicketPanel />
            </div>
            <div className="md:col-span-1">
              <OfficialLinks />
            </div>
          </div>
        </Section>

        <Section id="venue" title={site.venue.title}>
          <VenuePanel />
        </Section>

        <Section id="gallery" title={site.gallery.title}>
          <Gallery />
        </Section>

        <Section id="awards" title={site.awards.title}>
          <div className="rounded-2xl border border-zinc-200 bg-white p-4 sm:p-6">
            <ul className="space-y-3 sm:space-y-4">
              {site.awards.items.map((item) => (
                <li
                  key={`${item.year}-${item.event}-${item.result}`}
                  className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 sm:p-5"
                >
                  <p className="text-sm leading-7 break-keep text-zinc-800 sm:text-[15px]">
                    <span className="font-semibold text-zinc-950">{item.year}</span>
                    <span className="text-zinc-400"> · </span>
                    <span className="font-semibold text-zinc-950">{item.event}</span>
                    <span className="text-zinc-400"> · </span>
                    <span>{item.venue}</span>
                    <span className="text-zinc-400"> · </span>
                    <span className="text-zinc-700">{item.piece}</span>
                    <span className="text-zinc-400"> · </span>
                    <span className="font-semibold text-zinc-700">{item.result}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="guestbook" title={site.guestbook.title}>
          <Guestbook />
        </Section>
      </main>

      <Footer />
    </div>
  );
}
