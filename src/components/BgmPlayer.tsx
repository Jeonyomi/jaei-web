"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src?: string;
  title?: string;
};

const DEFAULT_SRC = "/bgm/stage-ambient.mp3";

export function BgmPlayer({ src = DEFAULT_SRC, title = "BGM" }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [vol, setVol] = useState(0.25);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const savedVol = Number(localStorage.getItem("bgm_vol") || "0.25");
    const v = Number.isFinite(savedVol) ? Math.min(1, Math.max(0, savedVol)) : 0.25;
    setVol(v);
  }, []);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = vol;
    localStorage.setItem("bgm_vol", String(vol));
  }, [vol]);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;

    try {
      if (a.paused) {
        await a.play();
        setPlaying(true);
      } else {
        a.pause();
        setPlaying(false);
      }
    } catch {
      // Autoplay restrictions or missing asset
      setPlaying(false);
      setOpen(true);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[60]">
      <audio
        ref={audioRef}
        src={src}
        loop
        preload="none"
        onCanPlay={() => setReady(true)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <div className="flex flex-col items-end gap-2">
        {open ? (
          <div className="w-[260px] rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-zinc-950">{title}</p>
              <button
                type="button"
                className="text-xs text-zinc-500 hover:text-zinc-900"
                onClick={() => setOpen(false)}
                aria-label="BGM 패널 닫기"
              >
                닫기
              </button>
            </div>
            <p className="mt-2 text-xs text-zinc-600">
              브라우저 정책상 자동 재생은 막혀 있어요. 버튼으로 재생을 시작해 주세요.
              (파일이 없으면 재생되지 않습니다.)
            </p>
            <label className="mt-3 block text-xs font-medium text-zinc-700">
              볼륨: {(vol * 100).toFixed(0)}%
            </label>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={vol}
              onChange={(e) => setVol(Number(e.target.value))}
              className="mt-2 w-full"
            />
            <div className="mt-3 flex gap-2">
              <button
                type="button"
                onClick={toggle}
                className="inline-flex flex-1 items-center justify-center rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
              >
                {playing ? "일시정지" : "재생"}
              </button>
              <button
                type="button"
                onClick={() => {
                  const a = audioRef.current;
                  if (!a) return;
                  a.pause();
                  a.currentTime = 0;
                  setPlaying(false);
                }}
                className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              >
                정지
              </button>
            </div>
          </div>
        ) : null}

        <button
          type="button"
          onClick={() => {
            // First click opens panel (discoverability), subsequent can toggle
            if (!open) setOpen(true);
            else void toggle();
          }}
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50"
          aria-label={playing ? "BGM 일시정지" : "BGM 재생"}
        >
          <span className="inline-block h-2 w-2 rounded-full" style={{ background: playing ? "#22c55e" : "#a1a1aa" }} />
          {ready ? (playing ? "BGM On" : "BGM Off") : "BGM"}
        </button>
      </div>
    </div>
  );
}
