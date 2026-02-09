"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

import { site } from "@/content/content";

export function Gallery() {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-zinc-200 bg-white p-5">
        <p className="text-sm text-zinc-600">{site.gallery.note}</p>
      </div>

      <div className="relative">
        <div
          id="gallery-track"
          className="flex gap-3 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: "x mandatory" }}
          aria-label="포토/영상 갤러리"
        >
          {/* Video/playlist card (link-out to official playlist) */}
          <a
            href="https://www.youtube.com/playlist?list=PLWb9aB-BHnIUdhzyzvuZh7D45cvnckTlc"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-[78%] shrink-0 overflow-hidden rounded-xl border border-zinc-200 bg-white sm:w-[42%]"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="relative aspect-[16/9] bg-zinc-950/5">
              <div className="absolute inset-0 grid place-items-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white">
                  <Play className="h-4 w-4" />
                  YouTube Playlist
                </span>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm font-semibold text-zinc-950">
                2026 뮤지컬 빌리 엘리어트
              </p>
              <p className="mt-1 text-sm text-zinc-600">
                공식 영상은 플레이리스트에서 확인하세요.
              </p>
            </div>
          </a>

          {site.gallery.images.map((img) => (
            <div
              key={img.src}
              className="group relative w-[62%] shrink-0 overflow-hidden rounded-xl border border-zinc-200 bg-white sm:w-[30%]"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 70vw, 30vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Desktop controls */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden items-center md:flex">
          <button
            type="button"
            className="pointer-events-auto ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white/90 shadow-sm hover:bg-white"
            aria-label="갤러리 이전"
            onClick={() => {
              const el = document.getElementById("gallery-track");
              if (!el) return;
              el.scrollBy({ left: -420, behavior: "smooth" });
            }}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden items-center md:flex">
          <button
            type="button"
            className="pointer-events-auto mr-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white/90 shadow-sm hover:bg-white"
            aria-label="갤러리 다음"
            onClick={() => {
              const el = document.getElementById("gallery-track");
              if (!el) return;
              el.scrollBy({ left: 420, behavior: "smooth" });
            }}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <p className="text-xs text-zinc-500">
        ※ 제작사/공식 소스 이미지·영상 사용 시, 저작권/사용 허가를 반드시
        확인해주세요.
      </p>
    </div>
  );
}
