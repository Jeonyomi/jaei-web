# Jae-i on Stage — Design System

## 1. Direction

`jaei-web` is a personal activity archive, not a single-production landing page. The primary surface is **Explore** with a secondary **Learn** posture: visitors should discover Jae-i first, then browse recent work, chronology, stories, and images.

The visual language is an editorial stage journal:

- warm paper instead of clinical white
- near-black ink with one restrained curtain-red accent
- large, tightly tracked type paired with real photography
- square or subtly rounded surfaces rather than soft SaaS cards
- asymmetric image/copy compositions
- clear section numbering and factual metadata

## 2. Tokens

| Role | Value |
|---|---|
| Paper | `#f7f4ed` |
| Soft paper | `#eee9df` |
| Ink | `#201d1a` |
| Muted text | `#655f59` |
| Light muted | `#8a837b` |
| Accent | `#c78372` |
| Accent strong | `#8f3f32` |
| Hairline | `rgba(32, 29, 26, 0.12)` |

Typography uses Geist Sans and Geist Mono from the existing Next.js stack. Display headings use medium weight, tight tracking, and scale for hierarchy. Mono is limited to section labels and metadata.

## 3. Composition

### Hero

- Split editorial composition on desktop: identity/copy at left, full-height portrait at right.
- Stacks to copy then portrait below 1024px.
- The headline identifies the page as Jae-i’s stage and activity record.
- Primary navigation points to recent activity and the full journey.

### Archive strip

A dark horizontal information band follows the hero. It summarizes the archive without metric-card styling: `2020 → NOW`, musical debut, and activity fields.

### Sections

Sections alternate paper and soft-paper backgrounds and use numbered eyebrows:

1. About
2. Recent activity
3. Journey
4. Stories
5. Gallery
6. Cheer

Each section has one dominant idea and avoids equal-weight feature grids.

### Recent activity

The latest confirmed activity gets one asymmetric editorial feature. Historical logistics such as ticket prices and venue directions are not primary homepage content once an event has ended.

### Journey

Chronological records are grouped by year with border-separated rows. New featured work is prepended to `site.activities`, while its dated record is added to `site.journey.items`; the components select the featured activity and group the timeline automatically.

### Stories and gallery

Stories use one featured editorial panel plus a compact source list. The gallery prioritizes Jae-i’s portraits before production imagery and does not place decorative text or numbering around the media.

## 4. Interaction and accessibility

- Interactive targets are at least 44px high or wide.
- External links use `target="_blank"` with `rel="noopener noreferrer"`.
- All images and video have descriptive Korean alternative labels.
- Focus rings use the strong accent color.
- Motion is limited to subtle hover movement and image scale.
- `prefers-reduced-motion` disables nonessential transitions and smooth scrolling.
- Navigation remains keyboard accessible; Escape closes the mobile menu.

## 5. Content rules

- Jae-i remains the top-level subject.
- Productions belong under **Recent activity** or **Journey**, not in the site identity.
- Do not publish private biographical details such as birth date, school, home area, or private schedule.
- Add only officially confirmed activities and public source links.
- Describe awards, roles, dates, and venues exactly as supported by official programs or public reporting.
- New work is added in the content model rather than by redesigning the page.
- Copyright and source ownership remain visible in gallery and footer notices.

## 6. Anti-slop check

The design intentionally avoids:

- blue/violet tech gradients
- generic icon feature grids
- fake statistics
- glassmorphism
- oversized rounded SaaS cards
- centered copy stacks throughout the page
- decorative animation without information value

The target is a calm, durable archive that can keep growing with Jae-i’s future work.
