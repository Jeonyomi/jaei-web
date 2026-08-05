"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { site } from "@/content/content";

export function Gallery() {
  return (
    <div className="space-y-6">
      <div>
        <p className="max-w-2xl break-keep text-base leading-8 text-[var(--muted)]">{site.gallery.note}</p>
      </div>

      <div className="relative">
        <div
          id="gallery-track"
          className="flex gap-4 overflow-x-auto scroll-smooth pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: "x mandatory" }}
          aria-label="재이 포토·영상 갤러리"
        >
          {site.gallery.images.map((item) => (
            <figure
              key={item.src}
              className="group w-[78%] shrink-0 sm:w-[44%] lg:w-[31%]"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-black">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    controls
                    preload="metadata"
                    playsInline
                    className="h-full w-full object-cover"
                    aria-label={item.alt}
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 44vw, 31vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                  />
                )}
              </div>
            </figure>
          ))}
        </div>

        <div className="mt-5 flex justify-start gap-2 sm:justify-end">
          <button
            type="button"
            className="gallery-control"
            aria-label="갤러리 이전"
            onClick={() => document.getElementById("gallery-track")?.scrollBy({ left: -420, behavior: "smooth" })}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="gallery-control"
            aria-label="갤러리 다음"
            onClick={() => document.getElementById("gallery-track")?.scrollBy({ left: 420, behavior: "smooth" })}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <p className="text-xs leading-5 text-[var(--muted-light)]">
        ※ 제작사·공식 출처의 이미지와 영상은 각 원저작자의 권리를 따릅니다.
      </p>
    </div>
  );
}
