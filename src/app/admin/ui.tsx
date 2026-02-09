"use client";

import { useEffect, useMemo, useState } from "react";

type Row = {
  id: string;
  name: string;
  message: string;
  created_at: string;
};

function fmt(ts: string) {
  try {
    const d = new Date(ts);
    return new Intl.DateTimeFormat("ko-KR", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(d);
  } catch {
    return ts;
  }
}

export default function AdminGuestbook() {
  const [token, setToken] = useState("");
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canLoad = useMemo(() => token.trim().length > 0, [token]);

  useEffect(() => {
    const saved = sessionStorage.getItem("ADMIN_TOKEN") || "";
    if (saved) setToken(saved);
  }, []);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      sessionStorage.setItem("ADMIN_TOKEN", token);
      const res = await fetch("/api/guestbook?limit=100", {
        headers: {
          "x-admin-token": token,
        },
      });
      const json = await res.json();
      if (!res.ok || !json?.ok) {
        throw new Error(json?.error || `HTTP ${res.status}`);
      }
      setRows(json.data as Row[]);
    } catch (e) {
      setError((e as Error).message);
      setRows([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-zinc-200 bg-white p-5">
        <label className="text-sm font-medium text-zinc-900" htmlFor="token">
          ADMIN_TOKEN
        </label>
        <div className="mt-2 flex flex-col gap-2 sm:flex-row">
          <input
            id="token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm outline-none ring-zinc-900/10 focus:ring"
            placeholder="관리자 토큰 입력"
            autoComplete="off"
          />
          <button
            type="button"
            onClick={load}
            disabled={!canLoad || loading}
            className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-2 text-sm font-medium text-white disabled:opacity-50"
          >
            {loading ? "불러오는 중…" : "불러오기"}
          </button>
        </div>
        {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}
      </div>

      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
        <div className="border-b border-zinc-200 px-4 py-3">
          <p className="text-sm font-medium text-zinc-950">
            메시지 ({rows.length})
          </p>
        </div>
        {rows.length === 0 ? (
          <div className="px-4 py-10 text-sm text-zinc-600">
            데이터가 없습니다.
          </div>
        ) : (
          <ul className="divide-y divide-zinc-200">
            {rows.map((r) => (
              <li key={r.id} className="px-4 py-4">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm font-semibold text-zinc-950">{r.name}</p>
                  <p className="text-xs text-zinc-500">{fmt(r.created_at)}</p>
                </div>
                <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-zinc-700">
                  {r.message}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="text-xs text-zinc-500">
        주의: 토큰은 브라우저 sessionStorage에 임시 저장됩니다.
      </p>
    </div>
  );
}
