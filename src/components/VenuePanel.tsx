import { site } from "@/content/content";

export function VenuePanel() {
  const q = encodeURIComponent(site.venue.mapQuery);
  const mapSrc = `https://www.google.com/maps?q=${q}&output=embed`;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="surface-card overflow-hidden">
        <iframe
          title="공연장 지도"
          src={mapSrc}
          className="h-[320px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="surface-card p-5">
        <p className="section-kicker">Venue</p>
        <h3 className="mt-2 text-base font-semibold tracking-[-0.02em] text-zinc-950">{site.venue.name}</h3>
        <div className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
          <p>
            <span className="font-medium text-zinc-950">주소:</span> {site.venue.address}
          </p>
          <p>
            <span className="font-medium text-zinc-950">지하철:</span> {site.venue.subway}
          </p>
          <p>
            <span className="font-medium text-zinc-950">객석:</span> {site.venue.seat}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {site.venue.ctas.map((c) => (
            <a
              key={c.href}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              {c.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
