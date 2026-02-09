import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseServer";

const TABLE = "guestbook_messages";

function jsonError(message: string, status: number) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonError("Invalid JSON", 400);
  }

  const name = (body as any)?.name;
  const message = (body as any)?.message;

  if (typeof name !== "string" || typeof message !== "string") {
    return jsonError("Invalid payload", 400);
  }

  const trimmedName = name.trim();
  const trimmedMessage = message.trim();

  if (trimmedName.length < 1 || trimmedName.length > 40) {
    return jsonError("Name must be 1~40 chars", 400);
  }
  if (trimmedMessage.length < 1 || trimmedMessage.length > 200) {
    return jsonError("Message must be 1~200 chars", 400);
  }

  // Basic anti-abuse: deny obvious links (can be relaxed later)
  if (/https?:\/\//i.test(trimmedMessage)) {
    return jsonError("Links are not allowed", 400);
  }

  const supabase = getSupabaseAdmin();

  const { error } = await supabase.from(TABLE).insert({
    name: trimmedName,
    message: trimmedMessage,
    // created_at handled by DB default
  });

  if (error) {
    return jsonError(error.message, 500);
  }

  return NextResponse.json({ ok: true });
}

export async function GET(req: Request) {
  const adminToken = process.env.ADMIN_TOKEN;
  if (!adminToken) {
    return jsonError("ADMIN_TOKEN not configured", 500);
  }

  const token = req.headers.get("x-admin-token") || "";
  if (token !== adminToken) {
    return jsonError("Unauthorized", 401);
  }

  const url = new URL(req.url);
  const limit = Math.min(
    200,
    Math.max(1, Number(url.searchParams.get("limit") || "50"))
  );

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from(TABLE)
    .select("id,name,message,created_at")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    return jsonError(error.message, 500);
  }

  return NextResponse.json({ ok: true, data });
}
