"use client";

import { useState } from "react";
import { site } from "@/content/content";

export function Guestbook() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // v1: 저장 없이 UI만 제공(추후 Google Form / Supabase 연동)
    setSent(true);
    setTimeout(() => setSent(false), 2500);
    setName("");
    setMsg("");
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <form
        onSubmit={onSubmit}
        className="rounded-xl border border-zinc-200 bg-white p-5"
      >
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-zinc-900" htmlFor="gb-name">
              닉네임
            </label>
            <input
              id="gb-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm outline-none ring-zinc-900/10 focus:ring"
              maxLength={40}
              placeholder="예: MJ"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-zinc-900" htmlFor="gb-msg">
              메시지 (200자 이내)
            </label>
            <textarea
              id="gb-msg"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className="mt-2 min-h-[120px] w-full resize-y rounded-lg border border-zinc-200 px-3 py-2 text-sm outline-none ring-zinc-900/10 focus:ring"
              maxLength={200}
              placeholder="응원 메시지를 남겨주세요"
              required
            />
            <div className="mt-1 text-xs text-zinc-500">{msg.length}/200</div>
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
          >
            응원 보내기
          </button>
          {sent ? (
            <p className="text-sm text-emerald-600">메시지가 전송되었습니다(데모).</p>
          ) : null}
        </div>
      </form>

      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
        <p className="text-sm font-medium text-zinc-950">안내</p>
        <p className="mt-2 text-sm text-zinc-700">{site.guestbook.note}</p>
        <p className="mt-4 text-xs text-zinc-500">
          v1에서는 메시지를 저장하지 않습니다. 원하시면 Google Form 링크로
          연결하거나, Supabase/Sheets 저장으로 확장할 수 있어요.
        </p>
      </div>
    </div>
  );
}
