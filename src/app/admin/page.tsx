import AdminGuestbook from "./ui";

export const metadata = {
  title: "Admin",
};

export default function AdminPage() {
  return (
    <div className="min-h-dvh bg-zinc-50">
      <div className="mx-auto w-full max-w-5xl px-5 py-10">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-950">
          Admin — Guestbook
        </h1>
        <p className="mt-2 text-sm text-zinc-600">
          관리자 토큰으로 응원 메시지를 조회합니다.
        </p>
        <div className="mt-6">
          <AdminGuestbook />
        </div>
      </div>
    </div>
  );
}
