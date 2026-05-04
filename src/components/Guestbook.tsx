"use client";

import { useState } from "react";
import { site } from "@/content/content";

type GuestbookApiResponse = {
  ok?: boolean;
  error?: string;
  retryable?: boolean;
};

export function Guestbook() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSent(null);
    setSending(true);

    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, message: msg }),
      });

      const json = (await res.json().catch(() => null)) as GuestbookApiResponse | null;
      if (!res.ok || !json?.ok) {
        if (json?.retryable) {
          throw new Error(json.error || "방명록 저장이 잠시 지연되고 있어요. 잠시 후 다시 시도해 주세요.");
        }
        throw new Error(json?.error || `HTTP ${res.status}`);
      }

      setSent("응원 메시지가 저장되었습니다. 감사합니다!");
      setName("");
      setMsg("");
    } catch (err) {
      const message = (err as Error).message;
      if (message.includes("잠시") || message.includes("지연")) {
        setSent(message);
      } else {
        setSent(`저장 실패: ${message}`);
      }
    } finally {
      setSending(false);
      setTimeout(() => setSent(null), 3500);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <form onSubmit={onSubmit} className="surface-card p-5">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-zinc-900" htmlFor="gb-name">
              닉네임
            </label>
            <input
              id="gb-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-lg bg-white px-3 py-2 text-sm text-zinc-900 shadow-[rgba(0,0,0,0.08)_0px_0px_0px_1px] outline-none ring-blue-300/50 focus:ring"
              maxLength={40}
              placeholder="예: MJ"
              required
              disabled={sending}
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
              className="mt-2 min-h-[120px] w-full resize-y rounded-lg bg-white px-3 py-2 text-sm text-zinc-900 shadow-[rgba(0,0,0,0.08)_0px_0px_0px_1px] outline-none ring-blue-300/50 focus:ring"
              maxLength={200}
              placeholder="응원 메시지를 남겨주세요"
              required
              disabled={sending}
            />
            <div className="mt-1 text-xs text-zinc-500">{msg.length}/200</div>
          </div>
          <button type="submit" disabled={sending} className="button-primary w-full disabled:opacity-50">
            {sending ? "저장 중…" : "응원 보내기"}
          </button>
          {sent ? (
            <p className={sent.startsWith("저장 실패") ? "text-sm text-red-600" : "text-sm text-emerald-600"}>
              {sent}
            </p>
          ) : null}
        </div>
      </form>

      <div className="surface-tint p-5">
        <p className="section-kicker">Guide</p>
        <p className="mt-2 text-sm font-medium text-zinc-950">안내</p>
        <p className="mt-2 text-sm leading-6 text-zinc-700">{site.guestbook.note}</p>
        <p className="mt-4 text-xs text-zinc-500">메시지는 저장되며, 공개 페이지에는 표시되지 않습니다.</p>
      </div>
    </div>
  );
}
