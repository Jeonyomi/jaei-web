import Image from "next/image";
import { site } from "@/content/content";

export function Gallery() {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-zinc-200 bg-white p-5">
        <p className="text-sm text-zinc-600">{site.gallery.note}</p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {site.gallery.images.map((img) => (
          <div
            key={img.src}
            className="group overflow-hidden rounded-xl border border-zinc-200 bg-white"
          >
            <div className="relative aspect-[3/4]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-zinc-500">
        ※ 제작사/공식 소스 이미지·영상 사용 시, 저작권/사용 허가를 반드시
        확인해주세요.
      </p>
    </div>
  );
}
