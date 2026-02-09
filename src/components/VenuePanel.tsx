import { site } from "@/content/content";

export function VenuePanel() {
  const q = encodeURIComponent(site.venue.mapQuery);
  const mapSrc = `https://www.google.com/maps?q=${q}&output=embed`;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
        <iframe
          title="공연장 지도"
          src={mapSrc}
          className="h-[320px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="rounded-xl border border-zinc-200 bg-white p-5">
        <h3 className="text-base font-semibold text-zinc-950">{site.venue.name}</h3>
        <div className="mt-3 space-y-2 text-sm text-zinc-700">
          <p>
            <span className="font-medium">주소:</span> {site.venue.address}
          </p>
          <p>
            <span className="font-medium">지하철:</span> {site.venue.subway}
          </p>
          <p>
            <span className="font-medium">객석:</span> {site.venue.seat}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {site.venue.ctas.map((c) => (
            <a
              key={c.href}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
            >
              {c.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
