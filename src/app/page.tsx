import { BgmPlayer } from "@/components/BgmPlayer";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Guestbook } from "@/components/Guestbook";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Journey } from "@/components/Journey";
import { ProfileIntro } from "@/components/ProfileIntro";
import { RecentActivity } from "@/components/RecentActivity";
import { Section } from "@/components/Section";
import { Stories } from "@/components/Stories";
import { site } from "@/content/content";

export default function Home() {
  return (
    <div className="min-h-dvh bg-[var(--paper)] text-[var(--ink)]">
      <BgmPlayer title="Jae-i on Stage BGM" />
      <Header />
      <Hero />
      <Highlights />

      <main>
        <Section id="about" title={site.profile.title} eyebrow="01 · ABOUT">
          <ProfileIntro />
        </Section>

        <Section id="activities" title="최근 활동" eyebrow="02 · RECENT" tone="soft">
          <RecentActivity />
        </Section>

        <Section id="journey" title={site.journey.title} eyebrow="03 · JOURNEY">
          <Journey />
        </Section>

        <Section id="stories" title={site.stories.title} eyebrow="04 · STORIES" tone="soft">
          <Stories />
        </Section>

        <Section id="gallery" title={site.gallery.title} eyebrow="05 · GALLERY">
          <Gallery />
        </Section>

        <Section id="guestbook" title={site.guestbook.title} eyebrow="06 · CHEER" tone="soft">
          <Guestbook />
        </Section>
      </main>

      <Footer />
    </div>
  );
}
