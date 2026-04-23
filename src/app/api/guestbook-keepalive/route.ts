import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseServer";
import {
  isLikelyTransientSupabaseError,
  retrySupabaseOperation,
} from "@/lib/supabaseResilience";

const TABLE = "guestbook_messages";

export async function GET() {
  const supabase = getSupabaseAdmin();

  try {
    const data = await retrySupabaseOperation(async () => {
      const { data, error } = await supabase
        .from(TABLE)
        .select("id,created_at", { count: "exact" })
        .order("created_at", { ascending: false })
        .limit(1);

      if (error) throw error;
      return data ?? [];
    });

    return NextResponse.json(
      {
        ok: true,
        touchedTable: TABLE,
        latestRowCountSample: data.length,
        timestamp: new Date().toISOString(),
      },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error ?? "unknown error");
    return NextResponse.json(
      {
        ok: false,
        error: isLikelyTransientSupabaseError(error)
          ? "Supabase guestbook keepalive failed temporarily. Retry later."
          : "Supabase guestbook keepalive failed.",
        detail: message,
      },
      { status: 503 }
    );
  }
}
