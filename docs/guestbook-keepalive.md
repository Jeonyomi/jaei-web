# Guestbook Supabase Keepalive

## 목적

jaei-web의 방명록은 Supabase를 사용한다.
Supabase가 장시간 유휴 상태가 되면 pause/wake-up 지연이 발생할 수 있어,
하루 1회 가벼운 DB 접근으로 guestbook 테이블을 깨우는 keepalive 작업을 둔다.

## 방식

- 공개 endpoint: `/api/guestbook-keepalive`
- endpoint 동작:
  - `guestbook_messages` 테이블에 대해 최신 1건 조회
  - 데이터를 노출하지 않고 성공 여부만 반환
- 로컬 스크립트:
  - `scripts/jaei_guestbook_keepalive.ps1`
- 스케줄러:
  - Windows Task Scheduler에서 하루 1회 실행

## 장점

- 방명록에 더미 메시지를 남기지 않음
- 앱이 실제 사용하는 Supabase 연결 경로를 통해 상태를 확인함
- 실패 시 로컬 로그를 남겨 추적 가능

## 운영 메모

- 기본 URL은 `https://jaei-web.vercel.app/api/guestbook-keepalive`
- 실행 로그는 `.openclaw/logs/jaei-guestbook-keepalive.log`
- 필요하면 실행 시간을 조정할 수 있음
